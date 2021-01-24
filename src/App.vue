<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
@media (min-width: 1600px) and (max-width: 2560px) {
  #app {
    max-width: 1440px;
    margin: 0 auto;
  }
}

@media (max-width: 1600px) {
  #app {
    margin: 0 150px;
  }
}

@media (max-width: 1440px) {
  #app {
    margin: 0 50px;
  }
}

@media (max-width: 1200px) {
  #app {
    margin: 0 30px;
  }
}
</style>
