import {
  HomeOutlined,
  SettingOutlined,
  StarOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import LLLogo from "/LL.png";

// THIS FILE GIVES NON-FATAL ERROR: "Warning: [antd: Menu] `children` will be removed in next major version. Please use `items` instead."

const Header = () => {
  const [current, setCurrent] = useState("home");

  function onClick(e) {
    setCurrent(e.key);
  }

  return (
    <div className="Header">
      <img src={LLLogo} className="logo" alt="logo" />
      <h1>Kisakalenteri</h1>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/Competition-calendar">Koti</Link>
        </Menu.Item>
        <Menu.Item key="favourites" icon={<StarOutlined />}>
          <Link to="/Competition-calendar/favourites">Suosikit</Link>
        </Menu.Item>
        <Menu.Item key="rules" icon={<SettingOutlined />}>
          <Link to="/Competition-calendar/rules">Säännöt</Link>
        </Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}>
          <a
            href="https://github.com/Luukalindgren"
            target="_blank"
            rel=" noopener noreferrer"
          >
            GitHub - Link
          </a>
        </Menu.Item>
      </Menu>
      <Outlet />
    </div>
  );
};

export default Header;
