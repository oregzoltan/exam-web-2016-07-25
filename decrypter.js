var Decrypter = (function() {

  function errorHandler(data) {
    if (data.shift < -25 || data.shift > 25) {
      return ({ status: 'error', error: 'Shift is out of bound' });
    } else if (data.shift === null || data.text === '') {
      return ({ status: 'error', error: 'Any of the properties are missing' });
    } else {
      return (decrypter(data));
    }
  }

  function decrypter(data) {
    var letterList = data.text.split('');
    var shift = -1 * data.shift;
    var codeList = toCode(letterList);
    codeList = codeChanger(codeList, shift);
    letterList = toChar(codeList);
    letterList = letterList.join('');
    return ({ status: 'ok', text: letterList });
  }

  function codeChanger(codeList, shift) {
    codeList = codeList.map(function(e) {
      if (e>=65 && e<=90) {
        e += shift;
        if (e < 65) { e += 26 }
        if (e > 90) { e -= 26 }
      }
      if (e >= 97 && e <= 122) {
        e += shift;
        if (e < 97) { e += 26 }
        if (e > 122) { e -= 26 }
      }
      return e;
    })
    return codeList;
  }

  function toCode(letterList) {
    return letterList.map(function(e) {return e.charCodeAt(0);});
  }

  function toChar(codeList) {
    return codeList.map(function(e) {return String.fromCharCode(e);});
  }

  return {
    errorHandler: errorHandler
  };
})();

module.exports = Decrypter;
