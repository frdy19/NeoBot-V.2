import { youtubeSearch } from '@bochilteam/scraper'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const Scraper = require('@yimura/scraper').default 
const youtube = new Scraper();


let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = fla.getRandom()

  if (!text) throw 'Cari apa?'
try {
  let anu = await youtubeSearch(`${text}`)
    let array = [];
    anu.video.forEach(function(i) {
        array.push({
          title: i.title,
          rowId: usedPrefix + `ytplay ${i.url}`,
          description: `${i.authorName} | ⏰ ${i.durationH}`
        });
    });
    const sections = [
      {
        title: `━ ━ ━ ━ 『 Youtube Search 』 ━ ━ ━ ━`,
        rows: array
      }
    ]
    const listMessage = {
      text: `*${htki} Youtube Search ${htka}*\n\n𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐁𝐲 : ${name}\n𝐑𝐞𝐬𝐮𝐥𝐭 𝐅𝐫𝗼𝗺 : ${text}\n\n*𝐂𝐡𝗼𝗼𝐬𝐞 𝐘𝗼𝐮𝐓𝐮𝐛𝐞 𝐒𝐞𝐚𝐫𝐜𝐡* `,
      footer: global.author,
      //title: `⎔───「 ${packname} 」───⎔`,
      buttonText: `List Search 🎫`,
      sections
    }
    await conn.sendMessage(m.chat, listMessage, { quoted : m })
    } catch (e) {
    console.log(e)
try {
  let res = await youtube.search(text)
    let lis = []
    res.videos.forEach(function(i) {
        array.push({
          title: i.title,
          rowId: usedPrefix + `ytplay ${i.link}`,
          description: `ID : ${i.id}\nDuration : ${i.duration_raw}`
        });
    });    
    const sections = [
      {
        title: `━ ━ ━ ━ 『 Youtube Search 』 ━ ━ ━ ━`,
        rows: array
      }
    ]
    const listMessage = {
      text: `*${htki} Youtube Search ${htka}*\n\n𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐁𝐲 : ${name}\n𝐑𝐞𝐬𝐮𝐥𝐭 𝐅𝐫𝗼𝗺 : ${text}\n\n*𝐂𝐡𝗼𝗼𝐬𝐞 𝐘𝗼𝐮𝐓𝐮𝐛𝐞 𝐒𝐞𝐚𝐫𝐜𝐡* `,
      footer: global.author,
      //title: `⎔───「 ${packname} 」───⎔`,
      buttonText: `List Search 🎫`,
      sections
    }
    await conn.sendMessage(m.chat, listMessage, { quoted : m })
    } catch (e) { 
    console.log(e)
    m.reply('Tidak Di Temukan')
    }
  }
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler