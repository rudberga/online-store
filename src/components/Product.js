import {useState} from "react";

export default function Product(props) {
    const [counter, setCounter] = useState(0);
    const {details} = props;

    const decrement = () => {
        if (counter === 0) {
            return;
        };
        setCounter(counter - 1)
    };

    const increment = () => {
        setCounter(counter + 1)
    };

    return <div className="product">
        <img src={details.image} width="50" alt="" />
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button onClick={decrement} disabled={!counter} className="product-sub">-</button>
            <h3 className="product-count">{counter}</h3>
            <button onClick={increment} className="product-add">+</button>
        </div>
    </div>
}
