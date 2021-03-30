export default {
    "menu": [
        {
          "redirect": null,
          "path": "/dashboard/analysis",
          "component": "jike/workbench/Workbench",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "itsm-gongzuotai itsm-gongzuotai",
            "title": "工作台"
          },
          "name": "workbench",
          "id": "1254431454171398146"
        },
        {
          "redirect": null,
          "path": "/activities",
          "component": "layouts/RouteView",
          "route": "1",
          "children": [
            {
              "path": "/activityManagement",
              "component": "jike/activity/activityManagement",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "活动列表"
              },
              "name": "activity-list",
              "id": "1205098241075453953"
            },
            {
              "path": "/examineProgress",
              "component": "jike/activity/examineProgress",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "审核进度"
              },
              "name": "examine-progress",
              "id": "1205098241075453343"
            },
            {
              "path": "/saleAdmin",
              "component": "jike/activity/saleAdmin",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "分销商管理"
              },
              "name": "sale-admin",
              "id": "1205098241904653343"
            },
            {
              "path": "/examineDetail",
              "component": "jike/activity/examineDetail",
              "route": "1",
              "hidden": "true",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "审核详情"
              },
              "name": "examine-Detail",
              "id": "1205098241905453343"
            },
            {
              "path": "/activityAudit",
              "component": "jike/activity/activityAudit",
              "route": "1",
              "hidden": "true",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "活动审核"
              },
              "name": "activity-Audit",
              "id": "1205098243405453343"
            }
          ],
          "meta": {
            "keepAlive": true,
            "internalOrExternal": false,
            "icon": "itsm-yingxiaoguanli itsm-yingxiaoguanli",
            "title": "营销管理"
          },
          "name": "activity-list",
          "id": "1254431454145166641456578"
        },
        {
          "path": "/activity/:id",
          "component": "jike/activity/ActivityDetail",
          "hidden": true,
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": true,
            "title": "活动详情"
          },
          "name": "activityDetail",
          "id": "120509824107545358462"
        },
        {
          "path": "/activity/poster/:id",
          "component": "jike/poster/PosterManagement",
          "route": "1",
          "hidden": true,
          "meta": {
            "keepAlive": false,
            "internalOrExternal": true,
            "title": "海报管理"
          },
          "name": "poster",
          "id": "120509824107545312858"
        },
        {
          "redirect": null,
          "path": "/new-activity",
          "component": "jike/activity/ActivityForm",
          "route": "1",
          "hidden": true,
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "itsm-gongzuotai itsm-gongzuotai",
            "title": "新建活动"
          },
          "name": "new-activity",
          "id": "1254431454145166641456575455454"
        },
        {
          "path": "/activity/:id/edit",
          "component": "jike/activity/ActivityForm",
          "hidden": true,
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": true,
            "title": "活动编辑"
          },
          "name": "edit-activity",
          "id": "120509824107545358412"
        },
        {
          "redirect": null,
          "path": "/datacenter",
          "component": "layouts/RouteView",
          "route": "1",
          "children": [
            {
              "path": "/datacenter/datacenter",
              "component": "jike/data-center/DataCenter",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "营销数据"
              },
              "name": "data-center",
              "id": "1205098241075453953"
            },
            {
              "path": "/datacenter/salecenter",
              "component": "jike/data-center/saleCenter",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "分销商数据"
              },
              "name": "sale-center",
              "id": "1205098781075453953"
            }
          ],
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "itsm-shujuzhongxin itsm-shujuzhongxin",
            "title": "数据中心"
          },
          "name": "datacenter",
          "id": "125443145414516664164556"
        },
        {
          "redirect": null,
          "path": "/transaction/list",
          "component": "jike/transaction/TransactionManagement",
          "route": "1",
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "itsm-jiaoyiguanli itsm-jiaoyiguanli",
            "title": "交易记录"
          },
          "name": "transaction-list",
          "id": "125443145414516664364556"
        },
        {
          "redirect": null,
          "path": "/setsysetm",
          "component": "layouts/RouteView",
          "route": "1",
          "children": [
            {
              "path": "/setsysetm/account",
              "component": "jike/account/AccountManagement",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": true,
                "title": "账户信息"
              },
              "name": "account",
              "id": "120509824107545312123"
            }
          ],
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "itsm-xitongshezhi itsm-xitongshezhi",
            "title": "系统设置"
          },
          "name": "order",
          "id": "125443145414516664164589"
        },
        {
          "redirect": null,
          "path": "/account",
          "component": "layouts/RouteView",
          "route": "1",
          "hidden": true,
          "children": [
            {
              "path": "/account/center",
              "component": "account/center/Index",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": false,
                "title": "个人中心"
              },
              "name": "account-center",
              "id": "d86f58e7ab516d3bc6bfb1fe10585f97"
            },
            {
              "path": "/account/settings/base",
              "component": "account/settings/Index",
              "route": "1",
              "children": [
                {
                  "path": "/account/settings/base",
                  "component": "account/settings/BaseSetting",
                  "route": "1",
                  "hidden": true,
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "基本设置"
                  },
                  "name": "account-settings-base",
                  "id": "1367a93f2c410b169faa7abcbad2f77c"
                },
                {
                  "path": "/account/settings/security",
                  "component": "account/settings/Security",
                  "route": "1",
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "安全设置"
                  },
                  "name": "account-settings-security",
                  "id": "ec8d607d0156e198b11853760319c646"
                },
                {
                  "path": "/account/settings/notification",
                  "component": "account/settings/Notification",
                  "route": "1",
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "新消息通知"
                  },
                  "name": "account-settings-notification",
                  "id": "fedfbf4420536cacc0218557d263dfea"
                },
                {
                  "path": "/account/settings/custom",
                  "component": "account/settings/Custom",
                  "route": "1",
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "个性化设置"
                  },
                  "name": "account-settings-custom",
                  "id": "882a73768cfd7f78f3a37584f7299656"
                },
                {
                  "path": "/account/settings/binding",
                  "component": "account/settings/Binding",
                  "route": "1",
                  "meta": {
                    "keepAlive": false,
                    "internalOrExternal": false,
                    "title": "账户绑定"
                  },
                  "name": "account-settings-binding",
                  "id": "4f66409ef3bbd69c1d80469d6e2a885e"
                }
              ],
              "meta": {
                "keepAlive": false,
                "internalOrExternal": false,
                "title": "个人设置"
              },
              "name": "account-settings-base",
              "id": "6e73eb3c26099c191bf03852ee1310a1",
              "alwaysShow": true
            },
            {
              "path": "/dashboard/workplace",
              "component": "dashboard/Workplace",
              "route": "1",
              "meta": {
                "keepAlive": false,
                "internalOrExternal": false,
                "title": "工作台"
              },
              "name": "dashboard-workplace",
              "id": "8fb8172747a78756c11916216b8b8066"
            }
          ],
          "meta": {
            "keepAlive": false,
            "internalOrExternal": false,
            "icon": "user",
            "title": "个人页"
          },
          "name": "account",
          "id": "717f6bee46f44a3897eca9abd6e2ec44"
        }
    ]
}