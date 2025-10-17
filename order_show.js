let body = $request.body;
if (body) {
    if (typeof body !== 'string') {
        body = new TextDecoder('utf-8').decode(body);
    }
    let modified = false;
    if (body.includes('438465394')) {
        body = body.replace(/438465394/g, '452427219');
        modified = true;
    }
    if (body.includes('access_token')) {
        body = body.replace(/"access_token":\s*"[a-zA-Z0-9]+"/g, '"access_token":"f0846b187d4c212fae84d46d8c8d6540"');
        modified = true;
    }
    if (modified) {
        $done({ body });
    } else {
        $done({});
    }
} else {
    $done({});
}
