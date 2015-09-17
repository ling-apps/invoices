import React from 'react';
import uuid from 'uuid';

class ListItem extends React.Component {
  render() {
    let item = this.props.item;
    let columns = Object.keys(item).map((propName) => {
      let key = `${this.props.itemKey}-${uuid.v4()}`;
      let value = item[propName].toString();
      return (<div className="list-row-column" key={key}>{value}</div>);
    });
    return (
      <div className="list-row">
        {columns}
      </div>
    );
  }
}

ListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  itemKey: React.PropTypes.number.isRequired
};

export default ListItem;
