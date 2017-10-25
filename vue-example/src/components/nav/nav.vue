<template>
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
</template>

<script>
  export default ({
    /* eslint-disable quote-props */
    data() {
      return {
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
      };
    },
  });
</script>
<style></style>
