<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


//database connection
$conn = new mysqli('127.0.0.1','root','','test');
if($conn -> connect_error){
    die('Connection Failed: ' . $conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT INTO user(username,email,pass) VALUES(?,?,?)");
    $stmt->bind_param("sss",$username,$email,$password);
    $stmt->execute();
    echo "registration succesfull";
    $stmt->close();
    $conn->close();
}

?>