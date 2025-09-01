chrome.runtime.onInstalled.addListener(() => {
  console.log("Gladiatus EDU Extension installed.");
});

// Exemple de alarmă la 1 minut
chrome.alarms.create("checkTimers", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkTimers") {
    console.log("Checking timers...");
    // aici poți extinde logica, dar fără auto-click
  }
});
