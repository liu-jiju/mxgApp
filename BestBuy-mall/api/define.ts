//用来写interface  type  定义数据和接口类型
// goods_id: 129
// image_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png"
// navigator_url: "/pages/goods_detail/main?goods_id=129"
// open_type: "navigate"

// import { type } from "os"

//公共的状态返回
type Meta = {
  msg: string,
  status: Code.SUCCESS;
}

//轮播图接口返回
interface SwiperRes {
  goods_id: number;
  image_src: string;
  navigator_url: string;
  open_type: string;
}

interface SwiperList {
  list: SwiperRes[];
}

//导航
interface CateItem {
  "name": string;
  "image_src": string;
  "open_type": string;
  "navigator_url": string;
}

//定义接口请求状态
enum Code {
  //成功
  SUCCESS = 200
}

type Catelist = Array<CateItem>

//楼层
type ProductList = Array<{
  name: string,
  image_src: string,
  image_width: string,
  open_type: string,
  navigator_url: string
}>

interface FloorTitle {
  name: string,
  image_src: string
}

type MessageList = Array<{
  floor_title: FloorTitle
  product_list: ProductList
}>

type FlorData = {
  meta: Meta,
  message: MessageList;
}




//声明分类单个对象
type GoodsItem = {
  cat_id: number;
  cat_name: string;
  cat_pid: number;
  cat_level: number;
  cat_deleted: boolean;
  cat_icon: string;
  children?: Array<GoodsItem>
}
interface GoodsCateList {
  meta: Meta,
  message: GoodsItem;
}
type GoodsList = Array<{
  goods_id: number,
  goods_name: string,
}>

//搜索
interface SearchRes {
  meta: Meta;
  message: GoodsList;
}

//详情message数据
interface GoodsDetailMessage {
  "goods_id": number,
  "cat_id": number,
  "goods_name": string,
  "goods_price": number,
  "goods_number": number,
  "goods_weight": number,
  "goods_introduce": string,
  "goods_state": number,
  "is_del": string,
  "add_time": number,
  "upd_time": number,
  "delete_time": null,
  "hot_mumber": number,
  "is_promote": boolean,
  "cat_one_id": number,
  "cat_two_id": number,
  "cat_three_id": number,
  "goods_cat": string,
  "pics": [
    {
      "pics_id": number,
      "goods_id": number,
      "pics_big": string,
      "pics_mid": string,
      "pics_sma": string,
      "pics_big_url": string,
      "pics_mid_url": string,
      "pics_sma_url": string
    }
  ],
  "attrs": [
    {
      "goods_id": number,
      "attr_id": number,
      "attr_value": string,
      "add_price": number,
      "attr_name": string,
      "attr_sel": string,
      "attr_write": string,
      "attr_vals": string
    }
  ]
}


//商品详情数据
type GoodsDetail = {
  meta: Meta;
  message: GoodsDetailMessage;
}

export { SwiperRes, SwiperList, Catelist, Code, FlorData, MessageList, GoodsCateList, SearchRes, GoodsList, GoodsDetail };