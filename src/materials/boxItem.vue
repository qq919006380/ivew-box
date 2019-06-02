<template>
  <div>
    <div class="container">
      <!-- 墙面材质 -->
      <div>
        <div class="delete-box" v-show="item.id==''?false:true">
          <div class="pac">
            <img :src="item.picPath" style="width:100px">
          </div>
          <div class="Mask">
            <div class="msg">{{item.no}}</div>
            <div class="msg">{{item.name}}</div>
            <div @click="delete_box">
              <Icon type="ios-trash-outline" class="delete-icon"/>
            </div>
          </div>
        </div>
        <div class="add-box" v-show="item.id!=''?false:true">
          <a @click="add_box">
            <!-- <img src="../add.png"> -->
            <div>添加</div>
          </a>
        </div>
        <!-- title -->
        <div class="title">{{title}}</div>
      </div>
    </div>
    <div>
      <Modal
        title="选择花洒"
        v-model="addshowerModel"
        @on-ok="saveSelectedshower"
        width="1200"
        class="middle-level-index">
        <wholeSouseSelect v-model="showerData"></wholeSouseSelect>
      </Modal>
    </div>
  </div>
</template>

<script>
import wholeSouseSelect from "./wholeSouseSelect";

export default {
  model: {
    prop: "value",  
    event: "parent-event" 
  },
  watch: {
    value: {
      handler(val) {
        for (var x in val) {
          this.item[x] = val[x];
        }
        console.log(val);
      },
      immediate: true
    }
  },
  props: {
    value: {
      type: Object
    },
    title: String
  },
  data() {
    return {
      addshowerModel: false,
      showerData:{},
      item: {}
    };
  },
  methods: {
    delete_box() {
      this.item.id = "";
      this.item.no=''
      this.item.name=''
      this.item.picPath=''
      this.$forceUpdate();
    },
    add_box() {
      this.addshowerModel = true;
    },
    saveSelectedshower() {
      //回显
      this.item.id = this.showerData.id
      this.item.no=this.showerData.no
      this.item.name=this.showerData.name
      this.item.picPath=this.showerData.picPath
      // 保存
      // this.value['测试']='asd'
      this.$emit("parent-event",this.item);
      this.$forceUpdate()
    }
  },
  components: {
    wholeSouseSelect
  }
};
</script>

<style lang='less' scoped>
.container {
  display: flex;
}
.delete-box {
  border: 1px solid #cac8c8;
  position: relative;
  width: 120px;
  margin-right: 20px;
  .pac {
    width: 120px;
    height: 112px;
  }
  .Mask {
    width: 120px;
    height: 112px;
    background: rgba(118, 118, 118, 0);
    position: absolute;
    top: 0;
    transition: all 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .msg {
      font-size: 16px;
      opacity: 0;
      transition: all 0.3s;
    }
    .delete-icon {
      cursor: pointer;
      font-size: 28px;
      opacity: 0;
      transition: all 0.3s;
    }
  }
  .Mask:hover {
    background: rgba(118, 118, 118, 0.8);
    .msg {
      color: #fff;
      opacity: 1;
    }
    .delete-icon {
      color: #fff;
      opacity: 1;
    }
  }
}
.add-box {
  width: 120px;
  height: 112px;
  border: 1px solid #cac8c8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 16px;
  width: 120px;
  text-align: center;
}
</style>