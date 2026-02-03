import { useParams, Link } from "react-router-dom";
import useFetchPackageById from "../hooks/useFetchPackageById";

export default function PackageDetails() {
  const { id } = useParams();
  const pkg = useFetchPackageById(id);

  if (!pkg) return null;

  return (
    <section style={{ padding: 40 }}>
      <img src={pkg.image} width="100%" />
      <h1>{pkg.name}</h1>
      <p>{pkg.description}</p>
      <h2>${pkg.price}</h2>

      <Link to={`/checkout/${id}`}>
        <button>Proceed to Checkout</button>
      </Link>
    </section>
  );
}