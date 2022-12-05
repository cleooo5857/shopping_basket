    import { useState, useCallback, useRef } from "react";
    import BasketList from "../pages/basketlist";

    function Basket({ cart_item }) {
    const [BasketItem, setBasketItem] = useState(0);
    const [newItem, setnewItem] = useState([]);
    const arr = useRef([]);

    const onAddCartItem = (id) => {
        // 클릭한 상품들
        const Listfind = cart_item.find((list) => list.id == id);
        arr.current.push({ ...Listfind });

        const result = arr.current.filter(
        (v, i) => arr.current.findIndex((x) => x.id === v.id) === i
        );
        setnewItem(result);
    };

    // 내가 클릭한 플러스버튼이 id냐
    const onProductPlus = (id) => {
        const newTodo = [...newItem];
        const find = newTodo.find((list) => list.id === id);
        find.count = find.count + 1;
        find.price = find.price + cart_item[id - 1].price;
        setnewItem(newTodo);
    };

    const onProductMius = (id) => {
        const newTodo = [...newItem];
        const find = newTodo.find((list) => list.id === id);
        find.count = find.count - 1;
        find.price = find.price - cart_item[id - 1].price;
        setnewItem(newTodo);
    };

    return (
        <>
        <div>장바구니 상품 목록 : {newItem.length}</div>

        {cart_item.map((list) => (
            <div key={list.id}>
            {list.id} 상품명 : {list.name} 상품 가격 : {list.price}
            <button onClick={() => onAddCartItem(list.id)}>장바구니 추가 </button>
            </div>
        ))}

        {newItem.length === 0 ? (
            <span>장바구니 목록</span>
        ) : (
            <div>
            {newItem.map((item) => (
                <BasketList
                key={item.id}
                item={item}
                onProductPlus={onProductPlus}
                onProductMius={onProductMius}
                />
            ))}
            </div>
        )}

        <p>{}</p>
        </>
    );
    }

    export default Basket;

    // useState는 비동기 함수이기때문에 반복문 형태의 값을 넣어주면 마지막 배열에 값만 들어간다.
    // 문제점 페이지가 무수히 많다면 ? 정보를 전역으로 관리하는게 좋다 ex:)) reducer가 있다
