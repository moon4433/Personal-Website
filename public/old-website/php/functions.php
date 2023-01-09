<?php

function sayHello(){
	echo "hello world";
}

function GET($key){

	if(array_key_exists($key, $_GET)){
		return $_GET[$key];
	}
	return "";
}

function POST($key){

	if(array_key_exists($key, $_POST)){
		return $_POST[$key];
	}
	return "";
}

function redirect($url){
	header("location:{$url}");
	exit;
}

function connectToDB(){

	$host = "mysql:host=localhost;dbname=myschoolystuff";
	$user = "keegan";
	$pass = ";5=f66dKG#";


	$dbh = new PDO($host, $user, $pass);

	return $dbh;

}

function dump($arr){

	echo "<pre>";
	print_r($arr);
	echo "</pre>";
}

function pageTop($bodyClass,$cssFiles=[], $jsFiles=[]){
?>
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title> <?echo $bodyClass;?> </title>
		<!-- import css file -->
		<!-- import javascript file -->

<?
			if(is_array($cssFiles)){
				foreach ($cssFiles as $file) {
					echo "<link href='$file' rel='stylesheet'>";
				}
			}

			if(is_array($jsFiles)){
				foreach ($jsFiles as $file) {
					echo "<script src='$file'></script>";
				}
			}
?>
	</head>
	<body class="<? echo $bodyClass; ?>">
		<header class="top" id="siteBanner">
            <h1>Welcome to <?echo $bodyClass;?>!</h1>
            
        </header>
		<div class="divider"></div>
<?
}



function pageBottom(){
?>
<footer>
			
</footer>
</body>
</html>
<?
}

?>

