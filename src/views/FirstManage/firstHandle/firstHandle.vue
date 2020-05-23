<template>
  <div class="firstHandle">
        
    <!-- 第1个表格 -->
    <div class="headBox">
      <h1>施工许可证管理（初次办理）</h1>
    </div>
    <el-table
      :data="tableData"
      width="100%"
      :span-method="arraySpanMethod"
      size="medium"
      :show-header="false"
      border
    >
      <!-- 1 -->
      <el-table-column align="right" fixed prop="date" class="firstcolumn"></el-table-column>
      <!-- 2 -->
      <el-table-column style="float:left">
        <template slot-scope="scope">
          <el-input v-if="scope.row.td1=='1'" type="text" v-model="v1"></el-input>
          <el-input v-if="scope.row.td2=='2'" type="text" v-model="v2"></el-input>
          <el-select v-if="scope.row.td3=='3'" v-model="value1">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >--全部--</el-option>
          </el-select>
          <el-input v-if="scope.row.td4=='4'" type="text" v-model="v3"></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->

      <el-table-column align="center" prop="address"></el-table-column>
      <!-- 4 -->
      <el-table-column width="600">
        <template slot-scope="scope">
          <el-select v-if="scope.row.td1=='1'" type="text" v-model="value2">
            <el-option  v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">四川省</el-option>
          </el-select>
          <el-select v-if="scope.row.td1=='1'" type="text" v-model="value3">
            <el-option v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">成都市</el-option>
          </el-select>
          <el-select v-if="scope.row.td1=='1'" type="text"  v-model="value4">
            <el-option v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">****</el-option>
          </el-select>
          <!-- <el-input v-if="scope.row.td2=='2'" type="text" ></el-input> -->
          <el-select v-if="scope.row.td3=='3'"  v-model="value5">
            <el-option v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">--全部--</el-option>
          </el-select>
          <el-input v-if="scope.row.td4=='4'" type="text" v-model="v5"></el-input>
        </template>
      </el-table-column>
      <!-- 5 -->
      <el-table-column>
        <template slot-scope="scope">
          <div class="Onew">
            <el-button class="findOut" type="submit">查询</el-button>
            <el-button type="submit" @click="goChoose">新增业务</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 第2个表格 -->
    <el-table class="result" :data="tableData1" border style="width: 100%">
      <el-table-column align="center" fixed prop="date" label="序号" width="80"></el-table-column>
      <el-table-column align="center" prop="name" label="工程名称" width="600"></el-table-column>
      <el-table-column align="center" prop="province" label="工程所属地" width="120"></el-table-column>
      <el-table-column align="center" prop="city" label="建设地址" width="120"></el-table-column>
      <el-table-column align="center" prop="address" label="申报日期" width="300"></el-table-column>
      <el-table-column align="center" prop="zip" label="上报状态" width="120"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text">上报</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="审核结果" width="120"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
 <router-view />
  </div>
</template>

<script src="./firstHandle.js">
</script>

<style lang="scss" scoped>
.Onew {
  display: flex;
  justify-content: center;
}
.el-input {
  width: 80%;
}
.firstcolumn {
  display: flex;
  justify-content: flex-end;
}
.column4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  width: 100%;
  height: 30px;
  border: 1px solid lightblue;
  background-color: #e5e5ff;
  border-bottom: none;
}
.result {
  margin-top: 10px;
}
.headBox {
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.el-input {
  // width: 50%;
  padding: 3px;
}
.el-select {
  padding: 3px;
  // margin-left: 5px;
}
</style>