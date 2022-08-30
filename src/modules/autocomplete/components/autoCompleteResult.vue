<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store = useStore();

const result = computed(() => {
    return store.getters.result;
});

const resultCount = computed(() => {
    return result.value.length;
});

const setInputValue = function(inputVal: any) {
    store.commit('setSearchValue' , inputVal);
    store.commit('emptyResult');

}

</script>

<template>
    <ul v-if="resultCount > 0">
        <li v-for="(item ,index) in result" :key="index" @click="setInputValue(item.address)">  {{item.address}}</li>
    </ul>
</template>