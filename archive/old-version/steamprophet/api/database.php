<?php
	function db_connect() {

	    // Define connection as a static variable, to avoid connecting more than once 
	    static $connection;

	    // Try and connect to the database, if a connection has not been established yet
	    if(!isset($connection)) {
	         // Load configuration as an array. Use the actual location of your configuration file
	        $config = parse_ini_file('./config.ini'); 
	        $connection = mysqli_connect($config['server'],$config['username'],$config['password'],$config['dbname']);
	    }

	    // If connection was not successful, handle the error
	    if($connection === false) {
	        // Handle error - notify administrator, log to a file, show an error screen, etc.
	        return mysqli_connect_error(); 
	    }
	    return $connection;
	}

	function db_query($query) {
	    // Connect to the database
	    $connection = db_connect();

	    // Query the database
	    $result = mysqli_query($connection,$query);

	    return $result;
	}

	function db_update($table, $columns, $conditions) {
		$query = "UPDATE {$table} SET {$columns} WHERE {$conditions}";
	    $result = db_query($query);

	    // If query failed, return `false`
	    if($result === false) {
	        return false;
	    }
	    else {
	    	return true;
	    }
	}

	function db_select($field, $table, $conditions, $limit = -1) {
		$query = "SELECT {$field} FROM {$table} WHERE {$conditions}";
		if ($limit >= 0){
			$query .= " LIMIT {$limit}";
		}
	    $result = db_query($query);

	    // If query failed, return `false`
	    if($result === false) {
	        return false;
	    }

	    $rows = array();

	    // If query was successful, retrieve all the rows into an array
	    while ($row = mysqli_fetch_assoc($result)) {
	        $rows[] = $row;
	    }
	    if ($limit === 1 && count($rows) === 1){
	    	$rows = $rows[0];
	    }
	    return $rows;
	}

	function db_select_query($query) {
	    $result = db_query($query);

	    // If query failed, return `false`
	    if($result === false) {
	        return false;
	    }

	    $rows = array();

	    // If query was successful, retrieve all the rows into an array
	    while ($row = mysqli_fetch_assoc($result)) {
	        $rows[] = $row;
	    }
	    return $rows;
	}

	function db_insert($into, $values){
		$query = "INSERT INTO {$into} VALUES {$values}";
		return db_query($query);
	}

	function db_quote($value) {
	    $connection = db_connect();
	    return "'" . mysqli_real_escape_string($connection,$value) . "'";
	}

	function db_escape($value){
	    $connection = db_connect();
	    return mysqli_real_escape_string($connection,$value);		
	}

	function db_error() {
	    $connection = db_connect();
	    return mysqli_error($connection);
	}
?>