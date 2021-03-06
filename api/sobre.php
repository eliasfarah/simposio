﻿<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: application/json");
$json = <<<EOF
{
	"descricao": "<p align='center'><img alt=\"SIMPOSIO\" src=\"https://d1ct0o0776f92p.cloudfront.net/media_contents/39294/logo_simposio.png\" height=\"106\" width=\"200\" />&nbsp;</p><p><strong>3&ordm; Simp&oacute;sio Cient&iacute;fico Internacional CEJAM</strong></p><p>&nbsp;</p><p align='justify'>O Simp&oacute;sio Cient&iacute;fico Internacional CEJAM foi idealizado com o objetivo de incentivar a produ&ccedil;&atilde;o cient&iacute;fica e as pr&aacute;ticas da ci&ecirc;ncia entre os profissionais de sa&uacute;de, al&eacute;m de promover&nbsp;<em>benchmarking</em>&nbsp;e&nbsp;<em>networking&nbsp;</em>entre as Organiza&ccedil;&otilde;es Sociais, representantes do poder p&uacute;blico, gestores de sa&uacute;de do Brasil e do exterior.<br /><br />Em 2014, chega a sua 3&ordf; edi&ccedil;&atilde;o e contar&aacute; com palestrantes nacionais e internacionais que abordar&atilde;o o tema:<strong>&nbsp;&ldquo;A Tecnologia a Servi&ccedil;o do Aprimoramento do Sistema &Uacute;nico de Sa&uacute;de &ndash; SUS&rdquo;</strong>, nos &acirc;mbitos assistenciais e educacionais.<br /><br />Durante o evento, al&eacute;m de debates e palestras, ser&atilde;o realizadas apresenta&ccedil;&otilde;es orais de trabalhos cient&iacute;ficos e exposi&ccedil;&atilde;o de banners.&nbsp;</p><p>&nbsp;</p>"
}
EOF;
echo $json;
