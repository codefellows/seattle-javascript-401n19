import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import CurrentCategory from './components/storefront/current-category.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';

export default function Album() {

  return (
    <>
      <CssBaseline />
      <main>
        <Categories />
        <CurrentCategory />
        <Products />
      </main>
    </>
  );
}
