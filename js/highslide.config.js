/**
*	Site-specific configuration settings for Highslide JS
*/

	hs.graphicsDir = 'images/graphics/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.fadeInOut = true;
	hs.outlineType = 'glossy-dark';
	hs.wrapperClassName = 'dark';
	hs.captionEval = 'this.a.title';
	hs.numberPosition = 'caption';
	hs.useBox = true;
	hs.width = 600;
	hs.height = 400;
	hs.dimmingOpacity = 0.8;

	// Add the slideshow providing the controlbar and the thumbstrip
	hs.addSlideshow({
		slideshowGroup: ['group1', 'group2', 'group3'],
		interval: 5000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			position: 'bottom center',
			opacity: .75,
			hideOnMouseOut: true
		},
		thumbstrip: {
			position: 'above',
			mode: 'horizontal',
			relativeTo: 'expander'
		}
	});

	// Make all images animate to the one visible thumbnail
	// gallery config object
var miniGalleryOptions1 = {
   slideshowGroup: 'group1',
   thumbnailId: 'thumb1',
   numberPosition: 'caption',
   transitions: ['expand', 'crossfade']
};

// gallery config object
var miniGalleryOptions2 = {
   slideshowGroup: 'group2',
   thumbnailId: 'thumb2',
   numberPosition: 'caption',
   transitions: ['expand', 'crossfade']
};

// gallery config object
var miniGalleryOptions3 = {
   slideshowGroup: 'group3',
   thumbnailId: 'thumb3',
   numberPosition: 'caption',
   transitions: ['expand', 'crossfade']
};