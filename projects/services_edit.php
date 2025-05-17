
<?php

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

// Establish the connection
$con = mysqli_connect('localhost', 'root', '', 'project') or die("Database Connection Fail...");

$response = array();

// Check if required fields are present in POST request
if (isset($_POST['details'])  && isset($_POST['id']) && isset($_FILES['image'])) {
    
    $details  = $_POST['details'];

    $id = $_POST['id'];
    
    // Image upload handling
    $image = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    $path = 'assets/images/'.$image;
    
    // Move uploaded file to the destination folder
    if (move_uploaded_file($tmp_name, $path)) {
        // Update query
        $sql = "UPDATE `services_data` SET `details`='$details',`image`='$image' WHERE `id`=$id";
        
        // Execute the query
        if (mysqli_query($con, $sql)) {
            $response['status'] = "yes";
        } else {
            $response['status'] = "no";
            $response['error'] = mysqli_error($con);
        }
    } else {
        $response['status'] = "no";
        $response['error'] = "Image upload failed.";
    }
    
} else {
    $response['status'] = "no";
    $response['error'] = "Missing required fields.";
}

// Return JSON response
echo json_encode($response);

?>
