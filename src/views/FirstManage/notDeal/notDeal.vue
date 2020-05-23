<template>
  <div class="notDeal">
    <div class="headBox">
      <h1>项目环节材料</h1>
      <div class="opeart">
        <el-button>保存</el-button>
      </div>
    </div>
    <div class="block">选址意见书信息:</div>
    <el-table
      :data="tableData"
      width="100%"
      border
      :show-header="false"
      :span-method="arraySpanMethod"
    >
      <!-- 1 -->
      <el-table-column align="right" prop="date" width="200"></el-table-column>
      <!-- 2 -->
      <el-table-column>
        <template slot-scope="scope">
          <el-select v-if="scope.row.td1=='1'" v-model="value">
            <el-option v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <el-input
            class="textarea"
            v-if="scope.row.td2=='2'"
            type="textarea"
            placeholder="测试2016工程"
            v-model="reason"
            show-word-limit
          ></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="mater headBox">
      <span>材料信息</span>
      <div class="opeart">
        <el-button>新增</el-button>
        <el-button>删除</el-button>
        <el-button>刷新</el-button>
      </div>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script src="./notDeal"></script>
<style lang="scss" scoped>
.mater{
    display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.block{
  height: 50px;
  line-height: 50px;
}
.textarea {
  width: 800px;
  padding: 3px;
}
.headBox {
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.el-input {
  width: 50%;
  padding: 3px;
}
.el-select {
  padding: 3px;
  // margin-left: 5px;
}
.opeart {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
</style>