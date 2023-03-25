import useAuth from'./useAuth'
import {
    Routes,
    Route,
    BrowserRouter,
    Link,
    Navigate,
    Outlet
  } from "react-router-dom";

function PrivateRoute({ children }) {
    const auth = useAuth();
    
    return auth ? children : <Navigate to="/home" />;
  }
  export default PrivateRoute