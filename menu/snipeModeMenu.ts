import { bot } from "..";
import { Menu } from "@grammyjs/menu";

const textInfo = "Coming soon!";

const snipeModeMenu = new Menu("root-menu")
	.submenu("🌈 Wallet", "wallets")
	.submenu("🔫 Snipe Mode", "snipeMode")
	.row()
	.submenu("⚙️ Setting", "settings")
	.row()
	.submenu("🔑 Premiums", "premiums")
	.submenu("👨‍👧‍👧 Channel", "channel")
	.row();

const wallets = new Menu("wallets")
	.submenu("ETH", "mainWallets")
	.submenu("BSC", "mainWallets")
	.row()
	.submenu("ARB", "mainWallets")
	.submenu("Polygon", "mainWallets")
	.row()
	.submenu("Fantom", "mainWallets")
	.submenu("Aptos", "mainWallets")
	.row()
	.submenu("Solana", "mainWallets")
	.submenu("Optimism", "mainWallets")
	.row()
	.back("⬅️ Go Back");
    const mainWallets = new Menu("mainWallets")
	.text("💉 Connect Wallet", (ctx) => ctx.reply(textInfo))
	.text("🔧 Generate Wallet", (ctx) => ctx.reply(textInfo))
	.row()
	.text("🧲 Multi-Wallet", (ctx) => ctx.reply(textInfo))
	.text("⚙️ Config", (ctx) => ctx.reply(textInfo))
	.row()
	.back("⬅️ Go Back")
const premiums = new Menu("premiums")
	.text("🌈 Wallet", (ctx) => ctx.reply(textInfo))
	.back("⬅️ Go Back");

const channel = new Menu("channel")
	.text("🌈 Wallet", (ctx) => ctx.reply(textInfo))
	.back("⬅️ Go Back");

const snipeMode = new Menu("snipeMode")

	.text("🌈 Wallet", (ctx) => ctx.reply(textInfo))
	.back("⬅️ Go Back");
const settings = new Menu("settings")
	.text("Show Credits", (ctx) => ctx.reply(textInfo))
	.back("⬅️ Go Back");

wallets.register(mainWallets);
snipeModeMenu.register(premiums);
snipeModeMenu.register(channel);
snipeModeMenu.register(snipeMode);
snipeModeMenu.register(settings);
snipeModeMenu.register(wallets);
bot.use(snipeModeMenu);

export { snipeModeMenu };
