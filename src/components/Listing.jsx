import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

export default function Listing({items}) {
  return (
    <div className="item-list">
      {items.map(item => <ShopCard key={item.listing_id} item={item} />)}
    </div>
  )
}

Listing.defaulProps = {
  items: []
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};
