<template>
  <div class="chooesProject">
        <router-view></router-view>
    <div class="headBox">
      <h1>建设工程规划许可证</h1>
      <div class="opeart">
        <el-button class="store">保存</el-button>
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
      <el-table-column align="right" prop="date" width="200" class="firstcolumn"></el-table-column>
      <!-- 2 -->
      <el-table-column class="second">
        <template slot-scope="scope">
          <el-select v-if="scope.row.td1=='1'" v-model="value">
            <el-option v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <el-input
            v-if="scope.row.td2=='2'"
            type="text" 
            placeholder="测试2016工程"
            v-model="v1"
          ></el-input>
          <el-input v-if="scope.row.td3=='3'" type="text" v-model="v2"></el-input>
          <div v-if="scope.row.td4=='4'">
            <el-input type="text" v-model="v3"></el-input>（ m
            <sup>2</sup>）
          </div>
          <el-input
            class="textarea"
            v-if="scope.row.td5=='5'"
            type="textarea"
            placeholder="测试2016工程"
            v-model="v4"
            show-word-limit
          ></el-input>
          <el-input
            class="textarea"
            v-if="scope.row.td6=='6'"
            type="textarea"
            placeholder="测试2016工程"
            v-model="v5"
            show-word-limit
          ></el-input>
          <el-input
            class="textarea"
            v-if="scope.row.td7=='7'"
            type="textarea"
            placeholder="测试2016工程"
            v-model="v6"
            show-word-limit
          ></el-input>
          <el-input v-if="scope.row.td8=='8'" type="text" v-model="v7" ></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="right" prop="address" width="150"></el-table-column>
      <!-- 4 -->
      <el-table-column width="auto">
        <template slot-scope="scope">
          <el-input type="text"  v-model="v8" v-if="scope.row.td2=='2'"></el-input>
          <div v-if="scope.row.td4=='4'" style="margin-left:5px">
            <sub>选字第</sub>(
            <el-input type="text"  v-model="v9"></el-input>)
          </div>
          <el-input type="text"  v-model="v10" v-if="scope.row.td8=='8'"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <span class="display-inline">材料信息</span>
      <div class="opeart display-inline">
        <el-button @click="Add()">新增</el-button>
        <el-button>删除</el-button>
        <el-button>刷新</el-button>
      </div>
    </div>

  </div>
</template>

<script src="./constructionProjectLicence.js"></script>

<style lang="scss" scoped>
.display-inline{
  display: inline-block;
}
.footer {
  height: 80px;
  // line-height: 80px;
  border: 1px solid lightblue;
  background-color: lightblue;
}
.textarea{
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
}
.opeart {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
</style>