<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight request
    http_response_code(200);
    exit;
}

require('vendor/autoload.php'); // Include Razorpay PHP SDK

use Razorpay\Api\Api;

$keyId = 'rzp_test_m6GVeQ8aj8dIrE';
$keySecret = 'joCcWUNQvK3KNjBMU3kCO9EN';

$api = new Api($keyId, $keySecret);

$amount = $_POST['amount']; // Amount in paise
$currency = $_POST['currency'];
$receipt = $_POST['receipt'];

$orderData = [
    'amount' => $amount,
    'currency' => $currency,
    'receipt' => $receipt,
    'payment_capture' => 1 // Auto capture
];

$order = $api->order->create($orderData);
echo json_encode($order);
?>