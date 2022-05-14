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
import { mapMutations } from 'vuex'
import { TYPES } from '../../store/modules/team-performane'
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
    ...mapMutations({
      filterData:TYPES.mutations.FILTER_DATA
    }),
   handleDatesChange(){
       if(this.from && this.to){
             this.filterData({from: new Date(this.from), to: new Date(this.to)})
       }
   }
  }
}
</script>

<style>

</style>