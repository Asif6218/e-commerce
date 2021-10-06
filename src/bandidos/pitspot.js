import "./bandidos.css";

export function Nav(props) {
  return (
    <div className="sec">
      <img src={props.src} alt="img" className="img" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button onClick={props.cart} id="btn">
        Add to cart
      </button>
    </div>
  );
}