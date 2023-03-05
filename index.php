<?php
    header('Access-Control-Allow-Origin: *');
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_ame"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $valid_password = preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/', $password);
    $valid_email = filter_var($email, FILTER_VALIDATE_EMAIL); 

    $response = [];
    // array_push($response,$first_name,$last_name, $valid_email, $password);
    // echo json_encode($response);

    if ($valid_password && $valid_email) {
        $response['status'] = 'Valid username, email, and password.';
    } 
    else {
        $response['status'] = 'Invalid input.';
        if (!$valid_password) {
            $response['password_message'] = 'Password should contain 8 characters minimum, one special character minimum, at least one upper case letter, and at least one lower case letter.';
        }
        if (!$valid_email) {
            $response['email_message'] = 'Email should be in the format user@example.com.';
        }
    }
    echo json_encode($response);
?>