<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$con = mysqli_connect('localhost', 'root', '', 'project');

if (!$con) {
    die(json_encode(['status' => 'no', 'error' => 'Database Connection Failed...']));
}

mysqli_set_charset($con, "utf8mb4");

// Read the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['que']) && isset($data['ans'])) {
    $que = $data['que'];
    $ans = $data['ans'];

    $stmt = $con->prepare("INSERT INTO `fnq`(`que`, `ans`) VALUES (?, ?)");
    $stmt->bind_param("ss", $que, $ans);

    if ($stmt->execute()) {
        echo json_encode(['status' => "yes"]);
    } else {
        echo json_encode(['status' => "no", 'error' => $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(['status' => "no", 'error' => "Missing required fields."]);
}

mysqli_close($con);
?>
