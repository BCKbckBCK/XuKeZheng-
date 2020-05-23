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

<el-table-column prop="c1" label="资料名称">


</el-table-column>

<el-table-column prop="c2" label="需要文件数量" align="center">

    
</el-table-column>


<el-table-column prop="c3" label="已上传文件数量" align="center">

    
</el-table-column>



<el-table-column label="是/否 上传"  align="center">
  <template slot-scope="scope">
  <div class="div12" v-if="scope.row.td==1">
      <span> 否</span>
      <el-upload action="">
        <el-button class="button11">
上传文件</el-button>
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
            c1:'新，改，扩建建设项目提交以下申报材料：',
            c2:'',
            c3:'',
            c4:'',
        },
          {
              td:'1',
            c1:'建筑工程施工许可证申请表原件一式两份。',
            c2:'2',
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
    margin-left: 120px;
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
  
    margin-left: 30px;
   margin: 20px;
    border-style: solid;
    border-color:#94CAF8
}
</style>
