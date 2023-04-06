/*
* By Arifzyn
* Yang Hapus Ini Anak Yatim, 
* Aowkwowk 
*/

import fetch from 'node-fetch'
import cp from 'caliph-api'

let handler = async (m, { conn, usedPrefix, command, text }) => { 
  if (!text) throw '[!] Masukan URL YouTube'
try {
   let res = await cp.downloader.yt.mp4(text);
   let { title, result, quality, size, duration, thumb, views, channel, uploadDate, desc } = res.result
   let cap = `${title}

*Quality :* ${quality}
*Size :* ${size}
*Duration :* ${duration}
*Views :* ${views}
*Channel :* ${channel}
*Upload Date :* ${uploadDate}

*Description :* ${desc}


WAITING VIDEO IS BEING SENT....`
const Arifzyn = await conn.sendMessage(m.chat, { image: { url: thumb }, caption: cap }, { quoted: m })
await conn.sendMessage(m.chat, { video: { url: result }, caption: 'YouTube Downloader MP4' }, { quoted: m })
} catch (e) {
console.log(e)
m.reply('Server Sedang Error...')
}
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler