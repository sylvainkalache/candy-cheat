var blue = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAZABkDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDS+E/7PvjP4kQS3mk20dvbJ0nnPy/mK/rLP+M8Dk01Tr6vsj+dsHlFXMIudPYy/FPgu88Ha3JoF9Okk9v95kwQ1dWAzOOZ0VXo6Jnk16MKc3T6ozTZO/UcfSup1YQZzPzE/s5f7gq/avuQdp4N+OHjjQvCMHg3Sp0h00jEkQiETH/topDj8Gr5rM+D8Hi8U8XV1n6v8tj6aGZ1cDSdKnszKc3Oo3DahcwsC/3t8hcn8SSa76VOGGgqVPofPzk6k3ORbt9IE00Fv93zv4v7tYYiteDqLoRBe0qcqPSP+FCW/wD0P2j/APff/wBavk/9bZf8+pfh/me3/ZjPGtKk8C3lpDF53hq3mVdpcS30U8r/AO0HjlRfwAr7ess1pzk3zyT/AMFl+Kf3tnPJu2pPDf6lG2YLUSp6bs1pKjF/Gzimr62L41HWCcnThn2asJ4fDuLjfQxjL2cuaO50f/CYeL/+hf0b/wAGL/8Ax6vnf7CwHeX3f/anf/aeI7nznqf+rf8A6+K/VKnwnoz3PVfC3/HvXzWO3OCe50615TOVklIZ/9k="

var green = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAUABQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuVmu7RxDdwNG68FXXBFfxm2fzVIsJekqSQBio5iBv249gv5UczAj8S/EyXxtqMup3tjbwO2W2xLtHWu7GSniKsq095PorL7j0sXVli60q00rvXTRGVFqtr5R3sQc9PauP2ctjkdMjGt2TclXH+frR7GYuRHF2c8gUAMeTg169SCbO6yLQuJV4Dday5EyGi9ZzYgGYo256kUnFE8qP/9k="

var orange = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAZABkDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6Bu7Lw98PPDFvHLFHe+KNSgWckufLtkPRSAcc89u1fyhiqGCwmEuleo+vY/ofDVcfneNm+ZqhBtetv0/M4T7S4ldZF+f77Y6ZPpXhwork55bs+yhRUaasSW7x3UZIXAc4B9xWfO07Eybi7pjvsFx/z2/Stbmfti7Foup6xb3+ueXJPHaukbyMS2d2cfgMfrXRToVJ0vb7o8+WY0MunHDPRv8Ar9TPhskjd9uTwQSSTn865qs1bQ9adbmSuWrSG3SyCqmFVj3PU157qPmOOpN3J/Lf1Nbe0Muc9F8D6rp9n8KvEVqzos9y8nkqQCVO1dvX6tX2mCxGGpZNKK+I+HzbC4nE5zSqPZflr/wDzKHKHyieRnPvwP8A69fEJt3Pv0mkhudmnyY/vrU+za1YqkFKVkWfPf8Avj8qLMz9l5F3Tf8AkB3f++v8hXpUf90Zx4j/AHiJlj/j5/CvPger9gY//IOk/wB8V1VNjOh/EXzFqTY//9k="

var purple = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAUABQDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjJt087vcSDz3YkyAfePqR6+9f25H3IpRWnY/qyeDpTlZqzLNrY/2rfWujeE7O51e/K75ZEt3lZjjJWKJRkAcgsck4yMVjUq/V6cq+MkoQ2Sul85SffsvTU5KNSlQlKVRpJdW0l6tskuIr+KUxyEo68MrDBU9wR61MJU5K6PZ5aktUybTtQ8JTWMKanotyl2kd0ZLuK7J82Uxt5AMZGFAfbkg8iorUcbGo3SqJxbjZOOyuubXrdXtpozyHUq1arlCS6aW211163W3mc/od3quiXf2/TNRuLS4BYebBK0bbW6rlTnGK9LF0qOLh7OrFSXZq+q9Tlpcjm4VEn66lp9YkkYu4ZyTksSck1isMoqyPZWLSRt6ZZWFn4fh1yWxiu7m6lMC/aCxWEc/MiqQC3GPm3DnpnBHBXq1KuJeHUnGMVfS135NtPT0s/M8zAQvVUU9lf18vT0s/MxdQt4o3Dxgpk9AeK7qM21Zmma4WnH97HRlcgZ6D8q2R47nLuf/Z"

