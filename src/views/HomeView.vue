<template>
  <div class="main-page">
    <div>
      <Toggle
          id="cheap"
          @toggle="update"
          label="Nevoia"
          :checked="list.cheap">
      </Toggle>
    </div>
    <div>
      <Toggle
          id="fast"
          @toggle="update"
          label="Timpul"
          :checked="list.fast">
      </Toggle>
    </div>
    <div>
      <Toggle
          id="good"
          @toggle="update"
          label="Pretul"
          :checked="list.good">
      </Toggle>
    </div>

  </div>
</template>

<script setup>
import Toggle from '../components/Toggle'
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
  width: 126px;
  margin: 350px auto auto;
  justify-content: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .main-page {
    margin: auto;
    height: 100vh;
  }

}

</style>
