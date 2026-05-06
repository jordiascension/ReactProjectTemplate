import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <Paper sx={{ maxWidth: 400, margin: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Product List
      </Typography>
      <List>
        {products.map(product => (
          <ProductItem key={product.id} name={product.name} price={product.price} />
        ))}
      </List>
    </Paper>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
