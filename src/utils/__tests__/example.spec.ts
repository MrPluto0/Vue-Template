import { EmailRule } from "../example";

test("validate email", () => {
  expect(EmailRule.test("710852553@qq.com")).toBe(true);
  expect(EmailRule.test("asdasd@qweqw")).toBe(false);
  expect(EmailRule.test("ads@qweqw.ac.asc")).toBe(true);
  expect(EmailRule.test("ads@")).toBe(false);
});
