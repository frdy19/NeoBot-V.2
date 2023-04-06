import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSJE2ffo4`)
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=cahyokun&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `Nih ${conn.getName(m.sender)}`
conn.sendFile(m.chat, media[2].url, 'eror.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['ttaudio']
handler.tags = ['downloader']
handler.command = /^((tt|tiktok)(audio|mp3))$/i
handler.limit = true

export default handler