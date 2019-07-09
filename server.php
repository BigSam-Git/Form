<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$telno = $_POST['telno'];
// $image = $_POST['img'];
// $country = $_POST['country'];
$address = $_POST['add'];
$age = $_POST['age'];
$sex = $_POST['sex'];
// $size = $_POST['range'];
$bio = $_POST['bio'];


// echo "$username Here \n";

$conn = mysqli_connect("localhost", "root", "", "form") or die("Could not connect to the database.");



if(isset($_POST['username'])) {
    $password = md5($password);//encrypt the password before saving in the database
    $sql =  "INSERT INTO users (username, email, password, telno, address, age, sex, bio) 
                        VALUES('$username', '$email', '$password', '$telno', '$address', '$age', '$sex', '$bio')";
     $query = mysqli_query($conn, $sql);
    echo $sql;
    if($query){
        echo "Your form has been submitted successfully. \n";
    }else {
        echo "not submitted";
    }
           // var_dump($sql);
           
}
?>