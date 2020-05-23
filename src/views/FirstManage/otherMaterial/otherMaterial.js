export default {
    data() {
        return {
            v1: "",
            v2: "",
            v3: "",
            v4: "",
            v5: "",
            v6: "",
            jsfzr: "",
            fzwdh: "",
            lzr: "",
            jsdwxmfzr: "",
            jsdwxmfzrdh: "",
            jsdwxmfzrzc: "",
            itemName: "",
            projectName: "",
            textarea: "",
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            tableData: [{
                    date: "项目名称：",
                    name: "工程名称：",
                    td1: "1",
                },
                {
                    date: "建设单位/长度：",
                    td2: "2",
                    co2: "2"
                },
                {
                    date: "其他材料：",
                    td3: "3",
                    address: "地下：",
                    co3: "3"
                },
                {
                    date: "施工现场是否具备施工条件：",
                    td4: "4",
                    address: "地上:",
                    co4: "4"
                },
                {
                    date: "无拖欠工程款情形的承诺书：",
                    td5: "5",
                    co5: "5"
                }
            ]
        };
    },
    methods: {
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
            } else if (rowIndex === 4) {
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
        }
    }
};