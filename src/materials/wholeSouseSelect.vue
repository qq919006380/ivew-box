<template>
  <div>
    <Table border :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value", //这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 msg
    event: "parent-event" //这个字段，是指父组件监听 parent-event 事件
  },
  props: {
    value: Object
  },
  data() {
    return {
      columns: [
        {
          title: "ID",
          key: "id"
        },
        {
          title: "编号",
          key: "no"
        },
        {
          title: "编号名",
          key: "name"
        },
        {
          title: "图片",
          key: "picPath"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "Button",
              {
                on: {
                  click: () => {
                    console.log(params.row)
                    this.$emit("parent-event", params.row);
                  }
                }
              },
              "选择"
            );
          }
        }
      ],
      data: [
        {
          id: "Ts2001",
          no: "Ts595",
          name: "asll",
          picPath: "http://iph.href.lu/150x150?fg=235&bg=695"
        },
        {
          id: "Ts2002",
          no: "DEasd66",
          name: "as22",
          picPath: "http://iph.href.lu/150x150?fg=235&bg=895"
        },
        {
          id: "Ts2003",
          no: "DSQvasd",
          name: "as33",
          picPath: "http://iph.href.lu/150x150?fg=235&bg=961"
        }
      ]
    };
  }
};
</script>

<style>
</style>
