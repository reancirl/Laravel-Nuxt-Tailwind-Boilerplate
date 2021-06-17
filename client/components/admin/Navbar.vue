<template>
  <div class="grid grid-cols-6">
    <div></div>
    <div class="col-span-5 p-3 flex" style="background-color: #fff">
      <div class="my-auto">
        <i class="fa fa-bars text-xl ml-5 text-gray-500"></i>
      </div>
      <div class="ml-auto ">
        <t-dropdown>
          <div
            slot="trigger"
            slot-scope="{
              mousedownHandler,
              focusHandler,
              blurHandler,
              keydownHandler,
              isShown
            }"
          >
            <button
              id="user-menu"
              class="flex items-center pr-3 text-sm text-gray-700 transition duration-150 ease-in-out bg-gray-300 border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
              :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
              aria-label="User menu"
              aria-haspopup="true"
              @mousedown="mousedownHandler"
              @focus="focusHandler"
              @blur="blurHandler"
              @keydown="keydownHandler"
            >
              <img class="w-8 h-8 mr-2 rounded-full" src="https://gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=80&d=mp" alt="">

              Hi, {{ $auth.user.name }}!
            </button>
          </div>

          <div class="py-1 rounded-md shadow-xs">
            <a
              href="#"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
            >
              Your Profile
            </a>
            <button
              @click="logout()"
              type="button"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
            >
              Sign out
            </button>
          </div>
        </t-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>
<style lang="css" scoped>
</style>
