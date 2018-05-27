ReactDOMRe.renderToElementWithId(<Component1 message="Hello!" />, "index1");
ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello!" />, "index2");

[@bs.deriving abstract]
type locationT = {
  username: string,
  location: (float, float),
};

let renderMap: array(locationT) => unit =
  locations =>
    ReactDOMRe.renderToElementWithId(
      <Map.ComposableMap
        projectionConfig={scale: 205.0, rotation: ((-11.0), 0.0, 0.0)}
        width=980
        height=551>
        <Map.ZoomableGroup center=(0.0, 20.0) disablePanning=true>
          <Map.Geographies geography="world-50m.json">
            ...(
                 (geographies, projection) =>
                   Array.map(
                     geography =>
                       <Map.Geography
                         key=(Map.id(geography))
                         geography
                         projection
                       />,
                     geographies,
                   )
               )
          </Map.Geographies>
          <Map.Markers>
            ...(
                 Array.map(
                   loc =>
                     <Map.Marker
                       marker=(Map.marker(~coordinates=location(loc)))>
                       <circle cx="0" cy="0" r="10" />
                     </Map.Marker>,
                   locations,
                 )
               )
          </Map.Markers>
        </Map.ZoomableGroup>
      </Map.ComposableMap>,
      "map",
    );

type response;

[@bs.val] external fetch : string => Js.Promise.t(response) = "fetch";

[@bs.send]
external responsejson : response => Js.Promise.t(array(locationT)) = "json";

fetch("https://immense-river-25513.herokuapp.com/locations")
|> Js.Promise.then_(responsejson)
|> Js.Promise.then_(locations => Js.Promise.resolve(renderMap(locations)));
