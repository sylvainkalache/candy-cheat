var img = new Image();
var positions = new Array();
// Grid total
//{ left : 10, top : 200, width : 620, height : 670 }};

img.onload = function() {
    console.log(i)
    var position = {};
    //positions.push(position['rect'] = { left : 10, top : 200+(74.44*i), width : 68.88, height : 74.44 })
    var options = { left : 10, top : 200+(74.44*i), width : 68.88, height : 74.44 }
    Pixastic.process(img, "crop", options);

    //Generate base64
    //options.resultCanvas;
    //var canvas = options.resultCanvas.toDataURL('image/jpeg')
}

for (var y = 0; y <= 8; y++) {
    for (var i = 0; i <= 8; i++) {
	img.src = "file.jpg";
	var options = { left : 10+(68.88*y), top : 200+(74.40*i), width : 68.88, height : 74 }
	document.body.appendChild(Pixastic.process(img, "crop", options))
	//document.body.appendChild(img);
    }
}
