<!--I just realized this makes absolutely no sense
    PLS when you have the time make it a component sidebar that opens on the right-->
<template>
  <div class="fixed w-full h-full flex flex-col">
    <div class="w-full flex h-10 bg-gray-500">
      <router-link class="my-auto text-gray-800 pl-2" to="/">
        <button class="flex focus:outline-none pr-3">
          <!-- hover is supposed to work fom th button but it doesnt -->
          <div class="my-auto p-1">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="my-auto fill-current text-gray-800 hover:text-gray-200"
            >
              <path
                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 
                12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 
                11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"
              />
            </svg>
          </div>
          <!-- <div class="my-auto text-lg font-semibold px-1 pb-px">back</div> -->
        </button>
      </router-link>
    </div>
    <div class="flex w-full h-full bg-gray-600">
      <div class="w-10/12 mx-auto h-full py-20 rounded-md">h</div>
    </div>
  </div>
</template>