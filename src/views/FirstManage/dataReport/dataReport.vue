<!--  -->
<template>
  <div>
<div class="div1">
 <label>提交施工许可证初次办理备案</label>
</div>

<el-table :data="form" border class="table1"
:show-header="false"
:span-method="arraySpanMethod">

<el-table-column   align="center" width="200px">
  <template slot-scope="scope">
   <el-popover v-if="scope.row.td=='5'"
  placement="top"
  width="160"
  v-model="visible">
  <p>提交将无法撤回确认提交吗？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
    <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
  </div>
  <el-button slot="reference">提交</el-button>
</el-popover>
    <span   v-if="scope.row.td=='1'">{{scope.row.c1}}</span>
    <span   v-if="scope.row.td=='2'">{{scope.row.c1}}</span>
    <span   v-if="scope.row.td=='3'">{{scope.row.c1}}</span>
    <span   v-if="scope.row.td=='4'">{{scope.row.c1}}</span>
  </template>
</el-table-column>


<el-table-column>

  <template slot-scope="scope">

    <el-input v-model="input[0]" v-if="scope.row.td=='1'" class="input1"></el-input>
    <el-input  v-model="input[1]" v-if="scope.row.td=='2'" class="input1"></el-input>
    <el-input  v-model="input[2]" v-if="scope.row.td=='3'" class="input1"></el-input>
    <el-select v-model="value" v-if="scope.row.td=='4'" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  </template>
</el-table-column>


</el-table>










  </div>
</template>

<script>
export default {
  data () {
    return {
      options:[
        {
          value:'1',
          label:'德阳市'
        },
      ],
      value:'1',
      input:[],
      form:[{
        td:'1',
        c1:'年度：',
        c2:'',

      },{
         td:'2',
        c1:'业务名称：',
        c2:'',

      },{
         td:'3',
        c1:'工程名称：',
        c2:'',

      },{
         td:'4',
        c1:'上报部门：',
        c2:'',

      },{
         td:'5',
        c1:'',
        c2:'',

      }],
      visible:false,
    }
  }, methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 4) {
          if (columnIndex === 0) {
            return [1, 2];
          } 
        }
      },
      submit1(){
this.visible=true;
      }}
}

</script>

<style  scoped>
.div1{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #D4F0FE;
     border-style: solid;
    border-color:#94CAF8;
   
}
.button1{
 
}
.input1{
  padding: 3px;
  width: 600px;
}
.table1{
  margin-top: 5px;
}
</style>
