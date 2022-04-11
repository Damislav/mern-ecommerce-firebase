import React, { useState } from "react";
import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

const Header = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "LOGOUT",
          payload: null,
        });
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        Register
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-right">
        Login
      </Item>

      <SubMenu icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item onClick={logout} icon={<LogoutOutlined />}>
          Logout
        </Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
