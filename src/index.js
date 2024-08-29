/**
 * Spherical Geometry Library v1.4.0
 * This code is a port of some classes from the Google Maps Javascript API
 * @module spherical-geometry
 */

/// <reference types="./index.d.ts" />

export { default as computeArea } from './compute-area.js';
export { default as computeDistanceBetween } from './compute-distance-between.js';
export { default as computeHeading } from './compute-heading.js';
export { default as computeLength } from './compute-length.js';
export { default as computeOffset } from './compute-offset.js';
export { default as computeOffsetOrigin } from './compute-offset-origin.js';
export { default as computeSignedArea } from './compute-signed-area.js';
export { default as interpolate } from './interpolate.js';

export { default as LatLng } from './latlng.js';
export {
  convert as convertLatLng,
  convertLiteral as convertLatLngLiteral,
  equals as equalLatLngs,
} from './convert.js';
export { default as LatLngBounds } from './latlng-bounds.js';
export * from './utils.js';
