<!--  -->
<template>
  <div>
    
<div class="div1">企业列表</div>
<div class="div2">
   
     <span> 企业名称</span>
        <input type="text" class="input1">
        <el-button class="button1">查询</el-button>
        <el-button class="button1" @click="goBack()">返回</el-button>
          
    
</div>
 
     <el-table :data="form"   border
     class="table1"
    style="width: 100%;"
    :header-cell-style="{'text-align':'center',background :'#E7F6FD'}"
    :cell-style="{'text-align':'center'}">
		<el-table-column  width="55" ></el-table-column>
		<el-table-column  label="序号" prop="number" width="60"></el-table-column>
		<el-table-column  label="企业名称" width="100" prop="companyName"></el-table-column>
		<el-table-column  label="资质证书编号" prop="bookNumber"></el-table-column>
		<el-table-column  label="属地"prop="location"></el-table-column>
		 <el-table-column prop="unitAddress" label="单位地址" ></el-table-column>
		<el-table-column  label="法人" prop="legalPerson"></el-table-column>
        <el-table-column  label="联系人" prop="contact"></el-table-column>
        <el-table-column  label="联系电话" prop="contactPhone"></el-table-column>
        <el-table-column  label="选择" prop="choice">
  <template slot-scope="scope">
        <el-button @click="" type="text" size="small">选择</el-button>
        
      </template>
        </el-table-column>
	</el-table>
  <div class="page1">
    
    <el-pagination
     
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        form:[{
            number:"1",
            companyName:'四川中友鸿发消防有限公司',
            bookNumber:"D251507801",
            location:"四川省-成都市-金牛区",
            unitAddress:"成都市金牛区沙湾路49号6楼11号",
            legalPerson:"刘强",
            contact:"刘强",
            contactPhone:"11111111111",
            choice:"选择"
        }]
    }
  
  },
   methods:{
        goBack(){
            this.$router.push({path:'company'})
        }
    }
}

</script>

<style  scoped>
.page1{
    margin-top: 20px;
}

.div1{
    background-color: #E7F6FD;
    height: 50px;
    width: 100%;
     border-style: solid;
    border-color:#8CC6F8 ;
    cellspacing:0;
     line-height: 200%;
}

.div2{
   display: flex;
  align-items: center;
   
    height: 60px;
    width: 100%;
    border-style: solid;
    border-color:#8CC6F8 ;
}
.div3{
  
    margin-left: 100px;
   margin-top: 10px;
}
.table1{
    margin-top: 20px;
}
span{
  margin-left: 200px;
}
.input1{
 
    height: 30px;
    margin-left: 20px;
    width: 300px;
   
}
.button1{
   width: 100px;
  
   border-style: solid;
   border-color:#94CAF8;
padding: 10px;

margin-left: 30px;

}


</style>
