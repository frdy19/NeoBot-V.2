import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/pinterest?apikey=SadTeams&query=Yae'
	conn.sendButton(m.chat, 'Wangy wangy (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(yae)$/i
handler.tags = ['anime', 'premium', 'nsfw']
handler.help = ['Yae']
handler.premium = true

export default handler