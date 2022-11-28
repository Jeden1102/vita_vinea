<template>
  <div class="app">
    <div class="container">
  <img class="logo" src="@/assets/logo-vita.png" alt="">
  <router-view/>
  </div>
  <div id="nav">
    <router-link to="/">
      <img src="@/assets/new-calc.png" alt="">
      Nowa kalkulacja
    </router-link> 
    <router-link to="/history">
      <img src="@/assets/checklist.png" alt="">
      Kalkulacje
    </router-link>
  </div>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background: url('./assets/pattern.webp');
  min-height: 100vh;
  position:relative;
  padding-bottom:40px;
}
.app{
  margin-bottom:40px;
  padding-bottom:40px;
}
*{
  font-family: 'Dosis', sans-serif;
}
#nav {
  padding: 10px;
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  background: white;
  display:flex;
  justify-content: center;
  :nth-child(2){
    border-left:2px solid rgb(27, 27, 27);
  }
  a {
    height: 100%;
    font-weight: bold;
    color: #2c3e50;
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:8px;
    text-decoration: none;
    img{
      width:40px;
      height:40px;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
  margin:0;
  padding: 0;
}
.container{
  width:95%;
  min-height: 50vh;
  margin:0 auto;
  background: white;
  -webkit-box-shadow: 0px 8px 75px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 8px 75px -16px rgba(66, 68, 90, 1);
  box-shadow: 0px 8px 75px -16px rgba(66, 68, 90, 1);
  border-radius: 10px;
  .logo{
    width:250px;
  }
  @media(min-width:768px){
    width:85%;
  }
  @media(min-width:1200px){
    width:75%;
  }
.button {
  appearance: button;
  backface-visibility: hidden;
  background-color: gray;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 300px;
  &:disabled{
    cursor: default;
  }
  &:focus{
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
  &--primary{
    background: #405cf5;
  }
  &--success{
    background: #059c2b;
  }
  &--danger{
    background: #f0bd16;
  }
  &--error{
    background: #f03716;
  }
}

.base-input{
  max-width: 300px;
  border: 0;
  outline: 0;
 color: rgb(60, 66, 87);
 background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
   border-radius: 4px;
   font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    padding: 4px 8px;
   min-height: 28px;
    vertical-align: middle;
   transition: background-color .24s,box-shadow .24s;
   transition-property: background-color, box-shadow;
  transition-duration: 0.24s, 0.24s;
  transition-timing-function: ease, ease;
   transition-delay: 0s, 0s;
   &:focus{
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(58 151 212 / 36%) 0px 0px 0px 4px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
   }
                
}
}
</style>
