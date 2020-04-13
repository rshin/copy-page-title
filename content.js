"use strict";
chrome.runtime.sendMessage({'title': document.title, 'href': window.location.href});
