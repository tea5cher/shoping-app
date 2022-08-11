<template>
  <div>
    <router-view/>
    <notifications position="bottom right" width="300px" />
  </div>
  
</template>

<style lang="scss">
 #app {
    font-family: Ubuntu, Helvetica,  sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    min-height: 100vh;
  }
  body{
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    background-repeat: no-repeat;
  }
  @font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'), local('Ubuntu'),
    url('@/assets/fonts/Ubuntu-Regular.ttf') format('woff2'),
    url('@/assets/fonts/Ubuntu-Regular.ttf') format('woff');
  font-style: normal;
}
</style>
