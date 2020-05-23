export default {
    data() {
        return {
            tableData: [{
                firstcol: "项目名称:",
                thirdcol: "工程名称:",
                td1: '1'
            }, {
                firstcol: "建设单位:",
                thirdcol: "",
                td2: '2'
            }, {
                firstcol: "是否办理担保书:",
                thirdcol: "",
                td3: '3'
            }, {
                firstcol: "资金保函或证明:",
                thirdcol: "",
                td4: '4'
            }, {
                firstcol: "甲方:",
                thirdcol: "乙方:",
                td5: '5'
            }],
            // 绑定input值 start
            xmmc: "",
            jsdw: "",
            xmbh: "",
            jsgm: "",
            zbfs: "",
            zbdw: "",
            zbqyzzdj: "",
            zbje: "",
            zbtzsbh: "",
            zbdldwmc: "",
            xmfzrxm: "",
            zjlx: "",
            gcmc: "",
            zmj: "",
            zblx: "",
            zbdwzjjg: "",
            zbqyzzzsh: "",
            zbrq: "",
            basj: "",
            zbdldwzzjgdm: "",
            zjhm: "",
            value: "",
            // 绑定input值 end
            multipleSelection: [],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            options: [{
                    value: '选项1',
                    label: '是'
                },
                {
                    value: '选项2',
                    label: '否'
                }
            ],
        };
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 删除操作
        open() {
            this.$confirm('确定要删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 1) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            } else if (rowIndex === 2) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            } else if (rowIndex === 3) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        go() {
            this.$router.go(-1)
        },
        add() {
            this.$router.push({ path: "upload" })
        }
    }
};