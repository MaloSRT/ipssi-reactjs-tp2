import { useState } from "react";
import "./App.css";

export default function App() {
  // On utilise useState pour stocker la valeur de l'input de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // La fonction handleChange permet de mettre à jour dynamiquement la valeur de searchTerm
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <h1>Liste de produits</h1>
      <input
        type="text"
        name="product_name"
        id="product_name"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleChange}
      />
      <br />
    </div>
  );
}
