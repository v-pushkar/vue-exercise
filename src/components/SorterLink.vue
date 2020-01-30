<template>
  <button
    v-bind:style="{ 'background-image': 'url(' + sortIcon + ')' }"
    class="sorter-btn"
  ></button>
</template>

<script>
import sortIcon from "@/assets/sort.png";
export default {
  data() {
    return {
      sortIcon
    };
  }
};
</script>
<style>
.sorter-btn {
  margin-left: 5px;
  border: none;
  background: none;
  width: 15px;
  height: 25px;
  background-position: center;
  background-size: 10px 25px;
  background-repeat: no-repeat;
}
</style>
