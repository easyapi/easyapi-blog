<template>
    <div>
        <section class="container">

            <div class="contain-left">
                <div class="contain-left-l">
                    <img src="~assets/images/img_1.png"/>
                </div>

                <div class="contain-left-r">
                    <div class="contain-left-top">
                        <img src="~assets/images/img_2.png"/>
                    </div>
                    <div class="contain-left-bottom">
                        <img src="~assets/images/img_3.png"/>
                    </div>
                </div>


                <div class="contain-menu">
                    <div class="active">推荐</div>
                    <div class="">最新</div>
                    <div class="">原创</div>
                    <div class="">全部</div>
                </div>


                <div class="contain-onlyText">
                    <div class="onlyText-title">标签分类技术理论</div>
                    <div class="onlyText-t">
                        <img src="~assets/images/ath.jpg"/>
                        <a class="t-name">张磊</a>
                        <img class="t-eye" src="~assets/images/eye.png"/>
                        <a class="look-logo"></a>
                        <a>30人浏览</a>
                    </div>
                    <div class="onlyText-content">
                        敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发
                    </div>

                    <div class="contain-tag">
                        EasyAPI
                    </div>


                    <div class="contain-tag">
                        EasyAPI
                    </div>

                    <div class="contain-tag">
                        EasyAPI
                    </div>
                </div>


                <div class="contain-imgText">
                    <div class="contain-imgText-l">
                        <img src="~assets/images/img_5.png"/>
                    </div>
                    <div class="contain-imgText-r">
                        <div class="onlyText-title">标签分类技术理论</div>
                        <div class="onlyText-t">
                            <img src="~assets/images/ath.jpg"/>
                            <a class="t-name">张磊</a>
                            <img class="t-eye" src="~assets/images/eye.png"/>
                            <a class="look-logo"></a>
                            <a>30人浏览</a>
                        </div>
                        <div class="onlyText-content">
                            敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发敏捷开发
                        </div>

                        <div class="contain-tag">
                            EasyAPI
                        </div>


                        <div class="contain-tag">
                            EasyAPI
                        </div>

                        <div class="contain-tag">
                            EasyAPI
                        </div>
                    </div>

                </div>


                <div class="load-more">浏览更多</div>
            </div>
            <div class="contain-right">
                <div class="contain-right-logo">
                    <img src="~assets/images/img_4.png"/>
                </div>
                <div class="contain-right-tag">
                    <div class="contain-tag-title">热门标签</div>
                    <div class="all-tag">
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                        <div class="contain-tag">
                            EasyAPI
                        </div>
                    </div>
                    <div class="contain-tag-title">热门作者</div>


                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>191篇文章  |  </a>
                            <a>199关注</a>
                        </div>
                    </div>

                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>191篇文章  |  </a>
                            <a>199关注</a>
                        </div>
                    </div>

                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>191篇文章  |  </a>
                            <a>199关注</a>
                        </div>
                    </div>

                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>191篇文章  |  </a>
                            <a>199关注</a>
                        </div>
                    </div>

                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>191篇文章  |  </a>
                            <a>199关注</a>
                        </div>
                    </div>

                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>191篇文章  |  </a>
                            <a>199关注</a>
                        </div>
                    </div>


                </div>
            </div>

        </section>
        <Footer></Footer>
    </div>
