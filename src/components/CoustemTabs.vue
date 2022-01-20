<template>
  <div class="tabs mx-32 xl pb-8">
    <!-- <div v-if="searchPlaceholder" class="flex"><input class="ml-auto" type="text" :placeholder="searchPlaceholder"></div> -->
    <div class="flex border-b-2">
      <div
        class="tab flex items-center justify-center border-t-0 border-l-0 border-r-0 border-b-0 rounded-t p-5 cursor-pointer"
        :class="id === tab.id ? 'border-b-2 border-regal-blue text-regal-blue' : ''"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab.type,tab.id)"
      >
        {{tab.type}}
      </div>
    </div>
    <div class="w-full mt-5" :key="index" v-for="(tab, index) in tabsNames">
        <div v-if="tab.id == id">
            <div v-html="tab.contend"></div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Tabs',
  props: {
    tabsNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchPlaceholder: String
  },
  data: function () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : 1,
      id: 1
    }
  },
  emits: ['changed'],
  methods: {
    changeTab: function (tab: string, ids: any) {
      this.active = ids
      this.id = ids
      this.$emit('changed', tab)
    }
  }
})
</script>
