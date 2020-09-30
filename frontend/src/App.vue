<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/protected">Protected Route</router-link>
    </div>
    <router-view/>
  </div>
</template>