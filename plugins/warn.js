const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');


Asena.addCommand({pattern: 'warn', fromMe: false, desc: Lang.WN}, (async (message, match) => { await message.client.blockUser(message.reply_message.jid, "remove"); await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```,MessageType.text, { quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
  
   
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⚠️Warning ⚠️
2 warnings remaining
User : ⁩ 
`}) 

}));
