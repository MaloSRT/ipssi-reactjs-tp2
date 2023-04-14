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

  // Si la liste des produits filtrés est vide, on affiche un message d'erreur
  if (!filteredProducts.length) return <p>Aucun produit trouvé</p>;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Catégorie
            </th>
            <th scope="col" className="px-6 py-3">
              Nom
            </th>
            <th scope="col" className="px-6 py-3">
              Prix
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {/* On boucle sur les produits filtrés pour les afficher dans le tableau */}
          {filteredProducts.map((product, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">
                <img src={product.imageUrl} alt={product.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
