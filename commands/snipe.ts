import { bot } from "..";
import { showBotActivity } from "../actions/show-bot-activity";
import { snipeMenu } from "../menu/snipeMenu";

bot.command("snipe", async (ctx) => {
    if (!ctx.msg) return;
    try {
    const chatId = ctx?.msg?.chat.id;
    const privateChat = ctx?.msg?.chat.type === "private";
      const topicId = ctx.msg?.message_thread_id;
      if (!privateChat) return;
    showBotActivity(ctx, chatId);
    ctx
        .reply(`<b>RacaSnipBot Panel</b>
      
<b>Monitor</b>
Active Trades: <b>0</b>
Disabled Trades: <b>0</b>

<b>Snipe Mode</b>
Active Trades: <b>0</b>
Disabled Trades: <b>0</b>
        `,
        privateChat
          ? {
              message_thread_id: topicId ?? undefined,
              reply_markup: snipeMenu,
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
