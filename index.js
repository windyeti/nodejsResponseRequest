// const request = require('request');
// const cheerio = require('cheerio');
const express = require('express');
const consolidate = require('consolidate');
// const handlebars = require('handlebars');
const handlebars = require('handlebars-engine');

const app = express();

// middlewave
// app.use((req, res, next) => {
//     req.titles = {
//         head : 'Заголовки с сайта Pproger.ru',
//         news : ['Первый заголовок', 'Второй заголовок']
//     };
//     next();
// });

app.engine('hbs', consolidate.handlebars);

// установка по-умолчанию для шаблонизатора
app.set('view engine', 'hbs');
// имя шаблона в проекте и путь к его файлу
app.set('view', './view');

app.get('/', (req, res) => {
    res.render('view', {
        head : 'Привет, Сергей1',
        news : 'Привет, Сергей2'
    });
});

app.listen(8888);