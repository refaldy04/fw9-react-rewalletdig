import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('auth');

  return auth ? children : <Navigate to="/login" replace={true} /*state={{ errMsg: 'You must login before access this page' }}*/ />;
};

export default PrivateRoute;
