import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/login'
    },
    {
        path: '/system',
        component: Layout,
        redirect: '/system/userList',
        name: 'system',
        meta: { title: '系统管理', icon: 'example' },
        roles: ['admin'], // 可访问权限
        children: [{
                path: 'userList',
                name: 'UserList',
                component: () =>
                    import ('@/views/system/userList.vue'),
                meta: { title: '管理用户', icon: 'password' },
                roles: ['admin'] // 可访问权限
            },
            {
                path: 'userEdit',
                name: 'UserEdit',
                component: () =>
                    import ('@/views/system/userEdit.vue'),
                meta: { title: '添加/编辑用户' },
                roles: ['admin'], // 可访问权限
                hidden: true // true=不在菜单里显示
            }
        ]
    },
    //   初次办理
    {
        path: '/FirstHandle',
        name: 'FirstHandle',
        component: Layout,
        // redirect: 'firstHandle.vue',
        meta: { title: '初次办理', icon: 'password' },
        roles: ['admin'], // 可访问权限
        children: [{
                path: 'firstHandle',
                name: 'firstHandle',
                component: () =>
                    import ('@/views/FirstManage/newAddItem/newAddItem.vue'),
                // redirect: '/FirstManage/firstHandle',
                meta: { title: '新增业务', icon: 'password' },
                // roles: ['admin'], // 可访问权限
                // 新增业务子路由
                children: [{
                        path: 'firstHandle',
                        name: 'firstHandle',
                        // redirect: '/FirstManage/firstHandle/baseInfo',
                        component: () =>
                            import ('@/views/FirstManage/firstHandle/firstHandle.vue'),
                        meta: { title: '点击办理', icon: 'password' },
                        roles: ['admin'], // 可访问权限
                    },
                    {
                        path: 'chooseProject',
                        name: 'chooseProject',
                        component: () =>
                            import ('@/views/FirstManage/chooseProject/chooseProject.vue'),
                        meta: { title: '选择工程', icon: 'password' },
                        roles: ['admin'], // 可访问权限
                        hidden: true
                    },
                    {
                        path: 'baseInfo',
                        name: 'baseInfo',
                        // redirect: '/FirstManage/firstHandle/baseInfo',
                        component: () =>
                            import ('@/views/FirstManage/baseInfo/baseInfo.vue'),
                        meta: { title: '工程简要说明', icon: 'password' },
                        roles: ['admin'], // 可访问权限
                    },
                    {
                        path: 'constructTable',
                        name: 'constructTable',
                        // redirect: '/FirstManage/firstHandle/constructTable',
                        component: () =>
                            import ('@/views/FirstManage/constructTable/constructTable.vue'),
                        meta: { title: '工程项目明细', icon: 'password' },
                        roles: ['admin'], // 可访问权限
                    },









                    {
                        path: 'detailInfo',
                        name: 'detailInfo',
                        component: () =>
                            import ('@/views/FirstManage/detailInfo/detailInfo.vue'),
                        meta: { title: '建筑工程项目明细信息', icon: 'password' },
                        roles: ['admin'], // 可访问权限
                        hidden: true
                    },


  {
                path: 'joinBuild/joinBuild',
                name: 'joinBuild',
                component: () =>
                    import ('@/views/FirstManage/joinBuild/joinBuild.vue'),
                meta: { title: '参与建设单位', icon: 'password'  },
                roles: ['admin'] ,// 可访问权限
                children:[


                    {
                        path:'generalContractor',
                        name:'generalContractor',
                        component:()=>
                        import('@/views/FirstManage/generalContractor/generalContractor.vue'),
                        meta: { title: '总承包单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
    
                            {
                                path: 'company',
                                name: 'generalContractor',
                                component: () =>
                                    import ('@/views/FirstManage/generalContractor/company.vue'),
                                meta: { title: '总承包单位' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage011111',
                                component: () =>
                                    import ('@/views/FirstManage/generalContractor/companyMessage.vue'),
                                meta: { title: '企业信息', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                              // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson011111',
                                component: () =>
                                    import ('@/views/FirstManage/generalContractor/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                              // true=不在菜单里显示
                
                
                            },
                        ]
    
                    },
                    
                    {
                        path:'professionalContractor',
                        name:'professionalContractor',
                        component:()=>
                        import('@/views/FirstManage/professionalContractor/professionalContractor.vue'),
                        meta: { title: '专业承包单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
                            {
                                path: 'professionalContractor/index',
                                name: 'professionalContractor11111',
                                component: () =>
                                    import ('@/views/FirstManage/professionalContractor/index.vue'),
                                meta: { title: '专业承包单位', icon: 'password' },
                                
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'professionalContractor/company',
                                name: 'company111111',
                                component: () =>
                                    import ('@/views/FirstManage/professionalContractor/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
                            {
                                path: 'professionalContractor/newPerson',
                                name: 'newPerson111111',
                                component: () =>
                                    import ('@/views/FirstManage/professionalContractor/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                              
                            },
                            {
                                path: 'professionalContractor/companyMessage',
                                name: 'companyMessage1111111',
                                component: () =>
                                    import ('@/views/FirstManage/professionalContractor/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                
                            {
                                path: 'professionalContractor/lookCompany',
                                name: 'lookCompany111111',
                                component: () =>
                                    import ('@/views/FirstManage/professionalContractor/lookCompany.vue'),
                                meta: { title: '工程明细', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
    
                        ]
    
                    },
    
                    {
                        path:'designUnit',
                        name:'designUnit',
                        component:()=>
                        import('@/views/FirstManage/designUnit/designUnit.vue'),
                        meta: { title: '设计单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
    
                            {
                                path: 'index',
                                name: 'designUnit11111',
                                component: () =>
                                    import ('@/views/FirstManage/designUnit/index.vue'),
                                meta: { title: '设计单位', icon: 'password' },
                                
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company411111',
                                component: () =>
                                    import ('@/views/FirstManage/designUnit/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                 // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson411111',
                                component: () =>
                                    import ('@/views/FirstManage/designUnit/newPerson.vue'),
                                meta: { title: '人员信息', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage411111',
                                component: () =>
                                    import ('@/views/FirstManage/designUnit/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                
                            {
                                path: 'lookCompany',
                                name: 'lookCompany411111',
                                component: () =>
                                    import ('@/views/FirstManage/designUnit/lookCompany.vue'),
                                meta: { title: '工程明细', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                
                            },
                        ]
    
                    },
                    {
                        path:'laborUnit',
                        name:'laborUnit',
                        component:()=>
                        import('@/views/FirstManage/laborUnit/laborUnit.vue'),
                        meta: { title: '劳务分包单位' , icon: 'password' },
                        roles: ['admin'], // 可访问权限
                        children:[
    
                            {
                                path: 'index',
                                name: 'laborUnit11111',
                                component: () =>
                                    import ('@/views/FirstManage/laborUnit/index.vue'),
                                meta: { title: '劳务分包单位', icon: 'password' },
                                
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company211111',
                                component: () =>
                                    import ('@/views/FirstManage/laborUnit/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson211111',
                                component: () =>
                                    import ('@/views/FirstManage/laborUnit/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                            {
                                path: 'laborUnit/companyMessage',
                                name: 'companyMessage211111',
                                component: () =>
                                    import ('@/views/FirstManage/laborUnit/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                              
                            },
                
                            {
                                path: 'laborUnit/lookCompany',
                                name: 'lookCompany211111',
                                component: () =>
                                    import ('@/views/FirstManage/laborUnit/lookCompany.vue'),
                                meta: { title: '工程明细' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                
                        ]
    
                    },
                    {
                        path:'explorationUnit',
                        name:'explorationUnit',
                        component:()=>
                        import('@/views/FirstManage/explorationUnit/explorationUnit.vue'),
                        meta: { title: '勘察单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
                            {
                                path: 'index',
                                name: 'explorationUnit11111',
                                component: () =>
                                    import ('@/views/FirstManage/explorationUnit/index.vue'),
                                meta: { title: '勘察单位', icon: 'password' },
                               
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company311111',
                                component: () =>
                                    import ('@/views/FirstManage/explorationUnit/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson311111',
                                component: () =>
                                    import ('@/views/FirstManage/explorationUnit/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                            {
                                path: 'explorationUnit/companyMessage',
                                name: 'companyMessage311111',
                                component: () =>
                                    import ('@/views/FirstManage/explorationUnit/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                 // true=不在菜单里显示
                            },
                
                            {
                                path: 'explorationUnit/lookCompany',
                                name: 'lookCompany311111',
                                component: () =>
                                    import ('@/views/FirstManage/explorationUnit/lookCompany.vue'),
                                meta: { title: '工程明细' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               
                
                            },
    
                        ]
    
                    },{
                    path:'contralUnit',
                    name:'contralUnit',
                    component:()=>
                    import('@/views/FirstManage/contralUnit/contralUnit.vue'),
                    meta: { title: '监理单位' , icon: 'password' },
                    roles: ['admin'], // 可访问权限
                    children:[
                        {
                            path: 'index',
                            name: 'contralUnit11111',
                            component: () =>
                                import ('@/views/FirstManage/contralUnit/index.vue'),
                            meta: { title: '监理单位', icon: 'password' },
                            
                            roles: ['admin'] // 可访问权限
                        },
                        {
                            path: 'company',
                            name: 'company511111',
                            component: () =>
                                import ('@/views/FirstManage/contralUnit/company.vue'),
                            meta: { title: '企业信息' , icon: 'password' },
                         
                            roles: ['admin'], // 可访问权限
            
                        },
                        {
                            path: 'newPerson',
                            name: 'newPerson511111',
                            component: () =>
                                import ('@/views/FirstManage/contralUnit/newPerson.vue'),
                            meta: { title: '人员信息' , icon: 'password' },
                           
                            roles: ['admin'], // 可访问权限
            
                        },
                        {
                            path: 'companyMessage',
                            name: 'companyMessage511111',
                            component: () =>
                                import ('@/views/FirstManage/contralUnit/companyMessage.vue'),
                            meta: { title: '企业列表', icon: 'password'  },
                          
                            roles: ['admin'], // 可访问权限
            
                        },
            
                        {
                            path: 'lookCompany',
                            name: 'lookCompany511111',
                            component: () =>
                                import ('@/views/FirstManage/contralUnit/lookCompany.vue'),
                            meta: { title: '工程明细', icon: 'password'  },
                          
                            roles: ['admin'], // 可访问权限
                            // true=不在菜单里显示
            
                        },
    
                    ]
    
                },
                ]
            },





                    // ````````````````````````````
                    {
                        path: 'ItemProgressMater',
                        name: 'ItemProgressMater',
                        // redirect: '/FirstManage/chooseBookInfo/chooseBookInfo',
                        component: () =>
                            import ('@/views/FirstManage/ItemProgressMater/ItemProgressMater.vue'),
                        meta: { title: '项目环节材料', icon: 'password' },
                        roles: ['admin'], // 可访问权限
                        children: [{
                                path: 'chooseBookInfo',
                                name: 'chooseBookInfo',
                                component: () =>
                                    import ('@/views/FirstManage/chooseBookInfo/chooseBookInfo.vue'),
                                meta: { title: '选址意见书信息', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'upload',
                                name: 'upload',
                                component: () =>
                                    import ('@/views/FirstManage/upload/upload.vue'),
                                meta: { title: '上传文件', icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                hidden: true
                            },
                            {
                                path: 'constructionLandLicence',
                                name: 'constructionLandLicence',
                                component: () =>
                                    import ('@/views/FirstManage/constructionLandLicence/constructionLandLicence.vue'),
                                meta: { title: '建设用地规划许可证', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'constructionProjectLicence',
                                name: 'constructionProjectLicence',
                                component: () =>
                                    import ('@/views/FirstManage/constructionProjectLicence/constructionProjectLicence.vue'),
                                meta: { title: '建设工程规划许可证', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'bidInfo',
                                name: 'bidInfo',
                                component: () =>
                                    import ('@/views/FirstManage/bidInfo/bidInfo.vue'),
                                meta: { title: '招投标信息', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'notDeal',
                                name: 'notDeal',
                                component: () =>
                                    import ('@/views/FirstManage/notDeal/notDeal.vue'),
                                meta: { title: '暂不办理', icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // hidden:true
                            },
                            {
                                path: 'contractRecord',
                                name: 'bidInfo',
                                component: () =>
                                    import ('@/views/FirstManage/contractRecord/contractRecord.vue'),
                                meta: { title: '合同备案', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'workImgCheckInfo',
                                name: 'chooseBookInfo',
                                component: () =>
                                    import ('@/views/FirstManage/workImgCheckInfo/workImgCheckInfo.vue'),
                                meta: { title: '施工图审查信息', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'quilitySafe',
                                name: 'chooseBookInfo',
                                component: () =>
                                    import ('@/views/FirstManage/quilitySafe/quilitySafe.vue'),
                                meta: { title: '质量安全监督手续', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'proofOfFunds',
                                name: 'proofOfFunds',
                                component: () =>
                                    import ('@/views/FirstManage/proofOfFunds/proofOfFunds.vue'),
                                meta: { title: '资金保函或证明', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'otherMaterial',
                                name: 'otherMaterial',
                                component: () =>
                                    import ('@/views/FirstManage/otherMaterial/otherMaterial.vue'),
                                meta: { title: '其他材料', icon: 'password' },
                                roles: ['admin'] // 可访问权限
                            },

                            {
                                path: 'bidDetail',
                                name: 'bidDetail',
                                component: () =>
                                    import ('@/views/FirstManage/bidDetail/bidDetail.vue'),
                                meta: { title: '招投标信息填写', icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                hidden: true
                            },
                        ]
                    },
                    // 新增业务子路由end
                
              
                    {
                        path: 'cashDeposite',
                        name: 'cashDeposite',
                        component: () =>
                            import ('@/views/FirstManage/cashDeposite/cashDeposite.vue'),
                        meta: { title: '保证金确认表', icon: 'example' },
                        roles: ['admin'], // 可访问权限
        
                    },
                    {
                        path: 'applicationMaterial',
        
        
                        name: 'applicationMaterial',
                        meta: { title: '申报材料', icon: 'example' },
                        roles: ['admin'], // 可访问权限
        
        
        
                        component: () =>
                            import ('@/views/FirstManage/applicationMaterial/applicationMaterial.vue'),
        
        
        
        
                    },
                    {
                        path: 'dataReport',
        
                        name: 'dataReport',
                        component: () =>
                            import ('@/views/FirstManage/dataReport/dataReport.vue'),
                        meta: { title: '数据上报', icon: 'password' },
                        roles: ['admin'], // 可访问权限
        
                    },
        
                
                    {
                        path: 'declarationForm',
                        name: 'declarationForm',
                        component: () =>
                            import ('@/views/FirstManage/declarationForm/declarationForm.vue'),
                        meta: { title: '申报表打印', icon: 'password' },
                        roles: ['admin'] // 可访问权限
                    },
                
                
                
                
                ]
            }, 
          
          

           
           
          
           




           /* {
                path: 'joinBuild/joinBuild',
                name: 'joinBuild',
                component: () =>
                    import ('@/views/joinBuild/joinBuild.vue'),
                meta: { title: '参与建设单位' },
                roles: ['admin'] // 可访问权限
            },*/

           



            // {
            //     path: 'chooseBookInfo',
            //     name: 'chooseBookInfo',
            //     component: () =>
            //         import ('@/views/FirstManage/chooseBookInfo/chooseBookInfo.vue'),
            //     meta: { title: '选址意见书信息', icon: 'password' },
            //     roles: ['admin'] // 可访问权限
            // },






        
        ]
    },
    //   end 初次办理

    //延期办理
    {
        path: '/putOffHandle',
        component: Layout,
        redirect: '/putOffHandle',
        name: 'putOffHandle',
        meta: { title: '延期办理',icon: 'password'  },
        roles: ['admin'], // 可访问权限
        children: [{
                path: 'index',
                name: 'putOffHandle',
                component: () =>
                    import ('@/views/putOffHandle/index.vue'),
                meta: { title: '延期办理',icon: 'password'  },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'newBusiness',
                name: 'newBusiness',
                component: () =>
                    import ('@/views/putOffHandle/newBusiness.vue'),
                meta: { title: '新增业务' ,icon: 'password' },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'delayDeclare',
                name: 'delayDeclare',
                component: () =>
                    import ('@/views/putOffHandle/delayDeclare.vue'),
                meta: { title: '延期申报' ,icon: 'password' },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'delayMaterial',
                name: 'delayMaterial',
                component: () =>
                    import ('@/views/putOffHandle/delayMaterial.vue'),
                meta: { title: '延期材料' ,icon: 'password' },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'delayReport',
                name: 'delayReport',
                component: () =>
                    import ('@/views/putOffHandle/delayReport.vue'),
                meta: { title: '延期上报',icon: 'password' },
                roles: ['admin'], // 可访问权限

            },

        ]
    },


    //变更办理
    {
        path: '/changeHandle',
        component: Layout,
        name: 'changeHandle',
        meta: { title: '变更办理', icon: 'password' },
        roles: ['admin'], // 可访问权限
        children: [


         











            {
                path: 'index',
                name: 'changeHandle',
                component: () =>
                    import ('@/views/changeHandle/index.vue'),
                meta: { title: '变更办理' , icon: 'password' },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'newBusiness',
                name: 'newBusiness',
                component: () =>
                    import ('@/views/changeHandle/newBusiness.vue'),
                meta: { title: '新增业务', icon: 'password'  },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'changeDeclare',
                name: 'changeDeclare',
                component: () =>
                    import ('@/views/changeHandle/changeDeclare.vue'),
                meta: { title: '变更申报', icon: 'password'  },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'projectDetail',
                name: 'projectDetail',
                component: () =>
                    import ('@/views/changeHandle/projectDetail.vue'),
                meta: { title: '项目明细' , icon: 'password' },
                roles: ['admin'], // 可访问权限

            },
            {
                path: 'lookCompany',
                name: 'lookCompany',
                component: () =>
                    import ('@/views/changeHandle/lookCompany.vue'),
                meta: { title: '查看修改项目' , icon: 'password' },
                roles: ['admin'], // 可访问权限
                hidden: true,
            },
            {
                path: 'joinBuild/joinBuild',
                name: 'joinBuild',
                component: () =>
                    import ('@/views/changeHandle/joinBuild.vue'),
                meta: { title: '参与建设单位', icon: 'password'  },
                roles: ['admin'] ,// 可访问权限
                children:[


                    {
                        path:'generalContractor',
                        name:'generalContractor',
                        component:()=>
                        import('@/views/changeHandle/generalContractor/generalContractor.vue'),
                        meta: { title: '总承包单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
    
                            {
                                path: 'company',
                                name: 'generalContractor',
                                component: () =>
                                    import ('@/views/changeHandle/generalContractor/company.vue'),
                                meta: { title: '总承包单位' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage011111',
                                component: () =>
                                    import ('@/views/changeHandle/generalContractor/companyMessage.vue'),
                                meta: { title: '企业信息', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                              // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson011111',
                                component: () =>
                                    import ('@/views/changeHandle/generalContractor/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                              // true=不在菜单里显示
                
                
                            },
                        ]
    
                    },
                    
                    {
                        path:'professionalContractor',
                        name:'professionalContractor',
                        component:()=>
                        import('@/views/changeHandle/professionalContractor/professionalContractor.vue'),
                        meta: { title: '专业承包单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
                            {
                                path: 'index',
                                name: 'professionalContractor11111',
                                component: () =>
                                    import ('@/views/changeHandle/professionalContractor/index.vue'),
                                meta: { title: '专业承包单位', icon: 'password' },
                                
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company111111',
                                component: () =>
                                    import ('@/views/changeHandle/professionalContractor/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson111111',
                                component: () =>
                                    import ('@/views/changeHandle/professionalContractor/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                              
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage1111111',
                                component: () =>
                                    import ('@/views/changeHandle/professionalContractor/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                
                            {
                                path: 'lookCompany',
                                name: 'lookCompany111111',
                                component: () =>
                                    import ('@/views/changeHandle/professionalContractor/lookCompany.vue'),
                                meta: { title: '工程明细', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
    
                        ]
    
                    },
    
                    {
                        path:'designUnit',
                        name:'designUnit',
                        component:()=>
                        import('@/views/changeHandle/designUnit/designUnit.vue'),
                        meta: { title: '设计单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
    
                            {
                                path: 'index',
                                name: 'designUnit11111',
                                component: () =>
                                    import ('@/views/changeHandle/designUnit/index.vue'),
                                meta: { title: '设计单位', icon: 'password' },
                                
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company411111',
                                component: () =>
                                    import ('@/views/changeHandle/designUnit/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                 // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson411111',
                                component: () =>
                                    import ('@/views/changeHandle/designUnit/newPerson.vue'),
                                meta: { title: '人员信息', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage411111',
                                component: () =>
                                    import ('@/views/changeHandle/designUnit/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                
                            {
                                path: 'lookCompany',
                                name: 'lookCompany411111',
                                component: () =>
                                    import ('@/views/changeHandle/designUnit/lookCompany.vue'),
                                meta: { title: '工程明细', icon: 'password'  },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                
                            },
                        ]
    
                    },
                    {
                        path:'laborUnit',
                        name:'laborUnit',
                        component:()=>
                        import('@/views/changeHandle/laborUnit/laborUnit.vue'),
                        meta: { title: '劳务分包单位' , icon: 'password' },
                        roles: ['admin'], // 可访问权限
                        children:[
    
                            {
                                path: 'index',
                                name: 'laborUnit11111',
                                component: () =>
                                    import ('@/views/changeHandle/laborUnit/index.vue'),
                                meta: { title: '劳务分包单位', icon: 'password' },
                                
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company211111',
                                component: () =>
                                    import ('@/views/changeHandle/laborUnit/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson211111',
                                component: () =>
                                    import ('@/views/changeHandle/laborUnit/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage211111',
                                component: () =>
                                    import ('@/views/changeHandle/laborUnit/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                              
                            },
                
                            {
                                path: 'lookCompany',
                                name: 'lookCompany211111',
                                component: () =>
                                    import ('@/views/changeHandle/laborUnit/lookCompany.vue'),
                                meta: { title: '工程明细' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                
                        ]
    
                    },
                    {
                        path:'explorationUnit',
                        name:'explorationUnit',
                        component:()=>
                        import('@/views/changeHandle/explorationUnit/explorationUnit.vue'),
                        meta: { title: '勘察单位', icon: 'password'  },
                        roles: ['admin'], // 可访问权限
                        children:[
                            {
                                path: 'index',
                                name: 'explorationUnit11111',
                                component: () =>
                                    import ('@/views/changeHandle/explorationUnit/index.vue'),
                                meta: { title: '勘察单位', icon: 'password' },
                               
                                roles: ['admin'] // 可访问权限
                            },
                            {
                                path: 'company',
                                name: 'company311111',
                                component: () =>
                                    import ('@/views/changeHandle/explorationUnit/company.vue'),
                                meta: { title: '企业信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               // true=不在菜单里显示
                            },
                            {
                                path: 'newPerson',
                                name: 'newPerson311111',
                                component: () =>
                                    import ('@/views/changeHandle/explorationUnit/newPerson.vue'),
                                meta: { title: '人员信息' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                // true=不在菜单里显示
                            },
                            {
                                path: 'companyMessage',
                                name: 'companyMessage311111',
                                component: () =>
                                    import ('@/views/changeHandle/explorationUnit/companyMessage.vue'),
                                meta: { title: '企业列表' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                                 // true=不在菜单里显示
                            },
                
                            {
                                path: 'lookCompany',
                                name: 'lookCompany311111',
                                component: () =>
                                    import ('@/views/changeHandle/explorationUnit/lookCompany.vue'),
                                meta: { title: '工程明细' , icon: 'password' },
                                roles: ['admin'], // 可访问权限
                               
                
                            },
    
                        ]
    
                    },{
                    path:'contralUnit',
                    name:'contralUnit',
                    component:()=>
                    import('@/views/changeHandle/contralUnit/contralUnit.vue'),
                    meta: { title: '监理单位' , icon: 'password' },
                    roles: ['admin'], // 可访问权限
                    children:[
                        {
                            path: 'index',
                            name: 'contralUnit11111',
                            component: () =>
                                import ('@/views/changeHandle/contralUnit/index.vue'),
                            meta: { title: '监理单位', icon: 'password' },
                            
                            roles: ['admin'] // 可访问权限
                        },
                        {
                            path: 'company',
                            name: 'company511111',
                            component: () =>
                                import ('@/views/changeHandle/contralUnit/company.vue'),
                            meta: { title: '企业信息' , icon: 'password' },
                         
                            roles: ['admin'], // 可访问权限
            
                        },
                        {
                            path: 'newPerson',
                            name: 'newPerson511111',
                            component: () =>
                                import ('@/views/changeHandle/contralUnit/newPerson.vue'),
                            meta: { title: '人员信息' , icon: 'password' },
                           
                            roles: ['admin'], // 可访问权限
            
                        },
                        {
                            path: 'companyMessage',
                            name: 'companyMessage511111',
                            component: () =>
                                import ('@/views/changeHandle/contralUnit/companyMessage.vue'),
                            meta: { title: '企业列表', icon: 'password'  },
                          
                            roles: ['admin'], // 可访问权限
            
                        },
            
                        {
                            path: 'lookCompany',
                            name: 'lookCompany511111',
                            component: () =>
                                import ('@/views/changeHandle/contralUnit/lookCompany.vue'),
                            meta: { title: '工程明细', icon: 'password'  },
                          
                            roles: ['admin'], // 可访问权限
                            // true=不在菜单里显示
            
                        },
    
                    ]
    
                },
                ]
            },

            {
                path: 'fileUpload',
                name: 'fileUpload',
                component: () =>
                    import ('@/views/changeHandle/fileUpload.vue'),
                meta: { title: '文件上传', icon: 'password'  },
                roles: ['admin'], // 可访问权限

            },

            {
                path: 'changeReport',
                name: 'changeReport',
                component: () =>
                    import ('@/views/changeHandle/changeReport.vue'),
                meta: { title: '变更上报', icon: 'password'  },
                roles: ['admin'], // 可访问权限

            },

        ]
    },
    // 申报表
    // {
    //     path: '/declarationForm',
    //     component: Layout,
    //     name: 'declarationForm',
    //     meta: { title: '申报表', icon: 'example' },
    //     roles: ['admin'] // 可访问权限
    // },
    // end申报表
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router