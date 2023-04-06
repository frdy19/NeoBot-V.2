import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan URL TikTok...'
let anu = await fetch(`https://api.zahwazein.xyz/downloader/tiktok?apikey=cahyodev&url=${text}`)
let res = await anu.json()
let { duration, play_url, id, title } = res.result.music
await m.reply(`${title}

*ID:* ${id}
*Duration:* ${duration}`)
conn.sendFile(m.chat, play_url, 'eror.m4a', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['ttmp3', 'ttaudio', 'tiktokmp3', 'tiktokaudio']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)audio|mp3$/i

handler.limit = true 

export default handler