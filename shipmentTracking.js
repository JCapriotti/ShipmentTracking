

function addTrackingNumber(info) {
	var list = getStoredTrackingNumbers();
	list.push(info.selectionText);
	setStoredTrackingNumbers(list);
}

var addMenuItemOptions = {
	title: 'Add To Shipment Tracking',
	contexts: ['selection', 'editable'],
	onclick: addTrackingNumber
};


var addMenuItem = chrome.contextMenus.create(addMenuItemOptions);

