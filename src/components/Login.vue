<template>
  <div class="">
    <div class="flex px-2 my-4 justify-end items-end text-regal-blue" >
      <img alt="down-arrow" src="../assets/down-arrow-login.svg">
      <p>يبرع</p>
      <img alt="down-arrow" class="px-3" src="../assets/map.svg">
    </div>
    <div class="home mt-10 flex justify-center w-100">
      <div class="mt-10 lg:w-1/3 md:w-1/2 w-100">
        <div class="">
          <img alt="Vue logo" class="m-auto" src="../assets/EarthlinkLogo.svg">
          <div class="text-lg text-center mb-5">
            <h2 class="text-xl text-center pb-5 font-semibold">
              Sign in to Task Manager
            </h2>
          </div>
        </div>
        <div class="p-8 m-5 border rounded-lg">
          <form>
            <div class="">
              <label class="block font-semibold pb-1" for="">Email</label>
              <input type="text" name="" id="" class="p-2 w-full border rounded-md" placeholder="you@example.com">
            </div>
            <div class="py-2">
              <label class="block font-semibold pb-1" for="">Password</label>
              <input type="password" name="" id="" class="p-2 w-full border rounded-md" placeholder="Password">
            </div>
            <div class="md:flex block  justify-between">
              <div class="form-check py-3">
                <!-- <input class="form-check-input appearance-none h-4 w-4 border border-regal-blue rounded-sm bg-white checked:bg-regal-blue checked:border-regal-blue focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked> -->
                <input class="form-check-input mr-2 h-4 w-4 border border-regal-blue bg-white checked:bg-regal-blue checked:border-regal-blue " type="checkbox" value="" id="" checked>
                <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                  Keep me logged in
                </label>
              </div>
              <a class=" py-3 forgetpass text-regal-blue font-semibold cursor-pointer">Forgot password?</a>
            </div>
            <button class="bg-regal-blue text-gray-50 font-semibold w-full p-3 rounded-md my-2">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login'
})
</script>

<style scoped>

</style>
