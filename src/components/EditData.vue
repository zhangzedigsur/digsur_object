<template>
  <!-- <div> -->
  <Modal width="400px" :title="ModalTit" v-model="visible" @on-ok="hideModal" okText="确认" cancelText="取消">
    <Form :label-width="100" :model="copyDataT">
      <FormItem  label="name">
        <Input v-model='copyDataT.name' />
      </FormItem >
      <FormItem  label="age">
        <Input v-model='copyDataT.age' />
      </FormItem >
      <FormItem  label="address">
        <Input v-model='copyDataT.address' />
      </FormItem >
      <FormItem  label="用户权限">
          <Input v-model='copyDataT.type' />
      </FormItem >
      <FormItem  label="开始时间">
          <Date-picker size="small" type="date" :value.sync="copyDataT.StartTime" @on-change="addDate1" format="yyyy-MM-dd"
          placement="bottom-end" placeholder="选择日期" style="width: 200px" :editable="false"></Date-picker>
            <!-- <Input v-model='copyDataT.StartTime' /> -->
        </FormItem >
        <FormItem  label="结束时间">
          <Date-picker size="small" type="date" :value.sync="copyDataT.EndTime" @on-change="addDate2" format="yyyy-MM-dd"
          placement="bottom-end" placeholder="选择日期" style="width: 200px" :editable="false"></Date-picker>
            <!-- <Input v-model='copyDataT.EndTime' /> -->
        </FormItem >
    </Form>
  </Modal>
  <!-- </div> -->
</template>
<script>

  export default {
    data() {
      return {
        // formItemLayout,
        visible: false,
        objVal: {},
        ModalTit: '',
        copyDataT:{},
      }
    },

    methods: {
      showModal(val) {
          this.ModalTit = "编辑用户信息"
          this.objVal = val
          this.copyDataT = this.copyData()
        this.visible = true
      },
      hideModal() {
        this.$emit('editintroduce', this.copyDataT)
        this.visible = false
      },
      addDate1(data){
          this.copyDataT.StartTime = data
        },
      addDate2(data){
        this.copyDataT.EndTime = data
      },
      // confirm() {
      //   this.$confirm({
      //     title: 'Confirm',
      //     okText: '确认',
      //     cancelText: '取消',
      //   });
      // },
      copyData() {
        var mianbaoxie = JSON.parse(JSON.stringify(this.objVal))
        return mianbaoxie;
      }
    },
  }
</script>