// For iOS7 only, set the window's top to 20 so they start under the status bar.
Alloy.Globals.windowTop = (OS_IOS && parseInt(Ti.Platform.version[0], 10) >= 7) ? 20 : 0;

function doClick(e) {
    alert($.label.text);
}

$.index.open();
