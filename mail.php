<?php

$recepient = "nnukenuke@yandex.ru";
$sitename = "резюме";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $mail \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");