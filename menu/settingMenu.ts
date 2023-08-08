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

const settingsChain = new Menu("settingsChains")
	.text("Select Options")
	.row()
	.submenu("ETH", "setting", (ctx) =>
		ctx.editMessageText(textSetting("ETH"), { parse_mode: "HTML" })
	)
	.submenu("BSC", "setting", (ctx) =>
		ctx.editMessageText(textSetting("BSC"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("ARB", "setting", (ctx) =>
		ctx.editMessageText(textSetting("ARB"), { parse_mode: "HTML" })
	)
	.submenu("Polygon", "setting", (ctx) =>
		ctx.editMessageText(textSetting("Polygon"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("Fantom", "setting", (ctx) =>
		ctx.editMessageText(textSetting("Fantom"), { parse_mode: "HTML" })
	)
	.submenu("Aptos", "setting", (ctx) =>
		ctx.editMessageText(textSetting("Aptos"), { parse_mode: "HTML" })
	)
	.row()
	.submenu("Solana", "setting", (ctx) =>
		ctx.editMessageText(textSetting("Solana"), { parse_mode: "HTML" })
	)
	.submenu("Optimism", "setting", (ctx) =>
		ctx.editMessageText(textSetting("Optimism"), { parse_mode: "HTML" })
	)
	.row()

const setting = new Menu("setting")
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

settingsChain.register(setting);

bot.use(settingsChain);
export {settingsChain}