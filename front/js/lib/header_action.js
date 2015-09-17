import React from 'react';

class HeaderAction extends React.Component {
  render() {
    return (
      <div className="col col-header-action">
        {this.props.children}
      </div>
    );
  }
}

export default HeaderAction;
