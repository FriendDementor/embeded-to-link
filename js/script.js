var sendBtn = document.getElementById("send");
var inputArea = document.getElementById("input");
var linkOut = document.getElementById("link");
var decoderUrl = "https://mercurio.host/decoder/?c="
var out = document.getElementById("out");

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

if (sendBtn != null) {
    sendBtn.onclick = function () {
        linkOut.innerHTML = decoderUrl + utf8_to_b64(inputArea.value)
    }
}

if (out != null) {
    window.onload = function () {
        var url = new URL(window.location.href);
        var c = url.searchParams.get("c");
        var out;
        try {
            out = b64_to_utf8(c);
        }
        catch (URIError) {
            out = "invalid parameter";
            console.log(c);
        }
        document.getElementsByTagName('body')[0].innerHTML = out;
    }
}
