import { bot } from "..";
import { showBotActivity } from "../actions/show-bot-activity";
import { settingsChain } from "../menu/settingMenu";

bot.command("setting", async (ctx) => {
    if (!ctx.msg) return;
    try {
    const chatId = ctx?.msg?.chat.id;
    const privateChat = ctx?.msg?.chat.type === "private";
      const topicId = ctx.msg?.message_thread_id;
      if (!privateChat) return;
    showBotActivity(ctx, chatId);
    ctx
        .reply(`Select Chain:`,
        privateChat
          ? {
              message_thread_id: topicId ?? undefined,
              reply_markup: settingsChain,
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
