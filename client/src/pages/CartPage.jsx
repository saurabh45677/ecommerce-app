import React from "react";
import Layout from "./../components/Layouts/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length > 1
                ? `You have ${cart?.length} items in Your cart ${
                    auth?.token ? " " : "Please login to checkout"
                  }`
                : "Your cart Is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {cart?.map((product) => (
              <div className="row mb-2 p-3 card flex-row">
                <div className="col-md-4">
                  <img
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "10px",
                    }}
                    width={"150"}
                    height={"150"}
                    src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <h5>{product.name}</h5>
                  <p>{product.description.substring(0, 30)}</p>
                  <h4>{`Price: $${product.price}`}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">Checkout | Payment</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
