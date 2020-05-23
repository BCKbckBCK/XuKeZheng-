<!--  -->
<template>
  <div>
<div class="div1">
 <label> 勘察单位</label>
</div>

<div class="div2">
    <el-button class="button1" @click="open2()">保存</el-button>
</div>


<el-table :data="form" border width="100%"
:header-cell-style="{height:'0px'}"

:span-method="arraySpanMethod"
>

<el-table-column prop="coloum1" class="coloum1" align="right" width="150px"  ></el-table-column>
<el-table-column prop="coloum2"  class="coloum2" >
     <template slot-scope="scope">
        <el-input v-model="input" class="elinput1" v-if="scope.row.td=='1'" ></el-input>
          <el-input v-model="input4" class="elinput1" v-if="scope.row.td=='2'" ></el-input>
            <el-input v-model="input5" class="elinput1" v-if="scope.row.td=='3'" ></el-input>
              <el-input v-model="input6" class="elinput1" v-if="scope.row.td=='4'" ></el-input>
        <el-button class="elbutton2" v-if="scope.row.td=='1'" @click="addCompany()">添加...</el-button>
        <el-input  v-model="input1"  type="textarea" rows="1"
   class="elinput5" v-if="scope.row.td=='5'" ></el-input>
        <el-input  v-model="input2"  type="textarea" rows="6"
  class="elinput6" v-if="scope.row.td=='6'" ></el-input>
        <el-input  v-model="input3"  type="textarea" rows="3"
   class="elinput7" v-if="scope.row.td=='7'" ></el-input>
      </template>
</el-table-column>
<el-table-column prop="coloum3"  class="coloum1" align="right" width="150px"></el-table-column>
<el-table-column prop="coloum4"  class="coloum4">
     <template slot-scope="scope">
        <el-input  v-model="input7"  class="elinput1" v-if="scope.row.td=='1'"></el-input>
        <el-input  v-model="input8"  class="elinput1" v-if="scope.row.td=='2'"></el-input>
        <el-input  v-model="input9"  class="elinput1" v-if="scope.row.td=='3'"></el-input>
      </template>
</el-table-column>



</el-table>

<div class="div1">
          <div class="div31">
          人员信息
          </div>
          <div class="div21">
              <el-button class="button11" @click="addPerson()" >新增</el-button>    
               <el-button class="button11" @click="dialogVisible = true">删除</el-button>     
                <el-button class="button11" @click="refresh()" >刷新</el-button>        
                </div>     
           </div>

<el-table :data="form1" border width="100%"
:header-cell-style="{'text-align':'center'}"
:cell-style="{'text-align':'center'}"
>
     <el-table-column label="口" prop="" width="100px">
         <template slot-scope="scope">
             <el-checkbox v-model="checked"></el-checkbox>
         </template>
     </el-table-column>
     <el-table-column label="序号" prop="number" width="100px"></el-table-column>
    <el-table-column label="注册专业" prop="profession" width="200px"></el-table-column>
     <el-table-column label="人员类型" prop="personType"></el-table-column>
      <el-table-column label="发证日期" prop="date"></el-table-column>
       <el-table-column label="注册编号" prop="signNumber"></el-table-column>
        <el-table-column label="人员状态" prop="state"></el-table-column>
         
</el-table>
 <div class="page1">
   
    <el-pagination
     
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
  <span>确认删除吗？</span>
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
        input:'',
         input1:'',
          input2:'',
           input3:'',
            input4:'',
             input5:'',
              input6:'',
              input7:'',
               input8:'',
                input9:'',
        form:[
            {
                td:'1',
                coloum1:'单位名称:',
                  coloum2:'',
                    coloum3:'单位地址:',
                    coloum4:'',
            },
            {
                td:'2',
                coloum1:'法定代表人：',
                  coloum2:'',
                    coloum3:'联系人：',
                    coloum4:'',
            },
            {
                td:'3',
                coloum1:'移动电话:',
                  coloum2:'',
                    coloum3:'联系电话：',
                    coloum4:'',
            },
             {
                td:'4',
                coloum1:'组织机构代码：',
                  coloum2:'',
                    coloum3:'',
                    coloum4:'',
            },
            {
                td:'5',
                coloum1:'主项资质：',
                  coloum2:'',
                    coloum3:'',
                    coloum4:'',
            },
            {
                td:'6',
                coloum1:'增项资质：',
                  coloum2:'',
                    coloum3:'',
                    coloum4:'',
            },
            {
                td:'7',
                coloum1:'备注：',
                  coloum2:'',
                    coloum3:'',
                    coloum4:'',
            }
        ],
        form1:[
            {
                number:'',
                profession:'',
                personType:'',
                date:'',
                signNumber:'',
                state:'',
            }
        ]
    }
  },
   methods: {
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
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 3||rowIndex === 4||rowIndex === 5||rowIndex === 6) {
          if (columnIndex === 1) {
            return [1, 3];
          } 
        }
      },
      open2() {
        this.$message({
          message: '保存成功！',
          type: 'success',
          
        });
         this.$router.push({path:'index'})},
      addCompany(){
          this.$router.push({path:'companyMessage'})
      }
      ,
      addPerson(){
           this.$router.push({path:'newPerson'})
      },
       refresh(){
          this.$router.go(0)
      },
      }
 
}

</script>

<style scoped>
.page1{
    margin-top: 20px;
}
.elinput5{
   
    padding: 5px;
}
.elinput6{
     padding: 5px;
}
.elinput7{
    padding: 5px;
}

.coloum1{
    background-color: blue;
}

.elinput1{
    margin: 5px;
    width: 200px;
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
.elbutton2{
     margin-left: 30px;
    background-color: #D4F0FE;
    border-style: solid;
    border-color:#94CAF8
}
.button1{
  
    margin-left: 1000px;
    background-color: #D4F0FE;
    border-style: solid;
    border-color:#94CAF8
}
.div11{
    margin-top: 10px;
    display: flex;
    align-items: center;
    background-color: #D7EEFA;
     height: 60px;
      border-style: solid;
     border-color: #A2C3E5;
}
.div21{
    margin-left: 750px;
   

}
.button11{
     background-color: #D7EEFA;
     border-style: solid;
     border-color: #A2C3E5;
}

</style>
