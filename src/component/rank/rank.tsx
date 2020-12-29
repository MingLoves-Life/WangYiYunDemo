import * as React from "react";
import { View, Text, Image, navigateTo } from "remax/one";

import * as style from "./rank.css";

export type tracksProps = {
  first: string;
  second: string;
};
interface paramsProps {
  url: string;
  tracks: tracksProps[];
  _key: string;
}
export default (params: paramsProps) => {
  const toHotList = (id: string) => {


    navigateTo({
      url: "/pages/hotList/index?id=" + id,
    });
  };
  return (
    <View className={style.rankBox} onTap={() => toHotList(params._key)}>
      <Image className={style.rankImg} src={params.url}></Image>
      <View className={style.rankWordBox}>
        {params.tracks.map((item, index: number) => {
          return (
            <>
              <Text className={style.rankWord} key={index}>
                {`${index + 1}. ${item.first} - ${item.second}`}
              </Text>
            </>
          );
        })}
      </View>
    </View>
  );
};
