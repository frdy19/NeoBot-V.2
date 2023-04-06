import { ssweb } from '../lib/ssweb.js'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan URL Yang Di Awali http/https'
let res = await ssweb(text)
const button = [{
urlButton: { 
displayText: 'URL', 
url: text 
}}]
conn.sendMessage(m.chat, { 
image: res.result, 
caption: htki + ' Screenshot Web ' + htka + '\n\n', 
footer: '𝕊𝕔𝕣𝕖𝕟𝕟𝕤𝕙𝕠𝕥 𝕎𝕖𝕓𝕤𝕚𝕥𝕖 𝔹𝕪 : 𝕊𝕜𝕪𝔹𝕠𝕥', 
templateButtons: button 
}, { quoted: m }) 
} 
handler.help = ['ssweb2']
handler.tags = ['tools']
handler.command = ['ssweb2']

handler.limit = true 

export default handler