<template>
  <div>
    <h1>AAF-AAF</h1>
    <p>Звукорежиссёр попросил скинуть AAF, а ты не знаешь как это сделать?<br>Без паники! Следуй этим простым шагам...</p>
    <p>Для начала выбери программу...</p>
    <b-container  style="max-width: 970">
      <b-row>
      <b-col 	md="4" class="program-block" v-on:click="go('/premiere')">
        <img src="@/assets/premiere.png" class="program-logo">
        Premiere Pro
        </b-col>
        

      
      <b-col md="4" class="program-block" v-on:click="go('/resolve')">

        <img src="@/assets/resolve.png" class="program-logo">
        Davinci Resolve

      </b-col>
      

    </b-row>

    </b-container>
    <div style="margin-top:35px; color: lightgray;">E-mail: etoshapovalov(at)ya.ru</div>
  </div>    
</template>
<script>
export default {
      name: 'HomePage',

  methods: {
    go(url){
      this.$router.push(url);
    }
  }
}
</script>
<style>

.program-block {

  background-color:lightgrey;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 20px;
  margin: 15px;
}
.program-logo {
  width: 100px;
  height: auto;
  padding-bottom: 15px;
}
</style>