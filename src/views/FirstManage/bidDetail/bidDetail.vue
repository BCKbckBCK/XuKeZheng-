<template>
  <div class="bidInfo">
    <div class="headBox">
      <h1>招投标信息</h1>
      <div class="storeBack">
        <el-button>保存</el-button>
        <el-button @click="goback()">返回</el-button>
      </div>
    </div>

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
          <el-input v-if="scope.row.td1=='1'" placeholder="德阳市庐山路" v-model="xmmc"></el-input>
          <el-input v-if="scope.row.td2=='2'" placeholder="四川省实验开发" v-model="jsdw"></el-input>
          <el-input v-if="scope.row.td3=='3'" v-model="xmbh"></el-input>
          <el-input type="textarea" style="width:550px;padding:5px" v-if="scope.row.td4=='4'" v-model="jsgm"></el-input>
          <el-select v-if="scope.row.td5=='5'" style="padding:5px" v-model="zbfs">
            <el-option v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <div v-if="scope.row.td6=='6'">
            <el-input v-model="zbdw"></el-input>
            <el-button  type="file">添加...</el-button>
          </div>
          <el-input v-if="scope.row.td7=='7'" v-model="zbqyzzdj"></el-input>
          <div v-if="scope.row.td8=='8'">
            <el-input v-model="zbje"></el-input>万元
          </div>
          <el-input v-if="scope.row.td9=='9'" v-model="zbtzsbh"></el-input>
          <div v-if="scope.row.td10=='10'">
            <el-input v-model="zbdldwmc"></el-input>
            <el-button  type="file">添加...</el-button>
          </div>
          <div v-if="scope.row.td11=='11'">
            <el-input v-model="xmfzrxm"></el-input>
            <el-button  type="file">添加...</el-button>
          </div>
          <el-select v-if="scope.row.td12=='12'" style="padding:5px" v-model="zjlx">
            <el-option v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <!-- 3 -->
      <el-table-column align="center" prop="thirdcol" width="180"></el-table-column>
      <!-- 4 -->
      <el-table-column align="left">
          <template slot-scope="scope">
          <el-input v-if="scope.row.td1=='1'" placeholder="德阳市庐山路与青衣路" v-model="gcmc"></el-input>
          <div v-if="scope.row.td2=='2'"><el-input v-model="zmj"></el-input>(m<sup>2</sup>)</div>
          <el-input v-if="scope.row.td3=='3'" v-model="xmbh"></el-input>
          
          <el-select v-if="scope.row.td5=='5'" style="padding:5px" v-model="zblx">
            <el-option v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <div v-if="scope.row.td6=='6'">
            <el-input v-model="zbdwzjjg"></el-input>
          </div>
          <el-input v-if="scope.row.td7=='7'" v-model="zbqyzzzsh"></el-input>
          <div v-if="scope.row.td8=='8'">
            <el-input v-model="zbrq"></el-input>
          </div>
          <el-input v-if="scope.row.td9=='9'" v-model="basj"></el-input>
          <div v-if="scope.row.td10=='10'">
            <el-input v-model="zbdldwzzjgdm"></el-input>
          </div>
          <!-- <div v-if="scope.row.td11=='11'">
            <el-input v-model="xmfzrxm"></el-input>
            <el-button  type="file">添加...</el-button>
          </div> -->
          <el-input v-if="scope.row.td12=='12'" style="padding:5px" v-model="zjhm"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <!-- 办理选项 -->
    <div class="footer">
      <span>材料信息</span>
      <div class="opeart">
        <el-button>新增</el-button>
        <el-button>删除</el-button>
        <el-button>刷新</el-button>
      </div>
    </div>
    <!-- 第二个表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData1"
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
      <el-table-column align="center" prop="name" label="材料名称">
        <!-- <template slot-scope="scope">
          <a v-if="scope.row.name=='测试2016工程'" style="color:lightblue">{{ scope.row.name }}</a>
        </template> -->
      </el-table-column>
      <!-- 4 -->
      <el-table-column align="center" prop="bidtype" label="上传时间" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script src="./bidDetail.js"></script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 42px;
  line-height: 42px;
  border: 1px solid lightblue;
  margin: 2px 0;
    background-color: #d4f0fe;
  //   background-color: lightblue;
}
.sel-left,
.sel-right {
  display: inline-block;
}
.sel-left {
  width: 40%;
  text-align: right;
}
.sel-right {
  width: 20%;
}
.opeart {
  float: right;
  margin-right: 5px;
}

.store {
  float: right;
}

.textarea {
  width: 90%;
  padding: 5px;
}
div {
  vertical-align: middle;
}

.storeBack{
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;
}
// ``````````````````````
.textarea{
  width: 800px;
  height: 75px;
  padding: 3px;
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
.opeart {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
}
</style>