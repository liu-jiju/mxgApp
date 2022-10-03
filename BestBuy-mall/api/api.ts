//封装api
import request from '../request/request.js';
import * as TS from './define';

//请求轮播图
const getSwiper = () => request('/home/swiperdata').then((res: TS.SwiperRes) => res, err => err);

//请求导航
const getCate = () => request('/home/catitems').then((res: { message: TS.Catelist; meta: { status:number; msg: string;}}) => res,err => err);

//请求楼层
const getFlor = () => request('/home/floordata').then((res: TS.FlorData) => res,err => err);

//请求分类
const getCateList = () => request('/categories').then((res: TS.GoodsCateList) => res, err => err);

export {getSwiper,getCate,getFlor,getCateList};