<?php
	include('jwt_helper.php');
	include('database.php');

	$response = new stdClass();
	$response->success = false;
	$response->error = '';

    $config = parse_ini_file('./config.ini'); 
	$token = JWT::decode($_POST['token'], $config["app-secret"]);

	if (property_exists($token, 'isAdmin') && $token->isAdmin > 0){
		$gameName = db_quote($_POST['name']);
		$gameLink = db_quote($_POST['link']);
		$week = $_POST['week'];
		switch ($week){
			case 0:
				$week = strtotime("Sunday");
				break;
			case 1:
				$lastWeek = strtotime("Sunday +1 week");
				break;
		}
		$week = db_quote(date("Y-m-d", $week));
		if (db_insert('games (name, steam_link, release_week)', "({$gameName}, {$gameLink}, {$week})")){
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