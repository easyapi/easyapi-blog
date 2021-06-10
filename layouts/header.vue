<template>
  <div>
    <div v-if="ifShow" class="header">
      <router-link to="/" class="header-logo">
        <img src="~assets/images/logo.png"/>
        <span>技术专栏</span>
      </router-link>
      <div class="header-user" v-if="!isLogin">
        <a href="https://account.easyapi.com/login">登陆</a>
        <span class="header-l">|</span>
        <a href="https://account.easyapi.com/signup">注册</a>
      </div>
      <div class="header-user" v-if="isLogin">
        <div class="header-search">
          <input placeholder="搜索" type="text" class="header-search-input"/>
          <img class="search-logo" src="~assets/images/find.png"/>
        </div>
        <div class="header-article">我的文章</div>
        <div class="header-logos">
          <img src="~assets/images/head.png"/>
        </div>
      </div>
    </div>
    <nuxt/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ifShow: false,
        isLogin: 1
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header-search
    position relative
    margin-right 20px

    .header-search-input
      height 2.5rem
      width 15rem
      border-radius 3px
      padding-left 1rem

    .search-logo
      display block
      height 1.5rem
      width 1.5rem
      position absolute
      right 1rem
      top 50%
      transform translate(0, -50%)

  .header-article
    width 10rem
    height 6rem
    border-right 1px solid #c1c1c1
    border-left 1px solid #c1c1c1
    display flex
    align-items center
    justify-content center

  .header-logos
    margin 0 20px

    img
      height 3rem
      width 3rem

  .header
    width 100%
    height 72px
    background-color #18c1d6
    box-shadow 0 1px 2px rgba(0, 0, 0, 0.1)
    color #fff
    display flex
    align-items center
    justify-content space-between
    font-size 14px

    .header-logo
      cursor pointer
      margin-left 50px
      display flex
      justify-content center
      align-items center
      height 100%

      img
        width 170px

      span
        color #fff
        width 6em

    .header-user
      cursor pointer
      min-width 10em
      display flex
      justify-content center
      align-items center

      a
        color: #fff

      .header-l
        margin 0 1em


</style>
