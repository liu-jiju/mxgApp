"use strict";
var request_request = require("../request/request.js");
const getSwiper = () => request_request.request("/home/swiperdata").then((res) => res, (err) => err);
const getCate = () => request_request.request("/home/catitems").then((res) => res, (err) => err);
const getFlor = () => request_request.request("/home/floordata").then((res) => res, (err) => err);
const getCateList = () => request_request.request("/categories").then((res) => res, (err) => err);
exports.getCate = getCate;
exports.getCateList = getCateList;
exports.getFlor = getFlor;
exports.getSwiper = getSwiper;