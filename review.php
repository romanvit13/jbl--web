<?php $name = $_POST['name'];
$review = $_POST['review'];
$formcontent="From: $name \n Review: $review";
$recipient1 = "romanvit13@gmail.com";
$recipient2 = "kuharuk4@gmail.com";
$subject = "JBLA Review";
$mailheader = "From: $review \r\n";
mail($recipient1, $subject, $formcontent, $mailheader) or die("Error!");
mail($recipient2, $subject, $formcontent, $mailheader) or die("Error!");

header("Location: /");
?>
