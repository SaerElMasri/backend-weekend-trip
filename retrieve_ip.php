<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    $ipaddress = getenv("REMOTE_ADDR") ;
    $response = [];
    $response['status'] = $ipaddress;
    echo json_encode($response);
?>