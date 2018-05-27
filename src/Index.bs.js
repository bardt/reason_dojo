// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Map$ReactTemplate = require("./Map.bs.js");
var Component1$ReactTemplate = require("./Component1.bs.js");
var Component2$ReactTemplate = require("./Component2.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, Component1$ReactTemplate.make("Hello!", /* array */[])), "index1");

ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, Component2$ReactTemplate.make("Hello!", /* array */[])), "index2");

function renderMap(locations) {
  return ReactDOMRe.renderToElementWithId(ReasonReact.element(/* None */0, /* None */0, Map$ReactTemplate.ComposableMap[/* make */0](/* record */[
                      /* scale */205.0,
                      /* rotation : tuple */[
                        -11.0,
                        0.0,
                        0.0
                      ]
                    ], 980, 551, /* array */[ReasonReact.element(/* None */0, /* None */0, Map$ReactTemplate.ZoomableGroup[/* make */0](/* tuple */[
                                0.0,
                                20.0
                              ], true, /* array */[
                                ReasonReact.element(/* None */0, /* None */0, Map$ReactTemplate.Geographies[/* make */0]("world-50m.json", (function (geographies, projection) {
                                            return $$Array.map((function (geography) {
                                                          return ReasonReact.element(/* Some */[geography.id], /* None */0, Map$ReactTemplate.Geography[/* make */0](geography, projection, /* array */[]));
                                                        }), geographies);
                                          }))),
                                ReasonReact.element(/* None */0, /* None */0, Map$ReactTemplate.Markers[/* make */0]($$Array.map((function (loc) {
                                                return ReasonReact.element(/* None */0, /* None */0, Map$ReactTemplate.Marker[/* make */0]({
                                                                coordinates: loc.location
                                                              }, /* array */[React.createElement("circle", {
                                                                      cx: "0",
                                                                      cy: "0",
                                                                      r: "10"
                                                                    })]));
                                              }), locations)))
                              ]))])), "map");
}

fetch("https://immense-river-25513.herokuapp.com/locations").then((function (prim) {
          return prim.json();
        })).then((function (locations) {
        return Promise.resolve(renderMap(locations));
      }));

exports.renderMap = renderMap;
/*  Not a pure module */