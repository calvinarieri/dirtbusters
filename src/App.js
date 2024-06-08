import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
          <Route index element={<HomePage/>} />
        </Route>
  )
)

function App() {
return(
  <div>
    <RouterProvider router={router} />    
  </div>
)
}

export default App;
