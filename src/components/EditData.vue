<template>
  <!-- <div> -->
  <Modal width="400px" :title="ModalTit" v-model="visible" @ok="hideModal" okText="确认" cancelText="取消">
    <Form layout="horizontal">
      <FormItem  label="name" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <input v-model='copyDataT.name' />
      </FormItem >
      <FormItem  label="age" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <input v-model='copyDataT.age' />
      </FormItem >
      <FormItem  label="address" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <input v-model='copyDataT.address' />
      </FormItem >
    </Form>
  </Modal>
  <!-- </div> -->
</template>
<script>
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  };

  export default {
    data() {
      return {
        formItemLayout,
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