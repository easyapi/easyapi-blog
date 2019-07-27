<template>
    <div class="all">
        <div class="sec-title">
            <div class="sec-title-text">
                <p>文章标题</p>
                <a>无摘要</a>
            </div>
        </div>
        <div class="sec-content">
            <section class="container">
                <div class="quill-editor"
                     :content="content"
                     @change="onEditorChange($event)"
                     @blur="onEditorBlur($event)"
                     @focus="onEditorFocus($event)"
                     @ready="onEditorReady($event)"
                     v-quill:myQuillEditor="editorOption">
                </div>
            </section>


            <div class="sec-content-tag">
                <label>标签:</label>
                <input type="text" placeholder="文章标签，按空格添加标签"/>
            </div>


            <div class="sec-content-con">
                <label>文章分类:</label>
                <select>
                    <option>请选择</option>
                    <option>分类1</option>
                    <option>分类2</option>
                    <option>分类3</option>
                </select>
            </div>
            <div class="sec-content-con">

                <label>内容来源</label>
                <input type="text" placeholder=""/>

            </div>


            <div class="sec-content-img">
                <div class="secImg-title">上传封面</div>
                <div class="secImg-img">

                    <div class="secImg-upload">

                    </div>

                </div>

            </div>
        </div>

        <div class="fix-bottom">
            <div class="fix-con">
                <button class="upIn">导入文章</button>
                <button class="release">发布</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Footer from '~/components/footer/footer'


    export default {
        name: 'editor',
        head () {
            return {
                title: '技术专栏-管理中心-发布并导入信息',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'description', name: 'description', content: '技术专栏-管理中心-发布并导入信息'},
                    {hid: 'keyswords', name: 'keyswords', content: '技术专栏,管理中心,我的文章'}
                ]
            }
        },
        layout: 'header',
        components: {
            Footer
        },
        data () {
            return {
                content: '<p>I am Example</p>',
                editorOption: {
                    // some quill options
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                            ['blockquote', 'code-block'],

                            [{'header': 1}, {'header': 2}],               // custom button values
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                            [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                            [{'direction': 'rtl'}],                         // text direction

                            [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],

                            [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                            [{'font': []}],
                            [{'align': []}],

                            ['clean']                                         // remove formatting button
                        ]
                    }
                }
            }
        },
        mounted () {
            console.log('app init, my quill insrance object is:', this.myQuillEditor)
            setTimeout(() => {
                this.content = 'i am changed'
            }, 3000)
        },
        methods: {
            onEditorBlur (editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus (editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady (editor) {
                console.log('editor ready!', editor)
            },
            onEditorChange ({editor, html, text}) {
                console.log('editor change!', editor, html, text)
                this.content = html
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .fix-bottom
        position fixed
        bottom 0
        left 0
        height 60px
        width 100%
        background-color #fff
        box-shadow 0 1px 10px rgba(0, 0, 0, .3)
        .fix-con
            width 850px
            margin 0 auto
            height 100%
            display flex
            align-items center
            justify-content flex-end
            .upIn
                background-color #fff
                color #18c1d6
                border 1px solid #18c1d6
                margin 0 20px
            .release
                background-color #18c1d6
                color #fff

    .sec-content-img
        width 850px
        margin 0 auto
        display block
        align-items center
        min-height 40px
        background-color #fff
        border-radius 5px
        margin-top 10px
        margin-bottom 100px
        .secImg-title
            display flex
            align-items center
            height 40px
            color #000
            font-size 16px
            padding-left 10px
            border-bottom 1px solid #f1f1f1
        .secImg-img
            height 250px
            display flex
            align-items center
            justify-content flex-start
            .secImg-upload
                width 300px
                height 180px
                margin-left 30px
                background-color #f0f0f0
                border 1px solid #f7f8fb
                border-radius 10px

    .sec-content-tag
        width 850px
        margin 0 auto
        display flex
        align-items center
        height 40px
        background-color #fff
        padding-left 20px
        margin-bottom 10px
        border-radius 3px
        label
            color #000
            font-size 16px
            margin-right 10px
        input
            width 70%
            font-size 16px
            list-style none
            outline none

    .sec-content-con
        border-radius 3px
        width 850px
        margin 0 auto
        display flex
        align-items center
        height 40px
        background-color #fff
        padding-left 20px
        label
            color #000
            font-size 16px
            margin-right 10px
        input
            outline none
        select
            width 10%
            font-size 16px
            list-style none
            outline none

    .quill-editor
        background-color #fff

    .ql-container.ql-snow
        border 0

    .container
        width: 850px
        margin: 0 auto
        border 0
        padding: 20px 0 10px 0
        .quill-editor
            min-height: 200px
            max-height: 400px
            overflow-y: auto

    .sec-title
        height 60px
        background-color #fff
        .sec-title-text
            width 850px
            height 100%
            display flex
            margin 0 auto
            flex-direction column
            justify-content center
            p
                color #000
                font-size 15px
                margin-top 5px
            a
                margin-top 10px
                font-size 14px
                color grey

    .sec-content
        background-color #f0f0f0
        width 100%
        min-height 10rem

    .sec-content:after, .sec-content:before
        content ' '
        display table

    .sec-content:after
        clear both

    .all
        min-height 10px


</style>