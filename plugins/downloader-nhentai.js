import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {

if (!args[0]) throw 'Masukan code'
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${args[0]}?apikey=082138`)
let jso = await res.json()
conn.sendMessage(m.chat, { document: { url: jso.result }, fileName: 'nhentai.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = ['nhentai']
handler.tags = ['nsfw']
handler.command = /^(nhentai)$/i
handler.premium = true
handler.limit = 3

export default handler