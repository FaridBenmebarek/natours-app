export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWFqb3JhIiwiYSI6ImNrY3hnN2g4aDA3eGUyeHA4ZjRjNWZtZnMifQ.piNH3IccRk4PejEWpnlX4A";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/majora/ckcxghiac0ugf1iquv4wj7dv0",
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    // Add maker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Days ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      botton: 150,
      left: 100,
      right: 100,
    },
  });
};
