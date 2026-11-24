# INST377 Lab 7: Leaflet Map + Reverse Geocoding API

**Points:** 30

## Goal

Use a mapping library (**Leaflet.js**) in a web page, then call an **API** to get information about points on the map.

When you're done, your page will show:

1. A heading: **Map of US**
2. A Leaflet map of the United States with **3 markers** at random coordinates
3. Below the map, for each marker:
   - **Marker 1: Latitude: 30.964, Longitude: -98.992**
   - Locality: San Saba

Your coordinates and localities will be different every time you reload the page, because the points are random.

## Files

| File | What you do in it |
|---|---|
| `index.html` | Add the Leaflet library, size the map, add the text for Markers 2 and 3 |
| `script.js` | Create the map, generate coordinates, add markers, call the API, show the results |

Every place you need to write code is marked with a **TODO** comment. Work through them in order.

## Setup

1. Unzip this folder and open it in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. Open DevTools (right-click → Inspect → **Console**) and keep it open. Errors show up there first.

## Background

Leaflet's Quick Start guide covers almost everything you need for the map:
https://leafletjs.com/examples/quick-start/

## Steps

### Part A: Set up the page (`index.html`)

- **TODO 1:** Add Leaflet's CSS and JS from the Quick Start guide. Leaflet must load **before** `script.js`.
- **TODO 2:** Give `#map` a height. A map with no height is invisible.
- **TODO 3:** Add the text blocks for Marker 2 and Marker 3, copying the pattern of Marker 1.

### Part B: Build the map (`script.js`)

- **TODO 4:** Create the map, centered on the US. Choose a center and zoom level that show **all three** random points. (Where can they land? Look at the ranges in Part C.)
- **TODO 5:** Add the OpenStreetMap tile layer, including its attribution.

### Part C: Random coordinates

`getRandomInRange()` is provided. **Do not change it.**

- **TODO 6:** Generate 3 sets of coordinates using **exactly** these calls:
  - Latitude: `getRandomInRange(30, 35, 3)`
  - Longitude: `getRandomInRange(-90, -100, 3)`
- **TODO 7:** Put a marker on the map at each point.
- **TODO 8:** Show each marker's text below the map: `Marker 1: Latitude: ..., Longitude: ...`

### Part D: Call the API

For each marker, call the BigDataCloud reverse-geocoding API to find the locality at that point:

```
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en
```

- **TODO 9:** In `getLocality()`, fetch that URL with the marker's coordinates and return the locality.
- **TODO 10:** Show `Locality: ...` under each marker's text.

**Before you code Part D:** paste the URL into a browser tab with real numbers (try `latitude=32.885&longitude=-96.188`). Read the JSON. Which field holds the locality?

## Tips

- **Latitude comes first.** Leaflet always uses `[latitude, longitude]`. If your markers land in Antarctica, you've swapped them.
- **Test after every TODO**, not at the end. A typo in one step stops everything after it from running.
- **`fetch` is asynchronous.** Use `await` inside an `async` function, as we did with the chart example.
- **An error in the Console that mentions CORS** usually means the URL is wrong. Check it by pasting it into a browser tab.

## Requirements checklist (30 pts)

- [ ] A Leaflet map that defaults to US coordinates, with a view that shows all the random points
- [ ] The provided `getRandomInRange()` function is used
- [ ] 3 random coordinate sets, using the exact ranges above
- [ ] Text below the map for Marker 1, Marker 2 and Marker 3 with their coordinates
- [ ] An API call for each marker, with its locality shown below that marker's text

