export default {
    data() {
        return {
            tableData: [{
                firstcol: "项目名称:",
                thirdcol: "工程名称:",
                td1: '1'
            }, {
                firstcol: "建设单位:",
                thirdcol: "总面积:",
                td2: '2'
            }, {
                firstcol: "项目编号:",
                thirdcol: "",
                td3: '3'
            }, {
                firstcol: "建设规模:",
                thirdcol: "",
                td4: '4'
            }, {
                firstcol: "招标方式:",
                thirdcol: "招标类型:",
                td5: '5'
            }, {
                firstcol: "中标单位:",
                thirdcol: "中标单位组织机构代码:",
                td6: '6'
            }, {
                firstcol: "中标企业资质等级:",
                thirdcol: "中标企业资质证书号:",
                td7: '7'
            }, {
                firstcol: "中标金额:",
                thirdcol: "中标日期:",
                td8: '8'
            }, {
                firstcol: "中标通知书编号:",
                thirdcol: "备案时间:",
                td9: '9'
            }, {
                firstcol: "招标代理单位名称:",
                thirdcol: "招标代理单位组织机构代码:",
                td10: '10'
            }, {
                firstcol: "项目负责人姓名:",
                thirdcol: "",
                td11: '11'
            }, {
                firstcol: "证件类型:",
                thirdcol: "证件号码:",
                td12: '12'
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
            // 绑定input值 end
            multipleSelection: [],
            options1: [{
                value: '选项1',
                label: '公开招标'
            }, ],
            options2: [{
                value: '选项1',
                label: '身份证'
            }, ],
            options3: [{
                value: '选项1',
                label: '施工'
            }, ],
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
            if (rowIndex === 3) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            } else if (rowIndex === 2) {
                if (columnIndex === 2) {
                    return [1, 2];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            } else if (rowIndex === 10) {
                if (columnIndex === 2) {
                    return [1, 2];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            }
        },
        goback() {
            this.$router.go(-1)
        }
    }
};