</template>
<script>
    import Footer from '~/components/footer/footer'

    export default {
        head () {
            return {
                title: '技术专栏',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'description', name: 'description', content: '技术专栏'},
                    {hid: 'keyswords', name: 'keyswords', content: '技术专栏'}
                ]
            }
        },
        layout: 'header',
        components: {
            Footer
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .load-more
        margin 0 auto
        width 180px
        height 40px
        display flex
        align-items center
        justify-content center
        color #18c1d6
        font-size 16px
        border 1px solid #18c1d6
        margin-top 30px
        border-radius 3px

    .contain-tag-head
        width 100%
        display flex
        padding 15px 20px
        img
            height 40px
            width 40px
            margin-right 10px
            border-radius 50%
        .contain-tag-r
            height 40px
            p
                display block
                padding-bottom 10px
                color #000
                font-size 16px

    .contain-imgText
        width 100%
        min-height 10px
        border-bottom 1px solid #f1f1f1
        padding-bottom 1rem
        display flex
        justify-content center
        align-items center
        .contain-imgText-l
            width 28%
            margin-right 2%
            img
                height 100%
                width 100%
        .contain-imgText-r
            width 70%
            min-height 10px
            padding-bottom 1rem
            .contain-tag
                border-radius 30px
                border 1px solid #c1c1c1
                width 6rem
                margin-right 10px
                margin-bottom 10px
                display inline-block
                text-align center
                min-height 10px
                padding 5px 10px
                color #c1c1c1
            .onlyText-content
                width 100%
                min-height 10px
                line-height 20px
                font-size 14px
                color grey
                margin-bottom 1rem
            .onlyText-title
                margin-top 20px
                text-align left
                height 50px
                width 100%
                font-weight 800px
                color #000
                font-size 18px
                display flex
                align-items center
            .onlyText-t
                height 60px
                display flex
                align-items center
                justify-content flex-start
                .t-eye
                    height 17px
                    width 20px
                .t-name
                    margin-right 30px
                img
                    height 30px
                    width 30px
                    border-radius 50%
                    margin-right 10px

    .contain-onlyText
        width 100%
        min-height 10px
        border-bottom 1px solid #f1f1f1
        padding-bottom 1rem
        .contain-tag
            border-radius 30px
            border 1px solid #c1c1c1
            width 6rem
            margin-right 10px
            margin-bottom 10px
            display inline-block
            text-align center
            min-height 10px
            padding 5px 10px
            color #c1c1c1
        .onlyText-content
            width 100%
            min-height 10px
            line-height 20px
            font-size 14px
            color grey
            margin-bottom 1rem
        .onlyText-title
            margin-top 20px
            text-align left
            height 50px
            width 100%
            font-weight 800px
            color #000
            font-size 18px
            display flex
            align-items center
        .onlyText-t
            height 60px
            display flex
            align-items center
            justify-content flex-start
            .t-eye
                height 17px
                width 20px
            .t-name
                margin-right 30px
            img
                height 30px
                width 30px
                border-radius 50%
                margin-right 10px

    .contain-menu
        padding-top 1rem
        width 100%
        display flex
        justify-content flex-start
        .active
            color #18c1d6
            border-bottom 3px solid #18c1d6
        div
            font-weight 800
            width 50px
            height 40px
            display flex
            align-items center
            justify-content center

    .container
        min-width 1200px
        min-height 10px
        margin 2rem auto
        display block
        img:hover
            transition all 1s
            transform scale(1.2)
            cursor pointer
        .contain-left
            margin-bottom 1rem
            float left
            max-width 870px
            min-height 10px
            display inline-block
            margin-right 30px
            .contain-left-l
                float left
                height 340px
                width 600px
                display inline-block
                margin-right 10px
                overflow hidden
                img
                    height 100%
                    width 100%
            .contain-left-r
                float left
                display inline-block
                height 340px
                width 260px
                .contain-left-top
                    height 165px
                    width 100%
                    margin-bottom 10px
                    overflow hidden
                    img
                        height 100%
                        width 100%
                .contain-left-bottom
                    height 165px
                    width 100%
                    overflow hidden
                    img
                        height 100%
                        width 100%
        .contain-right
            float left
            width 300px
            min-height 10px
            display inline-block
            .contain-right-logo
                height 200px
                width 100%
                overflow hidden
                img
                    height 100%
                    width 100%
            .contain-right-tag
                display block
                background-color #f9f9f9
                margin-top 20px
                width 100%
                min-height 10px
                .contain-tag-title
                    padding 10px 20px
                    color #000
                    font-size 18px
                    border-bottom 1px solid #7f828b
                .all-tag
                    padding 10px
                    .contain-tag
                        border-radius 30px
                        border 1px solid #7f828b
                        width 6rem
                        margin-right 10px
                        margin-bottom 10px
                        display inline-block
                        text-align center
                        min-height 10px
                        padding 5px 10px


</style>
