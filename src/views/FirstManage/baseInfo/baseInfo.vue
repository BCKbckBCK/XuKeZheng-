<template>
  <div class="chooesProject">
    <div class="headBox">
      <h1>建设单位基本信息</h1>
      <div class="Obut">
        <el-button>保存</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      width="100%"
      :span-method="arraySpanMethod"
      :show-header="false"
      border
    >
      <!-- 1 -->
      <el-table-column align="right" prop="date" width="200"></el-table-column>
      <!-- 2 -->
      <el-table-column>
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.td1=='1'"
            type="text"
            
            placeholder="四川省实验开发有限公司"
            v-model="developmentOrganization"
          ></el-input>
          <el-select  v-if="scope.row.td2=='2'" v-model="value1">
            <el-option v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">四川省</el-option>
          </el-select>
          <el-select  v-if="scope.row.td2=='2'" v-model="value2">
            <el-option v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">成都市</el-option>
          </el-select>
          <el-select  v-if="scope.row.td2=='2'" v-model="value3">
            <el-option v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">新津县</el-option>
          </el-select>
          <el-select  v-if="scope.row.td3=='3'" v-model="value4">
            <el-option v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">有限责任</el-option>
          </el-select>
          <el-input v-if="scope.row.td4=='4'" type="text"  v-model="legalPersonPhone"></el-input>
          <el-input v-if="scope.row.td5=='5'" type="text"  v-model="contactPhone"></el-input>
          <el-input v-if="scope.row.td6=='6'" type="text"  v-model="fzrzc"></el-input>
          <el-input v-if="scope.row.td7=='7'" type="text"  v-model="jsfzr"></el-input>
          <el-input v-if="scope.row.td8=='8'" type="text"  v-model="fzwdh"></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="right" prop="address" width="200"></el-table-column>
      <!-- 4 -->
      <el-table-column width="auto">
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.co2=='2'"
            type="text"
            
            placeholder="四川省实成都市"
            v-model="address"
          ></el-input>
          <el-input v-if="scope.row.co3=='3'" type="text"  v-model="fddbr"></el-input>
          <el-input v-if="scope.row.co4=='4'" type="text"  v-model="lzr"></el-input>
          <el-input v-if="scope.row.co5=='5'" type="text"  v-model="jsdwxmfzr"></el-input>
          <el-input v-if="scope.row.co6=='6'" type="text"  v-model="jsdwxmfzrdh"></el-input>
          <el-input v-if="scope.row.co7=='7'" type="text"  v-model="jsdwxmfzrzc"></el-input>
        </template>
      </el-table-column>
    </el-table>

    <!-- 工程基本信息 -->
    <p>工程基本信息</p>
    <el-table
      :data="tableData1"
      width="100%"
      :span-method="arraySpanMethod1"
      size="medium"
      :show-header="false"
      border
      style="margin-bottom:50px"
      :fit="true"
    >
      <!-- 1 -->
      <el-table-column align="right" fixed prop="date" width="200" class="firstcolumn"></el-table-column>
      <!-- 2 -->
      <el-table-column class="second">
        <template slot-scope="scope">
          <el-input
            class="constructDepartment"
            v-if="scope.row.td1=='1'"
            type="text"
            
            placeholder="德阳市庐山北路与青衣路交叉口"
            v-model="itemName"
          ></el-input>
          <el-select  v-if="scope.row.td2=='2'" v-model="value5">
            <el-option v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">市政基础</el-option>
          </el-select>
          <el-input v-if="scope.row.td3=='3'" type="text"  v-model="v9"></el-input>
          <el-input
            class="textarea"
            v-if="scope.row.td4=='4'"
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            show-word-limit
            style="width:800px;padding:3px"
          ></el-input>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="right" prop="address" width="200"></el-table-column>
      <!-- 4 -->
      <el-table-column>
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.td1=='1'"
            type="text"
 
            placeholder="德阳市庐山北路与青衣路交叉口"
            v-model="projectName"
          ></el-input>
          <el-select style="line-height:60px"  v-if="scope.row.td2=='2'" v-model="value6">
            <el-option v-for="item in options6"
              :key="item.value"
              :label="item.label"
              :value="item.value">四川省</el-option>
          </el-select>
          <el-select style="height:40px"  v-if="scope.row.td2=='2'" v-model="value7">
            <el-option v-for="item in options7"
              :key="item.value"
              :label="item.label"
              :value="item.value">德阳市</el-option>
          </el-select>
          <el-select  v-if="scope.row.td2=='2'" v-model="value8">
            <el-option v-for="item in options8"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script src="./baseInfo"></script>

<style lang="scss" scoped>
// `````````````````````
.headBox {
  background-color: #d4f0fe;
  border: 1px solid #94caf8;
}
.el-input {
  width: 50%;
  padding: 3px;
}
.el-select {
  width: 200px;
  padding: 3px;
}
.Obut {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
</style>