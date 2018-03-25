const request = require('request');
const cheerio = require('cheerio');

request('http://vetratoria.ru/ru', (err, response, body) => {
    if(err) throw err;
    if(response.statusCode === 200) {
        const $$ = cheerio.load(body);
        console.log('длина', $$('h3'));
        $$('h3').each( (ind, item) => console.log( `${$$(item).text()}` ));
    }
});