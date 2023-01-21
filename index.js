chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentTab = tabs[0];
    if (currentTab.url.indexOf("clickup.com") !== -1) {
      var last5Chars = currentTab.url.slice(-5);
      sendToTelegramChannel("/test " + last5Chars);
    } else {
      alert("This is not a clickup.com page!");
    }
  });
});


function sendToTelegramChannel(message) {
  var botToken = "5851441797:AAFWK1YdP11_wU5-B-KtLy0eF3zhLF4Aux0";
  var channelUsername = "@chronostesttesttest";
  var url = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + channelUsername + "&text=" + message;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
}

