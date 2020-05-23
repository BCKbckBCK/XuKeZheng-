<template>
  <div class="bidInfo">
    <h1>项目环节材料</h1>
    <div class="headBox">
      <div class="opeart">
        <p>合同备案办理</p>
        <el-button >保存</el-button>
      </div>
      
    </div>
    <!-- 办理选项 -->

    <el-table
      :data="One"
      @selection-change="handleSelectionChange"
      border
      :show-header="false"
      :span-method="arraySpanMethod"
    >
      <!-- 1 -->
      <el-table-column align="right" prop="number" width=500></el-table-column>
      <!-- 2 -->
      <el-table-column align="left" type="selection" width="1000">
        <template slot-scope="scope">
          <el-select v-if="scope.row.td1=='1'" v-model="value">
            <el-option v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <!-- `` -->
    <div class="flex">
      <span>合同备案信息</span>
      <div class="opeart">
        <el-button @click="fill">新增</el-button>
        <el-button>删除</el-button>
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
      <el-table-column align="center" type="selection" width="50"></el-table-column>
      <!-- 2 -->
      <el-table-column align="center" prop="number" label="序号" width="50"></el-table-column>
      <!-- 3 -->
      <el-table-column align="center" prop="name" label="工程名称">
        <!-- <template slot-scope="scope">
          <a v-if="scope.row.name=='测试2016工程'" style="color:lightblue">{{ scope.row.name }}</a>
        </template>-->
      </el-table-column>
      <!-- 4 -->
      <el-table-column align="center" prop="bidtype" label="招标类型" show-overflow-tooltip></el-table-column>
      <!-- 5 -->
      <el-table-column align="center" prop="getbid" label="中标单位" width="400"></el-table-column>
      <!-- 6 -->
      <el-table-column align="center" prop="bidcode" label="中标通知书编号"></el-table-column>
      <!-- 7 -->
      <el-table-column align="center" prop="allarea" label="总面积(平方米)"></el-table-column>
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
  </div>
</template>

<script src="./contractRecord.js"></script>

<style lang="scss" scoped>
// ````````````````````````
.flex{
  display: flex;
  line-height: 40px;
  justify-content: space-between;
}
.textarea {
  width: 800px;
  height: 75px;
  padding: 3px;
}
.headBox {
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.el-input {
  padding: 3px;
}
.el-select {
  padding: 3px;
  // margin-left: 5px;
}
.opeart {
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
}
</style>