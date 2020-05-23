<!--  -->
<template>
  <div>


<div class="div1">
 <label>附件信息</label>
</div>

<div class="div2">
    <el-button class="button1" @click="refresh()">刷新</el-button>
</div>
<el-table :data="form1" :header-cell-style="{'text-align':'center'}" border>
  <el-table-column prop="c0" label="序号" width="100px" align="center">


</el-table-column>

<el-table-column prop="c1" label="资料名称" width="500px">


</el-table-column>

<el-table-column prop="c2" label="需要文件数量" align="center" width="150px">

    
</el-table-column>


<el-table-column prop="c3" label="已上传文件数量" align="center" width="150px">

    
</el-table-column>



<el-table-column label="是/否 上传"  align="center">
  <template slot-scope="scope">
  <div class="div12" v-if="scope.row.td==0">
      <span> 否</span>
      <el-upload>
 <el-button  class="button11" >上文件传</el-button>
</el-upload>
  </div>
<div class="div12" v-if="scope.row.td==1">
      <span> 否</span>
      <el-upload>
 <el-button  class="button11" >上文件传</el-button>
</el-upload>
  </div><div class="div12" v-if="scope.row.td==2">
      <span> 否</span>
      <el-upload>
 <el-button  class="button11" >上文件传</el-button>
</el-upload>
  </div><div class="div12" v-if="scope.row.td==3">
      <span> 否</span>
      <el-upload>
 <el-button  class="button11" >上文件传</el-button>
</el-upload>
  </div><div class="div12" v-if="scope.row.td==4">
      <span> 否</span>
      <el-upload>
 <el-button  class="button11" >上文件传</el-button>
</el-upload>
  </div>
  <div class="div12" v-if="scope.row.td==5">
      <span> 否</span>
      <el-upload>
 <el-button  class="button11" >上文件传</el-button>
</el-upload>
  </div>

  </template>
</el-table-column>

</el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
         form1:[
        {
          c0:'1',
          td:'0',
            c1:'建设工程许可证变更登记申请表',
            c2:'1',
            c3:'',
            c4:'',
        },
          {
            c0:'2',
              td:'1',
            c1:'已取得的施工许可证正本一份，副本两份',
            c2:'3',
            c3:'',
            c4:'',
        },  {
            c0:'3',
              td:'2',
            c1:'申请单位法定代表人证明书',
            c2:'1',
            c3:'',
            c4:'',
        },  {
            c0:'4',
              td:'3',
            c1:'法人授权委托证明书',
            c2:'1',
            c3:'',
            c4:'',
        }, 
         {
            c0:'5',
              td:'4',
            c1:'工程质量终身承诺责任书',
            c2:'1',
            c3:'',
            c4:'',
        },  {
            c0:'6',
              td:'5',
            c1:'申请单位法定代表人证明书',
            c2:'1',
            c3:'',
            c4:'',
        }, 

    ]
    }
   
  },
  methods:{
      refresh(){
          this.$router.go(0)
      }
  }
}

</script>

<style  scoped>
.upload1{
    
    background-color: #CCE7FE;
    border-style: solid;
    border-color: #ADCBE7;
   margin: 6px;
    margin-left: 20px;
}
.div12{
    margin-left: 50px;
    display: flex;
    align-items: center;
}
.div1{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #D4F0FE;
     border-style: solid;
    border-color:#94CAF8
}
.div2{
     display: flex;
    align-items: center;
    background-color: #D4F0FE;
     margin-top: 3px;
     height: 60px;
      border-style: solid;
    border-color:#94CAF8
}
.button1{
  
    margin-left: 1000px;
   
    border-style: solid;
    border-color:#94CAF8
}
.button11{
  margin: 10px;
    margin-left:30px;
   
    border-style: solid;
    border-color:#94CAF8
}
</style>
