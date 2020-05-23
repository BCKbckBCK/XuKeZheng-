<template>
  <div class="constructTable">
    <div class="headBox">
      <h1>建筑工程项目明细表</h1>
      <div class="opeart">
        <el-button @click="newadd">新增</el-button>
        <el-button @click="open">删除</el-button>
        <el-button>刷新</el-button>
      </div>
    </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border
    >
      <!-- 1 -->
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <!-- 2 -->
      <el-table-column align="center" prop="date" label="序号" width="120"></el-table-column>
      <!-- 3 -->
      <el-table-column align="center" prop="name" label="名称" width="250">
        <template slot-scope="scope">
          <a v-if="scope.row.name=='测试2016工程'" style="color:lightblue" @click="newadd">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <!-- 4 -->
      <el-table-column align="center" prop="address" label="建筑面积/长度(平方米/米)" show-overflow-tooltip></el-table-column>
      <!-- 5 -->
      <el-table-column align="center" prop="up" label="其中:地上" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <!-- 6 -->
      <el-table-column align="center" prop="down" label="地下" width="120"></el-table-column>
      <!-- 7 -->
      <el-table-column align="center" prop="upcount" label="地上层数" show-overflow-tooltip></el-table-column>
      <!-- 8 -->
      <el-table-column align="center" prop="downcount" label="地下层数" show-overflow-tooltip></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
    <router-view></router-view>
  </div>
</template>

<script src="./constructTable">
</script>
<style lang="scss" scoped>
// ``````````````````````
.opeart {
  display: flex;
  justify-content: flex-end;
}
.headBox {
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.el-input {
  width: 50%;
  padding: 12px;
}
.el-select {
  padding: 12px;
  margin-left: 5px;
}
</style>