import { useState, useEffect } from 'react'
import BasketList from '../pages/basketlist'

function Basket({cart_item}) {

    const [BasketItem, setBasketItem] = useState(0);
    const [newItem, setnewItem] = useState([])
    const arr = [];
    
    const onAddCartItem = (id) => {

        const copycart_item = [...cart_item]
        const Listfind = copycart_item.find((list) => list.id == id)

        setnewItem([...newItem , Listfind])

    }

    const onProductPlus = (id,price) => {
        
        const plusCount = newItem.map((list,index)=> list.id === id  
        ?   
            {
                ...list,
                count : list.count + 1,
                price : list.price + newItem[index].price
            }
            : list
        )

        setnewItem(plusCount)
    }
    
    

    return (
        <>
            <div>{newItem.length}</div>

            {
                cart_item.map((list) =>(
                    <div key={list.id} >
                        {list.id} 상품명 : {list.name}  상품 가격 : {list.price} 
                        <button onClick={()=>onAddCartItem(list.id)}>장바구니 추가 </button>
                    </div>
                ))
            }

            {
                newItem.length === 0 ?
                <span>장바구니 목록</span> :
                <div>
                    {
                        newItem.map((item,index) => (
                        newItem.indexOf(item) === index ?  
                        <BasketList item={item} onProductPlus={onProductPlus}/>
                        : false
                        ))
                    }
                </div>
            }
            <p>총 가격</p>
        </>
    )
}

export default Basket



// useState는 비동기 함수이기때문에 반복문 형태의 값을 넣어주면 마지막 배열에 값만 들어간다.
// 문제점 페이지가 무수히 많다면 ? 정보를 전역으로 관리하는게 좋다 ex:)) reducer가 있다
