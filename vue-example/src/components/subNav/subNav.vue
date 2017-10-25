<template>
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
</template>

<script>
  export default ({
    data() {
      return {
        [
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
      }
    }
  })
</script>
<style></style>
