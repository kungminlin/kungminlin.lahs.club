<?php

require_once('./conf.ini.php');

$connection = mysqli_connect($servername, $username, $password, $database);

if ($connection === false) {
  die("Connect Failed: " . mysqli_connect_error());
}

$firstname = mysqli_real_escape_string($connection, $_POST['firstname']);
$lastname = mysqli_real_escape_string($connection, $_POST['lastname']);
$email = mysqli_real_escape_string($connection, $_POST['email']);
$birthday = mysqli_real_escape_string($connection, $_POST['birthday']);
$sex = mysqli_real_escape_string($connection, $_POST['sex']);
$color = mysqli_real_escape_string($connection, $_POST['color']);
$message = mysqli_real_escape_string($connection, $_POST['message']);

 ?>
