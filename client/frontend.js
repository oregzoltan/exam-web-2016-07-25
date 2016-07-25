'use strict';

var frontEnd = (function () {

  var inputText = document.querySelector('.inputText');
  var inputNumber = document.querySelector('#inputNumber');
  var output = document.querySelector('.output');
  var submitButton = document.querySelector('.submitButton');
  submitButton.addEventListener('click', submit);

  function submit() {
    var toSend = {shift: parseInt(inputNumber.value), text: inputText.value};
    ajax.xhrRequest('POST', JSON.stringify(toSend), function(response) {
      if (JSON.parse(response).status === "error") {
        alert(JSON.parse(response).error);
        output.textContent = '';
      } else {
      output.textContent = JSON.parse(response).text;
      }
    });
  }
})();
