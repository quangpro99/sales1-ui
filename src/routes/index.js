import Home from '~/pages/Home';
import DetailProduct from '~/pages/DetailProduct';
import Cart from '~/pages/Cart';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/detail', component: DetailProduct, layout: HeaderOnly },
    { path: '/cart', component: Cart, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
