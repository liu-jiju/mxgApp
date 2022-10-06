"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  _easycom_u_number_box2();
}
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  _easycom_u_number_box();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "car",
  setup(__props) {
    let cartnumber = common_vendor.ref(0);
    let checked = common_vendor.ref(false);
    common_vendor.index.getStorage({
      key: "infoList",
      success(res) {
        let result = res.data;
        console.log(result, "result");
      },
      fail(err) {
        console.log("\u6211\u662F\u5931\u8D25\u7684");
      }
    });
    let valChange = (e) => {
      console.log("\u5F53\u524D\u503C\u4E3A\uFF1A" + e.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(checked),
        b: common_vendor.o(common_vendor.unref(valChange)),
        c: common_vendor.o(($event) => common_vendor.isRef(cartnumber) ? cartnumber.value = $event : cartnumber = $event),
        d: common_vendor.p({
          modelValue: common_vendor.unref(cartnumber)
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
