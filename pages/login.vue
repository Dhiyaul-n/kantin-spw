<template>
  <div class="wrapper">
    <div class="flex justify-center  h-4/5 mt-16 rounded-3xl">
      <div
        class="shadow-lg flex flex-col justify-between bg-[#ededed] rounded-[30px] w-2/6 font-staat font-bold text-2xl">
        <img class="relative left-6 top-6 w-10" src="../assets/img/logo-spw.png">

        <div class="flex flex-col gap-10">
          <p class=" text-[43] font-staat">Welcome to SPW</p>
          <form action="">
            <input
              class="  mb-4 h-[40px] border-[2px] ps-3 border-black rounded-[8px] text-[13px] w-[70%] font-quantiico font-bold "
              type="text" placeholder="email">
            <input
              class=" mb-4 h-[40px] border-[2px] ps-3 border-black rounded-[8px] text-[13px] w-[70%] font-quantiico font-bold "
              type="text" placeholder="password">
            <button class="btn bg-[#242424] text-white w-[70%] rounded-[10px]">Log in</button>
            <p class="text-[11px]">dont have an account? <a class="text-blue-500">Sign up</a>
            </p>
          </form>
        </div>


        <button
          class="relative left-[4%] flex justify-center items-center rounded-full w-[60px] h-[60px] bottom-3 bg-white border-2 border-[#9D9D9D]-900">
          <NuxtLink to="/">
            <svg class=" w-6 h-6 text-white-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="50" height="50" fill="white" viewBox="0 0 24 24">
              <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
          </NuxtLink>
        </button>

      </div>
      <img src="../assets/img/bg-card.png" class="rounded-r-[30px] relative z-[-1] right-6">
    </div>
  </div>
</template>
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