import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import ShowProducts from "./components/ShowProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
