"use strict";
chrome.runtime.onMessage.addListener((message) => {
    // Clear popup body
    document.body.innerHTML = "";

    // Create link and add to body
    const link = document.createElement('a');
    link.href = message.href;
    link.textContent = message.title;
    link.style.display = "block";
    document.body.appendChild(link);

    const range = document.createRange();
    range.selectNode(link);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
});
chrome.tabs.executeScript({"file": "content.js"});
