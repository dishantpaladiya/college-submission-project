<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$con = new mysqli('localhost', 'root', '', 'project');

if ($con->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database Connection Failed..."]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['id']) && isset($data['cashOnDelivery'])) {
    $id = (int) $data['id'];
    $cashOnDelivery = (int) $data['cashOnDelivery'];

    $stmt = $con->prepare("UPDATE `order` SET `cashOnDelivery` = ? WHERE `id` = ?");
    $stmt->bind_param("ii", $cashOnDelivery, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "COD status updated"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}

$con->close();
?>
