import { request } from "remax/wechat";

export default async (url: string, params?: Object): Promise<any> => {

  const { data } = await request({ url, ...params });
  return data;
};
