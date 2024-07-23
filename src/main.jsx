import ReactDOM from 'react-dom/client';

import { products } from './products';

import './main.css';
import { ListOfCards } from './components/ListOfCards';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<ListOfCards products={products} />)



// TODO: Реализовать компонент ProductList
// reactRoot.render(<ProductList products={products} />);
