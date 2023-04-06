let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!args[0]) { 
const sections = [
   {
	title: "Random Asupan",
	rows: [
	    {title: "Khusus Premium User", rowId: usedPrefix + 'asutes', description: '➩ Random Asupan Mp4' },
	    {title: "Khusus Premium User", rowId: usedPrefix + 'asutes2', description: '➩ Random Asupan Tiktok Mp4' },
	    {title: "Khusus Premium User", rowId: usedPrefix + 'asutes3', description: '➩ Random Asupan Aeunicetjoaa Mp4' },
	    {title: "Khusus Premium User", rowId: usedPrefix + 'asutes4', description: '➩ Random Asupan Natajadeh Mp4' },
	    {title: "cecan", rowId: usedPrefix + 'cecan', description: '➩ Random Cecan img' },
	    {title: "china", rowId: usedPrefix + 'china', description: '➩ Random Asupan China img' },
	    {title: "thailand", rowId: usedPrefix + 'thailand', description: '➩ Random Asupan Thailand img' },
	    {title: "vietnam", rowId: usedPrefix + 'vietnam', description: '➩ Random vietnam img' },
	    {title: "kayes", rowId: usedPrefix + 'kayes', description: '➩ Random kayes img' },
	    {title: "notnot", rowId: usedPrefix + 'notnot', description: '➩ Random notnot img' },
	    {title: "ryujin", rowId: usedPrefix + 'ryujin', description: '➩ Random ryujin img' },
	    {title: "justina", rowId: usedPrefix + 'justina', description: '➩ Random justina img' },
	    {title: "rose", rowId: usedPrefix + 'rose', description: '➩ Random rose img' },
	    {title: "kpop", rowId: usedPrefix + 'kpop', description: '➩ Random kpop img' },
	]
    },
]

const listMessage = {
  text: 'Silahkan Pilih Di Bawah !',
  footer: author,
  title: `${htki} ${htka}`,
  buttonText: "Click Here To Select Asupan",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
let url = `https://zenzapis.xyz/randomasupan/${args[0]}?apikey=cahyokun`
let weem = 'Next ? Click Di Bawah !'
if(args[0]) await conn.sendButton(m.chat, `_➩ Random Asupan> ${args[0]}_`, weem, url, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['asupan']
handler.tags = ['internet', 'random']
handler.command = /^(asupan)$/i

handler.limit = true

export default handler