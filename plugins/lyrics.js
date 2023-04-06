import { lirik } from '../json/lirik.js'

let handler = async (m, { conn, usedPrefix, text }) => {
if (!text) return m.reply('Masukan Query Lyrics/Lirik')
let res = await lirik(text)
let { stat, title, lyrics } = res.result
let lirikk = `${title}

${lyrics}`
m.reply(lirikk)
}
handler.help = ['lirik', 'lyrisc']
handler.tags = ['search']
handler.command = ['lirik', 'lyrisc']

handler.limit = true 

export default handler