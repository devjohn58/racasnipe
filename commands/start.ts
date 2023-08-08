import { bot } from "..";
import { showBotActivity } from "../actions/show-bot-activity";

bot.command("start", async (ctx) => {
    if (!ctx.msg) return;
    try {
    const chatId = ctx?.msg?.chat.id;
    const privateChat = ctx?.msg?.chat.type === "private";
      const topicId = ctx.msg?.message_thread_id;
      const user = ctx.msg?.from?.username;
      if (!privateChat) return;
    showBotActivity(ctx, chatId);
    ctx
      .reply(
`👋 Hello <b>${user}!</b> What would you like to do today?

We firmly believe #RACASNIPBOT is a great app , you can detect locked tokens , can track and buy according to the wallets you follow , can snip , we also have anti run feature and quickly buy contract scam codes.

And #RACASNIPBOT PREMIUM will definitely have a superior buying feature! Faster and features potential tokenization and management.
#RACASNIPBOT #ETH #RACA #MOON #UTILITY

Use /help to show list command available.
Use /snipe to go to the sniperbot main panel.

Telegram : https://t.me/racasniperbot
X :  https://twitter.com/racasniperbot
Website : https://racabots.com
`,
        privateChat
          ? {
              message_thread_id: topicId ?? undefined,
              parse_mode: "HTML"
            }
          : {
              message_thread_id: topicId ?? undefined,
            }
      )
      .catch(() => {
        console.error(`[Error] [start.ts:61] Failed to send start message.`);
        return;
      });
  } catch (error) {
    console.error({
      message: "Error replying to the start command",
      error,
    });
    return;
  }
});
