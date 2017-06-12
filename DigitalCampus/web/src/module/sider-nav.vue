<template>
	<div class="sidebar-shortcuts">
		<button class="btn btn-tohome js-siderbar-collapse">
			<i class="wpfont icon-dedent"></i>
		</button>
	</div>
	<div class="nav-wrap js-nav-wrap">
		<div class="common-module">
			<ul id="commonNavList" class="nav nav-list">
				<li v-for="item in items">
					<a href="#">
						<img class="menu-icon" :src="item.menuIcon" alt="">
						<span class="menu-text">{{item.menuText}}</span>
					</a>
				</li>
			</ul>
		</div>
		<ul id="navList" class="nav nav-list">
			<li v-for="item in items">
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
		<div id="subNav" class="subNav-modal-container">
			<div class="subNav" v-for="item in items" :data-id="item.id">
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
</template>
<script>
	require(["../node_modules/vue/dist/vue.min.js"],function(Vue){

		var commonNavList = new Vue({
			el:"#commonNavList",
			data:{
				items:[
					{'menuIcon':'../dist/images/icons/app-icon/app-icon01.png','menuText':'桌面'},
					{'menuIcon':'../dist/images/icons/app-icon/app-icon02.png','menuText':'学科模块管理'},
					{'menuIcon':'../dist/images/icons/app-icon/app-icon03.png','menuText':'课程开设'},
					{'menuIcon':'../dist/images/icons/app-icon/app-icon04.png','menuText':'课程表维护'},
					{'menuIcon':'../dist/images/icons/app-icon/app-icon05.png','menuText':'选修课设置'},
					{'menuIcon':'../dist/images/icons/app-icon/app-icon06.png','menuText':'高考成绩分析'}
				]
			}
		})

		var navList = new Vue({
			el:"#navList",
			data:{
				items:[
					{
						'show':'a',
						'hasChildren':true,
						'menuIcon':'../dist/images/icons/app-icon/app-icon01.png',
						'menuText':'学科模块管理',
						'children':[
							{
								'hasChildren':true,
								'menuText':'二级导航',
								'children':[
									{'menuText':'三级导航'},
									{'menuText':'三级导航'},
									{'menuText':'三级导航'},
									{'menuText':'三级导航'}
								]
							},
							{'hasChildren':false,'menuText':'二级导航'},
							{'hasChildren':false,'menuText':'二级导航'},
							{'hasChildren':false,'menuText':'二级导航'}
						]
					},
					{
						'show':'b',
						'hasChildren':false,
						'menuIcon':'../dist/images/icons/app-icon/app-icon02.png',
						'menuText':'学科模块管理'
					},
					{
						'show':'c',
						'hasChildren':false,
						'menuIcon':'../dist/images/icons/app-icon/app-icon03.png',
						'menuText':'课程开设'
					},
					{
						'show':'d',
						'hasChildren':false,
						'menuIcon':'../dist/images/icons/app-icon/app-icon04.png',
						'menuText':'课程表维护'
					},
					{
						'show':'e',
						'hasChildren':false,
						'menuIcon':'../dist/images/icons/app-icon/app-icon05.png',
						'menuText':'选修课设置'
					},
					{
						'show':'f',
						'hasChildren':false,
						'menuIcon':'../dist/images/icons/app-icon/app-icon06.png',
						'menuText':'高考成绩分析'
					}
				]
			}
		})

		var commonNavList = new Vue({
			el:"#subNav",
			data:{
				items:[
					{
						'id':'a',
						'name':'学科模块管理',
						'item':[
							{
								'name':'基础信息',
								'list':[
									{'name':'考核时间设置'},
									{'name':'班级设置'},
									{'name':'班干部管理'},
									{'name':'班主任费统计'},
									{'name':'人员权限设置'}
								]
							},
							{
								'name':'基础信息',
								'list':[
									{'name':'考核时间设置'},
									{'name':'班级设置'},
									{'name':'班干部管理'},
									{'name':'班主任费统计'},
									{'name':'人员权限设置'}
								]
							},
							{
								'name':'基础信息',
								'list':[
									{'name':'考核时间设置'},
									{'name':'班级设置'},
									{'name':'班干部管理'},
									{'name':'班主任费统计'},
									{'name':'人员权限设置'}
								]
							},
						]
					}
				]
			}
		})
	})
</script>
	