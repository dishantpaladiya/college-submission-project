<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // Handle preflight request
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }

    // Database connection
    $con = mysqli_connect('localhost', 'root', '', 'project') or die(json_encode(["status" => "error", "message" => "Database Connection Failed"]));

    // Get input data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (!isset($data['id']) || empty($data['id'])) {
        echo json_encode(["status" => "error", "message" => "ID not provided"]);
        exit();
    }

    $id = intval($data['id']); // Ensure ID is an integer

    // Delete query
    $sql = "DELETE FROM `services_data` WHERE `id` = $id";
    $result = mysqli_query($con, $sql);

    if ($result && mysqli_affected_rows($con) > 0) {
        echo json_encode(["status" => "yes", "message" => "Service deleted successfully"]);
    } else {
        echo json_encode(["status" => "no", "message" => "Delete failed or ID not found"]);
    }

    // Close connection
    mysqli_close($con);
?>
