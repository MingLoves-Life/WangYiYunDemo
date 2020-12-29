import * as React from "react";
import { View, Text, Image } from "remax/one";
import * as style from "./index.css";

interface songListProps {
  searchWord: string;
  iconUrl: string;
  content: string;
  score: string;
}

interface paramsProps {
  onTap: () => void;
  onClick: (word: string) => void;
  songList: songListProps[];
}

export default (params: paramsProps) => {
  const { songList, onTap, onClick } = params;
  return (
    <View className={style.searchPage} onTap={() => onTap()}>
      <Text>{songList.length !== 0 ? "热搜榜" : null}</Text>
      {songList.map((item, index) => {
        return (
          <View className={style.item} onTap={() => onClick(item.searchWord)}>
            <View className={style.index}> {index + 1}</View>
            <View className={style.word}>
              <View>
                {item.searchWord}
                <Image className={style.icon} src={item.iconUrl}></Image>
              </View>
              <Text className={style.content}>{item.content}</Text>
            </View>
            <View className={style.score}>{item.score}</View>
          </View>
        );
      })}
    </View>
  );
};
