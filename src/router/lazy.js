import Vue from 'vue';
import Router from 'vue-router';
import PageView from '@/layouts/PageView';
import RouteView from '@/layouts/RouteView';
import MenuView from '@/layouts/MenuView';
import Login from '@/views/login/Login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: '登录页',
            component: Login,
            invisible: true
        },
        {
            path: '/',
            name: '首页',
            component: MenuView,
            redirect: '/login',
            icon: 'none',
            invisible: true,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: RouteView,
                    icon: 'dashboard',
                    children: [
                        {
                            path: '/dashboard/workplace',
                            name: '工作台',
                            component: () => import('@/views/dashboard/WorkPlace'),
                            icon: 'none'
                        },
                        {
                            path: '/dashboard/analysis',
                            name: '分析页',
                            component: () => import('@/views/dashboard/Analysis'),
                            icon: 'none'
                        }
                    ]
                },
                {
                    path: '/form',
                    name: '表单页',
                    component: PageView,
                    icon: 'form',
                    children: [
                        {
                            path: '/form/basic',
                            name: '基础表单',
                            component: () => import('@/views/form/BasicForm'),
                            icon: 'none'
                        },
                        {
                            path: '/form/step',
                            name: '分步表单',
                            component: () => import('@/views/form/stepForm/StepForm'),
                            icon: 'none'
                        },
                        {
                            path: '/form/advanced',
                            name: '高级表单',
                            component: () => import('@/views/form/advancedForm/AdvancedForm'),
                            icon: 'none'
                        }
                    ]
                },
                {
                    path: '/list',
                    name: '列表页',
                    component: PageView,
                    icon: 'table',
                    children: [
                        {
                            path: '/list/query',
                            name: '查询表格',
                            component: () => import('@/views/list/QueryList'),
                            icon: 'none'
                        },
                        {
                            path: '/list/primary',
                            name: '标准列表',
                            component: () => import('@/views/list/StandardList'),
                            icon: 'none'
                        },
                        {
                            path: '/list/card',
                            name: '卡片列表',
                            component: () => import('@/views/list/CardList'),
                            icon: 'none'
                        },
                        {
                            path: '/list/search',
                            name: '搜索列表',
                            component: () => import('@/views/list/search/SearchLayout'),
                            icon: 'none',
                            children: [
                                {
                                    path: '/list/search/article',
                                    name: '文章',
                                    component: () => import('@/views/list/search/ArticleList'),
                                    icon: 'none'
                                },
                                {
                                    path: '/list/search/application',
                                    name: '应用',
                                    component: () => import('@/views/list/search/ApplicationList'),
                                    icon: 'none'
                                },
                                {
                                    path: '/list/search/project',
                                    name: '项目',
                                    component: () => import('@/views/list/search/ProjectList'),
                                    icon: 'none'
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '/detail',
                    name: '详情页',
                    icon: 'profile',
                    component: RouteView,
                    children: [
                        {
                            path: '/detail/basic',
                            name: '基础详情页',
                            icon: 'none',
                            component: () => import('@/views/detail/BasicDetail')
                        },
                        {
                            path: '/detail/advanced',
                            name: '高级详情页',
                            icon: 'none',
                            component: () => import('@/views/detail/AdvancedDetail')
                        }
                    ]
                },
                {
                    path: '/result',
                    name: '结果页',
                    icon: 'check-circle-o',
                    component: PageView,
                    children: [
                        {
                            path: '/result/success',
                            name: '成功',
                            icon: 'none',
                            component: () => import('@/views/result/Success')
                        },
                        {
                            path: '/result/error',
                            name: '失败',
                            icon: 'none',
                            component: () => import('@/views/result/Error')
                        }
                    ]
                },
                {
                    path: '/exception',
                    name: '异常页',
                    icon: 'warning',
                    component: RouteView,
                    children: [
                        {
                            path: '/exception/404',
                            name: '404',
                            icon: 'none',
                            component: () => import('@/views/exception/404')
                        },
                        {
                            path: '/exception/403',
                            name: '403',
                            icon: 'none',
                            component: () => import('@/views/exception/403')
                        },
                        {
                            path: '/exception/500',
                            name: '500',
                            icon: 'none',
                            component: () => import('@/views/exception/500')
                        }
                    ]
                },
                {
                    path: '/components',
                    redirect: '/components/taskcard',
                    name: '小组件',
                    icon: 'appstore-o',
                    component: PageView,
                    children: [
                        {
                            path: '/components/taskcard',
                            name: '任务卡片',
                            icon: 'none',
                            component: () => import('@/views/components/TaskCard')
                        },
                        {
                            path: '/components/palette',
                            name: '颜色复选框',
                            icon: 'none',
                            component: () => import('@/views/components/Palette')
                        }
                    ]
                }
            ]
        }
    ]
});
