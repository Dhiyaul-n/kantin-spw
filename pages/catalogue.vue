<template>
  <div class="wrapper w-[100%] min-h-screen -z-1 sticky">

    <div class="header fixed z-10">
      <div class="bg-[#1E1E1E] w-screen h-[60px] flex justify-between items-center rounded-[50px] ">
        <div class="flex justify-start items-center">
          <button>
            <svg class="relative left-4 w-12 h-10 text-white-800 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
          <h1 class="font-staat text-[30px] text-white font-bold m-[5%]">KANTIN</h1>
          <img class="relative mx-1 w-12" src="../assets/img/logo-spw.png">
        </div>

        <div class="flex justify-center items-center">
          <button
            class=" w-[160px] h-[60px] m-3 mx-8 text-[20px] font-ubuntu font-[800] hover:bg-[transparent] text-white duration-700 ease-in-out relative start-1/4">
            <NuxtLink to="cart">
              <svg class="w-[90%] h-[50%] text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
              </svg>
            </NuxtLink>
          </button>

          <NuxtLink to="login">
            <button
              class="bg-[#ededed] rounded-[40px] w-[160px] h-[40px] m-3 text-[18px] font-ubuntu font-[800] hover:bg-[transparent] hover:text-white duration-700 ease-in-out">
              Log in
            </button>
          </NuxtLink>
        </div>

      </div>
    </div>


    <div class="flex justify-center w-[100%] h-[20%] pt-[10%]">
      <img class=" h-[250px] w-[90%] rounded-[20px] object-cover" src="../assets/img/catalogue-header.png" alt="">
    </div>

    <h1 class="text-white text-[25px] font-staat font-bold mx-[10%] mt-[5%]">
      HOMEPAGE/ CATALOGUE
    </h1>


    <form>
      <div class="flex justify-center items-center mb-12">
        <div class="relative w-[85%]">
          <input type="search" id="search-dropdown" class=" p-2.5 w-full z-20 text-sm  rounded-lg outline-none"
            placeholder="Search" required />
          <button type="submit"
            class=" absolute top-0 end-0 w-[5%] px-5 h-full text-sm font-medium text-white bg-black rounded-e-lg border border-blue-700 hover:bg-gray-300 duration-700">
            <svg class="w-4 h-4 flex justify-center items-center " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </form>


    <div class="grid grid-cols-3 justify-center gap-10 w-[90%] place-items-end">
      <div v-for="(c, i) in [...Array(105).keys()]"
        class="w-[70%] h-[100%] grid grid-cols-2 my-4 rounded-lg bg-white text-center shadow-[0_5px_5px_5px_rgba(000,000,000,0.7)]">
        <div class="w-full h-full text-center">
          {{ i }}
          <p class="relative text-left left-2 font-bold">Product</p>
          <p class="relative text-left left-2 text-red-600 font-bold">RP.5000</p>
          <button
            class=" rounded-[7px] top-6 bg-[#2C2C2C] text-sm p-1 text-white hover:bg-gray-300 hover:border-[1px] hover:border-gray-700 hover:text-black duration-700 relative w-[90%] h-[21%] font-inter font-medium">
            add to cart
          </button>
        </div>

        <div class="flex justify-center items-center">
          <img class="w-[80%] h-[70%]" src="../assets/img/salad-buah-homepage.png">
        </div>

      </div>
    </div>
  </div>
</template>



<style>
.wrapper {
  background-image: url('@/assets/img/catalogue-bg.png');
  background-size: cover;
}
</style>