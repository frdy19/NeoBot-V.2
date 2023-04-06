let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let data = db.data.datas.owner
let name_own = await conn.getName(data[0].owner + '@s.whatsapp.net')

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;${data[0].nama}\nNICKNAME:👑 Owner 𝗡𝗲𝗼𝗕𝗼𝘁-𝗠𝗱\nORG:${data[0].nama}\nTITLE:soft\nitem1.TEL;waid=${data[0].nomor}:${data[0].nomorown}\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://lynk.id/\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:https://youtube.com/\nitem3.X-ABLabel:💌 Mail Owner SkyBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 07 Agustus 2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler