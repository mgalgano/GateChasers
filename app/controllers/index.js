

$.index.open();

function tab2Focus() {
	alert('test');
	
	Titanium.Gesture.addEventListener('orientationChange', function(e){
		Titanium.API.info('Gesture change detected');
		Ti.App.fireEvent('orientationchange',{eventObject:e});
	});
}

function createWindow() {
	var win1 = Titanium.UI.createWindow();
	win1.title = "window 1";
	win1.backroundColor="#ECECEC";
}
