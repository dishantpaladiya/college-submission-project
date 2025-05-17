<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Connection
$con = mysqli_connect('localhost', 'root', '', 'project');
if (!$con) {
    die(json_encode(["status" => "error", "message" => "Database Connection Failed: " . mysqli_connect_error()]));
}

// Read JSON Data
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData, true);

// Debugging - Log received data
file_put_contents("debug.log", "Received Data: " . print_r($data, true) . "\n", FILE_APPEND);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON format"]);
    exit();
}

// Validate Input
if (!empty($data['products']) && !empty($data['mobileNumber']) && !empty($data['email']) && !empty($data['address']) && isset($data['cashOnDelivery']) && !empty($data['totalAmount'])) {

    // Escape Data
    $products = mysqli_real_escape_string($con, json_encode($data['products']));
    $mobileNumber = mysqli_real_escape_string($con, $data['mobileNumber']);
    $email = mysqli_real_escape_string($con, $data['email']);
    $address = mysqli_real_escape_string($con, $data['address']);
    $cashOnDelivery = (int) $data['cashOnDelivery'];
    $totalAmount = (float) $data['totalAmount'];

    // Insert Query
    $sql = "INSERT INTO `order` (`products`, `mobileNumber`, `email`, `address`, `cashOnDelivery`, `totalAmount`) 
            VALUES ('$products', '$mobileNumber', '$email', '$address', '$cashOnDelivery', '$totalAmount')";

    if (mysqli_query($con, $sql)) {
        echo json_encode(["status" => "success"]);
    } else {
        file_put_contents("debug.log", "SQL Error: " . mysqli_error($con) . "\n", FILE_APPEND);
        echo json_encode(["status" => "error", "message" => "Database error: " . mysqli_error($con)]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input data"]);
}
?>
