"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
var api_define = require("../../api/define.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_swiper2 + _easycom_u_image2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_image = () => "../../uni_modules/vk-uview-ui/components/u-image/u-image.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (SearchInput + _easycom_u_swiper + _easycom_u_image + _easycom_u_grid_item + _easycom_u_grid + HomeFloder)();
}
const HomeFloder = () => "./components/HomeFloder.js";
const SearchInput = () => "../../components/searchInput/searchinput.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let data = common_vendor.reactive({
      list: [],
      cateList: []
    });
    api_api.getSwiper().then((res) => {
      data.list = res.message;
    });
    api_api.getCate().then((res) => {
      if (res.meta.status === api_define.Code.SUCCESS) {
        data.cateList = res.message;
        console.log(res, "\u5BFC\u822A\u680F");
      } else {
        common_vendor.index.showToast({
          title: "res.meta.msg",
          icon: "error"
        });
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: common_vendor.unref(data).list,
          name: "image_src",
          height: "340"
        }),
        b: common_vendor.f(common_vendor.unref(data).cateList, (item, index, i0) => {
          return {
            a: "57280228-4-" + i0 + "," + ("57280228-3-" + i0),
            b: common_vendor.p({
              width: "74px",
              height: "80px",
              src: item.image_src
            }),
            c: index,
            d: "57280228-3-" + i0 + ",57280228-2"
          };
        }),
        c: common_vendor.p({
          col: 4,
          border: false
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
