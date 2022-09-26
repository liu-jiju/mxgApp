import api from '@/api/api.js' //先导入封装好的
const getTitle = async () => { //请求主页的nav
  let data = await api({
    url:"/article/api/category/label/list",
  })
  return data
}
const getSwiper = async () => { //请求轮播图
  let data = await api({
    url:'/article/api/advert/show/1',
  })
  return data
}
const getRecommend = async () => { //请求热门推荐
  let data = await api({
    url:'/course/api/course/search',
    method:'post'
  })
  return data
}
const getNew = async () => { //请求近期上新
  let data = await api({
    url:'/course/api/course/search',
    method:'post'
  })
  return data
}
const getFree = async () => { //请求免费精选
  let data = await api({
    url:'/course/api/course/search',
    method:'post'
  })
  return data
}
const getNice = async () => { //请求付费精品
  let data = await api({
    url:'/course/api/course/search',
    method:'post'
  })
  return data
}
const getFence = async () => { //请求付费精品
  let data = await api({
    url:'/article/api/category/label/list',
  })
  return data
}
const getRead = async () => { //请求付费精品
  let data = await api({
    url:'/article/api/article/search',
    method:'post'
  })
  return data
}
const getWenda = async () => { //请求付费精品
  let data = await api({
    url:'/question/api/question/hot',
    method:'post'
  })
  return data
}


export{
  getTitle,getSwiper,getRecommend,getNew,getFree,
  getNice,getFence,getRead,getWenda
}