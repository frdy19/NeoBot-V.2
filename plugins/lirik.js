import lyrics from "lyrics-grabber";

export async function lyrics(query) {
  const data = await lyrics.getLyrics(query); // Make sure to use await or else it'll return undefined
  console.log(data); // logging the data.
}