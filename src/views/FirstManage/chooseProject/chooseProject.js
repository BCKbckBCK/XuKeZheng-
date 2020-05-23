export default {
    data() {
        return {
            tableData: [{
                    name: "年度：",
                    td1: "1"
                },
                {
                    name: "申请业务名称：",
                    td2: "2"
                },
                {
                    name: "工程名称：",
                    td3: "3"
                },
                {
                    name: "",
                    td4: "4"
                }
            ],
            v1: "",
            v2: "",
            v3: "",
            fileList: []
        };
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 3) {
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            }
        },
        goFill() {
            this.$router.push({ path: "baseInfo" })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    },

};