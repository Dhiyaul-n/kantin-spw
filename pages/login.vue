<template>
  <div class="wrapper">
    <div class="flex justify-center  h-4/5 mt-16 rounded-3xl">
      <div class="shadow-lg flex flex-col bg-[#ededed] rounded-[30px] w-2/6 font-staat font-bold text-2xl">
        <div class="flex flex-col justify-center items-center w-[100%]">
          <NuxtLink to="/">
            <button class="absolute left-[12%] top-[9%] rounded-full w-[60px] h-[60px]">
              <svg class=" w-6 h-6 text-white-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="50" height="50" fill="white" viewBox="0 0 24 24">
                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4" />
              </svg>
            </button>
          </NuxtLink>
          <img class="absolute left-[40.5%] top-[11%] w-10" src="../assets/img/logo-spw.png">
        </div>
        <div class="flex flex-col my-[20%] gap-20">
          <p class=" text-[43] font-staat">Welcome to SPW</p>
          <form @submit.prevent="login">
            <input
              class="mb-4 h-[22%] border-[2px] ps-3 border-black rounded-[8px] text-[13px] w-[70%] font-quantiico font-bold"
              type="email" v-model="email" placeholder="Email">
            <input
              class="mb-4 h-[22%] border-[2px] ps-3 border-black rounded-[8px] text-[13px] w-[70%] font-quantiico font-bold"
              type="password" v-model="password" placeholder="Password">
            <button type="submit"
              class="btn bg-[#242424] text-[16px] text-white w-[70%] h-[22%] rounded-[7px] duration-500 ease-in-out hover:bg-[#D1D1D1]"
              :disabled="status == 'pending' || !password">Log
              In</button>
            <p class="text-[11px]">dont have an account?
              <NuxtLink to="register"><a class="text-blue-500">Sign up</a></NuxtLink>
            </p>
          </form>
        </div>
      </div>
      <img src="../assets/img/bg-card.png" class="rounded-r-[30px] relative z-[-1] right-6">
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
  middleware: 'auth'
})

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const { execute: login, status, error } = useAsyncData('login', async () => {
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) throw "Username atau password salah"
  if (user) navigateTo('/dashboard')
}, {
  immediate: false
})
</script>

<style scoped>
.wrapper {
  background-image: url('@/assets/img/bg-form.png');
  position: fixed;
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  text-align: center;
}
</style>