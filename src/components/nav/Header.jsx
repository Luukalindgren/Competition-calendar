import {
  HomeOutlined,
  SettingOutlined,
  StarOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import LLLogo from "/LL.png";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Favourites",
    key: "favourites",
    icon: <StarOutlined />,
  },
  {
    label: "Rules",
    key: "rules",
    icon: <SettingOutlined />,
  },
  {
    label: (
      <a
        href="https://github.com/Luukalindgren"
        target="_blank"
        rel=" noopener noreferrer"
      >
        GitHub - Link
      </a>
    ),
    key: "github",
    icon: <GithubOutlined />,
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="Header">
      <img src={LLLogo} className="logo" alt="logo" />
      <h1>Kisakalenteri</h1>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        colorPrimaryBorder="#000000"
        items={items}
      />
    </div>
  );
};

export default Header;
