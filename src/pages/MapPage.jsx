import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "../components/Footer";

const KATHMANDU_POSITION = [27.7172, 85.324];
const MAP_ZOOM_LEVEL = 13;

export default function MapPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen ">
      <header className="bg-gray-50 py-8 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Our Location
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Find us on the map below
        </p>
      </header>

      <main className="flex-grow px-4 sm:px-6 pb-8 max-w-7xl w-full mx-auto">
        <div className="rounded-xl shadow-md overflow-hidden h-[60vh] sm:h-[70vh]">
          <MapContainer
            center={KATHMANDU_POSITION}
            zoom={MAP_ZOOM_LEVEL}
            className="h-full w-full"
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={KATHMANDU_POSITION}>
              <Popup className="text-sm">
                <strong className="font-semibold">Kathmandu, Nepal</strong>
                <br />
                Capital city of Nepal
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
      <div className="mt-60">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
