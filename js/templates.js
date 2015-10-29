function renderHeader(array, imgCount) {
	var header = document.getElementById('imgWrapper'),
		pic;

	while( imgCount ) {
		imgCount--;
		pic = array[imgCount].headshot;

		header.innerHTML = header.innerHTML + '<img src="' + pic + '" alt="prof pic" class="headPic">';
	}
}