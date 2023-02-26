import axios from "axios";

// eslint-disable-next-line import/no-unresolved
import { API_KEY } from "@env";

export const axiosInstance = axios.create({
  baseURL: "https://rebrickable.com/api/v3/lego",
  headers: {
    Authorization: `key ${API_KEY}`,
  },
});
