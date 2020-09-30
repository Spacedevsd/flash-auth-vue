<template>
  <div>
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$store.dispatch("authentication")
    }
  }
}
</script>
