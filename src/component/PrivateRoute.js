import { Navigate } from 'react-router-dom';

const PrivateRoute = (children, ...rest) => {
  const auth = localStorage.getItem('auth');

  return auth ? children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
