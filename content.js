// Send a message to the background script to restore the saved tabs
chrome.runtime.sendMessage({restoreTabs: true});
