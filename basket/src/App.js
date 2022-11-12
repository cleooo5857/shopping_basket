import Basket from "./components/basketitem/index";
import BasketList from "./components/pages/basketlist";
import {useState} from 'react'

const cart_item = [
  {
    id: 1,
    name: '영귤섬 아이스티',
    price: 13000,
    amount: 1,
  },
  {
    id: 2,
    name: '러블리 티 박스',
    price: 20000,
    amount: 1,
  },
  {
    id: 3,
    name: '그린티 랑드샤 세트',
    packingState: '포장불가',
    price: 36000,
    amount: 1,
  },
  {
    id: 4,
    name: '구찌',
    packingState: '포장불가',
    price: 326000,
    amount: 1,
  },
  {
    id: 5,
    name: '프라다',
    packingState: '포장불가',
    price: 236000,
    amount: 1,
  },
  {
    id: 6,
    name: '빈폴',
    packingState: '포장불가',
    price: 50000,
    amount: 1,
  },
];



function App() {
  return (
    <>
      <Basket cart_item={cart_item}/>
      <BasketList />
    </>
  );
}

export default App;
