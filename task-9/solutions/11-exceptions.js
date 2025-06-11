export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        throw new ParseError('Invalid JSON string');
    }
}
// END
