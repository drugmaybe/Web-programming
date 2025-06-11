// BEGIN

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function() {
  return this.x;
}

Point.prototype.getY = function() {
  return this.y;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function() {
  return this.beginPoint;
}

Segment.prototype.getEndPoint = function() {
  return this.endPoint;
}

function reverse(segment) {
  const begin = segment.getBeginPoint();
  const end = segment.getEndPoint();

  const newBegin = new Point(end.getX(), end.getY());
  const newEnd = new Point(begin.getX(), begin.getY());

  return new Segment(newBegin, newEnd);
}

export { Point, Segment, reverse };
export default { Point, Segment, reverse };

// END
