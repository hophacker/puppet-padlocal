import { addMessageParser, executeMessageParsers } from "./message-parser.js";
import { typeParser } from "./message-parser-type.js";
import { roomParser } from "./message-parser-room.js";
import { singleChatParser } from "./message-parser-single-chat.js";
import { appMsgParser } from "./message-parser-appmsg.js";
import { referMsgParser } from "./message-parser-refermsg.js";
import { roomSysmsgParser } from "./message-parser-room-sysmsg.js";

// The order of message parser is important
addMessageParser(typeParser);
addMessageParser(roomParser);
addMessageParser(roomSysmsgParser);
addMessageParser(singleChatParser);
addMessageParser(appMsgParser);
addMessageParser(referMsgParser);

export { executeMessageParsers };
