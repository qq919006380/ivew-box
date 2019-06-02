<template>
  <div>
    <BoxItem title='马桶' v-model="Toile_box"></BoxItem>{{Toile_box}}
    <BoxItem title='洗手台' v-model="sink_box"></BoxItem>{{sink_box}}
  </div>
</template>

<script>
import BoxItem from "./boxItem";
export default {
  watch: {
    value: {
      handler: function(val) {
        for (var x in val) {
          this.item[x] = val[x];
        }
        this.Toile_box = {
          id: this.item.ToiletId,
          no: this.item.ToiletNo,
          name: this.item.ToiletName,
          picPath: this.item.ToiletPicPath
        };
        this.sink_box = {
          id: this.item.sinkId,
          no: this.item.sinkNo,
          name: this.item.sinkName,
          picPath: this.item.sinkPicPath
        };
      },
      deep: true,
      immediate: true
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      item: {},
      Toile_box: {},
      sink_box: {}
    };
  },
  mounted() {},
  components: {
      BoxItem
  }
};
</script>
 
<style>
</style>
