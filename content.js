// Add a button to the page
var button = document.createElement('button');
button.textContent = 'Save URLs to clipboard';
document.body.appendChild(button);

// Listen for a click on the button
button.addEventListener('click', function() {
  // Send a message to the background script to save the URLs to the clipboard
  chrome.runtime.sendMessage({saveUrls: true});
});

// Send a message to the background script to restore the saved tabs
chrome.runtime.sendMessage({restoreTabs: true});
