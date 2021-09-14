import { Button } from "react-bootstrap";
import React from "react";
import { addToCart } from "./checkout";
import { connect } from "react-redux";

const AddToCart = ({ pokemon, addToCart }) => (
  <Button
    className
    onClick={() => addToCart(pokemon)}
    style={{ width: "100%" }}
  >
    Add To Cart
  </Button>
);

const postAddToCart = (pokemon) => (dispatch) =>
  addToCart(pokemon).then((payload) =>
    dispatch({
      type: "SET_ITEMS",
      payload,
    })
  );

export default connect(
  () => ({}),
  (dispatch) => ({
    addToCart: (pokemon) => dispatch(postAddToCart(pokemon)),
  })
)(AddToCart);
