<?php
    header('Content-Type: application/json');
    $ip = $_SERVER['REMOTE_ADDR'];
    $geoApiUrl = "http://www.geoplugin.net/json.gp?ip=$ip";
    $geoApiResponse = file_get_contents($geoApiUrl);
    $geoApiData = json_decode($geoApiResponse, true);
    $location = [
        'city' => $geoApiData['geoplugin_city'],
        'region' => $geoApiData['geoplugin_region'],
        'country' => $geoApiData['geoplugin_countryName']
    ];
    $response = [];
    $response['location'] = $location;
    $jsonData = json_encode($response);
?>