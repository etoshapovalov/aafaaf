<template>
    <div class="step">
        <h1 style="float:left; width: 100%;">{{this.header}}</h1><br>
        <h4 style="width: 100%;">{{this.text}}</h4>
        <img ref="pic" style="width: 100%; max-width: 500px; height:auto;" :src="this.pic">
    </div>
</template>
<script>
export default {
    name: "StepBlock",
    props: ["header", "text", "pic"],


}
</script>
<style scoped>
    .step {
        background-color: lightgray;
        border-radius: 5px;

        max-width:900px;

        padding: 20px;
        margin-bottom: 10px;

    }
</style>