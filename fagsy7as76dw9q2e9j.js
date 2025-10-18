let body = $request.body;
if (body) {
    if (typeof body !== 'string') {
        body = new TextDecoder('utf-8').decode(body);
    }
    let modified = false;
    
    if (/"uid":\s*\d+/.test(body)) {
        body = body.replace(/"uid":\s*\d+/g, '"uid": 453960322');
        modified = true;
    }
    
    if (/"user_id":\s*\d+/.test(body)) {
        body = body.replace(/"user_id":\s*\d+/g, '"user_id": 453960322');
        modified = true;
    }
    
    if (/"access_token"/.test(body)) {
        body = body.replace(/"access_token":\s*"[^"]*"/g, '"access_token":"c3acf4eec3670328f327799774ff5b82"');
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
