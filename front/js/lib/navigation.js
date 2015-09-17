import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <a className="nav-item">First link</a>
          <a className="nav-item">Second link</a>
          <a className="nav-item">Third link</a>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Navigation;
