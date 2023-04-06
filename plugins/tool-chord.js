import { chord } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord hanya rindu', m)
 try {
    let res = await chord(text)
    let hasil = `*• Chord Lagu :* ${text} 
 
° Title : ${res.title}
• Artis : ${res.artist}

*${res.chord}*

• Url : ${res.url}
• Artis Url : ${res.artistUrl}`
conn.reply(m.chat, hasil, m)
    } catch (e) {
    m.reply('Chord tidak di temukan')
    throw e 
    }
}
handler.help = ['chord <judul lagu>']
handler.tags = ['tools']
handler.command = /^(chord)$/i
handler.limit = true

export default handler

import got from 'got'
import cheerio from 'cheerio'

export async function chord(query) {

  const search = await got(`https://www.gitagram.com/?cat=&s${encodeURIComponent(query).replace(/%20/g, '+')}`)
  const $ = cheerio.load(search.body)
  const $url = $('table.table > tbody > tr').eq(0).find('td').eq(0).find('a').eq(0)
  const url = $url.attr('href')

  const song = await got(url)
  const $song = cheerio.load(song.body)

  const $hcontent = $song('div.hcontent')
  const artist = $hcontent.find('div > a > span.subtitle').text()!.trim()
  const artistUrl = $hcontent.find('div > a').attr('href')
  const title = $hcontent.find('h1.title').text()!.trim()
  const chord = $song('div.content > pre').text()!.trim()

  const res = {
    url: song.url,
    artist,
    artistUrl,
    title,
    chord
  }
  
  return res 
}