<?php
// Database connection
$servername = "localhost";
$username = "root"; // Default username for XAMPP
$password = ""; // Default password for XAMPP is empty
$dbname = "motor_vehicle_hub";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$card_number = $_POST['card-number'];
$expiry_date = $_POST['expiry-date'];
$cvv = $_POST['cvv'];

// Insert data into the database
$sql = "INSERT INTO payments (name, card_number, expiry_date, cvv) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $card_number, $expiry_date, $cvv);

if ($stmt->execute()) {
    echo "Payment successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();

if (strlen($card_number) !== 16 || !is_numeric($card_number)) {
    die("Invalid card number.");
}

if (strlen($cvv) !== 3 || !is_numeric($cvv)) {
    die("Invalid CVV.");
}
?>