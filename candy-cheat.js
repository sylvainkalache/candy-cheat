var img = new Image();
var positions = new Array();
// Grid total
//{ left : 10, top : 200, width : 620, height : 670 }};

img.onload = function() {

    for (var i = 1; i <= 9; i++ ) {
	var position = {};
	//positions.push(position['rect'] = { left : 10, top : 200+(74.44*i), width : 68.88, height : 74.44 })
	var options = { left : 10, top : 200+(74.44*i), width : 68.88, height : 74.44 }
	Pixastic.process(img, "crop", options);
	options.resultCanvas;
	var canvas = options.resultCanvas.toDataURL('image/jpeg')
    }
    //console.log(canvas);
}

img.src = "file.jpg";
document.body.appendChild(img);
