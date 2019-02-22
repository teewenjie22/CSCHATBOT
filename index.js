const Telegraf = require("telegraf");

const API_KEY = "718185007:AAFBOS9YuXdkDzEGpD-lnO8-o2UhbOxdB98";

const bot = new Telegraf(API_KEY);

//old syntex
function greet(name){
    return "Hello" + name;
}

//modern syntax
const greetagain = (name) => {
    return "Hello" + name;
}

//modern systax allows me to write it shrter with efault return
const greet2 = name => "Hello" + name;

const helpHandler = ctx => ctx.reply("Hello");
bot.help("helpHandler");

bot.help((ctx) => ctx.reply('Hello'))

bot.launch();