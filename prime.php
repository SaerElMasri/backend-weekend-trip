<?php
    header('Access-Control-Allow-Origin: *');
    $user_age = $_POST["age"];

    $response = [];
    if($user_age <= 1){
        $response['status'] = "What? You are a newborn?";
    }
    for($i = 2; $i < $user_age; $i++){
        if($user_age % 2 == 0){
            $response['status'] = "Your age is not a prime number!";
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>