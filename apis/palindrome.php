<?php
    header('Access-Control-Allow-Origin: *');
    $string = $_GET["string"];
 
    $string = preg_replace('/[^a-z0-9]/i', '', strtolower($string));
    $is_palindrome = ($string == strrev($string));

    $response = [];
    if ($is_palindrome) {
        $response['status'] = 'Palindrome!';
    } else {
        $response['status'] = 'Not a palindrome.';
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>