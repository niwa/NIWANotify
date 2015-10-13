"use_strict"
describe("get application message", function () {
    var notifyService, httpBackend;

    beforeEach(module("notify"));

    beforeEach(inject(function (_notifyService_, $httpBackend) {
        notifyService = _notifyService_;
        httpBackend = $httpBackend;
        httpBackend.whenGET('/notifyProxy.php').respond(function (method, url, data) {
            return [200, testResponse];

        })
        var testResponse = '<?xml version="1.0"?>' +
            '<app_message status="maintenance" appid="TESTAPP"><status_text>This system will be under maintenance on Wednesday 14th October, from 6 PM to 7 PM</status_text>' +
            '</app_message>';
    }))

    it("should have the right headings", function () {
        notifyService.getMessage().then(function (msg) {
            expect(msg.msg).toEqual('This system will be under maintenance on Wednesday 14th October, from 6 PM to 7 PM');
            expect(msg.status).toEqual('maintenance');
        })
        httpBackend.flush();
    })
})