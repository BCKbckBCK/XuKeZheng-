<template>
  <div class="answers">
    <template v-if="questionType===2">
      <el-form
        label-width="80px"
      >
        <el-form-item
          v-for="(item, index) in answers"
          :key="index"
          :label="'选项' + (index+1)"
          style="padding:8px"
        >
          <el-input v-model="item.title" style="width:50%" maxlength="100" show-word-limit />
          <el-input v-model="item.orderId" type="number" placeholder="排序" style="width:58px" />
          <el-checkbox :checked="item.isText===1?true:false" @change="checkboxChange(item)">是否需要输入框</el-checkbox>
          <el-button v-if="index+1<answers.length" type="danger" class="operate-button" icon="el-icon-minus" circle @click.prevent="removeItem(index)">删除</el-button>
          <el-button v-if="index+1===answers.length" type="primary" class="operate-button" icon="el-icon-plus" circle @click.prevent="addItem()">添加</el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    questionId: {
      type: String,
      default: ''
    },
    questionType: {
      type: Number,
      default: 1
    },
    viewType: {
      type: String,
      default: 'ADD'
    },
    answers: {
      type: Array,
      default: null
    }
  },
  watch: {
  },
  created () {
    if (this.answers !== undefined && this.answers.length === 0) {
      this.addItem()
    }
  },
  methods: {
    removeItem (index) {
      this.answers.splice(index, 1)
    },
    addItem () {
      this.answers.push({
        answerId: '',
        isText: 2
      })
    },
    checkboxChange (item) {
      item.isText = (item.isText === 1 ? 2 : 1)
      this.$forceUpdate();
    }
  }
}
</script>

<style lang="scss" scoped>
.answers {
  width:100%;
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  padding:8px;
    .operate-button{
      width: 24px;
      height: 24px;
      padding: 4px;
      margin-left: 8px;
    }
}
</style>
