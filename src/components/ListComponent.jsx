import React from 'react';
import PropTypes from 'prop-types';

function ListComponent({ items, renderItem }) {
  if (!items) return null;          // Nothing to render
  if (items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id || item.toString()}>
          {renderItem ? renderItem(item) : String(item)}
        </li>
      ))}
    </ul>
  );
}

ListComponent.propTypes = {
  items:      PropTypes.array.isRequired,
  renderItem: PropTypes.func,
};

export default ListComponent;
