<template>
  <div class="preloader">
    <label> loading...</label>
  </div>
</template>
<style>
.preloader label {
  color: tomato;
  font-weight: 500;
  font-size: 20px;
}
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.465);
}
</style>
