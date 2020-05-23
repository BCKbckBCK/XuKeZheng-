export default {
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '四川省'
            }],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            options2: [{
                value: '选项1',
                label: '成都市'
            }],
            options3: [{
                value: '选项1',
                label: '新津县'
            }],
            options4: [{
                value: '选项1',
                label: "有限责任"
            }],
            options5: [{
                value: '选项1',
                label: '市政基础'
            }],
            options6: [{
                value: '选项1',
                label: '四川省'
            }],
            options7: [{
                value: '选项1',
                label: "德阳市"
            }],
            options8: [{
                value: '选项1',
                label: '新津县'
            }],
            developmentOrganization: "",
            legalPersonPhone: "",
            contactPhone: "",
            address: "",
            fddbr: "",
            fzrzc: "",
            jsfzr: "",
            fzwdh: "",
            lzr: "",
            jsdwxmfzr: "",
            jsdwxmfzrdh: "",
            jsdwxmfzrzc: "",
            itemName: "",
            projectName: "",
            textarea: "",
            v9: "",
            tableData: [{
                    date: "建设单位:",
                    td1: "1",
                    province: "上海",

                },
                {
                    date: "建设单位所属地:",
                    td2: "2",
                    province: "上海",
                    address: "建设单位地址:",
                    co2: "2"
                },
                {
                    date: "所有制性质:",
                    td3: "3",
                    province: "上海",
                    address: "法定代表人：",
                    co3: "3"
                },
                {
                    date: "法人电话:",
                    td4: "4",
                    province: "上海",
                    address: "领证人：",
                    co4: "4"
                },
                {
                    date: "联系电话:",
                    td5: "5",
                    province: "上海",
                    address: "建设单位项目负责人：",
                    co5: "5"
                },
                {
                    date: "建设单位项目负责人职称：",
                    td6: "6",
                    province: "上海",
                    address: "建设单位项目负责人电话：",
                    co6: "6"
                },
                {
                    date: "建设单位技术负责人",
                    td7: "7",
                    province: "上海",
                    address: "建设单位技术负责人职称：",
                    co7: "7"
                },
                {
                    date: "建设单位技术负责人电话",
                    td8: "8",
                    province: "上海",
                }
            ],
            tableData1: [{
                    date: "项目名称:",
                    td1: "1",
                    address: "工程名称:",
                    co1: ""
                },
                {
                    date: "工程类别:",
                    td2: "2",
                    address: "工程所属地:",
                    co2: "2"
                },
                {
                    date: "建设地址:",
                    td3: "3",
                    co3: "3"
                },
                {
                    date: "建设规模:",
                    td4: "4",
                    co4: "4"
                }
            ]
        };
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            } else if (rowIndex === 7) {
                if (columnIndex === 2) {
                    return [1, 2];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            }
        },
        arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 2) {
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

        }
        // handleSizeChange(val) {
        //     console.log(`每页 ${val} 条`);
        // },
        // handleCurrentChange(val) {
        //     console.log(`当前页: ${val}`);
        // }
    }
};