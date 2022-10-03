"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_api = require("../../../api/api.js");
var api_define = require("../../../api/define.js");
require("../../../request/request.js");
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_grid_item = () => "../../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_u_col + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HomeFloder",
  setup(__props) {
    let data = common_vendor.reactive({
      florlist: []
    });
    api_api.getFlor().then((res) => {
      if (res && res.meta.status === api_define.Code.SUCCESS) {
        data.florlist = res.message;
      }
    }, (err) => err);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).florlist, (item, index, i0) => {
          return {
            a: item.floor_title.image_src,
            b: item.floor_title.name,
            c: item.product_list[0].image_src,
            d: common_vendor.s(`width: ${item.product_list[0].image_width}rpx`),
            e: "7e7abc9a-1-" + i0 + "," + ("7e7abc9a-0-" + i0),
            f: common_vendor.f(item.product_list, (child, k1, i1) => {
              return {
                a: child.image_src,
                b: child.name,
                c: common_vendor.s(`width: ${child.image_width}rpx;height:208rpx`),
                d: child.image_src,
                e: child.image_width !== "232",
                f: "7e7abc9a-4-" + i0 + "-" + i1 + "," + ("7e7abc9a-3-" + i0)
              };
            }),
            g: "7e7abc9a-3-" + i0 + "," + ("7e7abc9a-2-" + i0),
            h: "7e7abc9a-2-" + i0 + "," + ("7e7abc9a-0-" + i0),
            i: "7e7abc9a-0-" + i0,
            j: index
          };
        }),
        b: common_vendor.p({
          span: "4"
        }),
        c: common_vendor.p({
          col: 2,
          border: false
        }),
        d: common_vendor.p({
          span: "8"
        }),
        e: common_vendor.p({
          gutter: "16"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7e7abc9a"], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/pages/index/components/HomeFloder.vue"]]);
wx.createComponent(Component);
