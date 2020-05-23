export default {

    data() {
        return {
            checked0: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
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
                },
                {
                    date: "申报日期起：",
                    td5: "5",
                    address: "申报日期止：",
                },
                {
                    date: "申报日期起：",
                    td6: "6",
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
            currentPage4: 4
        };
    },
    methods: {
        goChoose(item) {
            this.item.splice(item, 1)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        selectAll() {
            this.checked1 = true
            this.checked2 = true
            this.checked3 = true
            this.checked4 = true
            this.checked5 = true
        },
        cancel() {
            this.checked1 = false
            this.checked2 = false
            this.checked3 = false
            this.checked4 = false
            this.checked5 = false
        },
        changeCheckbox1() {
            this.checked1 = !this.checked1
        },
        changeCheckbox2() {
            this.checked2 = !this.checked2
        },
        changeCheckbox3() {
            this.checked3 = !this.checked3
        },
        changeCheckbox4() {
            this.checked4 = !this.checked4
        },
        changeCheckbox5() {
            this.checked5 = !this.checked5
        }
    }
};