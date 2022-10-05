"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
var api_define = require("../../api/define.js");
require("../../request/request.js");
const _sfc_main = {
  setup() {
    const searchList = common_vendor.ref([]);
    const queryValue = common_vendor.ref("");
    const scrollTop = common_vendor.ref(0);
    const listNull = common_vendor.computed$1(() => {
      return !(searchList.value.length <= 0 && !queryValue.value);
    });
    const resultList = () => {
      api_api.getSearchInput(queryValue.value).then((res) => {
        if (res.meta.status === api_define.Code.SUCCESS) {
          searchList.value = res.message;
        }
      });
    };
    const clearList = () => {
      searchList.value = [];
      queryValue.value = "";
    };
    const goDetail = (values) => {
      common_vendor.index.navigateTo({
        url: `/pages/goodsDetails/goodsDetails?id=${values.goods_id}`
      });
    };
    return {
      scrollTop,
      queryValue,
      searchList,
      resultList,
      listNull,
      clearList,
      goDetail
    };
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.resultList),
    b: common_vendor.o(($event) => $setup.queryValue = $event),
    c: common_vendor.p({
      border: true,
      placeholder: "\u8BF7\u8F93\u5165\u4F60\u8981\u641C\u7D22\u7684\u5185\u5BB9",
      modelValue: $setup.queryValue
    }),
    d: $setup.queryValue,
    e: common_vendor.o($setup.clearList),
    f: common_vendor.f($setup.searchList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: item.goods_id
      };
    }),
    g: common_vendor.o((...args) => $setup.goDetail && $setup.goDetail(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/pages/searchContent/searchContent.vue"]]);
wx.createPage(MiniProgramPage);
