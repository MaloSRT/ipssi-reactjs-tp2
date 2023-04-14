import { useState } from "react";
import { PRODUCTS } from "./productList";
import "./App.css";
import { Product } from "./types/product";

type ProductListProps = {
  data: Product[];
  searchTerm: string;
};

function ProductList({ data, searchTerm }: ProductListProps) {
  // On filtre les produits en fonction de la valeur de searchTerm
  const filteredProducts = data.filter((product) => {
    // On garde les produits dont le nom ou la catégorie contient la valeur de searchTerm
    const filteredList =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return filteredList;
  });

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

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
      <ProductList data={PRODUCTS} searchTerm={searchTerm} />
    </div>
  );
}
