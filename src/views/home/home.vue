<template>
  <div>
    <!-- 顶部栏组件 -->
    <Mheader></Mheader>
    <!-- 新闻栏目切换组件 -->
    <Mtab></Mtab>
    <!-- slid轮播图组件 -->
    <cube-slide :data="items" />
    <div class="recommend-list">
      <h1 class="rec-title">推荐</h1>
      <cube-slide-item class="rec-item" v-for="(item, index) in recList" :key="'rec-' + index">
        <div class="rec-pic">
          <img width="60" height="60" :src="item.picUrl" />
        </div>
        <div class="rec-text">
          <h2 class="title" v-html="item.title"></h2>
          <p class="abstract" v-html="item.abstract"></p>
        </div>
      </cube-slide-item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Mheader from 'components/header/header'
import Mtab from 'components/tab/tab'

export default {
  data() {
    return {
      items: [
        {
          url: 'https://www.jianshu.com/u/b0c7095032f3',
          // 使用require方法引入静态图片
          // Photo by Evangeline Shaw on Unsplashs
          image: require('../../assets/image/slide-01.jpg')
        },
        {
          url: 'https://www.jianshu.com/u/b0c7095032f3',
          // Photo by Mae Mu on Unsplash
          image: require('../../assets/image/slide-02.jpg')
        },
        {
          url: 'https://www.jianshu.com/u/b0c7095032f3',
          // Photo by Markus Spiske on Unsplash
          image: require('../../assets/image/slide-03.jpg')
        }
      ],
      recList: [
        {
          picUrl: require('../../assets/image/rec-pic-01.jpg'),
          title: 'When the world falls from the sky',
          abstract: '我们在天昏地暗的废墟中相拥,吻到骨髓都锐痛灵魂都在颤动'
        },
        {
          picUrl: require('../../assets/image/rec-pic-02.jpg'),
          title: 'Winter -瑕疵-',
          abstract: '却忘了雪中纤弱柴火也被称为炙，这一场相识便以冬为名字'
        },
        {
          picUrl: require('../../assets/image/rec-pic-03.jpg'),
          title: 'Autumn -淅沥-',
          abstract: '看过的风景会变，落下的树叶会消失，在身边的人一样会空，会变，直到最后陌路...'
        },
        {
          picUrl: require('../../assets/image/rec-pic-04.jpg'),
          title: 'Summer -惯性失恋-',
          abstract: '尽管恋爱中有不愉快的经历，但也始终希望怀有孤注一掷的痴情，和分道扬镳的勇气'
        },
        {
          picUrl: require('../../assets/image/rec-pic-05.jpg'),
          title: 'Spring -绿野仙踪-',
          abstract: '春暖花开穹顶皑皑，而永不停歇的，是肆意澎湃的爱'
        }
      ]
    }
  },
  components: {
    Mheader,
    Mtab
  }
}
</script>

<style scoped lang="less">
.recommend-list {
  .rec-title {
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-size: 16px;
    color: #7790e6;
  }
  .rec-item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 8px 14px 8px;
    .rec-pic {
      flex: 1;
      width: 60px;
    }
    .rec-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 3;
      line-height: 20px;
      overflow: hidden;
      font-size: 16px;
      .title {
        margin-bottom: 8px;
        color: #7790e6;
      }
      .abstract {
        font-size: 14px;
        color: #969696;
        text-align: left;
      }
    }
  }
}
</style>
