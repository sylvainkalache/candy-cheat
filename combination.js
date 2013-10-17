var pieces = [[2,1,5,4,2],
              [2,2,2,4,1],
              [2,3,3,4,3],
              [4,4,4,4,4],
              [3,5,5,5,5],
             ];

function find_horizontal_combination(pieces) {
    // Finding array size
    array_hori_size = pieces.length;
    array_vert_size = pieces[0].length;
    // Go through columns
    for (i = 0; i < array_vert_size; i++) {
	var count = 0, best_combination = 0;
	var to_match = pieces[i][0];

	// Go through lines
	for (j = 0; j < array_hori_size; j++) {
	    if (pieces[i][j] == to_match) {
		// Increase count
		if (++count >= 3) {
		    best_combination = count;
		}
	    } else {
		// Reset count
		var to_match = pieces[i][j];
		count = 0;
	    }
	}
	console.log("Best match for line "+i+" :"+best_combination);
    }
}

function find_vertical_combination(pieces) {
    // Finding array size
    array_hori_size = pieces.length;
    array_vert_size = pieces[0].length;
    // Go through lines
    for (i = 0; i < array_vert_size; i++) {
	var count = 0, best_combination = 0;
	var to_match = pieces[i][0];

	// Go through columns
	for (j = 0; j < array_hori_size; j++) {
	    if (pieces[j][i] == to_match) {
		// Increase count
		if (++count >= 3) {
		    best_combination = count;
		}
	    } else {
		// Reset count
		var to_match = pieces[j][i];
		count = 0;
	    }
	}
	console.log("Best match for column "+i+" :"+best_combination);
    }
}

find_horizontal_combination(pieces);
find_vertical_combination(pieces);
