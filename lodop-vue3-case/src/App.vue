<template>
    <h1>lodop打印</h1>
    <img alt="Vue logo" src="./assets/logo.png"/>
</template>

<script>

export default {
    name: 'App',
    mounted() {
    },
    methods: {
        print() {
            this.$lodop.print()
        }
    }
}
</script>
