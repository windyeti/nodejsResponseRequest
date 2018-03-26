const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const consolidate = require('consolidate');

const app = express();

// middlewave
app.use((req, res, next) => {
    req.titles = {
        head : 'Заголовки с сайта Pproger.ru',
        titles : ['Первый заголовок', 'Второй заголовок']
    };
    next();
});
app.get('/', (req, res) => {
   res.send(`${req.titles.head}`);
});
app.get('/titles', (req, res) => {

});
// request('https://tproger.ru/', (err, response, body) => {
//     if(err) throw err;
//     if(response.statusCode === 200) {
//         const $$ = cheerio.load(body);
//         // console.log('длина', $$('.news-title').length);
//         // $$('.news-title').each( (ind, item) => console.log( `${$$(item).text()}` ));
//         $$('.news-title').each( (ind, item) => (`${$$(item).text()}` ));
//     }
// });
app.listen(8888);