import { tiktok } from '../lib/tiktok.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
try {
   let res = await tiktok(args[0])
   let cap = `${res.title}

*[-] Author :* ${res.author}
*[-] Creator :* Arifzyn`
conn.sendHydrated(m.chat, cap, author, res.nowm, args[0], 'URL', null, null, [
   ['Get Audio', '.get ' + res.audio],
   ['With Watermark', '.get ' + res.wm],
   [null, null]
   ], m)
} catch (e) {
console.log(e)
try {
let anu = await fetch(`https://api.zahwazein.xyz/downloader/tiktok?apikey=cahyodev&url=${args[0]}`)
let res = await anu.json()
const { id, title, video, author } = res.result 
let arifzyn = `${title}

*ID :* ${id}
*Name :* ${author.name}
*Signature :* ${author.signature}`
const Arif = await conn.sendFile(m.chat, video.cover, '', arifzyn, m)
await conn.sendFile(m.chat, video.noWatermark, '', 'By Arifzyn', Arif)
} catch (e) {
console.log(e)
try {
let x = await fetch(`https://api-arifzyn-dev.my.id/api/download/tiktok?url=${args[0]}&apikey=ArifzynDev`)
let res = await x.json()
const { author, video } = res.result 
m.reply('Wait Proses...')
let cap = `${nickname}\n${unique_id}`
conn.sendFile(m.chat, video.no_watermark_hd, 'tt.mp4', cap, m)
} catch (e) {
console.log(e)
m.reply('Maap Sepertinya Ada Yang Error... !')
}
}
}
}
handler.command = /^(tt|tiktok)$/i
handler.help = ['tiktok', 'tt']
handler.tags = ['downloader']

export default handler