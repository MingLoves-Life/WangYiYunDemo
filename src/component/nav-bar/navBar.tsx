import * as React from "react";
import { View, Image, navigateBack, reLaunch } from "remax/one";
import { getMenuButtonBoundingClientRect, getSystemInfo } from "remax/wechat";
import * as Icon from "@/common/icons";
import * as style from "./index.css";

export default (props: { isIcon: boolean; name: string }) => {
  const [navTop, setNavTop] = React.useState(0);
  const [navHeight, setNavHeight] = React.useState(0);
  const [buttonLeft, setButtonLeft] = React.useState(0);
  const [buttonHeight, setButtonHeight] = React.useState(0);
  const [buttonWidth, setButtonWidth] = React.useState(0);

  const getInfo = async () => {
    const muneButton = getMenuButtonBoundingClientRect(); // 胶囊
    const systemInfo = await getSystemInfo(); // 设备
    const navHei =
      systemInfo.statusBarHeight +
      muneButton.height +
      (muneButton.top - systemInfo.statusBarHeight) * 2;
    setNavTop(muneButton.top); //胶囊按钮与顶部的距离
    setNavHeight(navHei); //导航高度
    setButtonLeft(systemInfo.windowWidth - muneButton.right);
    setButtonWidth(muneButton.width);
    setButtonHeight(muneButton.height);
  };

  const handleHome = React.useCallback(() => navigateBack(), []);

  const goHome = () => {
    reLaunch({
      url: "/pages/index/index",
    });
  };
  React.useEffect(() => {
    getInfo();
  }, []);

  return (
    <View className={style.navBar} style={{ height: `${navHeight * 2}px` }}>
      {props.isIcon ? (
        <View
          className={style.block}
          style={{
            width: `${buttonWidth * 2}px`,
            height: `${buttonHeight * 2}px`,
            top: `${navTop * 2}px`,
            left: `${buttonLeft * 2}`,
          }}
        >
          <View
            className={style.icon}
            style={{
              width: `${buttonWidth * 2}px`,
              height: `${buttonHeight * 2}px`,
            }}
          >
            <Image
              className={style.left}
              src={Icon.leftArrow_black}
              onTap={handleHome}
            ></Image>
            ｜
            <Image
              className={style.right}
              src={Icon.home_black}
              onTap={goHome}
            ></Image>
          </View>
        </View>
      ) : null}
      <View className={style.title} style={{ top: `${navTop * 2 + 10}px` }}>
        {props.name}
      </View>
    </View>
  );
};
