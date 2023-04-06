import fetch from 'node-fetch'
import { xnxxsearch } from '../lib/xnxx.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example : ${usedPrefix + command} step sister`
	text = text.split('||')
	try {
		if (!text[1]) {
			let anu = await xnxxsearch(`${encodeURIComponent(text)}`)
			console.log(anu)
			let array = []
			anu.result.forEach(function(i) {
				array.push({
					title: i.title,
					rowId: usedPrefix + 'xnxxdl ' + i.link,
					description: i.info
				});
			});
			const sections = [
				{
					title: `━ ━ ━ ━ 『 XNXX Search 』 ━ ━ ━ ━`,
					rows: array
				}
			]
			const listMessage = {
				text: `*Request From :* @${m.sender.split`@`[0]}\n\n*Result :* ${text[0]}`,
				mentions: [m.sender],
				footer: author,
				title: `━ ━ 『 *XNXX SEARCH* 』 ━ ━`,
				buttonText: `Search Results`,
				sections
			}
			await conn.sendMessage(m.chat, listMessage, { quoted : m })
		} else {
			m.reply(`Judul : ${text[0]}\nInfo : ${text[1]}\nLink : ${text[2]}`)
		}
	} catch (e) {
		console.log(e)
		m.reply('Error!')
	}
}

handler.help = ['xnxxs <teks>']
handler.tags = ['premium']
handler.command = /^(xnxx(s(earch)?))$/i

handler.premium = true 

export default handler