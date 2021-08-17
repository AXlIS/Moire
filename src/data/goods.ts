type TGood = {
  id: number,
  title: string,
  price: number,
  img: string
}

const goods: Array<TGood> = [
  {
    id: 1,
    title: 'Кружевной бюстгалтер без косточек',
    price: 3690,
    img: '/img/product1.jpg'
  },
  {
    id: 2,
    title: 'Трусы с кружевными элементами',
    price: 5660,
    img: '/img/product1.jpg'
  },
  {
    id: 3,
    title: 'Теплые шерстяные носки',
    price: 790,
    img: '/img/product1.jpg'
  },
]

export default goods
