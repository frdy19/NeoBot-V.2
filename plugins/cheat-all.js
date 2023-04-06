let handler = async (m) => {
let user = db.data.users[m.sender]
m.reply('Sukses')
user.money = Infinity 
user.balance = Infinity
user.limit = Infinity
}
handler.command = ['cheatall']

handler.owner = true 

export default handler