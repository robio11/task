import {  useState } from "react";
import {
  GoogleMap,
  LoadScriptNext,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import Basic from "../../assets/mapStyles/Basic";

const BasicMap = () => {

  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] =
    useState();
  const [lastKnownPosition, setLastKnownPosition] =
    useState(null);
  const [searchBox, setSearchBox] =
    useState(null);

  const defaultZoomLevel = 15;
  const mapCenter = { lat: 24, lng: 80 };

  // Get the current user's location
  const getUserLocation = () => {
    lastKnownPosition && setCurrentPosition(lastKnownPosition);
    map && map.setZoom(defaultZoomLevel);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          setLastKnownPosition({ lat: latitude, lng: longitude });
          if (map) {
            map.panTo({ lat: latitude, lng: longitude });
          }
        },
        (error) => {
          throw error;
        },
        {enableHighAccuracy: true }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const onMapLoad = (mapInstance) => {
      setMap(mapInstance);
  };

  const handleGetCurrentLocation = () => {
    if (map) {
      getUserLocation();
    }
  };

  const handleMarkerDragEnd = (
    event
  ) => {
    if (map && "latLng" in event && event.latLng) {
      const newPosition = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      setCurrentPosition(newPosition);
      map.panTo(newPosition);
    }
  };

  const onPlacesChanged = () => {
      const places =
        searchBox.getPlaces();

      if (places && places.length > 0) {
        const geometry = places[0]?.geometry;
        if (geometry?.location) {
          const location = geometry.location;
          const newPosition = {
            lat: location.lat(),
            lng: location.lng(),
          };

          setCurrentPosition(newPosition);
          if (map) {
            map.panTo(newPosition);
          }
        }
      }
  };

  return (
    <LoadScriptNext
      googleMapsApiKey={"AIzaSyBK8JylGkdswfRWo-ET7RPikSEkfUbajY4"}
      libraries={["places"]}
    >
      <div className="w-full h-full rounded-xl overflow-hidden">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={4.25}
          center={currentPosition ?? mapCenter}
          onLoad={onMapLoad}
          options={{
            styles: Basic,
            streetViewControl: false,
            zoomControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
          }}
        >
          <div className="w-full h-full flex">
            <StandaloneSearchBox
              onLoad={(searchBox) => setSearchBox(searchBox)}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Search for location"
                className="box-border border border-transparent w-5/6 h-10 px-3 rounded-xl shadow-2xl text-sm font-semibold text-gray-600 outline-none bg-white absolute left-7 mt-10 "
              />
            </StandaloneSearchBox>
          </div>

          {currentPosition && (
            <Marker
              position={currentPosition}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
            />
          )}

          <button
            className="w-10 h-10 rounded-full absolute bottom-5 right-5 bg-white drop-shadow-2xl
                    border-2 border-gray-200 z-10 cursor-pointer flex items-center justify-center"
            onClick={handleGetCurrentLocation}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </button>
        </GoogleMap>
      </div>
    </LoadScriptNext>
  );
};

export default BasicMap;
