import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
   if (!text) throw `Masukan query...`
   let res = await fetch(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=cahyodev&query=${text}`)
   let jso = await res.json()
   let lis = []
   for (let i of jso.result) {
   lis.push({
   title: i.title,
   rowId: usedPrefix + 'nekodl ' + i.link,
   description: i.link 
   })
   }
let sections = [{
title: "LIST NEKOPOI SEARCH",
rows: lis
}]
let listMessage = {
text: `Silahkan Pilih Di Bawah !`,
buttonText: "Click Here",
footer: author,
sections
}
conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
handler.command = ['nekopoi']

export default handler