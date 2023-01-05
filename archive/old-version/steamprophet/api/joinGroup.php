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
		$groupId = db_quote($_POST['groupId']);

		if (db_insert('group_members (group_id, user_id)', "({$groupId}, {$id})")){
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