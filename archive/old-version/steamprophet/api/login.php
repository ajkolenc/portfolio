<?php
	include('jwt_helper.php');
	include('database.php');	

	$response = new stdClass();
	$response->success = false;
	$response->error = '';

	$email = db_quote($_POST["email"]);
	$pass = $_POST["password"];

	$user = db_select('id, password, isAdmin', 'users', 'email=' . $email, 1);

	if ($user){
		if (password_verify($pass, $user['password'])){
			$response->success = true;
			$token = array();
			$token['user_id'] = $user['id'];
			$token['isAdmin'] = $user['isAdmin'];

	        $config = parse_ini_file('./config.ini'); 

			$response->token = JWT::encode($token, $config['app-secret']);
		}
		else {
			$response->error = 'Incorrect password';
		}
	}
	else {
		$response->error = 'No such user.';
	}

	echo json_encode($response);
?>