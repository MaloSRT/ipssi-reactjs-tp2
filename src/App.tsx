import { useState } from "react";
// Import de la liste de produits et du component ProductList
import { PRODUCTS as productList } from "./productList";
import ProductList from "./components/ProductList";

export default function App() {
  // On utilise useState pour stocker la valeur de l'input de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // La fonction handleChange permet de mettre à jour dynamiquement la valeur de searchTerm
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App max-w-7xl w-full mx-auto">
      <div className="flex flex-col items-center justify-center py-6 gap-4">
        <h1 className="text-3xl font-bold">Liste de produits</h1>
        <input
          type="text"
          name="product_name"
          id="product_name"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={handleChange}
          className="form-input px-4 py-3 rounded-2xl text-black"
        />
      </div>
      {/* On passe la liste de produits et la valeur de l'input en props */}
      <ProductList data={productList} searchTerm={searchTerm} />
    </div>
  );
}
