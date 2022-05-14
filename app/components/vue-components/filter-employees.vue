<template>
  <div class="c-filter-employees">
    <input type="text"  v-model="filter"  class="c-filter-employees__input"/>
    <button @click="clear" class="c-button">Clear</button>
  </div>
</template>

<script>
export default {
    data(){
    return {
      filter:"",
    }
  },
  watch:{
    filter:{
      handler(value){
        this.$emit("filter-change",value);
      }
    }
  },
  methods:{
    clear(){
        this.filter = "";
    }
  }
}
</script>

<style>

</style>