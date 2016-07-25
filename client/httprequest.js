'use strict';

var url = 'http://localhost:3000/decode';

var ajax = (function () {
  function xhrRequest(method, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);
    document.querySelector('.output').textContent = 'Loading...';
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        callback(xhr.response);
      }
    }
  }
  return {
    xhrRequest:xhrRequest
  }
})();
