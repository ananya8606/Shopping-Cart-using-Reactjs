import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './App.css';
import Footer from './Footer'
import Header from './Header'

const TAX_RATE = 0.06;
const TAX_TEXT = '6% sales tax'
// prices are in cents
const PRODUCTS = [
  {
    name: "Tomato",
    priceText: "$ 0.16 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg",
pluralName: "Tomatoes",
price: (quantity) => {
      return quantity * 16;
}
  },
  {
    name: "Beans",
    priceText: "$ 0.82 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg",
pluralName: "Beans",
price: (quantity) => {
      return quantity * 82;
}
  },
  {
    name: "Brinjal",
    priceText: "$ 0.35 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg",
pluralName: "Brinjals",
price: (quantity) => {
      return quantity * 35;
}
  },
  {
    name: "Capsicum",
    priceText: "$ 0.60 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/capsicum.jpg",
pluralName: "Capsicums",
price: (quantity) => {
      return quantity * 60;
}
  },
  {
    name: "Mushroom",
    priceText: "$ 0.75 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/button-mushroom.jpg",
pluralName: "Mushrooms",
price: (quantity) => {
      return quantity * 75;
}
  },
  {
    name: "Potato",
    priceText: "$ 0.22 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/potato.jpg",
pluralName: "Potatoes",
price: (quantity) => {
      return quantity * 22;
}
  },
  {
    name: "Pumpkin",
    priceText: "$ 0.48 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pumpkin.jpg",
pluralName: "Pumpkins",
price: (quantity) => {
      return quantity * 48;
}
  },
  {
    name: "Corn",
    priceText: "$ 0.75 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/corn.jpg",
pluralName: "Corns",
price: (quantity) => {
      return quantity * 75;
}
  },
  {
    name: "Onion",
    priceText:"$ 0.16 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/onion.jpg",
    pluralName: "Onions",
price: (quantity) => {
      return quantity * 16;
}
  },
  {
    name: "Grapes",
    priceText: "$ 0.60 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/grapes.jpg",
    pluralName: "Grapes",
price: (quantity) => {
      return quantity * 60;
}
  },
  {
    name: "Mango",
    priceText: "$ 0.75 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/mango.jpg",
    pluralName: "Mangoes",
price: (quantity) => {
      return quantity * 75;
}
  },
  {
    name: "Musk Melon",
    priceText: "$ 0.36 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/musk-melon.jpg",
    pluralName: "Musk melons",
price: (quantity) => {
      return quantity * 36;
}
  },
  {
    name: "Pears",
    priceText: "$ 0.69 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pears.jpg",
    pluralName: "Pears",
price: (quantity) => {
      return quantity * 69;
}
  },
  {
    name: "Pomegranate",
    priceText: "$ 0.95 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/pomegranate.jpg",
    pluralName: "Pomegranates",
price: (quantity) => {
      return quantity * 95;
}
  },
  {
    name: "Raspberry",
    priceText:"$ 0.16 per 1/4 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/raspberry.jpg",
    pluralName: "Raspberries",
price: (quantity) => {
      return quantity * 16;
}
  },
  {
    name: "Strawberry",
    priceText:"$ 0.18 per 1/4 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/strawberry.jpg",
    pluralName: "Strawberries",
price: (quantity) => {
      return quantity * 18;
}
  },
  {
    name: "Water Melon",
    priceText:" $ 0.28 per 1 Kg",
    image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/water-melon.jpg",
    pluralName: "Water melons",
price: (quantity) => {
      return quantity * 28;
}
  },
  {
    name: 'Apple',
    pluralName: 'Apples',
    image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/apple.jpg',
    priceText: '$0.25 each',
    price: (quantity) => {
      return quantity * 25;
    }
  },
  {
    name: 'Banana',
    pluralName: 'Bananas',
    image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/banana.jpg',
    priceText: '$0.15 each',
    price: (quantity) => {
      return quantity * 15;
    }
  },
  {
    name: 'Orange',
    pluralName: 'Oranges',
    image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/orange.jpg',
    priceText: '$0.30 each',
    price: (quantity) => {
      return quantity * 30;
    }
  },
  {
    name: 'Papaya',
    pluralName: 'Papayas',
    image: 'https://i.ibb.co/zmN1Tdk/images-1-1622907698226.jpg',
    priceText: '$0.50 each',
    dealText: '3 for $1',
    price: (quantity) => {
      let odds = quantity % 3;
      return (((quantity - odds)/3) * 100) + (odds * 50);
    }
  },
];

