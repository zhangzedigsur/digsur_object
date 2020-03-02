<template>
    <!-- <div> -->
    <Modal width="400px" :title="ModalTit" v-model="visible" @on-ok="hideModal" okText="确认" cancelText="取消">
        <Form  :label-width="100" :model="copyDataT">
            <FormItem  label="name">
                <Input v-model='copyDataT.name' />
            </FormItem >
            <FormItem  label="age">
                <Input v-model='copyDataT.age' />
            </FormItem >
            <FormItem  label="address">
                <Input v-model='copyDataT.address' />
            </FormItem >
        </Form>
    </Modal>
    <!-- </div> -->
</template>
<script>
    // const formItemLayout = {
    //     labelCol: { span: 4 },
    //     wrapperCol: { span: 18 },
    // };

    export default {
        data() {
            return {
                // formItemLayout,
                visible: false,
                objVal: {},
                ModalTit: '',
                copyDataT: {},
            }
        },

        methods: {
            showModal(val) {
                this.ModalTit = "新增用户信息"
                this.copyDataT = {}
                this.visible = true
            },
            hideModal() {
                console.log(111)
                this.$emit('introduce', this.copyDataT)
                this.visible = false
            },
            confirm() {
                this.$confirm({
                    title: 'Confirm',
                    // content: 'Bla bla ...',
                    okText: '确认',
                    cancelText: '取消',
                });
            },
            // copyData() {
            //     var mianbaoxie = JSON.parse(JSON.stringify(this.objVal))
            //     return mianbaoxie;
            // }
        },
    }
</script>