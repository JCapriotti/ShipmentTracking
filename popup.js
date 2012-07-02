
function showTrackingNumbers() {
	var listContainer = $('trackingNumbers');
	
	var trackingNumbers = getStoredTrackingNumbers();

	if (trackingNumbers && trackingNumbers.length > 0) {
		$('noTrackingNumbers').style.display = 'none';
		
		for (var x = 0; x < trackingNumbers.length; ++x) {
			addTrackingNumber(listContainer, trackingNumbers[x]);
		}
	}
	else {
		listContainer.innerHTML = '';
		$('noTrackingNumbers').style.display = 'inline';
	}

}

function addTrackingNumber(listContainer, number) {
	var li = document.createElement('li');
	var a = document.createElement('a');
	var url = 'https://www.google.com/#output=search&q=' + number;
	
	a.innerText = number;
	a.href = url;
	a.onclick = function () {
		chrome.tabs.create({'url': url});
	};
	
	li.appendChild(a);
	listContainer.appendChild(li);
}

function init() {
	showTrackingNumbers();
	
	$('clearList').onclick = function () {
		setStoredTrackingNumbers([]);
		showTrackingNumbers();
	}
}

document.addEventListener('DOMContentLoaded', init);
