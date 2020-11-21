<template>
  <div class="flex flex-row h-screen">
    <div class="w-16 bg-gray-900 p-2 text-green-500" id="left-icon">

      <div class="hover:active text-white w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-2">
        <span>TBH</span>
      </div>

      <div class="hover:active rounded-full bg-gray-600 w-12 h-12 flex justify-center items-center mb-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </div>

      <div class="rounded-full bg-gray-600 w-12 h-12 flex justify-center items-center mb-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      </div>

      <div class="hover:active rounded-full bg-gray-600 w-12 h-12 flex justify-center items-center mb-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
      </div>

    </div>

    <div class="flex-1 flex bg-gray-100 min-h-screen flex-col h-screen">
      <!--    top bar-->
      <div class="flex shadow-lg">
        <div class="w-56 bg-gray-800 text-white flex justify-between items-center p-4 hover:bg-gray-700">
          <h4 class="font-semibold">Team BlackHole</h4>
          <div>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div class="flex-1 bg-gray-600 flex justify-between items-center p-4">
          <div class="flex text-white">
          <span class="text-gray-500 text-xl mr-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
        </span> <span>general</span>
          </div>
          <div class="flex text-white">
            <div class="mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </div>
            <div class="mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </div>
            <div class="mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <div class="mr-4">
              <div class="relative">
                <input type="text" placeholder="Search" class="rounded text-sm px-1 py-1 bg-gray-900 focus:w-48 w-32">
                <div class="right-1 top-1 absolute">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </div>
            <div class="mr-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 flex overflow-y-hidden">

        <!--      left hashtag-->
        <div class="bg-gray-800 w-56 flex flex-col justify-between overflow-y-hidden text-white">
          <div class="flex-1 overflow-y-auto scrollbar scrollbar-thumb-gray-850 scrollbar-track-gray-800">
            <div class="p-1 text-gray-400 text-xs">
              <span class="uppercase hover:text-white">Text Channels</span>
              <ul class="p-1">
                <li class="active py-1 px-2 mb-1 rounded bg-gray-600"># general</li>
                <li class="py-1 px-2 hover:rounded hover:bg-gray-600"># story</li>
                <li class="py-1 px-2 hover:rounded hover:bg-gray-600"># life event</li>
              </ul>
            </div>
            <div class="p-1 text-gray-400 text-xs">
              <span class="uppercase hover:text-white">Voice Channels</span>
              <ul class="p-1">
                <li class="active py-1 px-2 mb-1 hover:rounded hover:bg-gray-600"># general</li>
                <li class="py-1 px-2 hover:rounded hover:bg-gray-600"># story</li>
                <li class="py-1 px-2 hover:rounded hover:bg-gray-600"># life event</li>
              </ul>
            </div>
          </div>
          <div class="bg-gray-850 flex justify-between items-center">

            <div class="py-2 flex-none flex justify-between items-center">
              <div class="px-1 relative">
                <img class="rounded-full h-10 w-10"
                     src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=7dc81c222437ff6fed90bfb04c491d6f"
                     alt="">
                <span class="right-2 bottom-1 absolute w-2 h-2 rounded-full bg-green-500"></span>
              </div>
              <div class="w-16 mt-1">
                <div class="truncate text-xs -mb-1">Mohammad Anwar</div>
                <span class="text-xs text-gray-400">#548</span>
              </div>
            </div>

            <div class="flex justify-around">
              <div class="p-1 hover:bg-gray-600 hover:rounded">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <div class="p-1 hover:bg-gray-600 hover:rounded">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <div class="p-1 hover:bg-gray-600 hover:rounded">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!--      main content-->
        <div class="flex-1 flex flex-row justify-between">

          <div class="flex-1 bg-gray-700 flex flex-col justify-between text-white">
            <div class="flex-1 overflow-y-auto pt-4 scrollbar scrollbar-thumb-gray-850 scrollbar-track-gray-800">

              <div class="border-b border-opacity-25 border-gray-400 ">
                <div class="flex justify-around hover:bg-gray-800 my-4 pt-1 pl-1">
                  <div class="">
                    <img class="rounded-full h-10 w-10"
                         src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=7dc81c222437ff6fed90bfb04c491d6f"
                         alt="">
                  </div>
                  <div class="flex-1 ml-2 text-gray-400">
                    <h6 class="text-white">Mohammad Anwar <span class="text-gray-600 ml-2"> 29/06/20</span></h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias debitis enim hic iste maiores
                      maxime nesciunt, nisi optio perspiciatis provident quam quod repellat repellendus repudiandae
                      sapiente, sint velit voluptatibus.</p>
                    <p>&nbsp;</p>
                    <p>At consectetur ipsa ipsum labore optio rem reprehenderit tempore. Accusamus, at debitis dolorem
                      enim
                      hic magnam numquam praesentium quia repellendus repudiandae? Atque, dolore doloremque excepturi
                      facilis incidunt molestiae veritatis vero?</p>
                  </div>
                </div>
              </div>

              <div class="border-b border-opacity-25 border-gray-400">
                <div class="flex justify-around hover:bg-gray-800 my-4 pt-1 pl-1">
                  <div class="">
                    <img class="rounded-full h-10 w-10"
                         src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=7dc81c222437ff6fed90bfb04c491d6f"
                         alt="">
                  </div>
                  <div class="flex-1 ml-2 text-gray-400">
                    <h6 class="text-white">Mohammad Anwar <span class="text-gray-600 ml-2"> 29/06/20</span></h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias debitis enim hic iste maiores
                      maxime nesciunt, nisi optio perspiciatis provident quam quod repellat repellendus repudiandae
                      sapiente, sint velit voluptatibus.</p>
                    <p>&nbsp;</p>
                    <p>At consectetur ipsa ipsum labore optio rem reprehenderit tempore. Accusamus, at debitis dolorem
                      enim
                      hic magnam numquam praesentium quia repellendus repudiandae? Atque, dolore doloremque excepturi
                      facilis incidunt molestiae veritatis vero?</p>
                  </div>
                </div>
              </div>

              <div class="border-b border-opacity-25 border-gray-400">
                <div class="flex justify-around hover:bg-gray-800 my-4 pt-1 pl-1">
                  <div class="">
                    <img class="rounded-full h-10 w-10"
                         src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=7dc81c222437ff6fed90bfb04c491d6f"
                         alt="">
                  </div>
                  <div class="flex-1 ml-2 text-gray-400">
                    <h6 class="text-white">Mohammad Anwar <span class="text-gray-600 ml-2"> 29/06/20</span></h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias debitis enim hic iste maiores
                      maxime nesciunt, nisi optio perspiciatis provident quam quod repellat repellendus repudiandae
                      sapiente, sint velit voluptatibus.</p>
                    <p>&nbsp;</p>
                    <p>At consectetur ipsa ipsum labore optio rem reprehenderit tempore. Accusamus, at debitis dolorem
                      enim
                      hic magnam numquam praesentium quia repellendus repudiandae? Atque, dolore doloremque excepturi
                      facilis incidunt molestiae veritatis vero?</p>
                  </div>
                </div>
              </div>

            </div>
            <!--            message toolbar-->
            <div class="bg-gray-700">

              <div class="-mt-3 mx-4 mb-6 shadow-2xl bg-gray-600 flex py-1 px-4 rounded-lg items-center justify-around">
                <div class="text-gray-400 hover:text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1 mx-6">
                  <textarea class="w-full h-10 bg-gray-600 py-2" placeholder="Message #general"></textarea>
                </div>
                <div class="flex justify-around items-center text-gray-400">
                  <div class=" hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                  </div>
                  <div class="mx-2 hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                  </div>
                  <div class=" hover:text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!--        users list-->
          <div class="w-56 bg-gray-800 flex-none overflow-y-auto text-white pl-4 pt-4 text-gray-500">
            <p class="uppercase text-xs">Online-1</p>
            <ul>
              <li class="flex items-center mt-1 hover:bg-gray-600 hover:text-white py-1 rounded">
                <div class="px-1 relative mr-2">
                  <img class="rounded-full h-10 w-10"
                       src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=7dc81c222437ff6fed90bfb04c491d6f"
                       alt="">
                  <span class="right-2 bottom-1 absolute w-2 h-2 rounded-full bg-green-500"></span>
                </div>
                <div>
                  <span class="text-sm">Mohammad Anwar</span>
                </div>
              </li>
            </ul>

            <p class="uppercase text-xs mt-6">Offline-1</p>
            <ul>
              <li class="flex items-center mt-1 hover:bg-gray-600 hover:text-white py-1 rounded opacity-50 hover:opacity-100">
                <div class="px-1 relative mr-2">
                  <img class="rounded-full h-10 w-10"
                       src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=7dc81c222437ff6fed90bfb04c491d6f"
                       alt="">
                  <span class="right-2 bottom-1 absolute w-2 h-2 rounded-full bg-green-500"></span>
                </div>
                <div>
                  <span class="text-sm">Neo</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style scoped>
#left-icon div {
  @apply hover:text-white hover:bg-green-500;
}


</style>
