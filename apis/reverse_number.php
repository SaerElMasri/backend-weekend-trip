<?php
    header('Access-Control-Allow-Origin: *');
    $string = $_GET["string"];
    $reversed = '';
    $response = [];
    if(!preg_match('/\d/', $string)){
        $response["status"] = "This string does not have numbers";
    }
    $newStr = preg_replace_callback('/\d+/', function($matches) {
        $reversed = strrev($matches[0]); 
        
    }, $string);
    $response['status'] = $reversed;

    header('Content-Type: application/json');
    echo json_encode($response);
?>