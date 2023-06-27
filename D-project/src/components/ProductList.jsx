import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setproduct] = useState([]);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    let result = await fetch("http://localhost:3000/Products");
    result = await result.json();
    setproduct(result);
  };
  const deleteItem = async (id) => {
    let result = await fetch("http://localhost:3000/Product/" + id, {
      method: "Delete",
    });
    result = await result.json();
   
   
    if (confirm("Are you sure") == true) {
      getproduct();
    } 
  };
  const changefun = async (event) => {
    let key = event.target.value;

    if (key) {
      let result = await fetch("http://localhost:3000/search/" + key);
      result = await result.json();
      setproduct(result);
    }
  };

  return (
    <div className="productLists">
      <h1>Products</h1>
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={changefun}
      />
      <ul>
        <li className="product-List stile">S.No</li>
        <li className="product-List stile">Name</li>
        <li className="product-List stile">Price</li>
        <li className="product-List stile">Category</li>
        <li className="product-List stile">Company</li>
        <li className="product-List stile">Operation</li>
      </ul>
      {
        // eslint-disable-next-line react/jsx-key
        products.length > 0 ? (
          products.map((item, index) => (
            <ul key={item._id}>
              <li className="product-List">{index + 1}</li>
              <li className="product-List">{item.name}</li>
              <li className="product-List">{item.price}</li>
              <li className="product-List">{item.category}</li>
              <li className="product-List">{item.company}</li>
              <li className="product-List">
                <button
                  onClick={() => deleteItem(item._id)}
                  className="list-button"
                >
                  Delete
                </button>
                <button className="list-button">
                  <Link
                    to={"/Update/" + item._id}
                    style={{ textDecoration: "None", color: "white" }}
                  >
                    Update
                  </Link>
                </button>{" "}
              </li>
            </ul>
          ))
        ) : (
          <h1 style={{ color: "grey" , margin: "100px" }}>No result found</h1>
        )
      }
    </div>
  );
};

export default ProductList;
