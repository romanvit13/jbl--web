<?php $name = $_POST['name'];
$phone = $_POST['phone'];
$formcontent="From: $name \n Phone: $phone";
$recipient1 = "romanvit13@gmail.com";
$recipient2 = "kuharuk4@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $phone \r\n";
mail($recipient1, $subject, $formcontent, $mailheader) or die("Error!");
mail($recipient2, $subject, $formcontent, $mailheader) or die("Error!");

header("Location: /");
?>
