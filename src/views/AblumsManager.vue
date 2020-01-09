<template>
    <div>
        <el-dialog
                title="提示"
                :visible.sync="editDialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
        <div v-show="detailDialog">
            <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>详情名称</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="detailDialogClose">关闭</el-button>
            </div>
            <div class="text item">
                <h3>album_id: {{detail.album_id}}</h3>
                <h3>album_name: {{detail.album_name}},</h3>
                <h3>public_time: {{detail.public_time}},</h3>
                <h3>week: {{detail.week}},</h3>
                <h3>price: {{detail.price}},</h3>
                <h3>cover: {{detail.cover}}, </h3>
                <h3>singer: {{detail.singer}}</h3>
            </div>
        </el-card>
        </div>

        <div v-show="editDialog">
            <el-form ref="form" :model="editForm" label-width="80px">
            <el-form-item label="专辑名称">
                <el-input v-model="editForm.album_name"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="editForm.price"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="editForm.singers"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改完毕</el-button>
                <el-button @click="editCancel">取消</el-button>
            </el-form-item>
            </el-form>
        </div>

        <h1>音乐专辑管理</h1>
        <el-form :inline="true" :model="ablum" class="demo-form-inline">
            <el-form-item label="专辑ID">
                <el-input v-model="ablum.album_id" placeholder="请输入专辑ID"></el-input>
            </el-form-item>
            <el-form-item label="专辑名称">
                <el-input v-model="ablum.album_name" placeholder="请输入准基名称"></el-input>
            </el-form-item>
            <el-form-item label="专辑价格">
                <el-input v-model.number="ablum.price"  placeholder="请输入价格"></el-input>
            </el-form-item>
            <el-form-item label="专辑封面">
                <el-input v-model.number="ablum.price" type=file placeholder="请上传封面"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addAblum">添加专辑</el-button>
            </el-form-item>
        </el-form>

        <el-table
                :data="ablums"
                style="width: 100%">
            <el-table-column
                    prop="album_id"
                    label="ID"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="album_name"
                    label="专辑名称">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="专辑价格">
            </el-table-column>
            <el-table-column
                    prop="singers[0].singer_name"
                    label="歌手">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="300">
                <template slot-scope="ablum">
                    <el-button @click="showDetail(ablum.row)" type="primary" size="small">详情</el-button>
                    <el-button @click="editAblums(ablum.row)" type="info" size="small">编辑</el-button>
                    <el-button @click="appendSinger(ablum.row)" type="warn" size="small">追加</el-button>
                    <el-button @click="deleteDialogVisible=true" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    // import _ from 'lodash'
    export default {
        name: "ablumsManger",
        data(){
            return {
                maxId:2,
                ablum:{name:'',price:''},
                detailDialog: false,
                deleteDialogVisible:false,
                editDialogVisible:false,
                ablums:[
                    {
                        album_id: "3751508",
                        album_name: "A.I. 爱",
                        public_time: "2017-12-11",
                        week: 50,
                        price: 89,
                        cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
                        singers: [
                            {
                            singer_id: "265",
                            singer_name: "王力宏"
                            }
                        ]
                    },
                    {
                        album_id: "3751508",
                        album_name: "A.I. 爱",
                        public_time: "2017-12-11",
                        week: 50,
                        price: 89,
                        cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
                        singers: [
                            {
                            singer_id: "265",
                            singer_name: "王力宏"
                            }
                        ]
                    },
                    {
                        album_id: "3751508",
                        album_name: "A.I. 爱",
                        public_time: "2017-12-11",
                        week: 50,
                        price: 89,
                        cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
                        singers: [
                            {
                            singer_id: "265",
                            singer_name: "王力宏"
                            }
                        ]
                    }
                ],
                detail: {},
                editDialog: false,
                editForm: {

                }
            }
        },
        mounted() {
            // this.getAblumsList()
        },
        methods:{
            deleteBook(book){
                // let index=this.books.findIndex(item=>item.id==book.id)
                // this.books.splice(index,1)
                window.console.log(book._id)
                let id = book._id
                let url = 'http://localhost:3000/book/delete' + '/' + id
                fetch(url,{method: 'DELETE'})
                    .then(res=>res.json())
                    .then(()=>{
                        let index = this.books.findIndex((item)=>{
                            return item._id == id
                        })
                        this.books.splice(index,1)
                    })
            },
            addAblum(){
                // this.book.id=++this.maxId
                // let bk=_.cloneDeep(this.book)
                // this.books.push(bk)
                let url = 'http://localhost:3000/book/add'
                let options = {
                    method: 'POST',//post请求 
                    headers: { 
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json' 
                    }, 
                    body: JSON.stringify(this.book) 
                }
                fetch(url,options)
                    .then(res=>res.json())
                    .then(us=> this.books.push(us))
            },
            handleClose(){

            },
            getAblumsList(){
                let url = 'http://localhost:3000/ablums'
                fetch(url,{type:"GET"})
                    .then(res=>res.json())
                    .then(us=> {
                        let ablums = us[0].data[0]
                        window.console.log(JSON.parse(ablums))
                    })
            },
            showDetail(detail){
                window.console.log(detail)
                this.detailDialog= true
                this.detail = detail
            },
            appendSinger(){

            },
            detailDialogClose(){
                this.detail = {}
                this.detailDialog = false
            },
            editAblums(detail){
                this.editDialog= true
                this.editForm = detail
            },
            editCancel(){
                this.editForm = {}
                this.editDialog = false
            }

        }
    }
</script>

<style scoped>

</style>