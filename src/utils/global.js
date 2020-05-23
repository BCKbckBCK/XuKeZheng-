import fp from 'lodash/fp'
import Decimal from 'decimal.js'
import dayJs from 'dayjs'

window.fp = fp
window.Decimal = Decimal
window.dayJs = dayJs
window.QuestionType = [{
    text: '文本框',
    value: 1
}, {
    text: '单选按钮',
    value: 2
}, {
    text: '日期',
    value: 3
}, {
    text: '上传图片',
    value: 4
}]
window.IsPay = [{
    text: '付费',
    value: 1
}, {
    text: '免费',
    value: 2
}]
window.Scope = [{
    text: '静默授权',
    value: 'snsapi_base'
}, {
    text: '弹框授权',
    value: 'snsapi_userinfo'
}]
window.ROLE = [{
    text: '管理员',
    value: 'admin'
}, {
    text: '定制用户',
    value: 'pay'
}, {
    text: '测试用户',
    value: 'test'
}, {
    text: '免费用户',
    value: 'free'
}]
