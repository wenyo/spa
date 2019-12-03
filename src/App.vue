<template>
  <div class='wrap'>
    <nav>
      <ul class='menu'>
        <li>
          <router-link to='/about'>About</router-link>
        </li>
        <li>
          <router-link to='/courses'>Courses</router-link>
        </li>
        <li>
          <router-link to='/booking'>Booking</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style  lang='scss'>
  @import '../scss/variable';
  @import '../scss/reset';

  .wrap{
    width: 100vw;
    font-family: 'Noto Sans TC', sans-serif;  
  }
  header{
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background: url("../img/katherine-hanlon-mod2s3-qFOc-unsplash.jpg" );
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
      background-size: cover;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: $color-master;
      box-shadow: 0 0 10px $color-master;
  }

  nav{
    position: absolute;
  }

  .menu{
    width: 100vw;
    box-sizing: border-box;
    padding: 5vh 2vw;
    display: flex;
    justify-content: flex-end;
    a{
      color: $color-sec;
      text-decoration: none;
      font-size: 20px;
      margin: 0 1vw;
      padding: 5px 7px;
      border-radius: 2px;
      &:hover{
        color: $color-master;
        background: $color-thir;
      }
    }
  }

  .title{
    font-size: $font-master;
    margin-bottom: -5px; 
    color: $color-sec;
  }
</style>
<script>

</script>