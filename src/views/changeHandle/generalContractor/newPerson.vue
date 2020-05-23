<!--  -->
<template>
  <div>
<div class="div1">
    <div class="div2">
    <el-button class="button1" :plain="true" @click="open2">保存</el-button>
    <el-button class="button1" @click="goBack()">返回</el-button>
    </div>
</div>

  
  <el-table class="table1" :data='form' border
  :span-method="arraySpanMethod"
  :index-method="method1"
    style="width: 100%;"
    :header-cell-style="{'text-align':'center',background :'#E7F6FD'}"
    :cell-style="{'text-align':'left'}">
      
<el-table-column  prop="Type1" class="column1"   width='100px'>

</el-table-column>
<el-table-column  class="column2"  width='500px'>
     <template slot-scope="scope">
        <el-select v-if="scope.row.td0=='0'" style="width:250px" v-model="query1" class="select1">
          <el-option   v-for="item in taskPerson" :value="item.value" :label="item.lable">项目负责人</el-option>
        </el-select>
      
        <el-button v-if="scope.row.td0=='0'" class="button1" style="width:100px;margin-left:30px;">添加...</el-button>
        <el-input v-model="input" v-if="scope.row.td0=='1'" class="input1"></el-input>
        <el-select v-if="scope.row.td0=='2'" style="width:250px" v-model="query1" class="select1">
          <el-option v-for="item in sex" :value="item.value" :label="item.lable">男</el-option>
        </el-select>
        <el-input v-model="input1" v-if="scope.row.td0=='3'" class="input1"></el-input>
        <el-input v-model="input2" v-if="scope.row.td0=='4'" class="input1"></el-input>
        <el-input v-model="input3" v-if="scope.row.td0=='5'" class="input1"></el-input>
         <el-select v-if="scope.row.td0=='6'" style="width:250px" v-model="query1"  class="select1">
           <el-option v-for="item in class1" :value="item.value" :label="item.lable">无</el-option>
         </el-select>
         <el-input v-model="input4" v-if="scope.row.td0=='7'" class="input1"></el-input>
      </template>
       
</el-table-column>
<el-table-column  prop="Type2" class="column1"    width='100px'>

</el-table-column>
<el-table-column  class="column2"   >
     <template slot-scope="scope">
        <el-input v-model="input5" v-if="scope.row.td0=='1'" class="input1"></el-input>
        <el-select v-if="scope.row.td0=='2'" style="width:250px" v-model="query1" class="select1" >
          <el-option v-for="item in school" :value="item.value" :label="item.lable">无</el-option>
        </el-select>
        <el-select v-if="scope.row.td0=='3'" style="width:250px" v-model="query1" class="select1">
          <el-option  v-for="item in profession1" :label="item.lable" :value="item.value">其他</el-option>
        </el-select>
      
        <el-input v-model="input6" v-if="scope.row.td0=='4'" class="input1"></el-input>
        <el-input v-model="input7" v-if="scope.row.td0=='5'" class="input1"></el-input>
         <el-input v-model="input8" v-if="scope.row.td0=='6'" class="input1"></el-input>
         <el-input v-model="input9" v-if="scope.row.td0=='7'" class="input1"></el-input>
      </template>
</el-table-column>


      </el-table>


      
      </div>
</template>

<script>
export default {
  data () {
    return {
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
      taskPerson:[
        {
          value:'1',
          lable:'项目负责人'
        }

      ],
      sex:[
        {
          value:'1',
          lable:'男'
        }
      ],
      class1:[
        {
          value:'1',
          lable:'无'
        }
      ],
      school:[
        {
          value:'1',
          lable:'无'
        }
      ],
      profession1:[
        {
          value:'1',
          lable:'其他'
        }
      ],
      query1:'1',
        form:[
          {
             td0:'0',
         Type1:'人员类型：',
         
        },
          {
            td0:'1',
         Type1:'姓名：',
         Type2:'身份证号：'
        },
           {
              td0:'2',
         Type1:'性别：',
         Type2:'最高学历：'
        },
         {
            td0:'3',
         Type1:'移动电话：',
         Type2:'职称：'
        },
         {
            td0:'4',
         Type1:'职务：',
         Type2:'联系电话：'
        },
         {
            td0:'5',
         Type1:'专业：',
         Type2:'证书编号：'
        },
         {
            td0:'6',
         Type1:'等级：',
         Type2:'注册编号：'
        },
         {
            td0:'7',
         Type1:'注册专业：',
         Type2:'注册日期：'
        },

        ]
    }
    
  },
   methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 0) {
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
        this.$router.push({path:'company'})},
        goBack(){
            this.$router.push({path:'company'})
        }
   }
  
}

</script>

<style  scoped>
.select1{
  padding: 10px;
}
.button1{
  
  margin-right: 20px;
  border-style: solid;
  border-color: #9EC2E6;
}
.div2{
    margin-left: 900px;
}
.div1{
      padding-top: 10px;
    padding-bottom: 10px;
     background-color: #DAECFE;
     border-style: solid;
     border-color:#B5DCFE ;
}
.column1{
    width:50px;

}
.column2{
    width:200px;

}
.input1{
  padding: 10px;
  width:250px
}

</style>
