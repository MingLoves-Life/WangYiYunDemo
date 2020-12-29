import * as React from "react";
import { View, Image, Input } from "remax/one";

import { searchIcon } from "@/common/icons";

import * as style from "./searchSong.css";

interface SearchSongProps {
  onTop?: () => void;
  onInput?: () => void;
  onConfirm?: (value: string) => void;
}
export default ({ onTop, onInput, onConfirm }: SearchSongProps) => {
  const searchHandle = () => {
    onInput ? onInput() : null;
  };

  const doConfirm = (value: any) => {
    onConfirm ? onConfirm(value.target.value) : null;
  };
  return (
    <>
      <View className={style.searchBox}>
        <View className={style.searchOutside} onTap={onTop}>
          <Image className={style.searchIcon} src={searchIcon} />
          <Input
            placeholder="搜索歌曲"
            className={style.searchText}
            onInput={() => searchHandle()}
            onConfirm={(value) => doConfirm(value)}
          ></Input>
        </View>
      </View>
    </>
  );
};
