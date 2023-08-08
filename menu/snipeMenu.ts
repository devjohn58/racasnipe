import { bot } from "..";
import { Menu } from "@grammyjs/menu";

const textPannel = `<b>RacaSnipBot Panel</b>
      
<b>Monitor</b>
Active Trades: 0
Disabled Trades: 0

<b>Snipe Mode</b>
Active Trades: 0
Disabled Trades: 0`;
const textInfo = "Coming soon!";
const textChain = "Select chain:";

const textWallet = (chain: string) => `Chain: <b>${chain}</b>

Total Wallet: <b>0</b>

Default Wallet: <b>Null</b>
Active Wallet: <b>Null</b>
Multi Wallet: <b>Null</b>
Snipe Mode Wallet: <b>Null</b>
`;

const textSetting = (chain: string) => `Chain: <b>${chain}</b>

📍 <b>General</b>
Anti-Rug: ❌
Anti-MEV: ❌
Multi Wallet: ❌
Max Gas Price: <b>100 gwei</b>
Slippage: <b>10%</b>
Max Gas Limit: <b>Auto (3,000,000)</b>

📌 Buy
Anti-Rug: ❌
Anti-MEV: ❌
Multi Wallet: ❌
Max Gas Price: <b>100 gwei</b>
Slippage: <b>10%</b>
Max Gas Limit: <b>Auto (3,000,000)</b>
Buy Gas Price: <b>Delta (+2 gwei)</b>
Max Buy Tax: <b>50%</b>
Max MCap: <b>Disabled</b>
Min MCap: <b>Disabled</b>

📌 Sell
Anti-Rug: ❌
Anti-MEV: ❌
Multi Wallet: ❌
Max Gas Price: <b>100 gwei</b>
Slippage: <b>10%</b>
Max Gas Limit: <b>Auto (3,000,000)</b>
Sell Gas Price: <b>Delta (+2 gwei)</b>
Max Sell Tax: <b>50%</b>
Max MCap: <b>Disabled</b>
Min MCap: <b>Disabled</b>

📌 Approve
Auto Approve: ✅
Approve Gas Price: <b>Delta (+ 2 gwei)</b>`;

const textChannel = `
<b>Telegram</b> : https://t.me/racasniperbot
<b>X</b> :  https://twitter.com/racasniperbot
<b>Website</b> : https://racabots.com`

const snipeMenu = new Menu("root-menu")
	.text("Select Options")
	.row()
	.submenu("🌈 Wallet", "wallets", (ctx) => ctx.editMessageText(textChain))
	.submenu("🔫 Snipe Mode", "wallets", (ctx) => ctx.editMessageText(textChain))
	.row()
	.submenu("⚙️ Setting", "settingsChain", (ctx) =>
		ctx.editMessageText(textChain)
	)
	.row()
	.text("🔑 Premiums", (ctx) => ctx.reply(textInfo))
	.text("👨‍👧‍👧 Channel", (ctx) => ctx.reply(textChannel, { parse_mode: "HTML" }))
	.row();

const wallets = new Menu("wallets")
	.text("Select Options")
	.row()
	.submenu("ETH", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("ETH"), { parse_mode: "HTML" })
	)
	.submenu("BSC", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("BSC"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("ARB", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("ARB"), { parse_mode: "HTML" })
	)
	.submenu("Polygon", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("Polygon"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("Fantom", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("Fantom"), { parse_mode: "HTML" })
	)
	.submenu("Aptos", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("Aptos"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("Solana", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("Solana"), { parse_mode: "HTML" })
	)
	.submenu("Optimism", "mainWallets", (ctx) =>
		ctx.editMessageText(textWallet("Optimism"), { parse_mode: "HTML" })
	)
	.row()
	.back("⬅️ Go Back", (ctx) =>
		ctx.editMessageText(textPannel, { parse_mode: "HTML" })
	);

const mainWallets = new Menu("mainWallets")
	.text("Select Options")
	.row()
	.text("💉 Connect Wallet", (ctx) => ctx.reply(textInfo))
	.text("🔧 Generate Wallet", (ctx) => ctx.reply(textInfo))
	.row()
	.text("🧲 Multi-Wallet", (ctx) => ctx.reply(textInfo))
	.text("⚙️ Config", (ctx) => ctx.reply(textInfo))
	.row()
	.back("⬅️ Go Back", (ctx) => ctx.editMessageText(textChain));

const settingsChain = new Menu("settingsChain")
	.text("Select Options")
	.row()
	.submenu("ETH", "settings", (ctx) =>
		ctx.editMessageText(textSetting("ETH"), { parse_mode: "HTML" })
	)
	.submenu("BSC", "settings", (ctx) =>
		ctx.editMessageText(textSetting("BSC"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("ARB", "settings", (ctx) =>
		ctx.editMessageText(textSetting("ARB"), { parse_mode: "HTML" })
	)
	.submenu("Polygon", "settings", (ctx) =>
		ctx.editMessageText(textSetting("Polygon"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("Fantom", "settings", (ctx) =>
		ctx.editMessageText(textSetting("Fantom"), { parse_mode: "HTML" })
	)
	.submenu("Aptos", "settings", (ctx) =>
		ctx.editMessageText(textSetting("Aptos"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("Solana", "settings", (ctx) =>
		ctx.editMessageText(textSetting("Solana"), { parse_mode: "HTML" })
	)
	.submenu("Optimism", "settings", (ctx) =>
		ctx.editMessageText(textSetting("Optimism"), { parse_mode: "HTML" })
	)
	.row()
	.back("⬅️ Go Back", (ctx) =>
		ctx.editMessageText(textPannel, { parse_mode: "HTML" })
	);

const settings = new Menu("settings")
	.text("Select Options")
	.row()
	.text("⚙️ Approve", (ctx) => ctx.reply(textInfo))
	.text("⚙️ Buy", (ctx) => ctx.reply(textInfo))
	.text("⚙️ Sell", (ctx) => ctx.reply(textInfo))
	.row()
	.text("❌ Anti-Rug", (ctx) => ctx.reply(textInfo))
	.text("❌ Anti-Mev", (ctx) => ctx.reply(textInfo))
	.row()
	.text("✏️ Slippage", (ctx) => ctx.reply(textInfo))
	.text("🔨 Slippage", (ctx) => ctx.reply(textInfo))
	.row()
	.text("✏️ Max Gas Limit", (ctx) => ctx.reply(textInfo))
	.text("🔨 Max Gas Limit", (ctx) => ctx.reply(textInfo))
	.row()
	.text("✏️ Max Gas Price", (ctx) => ctx.reply(textInfo))
	.text("🔨 Max Gas Price", (ctx) => ctx.reply(textInfo))
	.row()
	.back("⬅️ Go Back", (ctx) => ctx.editMessageText(textChain));

wallets.register(mainWallets);
settingsChain.register(settings);

snipeMenu.register(settingsChain);
snipeMenu.register(wallets);

bot.use(snipeMenu);

export { snipeMenu, wallets,settingsChain };
