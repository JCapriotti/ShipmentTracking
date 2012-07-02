var lsNumbers = 'numbers';

// Add isArray method
function isArray(arg) {
    return Object.prototype.toString.call(arg) == '[object Array]';
}

// Abbreviated getElementById
function $(id) {
  return document.getElementById(id);
}

function getStoredTrackingNumbers() {
	var numbers = localStorage[lsNumbers];
	var list;
	
	try {	
		if (numbers) {
			list = JSON.parse(numbers);
		}
		if (!isArray(list)) {
			list = [];
		}
	}
	catch (e) {
		// suppresses parsing errors and .isArray() errors
		list = []
	}
	
	return list;
}

function setStoredTrackingNumbers(list) {
	localStorage[lsNumbers] = JSON.stringify(list);
}

