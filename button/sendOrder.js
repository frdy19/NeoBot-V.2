const {
default: makeWASocket,
makeWALegacySocket,
extractMessageContent,
makeInMemoryStore,
proto,
prepareWAMessageMedia,
downloadContentFromMessage,
getBinaryNodeChild,
jidDecode,
areJidsSameUser,
generateForwardMessageContent,
generateWAMessageFromContent,
WAMessageStubType,
WA_DEFAULT_EPHEMERAL
} = await import('@adiwajshing/baileys')

async function sendOrder(jid, buffer, harga, item, title, text, qu) {
const order = socket.generateWAMessageFromContent(jid, socket.proto.Message.fromObject({
 "orderMessage": {
"orderId": "391028153034238",
"thumbnail": buffer, 
"itemCount": item, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, // Ganti Messagenya
"sellerJid": "6287768886148@s.whatsapp.net",
"token": "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==",
"totalAmount1000": harga,
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
client.relayMessage(jid, order.message, { messageId: order.key.id}, { quoted: qu })
}

export { sendOrder }