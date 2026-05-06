import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

function ProductItem({ name, price }) {
  return (
    <ListItem>
      <ListItemText
        primary={<Typography variant="subtitle1">{name}</Typography>}
        secondary={<Typography variant="body2" color="text.secondary">${price.toFixed(2)}</Typography>}
      />
    </ListItem>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
