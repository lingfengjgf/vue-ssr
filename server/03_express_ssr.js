const express = require("express");

// 获取vue实例
const { createSSRApp, ref } = require("vue");

// 获取渲染器实例
const { renderToString } = require("@vue/server-renderer");

const server = express();

// 用渲染器渲染vue实例
async function renderVueApp(req, res) {
  const app = createSSRApp({
    template: "<div>{{msg}}</div>",
    setup() {
      const msg = ref("vue ssr msg");
      return { msg };
    },
  });
  try {
    let html = await renderToString(app);
    res.send(html);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

server.get("/", renderVueApp);

server.listen(80, () => {
  console.log("server running!!");
});
