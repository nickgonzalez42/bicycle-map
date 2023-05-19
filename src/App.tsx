import { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import axios from "axios";

import { ICrash } from "./interfaces";
import { MyModal } from "./MyModal";
import { Loading } from "./Loading";
import { SideBar } from "./SideBar";
import { WelcomeModal } from "./WelcomeModal";

const chicagoCoord = { lat: 41.8781, lng: -87.6298 };

function App() {
  const [crashes, setCrashes] = useState<ICrash[]>([]);
  const [markersLoaded, setMarkersLoaded] = useState(false);
  const [currentCrash, setCurrentCrash] = useState<ICrash | null>(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showFatalities, setShowFatalities] = useState(false);

  const getCrashes = () => {
    let base = import.meta.env.VITE_BASE_REQUEST;
    console.log(base);
    if (showFatalities) {
      base += "fatalities";
      console.log("Adding to url");
    }
    console.log(base);
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

  const updateFilters = (type: string) => {
    console.log(showFatalities);
    // TODO change state to be a string with more options
    if (type == "Fatalities") {
      setShowFatalities(true);
    } else {
      setShowFatalities(false);
    }
  };

  const handleClick = (crash: ICrash) => {
    setCurrentCrash(crash);
  };

  const handleClose = (): void => {
    setCurrentCrash(null);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(getCrashes, [showFatalities]);

  if (!isLoaded || !markersLoaded) {
    return (
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <div className="w-full h-full">
        <div className="w-full h-full">
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
        {showSideBar === true ? <SideBar filter={updateFilters} /> : <></>}
        {/* TODO Animate burger button? */}
        <button
          className="bg-white border-white"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        >
          <svg className="absolute top-5 left-5" viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
        {currentCrash ? <MyModal onClose={handleClose} crash={currentCrash} /> : <></>}
        {showWelcome ? (
          <WelcomeModal
            onClose={(): void => {
              setShowWelcome(false);
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
