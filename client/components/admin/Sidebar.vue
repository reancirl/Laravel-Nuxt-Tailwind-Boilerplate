<template>
  <div
    class="h-screen w-1/6 fixed overflow-x-hidden z-0"
    style="background-color: #3d4b64"
  >
    <div style="background-color: #313c54" class="p-2">
      <img
        src="~/assets/img/bizsmart-logo.png"
        alt="Powered by BizSmart"
        class="m-auto w-20"
      />
    </div>
    <div class="block text-left">
      <NuxtLink to="/dashboard" class="sidebar-item">
       <i class="fa fa-tachometer-alt mr-4"></i>
        Dashboard
      </NuxtLink>
      <NuxtLink to="/location" class="sidebar-item">
       <i class="fa fa-map mr-4"></i>
        Location
      </NuxtLink>
      <NuxtLink to="/ogranization" class="sidebar-item">
       <i class="fa fa-globe mr-4"></i>
        Ogranization
      </NuxtLink>
      <NuxtLink to="/position" class="sidebar-item">
       <i class="fa fa-tasks mr-4"></i>
        Position
      </NuxtLink>
      <NuxtLink to="/employee" class="sidebar-item">
       <i class="fa fa-users mr-4"></i>
        Employees
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="css" scoped>
.sidebar-item {
  display:block;
  color: #fff;
  padding:.5rem 0rem .5rem 1.5rem;
  font-size:.9rem;
}
.nuxt-link-active{
  background-color:#46546c;
}
</style>
