<!--  -->
<template>
  <div>

<div class="div1">
    <div class="div2">
    <el-button class="button1"  @click="save()">保存</el-button>
    <el-button class="button1" @click="goBack()">返回</el-button>
    </div>
</div>
<div class="div1">工程相关信息</div>
<el-table :data="form" border :header-cell-style="{'text-align':'center'}"
:show-header="false"
>
<el-table-column prop="c1" align="right" width="200px">
</el-table-column>
<el-table-column  >

  <template slot-scope="scope">
  <el-input v-if="scope.row.td=='1'"  v-model="input1" class="input1"></el-input>
<el-input v-if="scope.row.td=='2'"  v-model="input2" class="input1"></el-input>
    <el-input v-if="scope.row.td=='3'"  v-model="input3" class="input1"></el-input>
    <el-input v-if="scope.row.td=='4'"  v-model="input4" class="input1"></el-input>
  </el-input>
  </template>
    
  </el-input>
</el-table-column>
<el-table-column prop="c3" align="right" width="200px"></el-table-column>
<el-table-column  >
  <template slot-scope="scope">
  <el-input v-if="scope.row.td=='1'"  v-model="input5" class="input1"></el-input>
<el-input v-if="scope.row.td=='2'"  v-model="input6" class="input1"></el-input>
    <el-input v-if="scope.row.td=='3'"  v-model="input7" class="input1"></el-input>
    <el-input v-if="scope.row.td=='4'"  v-model="input8" class="input1"></el-input>
  </el-input>
  </template>
</el-table-column>

</el-table>


<div class="div1">相关费用缴纳及保证金担保情况</div>



<el-table :data="form1" border :header-cell-style="{'text-align':'center'}"

>
<el-table-column label="缴费项目" prop="c1" align="left" width="200px">
  


  
</el-table-column>
<el-table-column  label="金额（万元）" prop="c2" >
  <template slot-scope="scope">
  <el-input v-if="scope.row.td=='1'"  v-model="input9" class="input1"></el-input>
<el-input v-if="scope.row.td=='2'"  v-model="input10" class="input1"></el-input>
    <el-input v-if="scope.row.td=='3'"  v-model="input11" class="input1"></el-input>
    <el-input v-if="scope.row.td=='4'"  v-model="input12" class="input1"></el-input>
    <el-input v-if="scope.row.td=='5'"  v-model="input13" class="input1"></el-input>

    <el-input v-if="scope.row.td=='6'"  v-model="input14" class="input1"></el-input>
  </el-input>
  </template>

    
  </el-input>
</el-table-column>
<el-table-column   label="缴费时间" prop="c3" align="right" width="200px">
   <template slot-scope="scope">
  <el-input v-if="scope.row.td=='1'"  v-model="input15" class="input1"></el-input>
<el-input v-if="scope.row.td=='2'"  v-model="input16" class="input1"></el-input>
    <el-input v-if="scope.row.td=='3'"  v-model="input17" class="input1"></el-input>
    <el-input v-if="scope.row.td=='4'"  v-model="input18" class="input1"></el-input>
    <el-input v-if="scope.row.td=='5'"  v-model="input19" class="input1"></el-input>

    <el-input v-if="scope.row.td=='6'"  v-model="input20" class="input1"></el-input>
  </el-input>
  </template>
   </el-table-column>
<el-table-column  label="收款经办人" prop="c4" >
  <template slot-scope="scope">
  <el-input v-if="scope.row.td=='1'"  v-model="input21" class="input1"></el-input>
<el-input v-if="scope.row.td=='2'"  v-model="input22" class="input1"></el-input>
    <el-input v-if="scope.row.td=='3'"  v-model="input23" class="input1"></el-input>
    <el-input v-if="scope.row.td=='4'"  v-model="input24" class="input1"></el-input>
    <el-input v-if="scope.row.td=='5'"  v-model="input25" class="input1"></el-input>

    <el-input v-if="scope.row.td=='6'"  v-model="input26" class="input1"></el-input>
  </el-input>
  </template>
</el-table-column>
<el-table-column label="收款单位" prop="c5" >
  <template slot-scope="scope">
  <el-input v-if="scope.row.td=='1'"  v-model="input27" class="input1"></el-input>
<el-input v-if="scope.row.td=='2'"  v-model="input28" class="input1"></el-input>
    <el-input v-if="scope.row.td=='3'"  v-model="input29" class="input1"></el-input>
    <el-input v-if="scope.row.td=='4'"  v-model="input30" class="input1"></el-input>
    <el-input v-if="scope.row.td=='5'"  v-model="input31" class="input1"></el-input>

    <el-input v-if="scope.row.td=='6'"  v-model="input32" class="input1"></el-input>
  </el-input>
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
       input10:'',
        input11:'',
         input12:'',
          input13:'',
           input14:'',
            input15:'',
             input16:'',
              input17:'',
               input18:'',
                input19:'',
                 input20:'',
                  input21:'',
                   input22:'',
                    input23:'',
                     input24:'',
                      input25:'',
                       input26:'',
                        input27:'',
                         input28:'',
                          input29:'',
                           input30:'',
                            input31:'',
                             input32:'',
      form:[
        
         {
           td:'1',
          c1:'建设项目名称：',
          c2:'',
          c3:'项目面积：',
          c4:''
        },
         {
            td:'2',
          c1:'建设地点：',
          c2:'',
          c3:'项目编号：',
          c4:''
        },
         {
            td:'3',
          c1:'建设单位：',
          c2:'',
          c3:'项目类别：',
          c4:''
        },
         {
           td:'4',
          c1:'建设项目联系人：',
          c2:'',
          c3:'联系电话：',
          c4:''
        },
         
      ],
      form1:[{
          td:'1',
        c1:'特大城市市政基础设施配套费：',
        c2:'',
         c3:'',
          c4:'',
           c5:'',
      },
      {
          td:'2',
        c1:'工程定额测定费：',
        c2:'',
         c3:'',
          c4:'',
           c5:'',
      },
      {
          td:'3',
        c1:' 文物勘探发掘费：',
        c2:'',
         c3:'',
          c4:'',
           c5:'',
      },
      {
          td:'4',
        c1:'建筑工程质量监督费：',
        c2:'',
         c3:'',
          c4:'',
           c5:'',
      },
       {
           td:'5',
        c1:'新建项目白蚁防治费：',
        c2:'',
         c3:'',
          c4:'',
           c5:'',
      },
       {
           td:'6',
        c1:'新型墙体材料专项基金：',
        c2:'',
         c3:'',
          c4:'',
           c5:'',
      },]
    }
  },methods: {
     save(){
         this.$message({
          message: '保存成功！',
          type: 'success'
        });
     }
  }
}

</script>

<style  scoped>
.input1{
  width: 200px;
  padding: 3px;
}
.div2{
    margin-left: 900px;
}
.div1{
   margin-top: 15px;
      padding-top: 10px;
    padding-bottom: 10px;
     background-color: #DAECFE;
     border-style: solid;
     border-color:#B5DCFE ;
}

.button1{
   
  margin-right: 20px;
  border-style: solid;
  border-color: #9EC2E6;
}
</style>
