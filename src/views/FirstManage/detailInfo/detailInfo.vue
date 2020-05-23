<template>
  <div class="chooesProject">
    <div class="headBox">
      <h1>建筑工程项目明细信息</h1>
      <div class="opeart">
        <el-button>保存</el-button>
      </div>
    </div>
    <!-- 工程基本信息 -->
    <el-table
      :data="tableData"
      width="100%"
      :span-method="arraySpanMethod"
      size="medium"
      :show-header="false"
      border
    >
      <!-- 1 -->
      <el-table-column align="center" prop="date" width="200" class="firstcolumn"></el-table-column>
      <!-- 2 -->
      <el-table-column class="second">
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.td1=='1'"
            type="text"
            
            placeholder="测试2016工程"
            v-model="itemName"
          ></el-input>
          <div v-if="scope.row.td2=='2'">
            <el-input type="text" v-model="v1"></el-input>(平方米/米)
          </div>
          <div v-if="scope.row.td3=='3'">
            <el-input type="text" v-model="v2" ></el-input>平方米/米
          </div>
          <div v-if="scope.row.td4=='4'">
            <el-input type="text" v-model="v3"></el-input>层
          </div>
          <el-input
            class="textarea"
            v-if="scope.row.td5=='5'"
            type="textarea"
            placeholder="测试2016工程"
            v-model="textarea"
            show-word-limit
          ></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="center" prop="address" width="50"></el-table-column>
      <!-- 4 -->
      <el-table-column width="auto">
        <template slot-scope="scope">
          <div v-if="scope.row.td3=='3'">
            <el-input type="text"  v-model="v4"></el-input>平方米/米
          </div>
          <div v-if="scope.row.td4=='4'">
            <el-input type="text"  v-model="v5"></el-input>层
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script src="./detailInfo"></script>

<style lang="scss" scoped>
// `````````
.textarea{
  width: 800px;
  // height: 75px;
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