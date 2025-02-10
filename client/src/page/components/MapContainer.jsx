import BasicMap from "./BasicMap";

const MapContainer = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
      </div>
      <div className="w-[400px] h-[200px] rounded-xl border mt-5">
        <BasicMap />
      </div>
    </div>
  );
};

export default MapContainer;
