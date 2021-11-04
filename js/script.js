var sendBtn = document.getElementById("send");
var inputArea = document.getElementById("input");
var linkOut = document.getElementById("link");
var decoderUrl = "https://mercurio.host/decoder/?c="
var out = document.getElementById("out");

function b64_to_b64url(str){
    str = str.replaceAll('+','-');
    str = str.replaceAll('/','_');
    return str;
}

function b64url_to_b64(str){
    str = str.replaceAll('-','+');
    str = str.replaceAll('_','/');
    return str;
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function encode(str){
    return b64_to_b64url(utf8_to_b64(str));
}

function decode(str){
    return b64_to_utf8(b64url_to_b64(str));
}

if (sendBtn != null) {
    sendBtn.onclick = function () {
        linkOut.innerHTML = decoderUrl + encode(inputArea.value)
    }
}

if (out != null) {
    window.onload = function () {
        var url = new URL(window.location.href);
        var c = url.searchParams.get("c");
        var out;
        try {
            out = decode(c);
        }
        catch (URIError) {
            out = "invalid parameter";
            console.log(c);
        }
        document.getElementsByTagName('body')[0].innerHTML = out;
    }
}
