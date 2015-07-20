<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: application/json");
$json = <<<EOF
{
	"lat": "-23.5989686",
	"longi": "-46.7147256",
	"endereco": "Av. Albert Einstein, 627 - Morumbi - São Paulo- SP - Brasil"
}
EOF;
echo $json;