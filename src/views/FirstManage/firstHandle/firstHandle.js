export default {

    data() {
        return {
            tableData: [{
                    date: "工程名称：",
                    td1: "1",
                    address: "工程所属地：",

                },
                {
                    date: "建设地址：",
                    td2: "2",

                },
                {
                    date: "办理状态：",
                    td3: "3",
                    address: "审核结果：",

                },
                {
                    date: "申报日期起：",
                    td4: "4",
                    address: "申报日期止：",

                }
            ],
            tableData1: [{
                date: '1',
                name: '德阳市庐山北路德阳市庐山北路德阳市庐山北路德阳市庐山北路',
                province: '四川省德阳市',
                city: '',
                address: '--',
                zip: "未上报",
            }, ],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            v1: "",
            v2: "",
            v3: "",
            v4: "",
            v5: "",
            options1: [{
                value: '选项1',
                label: '--全部--'
            }],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            options2: [{
                value: '选项1',
                label: '四川省'
            }],
            options3: [{
                value: '选项1',
                label: '成都市'
            }],
            options4: [{
                value: '选项1',
                label: '****'
            }],
            options5: [{
                value: '选项1',
                label: '--全部--'
            }],
        };
    },
    methods: {
        goChoose() {
            this.$router.push({ path: "chooseProject" })
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 1) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            } else if (rowIndex === 0) {
                if (columnIndex === 4) {
                    return [4, 1];
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