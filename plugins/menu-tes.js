import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let imgr = fla.getRandom()
    let pp = imgr + 'Menu Info'
    let pepe = await conn.resize(pp, 280, 250)
    let name = await conn.getName(who)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
  let cap = `${htki} 𝗠𝗘𝗡𝗨 𝗜𝗡𝗙𝗢 ${htka}
  
➥ *𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥*
  ◉ 𝗡𝗮𝗺𝗮 : ${name}
  ◉ 𝗦𝘁𝗮𝘁𝘂𝘀 : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  ◉ 𝗟𝗶𝗺𝗶𝘁 : ${limit}
  ◉ 𝗦𝗮𝗹𝗱𝗼 : R𝐩 ${money}
  ◉ 𝗘𝘅𝗽 : ${exp}
  ◉ 𝗥𝗼𝗹𝗲 : ${role}
  ◉ 𝗔𝗴𝗲 : ${age}

➥ *𝗜𝗡𝗙𝗢 𝗕𝗢𝗧*
  ◉ 𝗥𝘂𝗻𝗻𝗶𝗻𝗴 𝗕𝗼𝘁 : P𝐚𝐧𝐞𝐥
  ◉ 𝗠𝗼𝗱𝗲 : Public
  ◉ 𝗧𝗶𝗺𝗲 : ${time} ﹙ɢᴍᴛ +5:30﹚
  ◉ 𝗗𝗮𝘁𝗲 : ${date}
  ◉ 𝗧𝗼𝘁𝗮𝗹 𝗙𝗲𝗮𝘁𝘂𝗿𝗲 : ${totalf.length}
  ◉ 𝗨𝘀𝗲𝗿 𝗕𝗮𝗻𝗻𝗲𝗱 : ${users.length}

${global.cmenua}
  `
await conn.sendButton(m.chat, cap, '© 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗡𝗲𝗼𝗕𝗼𝘁 𝗩.2', Buffer.alloc(0), [['List Menu', '.tesm'], ['All Menu', '/allmenu']], fkontak, { mimetype: "text/rtf", fileName: '𝗥𝗣𝗚 𝗕𝗢𝗧 | 𝗕𝘆 𝗙𝗲𝗿𝗱𝘆', pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: pepe, 
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝗡𝗲𝗼𝗕𝗼𝘁',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝗡𝗲𝗼𝗕𝗼𝘁',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: bottime  
				}
		}
})
/*await conn.send2ButtonVid(m.chat, pp, cap, botdate, '𝐋𝐢𝐬𝐭𝐌𝐞𝐧𝐮', '.listmenu', '𝐃𝐚𝐬𝐛𝗼𝐚𝐫𝐝', '.db', m, adReply)*/
}

handler.command = /^(m)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }