let handler = async (m, { conn }) => {
let sewa = `Hai @${m.sender.split`@`[0]}, Ingin Sewa Bot ?

Sewa Bot 
35K Permanen

Premium 
25K Permanen

Jadi Bot 
40K Perbulan

Jadi Owner 
55K Permanen 

Jasa Run
30K Perbulan

Minat ?
Chat wa.me/62895347198105`
conn.reply(m.chat, sewa, m, { mentions: [m.sender] }) 
}
handler.help = handler.command = ['premium', 'sewabot', 'jadibot', 'jasarun', 'jadiowner']
handler.tags = ['info']

export default handler