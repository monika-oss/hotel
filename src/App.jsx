import { useState } from "react";
import TourPackages from "./Tour_Packages";
import PackageDetail from "./PackageDetail";

export default function App() {
  const [view, setView] = useState("listings");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleViewDetails = (pkg) => {
    setSelectedPackage(pkg);
    setView("details");
  };

  const handleBackToList = () => {
    setView("listings");
    setSelectedPackage(null);
  };

  return (
    <>
      {view === "listings" ? (
        <TourPackages onViewDetails={handleViewDetails} />
      ) : (
        <PackageDetail pkg={selectedPackage} onBack={handleBackToList} />
      )}
    </>
  );
}

