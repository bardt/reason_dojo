[@bs.module "react-simple-maps"]
external composableMap : ReasonReact.reactClass = "ComposableMap";

module ComposableMap = {
  type projectionConfig = {
    scale: float,
    rotation: (float, float, float),
  };

  [@bs.deriving abstract]
  type jsProps = {
    projectionConfig,
    width: int,
    height: int,
  };

  let make = (~projectionConfig, ~width, ~height, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=composableMap,
      ~props=jsProps(~projectionConfig, ~width, ~height),
      children,
    );
};

[@bs.module "react-simple-maps"]
external zoomableGroup : ReasonReact.reactClass = "ZoomableGroup";

module ZoomableGroup = {
  [@bs.deriving abstract]
  type jsProps = {
    center: (float, float),
    disablePanning: bool,
  };

  let make = (~center, ~disablePanning, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=zoomableGroup,
      ~props=jsProps(~center, ~disablePanning),
      children,
    );
};

[@bs.module "react-simple-maps"]
external geographies : ReasonReact.reactClass = "Geographies";

type projection;

[@bs.deriving abstract]
type geography = {id: string};

module Geographies = {
  [@bs.deriving abstract]
  type jsProps = {geography: string};

  let make = (~geography, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=geographies,
      ~props=jsProps(~geography),
      children,
    );
};

[@bs.module "react-simple-maps"]
external geographyClass : ReasonReact.reactClass = "Geography";

module Geography = {
  [@bs.deriving abstract]
  type jsProps = {
    geography,
    projection,
  };

  let make = (~geography, ~projection, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=geographyClass,
      ~props=jsProps(~geography, ~projection),
      children,
    );
};

[@bs.module "react-simple-maps"]
external markers : ReasonReact.reactClass = "Markers";

module Markers = {
  let make = children =>
    ReasonReact.wrapJsForReason(
      ~reactClass=markers,
      ~props=Js.Dict.empty(),
      children,
    );
};

[@bs.module "react-simple-maps"]
external markerClass : ReasonReact.reactClass = "Marker";

[@bs.deriving abstract]
type marker = {coordinates: (float, float)};

module Marker = {
  [@bs.deriving abstract]
  type jsProps = {marker};

  let make = (~marker, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=markerClass,
      ~props=jsProps(~marker),
      children,
    );
};
