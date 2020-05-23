<!--  -->
<template>
  <div>

<div class="div11"><label class="lable1">施工许可证延期办理</label></div>
 
<el-table :data="form1" cell-style="{'text-align':'center'}"
border
:show-header="false"
:span-method="arraySpanMethod"
>

<el-table-column  align="right" width="150px" >
<template slot-scope="scope">
    <div v-if="scope.row.td=='1'" class="div21"></div>
<span v-if="scope.row.td=='2'">{{scope.row.c1}}</span>
<span v-if="scope.row.td=='3'">{{scope.row.c1}}</span>
<span v-if="scope.row.td=='4'">{{scope.row.c1}}</span>
<span v-if="scope.row.td=='5'">{{scope.row.c1}}</span>
    </template>

</el-table-column>



<el-table-column>
    <template slot-scope="scope">
<el-input v-model="input1[0]" class="input111" v-if="scope.row.td=='2'"></el-input>
<el-input v-model="input1[1]" class="input1112" v-if="scope.row.td=='3'"></el-input>
<el-select v-if="scope.row.td=='4'"  v-model="select11[4]"  class="input111">
<el-option v-for="item in select5" :key="item.value" :label="item. label" :value="item.value">
</el-option>
</el-select>
<el-input v-model="input1[3]" class="input111" v-if="scope.row.td=='5'"></el-input>
    </template>
</el-table-column>
<el-table-column prop="c3" align="right" width="150px"></el-table-column>
<el-table-column>
    <template slot-scope="scope">
<div class="div123" v-if="scope.row.td=='2'">
<el-select v-model="select11[0]" class="select0">
    <el-option  v-for="item in select1" :key="item.label"   :value="item.value"  :label="item.label">
    </el-option>
</el-select>

<el-select  v-model="select11[1]"  class="select1">
<el-option v-for="item in select2" :key="item.value" :label="item. label" :value="item.value">

</el-option>
</el-select>
<el-select  v-model="select11[2]"  class="select1">
<el-option v-for="item in select3" :key="item.value" :label="item. label" :value="item.value">

</el-option>
</el-select>

</div>

<el-select v-if="scope.row.td=='4'"  v-model="select11[3]"  class="input111">
<el-option v-for="item in select4" :key="item.value" :label="item. label" :value="item.value">
</el-option>
</el-select>
<el-input v-model="input1[2]" class="input111" v-if="scope.row.td=='5'"></el-input>
    </template>
</el-table-column>
<el-table-column>
    <template slot-scope="scope">
<el-button v-if="scope.row.td=='2'" class="button11">查询</el-button>
<el-button v-if="scope.row.td=='2'" @click="newBusiness()">新增业务</el-button>
    </template>
</el-table-column>

</el-table>


<el-table :data="form" :header-cell-style="{'text-align':'center','background-color':'#D8F0FF'}" border
:cell-style="{'text-align':'center'}" class="table2">
<el-table-column prop="c1" label="序号"  width="50px"></el-table-column>
<el-table-column prop="c2" label="工程名称" ></el-table-column>
<el-table-column prop="c3" label="工程属地" ></el-table-column>
<el-table-column prop="c4" label="建设地址" ></el-table-column>
<el-table-column prop="c5" label="申报日期" ></el-table-column>
<el-table-column prop="c6" label="上报状态" ></el-table-column>
<el-table-column prop="c7" label="操作" ></el-table-column>
<el-table-column prop="c8" label="审核结果" ></el-table-column>




</el-table>














  </div>
</template>

<script>
export default {
  data () {
    return {
        select1:[
            {
                value:'0',
                label:'四川省'

            }
        ],
        select2:[
            {
 value:'0',
                label:'重庆市'
            }
        ],
         select3:[
            {
 value:'0',
                label:'*****'
            }
        ],
         select4:[
            {
 value:'0',
                label:'--全部--'
            }
        ],
         select5:[
            {
 value:'0',
                label:'--全部--'
            }
        ],
        select11:['0','0','0','0','0'],
       
       
       
        input1:[],
        form1:[
            {
                td:'1',
                c1:'',
                c2:'',
                c3:'',
                c4:'',
                c5:''
            },
            {
                td:'2',
                c1:'工程名称：',
                c2:'',
                c3:'工程属地：',
                c4:'',
                c5:''
            },
             {
                 td:'3',
                c1:'建设地址：',
                c2:'',
                c3:'',
                c4:'',
                 c5:''
            },
             {
                 td:'4',
                  c5:'',
                c1:'办理状态：',
                c2:'',
                c3:'审核结果：',
                c4:''
            },
             { 
                 td:'5',c5:'',
                c1:'申报日期起：',
                c2:'',
                c3:'申报日期止：',
                c4:''
            },
            
        ]
    }
  },
  methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          if (columnIndex === 0) {
            return [1, 5];
          } 
        };
         if (rowIndex === 2) {
          if (columnIndex === 1) {
            return [1, 3];
          } 
        };
         if (columnIndex ===4) {
          if (rowIndex === 1) {
            return [3,1];
          } 
        };
      },
      newBusiness(){
          this.$router.push({path:'newBusiness'})
      }
  }
}

</script>

<style  scoped>
.button11{
    margin-left: 20px;
}
.select0{
     margin-left: 10px;
    width: 80px;
}
.select1{
    margin-left: 10px;
    width: 80px;
}
.table2{
    margin-top: 30px;
}
.input111{
   padding: 5px;
   width: 200px;
}
.input1112{
   padding: 5px;
   width: 600px;
}
.div21{
    height: 40px;
    background-color: #D8F0FF;
   width: 100%;
}
.lable1{
    padding: 30px;
    margin: 50px;
    color: #77BBDC;
}
.div11{
    margin-top: 50px;
}
.row1{
    height: 1000px;
}
</style>
