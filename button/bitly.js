import { BitlyClient } from 'bitly';
const short = new BitlyClient('98d199c08cb3f9dff18514a2816010e69890f575');

export async function bitly(url) {
        const res = await short.shorten(url);
        const result = {
        status: '200', 
        message: 'sukses',
        creator: 'Arifzyn',
        result: res 
        }
        return result 
        }