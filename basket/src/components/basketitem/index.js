import { useState, useCallback, useRef } from 'react'
import BasketList from '../pages/basketlist'

function Basket({cart_item}) {

    const [BasketItem, setBasketItem] = useState(0);
    const [newItem, setnewItem] = useState([])
    const arr = useRef([]);
    
    const onAddCartItem =(id) => {
        
        const copycart_item = [...cart_item]
        const Listfind = copycart_item.find((list) => list.id == id )
        arr.current.push(Listfind) 

        const filter = arr.current.filter((list, index, callback) =>
                index === callback.findIndex((loc) => loc.id === list.id)
        )

        setnewItem(filter)
        
    }

    console.log(newItem.price);
    
    // 내가 클릭한 플러스버튼이 id냐 
    const onProductPlus = (id) => {
        setnewItem(preveState => preveState.map((list)=> list.id === id  
        ?   
        { ...list,
            name  : list.name,
            count : list.count + 1, 
            price : list.price + cart_item[id-1].price
        }
        : list
        ))
        
    
    }
        
    const onProductMius = (id) => {
        
        setnewItem(preveState => preveState.map((list)=> list.id === id  
            ?   
            { ...list,
                name  : list.name,
                count : list.count - 1, 
                price : list.price - cart_item[id-1].price
            }
            : list
            ))
    }
        
        return (
            <>
            <div>장바구니 상품 목록 :  {newItem.length}</div>

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
                    newItem.map((item) => 
                        <BasketList item={item} onProductPlus={onProductPlus} onProductMius={onProductMius}/>
                    )
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
