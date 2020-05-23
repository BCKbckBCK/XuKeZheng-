<template>
  <div class="uoload">
    <div class="headBox">
      <h1>上传文件</h1>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :show-header="false"
      :span-method="arraySpanMethod"
    >
      <el-table-column align="right" prop="date" width="300"></el-table-column>
      <el-table-column align="left">
        <template slot-scope="scope">
          <el-input v-if="scope.row.td1=='1'" style="width:60%" v-model="fileName"></el-input>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            v-if="scope.row.td2=='2'"
            style="line-height:54px;padding-top:10px"
          >
            <el-button style="margin-left:3px">请选择文件</el-button>
            <div slot="tip" class="el-upload__tip"></div>
          </el-upload>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script src="./upload"></script>

<style lang="scss" scoped>
.el-table-column {
  // padding: 10px;
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