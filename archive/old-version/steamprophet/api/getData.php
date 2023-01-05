<?php
	include('jwt_helper.php');
	include('database.php');

	$response = new stdClass();
	$response->success = false;
	$response->error = '';
	$response->data = new stdClass();

    $config = parse_ini_file('./config.ini'); 
	$token = JWT::decode($_POST['token'], $config["app-secret"]);
	if (property_exists($token, 'user_id')){
		$id = $token->user_id;
	}

	if ($id){
		$dataType = $_POST['dataType'];

		switch ($dataType){
			case 'user':
				$response->data->user = db_select('id, email, name, isAdmin', 'users', "id={$id}", 1);

				$response->data->user['groups'] = db_select_query("
					SELECT groups.name, groups.webname
					FROM ((group_members 
						INNER JOIN groups ON groups.id=group_members.group_id) 
						INNER JOIN users ON users.id=group_members.user_id) 
					WHERE users.id={$id}");

				if (!$response->data->user['groups']){
					$response->data->user['groups'] = [];
				}
				$response->success = true;
				break;

			case 'group':				
				$webname = db_quote($_POST["webname"]);
				$lastWeek = db_quote(date('Y-m-d', strtotime("Sunday -5 weeks")));

				$response->data->group = db_select('*', 'groups', "webname={$webname}", 1);

				$groupId = $response->data->group["id"];

				$response->data->group['members'] = db_select_query("
					SELECT users.id, users.name, group_members.total_score 
					FROM ((group_members 
						INNER JOIN groups ON groups.id=group_members.group_id) 
						INNER JOIN users ON users.id=group_members.user_id) 
					WHERE groups.id={$groupId}");

				$memberGuesses = db_select_query("
					SELECT game_guesses.user_id, game_guesses.isPrimary, games.id, games.name, games.min_players, games.min_price 
					FROM (game_guesses 
						INNER JOIN games ON games.id=game_guesses.game_id)
					WHERE games.release_week={$lastWeek}");

				for ($i = 0; $i < count($memberGuesses); $i++){
					$guess = $memberGuesses[$i];
					for ($j = 0; $j < count($response->data->group['members']); $j++){
						$member = $response->data->group['members'][$j];
						if ($guess['user_id'] == $member['id']){
							if (!isset($member['guesses'])){
								$member['guesses'] = [];
							}							
							if (!isset($member['weekly_score'])){
								$member['weekly_score'] = 0;
							}

							array_push($member['guesses'], $guess);
							$member['weekly_score'] = $member['weekly_score'] + $guess['min_players'] * $guess['min_price'] * ($guess['isPrimary'] + 1);

							$response->data->group['members'][$j] = $member;
						}
					}
				}

				$response->success = true;
				break;

			case 'games':
				$week = db_quote(date("Y-m-d", strtotime('Sunday')));
				$response->data->games = db_select_query("
					SELECT games.id, games.name, games.steam_link, game_guesses.isPrimary
					FROM (games 
						LEFT JOIN game_guesses ON games.id=game_guesses.game_id AND game_guesses.user_id={$id})
					WHERE games.release_week={$week}");
				$response->success = true;
				break;				
		}
	}
	else {
		$response->error = 'Access denied.';
	}
	echo json_encode($response);
?>