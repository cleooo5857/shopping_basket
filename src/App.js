import {BrowserRouter, Routes, Route} from "react-router-dom"
import Basket from "./components/basketitem/index";
import BasketList from "./components/pages/basketlist";

const cart_item = [
  {
    id: 1,
    name: '영귤섬 아이스티',
    price: 13000,
    count: 1,
  },
  {
    id: 2,
    name: '러블리 티 박스',
    price: 20000,
    count: 1,
  },
  {
    id: 3,
    name: '그린티 랑드샤 세트',
    packingState: '포장불가',
    price: 36000,
    count: 1,
  },
  {
    id: 4,
    name: '구찌',
    packingState: '포장불가',
    price: 326000,
    count: 1,
  },
  {
    id: 5,
    name: '프라다',
    packingState: '포장불가',
    price: 236000,
    count: 1,
  },
  {
    id: 6,
    name: '빈폴',
    packingState: '포장불가',
    price: 50000,
    count: 1,
  },
];



function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Basket cart_item={cart_item}/>} />
                <Route path={"/cart"} element={<BasketList />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
