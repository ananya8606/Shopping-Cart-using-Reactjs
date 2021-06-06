//Dependencies
import React from 'react';
import './Header.css';
const classNames = [
  "first-header",
  "second-header",
  "third-header"
];
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }
render() {
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
 <div className="header">
    <h1 id="header-title">Shop Now</h1>
<div className={className}>
<span class="rectangle"></span>
  </div>
  </div>
)
}
}