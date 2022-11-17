import { useState } from 'react'


function BasketList({item ,onProductPlus , onProductMius ,onlistDeleteBtn}){

    const [btndefault ,setbtndefault] = useState(true)
    
    const onChangePlus = ()=> {
        if(item.count > 0){
            setbtndefault(false)
        }
        //map 으로 중복제거한 각 배열의 키값을 전달
        onProductPlus(item.id)
    }

    const onChangetMius = () => {
        if(item.count -1  === 1){
            setbtndefault(true)
        }
        onProductMius(item.id)
    }

    const onDeletebtn = () => {
        onlistDeleteBtn(item.id)
    }

    return (
    
    <div>
           <p>
                상품이름 : {item.name} &nbsp;
                <button onClick={ onChangePlus}>+</button> &nbsp;
                {item.count} &nbsp;
                <button onClick={onChangetMius} disabled={btndefault} >-</button> &nbsp;
                상품가격 : {item.price} &nbsp;
                <button onClick={onDeletebtn}>상품 삭제</button>
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