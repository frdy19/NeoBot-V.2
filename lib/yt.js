import axios from 'axios'
import cheerio from 'cheerio'

export async function youtube(type, link, quality) {
    return new Promise(async (resolve, reject) => {
        const ytIdRegex =
            /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/;
        quality ? quality : (quality = 360);
        if (ytIdRegex.test(link)) {
            let url = ytIdRegex.exec(link);
            let mdata = await yt({
                videoId: url[1],
            });
            let config = {
                url: "https://www.youtube.be/" + url,
                q_auto: 0,
                ajax: 1,
            };
            let headerss = {
                "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                Cookie: 'PHPSESSID=6jo2ggb63g5mjvgj45f612ogt7; _ga=GA1.2.405896420.1625200423; _gid=GA1.2.2135261581.1625200423; _PN_SBSCRBR_FALLBACK_DENIED=1625200785624; MarketGidStorage={"0":{},"C702514":{"page":5,"time":1625200846733}}',
            };
            axios("https://www.y2mate.com/mates/id276/analyze/ajax", {
                    method: "POST",
                    data: new URLSearchParams(Object.entries(config)),
                    headers: headerss,
                })
                .then(({
                    data
                }) => {
                    const $ = cheerio.load(data.result);
                    //#mp4 > table > tbody > tr:nth-child(1) > td:nth-child(2)
                    asize = {
                        mp3: [],
                        mp4: []
                    };
                    $("#mp4 > table > tbody > tr").each(function() {
                        asize.mp4.push({
                            quality: $(this).find("td:nth-child(1)").text().trim().split(" ")[0],
                            size: $(this).find("td:nth-child(2)").text(),
                        });
                    });
                    let img = $("div.thumbnail.cover > a > img").attr("src");
                    let title = $("div.thumbnail.cover > div > b").text();
                    let size =
                        type == "mp4" ?
                        asize.mp4.find((sz) => sz.quality == quality + "p").size :
                        $("#audio > table > tbody > tr:nth-child(1) > td:nth-child(2)").text();
                    let id = /var k__id = "(.*?)"/.exec(data.result)[1] || url[1];
                    let configs = {
                        type: "youtube",
                        _id: id,
                        v_id: url[1],
                        ajax: "1",
                        token: "",
                        ftype: "mp4",
                        fquality: quality ? quality : 480,
                    };
                    axios("https://www.y2mate.com/mates/id276/convert", {
                        method: "POST",
                        data: new URLSearchParams(Object.entries(configs)),
                        headers: headerss,
                    }).then(({
                        data
                    }) => {
                        const $ = cheerio.load(data.result);
                        let link = $("div > a").attr("href");

                        let configss = {
                            type: "youtube",
                            _id: id,
                            v_id: url[1],
                            ajax: "1",
                            token: "",
                            ftype: "mp3",
                            fquality: 128,
                        };
                        axios("https://www.y2mate.com/mates/en68/convert", {
                            method: "POST",
                            data: new URLSearchParams(Object.entries(configss)),
                            headers: headerss,
                        }).then(({
                            data
                        }) => {
                            const $ = cheerio.load(data.result);
                            let audio = $("div > a").attr("href");
                            // const mdata2 = mdata.all[0]
                            // const array = Object.keys(mdata2)
                            // const isi = Object.values(mdata2)
                            // let json = {}
                            // for (let x = 0; x < array.length; x++) {
                            // 	json[array[x]] = isi[x]
                            // }
                            resolve({
                                status: true,
                                id: url[1],
                                title: title,
                                size: size,
                                quality: quality,
                                thumb: img,
                                link: type == "mp4" ? link : audio,
                                ...mdata,
                            });
                        });
                    }).catch(error.link)
                }).catch(error.link)
        } else resolve(error.link);
    });
};