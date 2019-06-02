<template>
  <div class="container">
    <Tabs value="name1">
      <TabPane label="卫生间" name="name1">
        <Bathroom :value="xxx.xxxList[0]"></Bathroom>
      </TabPane>
      <TabPane label="走廊" name="name2"></TabPane>
      <TabPane label="阳台" name="name3"></TabPane>
    </Tabs>
  </div>
</template>

<script>
import Bathroom from "./materials/bathroom";
export default {
  data() {
    return {
      xxx: {
        id: "asdasd",
        name: "asxx",
        xxxList: [
          {
            label: "卫生间",
            ToiletId: "132123",
            ToiletName: "马桶-材质",
            ToiletNo: "TDs112",
            ToiletPicPath: "http://iph.href.lu/150x150?text=%E9%A9%AC%E6%A1%B6%E7%9A%84%E5%9B%BE%E7%89%87ts135",
            sinkId:"98989",
            sinkName:"洗手台-材质",
            sinkNo:"1323PO",
            sinkPicPath:"http://iph.href.lu/150x150?fg=235&bg=223"
          }, 
          { name: "阳台", id: "33" },
          { name: "走廊", id: "53534" }
        ]
      }
    };
  },
  mounted() {},
  components: {
    Bathroom
  }
};
</script>

<style scoped lang='less'>
</style>
