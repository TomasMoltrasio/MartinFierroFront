export default function MapContainer() {
  return (
    <div>
      <iframe
        width="550"
        height="400"
        frameborder={0}
        src="https://widgets.scribblemaps.com/sm/?d&z&l&gc&af&mc&lat=-35.54330448&lng=-58.125986488&vz=11&type=road&ti&s&width=550&height=400&id=MartinFierro"
        style={{ border: 0, maxWidth: "100%" }}
        allowfullscreen
        allow="geolocation"
        loading="lazy"
      ></iframe>
    </div>
  );
}
