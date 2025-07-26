const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');

const bot = new Telegraf('ВАШ_ТОКЕН_ТУТ');

bot.start((ctx) => {
    ctx.reply('Добро пожаловать! 👋', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Открыть магазин", web_app: { url: "https://ВАШ_ДОМЕН.onrender.com/src/webapp" } }]
            ]
        }
    });
});

bot.launch();
console.log("Бот запущен");

const app = express();
const port = process.env.PORT || 3000;

app.use('/src/webapp', express.static(path.join(__dirname, 'webapp')));

app.listen(port, () => {
    console.log(`WebApp доступен по адресу: http://localhost:${port}/src/webapp`);
});