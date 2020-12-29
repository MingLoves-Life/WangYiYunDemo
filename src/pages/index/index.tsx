import * as React from "react";
import { View, navigateTo } from "remax/one";

import NavBar from "@/component/nav-bar/navBar";
import SearchSongValue from "@/component/input/searchSong";
import Rank, { tracksProps } from "@/component/rank/rank";
import { getTopList } from "@/common/request/requestUrl";
interface topListProps {
  coverImgUrl: string;
  tracks: tracksProps[];
  id: string;
}

export default () => {
  const [topList, setTopList] = React.useState([]);

  const topUrl = async (): Promise<void> => {
    const { list } = await getTopList();
    setTopList(list.slice(0, 4));
  };
  const toSearch = () => {
    navigateTo({
      url: "/pages/search/index",
    });
  };

  React.useEffect(() => {
    topUrl();
  }, []);

  return (
    <View>
      <NavBar name="网易云demo" isIcon={false} />
      <SearchSongValue onTop={toSearch} />
      {(Array.isArray(topList) ? topList : []).map((item: topListProps) => {
        return (
          <Rank
            url={item.coverImgUrl}
            tracks={item.tracks}
            _key={item.id}
          ></Rank>
        );
      })}
    </View>
  );
};
