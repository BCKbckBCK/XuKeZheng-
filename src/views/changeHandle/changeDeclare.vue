<!--  -->
<template>
  <div>

<div class="div2">
    <el-button class="button1" @click="save()">保存</el-button>
    <el-button class="button11111" @click="goBack()">返回</el-button>
</div>

<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">建设单位基本信息变更前</div></template>
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
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">工程基本信息变更前</div></template>
    </el-table-column>
</el-table>




<el-table :data="form2" border 
:show-header="false"
:span-method="arraySpanMethod1"
>
<el-table-column prop="c1" align="right" width="200px">



    
</el-table-column>

<el-table-column >
    <template slot-scope="scope">
 <el-input v-if="scope.row.td=='0'" class="input1" v-model="input111[0]" ></el-input>


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


 <el-select v-if="scope.row.td=='2'" v-model="select11[4]" class="select2">
<el-option v-for="a in select4" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<div class="div54321"  v-if="scope.row.td=='3'" >
    <el-input class="input13" v-model="input111[2]" ></el-input><span class="span54321">币种：</span>

<el-select v-model="select11[8]" class="select1">
<el-option v-for="a in select51" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
</div>
 <el-input v-if="scope.row.td=='4'" class="input1" v-model="input111[3]" ></el-input>
 <el-input v-if="scope.row.td=='5'" class="input1" v-model="input111[4]" ></el-input>

    </template>
</el-table-column>

<el-table-column prop="c3" align="right" width="200px"></el-table-column>


<el-table-column >
    <template slot-scope="scope">


<el-input v-if="scope.row.td=='0'" class="input1" v-model="input111[5]" ></el-input>
<el-input v-if="scope.row.td=='4'" class="input1" v-model="input111[6]" ></el-input>
<el-input v-if="scope.row.td=='5'" class="input1" v-model="input111[7]" ></el-input>

<div  v-if="scope.row.td=='1'">
<el-select v-model="select11[9]" class="select1">
<el-option v-for="a in select01" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<el-select v-model="select11[10]" class="select1">
<el-option v-for="a in select12" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
<el-select v-model="select11[11]" class="select1">
<el-option v-for="a in select23" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
</div>
<el-select v-if="scope.row.td=='2'" v-model="select11[12]" class="select2">
<el-option v-for="a in select5" :label="a.label" :value="a.value" :key="a.value"></el-option>
</el-select>
    </template>
</el-table-column>

</el-table>

<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">变更信息</div></template>
    </el-table-column>
</el-table>

<el-table :data="form3" border :show-header="false">
<el-table-column prop="c1" width="200px" align="right"></el-table-column>

<el-table-column>
    <template slot-scope="scope">
<el-input v-if="scope.row.td=='0'" class="input1" v-model="input21[0]" ></el-input>
    </template>
</el-table-column>
<el-table-column prop="c3" width="200px" align="right"></el-table-column>
<el-table-column>
    <template slot-scope="scope">
<el-input v-if="scope.row.td=='0'" class="input1" v-model="input21[1]" ></el-input>
    </template>
</el-table-column>
</el-table>

<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">项目基本信息变更结果 <el-button class="button321">显示本次修改</el-button></div>
     
      </template>
    </el-table-column>
</el-table>

<el-table border :data="form4" :header-cell-style="{'text-align':'center'}"
:cell-style="{'text-align':'center'}">
<el-table-column  label="口" width="50px">
<template slot-scope="scope">  
    <el-checkbox v-if="scope.row.td=='0'" v-model="checked1"></el-checkbox>
    
    
     </template>
</el-table-column>
<el-table-column prop="c2" label="序号"width="50px"></el-table-column>
<el-table-column prop="c3" label="本次变更内容"></el-table-column>
<el-table-column prop="c4" label="变更前"></el-table-column>
<el-table-column prop="c5" label="变更后"></el-table-column>
<el-table-column prop="c6" label="变更日期"></el-table-column>



</el-table>

<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">企业变更信息（增加0个，退出0个）</div>
     
      </template>
    </el-table-column>
</el-table>

