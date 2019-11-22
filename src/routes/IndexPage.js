import React from "react";
import Block from "dxc-flex";
import Main from "./Main/Main";

export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{padding: "30px 15px"}}>
        <div
          style={{textAlign: "center", fontSize: 18, fontWeight: 700, marginBottom: 15}}
        >
          最安全快速的图片加水印工具，纯前端实现，绝不上传图片到服务器，保证个人信息安全。
        </div>
        <Main/>
      </div>
    );
  }
}
