<?php

    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");


    $con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

    $email = $_POST['email'];
    $password = $_POST['password'];
    $id = $_POST['id'];


    $response = array();

    $sql = "UPDATE `login_data` SET `email`='$email',`password`='$password' WHERE `id`=".$id;

    if(mysqli_query($con, $sql)){
        $response['status'] = "yes";
    }
    else {
         $response['status'] = "no";
    }
 

    echo json_encode($response);

?>