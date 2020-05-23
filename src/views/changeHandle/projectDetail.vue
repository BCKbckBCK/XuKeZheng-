<!--  -->
<template>
  <div>
      <div class="div1">
          <div class="div3">
          专业承包单位
          </div>
          <div class="div2">
              <el-button class="button1" @click="lookCompany()" >新增</el-button>    
               <el-button class="button1" @click="shanChu()" >删除</el-button>     
                <el-button class="button1" @click="refresh()" >刷新</el-button>        
                </div>     
           </div>
           <el-table :data='form' border class="table1"
    style="width: 100%"
    :header-cell-style="{'text-align':'center',background :'#E7F6FD'}"
    :cell-style="{'text-align':'center'}">>
     <el-table-column prop="c1" label="口" width="50px">

         <template slot-scope="scope">
             <el-checkbox v-model="checked"></el-checkbox>
         </template>
     </el-table-column>
    <el-table-column prop="c2" label="序号" width="50px"></el-table-column>
     <el-table-column  label="名称" width="300px">
         <template slot-scope="scope">
             <a style="color:#57ACD7" @click="lookCompany()">{{scope.row.c3}}</a>

         </template>
     </el-table-column>
      <el-table-column prop="c4"  width="300px" label="建筑面积/长度（平方米/米）"></el-table-column>
       <el-table-column prop="c5" label="其中：地上"></el-table-column>
        <el-table-column prop="c6" label="地下"></el-table-column>
         <el-table-column prop="c7" label="地上层数"></el-table-column>
          <el-table-column prop="c8" label="地下层数"></el-table-column>

           </el-table>
          <div class="page1">
    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>


<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>确认要删除吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>



</div>

</template>

<script>
export default {
  data () {
    return {
        dialogVisible:false,
        checked:false,
        form:[
            {
              c1:'',
              c2:'1',
              c3:'项目001',
              c4:'2500',
              c5:'2000',
              c6:'500',
              c7:'4',
              c8:'1',
            }
        ]
    }
  },
  methods:{
      lookCompany(){
this.$router.push({path:'lookCompany'})
      },
      shanChu(){
          this.dialogVisible=true;
      },
      addCompany(){
          this.$router.push({path:'company'})
      },
      refresh(){
          this.$router.go(0)
      },
      
  }
}

</script>

<style scoped>
.table1{
    margin-top: 10px;
}
.page1{
      margin-top: 20px;
}

.div3{
    
}
.div1{
    display: flex;
    align-items: center;
    background-color: #D7EEFA;
     height: 60px;
      border-style: solid;
     border-color: #A2C3E5;
}
.div2{
    margin-left: 700px;
   

}
.button1{
    
     border-style: solid;
     border-color: #A2C3E5;
}

</style>
