/* global chrome */

// fires when tab is updated
chrome.tabs.onUpdated.addListener(updateBadge);

// fires when active tab changes
chrome.tabs.onActivated.addListener(updateBadge);

function updateBadge() {
  // get active tab on current window
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    // the return value is an array
    var activeTab = arrayOfTabs[0];
    if (!activeTab) return;

    chrome.runtime.onMessage.addListener((allLinks) => {
      chrome.browserAction.setBadgeText({
        text: allLinks.length ? allLinks.length.toString() : null,
      });
    });

    chrome.windows.getCurrent((currentWindow) => {
      chrome.tabs.query(
        {
          active: true,
          windowId: currentWindow.id
        },
        (activeTabs) => {
          chrome.tabs.executeScript(activeTabs[0].id, {
            file: 'src/scripts/ScanYoutubeLinks/parseLinks.js', allFrames: true
          });
        }
      );
    });
  });
}
