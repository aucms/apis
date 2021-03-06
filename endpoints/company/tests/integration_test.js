var request = require('request');
var assert = require('assert');
var helpers = require('../../../lib/test_helpers.js');

describe('company', function() {
    this.timeout(8000); // This endpoint is sometimes SLOW, need more time

    var fieldsToCheckFor = ["name","sn","active","address"];

    describe('searching by name', function() {
        it("should return an array of objects containing correct fields", function(done) {
            var params = helpers.testRequestParams("/company", { name: "hagar" });
            var resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor);
            request.get(params, resultHandler);
        });
    });
    describe('searching by address', function() {
        it("should return an array of objects containing correct fields", function(done) {
            var params = helpers.testRequestParams("/company", { address: "Hagasmára" });
            var resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor);
            request.get(params, resultHandler);
        });
    });
    describe('search by socialnumber', function() {
        it("should return an array of objects containing correct fields", function(done) {
            var params = helpers.testRequestParams("/company", { socialnumber: "4307003590" });
            var resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor);
            request.get(params, resultHandler);
        });
    });
    describe('search by vsknr', function() {
        it("should return an array of objects containing correct fields", function(done) {
            var params = helpers.testRequestParams("/company", { vsknr: "78874" });
            var resultHandler = helpers.testRequestHandlerForFields(done, fieldsToCheckFor);
            request.get(params, resultHandler);
        });
    });
});
