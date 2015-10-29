function myCallback(data) {
	var cohorts = data.cohorts,
		arr = [],
		shuffledArr;
		
	var w = window,
		width = w.innerWidth,
		height = w.innerHeight,
		imageCount;

	for ( var i = 0; i < cohorts.length; i++ ) {
		arr = arr.concat(cohorts[i].students);
	}
	
	shuffledArr = shuffle(arr);
	imageCount = calcImg(width, height);

	renderHeader(shuffledArr, imageCount);
}

function ajaxCall(callback) {
	$.ajax({
		url: '../main.json',
		success: callback,
		done: function() {
			console.log('success');
		},
		fail: function() {
			console.log('failed');
		},
		always: function() {
			console.log('complete');
		}
	});
}

ajaxCall( function(data) {
});

function shuffle(array) {
	var arrLength = array.length,
		index,
		item;

	while ( arrLength ) {
		index = Math.floor( Math.random() * arrLength-- );

		item = array[arrLength];
		array[arrLength] = array[index];
		array[index] = item;
	}

	return array;
}

function calcImg(width, height) {
	var imgWidth = width / 5,
		numImages;

	numImages = Math.ceil( height / imgWidth ) * 5;

	return numImages;
}

// function studentsArray(arr, key) {
// 	var fullArray = [];

	// for ( var i = 0; i < array.length; i++ ) {
	// 	fullArray = fullArray.concat(arr[i][key]);
	// }

// 	return fullArray;
// }

ajaxCall(myCallback);