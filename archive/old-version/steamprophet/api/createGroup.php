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
		$groupName = $_POST['name'];
		$webname = db_quote(strtolower(str_replace(' ', '-', $groupName)));
		$groupName = db_quote($groupName);

		if (db_insert('groups (name, webname, admin_id)', "({$groupName}, {$webname}, {$id})")){
			$groupId = db_select('id', 'groups', "webname={$webname}", 1)['id'];
			
			db_insert('group_members (group_id, user_id)', "({$groupId}, {$id})");

			$response->success = true;
			$response->groupId = $groupId;
			$response->error = db_error();
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