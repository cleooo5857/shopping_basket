import { useState, useEffect } from 'react'
import BasketList from '../pages/basketlist'

function Basket({cart_item}) {

    const [newItem, setnewItem] = useState([])
    
    // 전역변수
    
    const onAddCartItem = (id) => {
        
        const arr = [];
        const copycart_item = [...cart_item]
        const Listfind = copycart_item.find((list) => list.id == id )
        arr.push(Listfind)
        
        console.log(arr)

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
                newItem
                    .filter(
                    (arr, index, callback) =>
                        index === callback.findIndex((loc) => loc.name === arr.name)
                    ).map((item,i) => (
                        
                        <div>
                            <BasketList item={item} onProductPlus={onProductPlus} onProductMius={onProductMius} onlistDeleteBtn={onlistDeleteBtn}/>
                        </div>
                        
                    ))} 
                </div>
            }
        </>
    )
}

export default Basket


// useState는 비동기 함수이기때문에 반복문 형태의 값을 넣어주면 마지막 배열에 값만 들어간다.
    // 문제점 페이지가 무수히 많다면 ? 정보를 전역으로 관리하는게 좋다 ex:)) reducer가 있다
    
    
    /*
        첫 프론트 개발... 하면서 깨달은 점
        html 구역에는 최대한 값을 뿌려주는 역할만 하자 현재 중복상품  없애는 로직을 html 영역에 짜다보니
        확장성이 드럽게 없다.. or 가독성, 유지보수하기에도 정말 어려울 것 같다.
    
        - 깊은복사에 대한 내용을 좀 더 정확하게 조사 해야 할 것 같다
        
        - 개인적인 시간이 된다면 현재 로직을 이용해 reducer, useEffect 사용하기
        - 리팩토링 하기
    */