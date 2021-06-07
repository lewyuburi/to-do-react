import { Router } from "@reach/router"

import HomePage from '@/component/pages/home'
import NotFound from '@/component/pages/notFound'

const RouterComponent = () => {
  return (
    <Router>
      <HomePage path="/" />
      <NotFound default />
    </Router>
  );
};

export default RouterComponent;