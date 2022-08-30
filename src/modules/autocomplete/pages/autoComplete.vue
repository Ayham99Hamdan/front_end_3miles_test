<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import result from '../components/autoCompleteResult.vue';
import debounce from 'lodash/debounce';

// const query = ref();
const store = useStore();

const search = computed(() => {
    return  debounce(function(){
              if(query.value != ''){
        store.commit('setSearchValue' , query.value);
        store.dispatch('searchAddress' , query.value);
    }
    } , 500);
});

const query = computed({
    get() {
      return store.getters.query;
    },
    set(value: string){
        store.commit('setSearchValue' , value);
    }
})

</script>

<template>
    <div class="autocomplete">
        <label for="address">Address</label>
        <input id="address" type="text" class="input" v-model="query" @focus="search" @keyup="search" placeholder="Search Address" >
        <result></result>
    </div>
</template>
