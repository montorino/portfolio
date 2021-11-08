<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = "=?utf-8?B?".base64_encode($_POST['subject'])."?=";
$message = $_POST['message']."\r\nfrom ".$name;

$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("webprogramming.for.you@gmail.com", $subject, $message, $headers);

if($success){
    echo "The message has been successfully sent";
}
else{
    echo "The message has not been sent. Please try to resend the message.";
}
