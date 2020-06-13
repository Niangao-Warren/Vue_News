<template>
  <div class="content">
    <Mheader></Mheader>
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll" :data="list" :options="options" @pulling-up="onPullingUp">
        <cube-slide-item
          class="list_item"
          @click.native="selectItem(item)"
          v-for="(item, index) in list"
          :key="'new_' + index"
        >
          <div class="text">
            <img
              :src="item.thumbnail_pic_s"
              alt="新闻图片"
              v-if="item.thumbnail_pic_s != null && item.thumbnail_pic_s != ''"
            />
            <h1>{{ item.title }}</h1>
          </div>
          <p>
            <span class="time">来源:&nbsp;{{ item.author_name }}&emsp;{{ item.date }}</span>
          </p>
        </cube-slide-item>
      </cube-scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Mheader from 'components/header/header'
import { getFinanceList } from 'api/list'
// import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    options() {
      return {
        pullUpLoad: {
          threshold: 100,
          txt: {
            more: '加载更多',
            noMore: '没有更多的新闻啦~'
          }
        }
      }
    }
  },
  mounted() {
    this._getPageList()
  },
  methods: {
    back() {
      this.$router.back()
    },
    onPullingUp() {
      setTimeout(() => {
        // if (this.pageStart < this.pageEnd) {
        //   // 如果有新数据
        //   this._getPageList()
        // } else {
        //   // 如果没有新数据
        //   this.$refs.scroll.forceUpdate()
        // }
        this._getPageList()
      }, 1000)
    },
    _getPageList() {
      getFinanceList().then(res => {
        if (res.error_code === 0) {
          let data = res.result.data
          if (data != null) {
            data.map(item => {
              if (item.date != null) {
                item.date = item.date.slice(0, 10)
              }
              this.list.push(item)
            })
          } else {
            this.$refs.scroll.forceUpdate()
          }
        } else {
          this.toast = this.$createToast({
            txt: res.reason,
            type: 'txt'
          })
          this.toast.show()
        }
      })
    },
    selectItem(item) {
      // this.$router.push({
      //   path: `/finance/${item.id}`
      // })
      // this.setDisc(item)
      window.location.href = item.url
    }
    // ...mapMutations({
    //   setDisc: 'SET_DISC'
    // })
  },
  components: {
    Mheader
  }
}
</script>

<style scoped lang="stylus">
.content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background: #fff;

  .scroll-list-wrap {
    height: 94vh;

    .list_item {
      width: 95%;
      padding: 12px 0;
      margin: 0 10px;
      border-bottom: 1px solid #e1e1e1;

      .text {
        width: 100%;
        display: flex;
        flex-direction: row;

        img {
          width: 80px;
          height: 60px;
          padding-right: 16px;
        }

        h1 {
          font-size: 16px;
          color: #000;
          text-align: left;
          line-height: 24px;
          margin-bottom: 4px;
          padding-top: 6px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }

      p {
        line-height: 20px;
        text-align: right;

        span {
          font-size: 12px;
          color: #ccc;
        }
      }
    }
  }
}
</style>
