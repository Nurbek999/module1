'use strict'

const nameProduct = prompt('Наименование товара');
const countProduct = + prompt('Количество товара');
const categoryProduct = prompt('Категория товара');
const costProduct = + prompt('Цена товара');
const totalSumProduct = countProduct * costProduct;

 console.log('nameProduct', typeof nameProduct, nameProduct);
 console.log('countProduct', typeof countProduct, countProduct);
 console.log('categoryProduct', typeof categoryProduct, countProduct);
 console.log('costProduct', typeof costProduct, countProduct);

 console.log(`На складе ${countProduct} единицы товара ${nameProduct} на сумму ${totalSumProduct} деревянных`);