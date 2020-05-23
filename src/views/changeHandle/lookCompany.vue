<!--  -->
<template>
  <div>
<div class="div1">
 <label class="lable1">工程明细详细信息</label>
</div>

<div class="div2">
  
    <el-button class="button2" @click="open2()">保存</el-button>
</div>

<el-table :data="form" border
:header-cell-style="{'text-align':'center'}"
 :span-method="arraySpanMethod">

<el-table-column prop="c1" align="right" width="200px"></el-table-column>
<el-table-column prop="c2" >
    <template slot-scope="scope">
        <el-input v-if="scope.row.t1==='1'" v-model="input1" class="input1"></el-input>
       <div  v-if="scope.row.t1==='2'"> <el-input  v-model="input2" class="input2"></el-input>平方米/米</div>
        <div  v-if="scope.row.t1==='3'"> <el-input  v-model="input3" class="input3"></el-input>平方米/米</div>
           <div  v-if="scope.row.t1==='4'"> <el-input  v-model="input4" class="input3"></el-input>层</div>
            <el-input v-if="scope.row.t1==='5'" :rows="3" type="textarea" v-model="textarea" class="input5"></el-input>
    </template>
</el-table-column>
<el-table-column prop="c3" align="right" width="100px"></el-table-column>
<el-table-column prop="c4" >
    <template slot-scope="scope">
    <div  v-if="scope.row.t1==='3'"> <el-input  v-model="input6" class="input3"></el-input>平方米/米</div>
           <div  v-if="scope.row.t1==='4'"> <el-input v-model="input5"  class="input3"></el-input>层</div>
    </template>
</el-table-column>
</el-table>



  </div>
</template>

<script>
export default {
  data () {
    return {
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        textarea:'',
        form:[
            {
                t1:'1',
                c1:'单体工程名称：',
                c2:'',
                c3:'',
                c4:''
            },
              {
                   t1:'2',
                c1:'建筑面积/长度：',
                c2:'',
                c3:'',
                c4:''
            },
              {
                   t1:'3',
                c1:'其中：地上:',
                c2:'',
                c3:'地下:',
                c4:''
            }, 
              {
                   t1:'4',
                c1:'层数：地上:',
                c2:'',
                c3:'地下:',
                c4:''
            },
              {
                   t1:'5',
                c1:'备注：',
                c2:'',
                c3:'',
                c4:''
            }
            
        ]
    }
  },
   methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0||rowIndex === 1||rowIndex === 4) {
          if (columnIndex === 1) {
            return [1, 3];
          } 
        }

      },
        open2() {
        this.$message({
          message: '保存成功！',
          type: 'success'
        });
         this.$router.push({path:'projectDetail'})},
        goBack(){
            this.$router.push({path:'index'})
        },
      }
}

</script>

<style  scoped>
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
  
    margin-left:900px;
    background-color: #D4F0FE;
    border-style: solid;
    border-color:#94CAF8
}
.button2{
  
   margin-left:1000px;
    
    border-style: solid;
    border-color:#94CAF8
}
.lable1{
    margin-left: 20px;
}
.input1{
    padding: 5px;
    width: 400px;
}
.input2{
    padding: 5px;
    width: 300px;
}
.input3{
    padding: 5px;
    width: 200px;
}
.input5{
    padding: 5px;
    width: 900px;
}
</style>
