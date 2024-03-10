<template>
  <div class="nav-bar">
    <div>
      <div class="text">
        <img src="../assets/cosmin.png" alt="cosmin">
        <div>
          <h1>Cosmin Draghici</h1>
          <span>Agent Imobiliar</span>
        </div>
      </div>
      <img src="../assets/logo.png" alt="logo">

    </div>

  </div>
</template>

<script setup>
</script>

<style lang="scss">
.nav-bar {
  background-color: black;
  width: 100%;
  position: fixed;
  top: 0;
  > div {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;

    .text {
      text-align: left;
      display: flex;
      div {
        margin-left: 20px;
        h1 {
          font-size: 22px;
          color: white;
          margin: 0;
        }
        span {
          font-size: 16px;
          color: white;
        }
      }

    }
    img {
      width: 100%;
      max-width: 200px;
      border-radius: 10px;
    }

  }
}

@media only screen and (max-width: 625px) {
  .nav-bar {
    .text {
      flex-direction: column;
      img {
        max-width: 140px;
      }
      div {
        margin-left: 0 !important;
        margin-top: 10px;

      }
    }
  }

}

@media only screen and (max-width: 425px) {
  .nav-bar {
    > div > img {
      max-width: 150px;
    }
  }
}


</style>
