import Nhentaikyy from "nhentai-ikyy";
const nhentai = new Nhentaikyy()

export async function nhentaiSearch(query) {
      const res = await nhentai.search(query)
      const { total, total_pages } = res 
      const Arifzyn = { 
      status: '200',
      creator: 'Arifzyn', 
      total: total, 
      total_pages: total_pages,
      result: res.result 
      }
      return Arifzyn
  }