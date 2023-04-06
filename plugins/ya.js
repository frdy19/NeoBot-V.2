import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let name = await conn.getName(m.sender)
let ownernya = `@${nomorown.split`@`[0]}`
let pp = fla.getRandom()
let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let tagnya = `@${m.sender.split`@`[0]}`
let fakeig = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: 'https://instagram.com/xhumb_har',
						mediaType: 'VIDEO',
						description: 'Follow: ',
						title: wm2,
						body: botdate,
						thumbnailUrl: 'https://telegra.ph/file/52d129937eebdce7f8bee.jpg',
						sourceUrl: 'https://instagram.com/xhumb_har'
					}
				}
			}
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let usrs = db.data.users[m.sender]

//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `𝙹𝙰𝙽𝙶𝙰𝙽 𝚂𝙿𝙰𝙼(•ˋ _ ˊ•)`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/5f028205d010a090a21fb.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offsetalldiii0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
//==============> Menu nya
let intro = `
${readMore}
𝙷𝙰𝙻𝙾 ${ucapan()} ${tag} ,𝙰𝙺𝚄 𝙰𝙳𝙰𝙻𝙰𝙷 𝙺𝙰𝙶𝚄𝙼𝙸𝙱𝙾𝚃-𝙼𝙳 𝚈𝙶 𝙳𝙸 𝙺𝙴𝙼𝙱𝙰𝙽𝙶𝙺𝙰𝙽 𝙾𝙻𝙴𝙷 ${ownernya} 𝙼𝙴𝙽𝙶𝙶𝚄𝙽𝙰𝙺𝙰𝙽 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙻 𝙽𝙾𝙳𝙴.𝙹𝚂 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝚁𝙸𝙽𝙶𝙰𝙽𝙺𝙰𝙽 𝙿𝙴𝙺𝙴𝚁𝙹𝙰𝙰𝙽𝙼𝚄, 𝙿𝙴𝙽𝙲𝙴𝚃 𝙱𝚄𝚃𝚃𝙾𝙽 𝙳𝙸𝙱𝙰𝚆𝙰𝙷 𝚄𝙽𝚃𝚄𝙺 𝙼𝙴𝙻𝙸𝙷𝙰𝚃 𝙼𝙴𝙽𝚄 𝙺𝙰𝙶𝚄𝙼𝙸 𝙺𝙰𝙺, 𝙹𝙰𝙽𝙶𝙰𝙽 𝚂𝙿𝙰𝙼 𝚈𝙰 𝙺𝙰𝙺 
${readMore}

☰ ━━━ ❨ 𝐌𝐄𝐍𝐔 𝐈𝐍𝐅𝐎 ❩ ━━┄┈ ☰
  
➥ *𝐈𝐍𝐅𝐎 USER*
◉☂︎ *Name:* ${name}
◉☂︎ *Tag:* ${tagnya}
◉☂︎ *Premium:* ${usrs.premiumTime > 1 ? '✔ Ya': '✘ Tidak'}
◉☂︎ *Limit:* ${usrs.limit}
◉☂︎ *Money:* ${money}
◉☂︎ *Role:* ${usrs.role} 
◉☂︎ *Level:* ${usrs.limit}
☰ ━━━ ❨ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ❩ ━━┄┈ ☰
◉ 𝐓𝐢𝗺𝐞 : ${time} ﹙ɢᴍᴛ +5:30﹚
◉ 𝐓𝗼𝐭𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞 : ${totalf.length}
◉ 𝐔𝐬𝐞𝐫 𝐁𝐚𝐧𝐧𝐞𝐝 : ${users.length}
━━━━━━━━━━━━━━━━━━━━━
`
conn.send2ButtonDoc(m.chat, '\n\n     *『 ᴋᴀɢᴜᴍɪ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ 』*\n\n' + intro, titlebot, '𝙰𝙻𝙻 𝙼𝙴𝙽𝚄', '.? all', '𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄', '.tesm', fvn, fakeig)
}
        
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(co)$/i
handler.register = false

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Selamat pagi Kak ☀"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "selamat Malam Kak 🌙"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}