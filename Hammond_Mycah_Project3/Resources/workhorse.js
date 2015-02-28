//Set Thumbnails
for(i=0; i<getPhotos.length; i++){
	var thumb = Ti.UI.createView({
		top: margin,
		left: margin,
		width: thumbSize,
		height: thumbSize,
		backgroundColor: "#000"
	});
	var art = Ti.UI.createImageView({
		image: "images/" + getPhotos[i],

	});
	
	thumb.add(art);
	imageContainer.add(thumb);
};

