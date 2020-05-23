<!--  -->
<template>
  <div>

<div class="div2">
    <el-button class="button1" @click="open2()">保存</el-button>
</div>

<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">建设单位基本信息</div></template>
    </el-table-column>
</el-table>

<el-table :data="form" :show-header="false" border :span-method="arraySpanMethod"
>

<el-table-column prop="c1" width="200px" align="right"></el-table-column>

<el-table-column align="left">
    <template slot-scope="scope">
        <el-input v-if="scope.row.td=='0'" class="input2" v-model="input11[0]" ></el-input>
<div class="1111" v-if="scope.row.td=='1'">
<el-select v-model="select11[0]" class="select1">
<el-option v-for="a in select0" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<el-select v-model="select11[1]" class="select1">
<el-option v-for="a in select1" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<el-select v-model="select11[2]" class="select1">
<el-option v-for="a in select2" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
</div>

<el-select v-if="scope.row.td=='2'" v-model="select11[3]" class="select2">
<el-option v-for="a in select3" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>


         <el-input v-if="scope.row.td=='3'" class="input1" v-model="input11[1]" ></el-input>
          <el-input v-if="scope.row.td=='4'" class="input1" v-model="input11[2]" ></el-input>
           <el-input v-if="scope.row.td=='5'" class="input1" v-model="input11[3]" ></el-input>
    </template>
</el-table-column>

<el-table-column prop="c3" width="200px" align="right"></el-table-column>

<el-table-column >
    <template slot-scope="scope">
        <el-input v-if="scope.row.td=='1'" class="input1" v-model="input11[8]" ></el-input>
        <el-input v-if="scope.row.td=='2'" class="input1" v-model="input11[4]" ></el-input>
         <el-input v-if="scope.row.td=='3'" class="input1" v-model="input11[5]" ></el-input>
          <el-input v-if="scope.row.td=='4'" class="input1" v-model="input11[6]" ></el-input>
           <el-input v-if="scope.row.td=='5'" class="input1" v-model="input11[7]" ></el-input>
    </template>
</el-table-column>
</el-table>



<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">工程基本信息</div></template>
    </el-table-column>
</el-table>




<el-table :data="form2" border 
:show-header="false"
:span-method="arraySpanMethod1"
>
<el-table-column prop="c1" align="right" width="200px"></el-table-column>

<el-table-column >
    <template slot-scope="scope">
 <el-input v-if="scope.row.td=='0'" class="input1" v-model="input111[0]" ></el-input>

<el-select v-if="scope.row.td=='1'" v-model="select11[4]" class="select2">
<el-option v-for="a in select4" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
 <el-input v-if="scope.row.td=='2'"  class="input12" v-model="input111[1]" ></el-input>
 <el-input type="textarea"
  :rows="3" v-if="scope.row.td=='3'" class="input13" v-model="input111[2]" ></el-input>
 <el-input v-if="scope.row.td=='4'" class="input1" v-model="input111[3]" ></el-input>

    </template>
</el-table-column>

<el-table-column prop="c3" align="right" width="200px"></el-table-column>


<el-table-column >
    <template slot-scope="scope">


<el-input v-if="scope.row.td=='0'" class="input1" v-model="input111[4]" ></el-input>
<el-input v-if="scope.row.td=='4'" class="input1" v-model="input111[5]" ></el-input>


<div  v-if="scope.row.td=='1'">
<el-select v-model="select11[5]" class="select1">
<el-option v-for="a in select01" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<el-select v-model="select11[6]" class="select1">
<el-option v-for="a in select12" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<el-select v-model="select11[7]" class="select1">
<el-option v-for="a in select23" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
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
        input111:[],
        form1:[{
            td:'0',
            c1:''
        }],
        form2:[{
            td:'0',
            c1:'项目名称：',
            c2:'',
            c3:'工程名称：',
            c4:'',
        },
        {
             td:'1',
            c1:'工程类别：',
            c2:'',
            c3:'工程所属地：',
            c4:'',
        },
        {
             td:'2',
            c1:'建设地址：',
            c2:'',
            c3:'：',
            c4:'',
        },
        {
             td:'3',
            c1:'建设规模：',
            c2:'',
            c3:'',
            c4:'',
        },
        { td:'4',
            c1:'报建时间：',
            c2:'',
            c3:'申报时间：',
            c4:'',
        },
        ],
         input11:[],
    select11:['0','0','0','0','0','0','0','0'],
    select0:[
        {
            value:'0',
            label:'四川省'
        }
    ],
     select01:[
        {
            value:'0',
            label:'四川省'
        }
    ],
    select1:[
        {
            value:'0',
            label:'成都市'
        }
    ],
    select12:[
        {
            value:'0',
            label:'成都市'
        }
    ],
    select2:[
        {
            value:'0',
            label:'新津县'
        }
    ],
      select23:[
        {
            value:'0',
            label:'青羊区'
        }
    ],
    select3:[
        {
            value:'0',
            label:'有限责任'
        }
    ],
     select4:[
        {
            value:'0',
            label:'其他'
        }
    ],
        form:[
            {
                td:'0',
                c1:'建设单位：',
                c2:'',
                c3:'',
                c4:'',
            },
            {
                td:'1',
                c1:'建设单位所属地：',
                c2:'',
                c3:'建设单位地址：',
                c4:'',
            },
            {
                td:'2',
                c1:'所有制性质：',
                c2:'',
                c3:'法定代表人：',
                c4:'',
            },
            {
                td:'3',
                c1:'法人电话：',
                c2:'',
                c3:'领证人：',
                c4:'',
            },
            {
                td:'4',
                c1:'联系电话：',
                c2:'',
                c3:'建设单位负责人：',
                c4:'',
            },
            {
                td:'5',
                c1:'建设单位项目负责人职称：',
                c2:'',
                c3:'建设单位项目负责人电话：',
                c4:'',
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
       arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 2||rowIndex  === 3) {
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
      },
      
  }
}

</script>

<style  scoped>
.div321{
    height: 40px;
    line-height: 400%;
    font-size: 15px;
    font-weight: 500;
    
}
.row1{
    height: 30px;
}
.input1{
    width: 200px;
    padding: 5px;
   
}
.input12{
    width: 800px;
    padding: 5px;
   
}
.input13{
    width: 800px;
    padding: 5px;
   
}
.input2{
    width: 300px;
    padding: 5px;
}
.select1{
    width: 100px;
    padding: 5px;
}
.select2{
    width: 300px;
    padding: 5px;
}
.div41{
    height: 40px;
    width: 100%;
     background-color: #D4F0FE;
     
    border-color:#94CAF8;
    line-height: 200%;
    margin-top: 5px;
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
</style>
