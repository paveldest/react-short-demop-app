import axios, { Method } from "axios";

export interface IApiMiddleware {
  url: string;
  baseURL?: string;
  method?: Method;
  headers?: Record<string, string>;
  data?: Record<string, string>;
  
}
export type IApi = (arg: IApiMiddleware) => Promise<string>;

export default async function apiMiddleware({
  url = "/",
  method = "GET",
  headers = {},
  data = {}
}: IApiMiddleware) {
  // defaults(headers, {
  //   Accept: "application/json; charset=UTF-8",
  //   "Content-Type": "application/json; charset=UTF-8",
  //   "Content-Language": localStorage.getItem("lng") || "en",
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // });

  try {
    const resp = await axios({
      url,
      method,
      headers,
      data,
    });
  } catch (er: any) {
    // ........
    throw new Error(er);
  }
}
