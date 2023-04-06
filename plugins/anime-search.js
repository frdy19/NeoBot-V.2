import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan Query Anime'
let anu = await fetch(`https://api.jikan.moe/v4/anime?q=${text}&sfw`)
let res = await anu.json()
let array = [];
for (var x of res.data) {
array.push({
title: x.title,
rowId: usedPrefix + 'animeinfo ' + x.mal_id,
description: `Status : ${x.status}\nRating : ${x.score} ( ${x.rating} )`
})
}
let sections = [{
title: `Search From ${text}`,
rows: array
}]
let listMessage = {
text: `Search Anime From : ${text}\n\nRequest : @${m.sender.split`@`[0]}`,
buttonText: "CLICK HERE",
mentions: [m.sender],
footer: author,
sections
}
conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
handler.help = ['anime', 'animesearch']
handler.tags = ['info']
handler.command = /^(anime|animesearch)$/i

handler.limit = true 

export default handler