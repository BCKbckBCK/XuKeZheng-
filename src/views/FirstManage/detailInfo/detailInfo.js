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
            projectName: "",
            textarea: "",
            v1: "",
            v2: "",
            v3: "",
            v4: "",
            v5: "",
            v6: "",
            tableData: [{
                    date: "单体工程名称:",
                    td1: "1",
                },
                {
                    date: "建筑面积/长度:",
                    td2: "2",
                    co2: "2"
                },
                {
                    date: "其中:地上",
                    td3: "3",
                    address: "地下:",
                    co3: "3"
                },
                {
                    date: "层数:地下",
                    td4: "4",
                    address: "地上:",
                    co4: "4"
                },
                {
                    date: "备注:",
                    td5: "5",
                    co5: "5"
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
            } else if (rowIndex === 1) {
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
        }
    }
};