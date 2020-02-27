<template>
  <div style="width:100%;height:100%">
    <Button @click="handleAdd()">新增</Button>
    <!-- <input type="text" class="search" v-model="textName" placeholder="请输入名字或城市"> -->
    <!-- <div
      style="padding:5px 5px 0 5px;display:inline-block;border: 1px solid #d9d9d9;border-radius:4px;margin:auto;position:absolute;left:150px;top:56px">
      <a-input size="small" placeholder="name" style="width: 100px" v-model='textName.name' />&nbsp;
      <a-input size="small" placeholder="address" style="width: 100px;" v-model='textName.address' />&nbsp;
      <a-input-number size="small" :min="1" placeholder="min" :max="100000" v-model='textName.min'/>-
      <a-input-number size="small" :min="1" placeholder="max" :max="100000" v-model='textName.max'/>
      <a-button size="small" class="editable-add-btn" @click="searchBtn()">查询</a-button>
    </div> -->
    <!-- <a-icon type="search" @click="searchBtn" style="margin-left:-33px" /> -->
    <Table style="margin-top:5px" border :data="dataSource" :columns="columns">
      <!-- <template slot="title" slot-scope="currentPageData">
        {{table_title}}
      </template> -->
      <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="onDelete(index)">删除</Button>
            <Button type="error" size="small" @click="save(row)">修改</Button>
        </template>
    </Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="pageObj.total" :current="pageObj.current" @on-change="changePage"></Page>
        </div>
    </div>
    <edit-data @editintroduce="editintroduceSelf" ref="showEdit"></edit-data>
    <add-data @introduce="addintroduceSelf" ref="showAdd"></add-data>
  </div>
</template>
<script>
  import EditData from './EditData'
  import AddData from './AddData'

  export default {
    components: {
      EditData,
      AddData
    },
    data() {
      return {
        textName: {},
        dataSource: [

        ],
        table_title: '研发部员工身份信息',
        count: 2,
        columns: [{
              type: 'index',
              width: 130,
              align: 'center'
          },{
          title: 'name',
          key: 'name',
          // width: '30%',
          // scopedSlots: { customRender: 'name' },
        }, {
          title: 'age',
          key: 'age',
        }, {
          title: 'address',
          key: 'address',
        }, {
          title: 'Action',
          slot: 'action',
          // scopedSlots: { customRender: 'operation' },
        }],   
        pageObj:{
          total:0,
          num:8,
          current:1,
        },
        dataReplace:[]
      }
    },
    computed:{
      router_param:function(){
        return this.$store.state.router_param
      }
    },
    mounted(){
      this.getProjectList()
    },
    methods: {
      setData(data, tit) {
        this.table_title = tit
        this.dataSource = data;
      },
      onCellChange(key, dataIndex, value) {
        const dataSource = [...this.dataSource]
        const target = dataSource.find(item => item.key === key)
        if (target) {
          target[dataIndex] = value
          this.dataSource = dataSource
        }
      },
      onDelete(key) {
        // console.log(111,key)
        var that = this;
        var obj = {
          key:key,
          data:this.proData
        }
        this.$axios.post("/delete", obj).then((res) => {
          let resData = res.data;
          if (resData.code >= 0) {
            that.$Message.success(resData.message)
            that.proData = resData.data
            that.dataReplace = that.pages()
          } else {
            that.$Message.error(resData.message)
          }
        }).catch((error) => {

        })
      },
      handleAdd() {
        this.$refs.showAdd.showModal()
      },
      addintroduceSelf(opt) {
        var that = this;
        this.$axios.post("/add", opt).then((res) => {
          debugger
          let resData = res.data;
          if (resData.code >= 0) {
            that.$Message.success(resData.message, 3)
            that.dataSource = resData.data
          } else {
            that.$Message.error(resData.message)
          }
        }).catch((error) => {

        })
      },
      editintroduceSelf(opt1) {
        var that = this;
        this.$axios.post("/edit", opt1).then((res) => {
          let resData = res.data;
          if (resData.code >= 0) {
            that.$Message.success(resData.message, 3)
            this.proData = resData.data
            this.dataReplace = this.pages()
            // that.dataSource = resData.data
          } else {
            that.$Message.error(resData.message)
          }
        }).catch((error) => {

        })
      },
      save(val) {
        this.$refs.showEdit.showModal(val)
      },
      getProjectList() {
        this.$axios({
          method: 'get',
          url: '/project'
        }).then(res => {
          this.proData = res.data
          this.dataReplace = this.pages()
          // console.log(this.pages())
          // this.dataSource = this.proData
          // this.setPage(this.proData)
        })
      },
      getProjectList1() {
        this.$axios({
          method: 'get',
          url: '/project1'
        }).then(res => {
          this.proData = res.data
          this.dataReplace = this.pages()
        })
      },
      changePage(index){
        // this.pageObj.total = data.length
        this.dataSource = this.dataReplace[index-1]
      },
      pages(){
          // 最终分页结果
          const pages=[]
          this.pageObj.total = this.proData.length
          // 遍历icon列表
          this.proData.forEach((item,index) => {
              // 每8条为一页；例：0-7为第一页
              // page为当前页码；
              const page =Math.floor(index/this.pageObj.num)
              // 判断pages中当前页的存储数组是否已声明，未声明则声明当前页为数组格式；
              if(!pages[page]){
                  pages[page]=[]
              }
              // 将当前icon信息放入对应的页码数组中；
              pages[page].push(item)
          })
          
          this.dataSource = pages[0]
          // 返回分页之后的icon集合；
          return pages
      },

      searchBtn() {
        var newArraySource = []
        if (this.textName.name || this.textName.age || this.textName.min || this.textName.max) {
          
          var that = this;
          this.$axios.post("/query", that.textName).then((res) => {
            let resData = res.data;
            if (resData.code >= 0) {
              that.$Message.success(resData.message, 3)
              that.dataSource = resData.data
            } else {
              that.$Message.error(resData.message)
            }
          }).catch((error) => {

          })
        } else {
          this.dataSource = this.dataSource
        }
      }
    },
    watch:{ 
      router_param(newdata){
        if(newdata == '1-1'){
          this.getProjectList()
        }else{
          this.getProjectList1()
        }
      }
    }
  }
</script>
<style>
  .editable-cell {
    position: relative;
  }

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    line-height: 18px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
    margin-left: 10px;

  }

  /* .container {
    height: 70px;
    width: 800px;
    margin: 100px auto 0 auto;
  } */

  .parent {
    position: relative;
  }

  .search {
    margin: -5px 0px 0px 10px;
    width: 300px;
    height: 40px;
    border-radius: 18px;
    outline: none;
    border: 1px solid #ccc;
    padding-left: 20px;
  }

  .btn {
    height: 35px;
    width: 35px;
    /* position: absolute; */
    /* background: url("images/topbar.png") no-repeat -2px -99px; */
    /* top: 6px;
    left: 285px; */
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>