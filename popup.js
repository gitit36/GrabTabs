// Get the grab tabs button
var button = document.getElementById('grab-tabs-button');

// Listen for a click on the grab tabs button
button.addEventListener('click', function() {
  // Get the selected tabs
  chrome.tabs.query({highlighted: true, currentWindow: true}, function(tabs) {
    var urls = [];
    for (var i = 0; i < tabs.length; i++) {
      urls.push(tabs[i].url);
    }
    // Join the URLs into a single string
    var urlString = urls.join('\n');
    // Copy the URL string to the clipboard
    navigator.clipboard.writeText(urlString).then(function() {
      console.log('URLs copied to clipboard');
    }, function(err) {
      console.error('Error copying URLs to clipboard: ' + err);
    });
  });
});
