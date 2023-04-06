import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
import jimp from 'jimp'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
  
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    let pp = 'https://telegra.ph/file/712e80d59373d2dfe5cbe.jpg'
    const vv = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]`.trim()

        try {
        const knights = require("knights-canvas")
        const image = await new knights.Up().setAvatar(vv).toAttachment();
        const data = image.toBuffer();
        conn.sendMessage(m.chat, { image: data, caption: str }, { quoted: m }) 
    } catch (e) {
    console.log(e)
    m.reply('Error')
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler