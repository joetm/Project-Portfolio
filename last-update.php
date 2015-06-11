<?php

//get the last update date


$dir = dirname(__FILE__);

$last_modified = intval(filemtime ($dir . '/projects.json'));

//var_dump($last_modified);

if($last_modified)
{
	echo date('Y-m-d', $last_modified);
	exit;
}
else
{
	echo '0';
	die();
}

?>