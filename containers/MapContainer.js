export default function MapContainer() {
  return (
    <div>
      <iframe
        width={550}
        height={400}
        frameBorder={0}
        src="https://widgets.scribblemaps.com/sm/?d&z&l&gc&af&mc&dfe&lat=-35.57823354&lng=-58.015565323&vz=12&type=road&ti&s&width=550&height=400&id=MartinFierro"
        style={{ border: 0, maxWidth: "100%" }}
        allowFullScreen
        allow="geolocation"
        loading="lazy"
      />
    </div>
  );
}