var red = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAZABkDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5zJr8Xeruz/UxuyILqEuuxemMVuqjg7o48VQdSPKtjr/gN8VJ/hT4yW2v5G/sfUnAlzjEL/3hX12UY+LilN6n88+I/CTxEHVpx1Pub/hcehf9BC2/77FfZ/Wafc/nT+xa38h+dqOGGTX43KNmf6K06nMiTcBWb1OnmsVr6wivIyGUcjFaUqs6Tujz8wy+ljoNSRQ+wX//AEG7z/v+3+Nex/bFU+J/1FwPZfciSzv0kbBNefVp66H0eBx8ajszT2qa55Qse/pLVjhwuKnmexdrKyIMH0qTnsc7p3369We58Ll250q9PwrkqH3VPYkPSuZnSiKkZH//2Q=="

var yellow = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAZABkDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD68urlpZ10+1+SLOW29P8A630r/OeSTbqzd2z9koYenRp3aOrs4fIs4kYcN1rxanvT5jxqkuabsVdRb7KTcKN2eveuqjCNV+zRtRXtFysd/a2lf9BF/wDvs1p9SkY/VJ9jldJimlukQctJ9/3r0vYPENU6e57eKlGMD0S+tPsa29vIcu0e4+xrLN8reUxjGW7PlqNf2kpNbXMjUITJa7V7V49KbhO6PSoy5ZnKfYn9P0Fep7RHraD/AA1eKt6s8hzt6e1dftpYWXtIjzGg+Wx2EmqPeyNO8m6Rl2E4HSuLMMdVzKqpV9j55YT2StFaEkUK3CSqZQAvQVxUafNqEqjhNGLttf7o/M113PR9pLucno3RvrXdifhPfzDY6vTev4152K+BHhVti6P+W9ThfgPIrfxEZVaHef/Z"


var img = new Image();
img.src = "file.jpg";
var colors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];
var combinations = new Array([]);

img.onload = function() {
    function define_grid_color(y, i) {
	var options = { left : 40+(67*y), top : 224+(72*i), width : 20, height : 20 };
	Pixastic.process(img, "crop", options, function(processed_image) {
	    var canvas = processed_image.toDataURL('image/jpeg');
	    //$("body").append("<img src='"+canvas+"'>");
	    for (z = 0; z < colors.length; z++) {
		is_color(canvas, colors, z, y, i);
	    }
	});
    }

    function is_color(canvas, colors, z, y, i) {

	resemble(canvas).compareTo(eval(colors[z])).onComplete(function(data){
	misMatchPercentage = data['misMatchPercentage']
	    if (data['misMatchPercentage']<99) {
		$("body").append("<img src='"+canvas+"'>"+y+' '+i+' '+z+'<br/>');
		combinations[y][i] = z;
	    }
	});
    }

    function going_through_array(callback) {
	for (var y = 0; y <= 8; y++) {
	    for (var i = 0; i <= 8; i++) {
		define_grid_color(y, i);
	    }
	}
	callback(true);
    }

    function create_array(array_size) {
	for (var y = 0; y < 10; y++) {
	    combinations[y] = new Array();
	}
	console.log('created array: '+y);
	going_through_array(function(result) {
	    console.log('blah');
	    console.log(result);
	    move_one(combinations);
	});
    }

    create_array(10);
    //console.log(returned);
    //
}
