var request = require('request');

function ai(text, callback) {
    var headers = {
        'User-Agent': 'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    var options = {
        url: "http://www.simsimi.com/getRealtimeReq?uuid=wcuvljWyNZp501RVwi7dtdrHrhTw8iBZVuTCCU5bV1w&lc=th&ft=1&reqText=" + encodeURI(text),
        method: 'GET',
        headers: headers
    };
    request(options, function(error, response, body) {
        console.log(body);
        var obj = JSON.parse(body);
        if (typeof obj.respSentence == 'undefined') {
            return callback(false);
        } else {
            return callback(obj.respSentence);
        }
    })
}
ai('hi', function(data) {
    if (!data) {
        console.log("simsimi :> " + data);
    }
});
