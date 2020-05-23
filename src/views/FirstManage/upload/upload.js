export default {
    data() {
        return {
            tableData: [{
                    date: "材料名称：",
                    td1: "1"
                },
                {
                    date: "上传附件：",
                    td2: "2"
                }
            ],
            fileName: ""
        };
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
            files.length
          } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            } else if (rowIndex === 1) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            }
        },
    }
};