// vue.config.js
module.exports = {
  publicPath: "",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      const tmp = args[0];
      tmp.template = "src/index.html";
      tmp.favicon = "src/assets/icons/favicon.ico";
      return args;
    });
  },
  // ...other vue-cli plugin options...
  pwa: {
    themeColor: "#FF0000",
    msTileColor: "#FF0000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    manifestOptions: { display: "fullscreen" },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    },
  },
};
