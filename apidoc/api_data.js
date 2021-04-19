define({ "api": [
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "login",
    "group": "用户注册登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/login"
      }
    ],
    "version": "1.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "用户注册登录"
  },
  {
    "type": "get",
    "url": "/user/register",
    "title": "用户注册",
    "name": "register",
    "group": "用户注册登录",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/user/register"
      }
    ],
    "version": "1.0.0",
    "filename": "router/userRouter.js",
    "groupTitle": "用户注册登录"
  },
  {
    "type": "post",
    "url": "/Reservation/addorder",
    "title": "添加或修改",
    "name": "addorder",
    "group": "管理",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/addorder"
      }
    ],
    "version": "1.0.0",
    "filename": "router/order.js",
    "groupTitle": "管理"
  },
  {
    "type": "get",
    "url": "/Reservation/delorder",
    "title": "删除",
    "name": "delorder",
    "group": "管理",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/delorder"
      }
    ],
    "version": "1.0.0",
    "filename": "router/order.js",
    "groupTitle": "管理"
  },
  {
    "type": "post",
    "url": "/Reservation/getorder",
    "title": "获取订单信息",
    "name": "getorder",
    "group": "管理",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/getorder"
      }
    ],
    "version": "1.0.0",
    "filename": "router/order.js",
    "groupTitle": "管理"
  },
  {
    "type": "post",
    "url": "/Reservation/getorderSelect",
    "title": "获取订单信息",
    "name": "getorderSelect",
    "group": "管理",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/getorderSelect"
      }
    ],
    "version": "1.0.0",
    "filename": "router/order.js",
    "groupTitle": "管理"
  },
  {
    "type": "post",
    "url": "/Reservation/setorder",
    "title": "付款",
    "name": "setorder",
    "group": "管理",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/setorder"
      }
    ],
    "version": "1.0.0",
    "filename": "router/order.js",
    "groupTitle": "管理"
  },
  {
    "type": "post",
    "url": "/Reservation/unsetorder",
    "title": "退款",
    "name": "unsetorder",
    "group": "管理",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/unsetorder"
      }
    ],
    "version": "1.0.0",
    "filename": "router/order.js",
    "groupTitle": "管理"
  },
  {
    "type": "get",
    "url": "/Reservation/getdesk",
    "title": "获取餐桌信息",
    "name": "getdesk",
    "group": "订桌",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>ID(必填)(主键)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/getdesk"
      }
    ],
    "version": "1.0.0",
    "filename": "router/desk.js",
    "groupTitle": "订桌"
  },
  {
    "type": "get",
    "url": "/Reservation/getdesk",
    "title": "获取餐桌信息",
    "name": "getdesk",
    "group": "订桌",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>错误码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/Reservation/getdesk"
      }
    ],
    "version": "1.0.0",
    "filename": "router/desk.js",
    "groupTitle": "订桌"
  }
] });
