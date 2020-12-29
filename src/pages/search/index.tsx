import * as React from "react";
import { View } from "remax/one";

import SearchSong from "@/component/input/searchSong";
import NavBar from "@/component/nav-bar/navBar";
import { getSearchHot, getSearchSong } from "@/common/request/requestUrl";
import HotSong from "./hotSong/hotSong";
import WordSearchSongs from "./searchSong/index";

export default () => {
  const [isHot, setIsHot] = React.useState(true);
  const [isSearch, setIsSearch] = React.useState(false);
  const [songList, setSongList] = React.useState([]);
  const [searchSongList, setSearchSongList] = React.useState([]);

  const getList = React.useCallback(async () => {
    const { data } = await getSearchHot();
    setSongList(data.slice(0, 20));
  }, []);

  const toSearchSong = async (value: string) => {
    setIsHot(false);
    setIsSearch(true);
    const { result } = await getSearchSong(value);
    setSearchSongList(result.songs);
  };
  return (
    <View>
      <NavBar name="搜索" isIcon={true} />
      <View>
        <SearchSong
          onInput={() => getList()}
          onConfirm={(value: string) => toSearchSong(value)}
        />
      </View>
      {isHot ? (
        <HotSong
          onTap={getList}
          songList={songList}
          onClick={toSearchSong}
        ></HotSong>
      ) : null}
      {isSearch ? (
        <WordSearchSongs searchSongList={searchSongList}></WordSearchSongs>
      ) : null}
    </View>
  );
};
