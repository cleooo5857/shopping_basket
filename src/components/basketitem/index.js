import { useState, useEffect } from 'react'
import BasketList from '../pages/basketlist'

function Basket({cart_item}) {

    const [BasketItem, setBasketItem] = useState(0);
    const [newItem, setnewItem] = useState([])
    
    // 전역변수
    const arr = [];

    const onAddCartItem = (id) => {

        const copycart_item = [...cart_item]
        const Listfind = copycart_item.find((list) => list.id == id )
        arr.push(Listfind)
        
        setnewItem([...newItem , Listfind])
        
    }

    const onProductPlus = (id) => {
        const PlusCount = newItem.map((list,index,arr) => list.id === id  
        ?   
            { ...list,
                name  : list.name,
                count : list.count + 1, 
                price : list.price + cart_item[id-1].price
                
            }
            : list
        )

        setnewItem(PlusCount)
    }
    
    const onProductMius = (id) => {
        const MiunCount = newItem.map((list)=> list.id === id  
        ?   
            { ...list,
                name  : list.name,
                count : list.count - 1, 
                price : list.price - cart_item[id-1].price
            }
            : list
        )

        setnewItem(MiunCount)
    }
    

    const onlistDeleteBtn = (id) =>{
        const filter = newItem.filter((list) => list.id !== id)
        setnewItem(filter)
    }

    console.log(newItem);

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
                        // newItem.map((item,index) => (
                        //     //item 전체요소 index = 클릭한 index요소 
                        // newItem.indexOf(item) === index ?
                        // <BasketList item={item} onProductPlus={onProductPlus}/>
                        // : false
                        // ))
                    } 

                {
                newItem
                    .filter(
                    (arr, index, callback) =>
                        index === callback.findIndex((loc) => loc.name === arr.name)
                    ).map((item) => (
                        
                        <div>
                            <BasketList item={item} onProductPlus={onProductPlus} onProductMius={onProductMius} onlistDeleteBtn={onlistDeleteBtn}/>
                        </div>
                    ))} 
                </div>
            }
            <p>총 가격</p>
        </>
    )
}

export default Basket



// useState는 비동기 함수이기때문에 반복문 형태의 값을 넣어주면 마지막 배열에 값만 들어간다.
// 문제점 페이지가 무수히 많다면 ? 정보를 전역으로 관리하는게 좋다 ex:)) reducer가 있다
