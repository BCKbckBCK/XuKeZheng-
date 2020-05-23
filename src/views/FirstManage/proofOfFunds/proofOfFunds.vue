<template>
  <div class="bidInfo">
    <div class="headBox">
      <h1>资金保函或证明</h1>
      <div class="storeBack">
        <el-button>保存</el-button>
        <el-button @click="go">返回</el-button>
      </div>
    </div>
    <!-- table -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border
      :show-header="false"
      :span-method="arraySpanMethod"
    >
      <!-- 1 -->
      <el-table-column style="margin:0 5px" align="center" prop="firstcol" width="180"></el-table-column>
      <!-- 2 -->
      <el-table-column align="left">
        <template slot-scope="scope">
          <el-input v-if="scope.row.td1=='1'" placeholder="测试2016.2.22" v-model="xmmc"></el-input>
          <el-input v-if="scope.row.td2=='2'" placeholder="四川省实验开发有限公司" v-model="jsdw"></el-input>
          <el-select v-if="scope.row.td3=='3'" v-model="value">
            <el-option v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <el-input
            type="textarea"
            class="textarea"
            v-if="scope.row.td4=='4'"
            placeholder="安全保函"
            v-model="jsgm"
          ></el-input>
          <el-input v-if="scope.row.td5=='5'" placeholder="袁" v-model="zbfs"></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="center" prop="thirdcol" width="180"></el-table-column>
      <!-- 4 -->
      <el-table-column align="left">
        <template slot-scope="scope">
          <el-input v-if="scope.row.td1=='1'" placeholder="测试2016工程" v-model="gcmc"></el-input>
          <el-input v-if="scope.row.td5=='5'" v-model="zbqyzzzsh"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <!-- 办理选项 -->
    <div class="footer">
      <span>材料信息</span>
      <div class="opeart">
        <el-button @click="add">新增</el-button>
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
      :total="400"
    ></el-pagination>
  </div>
</template>

<script src="./proofOfFunds.js">
</script>

<style lang="scss" scoped>
div {
  vertical-align: middle;
}
.footer {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.storeBack {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
// ``````````````````````
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
  // margin-left: 2px;
}
.opeart {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
</style>