import { Aki } from 'aki-api-v2';

export async function run() {
    const region = 'id';
    const childMode = false;
    const proxy = undefined;
    const aki = new Aki({ region, childMode, proxy });
    await aki.start();
    console.log('question:', aki.question);
    console.log('answers: ', aki.answers);
}