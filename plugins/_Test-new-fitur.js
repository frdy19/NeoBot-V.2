let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} List Options`,
	rows: [
	    {title: "✨ | Yuri", rowId: `.hentai`},
	    {title: "✨ | Hentai", rowId: `${usedPrefix } yuri`},
            {title: "✨ | Blowjob", rowId: `${usedPrefix } Blowjob`},
	    {title: "✨ | Ahegao", rowId: `${usedPrefix } ahegao`},
	{title: "✨ | Cum", rowId: `.Cum`},
	{title: "✨ | Tes", rowld: `${usedPrefix} game` },
	{title: "✨ | Tes", rowId: `${usedPrefix} nsfw`},
	{title: "✨ | Tes", rowId: `${usedPrefix} premnsfwchat`},
	{title: "✨ | Tes", rowId: `${usedPrefix} antilink`},
	{title: "✨ | Tes", rowId: `${usedPrefix } antidelete`},
	{title: "✨ | Tes", rowId: `${usedPrefix } antitoxic`},
	{title: "✨ | Tes", rowId: `${usedPrefix} autolevelup`},
	{title: "✨ | Tes", rowId: `${usedPrefix} detect`},
	{title: "✨ | Tes", rowId: `${usedPrefix} document`},
	{title: "✨ | Tes", rowId: `${usedPrefix} swonly`},
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}
default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
 
handler.help = ['test']
handler.tags = ['nsfw']
handler.command = /^(tes)$/i
handler.premium = false


export default handler