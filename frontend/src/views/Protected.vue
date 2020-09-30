<template>
    <div>{{ this.$store.state.content }}</div>
</template>

<script>
export default {
    name: "Protected",
    mounted() {
        this.$store.dispatch("getContent")
    }
}
</script>