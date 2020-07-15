var socket;


function setupWebsocket(type) {

    if (type == "extern") {
        socket = io.connect("https://sulfurous.aau.at" + ':8082');
    } else if (type == "intern") {
        socket = io.connect(window.location.hostname + ':8082');
    }

    socket.on("sendSB2file", function (data) {
        loadSP2FileFromSocket(data);
    });

    socket.on("sendPackage", function (data) {
        console.log("tset")
        console.log(data)
        var zip = new JSZip(data);
        console.log(zip)
        var content = zip.generate({ type: "blob" });
        saveData(content, "OUTPUT.zip")
    })
}