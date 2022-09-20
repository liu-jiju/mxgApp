<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
  scroll-view ::-webkit-scrollbar {
      display:none;
      width:0;
      height:0;
    }
	/*每个页面公共css */
  /* @import url("@/common/common/css/common.css"); */
  /* 本地方式 */
  /* @import url("@/static/static/icon/iconfont.css"); */
  /* @import url("https:////at.alicdn.com/t/c/font_3656198_yrbht06jyxs.css"); */
</style>
