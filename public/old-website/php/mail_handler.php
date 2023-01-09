<?php

$errors = '';

$myemail = 'keeganjohnson43@gmail.com';//<—–Put Your email address here. 

if(empty($_POST['name']) ||

empty($_POST['email']) ||

empty($_POST['message']))

{

$errors .= '\n Error: all fields are required';

}

$name = $_POST['name'];

$email_address = $_POST['email'];

$message = $_POST['message'];

if (!preg_match(

'/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i', $email_address))

{

$errors .= '\n Error: Invalid email address';

}

if( empty($errors))

{

$to = $myemail;

$email_subject = "New Message From ". $name ;

$email_body = "You have received a new message.\n".

"\nDetails:\n \nName: ". $name ."\n ".

"Email: ". $email_address ."\n Message: ".  $message;

$headers = "From: ". $myemail ."\n";

$headers .= " Reply-To: ". $email_address;

mail($to,$email_subject,$email_body,$headers);

//redirect to the ‘thank you’ page

header('Location: http://keeganrjohnson.com/');

}

?>