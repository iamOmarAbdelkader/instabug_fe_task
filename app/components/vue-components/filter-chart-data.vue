<template>
  <div class="c-filter-chart-data">
   
   <div class="c-form-group c-form-group--inline">
        <label class="c-form-group__label" for="from">Start Date:</label>
        <input class="c-form-group__input" id="from" type="date"   v-model="from" name="from"/>
   </div>
   <div class="c-form-group c-form-group--inline">
        <label class="c-form-group__label" for="to">End Date:</label>
        <input class="c-form-group__input" id="to" type="date"   v-model="to" name="to"/>
   </div>
   
  </div>
</template>

<script>
export default {
    data(){
    return {
      from:"",
      to:"",
    }
  },
  watch:{
    from:{
        handler(){
                this.handleDatesChange()
        }
    },
    to:{
        handler(){
                this.handleDatesChange()
        }
      }
  },
  methods:{
   handleDatesChange(){
       if(this.from && this.to){
             // handle vuex state change
       }
   }
  }
}
</script>

<style>

</style>