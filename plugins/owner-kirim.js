let handler = async (m, { conn, text }) => {
if (!m.quoted) return m.reply('Reply Pesan Yang Mau Di Kirim !')
let [type, jumlah] = text.split('|')
if (!type) throw 'Masuka Type !\n\nType :\nMoney\nLimit\nbalance\nExp'
if (!jumlah) throw 'Masukan Jumlah Yanh Mau Di Kirim '
if (!type.includes) throw 'Type Salah !!'
let usr = m.quoted.sender
let usrr = global.db.data.users[usr]
conn.reply(m.chat, `Berhasil Kirim\n*Type :* ${type}\n*Jumblah :* ${jumlah * 1}\n*Ke :* @${usr.split`@`[0]}`, fkontak, { mentions: [m.quoted.sender] })
usrr[type] += jumlah * 1
}
handler.command = ['kirim']

handler.owner = true 

export default handler