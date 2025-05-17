<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$con = new mysqli('localhost', 'root', '', 'project');

if ($con->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database Connection Failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['order_id']) && !empty($data['payment_id']) && !empty($data['email']) && !empty($data['totalAmount'])) {
    
    $order_id = mysqli_real_escape_string($con, $data['order_id']);
    $payment_id = mysqli_real_escape_string($con, $data['payment_id']);
    $email = mysqli_real_escape_string($con, $data['email']);
    $totalAmount = (float) $data['totalAmount'];
    $cashOnDelivery = 0; // Ensure online payments are NOT marked as COD

    $sql = "INSERT INTO `orders` (`order_id`, `payment_id`, `email`, `totalAmount`, `cashOnDelivery`) 
            VALUES ('$order_id', '$payment_id', '$email', '$totalAmount', '$cashOnDelivery')";

    if (mysqli_query($con, $sql)) {
        echo json_encode(["status" => "success", "message" => "Payment recorded successfully"]);
    } else {
        // Log MySQL error
        file_put_contents("debug.log", "SQL Error: " . mysqli_error($con) . "\n", FILE_APPEND);
        echo json_encode(["status" => "error", "message" => "Failed to record payment"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data received"]);
}

$con->close();
?>