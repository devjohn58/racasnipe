import { Bot as TelegramBot } from "grammy";
import * as dotenv from "dotenv";
import { Context } from "grammy";
import {
    type Conversation,
	type ConversationFlavor,
	conversations,
	createConversation,
} from "@grammyjs/conversations";
dotenv.config();

export type MyContext = Context & ConversationFlavor;
if (!process.env.TELEGRAM_BOT_TOKEN) {
	throw new Error("TELEGRAM_BOT_TOKEN env variable is not defined");
}

export const bot = new TelegramBot<MyContext>(process.env.TELEGRAM_BOT_TOKEN);
bot.chatType("private")
try {
	bot.api.setMyCommands([
        {
            command: "start",
            description: "Let's get this party started.",
        },
        {
            command: "snipe",
            description: "Summons the snipe main panel.",
        },
        {
            command: "snipemode",
            description: "Summons the snipe mode panel.",
        },
		{
			command: "wallet",
			description: "Summons the wallet panel.",
		},
		{
			command: "setting",
			description: "Summons the setting panel.",
		},
		{
			command: "author",
			description: "About Us.",
		},
	]);
} catch (error) {
	console.error("[Error] Could not set bot commands.", error);
}

import "./commands";
bot.start().catch((error) => {
	console.error("[Error] Could not start bot.", error);
});
console.log("Bot starting.....")
