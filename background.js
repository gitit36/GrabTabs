// Listen for a message from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check if the message is a request to restore the saved tabs
  if (request.restoreTabs) {
    // Get the saved tabs from local storage
    chrome.storage.local.get(['selectedTabs'], function(result) {
      var tabs = result.selectedTabs;
      // Create new tabs with the URLs of the saved tabs
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.create({url: tabs[i].url});
      }
    });
  }
});
