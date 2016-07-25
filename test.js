'use strict';

var test = require('tape');
var Decrypter = require('./decrypter');
var testData = {};

test('is returning the correct object positive shift', function (t) {
  testData = { "shift": 3, "text": "oruhp lsvxp groru vlw" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "ok", "text": "lorem ipsum dolor sit" });
  t.end();
});

test('is not changing numbers in text', function (t) {
  testData = { "shift": 3, "text": "55oruhp lsvxp groru 77vlw" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "ok", "text": "55lorem ipsum dolor 77sit" });
  t.end();
});

test('is returning the correct object negative shift', function (t) {
  testData = { "shift": -3, "text": "lorem ipsum dolor sit" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "ok", "text": "oruhp lsvxp groru vlw" });
  t.end();
});

test('is error msg correct on shift over 25', function (t) {
  testData = { "shift": 33, "text": "oruhp lsvxp groru vlw" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "error", "error": "Shift is out of bound" });
  t.end();
});

test('is error msg correct on shift under -25', function (t) {
  testData = { "shift": -30, "text": "oruhp lsvxp groru vlw" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "error", "error": "Shift is out of bound" });
  t.end();
});

test('is error msg correct on empty text property', function (t) {
  testData = { "shift": 15, "text": "" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "error", "error": "Any of the properties are missing" });
  t.end();
});

test('is error msg correct on no shift', function (t) {
  testData = { "shift": null, "text": "sdffsdf dd" };
  t.deepEqual(Decrypter.errorHandler(testData), { "status": "error", "error": "Any of the properties are missing" });
  t.end();
});
