import useFetchPackages from "../hooks/useFetchPackages";
import PackageCard from "../components/PackageCard";
import "./Packages.css";

export default function Packages() {
  const { packages, loading } = useFetchPackages();

  if (loading) return <p>Loading packages...</p>;

  return (
    <section className="packages">
      <h1>Available Packages</h1>
      <div className="grid">
        {packages.map(pkg => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}