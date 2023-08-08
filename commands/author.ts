import { bot } from "..";
import { Context } from "grammy";
import { showBotActivity } from "../actions/show-bot-activity";

bot.command("author", async (ctx: Context) => {
  if (!ctx.msg) return;

  try {
    const chatId = ctx?.msg?.chat.id;
    const topicId = ctx.msg?.message_thread_id;

    showBotActivity(ctx, chatId);
    ctx.reply(`Use /snipe to go to the sniperbot main panel.

<b>Telegram</b> : https://t.me/racasniperbot
<b>X</b> :  https://twitter.com/racasniperbot
<b>Website</b> : https://racabots.com`,
      {
          message_thread_id: topicId ?? undefined,
          parse_mode: "HTML"
      }
    );
  } catch (error) {
    console.error(`[Error] Cannot send source message.`, error);
    return;
  }
});
