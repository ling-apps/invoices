import React from 'react';

class Block extends React.Component {
  render() {
    return (
      <div className="block">
        {this.props.children}
      </div>
    );
  }
}

export default Block;
