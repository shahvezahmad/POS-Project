import "./Cart.css";
const Cart = ({
  cart,
  handleDelete,
  totalprice,
  setDiscountRate,
  setTaxRate,
  discountRate,
  taxRate,
  finalprice,
  children,
}) => {
  console.log(cart);

  const handleTaxRate = (e) => {
    if (e.target.value > 100 || e.target.value < 0) return;
    setTaxRate(e.target.value);
  };

  const handleDiscountRate = (e) => {
    if (e.target.value > 100 || e.target.value < 0) return;
    setDiscountRate(e.target.value);
  };

  if (cart.length === 0) {
    return (
      <div className="Poscart">
        <h2 className=" My_Cart">Cart</h2>
        <p className=" My_Cart">Your Cart is Empty</p>
      </div>
    );
  } else {
    return (
      <div className="Poscart">
        <h2 className=" My_Cart">Cart</h2>
        {cart.map((product) => (
          <div className="CartProduct" key={product.id}>
            <img
              className="cart_product_image"
              src={product.image}
              alt={product.name}
            />
            <p>{product.name}</p>
            <p>{product.price} Rs</p>
            <p>x{product.count}</p>
            <button
              className="delete_button"
              onClick={() => handleDelete(product)}
            >
              Remove
            </button>
          </div>
        ))}
        <label htmlFor="discountRate">Discount Rate:</label>
        <input
          type="number"
          name="discountRate"
          placeholder="Discount Rate"
          value={discountRate}
          min={0}
          max={100}
          onChange={(e) => handleDiscountRate(e)}
        />
        <label htmlFor="taxRate">Tax Rate:</label>
        <input
          type="number"
          name="taxRate"
          placeholder="Tax Rate "
          value={taxRate}
          onChange={(e) => handleTaxRate(e)}
          min={0}
          max={100}
        />
        in %
        <div className="Total">
          <p>Total Tax : +{totalprice * (taxRate / 100)} Rs</p>
          <p>Total Discount : - {totalprice * (discountRate / 100)} Rs</p>
          <p className="price">Total : {finalprice} Rs</p>
        </div>
        {children}
      </div>
    );
  }
};
export default Cart;
