// Put all the javascript code here, that you want to execute in background.

function openPage() {
	browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
		const domain = new URL(tabs[0].url).hostname;

		browser.tabs.create({
			url: 'https://www.cashbackmonitor.com/check-rewards/' + domain,
		});
	});
}

browser.browserAction.onClicked.addListener(openPage);