function dollarsFromCents(n) {
  return '$' + parseFloat(n / 100).toFixed(2)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        'Apple': 0,
        'Banana': 0,
        'Orange': 0,
        'Papaya': 0,
'Grapes':0,
'Mango':0,
'Musk Melon':0,
'Pears':0,
'Pomegranate':0,
'Raspberry':0,
'Strawberry':0,
'Water Melon':0,
'Tomato':0,
'Beans':0,
'Brinjal':0,
'Capsicum':0,
'Mushroom':0,
'Potato':0,
'Pumpkin':0,
'Corn':0,
'Onion':0,
      }
    };
    this.emptyCart = this.emptyCart.bind(this);
  }
  addFruit(productName) {
    return (e) => {
      e.preventDefault();
      this.setState( (prevState) => {
        prevState.cart[productName]++;
        return prevState;
      } );
    }
  }
  zeroFruit(productName) {
    return (e) => {
      e.preventDefault();
      this.setState( (prevState) => {
        prevState.cart[productName] = 0;
        return prevState;
      } );
    }
  }
  emptyCart(e) {
    e.preventDefault();
    this.setState( (prevState) => {
      prevState.cart = {
        'Apple': 0,
        'Banana': 0,
        'Orange': 0,
        'Papaya': 0,
'Grapes':0,
'Mango':0,
'Musk Melon':0,
'Pears':0,
'Pomegranate':0,
'Raspberry':0,
'Strawberry':0,
'Water Melon':0,
'Tomato':0,
'Beans':0,
'Brinjal':0,
'Capsicum':0,
'Mushroom':0,
'Potato':0,
'Pumpkin':0,
'Corn':0,
'Onion':0,
      };
      return prevState;
    } );
  }
  cartChange(productName) {
    return (quantity) => {
      this.setState( (prevState) => {
        prevState.cart[productName] = quantity;
        return prevState;
      } );
    };
  }
  render() {
    let total = 0;
    let storeProducts = PRODUCTS.map( (p, i) => {
      let quantity = this.state.cart[p.name];
      let dealText = (p.dealText) ? (' or ' + p.dealText) : '';
      let productStyle = {
        backgroundImage: 'url(' + p.image + ')'
      };
      let quantityInfo = (quantity) ? (<div className="quantity-in-cart">{this.state.cart[p.name]} in cart</div>) : '';
      return (
<div className={"ItemContainer"}>
          <a className="fruit-link" style={productStyle} key={i} href={'#' + p.name} onClick={this.addFruit(p.name)}>
            {p.name}
          </a>
            <h3 className="store-product-name">{p.name}</h3>
<div className="store-product-actions">
            <button className="store-product-add" onClick={this.addFruit(p.name)}>add to cart</button>
            <div className="store-quantity-info">
              {quantityInfo}
            </div>
            </div>
            <div className="store-price-info">
              <div className="store-price">{p.priceText}</div>
              <div className="store-deal">{dealText}</div>
            </div>
            </div>
      );
    } );
    let cartProductRows = PRODUCTS
    .map( (p, i) => {
      let productStyle = {
        backgroundImage: 'url(' + p.image + ')'
      };
      let quantity = this.state.cart[p.name];
      if (!quantity) {
        return null;
      }
      let name = (quantity === 1) ? p.name : p.pluralName;
      let price = p.price(quantity);
      let priceText = (p.priceText) ? (<div>{p.priceText}</div>) : '';
      let dealText = (p.dealText) ? (<div>{' or ' + p.dealText}</div>) : '';
      total += price;
      return (
        <tr key={i}>
          <td>
            <a className="fruit-link" style={productStyle} key={i} href={'#' + p.name} onClick={this.addFruit(p.name)}>
              {p.name}
            </a>
          </td>
          <td>
            <strong>{name}</strong>
            <div className="cart-price-info">
              {priceText}
              {dealText}
            </div>
          </td>
          <td>
            <NumericInput min={0} value={quantity} onChange={this.cartChange(p.name)}/>
            &nbsp;
            <button onClick={this.zeroFruit(p.name)}>x</button>
          </td>
          <td className="currency">{ dollarsFromCents(price) }</td>
        </tr>
      );
    } );
    let cartClasses = 'cart';
    if (total) {
      cartClasses += ' cart-shown';
    } else {
      cartClasses += ' cart-hidden';
    }
    let tax = Math.ceil(total * TAX_RATE);
    return (
      <div className="App">
<Header />
        <div className="store-products">
          {storeProducts}
        </div>
 <section className={"foot"}>
               <Footer />
                </section>
        <section className={cartClasses}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">product</th>
                <th>quantity</th>
                <th>subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartProductRows}
            </tbody>
            <tfoot>
              <tr key="subtotal">
                <td colSpan="2"></td>
                <td><strong>subtotal</strong></td>
                <td className="currency">{ dollarsFromCents(total) }</td>
              </tr>
              <tr key="tax">
                <td colSpan="2"></td>
                <td><strong>{TAX_TEXT}</strong></td>
                <td className="currency">{ dollarsFromCents(tax) }</td>
              </tr>
              <tr key="total">
                <td colSpan="2"></td>
                <td><strong>total</strong></td>
                <td className="currency">{ dollarsFromCents(total + tax) }</td>
              </tr>
              <tr className="cart-actions" key="cart-actions">
                <td colSpan="2"></td>
                <td>
                  <a className="cart-empty" href="#empty-cart" onClick={ this.emptyCart }>empty cart</a>
                </td>
                <td>
                  <button className="cart-pay">pay now</button>
                </td>
              </tr>
            </tfoot>
          </table>
          </section>
      </div>
    );
  }
}

export default App;
