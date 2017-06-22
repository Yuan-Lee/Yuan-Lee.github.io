<template>
  <div id="sidebar" class="sidebar sidebar-fixed" :class="{ 'collapsed': iscollapsed}">

    <div class="sidebar-shortcuts">
      <button class="btn btn-tohome" @click="toggleSidebar">
        <i class="fa fa-dedent"></i>
      </button>
    </div>
    <div class="nav-wrap js-nav-wrap">
      <div class="common-module">
        <ul class="nav nav-list">
          <li v-for="item in commonNav">
            <a href="#">
              <img class="menu-icon" :src="item.menuIcon" alt="">
              <span class="menu-text">{{item.menuText}}</span>
            </a>
          </li>
        </ul>
      </div>
      <ul class="nav nav-list">
        <li v-for="item in nav">
          <a href="#" :data-show="item.show" :class="{'dropdown-toggle':item.hasChildren}">
            <img :src="item.menuIcon" alt="" class="menu-icon">
            <span class="menu-text">{{item.menuText}}</span>
            <b class="arrow fa fa-angle-right" v-if="item.hasChildren"></b>
          </a>
          <ul class="submenu" v-if="item.hasChildren">
            <li v-for="(item,index) in item.children">
              <a href="#" :class="{'dropdown-toggle':item.hasChildren}">
                {{item.menuText}}-{{index}}
                <b class="arrow fa fa-angle-right" v-if="item.hasChildren"></b>
              </a>
              <ul class="submenu" v-if="item.hasChildren">
                <li v-for="(item,index) in item.children">
                  <a href="#" :class="{'dropdown-toggle':item.hasChildren}">
                    {{item.menuText}}-{{index}}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="subNav-modal js-subNav-modal">
      <div class="subNav-modal-container">
        <div class="subNav" v-for="item in subNav" :data-id="item.id">
          <h3 class="subNav-name">{{item.name}}</h3>
          <div class="subNav-container">
            <div class="subNav-item" v-for="item in item.item">
              <h5 class="subNav-item-name">{{item.name}}</h5>
              <ul class="subNav-list clearfix">
                <li v-for="item in item.list"><a href="">{{item.name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable quote-props */
  name: 'topbar',
  data() {
    return {
      iscollapsed: false,
      commonNav: [
        { 'menuIcon': '../../../static/icons/app-icon/app-icon01.png', 'menuText': '桌面' },
        { 'menuIcon': '../../../static/icons/app-icon/app-icon02.png', 'menuText': '学科模块管理' },
        { 'menuIcon': '../../../static/icons/app-icon/app-icon03.png', 'menuText': '课程开设' },
        { 'menuIcon': '../../../static/icons/app-icon/app-icon04.png', 'menuText': '课程表维护' },
        { 'menuIcon': '../../../static/icons/app-icon/app-icon05.png', 'menuText': '选修课设置' },
        { 'menuIcon': '../../../static/icons/app-icon/app-icon06.png', 'menuText': '高考成绩分析' },
      ],
      nav: [
        {
          'show': 'a',
          'hasChildren': true,
          'menuIcon': '../../../static/icons/app-icon/app-icon01.png',
          'menuText': '学科模块管理',
          'children': [
            {
              'hasChildren': true,
              'menuText': '二级导航',
              'children': [
                { 'menuText': '三级导航' },
                { 'menuText': '三级导航' },
                { 'menuText': '三级导航' },
                { 'menuText': '三级导航' },
              ],
            },
            { 'hasChildren': false, 'menuText': '二级导航' },
            { 'hasChildren': false, 'menuText': '二级导航' },
            { 'hasChildren': false, 'menuText': '二级导航' },
          ],
        },
        {
          'show': 'b',
          'hasChildren': false,
          'menuIcon': '../../../static/icons/app-icon/app-icon02.png',
          'menuText': '学科模块管理',
        },
        {
          'show': 'c',
          'hasChildren': false,
          'menuIcon': '../../../static/icons/app-icon/app-icon03.png',
          'menuText': '课程开设',
        },
        {
          'show': 'd',
          'hasChildren': false,
          'menuIcon': '../../../static/icons/app-icon/app-icon04.png',
          'menuText': '课程表维护',
        },
        {
          'show': 'e',
          'hasChildren': false,
          'menuIcon': '../../../static/icons/app-icon/app-icon05.png',
          'menuText': '选修课设置',
        },
        {
          'show': 'f',
          'hasChildren': false,
          'menuIcon': '../../../static/icons/app-icon/app-icon06.png',
          'menuText': '高考成绩分析',
        },
      ],
      subNav: [
        {
          'id': 'a',
          'name': '学科模块管理',
          'item': [
            {
              'name': '基础信息',
              'list': [
                { 'name': '考核时间设置' },
                { 'name': '班级设置' },
                { 'name': '班干部管理' },
                { 'name': '班主任费统计' },
                { 'name': '人员权限设置' },
              ],
            },
            {
              'name': '基础信息',
              'list': [
                { 'name': '考核时间设置' },
                { 'name': '班级设置' },
                { 'name': '班干部管理' },
                { 'name': '班主任费统计' },
                { 'name': '人员权限设置' },
              ],
            },
            {
              'name': '基础信息',
              'list': [
                { 'name': '考核时间设置' },
                { 'name': '班级设置' },
                { 'name': '班干部管理' },
                { 'name': '班主任费统计' },
                { 'name': '人员权限设置' },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.iscollapsed = !this.iscollapsed;
    },
  },
};
</script>

<style lang="scss">
  .sidebar {
    float:left;
    position: static;
    width: 210px;
    padding:0 0 40px;
    border:{
      style:solid;
      color:#c8c8c8;
      width: 0 1px 0 0;
    }
    box-shadow:1px 0px 3px rgba(207,210,212,0.6);
    background-color: #fff;
    transition: width .15s;
    &:before{
      position:absolute;top:0;bottom:0;z-index:-1;content:"";width:inherit;box-shadow:inherit;background-color:inherit;
    }
  }
  .sidebar-shortcuts{
    padding:6px 20px;
    border-bottom:1px solid #e8e8e8;
    text-align:right;
    background-color:#f4f4f4;
  }
  .btn-tohome{
    padding:2px 9px;
    border-radius:2px;
    font-size:16px;
    color:#fff;
    background-color:#66b77f;
    &:hover,&:active,&:focus{
      color:#fff;
    }
  }
  .sidebar.sidebar-fixed {
    position:fixed;
    top:auto;
    float:none!important;
    z-index:1027;
    &:before{
      height:5000px;
      top:auto;
      bottom:auto;
    }
  }

  /********** 侧边栏菜单导航 **********/
  .nav-list{
    >li{
      >a{position:relative;display:block;padding:9px 0 9px 20px;line-height:20px;white-space:nowrap;overflow:hidden;font-size:16px;color:#333;}
      &.open,&.active,&.hover{
        position:relative;background-color:#f2f6f9;
        &:before{position:absolute;left:0;top:0;bottom:0;z-index:1;content:'';width:3px;background-color:#2c9ae8;}
      }
      &.open >a{
        &:hover,&:focus{
          color:inherit;
        }
      }
      .arrow{top:14px;}
    }
    .arrow{position:absolute;right:20px;}
  }
  .nav-list li a:hover,
  .nav-list .open > a,
  .nav-list .open > a:hover,
  .nav-list .open > a:focus{text-decoration:none;color:#2c9ae8;background-color:transparent;}
  .nav{
    .menu-icon{margin-right:6px;vertical-align:middle;}
    .menu-text{display:inline-block;vertical-align:middle;}
  }
  .common-module{
    position:relative;
    padding-bottom:5px;
    margin-bottom:5px;
    &:after{
      position:absolute;
      bottom:0;
      left:20px;
      right:20px;
      content:'';
      height:0;
      border-top:1px solid #e8e8e8;
    }
  }

  .submenu{
    display:none;
    > li {
      .arrow{top:10px;}
      > a{padding:6px 0 6px 16px;margin-left:45px;font-size:16px;}
      > .submenu > li > a{padding:5px 0 5px 14px;margin-left:62px;font-size:14px;}
      &.active > a{color:#2c9ae8;}
    }
    a{display:block;position:relative;color:#333;}
  }

  /********** 侧边栏折叠状态 **********/
  .sidebar.collapsed{
    width:60px;
    .sidebar-shortcuts{
      padding:6px 0;
      text-align:center;
      .btn-tohome-text{display:none;}
    }
    .nav-list > li {
      > a{padding-left:20px;}
      .arrow{display:none;}
    }
    .nav .menu-icon{margin:0;}
    .nav .menu-text{display:none;}
    .common-module:after{left:20px;right:20px;}
    .common-module-name{display:none;}
    + .main-content{margin-left:60px;}
  }



  /********** 侧边栏二级菜单 **********/
  .subNav-modal{
    display:none;position:absolute;left:100%;top:0;bottom:auto;
    width:450px;padding:0 0 20px 25px;border:1px solid #dedede;
    background-color:inherit;
    -webkit-transition:top .5s;
    transition:top .5s;
  }
  .subNav{display:none;}
  .subNav-name{margin-bottom:30px;color:#026db7;}
  .subNav-item-name{margin:20px 0;font-weight:bold;color:#026db7;}
  .subNav-list li{
    float:left;
    width:120px;
    margin:0 10px 12px 0;
    a{
      display:block;
      font-size:12px;
      color:#333;
      &:hover{
        text-decoration:none;
        color:#026db7;
      }
    }
  }
</style>
