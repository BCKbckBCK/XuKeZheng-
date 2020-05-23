<template>
  <div class="chooesProject">
    <div class="headBox">
      <h1>工程选择</h1>
    </div>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      width="100%"
      :span-method="arraySpanMethod"
      size="medium"
      :show-header="false"
      border
    >
      <!-- 1 -->
      <el-table-column align="center" width="200" prop="name" class="firstcolumn"></el-table-column>
      <!-- 2 -->
      <el-table-column class="second">
        <template slot-scope="scope">
          <el-input v-if="scope.row.td1=='1'" type="text" placeholder="2016" v-model="v1"></el-input>
          <el-input v-if="scope.row.td2=='2'" type="text" placeholder="2016年施工许可证初次办理" v-model="v2"></el-input>
          <div v-if="scope.row.td3=='3'">
            <el-input type="text" v-model="v3"></el-input>
            <!-- 上传文件 -->
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button>选择文件</el-button>
            </el-upload>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="issure">
      <el-button @click="goFill">确认</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script src="./chooseProject.js"></script>
<style lang="scss" scoped>
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
  margin-left: 5px;
}
.issure {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d4f0fe;
  padding: 12px;
}
.upload-demo{
  display: inline-block;
}
</style>