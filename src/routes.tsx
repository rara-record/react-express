import Layout from './components/Layout';
import PageProducts from './page/pageProducts';
import PageMain from './page/pageMain';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <PageMain /> },
      { path: '/products', element: <PageProducts /> },
    ],
  },
];

export default routes;
