<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            align="left"
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
        align="left"
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        align="left"
        prop="address"
        label="地址">
        </el-table-column>
    </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2017-09-12',
        name: '王宝强',
        address: '上海市静安别墅1栋',
      }, {
        date: '2017-09-13',
        name: '马蓉',
        address: '上海市静安别墅2栋',
      }, {
        date: '2017-09-13',
        name: '宋喆',
        address: '上海市静安别墅2栋',
      }],
    };
  },

};
</script>
