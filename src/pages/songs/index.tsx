import * as React from "react";
import { View, Image, Text, navigateTo } from "remax/one";
import { createInnerAudioContext, createSelectorQuery } from "remax/wechat";
import NavBar from "@/component/nav-bar/navBar";
import { play, zan, pause } from "@/common/icons";
import {
  getSongDetail,
  getSongLyric,
  getSongCommont,
  getSimiSong,
  getSongUrl,
} from "@/common/request/requestUrl";
import * as style from "./index.css";

interface lrcProps {
  time: string;
  lyric: RegExpMatchArray | null;
}

type rowNumber = number | undefined;

type detailProps = { al?: { picUrl: string } };

interface simiSongs {
  id: string;
  name: string;
  album: { blurPicUrl: string };
  artists: { name: string }[];
}

interface hotComments {
  user: { avatarUrl: string; nickname: string };
  time: string;
  likedCount: string;
  content: string;
}

const audioCtx = createInnerAudioContext();

export default (params: {
  location: { query: { id: string; name: string } };
}) => {
  const [detail, setDetail] = React.useState<detailProps>({});
  const [lrc, setLrc] = React.useState<lrcProps[]>([]);
  const [simiSongs, setSimiSongs] = React.useState<simiSongs[]>([]);
  const [hotComments, setHotComments] = React.useState<hotComments[]>([]);
  const [playIcon, setPlayIcon] = React.useState(true);
  const [rotateDeg, setRotateDeg] = React.useState(false);
  const [row, setRow] = React.useState<rowNumber>(0);
  const [scrollTop, setScrollTop] = React.useState(0);

  const lyricDom = React.useRef();

  const dealLrc = (lrc: string) => {
    const regAll = /\[.*/g;
    const reg = /(?<=(\]))(.)+/g;
    const regTime = /(?<=\:).+(?=\])/g;
    const regMinTime = /(?<=\[0)./g;
    const lrcAll = lrc.match(regAll);
    const lrcObj: lrcProps[] = [];

    lrcAll?.map((item, index) => {
      const time = Number(item.match(regTime));
      const lyric = item.match(reg);
      const minTime = Number(item.match(regMinTime));
      lrcObj[index] = { time: (minTime * 60 + time).toString(), lyric };
    });

    setLrc(lrcObj);
  };
  const toSongs = (id: string, name: string) => {
    navigateTo({
      url: "/pages/songs/index?id=" + id + "&name=" + name,
    });
  };

  const audioDeal = (src: string) => {
    audioCtx.src = src;
    audioCtx.play();
    const children = lyricDom.current.children;

    const len = children.length;

    audioCtx.onPlay(() => {
      setPlayIcon(false);
      setRotateDeg(true);
      const duration = audioCtx.duration;
    });
    audioCtx.onPause(() => {
      setPlayIcon(true);
      setRotateDeg(false);
    });
    audioCtx.onTimeUpdate(() => {
      const duration = audioCtx.duration;
      const currentTime = audioCtx.currentTime;

      const deal = () => {
        for (let i = 0; i < len; i++) {
          if (children[i].props.id > currentTime) {
            return i - 1;
          }
        }
      };

      const rowNum: rowNumber = deal();
      if (rowNum && row && rowNum > row) {
        let num = 120 - rowNum * 58;
        setScrollTop(num);
      }
      setRow(rowNum);
    });
  };

  const getSongSth = async () => {
    const id = Number(params.location.query.id);
    const { songs } = await getSongDetail(id);
    const { lrc } = await getSongLyric(id);
    const result = await getSongCommont(id);
    const simiSongs = await getSimiSong(id);
    const { data } = await getSongUrl(id);
    dealLrc(lrc.lyric);
    setDetail(songs[0]);
    setSimiSongs(simiSongs.songs);
    setHotComments(
      result.hotComments.length ? result.hotComments : result.comments
    );
    audioDeal(data[0].url);
  };
  React.useEffect(() => {
    getSongSth();
  }, []);

  return (
    <>
      <View className={style.backGround}>
        <NavBar name={params.location.query.name} isIcon={true}></NavBar>
        {Object.keys(detail).length ? (
          <>
            <Image
              className={style.bg}
              src={detail.al && detail.al.picUrl}
            ></Image>
            <View className={style.song}>
              <View className={style.logo}>网易云音乐</View>
              <View className={style.block}></View>
              <View className={style.play}>
                <View className={style.vinyl}>
                  <View
                    className={style.pic}
                    style={{
                      backgroundImage: `url(${detail.al && detail.al.picUrl})`,
                      animationPlayState: rotateDeg ? "running" : `paused`,
                    }}
                  ></View>
                  <Image
                    src={playIcon ? play : pause}
                    className={style.playIcon}
                    onTap={() =>
                      !playIcon ? audioCtx.pause() : audioCtx.play()
                    }
                  ></Image>
                </View>
              </View>
              <View className={style.lyricOut}>
                <View
                  className={style.lyric}
                  ref={lyricDom}
                  style={{
                    top: row === 0 ? "120px" : `${scrollTop}px`,
                  }}
                  id="lyric"
                >
                  {lrc.length > 0
                    ? lrc.map((item, index) => {
                        return (
                          <View
                            className={
                              row === index
                                ? style.lyricListCho
                                : style.lyricList
                            }
                            id={item.time}
                            style={{
                              visibility: !item.lyric ? "hidden" : undefined,
                            }}
                          >
                            {item.lyric === null ? "空" : item.lyric}
                          </View>
                        );
                      })
                    : null}
                </View>
              </View>
              <View className={style.share}>
                <View>分享给微信好友</View>
              </View>
              <View className={style.like}>
                <Text className={style.likeToo}>喜欢这首歌的人也听</Text>
                <View className={style.key}>
                  <Image className={style.keyPlay} src={play}></Image>
                  <Text
                    className={style.words}
                    onTap={() =>
                      simiSongs.length
                        ? toSongs(simiSongs[0].id, simiSongs[0].name)
                        : null
                    }
                  >
                    一键收听
                  </Text>
                </View>
              </View>
              {simiSongs.length
                ? simiSongs.map((item) => {
                    return (
                      <>
                        <View
                          className={style.likeSong}
                          onTap={() => toSongs(item.id, item.name)}
                        >
                          <Image
                            className={style.likeSongUrl}
                            src={item.album.blurPicUrl}
                          ></Image>
                          <View className={style.likeSongContext}>
                            <Text className={style.likeSongName}>
                              {item.name}
                            </Text>
                            <Text className={style.likeSongSinger}>
                              {item.artists[0].name}
                            </Text>
                          </View>
                          <Image
                            className={style.likeSongPlay}
                            src={play}
                          ></Image>
                        </View>
                      </>
                    );
                  })
                : null}

              <View className={style.comment}>
                <View>精彩评论</View>
                {hotComments.length ? (
                  <>
                    {hotComments.map((item) => {
                      return (
                        <>
                          <View className={style.message}>
                            <Image
                              className={style.messageUrl}
                              src={item.user.avatarUrl}
                            ></Image>
                            <View className={style.messageContext}>
                              <Text className={style.messageName}>
                                {item.user.nickname}
                              </Text>
                              <Text className={style.messageTime}>
                                {item.time}
                              </Text>
                            </View>
                            <View className={style.messageGood}>
                              <Text className={style.likedCount}>
                                {item.likedCount}
                              </Text>
                              <Image
                                className={style.likedIcon}
                                src={zan}
                              ></Image>
                            </View>
                          </View>
                          <View className={style.detail}>{item.content}</View>
                        </>
                      );
                    })}
                  </>
                ) : null}
              </View>
            </View>
            <View className={style.bottom}>下载云音乐查看更多精彩评论</View>
          </>
        ) : null}
      </View>
    </>
  );
};
