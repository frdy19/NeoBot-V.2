import { sendArif } from '../lib/sendArif.js'

let handler = async (m, { 
conn, text, usedPrefix, command 
}) => {
conn.menfess = conn.menfess ? conn.menfess : {}
if (!text) return m.reply(`🚩 Gunakan format ${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Contoh :* ${usedPrefix + command} ${m.sender.split('@')[0]}|Bot|Hi\n\n*Note :* Nama pengirim dapat berupa nama samaran atau anonymous.`)
let [jid, name, pesan] = text.split`|`
if ((!jid || !name || !pesan)) return m.reply(`🚩 Gunakan format ${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Contoh :* ${usedPrefix + command} ${m.sender.split('@')[0]}|Bot|Hi\n\n*Note :* Nama pengirim dapat berupa nama samaran atau anonymous.`)
let place = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let data = (await conn.onWhatsApp(place))[0] || {};
if (!data.exists) return m.reply('🚩 Nomer tidak terdaftar di whatsapp.')
if (jid == m.sender) return m.reply('🚩 Tidak bisa mengirim pesan menfess ke diri sendiri.')
let mf = Object.values(conn.menfess).find(mf => mf.status === true)
if (mf) return !0
try {
let id = + new Date
let txt = `*M E N F E S S - W H A T S A P P*

Hai @${data.jid.split('@')[0]}, kamu mendapatkan pesan rahasia dari seseorang nih.

*Pengirim :* ${name}
*Pesan :* ${pesan}

Ingin membalas pesan ini? kamu tinggal ketik pesan kamu lalu kirim dengan mereply pesan ini, maka bot akan otomatis memberikan balasanmu kepada pengirim menfess ini.
`.trim()
conn.reply(data.jid, txt, null, { mentions: conn.parseMention(txt), buttons: [{buttonId: '.balasmenfess', buttonText: {displayText: '♨️ Balas Pesan'}, type: 1}], headerType: 5, footer: '_Menfess - Whatsapp Bot_' }).then(() => { 
m.reply('🚩 Berhasil mengirim pesan menfess.')
conn.menfess[data.jid] = {
id,
dari: m.sender,
nama: name,
penerima: data.jid,
pesan: pesan,
balas: false
}
return !0
})
} catch(e) {
throw e
m.reply('*🚩 Terjadi kesalahan.*')
}
}
handler.tags = ['random']
handler.help = ['menfess', 'confes', 'menfes']
handler.command = /^(menfess|menfes|confess|confes)$/i

handler.private = true

export default handler 

// Menfess By Arifzyn