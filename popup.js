
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    files: ["content.js", "fetch.js"],
  }, () => {
    console.log("Scripts executed successfully.");
    // Any further actions you want to perform after script execution can be placed here.
  });
});
