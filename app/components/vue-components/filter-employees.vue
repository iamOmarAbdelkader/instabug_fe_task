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
        this.handleUrlUpdate(value);
      }
    }
  },
  methods:{
    handleUrlUpdate(filter){
      const url = new URL(window.location);
      if(filter){
        url.searchParams.set('filter', filter);
      } else {
        url.searchParams.delete('filter')
      }
      window.history.pushState(null, '', url.toString());
    },
    clear(){
        this.filter = "";
    }
  }
}
</script>

<style>

</style>