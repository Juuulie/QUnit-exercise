<?php 

$name = $_GET['name'];

if($name === 'antonio'){
	echo json_encode(array('surname' => $name));
}else{
	//http_response_code(500);
	header("HTTP/1.0 404 Not Found");
}

?>