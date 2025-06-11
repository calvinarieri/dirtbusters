import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
          <Route index element={<HomePage/>} />
          <Route path="/login/" element={<Login />} />
          
        </Route>
  )
)

function App() {
return(
  <div className="font-DMSans">
    <RouterProvider router={router} />        
  </div>
)
}

export default App;
