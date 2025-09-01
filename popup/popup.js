document.getElementById("getTimer").addEventListener("click", () => {
  const selector = document.getElementById("selector").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "getTimer", selector: selector },
      (response) => {
        document.getElementById("result").textContent =
          response?.timer || "Not found";
      }
    );
  });
});
