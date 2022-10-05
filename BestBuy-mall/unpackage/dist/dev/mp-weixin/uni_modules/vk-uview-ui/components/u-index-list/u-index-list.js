"use strict";
var common_vendor = require("../../../../common/vendor.js");
var indexList = function() {
  var indexList2 = [];
  var charCodeOfA = "A".charCodeAt(0);
  for (var i = 0; i < 26; i++) {
    indexList2.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList2;
};
const _sfc_main = {
  name: "u-index-list",
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: ""
    },
    scrollTop: {
      type: [Number, String],
      default: 0
    },
    offsetTop: {
      type: [Number, String],
      default: 0
    },
    indexList: {
      type: Array,
      default() {
        return indexList();
      }
    },
    activeColor: {
      type: String,
      default: "#2979ff"
    }
  },
  created() {
    this.stickyOffsetTop = this.offsetTop ? common_vendor.index.upx2px(this.offsetTop) : 0;
    this.children = [];
  },
  data() {
    return {
      activeAnchorIndex: 0,
      showSidebar: true,
      touchmove: false,
      touchmoveIndex: 0
    };
  },
  watch: {
    scrollTop() {
      this.updateData();
    }
  },
  computed: {
    alertZIndex() {
      return this.$u.zIndex.toast;
    }
  },
  methods: {
    updateData() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showSidebar = !!this.children.length;
        this.setRect().then(() => {
          this.onScroll();
        });
      }, 0);
    },
    setRect() {
      return Promise.all([
        this.setAnchorsRect(),
        this.setListRect(),
        this.setSiderbarRect()
      ]);
    },
    setAnchorsRect() {
      return Promise.all(this.children.map((anchor, index) => anchor.$uGetRect(".u-index-anchor-wrapper").then((rect) => {
        Object.assign(anchor, {
          height: rect.height,
          top: rect.top
        });
      })));
    },
    setListRect() {
      return this.$uGetRect(".u-index-bar").then((rect) => {
        Object.assign(this, {
          height: rect.height,
          top: rect.top + this.scrollTop
        });
      });
    },
    setSiderbarRect() {
      return this.$uGetRect(".u-index-bar__sidebar").then((rect) => {
        this.sidebar = {
          height: rect.height,
          top: rect.top
        };
      });
    },
    getActiveAnchorIndex() {
      const {
        children
      } = this;
      const {
        sticky
      } = this;
      for (let i = this.children.length - 1; i >= 0; i--) {
        const preAnchorHeight = i > 0 ? children[i - 1].height : 0;
        const reachTop = sticky ? preAnchorHeight : 0;
        if (reachTop >= children[i].top) {
          return i;
        }
      }
      return -1;
    },
    onScroll() {
      const {
        children = []
      } = this;
      if (!children.length) {
        return;
      }
      const {
        sticky,
        stickyOffsetTop,
        zIndex,
        scrollTop,
        activeColor
      } = this;
      const active = this.getActiveAnchorIndex();
      this.activeAnchorIndex = active;
      if (sticky) {
        let isActiveAnchorSticky = false;
        if (active !== -1) {
          isActiveAnchorSticky = children[active].top <= 0;
        }
        children.forEach((item, index) => {
          if (index === active) {
            let wrapperStyle = "";
            let anchorStyle = {
              color: `${activeColor}`
            };
            if (isActiveAnchorSticky) {
              wrapperStyle = {
                height: `${children[index].height}px`
              };
              anchorStyle = {
                position: "fixed",
                top: `${stickyOffsetTop}px`,
                zIndex: `${zIndex ? zIndex : this.$u.zIndex.indexListSticky}`,
                color: `${activeColor}`
              };
            }
            item.active = active;
            item.wrapperStyle = wrapperStyle;
            item.anchorStyle = anchorStyle;
          } else if (index === active - 1) {
            const currentAnchor = children[index];
            const currentOffsetTop = currentAnchor.top;
            const targetOffsetTop = index === children.length - 1 ? this.top : children[index + 1].top;
            const parentOffsetHeight = targetOffsetTop - currentOffsetTop;
            const translateY = parentOffsetHeight - currentAnchor.height;
            const anchorStyle = {
              position: "relative",
              transform: `translate3d(0, ${translateY}px, 0)`,
              zIndex: `${zIndex ? zIndex : this.$u.zIndex.indexListSticky}`,
              color: `${activeColor}`
            };
            item.active = active;
            item.anchorStyle = anchorStyle;
          } else {
            item.active = false;
            item.anchorStyle = "";
            item.wrapperStyle = "";
          }
        });
      }
    },
    onTouchMove(event) {
      this.touchmove = true;
      const sidebarLength = this.children.length;
      const touch = event.touches[0];
      const itemHeight = this.sidebar.height / sidebarLength;
      let clientY = 0;
      clientY = touch.clientY;
      let index = Math.floor((clientY - this.sidebar.top) / itemHeight);
      if (index < 0) {
        index = 0;
      } else if (index > sidebarLength - 1) {
        index = sidebarLength - 1;
      }
      this.touchmoveIndex = index;
      this.scrollToAnchor(index);
    },
    onTouchStop() {
      this.touchmove = false;
      this.scrollToAnchorIndex = null;
    },
    scrollToAnchor(index) {
      if (this.scrollToAnchorIndex === index) {
        return;
      }
      this.scrollToAnchorIndex = index;
      const anchor = this.children.find((item) => item.index === this.indexList[index]);
      if (anchor) {
        this.$emit("select", anchor.index);
        common_vendor.index.pageScrollTo({
          duration: 0,
          scrollTop: anchor.top + this.scrollTop
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showSidebar
  }, $data.showSidebar ? {
    b: common_vendor.f($props.indexList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: $data.activeAnchorIndex === index ? $props.activeColor : "",
        d: index
      };
    }),
    c: $props.zIndex + 1,
    d: common_vendor.o((...args) => $options.onTouchMove && $options.onTouchMove(...args)),
    e: common_vendor.o((...args) => $options.onTouchMove && $options.onTouchMove(...args)),
    f: common_vendor.o((...args) => $options.onTouchStop && $options.onTouchStop(...args)),
    g: common_vendor.o((...args) => $options.onTouchStop && $options.onTouchStop(...args))
  } : {}, {
    h: $data.touchmove && $props.indexList[$data.touchmoveIndex]
  }, $data.touchmove && $props.indexList[$data.touchmoveIndex] ? {
    i: common_vendor.t($props.indexList[$data.touchmoveIndex]),
    j: $options.alertZIndex
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aeb1c62a"], ["__file", "F:/\u4E0A\u8BFE\u4FDD\u5B58\u7684\u6587\u4EF6/P5/P8/BestBuy-mall/uni_modules/vk-uview-ui/components/u-index-list/u-index-list.vue"]]);
wx.createComponent(Component);
