import { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import axios from "axios";

import { ICrash } from "./interfaces";
import { MyModal } from "./MyModal";
import { Loading } from "./Loading";

const chicagoCoord = { lat: 41.8781, lng: -87.6298 };

function App() {
  const [crashes, setCrashes] = useState<ICrash[]>([]);
  const [markersLoaded, setMarkersLoaded] = useState(false);
  const [currentCrash, setCurrentCrash] = useState<ICrash | null>(null);

  const getCrashes = () => {
    const base = import.meta.env.VITE_BASE_REQUEST;
    axios
      .get(base)
      .then((response) => {
        setCrashes(response.data);
        setMarkersLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (crash: ICrash) => {
    console.log(crash);
    setCurrentCrash(crash);
  };

  const handleClose = (): void => {
    setCurrentCrash(null);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(getCrashes, []);

  if (!isLoaded || !markersLoaded) {
    return <Loading />;
  }

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen">
        <GoogleMap
          center={chicagoCoord}
          zoom={12}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{ zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
        >
          {crashes?.map((crash) => {
            return (
              <MarkerF
                key={crash.crash_record_id}
                position={{ lat: parseFloat(crash.latitude), lng: parseFloat(crash.longitude) }}
                onClick={() => handleClick(crash)}
              ></MarkerF>
            );
          })}
          <MarkerF position={chicagoCoord} />
        </GoogleMap>
      </div>
      {currentCrash ? <MyModal onClose={handleClose} crash={currentCrash} /> : <></>}
    </div>
  );
}

export default App;
