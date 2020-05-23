<!--  -->
<template>
  <div>
<div class="div3">
<el-steps :active="active" finish-status="success">
    
  <el-step title="施工总承包单位"></el-step>
  <el-step title="专业承包单位"></el-step>
  <el-step title="劳务分包单位"></el-step>
    <el-step title="勘察单位"></el-step>
  <el-step title="设计单位"></el-step>
  <el-step title="监理单位"></el-step>
</el-steps>
  </div>
<div v-if="parseInt(this.$route.query.id)!=6"  class="div1">
    <el-button style="margin-left: 100px;width:100px" @click="last">上一步</el-button>
<el-button style="margin-left: 100px;width:100px" @click="next">下一步</el-button>
</div>

<div v-if="parseInt(this.$route.query.id)==6"  class="div1">
    <el-button style="margin-left: 100px;width:100px" @click="last">上一步</el-button>
<el-button style="margin-left: 100px;width:100px" @click="submit()">提交</el-button>
</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
        active:!this.$route.query.id?-1:parseInt(this.$route.query.id),
    }
  },
  
  
  
  methods:{
       next() {
        
        if(!this.$route.query.id){
              this.active++;
        }
       if(this.active==0){
            this.$router.push({path:'/firstHandle/generalContractor/company'})
       }
        if(this.active==1){
            this.$router.push({path:'/firstHandle/professionalContractor/index'})
       }
      if(this.active==2){
            this.$router.push({path:'/firstHandle/laborUnit/index'})
       }
        if(this.active==3){
            this.$router.push({path:'/firstHandle/explorationUnit/index'})
       }
         if(this.active==4){
            this.$router.push({path:'/firstHandle/designUnit/index'})
       }
         if(this.active==5){
            this.$router.push({path:'/firstHandle/contralUnit/index'})
       }
       
      },
      last(){
            if(this.$route.query.id==6){
           this.$router.push({path:'/firstHandle/joinBuild/joinBuild',query:{id:5}})
      }
          if(this.active>=1){
          this.active--;
      }
      
      
      
      },
      submit(){
           this.$message({
          message: '保存成功！',
          type: 'success'
        });
      }
  }
}

</script>

<style  scoped>
.div3{
    margin-top: 200px;
    width: 1000px;
    margin-left: 100px;
}
.div1{
    margin-top: 50px;
    margin-left: 300px;
}

</style>
