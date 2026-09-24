<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(455);
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
    exit();
}

// Read raw JSON body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$organization = isset($data['organization']) ? trim($data['organization']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$website = isset($data['website']) ? trim($data['website']) : ''; // Honeypot field

// 1. Anti-spam honeypot check
if (!empty($website)) {
    // Silently accept bot submission without sending email
    echo json_encode(['success' => true, 'message' => 'Accepted']);
    exit();
}

// 2. Data Validation
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide your name.']);
    exit();
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit();
}

if (empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please write a message.']);
    exit();
}

// 3. Prepare Email
$to = 'omichael@ethnoirconsulting.com';
$subject = 'New Portfolio Contact: ' . $name . ($organization ? ' (' . $organization . ')' : '');

$htmlMessage = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Portfolio Contact Inquiry</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #24252B; background-color: #FAF8F4; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #D8D2CA; padding: 30px; border-radius: 4px;">
        <h2 style="color: #503847; margin-top: 0; border-bottom: 2px solid #503847; padding-bottom: 10px;">New Portfolio Contact Inquiry</h2>
        <p><strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
        <p><strong>Email:</strong> <a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></p>
        <p><strong>Organization:</strong> ' . htmlspecialchars($organization ? $organization : 'N/A') . '</p>
        <hr style="border: none; border-top: 1px solid #D8D2CA; margin: 20px 0;">
        <p style="white-space: pre-wrap;"><strong>Message:</strong><br>' . nl2br(htmlspecialchars($message)) . '</p>
    </div>
</body>
</html>
';

$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: Olajumoke Michael Portfolio <noreply@ethnoirconsulting.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
);

$mailSent = @mail($to, $subject, $htmlMessage, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you. Your message has been sent.']);
} else {
    // If native mail failed, fallback log & report error gracefully
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Unable to dispatch email. Please email omichael@ethnoirconsulting.com directly.']);
}
