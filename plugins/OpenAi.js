import request from 'request'
import openai from 'openai'
let handler = async (m, { conn, text }) => {
openai.apiKey = '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';


// Read a line of input from the user and store it in a variable
const prompt = text;
const model = 'text-davinci-003';

const options = {
    method: 'POST',
    url: 'https://api.openai.com/v1/completions',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openai.apiKey}`
    },
    json: true,
    body: {
        prompt: prompt,
        model: model,
        max_tokens: 1024,       
        temperature: 0.5,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }
};
request(options, function (error, response, body) {
    //spinner.stop();
  //  if (error) throw new Error(error);

  conn.reply(m.chat, body.choices[0].text, m);
});
}
handler.command = ['ai']
export default handler