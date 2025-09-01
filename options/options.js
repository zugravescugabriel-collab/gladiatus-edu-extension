document.getElementById("save").addEventListener("click", () => {
  const expedition = document.getElementById("expedition").value;
  chrome.storage.sync.set({ expedition }, () => {
    alert("Salvat!");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get("expedition", (data) => {
    if (data.expedition) {
      document.getElementById("expedition").value = data.expedition;
    }
  });
});
