function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

function bleSetup() {
  setupWebViewJavascriptBridge(function(bridge) {
    console.log("Call method bleSetup");
    bridge.callHandler('bleSetup', { 'key': 'enter_system_ble_setup' }, function responseCallback(responseData) {
      console.log("JS received response:", responseData)
    })
  })
}

