import { Product } from "../types/product";

type ProductListProps = {
  data: Product[];
  searchTerm: string;
};

// On récupère les produits et la valeur de l'input en props
export default function ProductList({ data, searchTerm }: ProductListProps) {
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
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {/* On boucle sur les produits filtrés pour les afficher dans le tableau */}
        {filteredProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.imageUrl} alt={product.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
