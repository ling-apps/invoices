import React from 'react';

export default class Box extends React.Component {
  render() {
    return (
      <div className="boxes">
        {this.props.children}
      </div>
    );
  }
}
