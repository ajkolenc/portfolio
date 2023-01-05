<?php
	include('database.php');

	$response = new stdClass();
	$response->success = false;
	$response->error = '';

	$email = db_quote($_POST["email"]);
	$hash = db_quote(password_hash($_POST["password"], PASSWORD_DEFAULT));
	$name = db_quote(substr($_POST["email"], 0, stripos($_POST["email"], '@')));

	$result = db_insert('users (email, password, name)', "({$email}, {$hash}, {$name})");

	if ($result){
		$response->success = true;
	}
	else {
		$response->error = 'Could not create user.';
	}

	echo json_encode($response);
?>