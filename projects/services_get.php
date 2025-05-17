<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");


$con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

$sql = "SELECT * FROM `services_data`";
$qry = mysqli_query($con, $sql);

$response = array();
while ($row = mysqli_fetch_assoc($qry)) {

    $response[] = $row;
}

echo json_encode($response);

?>