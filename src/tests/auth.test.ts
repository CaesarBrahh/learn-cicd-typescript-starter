import { describe, expect, test } from "vitest";
import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.ts";

describe("getAPIKey", () => {
  test("returns the API key from a valid Authorization header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey abc123",
    };

    expect(getAPIKey(headers)).toBe("abc123");
  });

  test("returns null when authorization header is missing", () => {
    const headers: IncomingHttpHeaders = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authorization is not ApiKey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "Bearer abc123",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
