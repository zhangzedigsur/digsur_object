<template>
  <div style="width:85%;height:100%;padding:24px;">
    <div class="title-class">
      <div class="title-font">{{table_title}}</div>
<<<<<<< HEAD
      <div style="margin-top:20px">
        <Form :label-width="80" :model="textName" label-position="right">
          <FormItem label="name">
            <Input v-model='textName.name' />
          </FormItem>
          <FormItem label="age">
            <InputNumber v-model="textName.min" :min="1" placeholder="min" :max="100000"></InputNumber> -
            <InputNumber v-model="textName.max" :min="1" placeholder="max" :max="100000"></InputNumber>
          </FormItem>
          <FormItem label="address">
            <Input v-model='textName.age' />
          </FormItem>
          <FormItem>
            <Button type='primary' @click="searchBtn()">查询</Button>
            <Button type='primary' @click="restBtn()">重置</Button>
          </FormItem>
=======
      <div style="margin:10px 0;border:1px solid #dcdee2;padding:10px 20px 0 0 ">
        <Form :label-width="80" :model="textName" label-position="right">
          <FormItem label="name">
            <Input size="small" v-model='textName.name' />
          </FormItem>
          <FormItem label="age">
            <InputNumber size="small" v-model="textName.min" :min="1" placeholder="min" :max="100000"></InputNumber> -
            <InputNumber size="small" v-model="textName.max" :min="1" placeholder="max" :max="100000"></InputNumber>
          </FormItem>
          <FormItem label="address">
            <Input size="small" v-model='textName.age' />
          </FormItem>
          <FormItem label="用户权限">
            <Input size="small" v-model='textName.type' />
          </FormItem>
          <FormItem label="date">
            <Date-picker size="small" type="daterange" :value="textName.queryTime" confirm @on-change="getDate" :editable="false"
              placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
          </FormItem>
          <!-- <FormItem> -->
          <div style="float:right">
            <Button size="small" type='primary' icon="ios-search" @click="searchBtn()">查询</Button>
            <Button size="small" type='primary' @click="restBtn()">重置</Button>
          </div>
          <!-- </FormItem > -->
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
        </Form>
      </div>

    </div>
    <div style="margin-bottom:20px">
      <Button size="small" type='primary' icon="ios-add" @click="handleAdd()">新增</Button>
      <Button size="small" type='primary' icon="ios-trash-outline" @click="all_del()">批量删除</Button>
    </div>

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

    <Table size="small" style="margin-top:5px" border :data="dataSource" :columns="columns" @on-selection-change="selection">
      <!-- <template slot="title" slot-scope="currentPageData">
        {{table_title}}
      </template> -->
      <template slot-scope="{row,index}" slot="action">
<<<<<<< HEAD
        <Button type="info" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
        <Button type="primary" size="small" style="margin-right: 5px" @click="del(row)">删除</Button>
        <Button type="error" size="small" @click="save(row)">修改</Button>
=======
        <Button type="primary" size="small" style="margin-right: 5px" @click="save(row)">修改</Button>
        <Button type="error" size="small" @click="onDelete(row)">删除</Button>
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
      </template>
    </Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
<<<<<<< HEAD
        <Page :total="pageObj.total" :current="pageObj.current" :page-size="pageObj.num" @on-change="changePage"></Page>
=======
        <Page size="small" :total="pageObj.total" :current="pageObj.current" :page-size="pageObj.num"
          @on-change="changePage"></Page>
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
      </div>
    </div>
    <edit-data @editintroduce="editintroduceSelf" ref="showEdit"></edit-data>
    <add-data @introduce="addintroduceSelf" ref="showAdd"></add-data>

    <Modal v-model="modalShow" title="提示！" @on-ok="onDelete">
      <p>是否确定删除？</p>
    </Modal>
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
  data () {
    return {
      textName: {
        name: '',
        address: '',
        min: 15,
        max: 35,
<<<<<<< HEAD
=======
        type: "",
        queryTime: [],
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
      },
      dataSource: [

      ],
      table_title: '研发部员工身份信息',
      count: 2,
      columns: [{
<<<<<<< HEAD
        type: 'index',
        width: 130,
=======
        type: 'selection',
        width: 60,
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
        align: 'center'
      }, {
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
<<<<<<< HEAD
      }, {
        title: 'Action',
        slot: 'action',
        // scopedSlots: { customRender: 'operation' },
=======
      },
      {
        title: '用户权限',
        key: 'type',
      },
      {
        title: '开始时间',
        key: 'StartTime',
      }, {
        title: '结束时间',
        key: 'EndTime',
      }, {
        title: 'Action',
        slot: 'action',
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
      }],
      pageObj: {
        total: 100,
        num: 5,
        current: 1,
      },
      dataReplace: [],
<<<<<<< HEAD
      modalShow: false,
      row: null
=======
      selectData:[],

>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
    }
  },
  computed: {
    router_param: function () {
      return this.$store.state.router_param
    }
  },
  mounted () {
    this.getProjectList()
  },
  methods: {
    setData (data, tit) {
      this.table_title = tit
      this.dataSource = data;
    },
    onCellChange (key, dataIndex, value) {
      const dataSource = [...this.dataSource]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.dataSource = dataSource
      }
    },
