import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Reply Gambar nya'
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://nevrad.my.id/converter/toanime?url=${url}`)
let res = await anu.json()
let { extra } = res
await conn.sendMessage(m.chat, { image: { url: extra.img_urls[0] }, caption: 'Result Image' }, { quoted: m })
await conn.sendMessage(m.chat, { image: { url: extra.video_urls[0] }, caption: 'Result Video' }, { quoted: m })
}
handler.help = ['jadianime2']
handler.tags = ['anime', 'maker']
handler.command = /^(jadianime2)$/i

export default handler