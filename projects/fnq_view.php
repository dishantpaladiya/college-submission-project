<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$con = mysqli_connect('localhost', 'root', '', 'project');

if (!$con) {
    die(json_encode(['status' => 'no', 'error' => 'Database Connection Failed...']));
}

mysqli_set_charset($con, "utf8mb4");

$sql = "SELECT * FROM `fnq`";
$qry = mysqli_query($con, $sql);

$response = array();
while ($row = mysqli_fetch_assoc($qry)) {
    $response[] = $row;
}

echo json_encode($response);
mysqli_close($con);
?>
