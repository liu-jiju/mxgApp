"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var api_define = require("../../api/define.js");
var api_api = require("../../api/api.js");
var common_vendor = require("../../common/vendor.js");
require("../../request/request.js");
const SearchInput = () => "../../components/searchInput/searchinput.js";
const _sfc_main = {
  components: {
    SearchInput
  },
  setup() {
    const data = common_vendor.reactive({
      list: [],
      goodsId: 1,
      childrenList: []
    });
    api_api.getCateList().then((res) => {
      console.log(res, "\u6211\u662F\u83B7\u53D6");
      if (res && res.meta.status === api_define.Code.SUCCESS) {
        data.list = res.message;
        data.childrenList = res.message[0].children;
      }
    });
    const handleSearch = (item) => {
      data.goodsId = item.cat_id;
      data.childrenList = item.children;
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      handleSearch
    });
  }
};
if (!Array) {
  const _component_searchInput = common_vendor.resolveComponent("searchInput");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _component_title = common_vendor.resolveComponent("title");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_component_searchInput + _easycom_u_col2 + _component_title + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_u_col + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.o(($event) => $setup.handleSearch(item), item.cat_id),
        c: item.cat_id === _ctx.goodsId ? 1 : "",
        d: item.cat_id
      };
    }),
    b: common_vendor.p({
      span: "3"
    }),
    c: common_vendor.f(_ctx.childrenList, (child, k0, i0) => {
      return {
        a: common_vendor.t(child.cat_name),
        b: "56dc8334-4-" + i0 + ",56dc8334-3",
        c: common_vendor.f(child.children, (childs, k1, i1) => {
          return {
            a: childs.cat_icon,
            b: common_vendor.t(childs.cat_name),
            c: childs.cat_id,
            d: "56dc8334-6-" + i0 + "-" + i1 + "," + ("56dc8334-5-" + i0)
          };
        }),
        d: "56dc8334-5-" + i0 + ",56dc8334-3",
        e: child.cat_id
      };
    }),
    d: common_vendor.p({
      col: 3,
      border: false
    }),
    e: common_vendor.p({
      span: "9"
    }),
    f: common_vendor.p({
      gutter: "16",
      justify: "space-between"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-56dc8334"], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
