<template>
    <div>
        <section class="container">
            <div class="contain-left">
                <div class="contain-l-title">公众号授权公众号授权公众号授权公众号授权公众号授权公众号授权</div>
                <div class="contain-l-tag">

                    <a>张磊</a>
                    <a>2017-2-2 11:20:30</a>
                    <a>浏览22</a>
                    <a>评论32</a>
                </div>



                <div class="contain-all-tag">
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




                <div class="contain-l-content">


                    我是主要内容
                    究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？  究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？  究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？  究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？  究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？
                </div>
            </div>
            <div class="contain-right">

                <div class="contain-right-tag">
                    <div class="contain-tag-title">作者</div>


                    <div class="contain-tag-head">
                        <img src="~assets/images/ath.jpg"/>
                        <div class="contain-tag-r">
                            <p>张磊</p>
                            <a>致力于API领域创业</a>
                        </div>
                    </div>


                    <div class="contain-tag-title">相关文章</div>


                    <div class="contain-onlyText">
                        <div class="onlyText-content">

                            究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？ 究竟苹果有多火？
                        </div>
                        <div class="onlyText-time">2018-04-18</div>
                    </div>


                    <div class="contain-imgText">

                        <div class="imgText-l">
                            <img src="~assets/images/img_5.png"/>
                        </div>

                        <div class="imgText-r">

                            <div class="imgText-content">

                                究竟苹果有多火？ 究竟苹果有多火？
                            </div>
                            <div class="imgText-time">2018-04-18</div>
                        </div>

                    </div>
                    <div class="contain-imgText">

                        <div class="imgText-l">
                            <img src="~assets/images/img_5.png"/>
                        </div>

                        <div class="imgText-r">

                            <div class="imgText-content">

                                究竟苹果有多火？ 究竟苹果有多火？
                            </div>
                            <div class="imgText-time">2018-04-18</div>
                        </div>

                    </div>
                    <div class="contain-imgText">

                        <div class="imgText-l">
                            <img src="~assets/images/img_5.png"/>
                        </div>

                        <div class="imgText-r">

                            <div class="imgText-content">

                                究竟苹果有多火？ 究竟苹果有多火？
                            </div>
                            <div class="imgText-time">2018-04-18</div>
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
                title: '技术专栏-详情',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'description', name: 'description', content: '技术专栏-详情'},
                    {hid: 'keyswords', name: 'keyswords', content: '技术专栏-详情'}
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
    .container
        min-width 1200px
        min-height 10px
        margin 2rem auto
        display block
        .contain-all-tag
            margin 0 auto
            width 320px
            display flex
            align-items center
            .contain-tag
                margin 0 auto
                border-radius 30px
                border 1px solid #c1c1c1
                width 6rem
                margin-bottom 10px
                display inline-block
                text-align center
                min-height 10px
                padding 5px 10px
                color #c1c1c1
        .contain-l-tag
            display flex
            justify-content center
            align-items center
            height 60px
            a
                margin 0 5px
        .contain-left
            margin-bottom 1rem
            float left
            width 870px
            min-height 10px
            display inline-block
            margin-right 30px
            .contain-l-content
                margin-top 20px
                line-height 20px
                font-size 15px
                font-weight 800
            .contain-l-title
                width 100%
                font-size 18px
                font-weight 800
                color #000
                text-align center
        .contain-right
            float left
            width 300px
            min-height 10px
            display inline-block

    .contain-right
        float left
        width 300px
        min-height 10px
        display inline-block
        .contain-right-tag
            display block
            background-color #f9f9f9
            margin-top 20px
            width 100%
            min-height 10px
            .contain-tag-title:nth-child(1)
                border-top 1px solid #18c1d6
            .contain-tag-title
                padding 10px 20px
                color #000
                font-size 18px
                border-bottom 1px solid #f1f1f1
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

    .contain-onlyText
        padding 10px
        color grey
        .onlyText-content
            font-weight 800
            line-height 20px
            font-size 12px
        .onlyText-time
            margin-top 20px

    .contain-imgText
        padding 10px
        color grey
        display flex
        .imgText-l
            width 40%
            margin-right 10px
            img
                height 100%
                width 100%
        .imgText-r
            width 60%
            .imgText-content
                font-weight 800
                line-height 20px
                font-size 12px
            .imgText-time
                margin-top 20px

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
</style>