import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class Cart extends Component {

  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    return (
      <div>
        {this.props.cart.map(cartItem => {
          return (
            <div className="cart__item" key={cartItem.id}>
              <h3>{cartItem.name}</h3>
              <p>{cartItem.email}</p>
              <p>Company: {cartItem.company.name}</p>
              <button
                onClick={() => this.props.deleteCartItem(cartItem.id)}
                className="cart__item__button--delete"
              >
                Don't Hire
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state
  };
}

export default connect(
  mapStateToProps,
  actions
)(Cart);
