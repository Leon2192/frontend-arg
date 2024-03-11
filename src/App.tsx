import { useEffect } from "react";
import "./App.css";
import { empleados } from "./constants";
import { navbarLinks } from "./constants";
import { getProducts } from "./api/articulos/productos";
import { getCategories } from "./api/categories/categories";

function App() {
  console.log(empleados);
  console.log(navbarLinks);
  console.log(import.meta.env.VITE_REACT_APP_COUNTRY);

  const handleGetProducts = async () => {
    const res = await getProducts();
    console.log(res.data, "productos");
  };

  const hendleGetCategories = async () => {
    const res = await getCategories();
    console.log(res.data, 'categories');
  };

  useEffect(() => {
    handleGetProducts();
    hendleGetCategories();
  }, []);

  return (
    <div>
      <h1 className="text-center">Navbar</h1>
    </div>
  );
}

export default App;
