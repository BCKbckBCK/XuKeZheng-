<template>
  <div class="firstHandle">
    <!-- 第1个表格 -->
    <div class="headBox">
      <h1>申报表</h1>
      <div class="user">
        <a class="help">? 帮助</a>
        <div class="avg"></div>
        <div class="nickname">July</div>
      </div>
    </div>
    <el-table :data="tableData" width="100%" border>
      <!-- 1 -->
      <el-table-column align="center" style="font-size:20px" label="业务名" width="500">
        <template slot="header">
          <div style="height:80px;line-height:80px">业务名</div>
        </template>
        <template slot-scope="scope">
          <a v-if="scope.row.td1=='1'">业务11231232</a>
          <a v-if="scope.row.td2=='2'">业务13123124113</a>
          <a v-if="scope.row.td3=='3'">业务113231234124</a>
          <a v-if="scope.row.td4=='4'">业务1312312312434</a>
          <a v-if="scope.row.td5=='5'" style="line-height:60px">业务1213123123</a>
        </template>
      </el-table-column>
      <!-- 2 -->
      <el-table-column align="center" label="审核状态">
        <template slot-scope="scope">
          <span v-if="scope.row.td1=='1'">未审核</span>
          <span v-if="scope.row.td2=='2'">未审核</span>
          <span v-if="scope.row.td3=='3'">未审核</span>
          <span v-if="scope.row.td4=='4'">未审核</span>
          <span v-if="scope.row.td5=='5'" style="color:green;">已通过</span>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="center" label="是/否已提交">
        <template slot-scope="scope">
          <span v-if="scope.row.td1=='1'">未提交</span>
          <span v-if="scope.row.td2=='2'">未提交</span>
          <span v-if="scope.row.td3=='3'" style="color:black;line-height:60px">已撤回</span>
          <span v-if="scope.row.td4=='4'">未提交</span>
          <span v-if="scope.row.td5=='5'" style="color:green">已提交</span>
        </template>
      </el-table-column>
      <!-- 4 -->
      <el-table-column align="center" label="撤回上报">
        <template slot-scope="scope">
          <b v-if="scope.row.td1=='1'">撤回上报</b>
          <b v-if="scope.row.td2=='2'">撤回上报</b>
          <b v-if="scope.row.td3=='3'" style="color:black">撤回上报</b>
          <b v-if="scope.row.td4=='4'">撤回上报</b>
          <b v-if="scope.row.td5=='5'"></b>
        </template>
      </el-table-column>
      <!-- 5 -->
      <el-table-column align="center" label="删除">
        <template slot-scope="scope">
          <el-button v-if="scope.row.td1=='1'" type="submit" @click="goChoose(item)">删除</el-button>
          <el-button v-if="scope.row.td2=='2'" type="submit" @click="goChoose(item)">删除</el-button>
          <el-button v-if="scope.row.td4=='4'" type="submit" @click="goChoose(item)">删除</el-button>
        </template>
      </el-table-column>
      <!-- 6 -->
      <el-table-column align="center" label="打印">
        <template slot="header">
          打印<a @click="selectAll">(全选)</a><a @click="cancel">(取消)</a>
        </template>
        <template slot-scope="scope">
          <el-checkbox v-model="checked1" v-if="scope.row.td1=='1'" @click="changeCheckbox1"></el-checkbox>
          <el-checkbox v-model="checked2" v-if="scope.row.td2=='2'" @click="changeCheckbox2"></el-checkbox>
          <el-checkbox v-model="checked3" v-if="scope.row.td3=='3'" @click="changeCheckbox3"></el-checkbox>
          <el-checkbox v-model="checked4" v-if="scope.row.td4=='4'" @click="changeCheckbox4"></el-checkbox>
          <el-checkbox v-model="checked5" v-if="scope.row.td5=='5'" @click="changeCheckbox5"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
    <div class="sure">
      <el-button>确定</el-button>
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

<script src="./declarationForm.js">
</script>

<style lang="scss" scoped>
.sure {
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
}
.el-table {
  font-size: 20px;
}
b,
span {
  color: red;
  cursor: pointer;
}
a {
  color: blue;
}
.el-button {
  margin: 15px 0px;
}
.Onew {
  display: flex;
  justify-content: center;
}
.header {
  width: 100%;
  height: 30px;
  border: 1px solid lightblue;
  background-color: #e5e5ff;
  border-bottom: none;
}

.avg {
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  background-color: grey;
  border-radius: 50px;
  padding: 3px;
  box-sizing: border-box;
}
.headBox {
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
  display: flex;
  justify-content: space-between;
  line-height: 100px;
}
.el-input {
  padding: 12px;
}
.el-select {
  padding: 12px;
  margin-left: 5px;
}
.user {
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 50px;
}
</style>