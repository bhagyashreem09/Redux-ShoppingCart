import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_DATA = [ 
    {
      id: 'p1',
      price: 300,
      title: 'First Book',
      description : 'My first first book'
    },
    {
      id: 'p2',
      price: 600,
      title: 'Second Book',
      description : 'My second second book',
    },
    
  ]


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_DATA.map((product => 
            <ProductItem
              key = {product.id}
              id = {product.id}
              title = {product.title}
              price = {product.price}
              description = {product.description}
            />
          )) 
        }
        
      </ul>
    </section>
  );
};

export default Products;
