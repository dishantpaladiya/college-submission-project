<?php

    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");


    $con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

    $email = $_POST['email'];
    $password = $_POST['password'];

    $response = array();

    $sql = "INSERT INTO `login_data` (`email`,`password`) VALUES ('$email','$password')";

    if(mysqli_query($con, $sql)){
        $response['status'] = "yes";
    }
    else {
         $response['status'] = "no";
    }
 

    echo json_encode($response);

?>