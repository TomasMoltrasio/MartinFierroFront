export default function MapContainer() {
  return (
    <div>
      <iframe
        width={550}
        height={400}
        frameBorder={0}
        src="https://widgets.scribblemaps.com/sm/?d&z&l&gc&af&mc&lat=-35.569526574&lng=-58.005072528&vz=12&type=road&ti&s&width=550&height=400&id=DeliveryMf"
        style={{ border: 0, maxWidth: "100%" }}
        allowFullScreen
        allow="geolocation"
        loading="lazy"
      />
    </div>
  );
}
