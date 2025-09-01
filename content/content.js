console.log("Gladiatus EDU Content Script loaded.");

// Creează overlay simplu
const overlay = document.createElement("div");
overlay.id = "glad-overlay";
overlay.textContent = "Overlay Gladiatus EDU - timerele apar aici";
document.body.appendChild(overlay);

// Exemplu de funcție de citire timer (mock)
function parseTimer(selector) {
  const el = document.querySelector(selector);
  if (!el) return null;
  const text = el.textContent.trim();
  return text; // ex: "00:12:34"
}

// Ascultă mesaje de la popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getTimer") {
    const time = parseTimer(msg.selector);
    sendResponse({ timer: time });
  }
});
