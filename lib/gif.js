export async function sendButtonGif(jid , text = '' , footer = '', gif, but = [], buff, options = {}) {
    let file = await conn.resize(buff, 300, 150)
    let a = [1,2]
    let b = a[Math.floor(Math.random() * a.length)]
    conn.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: file, templateButtons: but, ...options })
    }