<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

$email = $_POST['email'];
$password = $_POST['password'];

$response = array();

// Check if email already exists
$check_sql = "SELECT * FROM `login_data` WHERE `email` = '$email'";
$check_res = mysqli_query($con, $check_sql);

if (mysqli_num_rows($check_res) > 0) {
    $response['status'] = "exists";
} else {
    $insert_sql = "INSERT INTO `login_data` (`email`, `password`) VALUES ('$email', '$password')";
    if (mysqli_query($con, $insert_sql)) {
        $response['status'] = "yes";
    } else {
        $response['status'] = "no";
    }
}

echo json_encode($response);
?>
