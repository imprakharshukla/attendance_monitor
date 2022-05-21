const {Telegraf} = require('telegraf')
const bot = new Telegraf('5394604623:AAGLRyACHa0wDpDUhHzWx5leyyx5c2fLIHc')

function startTelegram() {
    bot.start((ctx) => ctx.reply('Welcome'));
    bot.help((ctx) => ctx.reply("Send"))
}

startTelegram()

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

module.exports = {
    startTelegram
}