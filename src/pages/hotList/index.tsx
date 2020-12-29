import * as React from "react";
import { View, Image, Text, navigateTo } from "remax/one";
import NavBar from "@/component/nav-bar/navBar";
import { play, sq } from "@/common/icons";
import { getTopListSong, getTopList } from "@/common/request/requestUrl";
import * as style from "./index.css";
type topListProps = {
  coverImgUrl: string;
  name: string;
  description: string;
};
type creators = {
  avatarUrl: string;
};
type arProps = {
  name: string;
};
type listDetail = {
  id: string;
  name: string;
  ar: arProps[];
  al: { name: string };
};
export default (params: { location: { query: { id: number } } }) => {
  const [listDetail, setListDetail] = React.useState<listDetail[]>([]);
  const [creators, setCreators] = React.useState<creators>({ avatarUrl: "" });
  const [topList, setTopList] = React.useState<topListProps>({
    coverImgUrl: "",
    name: "",
    description: "",
  });
  const id = params.location.query.id;

  const getAllDetail = async (id: number) => {
    const { playlist } = await getTopListSong(id);
    const { tracks } = playlist;
    const { creator } = playlist;

    setListDetail(tracks);
    setCreators(creator);
  };
  const topUrl = async (): Promise<void> => {
    const { list } = await getTopList();
    const listDetail = list.find((item: { id: number }) => item.id == id);
    console.log("listDetail", listDetail);
    setTopList(listDetail);
  };
  const toSongs = (id: string, name: string) => {
    navigateTo({
      url: "/pages/songs/index?id=" + id + "&name=" + name,
    });
  };
  React.useEffect(() => {
    getAllDetail(id);
    topUrl();
  }, []);

  return (
    <View
      className={style.outside}
      style={{ backgroundImage: `url(${topList.coverImgUrl})` }}
    >
      <NavBar name="歌单" isIcon={true}></NavBar>
      <View className={style.wrapper}>
        <Image className={style.ListUrl} src={topList.coverImgUrl}></Image>
        <View className={style.word}>
          <Text className={style.title}>{topList.name}</Text>
          <View className={style.logo}>
            <Image className={style.titleLogo} src={creators.avatarUrl}></Image>
            <Text className={style.titleWord}>网易云音乐</Text>
          </View>
          <View className={style.titleDes}>{topList.description}</View>
        </View>
        <View className={style.share}>分享给微信好友</View>
      </View>
      <View className={style.under}>
        <View
          className={style.upNav}
          onTap={() =>
            listDetail.length > 0
              ? toSongs(listDetail[0].id, listDetail[0].name)
              : null
          }
        >
          <Image className={style.underUrl} src={play}></Image>
          <Text className={style.underWord}>播放全部</Text>
          <Text className={style.underSmallWord}>（共一百首）</Text>
        </View>
        {listDetail.length > 0
          ? listDetail.map((item, index) => {
              return (
                <View
                  className={style.songsList}
                  onTap={() => toSongs(item.id, item.name)}
                >
                  <View className={style.song}>
                    <View className={style.songIndex}>{index + 1}</View>
                    <View className={style.songContext}>
                      <View className={style.songName}>{item.name}</View>
                      <Image className={style.tagIcon} src={sq} />
                      <Text className={style.songSinger}>
                        {item.ar.map((item, index: number) => {
                          return index > 0 ? `/${item.name}` : `${item.name}`;
                        })}
                        -{item.al.name}
                      </Text>
                    </View>
                    <Image className={style.songPlay} src={play}></Image>
                  </View>
                </View>
              );
            })
          : null}
      </View>
    </View>
  );
};
