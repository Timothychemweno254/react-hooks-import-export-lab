import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
// src/user.js
export const username = "Liza";
export const city = "New York";
export const image = "https://i.imgur.com/mV8PQxj.gif";