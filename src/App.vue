<template>
  <NavBar/>

  <router-view/>
</template>
<script setup>
import NavBar from './components/NavBar'

</script>
<style lang="scss">
#app {
  font-family: Jua, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}


input:focus {
  outline: none;

}
input::-moz-focus-inner {
  border: 0;
}

textarea:focus, input:focus{
  outline: none;
}

*:focus {
  outline: none;
}

</style>
