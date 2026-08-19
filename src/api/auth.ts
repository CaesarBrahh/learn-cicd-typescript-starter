import { IncomingHttpHeaders } from "http";

export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  // stores the value of the authorization header from the incoming HTTP request headers object and check if that value is present
  const authHeader = headers["authorization"];
  if (!authHeader) {
    return null;
  }

  // Splits and returns only the second part "Apikey abc123" --> "abc123"
  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
