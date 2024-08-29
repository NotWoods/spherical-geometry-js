/** @type {number} Earth's radius (at the Equator) of 6378137 meters. */
export const EARTH_RADIUS = 6378137;

/**
 * Convert from radians to degrees
 * @param {number} radians
 */
export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

/**
 * Convert from degrees to radians
 * @param {number} angleDegrees
 */
export function toRadians(angleDegrees) {
  return (angleDegrees * Math.PI) / 180.0;
}
