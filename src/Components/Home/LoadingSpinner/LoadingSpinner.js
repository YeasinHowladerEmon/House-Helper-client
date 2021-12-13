import React from 'react';
import { CircleLoader } from "react-awesome-loaders";
const LoadingSpinner = () => {
  return (
    <div className="text-center" style={{marginTop: "20rem"}}>
       <CircleLoader
        meshColor={"#6366F1"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
    </div>
  );
};
export default LoadingSpinner;