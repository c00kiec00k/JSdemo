let body = $request.body;
if (body) {
    if (typeof body !== 'string') {
        body = new TextDecoder('utf-8').decode(body);
    }
    if (body.includes('438465394')) {
        body = body.replace(/438465394/g, '452427219');
        $done({ body });
    } else {
        $done({});
    }
} else {
    $done({});
}
