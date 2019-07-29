<template>
    <div>
        <input :value="text" @input='opInput'>
        {{text}}
        <input v-model="text1">
        {{text1}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: '',
            text1: ''
        };
    },
    methods: {
        opInput(e) {
            this.text = e.target.value;
        }
    }
};
</script>
<style lang="less" scoped>

</style>
