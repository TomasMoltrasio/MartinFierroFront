export default function MapContainer() {
  return (
    <div>
      <iframe
        width="550"
        height="400"
        frameborder={0}
        src="https://widgets.scribblemaps.com/sm/?d&dv&cv&z&l&gc&af&mc&lat=-35.59873698&lng=-58.08530281&vz=12&type=road&ti&s&width=550&height=400&id=MartinFierro"
        style={{ border: 0, maxWidth: "100%" }}
        allowfullscreen
        allow="geolocation"
        loading="lazy"
      ></iframe>
    </div>
  );
}
