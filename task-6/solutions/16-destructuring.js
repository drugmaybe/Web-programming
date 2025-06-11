const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0) return null;

    let nearestLocation = null;
    let minDistance = Infinity;

    for (const [locationName, locationPoint] of locations) {
        const distance = getDistance(locationPoint, point);
        if (distance < minDistance) {
            minDistance = distance;
            nearestLocation = [locationName, locationPoint];
        }
    }

    return nearestLocation;
};

export { getTheNearestLocation };
// END
