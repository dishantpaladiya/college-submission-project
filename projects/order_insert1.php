<?php
header('Content-Type: application/json');
include 'db_connection.php'; // Include your database connection

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $mobileNumber = $data['mobileNumber'];
    $email = $data['email'];
    $address = $data['address'];
    $products = json_encode($data['products']);
    $totalAmount = $data['totalAmount'];

    // Insert order into the database
    $query = "INSERT INTO orders (mobile_number, email, address, products, total_amount) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssssi", $mobileNumber, $email, $address, $products, $totalAmount);
    
    if ($stmt->execute()) {
        // Assuming you have a function to create a payment URL with Rezopay
        $paymentUrl = createRezopayPayment($totalAmount, $email); // Implement this function

        echo json_encode(['status' => true, 'paymentUrl' => $paymentUrl]);
    } else {
        echo json_encode(['status' => false]);
    }
}

function createRezopayPayment($amount, $email) {
    // Implement the API call to Rezopay to create a payment
    // Return the payment URL
    // Example:
    $apiUrl = "https://api.rezopay.com/payment"; // Replace with actual API URL
    $data = [
        'amount' => $amount,
        'email' => $email,
        // Add other required fields
    ];

    $ch = curl_init($apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    $response = curl_exec($ch);
    curl_close($ch);

    $responseData = json_decode($response, true);
    return $responseData['paymentUrl']; // Adjust based on actual response
}
?>