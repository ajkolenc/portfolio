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
		$field = db_escape($_POST['field']);
		if ($field == "password"){
			$value = db_quote(password_hash($_POST['value'], PASSWORD_DEFAULT));
		}
		else {
			$value = db_quote($_POST['value']);
		}

		if (db_update('users', "{$field}={$value}", "id={$id}")){
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