var seedArticles = require('../db/articles.json')
var expect = require('expect.js')
it('should contain posts', function (done) {
    superagent
    .get('http://localhost:' + port)
    .end(function (res) {
        seedArticles.forEach(function (item, index, list) {
            if(item.published) {
                expect(res.text).to.contain('<h2><a href="/articles/' + item.slug + '">' + item.title)
            }else {
                expect(res.text).not.to.contain('<h2><a href="/articles/' + item.slug + '">' + item.title)
            }
        });
        done()
    })
})

describe('article page', function () {
    it('should  display text', function (done) {
        var n = seedArticles.length
        seedArticles.forEach(function (item, index, list) {
            superagent
            .get('http://localhost:'+port + '/articles/'  + seedArticles[index].slug)
            .end(function (res) {
                if (item.published) {
                    expect(res.text).to.contain(seedArticles[index].text)
                } else {
                    expect(res.status).to.be(401)
                }
                if(index + 1 == n) {
                    done()
                }
            });
        })
    })
})