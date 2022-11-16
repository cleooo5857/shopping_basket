import { useState } from 'react'


function BasketList({item ,onProductPlus}){


    
    const onChangeQuantity = ()=> {
        //map 으로 중복제거한 각 배열의 키값을 전달
        onProductPlus(item.id)
        
    }

    return (
    
    <div>
           <p>
                상품이름 : {item.name} &nbsp;
                <button onClick={ onChangeQuantity}>+</button> &nbsp;
                {item.count} &nbsp;
                <button>-</button> &nbsp;
                상품가격 : {item.price} &nbsp;
           </p>

           
        {/* {
            newItem && newItem.map((item,index) => (
            newItem.indexOf(item) === index ?  
            "상품명 :" + item.name + "가격 : " + item.price
            : false
            ))
        }   */}
    </div>
    )
}
export default BasketList