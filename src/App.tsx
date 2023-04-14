import { useState } from "react";

// Import de la liste de produits et des components ProductList et SearchBar
import { PRODUCTS as productList } from "./productList";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

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
        {/* On passe la fonction handleChange et la valeur de l'input en props */}
        <SearchBar handleChange={handleChange} searchTerm={searchTerm} />
      </div>
      {/* On passe la liste de produits et la valeur de l'input en props */}
      <ProductList data={productList} searchTerm={searchTerm} />
    </div>
  );
}
