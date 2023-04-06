let handler = async (m, { conn }) => {
	let who
	if (m.isGroup) who = m.quoted ? m.quoted.sender : m.mentionedJid[0]
	else who = m.chat
	if (!who) throw 'Tag salah satu lah'
	try {
		let user = global.db.data.users[who]
		user.banned = true
		conn.reply(m.chat, `berhasil banned`, m)
	} catch (e) {
		console.log(e)
		m.reply(`User tidak ada dalam database.`)
	}
}

handler.menuowner = ['ban @tag']
handler.tagsowner = ['owner']
handler.command = /^(ban(user)?)$/i

handler.owner = true

export default handler