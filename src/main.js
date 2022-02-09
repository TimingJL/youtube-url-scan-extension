/* global chrome */

export async function loadLinks({ setLinks }) {
  chrome.runtime.onMessage.addListener(function(links) {
    var allLinks = [];
    var visibleLinks = [];
    for (var index in links) {
      allLinks.push(links[index]);
    }
    allLinks.sort();
    visibleLinks = allLinks;
    setLinks(visibleLinks);
  });

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query(
      {
        active: true,
        windowId: currentWindow.id
      },
      function (activeTabs) {
        chrome.tabs.executeScript(activeTabs[0].id, {
          file: 'src/scripts/sendLinks.js', allFrames: true
        });
      }
    );
  });
}