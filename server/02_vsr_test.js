// 获取vue实例
const { createSSRApp } = require("vue");
const app = createSSRApp({
  template: "<div>vue ssr</div>",
});

// 获取渲染器实例
const { renderToString } = require("@vue/server-renderer");

// 用渲染器渲染vue实例
async function renderVueApp() {
  let html = await renderToString(app);
  console.log("html:", html);
}

renderVueApp();
