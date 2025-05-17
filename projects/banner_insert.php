<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Failed...");

$image = $_FILES['image']['name'];
$tmp_name = $_FILES['image']['tmp_name'];
$path = 'assets/images/'.$image;

// Initialize response array
$response = array();

// Check if the image is moved successfully
if(move_uploaded_file($tmp_name, $path)) {
    $details  = $_POST['details'];
    $paragraph  = $_POST['paragraph'];

    $sql = "INSERT INTO `banner_data`(`image`,`details`,`paragraph`) VALUES ('$image','$details','$paragraph')";

    if(mysqli_query($con, $sql)){
        $response['status'] = "yes";
    } else {
        $response['status'] = "no";
    }
} else {
    $response['status'] = "file_upload_failed";
}

// Output the response as JSON
echo json_encode($response);

?>
