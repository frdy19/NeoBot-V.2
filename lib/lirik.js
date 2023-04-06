import findLyrics from 'simple-find-lyrics'

async function lirik(s) {
    const lyrics = await findLyrics(s);
    const hasil = [] 
    hasil.push({ 
    status: '200', 
    hasil: 'sukses',
    creator: 'Arifzyn',
    result: lyrics 
    });
    return hasil
}

export {
lirik 
}