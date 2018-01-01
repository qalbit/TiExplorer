// Require EXPLORER MODULE
var TiExplore = require('ti.explorer');

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var buttonExplore = Ti.UI.createButton({
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	title: "Explore me!"
});

buttonExplore.addEventListener("click", doSelectFile);

win.add(buttonExplore);
win.open();

// Function to Call module and grab file response
var doSelectFile = function() {
	// Make sure you checked the Permission for Storage READ/WRITE. 
	TiExplore.selectFile({
		mimeType: "application/vnd.ms-excel", // OPTIONAL, Default is */* taken.
		location: TIEXPLORER.EXTERNAL_STORAGE, // OPTIONAL, Default is Cache Directory used.
		onSuccess: function(e) { // REQUIRED
			Ti.API.info("Success~ " + JSON.stringify(e));
			// Perform operation on Success here
		},
		onError: function(e) { // REQUIRED
			Ti.API.info("Error~ " + JSON.stringify(e));
			// Perform operation on Error here
		}
	});
};