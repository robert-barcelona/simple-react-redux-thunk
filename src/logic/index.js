import axios from "axios";
import APIError from "./APIError";

const FRIEND_URL = "https://randomuser.me/api/?nat=es&exc=login";

export const stringCheck = (string, name) => {
  if (!string) throw new APIError(`${name} is missing`);
  if (typeof string !== "string")
    throw new APIError(`${name} must be of type string`);
};

export const logicGetFriend = async () => {
  try {
    const results = await axios.get(FRIEND_URL);
    if (!results) return;
    const data = results.data.results[0];
    return {
      firstName: data.name.first,
      lastName: data.name.last,
      location: data.location,
      email: data.email,
      image: data.picture.medium,
      id: data.id.value
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

/**
 *
 * @param data {any}
 * @param index {string}
 * @returns {string}
 */
export const persistData = (data, index) => {
  let error = "";
  if (!data) return "Error in persisting storage: no data";
  if (!index || typeof index !== "string")
    "Error in persisting storage: incorrect index";
  try {
    const stringified = JSON.stringify(data);
    console.log(stringified, index);
    localStorage.setItem(index, stringified);
    return error;
  } catch (e) {
    return e.message;
  }
};

/**
 *
 * @param {string}
 * @returns {null|any}
 */
export const retrievePersistedData = index => {
  try {
    if (!index || typeof index !== "string") return null;
    const stringified = localStorage.getItem(index);
    if (!stringified) return null;
    return JSON.parse(stringified);
  } catch (e) {
    return null;
  }
};
