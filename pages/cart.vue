<script setup>
const isHidden = ref(true)

function showSidebar() {
  isHidden.value = !isHidden.value
}
</script>

<template>

  <div class="flex justify-center ">
    <nav class="Sidebar flex justify-between bg-[#1E1E1E] rounded-full items-center fixed w-[90%] h-[10%]">
      <div class="flex ml-[2vw] items-center">
        <span class="ham" @click="showSidebar">
          <svg class="w-12 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </span>
        <div class="Tilt_nav flex items-center">
          <p class="font-bold text-white text-[2rem]">KANTIN</p>
          <img class="h-10 p-2" src="@/assets/img/logo-spw.png" alt="Logo SPW">
        </div>
      </div>
      <div class="fixed h-[100vh] top-0 left-0 bg-[#3F3F3F] flex z-50 w-[40%] ps-14"
        :class="{ 'left-[-50%]': isHidden }">
        <span class="ham" @click="showSidebar">
          <svg class="w-12 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="white" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </span>
        <div class="List_sidebar text-white">
          <NuxtLink to="">
            <p>HOMEPAGE ></p>
          </NuxtLink>
          <NuxtLink to="">
            <p>HOMEPAGE ></p>
          </NuxtLink>
          <NuxtLink to="">
            <p>HOMEPAGE ></p>
          </NuxtLink>
          <NuxtLink to="">
            <p>HOMEPAGE ></p>
          </NuxtLink>
          <NuxtLink to="">
            <p>HOMEPAGE ></p>
          </NuxtLink>
          <NuxtLink to="">
            <p>HOMEPAGE ></p>
          </NuxtLink>
        </div>
      </div>

      <div class="relative left-[25vw] items-end">
        <NuxtLink to="cart">
          <button
            class=" w-[100%] h-[100%] text-[16px] font-ubuntu font-[800] hover:bg-[transparent] text-white duration-700 ease-in-out flex items-center">
            <svg class="  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg>Cart
          </button>
        </NuxtLink>
      </div>

      <NuxtLink to="login">
        <button
          class="bg-[#ededed] rounded-[40px] w-[160px] h-[6vh] mr-[1vw] text-[18px] font-ubuntu font-[800] hover:bg-[transparent] hover:text-white duration-700 ease-in-out">
          Log in
        </button>
      </NuxtLink>

    </nav>
  </div>

  <div class="w-full flex justify-center pt-[8%]">
    <div class="contain w-[85%] flex gap-6">
      <div class="contain1 w-[60%] h-[70vh] bg-white border-[2px] border-[#E7E7E7] text-center rounded-[20px] ">

        <div class="flex justify-between">
          <h1 class="text-black text-start px-5 py-1 text-[25px] font-bold flex">Cart <p
              class="text-gray-400 text-[9px] pt-4 pl-2 font-BOLD"> (4 PRODUCTS)</p>
          </h1>

          <button>
            <h1 class="text-red-500 text-start px-3 mb-2 text-[10px] font-bold flex">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              CLEAR CART
            </h1>

          </button>
        </div>


        <div class="w-[94%] flex">
          <p class="text-left pl-6 pt-5 text-[20px] font-staat font-bold w-5/12">Products</p>
          <p class="text-left pl-6 pt-5 text-[20px] font-staat font-bold w-4/12">Quantity</p>
          <p class="text-left pl-6 pt-5 text-[20px] font-staat font-bold">Price</p>
        </div>

        <div class="h-[53vh] overflow-y-scroll">

          <div class="flex flex-col justify-center items-center ">
            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>

                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>

                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

            <div class=" w-[94%] h-[22%] rounded-[20px] border-[2px] p-1 mb-5 border-[#F7B945] flex ">
              <div class="col1 flex w-5/12 ">
                <div class="border-[3px]  border-[#E7E7E7] rounded-[15px] ">
                  <img class="w-[90px] m-1" src="../assets/img/salad-buah-homepage.png">
                </div>

              </div>
              <div class="col2 flex w-4/12">
                <div class="flex justify-center items-center">

                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                  1
                  <button class="px-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="col3 flex justify-center items-center">
                <div class="">
                  <h1 class="pl-2 ">RP. 2000</h1>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>

      <div
        class="contain2 w-[40%] h-[45vh] bg-white border-[2px] border-[#E7E7E7] text-center rounded-[20px] overflow-y-scroll ">

        <div class="flex justify-between px-[5%] mt-6 font-bold text-[18px]">
          <h1>Onde kacang</h1>
          <h1>2.000</h1>
        </div>

        <div class="flex justify-between px-[5%] font-bold text-[18px]">
          <h1>Onde kacang</h1>
          <h1>2.000</h1>
        </div>

        <div class="flex justify-between px-[5%] font-bold text-[18px]">
          <h1>Onde kacang</h1>
          <h1>2.000</h1>
        </div>

        <div class="flex justify-between px-[5%] font-bold text-[18px]">
          <h1>Onde kacang</h1>
          <h1>2.000</h1>
        </div>

        <div class="flex justify-between px-[5%] font-bold text-[18px]">
          <h1>Onde kacang</h1>
          <h1>2.000</h1>
        </div>

        <div class="flex justify-between px-[5%] font-bold text-[18px]">
          <h1>Onde kacang</h1>
          <h1>2.000</h1>
        </div>

        <div class="flex justify-center mt-2">
          <div class="w-[90%]  bg-[#275F59] h-1 rounded-lg"></div>
        </div>

        <div class="flex h-[40%] justify-between mb-1 px-[6%]  ">
          <h1 class="text-[20px] flex justify-end items-end font-medium">Total</h1>
          <h1 class="text-[22px] flex justify-end items-end font-bold">12.000</h1>
        </div>

        <div class="flex justify-center mb-5" div>
          <button
            class="w-[90%] h-10 rounded-lg hover:bg-black hover:text-white duration-500 ease-in-out bg-[#F7B945] font-semibold font-staat text-[17px]">
            Checkout Now
          </button>
        </div>


      </div>

    </div>
  </div>


  <div class="w-[50%] ml-[7.5%]">
    <img class="rounded-[20px] w-[100%] h-[15vh] my-5 object-cover grayscale" src="../assets/img/homepage.png" alt="">
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 0px;
}
</style>