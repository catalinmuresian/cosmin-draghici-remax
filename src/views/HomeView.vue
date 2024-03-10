<template>
  <div>
    <NavBar/>
    <div class="main-page">
      <div>
        <Toggle
            id="good"
            @toggle="update"
            label="Pretul cerut"
            :checked="list.good">
        </Toggle>
      </div>
      <div>
        <Toggle
            id="fast"
            @toggle="update"
            label="Timpul scurt"
            :checked="list.fast">
        </Toggle>
      </div>
      <div>
        <Toggle
            id="cheap"
            @toggle="update"
            label="Nevoie de a vinde"
            :checked="list.cheap">
        </Toggle>
      </div>


    </div>
  </div>
</template>

<script setup>
import Toggle from '../components/Toggle'
import NavBar from '../components/NavBar'
import {ref} from "vue";

let state = []

const list = ref({
  good: false,
  fast: false,
  cheap: false
})

function update ({key}) {
  const values = [...state];

  const index = values.indexOf(key);

  if (index === -1) {
    if (values.length === 2) {
      const removedField = values.shift();
      document.getElementById(removedField).checked = false;
    }
    values.push(key);
  } else {
    values.splice(index, 1);
  }
  state = [...values];
}

</script>

<style lang="scss">
.main-page {
  margin: auto;
  width: 221px;
  height: 100vh;
  justify-content: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
}

</style>
