import request from "./request";

const baseUrl = (url: string) => `http://localhost:3000/${url}`;

export const getTopList = () => request(baseUrl("toplist/detail"));

export const getTopListSong = (id: number) => {
  return request(baseUrl(`playlist/detail?id=${id}`));
};
export const getSearchHot = () => request(baseUrl("search/hot/detail"));

export const getSearchSong = (params: String) =>
  request(baseUrl(`cloudsearch?keywords= ${params}`));

export const getSongDetail = (id: number) =>
  request(baseUrl(`song/detail?ids= ${id}`));

export const getSongLyric = (id: number) => request(baseUrl(`lyric?id=${id}`));

export const getSongCommont = (id: number) =>
  request(baseUrl(`comment/music?id=${id}`));

export const getSimiSong = (id: number) =>
  request(baseUrl(`simi/song?id=${id}`));

export const getSongUrl = (id: number) => request(baseUrl(`song/url?id=${id}`));
