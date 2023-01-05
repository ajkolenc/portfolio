<?php
	include('jwt_helper.php');
	include('database.php');

	$response = new stdClass();
	$response->success = false;
	$response->error = '';

    $config = parse_ini_file('./config.ini'); 
	$token = JWT::decode($_POST['token'], $config["app-secret"]);
	
	if (property_exists($token, 'user_id')){
		$id = $token->user_id;
	}

	if ($id){
		$games = $_POST['games'];
		$primary = db_quote($_POST['primaryGame']);
		$values = "";

		for ($i = 0; $i < count($games); $i++){
			$gameId = db_quote($games[$i]);			
			if ($gameId == $primary){
				$values .= "({$gameId}, {$id}, 1),";
			}
			else {
				$values .= "({$gameId}, {$id}, 0),";
			}
		}
		$values = rtrim($values, ',');

		if (db_insert('game_guesses (game_id, user_id, isPrimary)', $values)){
			$response->success = true;
		}
		else {
			$response->error = db_error();
		}
	}
	else {
		$response->error = 'Access denied.';
	}
	echo json_encode($response);
?>