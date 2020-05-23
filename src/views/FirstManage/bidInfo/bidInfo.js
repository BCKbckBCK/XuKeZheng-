export default {
    data() {
        return {
            tableData: [{
                number: "1",
                name: "测试2016工程",
                bidtype: "施工",
                getbid: "中国华酒企业股份有限公司",
                bidcode: "111",
                allarea: "2333.0000",
                td1: '1'
            }],
            One: [{
                number: "办理选项:",
                td1: '1'
            }],
            value: "",
            options1: [{
                    value: '选项1',
                    label: '补填'
                },
                {
                    value: '选项2',
                    label: '不需要办理'
                }, {
                    value: '选项3',
                    label: '以后补办'
                }
            ],
            multipleSelection: [],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
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
            if (rowIndex === 0) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            }
        },
        fill() {
            this.$router.push({ path: "bidDetail" })
        }
    }
};