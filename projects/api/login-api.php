
<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

$email = $_POST['email'];
$password = $_POST['password'];

$response = array();

$sql = "SELECT * FROM `login_data` WHERE `email` = '$email' AND `password` = '$password'"; // Filter the results based on email and password

$res = mysqli_query($con, $sql);
$cnt = mysqli_num_rows($res);

if($cnt == 1){
    $response['status'] = "yes";
}
else {
    $response['status'] = "no";
}

echo json_encode($response);
?>