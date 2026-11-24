/*
 * INST377 Lab: Map of US  (script.js)
 *
 * Work through the TODOs in order and test after each one.
 * Keep DevTools -> Console open while you work.
 */

// PROVIDED: random number generator. Do not change this function.
function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

/*
 * Ask the BigDataCloud API which locality is at a coordinate.
 * Returns the locality as a string (for example "San Saba").
 */
async function getLocality(latitude, longitude) {
  // TODO 9: Build the API URL with this marker's latitude and longitude,
  // fetch it, convert the response to JSON, and return the locality.
  //
  // URL (see README):
  // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en
  //
  // Hint: use a template literal (backticks ` `) so ${latitude} and
  // ${longitude} are filled in. Paste a real URL into your browser first to
  // see which field in the JSON holds the locality.
  const URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
  
  const response = await fetch(URL);
  const data = await response.json();
  return data.locality;
}

async function createMap() {

  const MAP = L.map("map").setView([32.5, -95], 6);

  // TODO 4: Create the map in <div id="map">, centered on the US.
  // Pick a center [latitude, longitude] and a zoom level that show ALL
  // three random points. (Hint: where can the points land? Check the
  // ranges in TODO 6.)
  //
  // const map = L.map("map").setView([ ?, ? ], ?);


  // TODO 5: Add the OpenStreetMap tile layer to the map, with its
  // attribution. Copy it from the Leaflet Quick Start guide.
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(MAP);

  // Make 3 markers: i = 1, 2, 3
  for (let i = 1; i <= 3; i++) {
    // TODO 6: Generate this marker's coordinates. Use EXACTLY these calls:
    //   latitude:  getRandomInRange(30, 35, 3)
    //   longitude: getRandomInRange(-90, -100, 3)

    const latitude = getRandomInRange(30, 35, 3);
    const longitude = getRandomInRange(-90, -100, 3);
    // TODO 7: Add a marker to the map at [latitude, longitude].
    L.marker([latitude, longitude]).addTo(MAP);

    // TODO 8: Show this marker's text in the <h3 id="marker1">, "marker2"
    // or "marker3" element, like:
    //   Marker 1: Latitude: 30.964, Longitude: -98.992
    // Hint: document.getElementById(`marker${i}`)
    document.getElementById(`marker${i}`).textContent = `Marker ${i}: Latitude: ${latitude}, Longitude: ${longitude}`;

    // TODO 10: Call getLocality() (don't forget await) and show the result
    // in the <p id="locality1">, "locality2" or "locality3" element, like:
    //   Locality: San Saba
    const locality = await getLocality(latitude, longitude);
    document.getElementById(`locality${i}`).textContent = `Locality: ${locality}`;
  }
}

window.onload = createMap;
