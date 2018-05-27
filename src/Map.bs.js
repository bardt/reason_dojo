// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactSimpleMaps = require("react-simple-maps");

function make(projectionConfig, width, height, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.ComposableMap, {
              projectionConfig: projectionConfig,
              width: width,
              height: height
            }, children);
}

var ComposableMap = /* module */[/* make */make];

function make$1(center, disablePanning, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.ZoomableGroup, {
              center: center,
              disablePanning: disablePanning
            }, children);
}

var ZoomableGroup = /* module */[/* make */make$1];

function make$2(geography, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Geographies, {
              geography: geography
            }, children);
}

var Geographies = /* module */[/* make */make$2];

function make$3(geography, projection, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Geography, {
              geography: geography,
              projection: projection
            }, children);
}

var Geography = /* module */[/* make */make$3];

function make$4(children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Markers, { }, children);
}

var Markers = /* module */[/* make */make$4];

function make$5(marker, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Marker, {
              marker: marker
            }, children);
}

var Marker = /* module */[/* make */make$5];

exports.ComposableMap = ComposableMap;
exports.ZoomableGroup = ZoomableGroup;
exports.Geographies = Geographies;
exports.Geography = Geography;
exports.Markers = Markers;
exports.Marker = Marker;
/* ReasonReact Not a pure module */