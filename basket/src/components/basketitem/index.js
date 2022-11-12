import { useState, useEffect } from 'react'
import BasketList from '../pages/basketlist'

function Basket({cart_item}) {

    const [BasketItem, setBasketItem] = useState(0);
    const [newItem, setnewItem] = useState([])

    
    const onAddCartItem = (id) => {

        const copycart_item = [...cart_item]
        const Listfind = copycart_item.find((list) => list.id == id)
        setnewItem([...newItem, Listfind])
    }

    return (
        <>
            <div>{BasketItem}</div>

            {
                cart_item.map((item) =>(
                    <div key={item.id} >
                        {item.id} 상품명 : {item.name}<br/> 상품 가격 : {item.price} 

                        <button onClick={()=>onAddCartItem(item.id)}>장바구니 추가 </button>
                    </div>

                ))
            }
            {
                newItem.length === 0 ?
                <span>장바구니 목록</span> :  
                // newItem.map((item,index) => newItem.indexOf )
                <div>
                    {
                        newItem.map((item,index) => (
                        newItem.indexOf(item) === index ?  
                        "상품명 :" + item.name + "가격 : " + item.price +
                        <BasketList />
                        : null
                        ))
                    }
                    
                </div>
            }
        </>
    )
}

export default Basket



// useState는 비동기 함수이기때문에 반복문 형태의 값을 넣어주면 마지막 배열에 값만 들어간다.
// 문제점 페이지가 무수히 많다면 ? 정보를 전역으로 관리하는게 좋다 ex:)) reducer
