import baileys from '@adiwajshing/baileys'

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys

async function sendArifMessage(jid, message, quoted, options = {}){
    let generate = await generateWAMessage(jid, message, quoted, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(jid, generate.message, { quoted, messageId: generate.key.id })
}

export {
sendArifMessage
}