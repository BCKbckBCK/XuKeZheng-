<!--  -->
<template>
  <div>




<div class="div11"><label class="lable1">施工许可证延期办理</label></div>

<el-table :data="form" border :show-header="false" class="table1"
:span-method="arraySpanMethod"
>


<el-table-column align="center" width="300px">
    <template slot-scope="scope">
        <span v-if="scope.row.td=='0'">{{scope.row.c1}}</span>
        <span v-if="scope.row.td=='1'">{{scope.row.c1}}</span>
        <span v-if="scope.row.td=='2'">{{scope.row.c1}}</span>
        <el-popconfirm @onConfirm="queRen()"
  title="确定新增此业务吗？"
>
  <el-button slot="reference" v-if="scope.row.td=='3'"  class="button1" >确认</el-button>
</el-popconfirm>
        
        <el-button v-if="scope.row.td=='3'" class="button2">取消</el-button>
    </template>
</el-table-column>
<el-table-column align="left" width="500px">
    <template slot-scope="scope">
        <el-input v-if="scope.row.td=='0'" class="input31" ></el-input>
        <el-input v-if="scope.row.td=='1'" class="input32" ></el-input>
        <el-input v-if="scope.row.td=='2'" class="input32" ></el-input>
        <el-button v-if="scope.row.td=='2'" style=" margin-left: 20px;">选择...</el-button>
    </template>
</el-table-column>












</el-table>






  </div>
</template>

<script>
export default {
  data () {
    return {
        form:[
            {
                td:'0',
                c1:'年度：',
                c2:''
            },
             {
                 td:'1',
                c1:'申请业务名称：',
                c2:''
            },
             {
                 td:'2',
                c1:'工程名称：',
                c2:'222'
            },
             {
                 td:'3',
                c1:'',
                c2:''
            },
        ]
    
    }
  },
  methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 3) {
          if (columnIndex === 0) {
            return [1, 2];
          } 
        }
      },
      queRen(){
          this.$message({
          message: '业务新增成功！',
          type: 'success'
        });
      },
  }
}

</script>

<style  scoped>
.button1{
    margin: 10px;
}
.button2{
    margin: 10px;
}
.input31{
    width: 100px;
    padding: 3px;
}
.input32{
    width: 300px;
    padding: 3px;
}
.table1{
    margin-left: 200px;
    margin-top: 30px;
}
.lable1{
    padding: 30px;
    margin: 50px;
    color: #77BBDC;
   
}
.div11{
    margin-top: 50px;
}

</style>