<<<<<<< HEAD
    del (row) {
      this.modalShow = true
      this.row = row
    },
    onDelete () {
      this.proData = this.proData.filter(item => item.key !== this.row.key)
      this.dataReplace = this.pages()
    },
    show (index) {
      this.$Modal.info({
        title: '人员信息',
        content: `name：${this.proData[index].name}<br>
        age：${this.proData[index].age}<br>
        address：${this.proData[index].address}`
      })
    },
=======
    onDelete (row) {
      this.proData = this.proData.filter(item => item.key !== row.key)
      this.dataReplace = this.pages()
    },
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
    handleAdd () {
      this.$refs.showAdd.showModal()
    },
    addintroduceSelf (opt) {
<<<<<<< HEAD
=======
      console.log(222,opt)
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
      // this.proData.forEach(i => {
      //   let num = Number(i.key)
      //   num++;
      //   i.key = num;
      // });
      // addData.key = '0'
      this.proData = [opt, ...this.proData]
      this.dataReplace = this.pages()
    },
    editintroduceSelf (opt1) {
      var that = this;
      this.$axios.post("/edit", opt1).then((res) => {
        let resData = res.data;
        if (resData.code >= 0) {
          that.$Message.success(resData.message, 3)
          that.proData = resData.data
          that.dataReplace = that.pages()
          // that.dataSource = resData.data
        } else {
          that.$Message.error(resData.message)
        }
      }).catch((error) => {

      })
    },
    save (val) {
      this.$refs.showEdit.showModal(val)
    },
    getProjectList () {
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
    getProjectList1 () {
      this.$axios({
        method: 'get',
        url: '/project1'
      }).then(res => {
        this.proData = res.data
        this.dataReplace = this.pages()
      })
    },
    changePage (index) {
      // this.pageObj.total = data.length
      this.dataSource = this.dataReplace[index - 1]
    },
    pages () {
      // debugger
      this.pageObj = {
        total: this.proData.length,
        num: 5,
        current: 1,
      }
      // 最终分页结果
      const pages = []
      // this.pageObj.total = this.proData.length
      // console.log(this.pageObj.total)
      // 遍历icon列表
      this.proData.forEach((item, index) => {
        // 每8条为一页；例：0-7为第一页
        // page为当前页码；
        const page = Math.floor(index / this.pageObj.num)
        // 判断pages中当前页的存储数组是否已声明，未声明则声明当前页为数组格式；
        if (!pages[page]) {
          pages[page] = []
        }
        // 将当前icon信息放入对应的页码数组中；
        pages[page].push(item)
      })

      this.dataSource = pages[0]
      // 返回分页之后的icon集合；
      return pages
    },

<<<<<<< HEAD
=======
    getDate (data) {
      this.textName.queryTime = data
    },
    //批量删除
    all_del () {
      if(this.selectData.length>=0){
        this.selectData.forEach(element=>{
          this.proData = this.proData.filter(item => item.key !== element.key)
        })
        this.dataReplace = this.pages()
        this.selectData = [];
      }else{
        this.$Message.error('请勾选要删除的选项')
      }
    },
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
    searchBtn () {
      var newArraySource = []
      if (this.textName.name || this.textName.age || this.textName.min || this.textName.max) {

        var that = this;
        this.$axios.post("/query", that.textName).then((res) => {
          let resData = res.data;
          if (resData.code >= 0) {
            that.$Message.success(resData.message, 3)
            // that.dataSource = resData.data
            that.proData = resData.data
            that.dataReplace = that.pages()
          } else {
            that.$Message.error(resData.message)
          }
        }).catch((error) => {

        })
      } else {
        this.dataSource = this.dataSource
      }
    },
    restBtn () {
      this.textName = {
        name: '',
        address: '',
        min: 15,
        max: 35,
<<<<<<< HEAD
      }
    }
  },
  watch: {
    router_param (newdata) {
      debugger;
      // this.pageObj.current = 1
      if (newdata == '1-1') {
        this.getProjectList()
      } else {
        this.getProjectList1()
=======
        type: "",
        queryTime: [],
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
      }
      this.getProjectList()
    },
    selection(data){
      console.log(data)
      this.selectData = data
    
    }
  },
  watch: {
    router_param (newdata) {
      // this.pageObj.current = 1
      if (newdata == '1-1') {
        this.getProjectList()
      } 
      // else {
      //   this.getProjectList1()
      // }
    }
  }
}
</script>
<<<<<<< HEAD
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

=======
<style scoped>
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

>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
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
.title-font {
  color: #17233d;
  font-weight: 500;
  font-size: 20px;
}
.ivu-form-item {
<<<<<<< HEAD
=======
  margin-bottom: 15px;
>>>>>>> 4c2238720cd562c920083787ff5d055a734589e8
  display: inline-block;
}
</style>