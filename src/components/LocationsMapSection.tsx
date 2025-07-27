import { MapPin, Phone, Mail } from 'lucide-react';
import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Definição das cores por região
const stateColors = {
  // Norte
  AC: 'green', RO: 'green', AM: 'green', RR: 'green', PA: 'green', AP: 'green', TO: 'green',
  // Nordeste
  MA: 'blue', PI: 'blue', CE: 'blue', RN: 'blue', PB: 'blue', PE: 'blue', AL: 'blue', SE: 'blue', BA: 'blue',
  // Centro-Oeste
  MT: 'yellow', MS: 'yellow', GO: 'yellow', DF: 'yellow',
  // Sudeste
  MG: 'red', ES: 'red', RJ: 'red', SP: 'red',
  // Sul
  PR: 'orange', SC: 'orange', RS: 'orange',
};

// Coordenadas dos marcadores para os estados solicitados
const markers = [
  { position: [-9.02, -70.85], popup: 'Acre' },          // Acre
  { position: [-12.00, -55.00], popup: 'Mato Grosso' },  // Mato Grosso
  { position: [-20.50, -54.50], popup: 'Mato Grosso do Sul' }, // Mato Grosso do Sul
  { position: [-12.00, -38.50], popup: 'Bahia' },        // Bahia
  { position: [-22.90, -43.20], popup: 'Rio de Janeiro' }, // Rio de Janeiro
  { position: [-23.55, -46.63], popup: 'São Paulo' },    // São Paulo
  { position: [-18.10, -44.38], popup: 'Minas Gerais' }, // Minas Gerais
  { position: [-15.80, -49.30], popup: 'Goiás' },        // Goiás
];

const LocationsMapSection = () => {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  useEffect(() => {
    // GeoJSON para os estados do Brasil
    fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
      .then(response => response.json())
      .then(data => {
        setGeoJsonData(data);
      })
      .catch(err => console.error('Erro ao carregar GeoJSON:', err));
  }, []);

  // Função para definir a cor de cada estado
  const getStateColor = (stateCode: string) => {
    return stateColors[stateCode] || 'gray';
  };

  return (
    <section className="py-10 bg-white font-sans mt-1">
      <div className="container mx-auto px-2 flex flex-col items-center justify-center gap-8"> 
        {/* Título acima do mapa */}
        <h2 className="text-4xl font-bold text-[#1C2C3A] text-center mb-6">
          Mapa de atendimentos já realizados
        </h2>
        
        {/* Mapa do Brasil com Leaflet */}
        <div className="w-full max-w-3xl h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative z-0">
          <MapContainer 
            center={[-14.2350, -51.9253]} 
            zoom={4} 
            style={{ height: "100%", width: "100%", zIndex: 0 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Polígono colorido para cada estado */}
            {geoJsonData && (
              <GeoJSON
                data={geoJsonData}
                style={(feature) => ({
                  fillColor: getStateColor(feature.properties.sigla),
                  weight: 1,
                  opacity: 1,
                  color: 'white',
                  fillOpacity: 0.6,
                })}
              >
                <Popup>
                  {({ properties }) => `Estado: ${properties.sigla}`}
                </Popup>
              </GeoJSON>
            )}
            {/* Adição de marcadores */}
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>{marker.popup}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>        
      </div>
    </section>
  );
};

export default LocationsMapSection;