<el-table border :data="form5" :header-cell-style="{'text-align':'center'}"
:cell-style="{'text-align':'center'}">
<el-table-column  label="口" width="50px">
<template slot-scope="scope">  
    <el-checkbox v-if="scope.row.td=='0'" v-model="checked2"></el-checkbox>
    
    
     </template>
</el-table-column>
<el-table-column prop="c2" label="序号"width="50px"></el-table-column>
<el-table-column prop="c3" label="企业类型"></el-table-column>
<el-table-column prop="c4" label="企业名称"></el-table-column>
<el-table-column prop="c5" label="变更情况"></el-table-column>
<el-table-column prop="c6" label="变更日期"></el-table-column>



</el-table>

<el-table :data="form1"
:cell-style="{'background-color':' #CBF1FF'}"
>
    <el-table-column  align="left" class="row1">
      <template slot-scope="scope">  <div class="div321" v-if="scope.row.td=='0'">人员变更信息（增加0个，退出0个）</div>
     
      </template>
    </el-table-column>
</el-table>

<el-table border :data="form6" :header-cell-style="{'text-align':'center'}"
:cell-style="{'text-align':'center'}">
<el-table-column  label="口" width="50px">
<template slot-scope="scope">  
    <el-checkbox v-if="scope.row.td=='0'" v-model="checked3"></el-checkbox>
   
    
     </template>
</el-table-column>
<el-table-column prop="c2" label="序号"width="50px"></el-table-column>
<el-table-column prop="c3" label="人员类型"></el-table-column>
<el-table-column prop="c4" label="姓名"></el-table-column>
<el-table-column prop="c5" label="变更情况"></el-table-column>
<el-table-column prop="c6" label="变更日期"></el-table-column>



</el-table>


  </div>
</template>

<script>
export default {
  data () {
    return {
        checked1:true,
           checked2:true,
              checked3:true,
        form4:[
            {
                td:'0',
                c1:'',
                c2:'1',
                c3:'修改了***',
                c4:'***',
                c5:'***',
                c6:'***',
            }
        ],
        form5:[
            {
                td:'0',
                c1:'',
                c2:'1',
                c3:'',
                c4:'',
                c5:'',
                c6:'',
            }
        ],
            form6:[
            {
                td:'0',
                c1:'',
                c2:'1',
                c3:'',
                c4:'',
                c5:'',
                c6:'',
            }
        ],
        form3:[
            {td:'0',
                c1:'变更申请人：',
                 c2:'',
                  c3:'变更申请时间：',
                   c4:'',
            }
        ],
        input21:[],
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
            c1:'工程所属地：',
            c2:'',
            c3:'',
            c4:'',
        },
         { td:'5',
            c1:'建设地址：',
            c2:'',
            c3:'建设规模：',
            c4:'',
        },
        {
             td:'2',
            c1:'工程类别：',
            c2:'',
            c3:'结构类型：',
            c4:'',
        },
        {
             td:'3',
            c1:'合同价格（万元）：',
            c2:'',
            c3:'',
            c4:'',
        },
        { td:'4',
            c1:'合同开工日期：',
            c2:'',
            c3:'合同竣工日期：',
            c4:'',
        },
         
        ],
         input11:[],
    select11:['0','0','0','0','0','0','0','0','0','0','0','0','0','0',],
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
     select5:[
        {
            value:'0',
            label:'框架-剪力墙'
        }
    ],
      select51:[
        {
            value:'0',
            label:'人民币'
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
                c1:'法定代表人：',
                c2:'',
                c3:'法人电话：',
                c4:'',
            },
            {
                td:'4',
                c1:'领证人：',
                c2:'',
                c3:'联系电话：',
                c4:'',
            },
           
        ]
    }
  },
  methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 0|| rowIndex  === 2) {
          if (columnIndex === 1) {
            return [1, 3];
          } 
        }
      },
       arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 1||rowIndex  === 4) {
          if (columnIndex === 1) {
            return [1, 3];
          } 
        }
      },
      goBack(){
this.$router.push({path:'index'})
      },
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
.button321{
    margin-left: 800px;
} 
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
    width: 200px;
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
  
    margin-left: 900px;
    
    border-style: solid;
    border-color:#94CAF8
}
.button11111{
  
    margin-left: 20px;
    
    border-style: solid;
    border-color:#94CAF8
}
</style>