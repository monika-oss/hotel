import { useState } from "react";
import TourPackages from "./Tour_Packages";
import PackageDetail from "./PackageDetail";
import CustomizePackage from "./CustomizePackage";

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

  const handleOpenCustomize = () => {
    setView("customize");
  };

  return (
    <div className="app-main">
      {view === "listings" && (
        <TourPackages 
          onViewDetails={handleViewDetails} 
          handleOpenCustomize={handleOpenCustomize} 
        />
      )}
      {view === "details" && (
        <PackageDetail 
          pkg={selectedPackage} 
          onBack={handleBackToList} 
        />
      )}
      {view === "customize" && (
        <CustomizePackage 
          onBack={handleBackToList} 
        />
      )}
    </div>
  );
}
