chrome.tabs.query({ currentWindow: true, active: true }, function(tabs){
	var defaultUrl = tabs.length ? tabs[0].url: '';

	var eventFrm = document.getElementById('ga-link-data');
	var eventUrl = document.getElementById('event-url');
	var eventCon = document.getElementById('event-content');
	var eventCat = document.getElementById('event-category');
	var eventAct = document.getElementById('event-action');
	var eventLab = document.getElementById('event-label');
	var eventGen = document.getElementById('generate');
	var eventTxt = document.getElementById('event-link-text');
	var eventRes = document.getElementById('event-results');
	var eventCpy = document.getElementById('event-copy');

	function genClicked() {
		var url = eventUrl.value ? eventUrl.value : defaultUrl;
		var con = eventCon.value;
		var cat = "'" + eventCat.value + "', "
		var act = "'" + eventAct.value + "', "
		var lab = "'" + eventCat.value + "'"
		var txt = '<a href="' + url + '" onclick="ga(\'send\', \'event\',' + cat + act + lab + ')">' + con + '</a>';

		eventTxt.value = txt;

		eventFrm.className = 'hidden';
		eventGen.className = 'hidden';
		eventRes.className = '';
	}

	function eventCopy() {
		eventTxt.focus();
        document.execCommand('SelectAll');
        document.execCommand('copy');
	}

	eventUrl.placeholder = defaultUrl;

	eventGen.addEventListener('click', genClicked, false);
	eventCpy.addEventListener('click', eventCopy, false);
});