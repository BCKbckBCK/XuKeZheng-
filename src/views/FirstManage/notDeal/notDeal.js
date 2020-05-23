export default {
    data() {
        return {
            reason: "",
            tableData: [{
                    date: "办理选项：",
                    td1: '1'
                },
                {
                    date: "理由：",
                    td2: '2'
                }
            ],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
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
        };
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            }
            if (rowIndex === 1) {
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
    },

};