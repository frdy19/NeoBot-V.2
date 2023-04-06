import { sleep } from '../lib/sleep.js'

let handler = m => m
handler.all = async function (m) {
global.slep = sleep 
}
export default handler