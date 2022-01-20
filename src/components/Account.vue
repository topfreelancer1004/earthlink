<template>
  <div>
    <div class="flex w-100 items-center justify-between py-3 border-b px-3">
      <div class="flex items-center">
        <img alt="Vue logo" class="mr-4" src="../assets/flower.svg">
        <img alt="folder" class="mr-2" src="../assets/folder.svg">
        <p class="font-semibold text-gray-600">Projests</p>
      </div>
      <div class="flex items-center justify-end">
        <img alt="bell" class="pr-3 border-r" src="../assets/bell.svg">
        <button class="rounded-md p-1 mx-2 bg-gray-100">
          <img alt="customer" class="" src="../assets/customer.svg">
        </button>
        <img alt="down-arrow" src="../assets/down-arrow.svg">
      </div>
    </div>

    <div class="flex mx-32 xl pt-3">
      <h1 class="font-semibold my-2 text-gray-600 text-2xl">Projects Dashboard</h1>
    </div>
    <div class="flex justify-end mx-32 xl w-100">
      <label class="block lg:w-4/12 md:6/12 sm:12/12 pl-6">
        <span class="sr-only">Search</span>
        <div class="relative">
          <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3  shadow-sm focus:outline-none focus:border-regal-blue focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Subject or reference" type="text" name="search"/>
          <img alt="down-arrow" class="absolute right-2 top-2" src="../assets/search.svg">
        </div>
      </label>
    </div>
    <Tab :searchPlaceholder="searchPlaceholder" :tabsNames="tabsNames"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Tab from './CoustemTabs.vue'
export default defineComponent({
  name: 'Account',
  data: function () {
    return {
      message: 'tess',
      searchPlaceholder: true,
      tabsNames: [
      ]
    }
  },
  components: {
    Tab
  },
  mounted () {
    this.tabsNames = this.$store.state.tabData
  }
})

</script>
