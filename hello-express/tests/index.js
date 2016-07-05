var boot = require('../app').boot,
shutdown = require('../app').shutdown,
port = require('../app').port,
superagent = require('superagent'),
expect = require('expect.js')
// var assert = require('chai').assert

describe('server',function () {
    before(function () {
        boot();
    })
    describe('homepage',function () {
        it('should respond to GET',function (done) {
            superagent
            .get('http://localhost:'+port)
            .end(function (res) {
                expect(res.status).to.equal(200);
                // assert.equal(res.status,200);

                done()
            })
        });
        after(function () {
            shutdown();
        })
    });

})