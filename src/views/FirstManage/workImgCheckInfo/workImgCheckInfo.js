export default {
    data() {
        return {
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
            v1: "",
            v2: "",
            v3: "",
            v4: "",
            v5: "",
            v6: "",
            v7: "",
            v8: "",
            v9: "",
            v10: "",
            options: [{
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
            value: "",
            tableData: [{
                    date: "办理选项:",
                    td1: "1",
                },
                {
                    date: "项目名称:",
                    address: "建设单位:",
                    td2: "2",
                    co2: "2"
                },
                {
                    date: "项目拟选位置:",
                    td3: "3",
                    co3: "3"
                },
                {
                    date: "拟用地面积:",
                    td4: "4",
                    address: "选址意见证书编号",
                    co4: "4"
                },
                {
                    date: "拟建设规模:",
                    td5: "5",
                    co5: "5"
                },
                {
                    date: "建设项目依据:",
                    td6: "6",
                    co6: "6"
                },
                {
                    date: "用地批准手续:",
                    td7: "7",
                    co7: "7"
                },
                {
                    date: "发证日期:",
                    td8: "8",
                    co8: "8",
                    address: "核发机关:"
                }
            ]
        };
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                if (columnIndex === 2) {
                    return [1, 2];
                } else if (columnIndex === 9) {
                    return [0, 0];
                }
            } else if (rowIndex === 2) {
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
            } else if (rowIndex === 5) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            } else if (rowIndex === 6) {
                if (columnIndex === 1) {
                    return [1, 3];
                } else if (columnIndex === 99) {
                    return [0, 0];
                }
            }
        },
        Add() {
            this.$router.push({ path: "upload" })
        }
    }
};