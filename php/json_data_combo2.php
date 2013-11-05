<?php 

// $arrayName = array(
// 	'Leroy' => 'Herve',
// 	'Hamon' => 'Julie',
// );
// echo json_encode($arrayName);

$data = array(
	array('id' => 1, 'name' => 'Alexandre', 'position' => 'Student'),
	array('id' => 2, 'name' => 'Gaspard', 'position' => 'Manager'),
	array('id' => 3, 'name' => 'Mathieu', 'position' => 'Director'),
	array('id' => 4, 'name' => 'Herve', 'position' => 'Student'),
);
echo json_encode($data);

?>