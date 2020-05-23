<!--  -->
<template>
  <div>
      <div class="div1">
          <div class="div3">
        勘察单位
          </div>
          <div class="div2">
              <el-button class="button1" @click="addCompany()" >新增</el-button>    
               <el-button class="button1" @click="shanChu()" >删除</el-button>     
                <el-button class="button1" @click="refresh()" >保存</el-button>        
                </div>     
           </div>
           <el-table :data='form' border class="table1"
    style="width: 100%"
    :header-cell-style="{'text-align':'center',background :'#E7F6FD'}"
    :cell-style="{'text-align':'center'}">>
     <el-table-column prop="checkState" label="口" width="50px">

         <template slot-scope="scope">
             <el-checkbox v-model="checked"></el-checkbox>
         </template>
     </el-table-column>
    <el-table-column prop="number" label="序号" width="50px"></el-table-column>
     <el-table-column  label="单位名称" width="500px">
         <template slot-scope="scope">
             <a style="color:#57ACD7" @click="lookCompany()">{{scope.row.unitName}}</a>

         </template>
     </el-table-column>
      <el-table-column prop="legalPerson" label="法定代表人"></el-table-column>
       <el-table-column prop="qualification" label="主项资质"></el-table-column>
        <el-table-column prop="contact" label="联系人"></el-table-column>
         <el-table-column prop="state" label="状态"></el-table-column>

           </el-table>
          <div class="page1">
    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="0"
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
               number:'1',
               unitName:'四川中友鸿发消防工程有限公司',
               legalPerson:'刘强',
               qualification:'',
               contact:'刘强',
               state:''
            }
        ]
    }
  },
  methods:{
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }, handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
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
        this.$message({
          message: '保存成功！',
          type: 'success',
          
        });
      }
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
    margin-left: 800px;
   

}
.button1{
     background-color: #D7EEFA;
     border-style: solid;
     border-color: #A2C3E5;
}

</style>
