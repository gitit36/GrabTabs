// Get the grab tabs button
var button = document.getElementById('grab-tabs-button');

// Listen for a click on the grab tabs button
button.addEventListener('click', function() {
  // Get the selected tabs
  chrome.tabs.query({highlighted: true, currentWindow: true}, function(tabs) {
    var tabData = [];
    for (var i = 0; i < tabs.length; i++) {
      tabData.push(tabs[i].title + '\n' + tabs[i].url);
    }
    // Join the tab data into a single string
    var tabDataString = tabData.join('\n\n');
    // Copy the tab data string to the clipboard
    navigator.clipboard.writeText(tabDataString).then(function() {
      console.log('Tab data copied to clipboard');
    }, function(err) {
      console.error('Error copying tab data to clipboard: ' + err);
    });
  });
});

