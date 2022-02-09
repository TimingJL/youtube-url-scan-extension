/* global chrome */

export async function scanYoutubeLinks({ setLinks }) {
  chrome.runtime.onMessage.addListener((links) => {
    var allLinks = [];
    for (var index in links) {
      allLinks.push(links[index]);
    }
    allLinks.sort();
    setLinks(allLinks);
  });

  chrome.windows.getCurrent((currentWindow) => {
    chrome.tabs.query(
      {
        active: true,
        windowId: currentWindow.id
      },
      (activeTabs) => {
        chrome.tabs.executeScript(activeTabs[0].id, {
          file: 'src/scripts/ScanYoutubeLinks/sendLinks.js', allFrames: true
        });
      }
    );
  });
}
