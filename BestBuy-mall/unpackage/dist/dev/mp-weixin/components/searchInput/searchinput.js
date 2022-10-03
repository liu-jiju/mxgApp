"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const handleTo = () => {
      common_vendor.index.navigateTo({
        url: "/pages/searchContent/searchContent"
      });
    };
    return {
      handleTo
    };
  }
};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.handleTo)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-076333aa"], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/components/searchInput/searchinput.vue"]]);
wx.createComponent(Component);
