const request = require('request');
const cheerio = require('cheerio');
//
request('https://tproger.ru/', (err, response, body) => {
    if(err) throw err;
    if(response.statusCode === 200) {
        const $$ = cheerio.load(body);
        console.log('длина', $$('.news-title').length);
        $$('.news-title').each( (ind, item) => console.log( `${$$(item).text()}` ));
    }
});