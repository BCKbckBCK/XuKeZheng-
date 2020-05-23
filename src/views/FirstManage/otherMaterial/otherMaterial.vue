<template>
  <div class="otherMaterial">
    <div class="headBox">
      <h1>其他材料</h1>
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
      <el-table-column>
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.td1=='1'"
            type="text"
            placeholder="测试2016工程"
            v-model="v1"
          ></el-input>
          <el-input type="text" v-if="scope.row.td2=='2'" placeholder="四川省实验有限公司" v-model="v2"></el-input>
          <el-input v-if="scope.row.td3=='3'" type="textarea" class="textarea" v-model="v3"></el-input>
          <el-input v-if="scope.row.td4=='4'" type="textarea" class="textarea" v-model="v4"></el-input>
          <el-input
            class="textarea"
            v-if="scope.row.td5=='5'"
            type="textarea"
            v-model="v5"
            show-word-limit
          ></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="center" prop="name" width="150"></el-table-column>
      <!-- 4 -->
      <el-table-column width="auto">
        <template slot-scope="scope">
          <el-input type="text" v-model="v6" v-if="scope.row.td1=='1'"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <!-- 页脚3操作 -->
    <div class="flex">
      <span>材料信息</span>
      <div>
        <el-button>新建</el-button>
        <el-button>删除</el-button>
        <el-button>刷新</el-button>
      </div>
    </div>
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

<script src="./otherMaterial"></script>

<style lang="scss" scoped>
// `````````
.flex {
  display: flex;
  height: 44px;
  line-height: 44px;
  justify-content: space-between;
  align-items: center;
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.textarea {
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