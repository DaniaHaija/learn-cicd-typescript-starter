import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
describe("getAPIKey", () => {
  // الحالة الأولى: نجاح استخراج المفتاح
  test("should return the API key when a valid Authorization header is present", () => {
    const headers = {
      authorization: "ApiKey normal-api-key-123",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("normal-api-key-123");
  });

  // الحالة الثانية: عدم وجود الهيدر من الأساس
  test("should return null if no authorization header is present", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  // الحالة الثالثة: الهيدر موجود لكنه لا يبدأ بكلمة ApiKey
  test("should return null if the authorization header does not start with ApiKey", () => {
    const headers = {
      authorization: "Bearer some-token",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  // الحالة الرابعة: الهيدر يحتوي على كلمة ApiKey فقط بدون المفتاح
  test("should return null if the authorization header is malformed", () => {
    const headers = {
      authorization: "ApiKey",
    };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
