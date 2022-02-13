/* global chrome */

export async function scanYoutubeLinks({ setLinks }) {
  chrome.runtime.onMessage.addListener((allLinks) => {
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
          file: 'src/scripts/ScanYoutubeLinks/parseLinks.js', allFrames: true
        });
      }
    );
  });
}
