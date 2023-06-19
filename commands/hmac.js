import Base64 from "crypto-js/enc-base64.js";
import hmacSHA256 from "crypto-js/hmac-sha256.js";
import md5 from "crypto-js/md5.js";

function getAuthenticationHeader(url, method, body, appKey, secretKey) {
    console.log(appKey);
    console.log(secretKey);

    const secret = Base64.parse(secretKey);
    const urlTemp = new URL(url);
    const target = urlTemp.pathname + urlTemp.search;
    const timestamp = new Date().getTime();
    const nonce = Math.random().toString(36).substring(7);
    const body_b64 = Base64.stringify(md5(body ||""));
    const message = appKey + method + target + timestamp + nonce + body_b64;
    console.log(message);
    const hmac = hmacSHA256(message, secret);
    const base64hmac = Base64.stringify(hmac);
    const authHeader = `epi-hmac ${appKey}:${timestamp}:${nonce}:${base64hmac}`;
    return authHeader;
}

export async function sendRequest(url, appKey, appSecret, method, headers, body) {
    console.log(`${url} - ${appKey} - ${appSecret} - ${method} - ${headers} - ${body}`);

    const authHeader = getAuthenticationHeader(url, method, JSON.stringify(body), appKey, appSecret);

    const options = {
        method: method,
        headers: {
            "Authorization": authHeader,
            "Accept": "application/json",
        },
        body: JSON.stringify(body)
    };


    console.log(url);
    console.log(options);

    return fetch(url, options);
}