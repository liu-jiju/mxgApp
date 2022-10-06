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
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
const _sfc_main = {
  name: "details",
  setup() {
    const info = common_vendor.reactive({
      list: {
        cat_id: 0,
        pics: 0,
        goods_price: 0,
        goods_name: "",
        goods_introduce: ""
      },
      options: [{
        icon: "headphones",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ],
      parseData: []
    });
    const getLocaclHostData = () => {
      common_vendor.index.getStorage({
        key: "infoList",
        success: function(res) {
          info.parseData = res.data;
        }
      });
    };
    const setLocalhostInfo = () => {
      let cartList = [{
        info,
        number: 1,
        checked: false
      }];
      common_vendor.index.setStorage({
        data: cartList,
        key: "infoList"
      });
      common_vendor.index.showToast({
        title: "\u4FDD\u5B58\u6210\u529F",
        duration: 2e3
      });
    };
    const setAddGoodsCart = () => {
      getLocaclHostData();
      console.log(info.parseData, "info.parseData");
      if (info.parseData.length === 0) {
        setLocalhostInfo();
      } else {
        const result = info.parseData.find((item) => item.list.cat_id === info.list.cat_id);
        if (result) {
          result.number++;
          common_vendor.index.setStorage({
            data: JSON.stringify(result),
            key: "infoList"
          });
        } else {
          setLocalhostInfo();
        }
      }
    };
    const onClick = (e) => {
      console.log("1111");
      common_vendor.index.switchTab({
        url: "../car/car"
      });
    };
    const buttonClick = (e) => {
      console.log("\u6211\u662F\u70B9\u51FB\u7684\u52A0\u5165\u8D2D\u7269\u8F66");
      setAddGoodsCart();
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(info)), {
      onClick,
      buttonClick
    });
  },
  onLoad(opt) {
    console.log(opt);
    api_api.getGoodDetail(opt.id).then((res) => {
      console.log(res);
      this.list = res.message;
      console.log(this.list, "666");
    });
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _component_title = common_vendor.resolveComponent("title");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_u_swiper2 + _easycom_u_icon2 + _component_title + _easycom_u_parse2 + _easycom_uni_goods_nav2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_icon + _easycom_u_parse + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      mode: "aspectFill",
      list: _ctx.list.pics,
      name: "pics_mid_url",
      height: "400"
    }),
    b: common_vendor.t(_ctx.list.goods_price),
    c: common_vendor.t(_ctx.list.goods_name),
    d: common_vendor.p({
      name: "star"
    }),
    e: common_vendor.p({
      html: _ctx.list.goods_introduce
    }),
    f: common_vendor.o($setup.onClick),
    g: common_vendor.o($setup.buttonClick),
    h: common_vendor.p({
      fill: true,
      options: _ctx.options,
      buttonGroup: _ctx.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/pages/goodsDetails/goodsDetails.vue"]]);
wx.createPage(MiniProgramPage);
