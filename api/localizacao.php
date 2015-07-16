<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: application/json");
$json = <<<EOF
{
	"lat": "-23.555935",
	"longi": "-46.632508",
	"endereco": "O local do evento será na Dr. Lund, 43, Liberadade - São Paulo- SP - Brazil"
}
EOF;
echo $json;