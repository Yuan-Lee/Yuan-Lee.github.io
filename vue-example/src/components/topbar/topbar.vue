<template>
  <div id="navbar" class="navbar navbar-fixed-top">

    <div class="navbar-container clearfix" id="navbar-container">

      <div class="navbar-header">

        <a href="#" class="navbar-brand">
          <img class="logo" :src="header.logo" alt="">
          <span>{{header.sitename}}</span>
        </a>

      </div>

      <ul class="nav navbar-nav navbar-right">

        <li class="navbar-item-user" :class="{'open':open}">
          <a href="#" data-toggle="dropdown" @click="dropdown">
            <img class="nav-user-photo" src="./user-temp.png" alt="Jason's Photo" />
            <span class="user-info">阮小天</span>
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-menu" v-if="open">
            <ul class="list-group">
              <li class="list-group-item" href="#">小猫 <a class="user-switch" href="">切换</a></li>

              <li class="list-group-item" href="#">小狗 <a class="user-switch" href="">切换</a></li>

              <li class="list-group-item" href="#">小刺猬 <a class="user-switch" href="">切换</a></li>

              <li class="list-group-item text-center" href="#"><a href="">退出</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'topbar',
  data() {
    return {
      header: {
        logo: './src/components/topbar/logo02.png',
        sitename: '浙江万朋教育 · 数字校园',
      },
      open: false,
    };
  },
  methods: {
    dropdown() {
      this.open = !this.open;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  .navbar{
    min-height:46px;
    margin-bottom:0;
    background:#317eeb;
  }
  .navbar-fixed-top{position:fixed;width:100%;}
  .navbar-header{float:left;}
  .navbar-brand{
    height:46px;
    padding:0 10px;
    font-size:20px;
    line-height:1;
    color:#fff;
    &:hover,
    &:focus{color:#fff}
    .logo{display:inline-block;vertical-align:middle;}
    span{display:inline-block;padding:13px 0;vertical-align:middle;}
  }
  .navbar-right{float:right;}
  .user-info,
  .user-info + i{font-size:14px;}
  .nav-user-photo{border-radius:50%;vertical-align:middle;}
  .navbar-nav{
    > li{
      position:relative;
      > {
        a{
          display:block;
          padding:3px 10px;
          font-size:20px;
          color:#fff;
          .badge{
            position:absolute;
            top:8px;
            right:2px;
            padding:2px 5px;
          }
          &:hover,
          &:focus{
            background-color:#1c67d2;
          }
        }
      }
    }
    > .open>a{
      color:#fff;background-color:#1c67d2;
      &:hover,
      &:focus{
        color:#fff;background-color:#1c67d2;
      }
    }
  }
  .dropdown-menu{
    position: absolute;
    top:100%;
    right:0;
    box-shadow:0 2px 10px #eee;
    background-color:#fff;
  }
  .list-group{
    min-width:160px;
    padding:5px 0;
    li{
      display:block;
      padding:5px 15px;
      color:#333;
      overflow:hidden;
      &:hover{
        background-color:#eee;
        cursor:pointer;
      }
    }
    a{
      display:block;
      text-align:center;
    }
  }
  .user-switch{float:right;}
  @media (max-width: 767px) {
    .navbar-nav{margin:0;text-align:center;}
    .navbar-nav>li{display:inline-block;}
    .navbar-nav .open .dropdown-menu {
      position: absolute;
      float: none;
      width: auto;
      margin-top: 0;
      background-color: #fff;
      border: 0;
      box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    }
    .navbar-nav .dropbox{top:92px;text-align:left;}
  }
</style>
