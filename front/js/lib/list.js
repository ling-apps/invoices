import React from 'react';
import ListItem from './list_item';

class List extends React.Component {
  render() {
    let rows = this.props.items.map((item, i) => {
      return React.createElement(this.props.format, {key: i, item: item, itemKey: i})
    });
    return (
      <div className="box">
        <ul className="list">
          {rows}
        </ul>
      </div>
    );
  }
}
List.propTypes = {
  items: React.PropTypes.array.isRequired,
  format: React.PropTypes.func
};

List.defaultProps = {
  format: ListItem
};

export default List;
