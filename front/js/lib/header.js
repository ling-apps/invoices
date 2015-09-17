import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="box">
          <h1 className="col col-header-title">{this.props.title}</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
