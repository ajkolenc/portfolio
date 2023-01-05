<?php
	include('database.php');

	$pass = "Breaksmyheart1";
	$hash =  password_hash($pass, PASSWORD_DEFAULT);

	echo $hash;
	echo "<br/>";
	if (password_verify("{$pass}", $hash)){
		echo "Verified";
	}
	else {
		echo "NOT Verified";
	}
?>