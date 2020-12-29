import * as React from "react";
import { View, Text, Image, navigateTo } from "remax/one";

import { playIconWhite, vip, sq, cr } from "@/common/icons";
import * as style from "./index.css";

interface searchSongListProps {
  id: string;
  name: string;
  fee: number;
  privilege: { flag: number; maxbr: number };
  ar: { name: string }[];
  al: { name: string };
}
export default (params: { searchSongList: searchSongListProps[] }) => {
  const { searchSongList } = params;
  const goToSongs = (params: { id: string; name: string }) => {
    navigateTo({
      url: "/pages/songs/index?id=" + params.id + "&name=" + params.name,
    });
  };
  return (
    <View className={style.searchSongList}>
      {searchSongList.map((item) => {
        return (
          <View
            className={style.item}
            onTap={() => goToSongs({ id: item.id, name: item.name })}
          >
            <View className={style.songName}>{item.name}</View>
            {item.fee === 1 ? (
              <Image className={style.tagIcon} src={vip} />
            ) : null}
            {item.privilege?.flag < 69 ? (
              <Image className={style.tagIcon} src={cr} />
            ) : null}
            {item.privilege.maxbr === 999000 ? (
              <Image className={style.tagIcon} src={sq} />
            ) : null}
            <Text className={style.singer}>
              {item.ar[0].name}-{item.al.name}
            </Text>
            <View className={style.icon}>
              <Image className={style.play} src={playIconWhite}></Image>
            </View>
          </View>
        );
      })}
    </View>
  );
};
