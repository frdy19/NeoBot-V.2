import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Gunakan format ${usedPrefix}${command} [username]\nContoh: ${usedPrefix}${command} jokowi`
  let x = await fetch(`https://api.zahwazein.xyz/stalker/ig?username=${args[0]}n&apikey=cahyodev`)
  let anu = await x.json()
  let res = anu.result 
  let cap = `[--] Stalking Instagram [--]

Full name : ${res.fullname}
User name : ${res.username}
Post : ${res.post}
Followers : ${res.followers}
Following : ${res.following}
Bio : ${res.bio}`
conn.sendFile(m.chat, res.profile, 'pp.jpg', cap, m)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true

export default handler