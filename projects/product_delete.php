<?php

    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");


    $con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

    $id = $_POST['id'];

    $response = array();

    $sql = "DELETE FROM `product` WHERE `id`='$id'";

    if(mysqli_query($con, $sql)){
        $response['status'] = "yes";
    }
    else {
         $response['status'] = "no";
    }
 

    echo json_encode($response);

?>