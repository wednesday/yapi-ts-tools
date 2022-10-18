import { Propertie } from '../yapi';

const target:Propertie =  {
  'type': 'object',
  'required': [
    'data',
    'msg',
    'success'
  ],
  'properties': {
    'code': {
      'description': 'code码',
      'type': 'integer'
    },
    'data': {
      'type': 'object',
      'properties': {
        '_id': {
          'description': '商品唯一id（uuid）',
          'type': 'string'
        },
        'activitys': {
          'description': '活动信息集合',
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'activityId': {
                'description': '活动id',
                'type': 'string'
              },
              'activityName': {
                'description': '活动名字',
                'type': 'string'
              },
              'cycleBuy': {
                'type': 'object',
                'properties': {
                  'allowChangeAdvanceDay': {
                    'description': '允许客户变更订单属性的提前天数',
                    'type': 'integer'
                  },
                  'allowChangeAdvanceTime': {
                    'description': '允许客户变更订单属性的时间 (同 allowChangeDay属性搭配使用，用于限制某类产品随意更改，降低客户损失)',
                    'type': 'string'
                  },
                  'deliveryBeginDate': {
                    'description': '起始发货日（隔日送有效）',
                    'type': 'string'
                  },
                  'disableCoupon': {
                    'description': '是否允许使用优惠券 true 禁用',
                    'type': 'boolean'
                  },
                  'nextDayBeginDate': {
                    'description': '隔日送有效起始发货日',
                    'type': 'string'
                  },
                  'ruleText': {
                    'description': '配送规则详情',
                    'type': 'array',
                    'items': {
                      'type': 'integer'
                    }
                  },
                  'ruleType': {
                    'description': '配送规则详情 配送周期类型（0-天天送，1-隔日送，2-按周送，3-按月送）',
                    'type': 'integer'
                  },
                  'state': {
                    'description': '周期购商品状态(0-草稿，1-进行中，2-暂停，3-下架)',
                    'type': 'integer'
                  }
                },
                '$$ref': '#/definitions/active.CycleActivity'
              },
              'disableCoupon': {
                'description': '是否允许使用优惠券 true 禁用',
                'type': 'boolean'
              },
              'enable': {
                'description': '是否开启活动',
                'type': 'boolean'
              },
              'endTime': {
                'description': '活动结束时间',
                'type': 'string'
              },
              'groupLine': {
                'description': '拼团活动人数需求',
                'type': 'integer'
              },
              'highestActivityPrice': {
                'description': '活动最高价格',
                'type': 'number'
              },
              'ifPrediction': {
                'description': '是否开启活动预告',
                'type': 'boolean'
              },
              'lowestActivityPrice': {
                'description': '活动最低价格',
                'type': 'number'
              },
              'skus': {
                'description': '活动sku',
                'type': 'array',
                'items': {
                  'type': 'object',
                  'properties': {
                    '_id': {
                      'description': 'skuID',
                      'type': 'string'
                    },
                    'attributeItems': {
                      'description': '规格-子选项',
                      'type': 'array',
                      'items': {
                        'type': 'string'
                      }
                    },
                    'inventory': {
                      'description': 'sku 库存',
                      'type': 'integer'
                    },
                    'lowestNumber': {
                      'description': '煤气最低配送数量（周期购）',
                      'type': 'integer'
                    },
                    'maxNum': {
                      'description': '最大可用数据',
                      'type': 'integer'
                    },
                    'name': {
                      'description': 'sku名字，多个规格拼接后的名字,例如，白色-M，红色-L',
                      'type': 'string'
                    },
                    'price': {
                      'description': '活动价格',
                      'type': 'number'
                    }
                  },
                  '$$ref': '#/definitions/goods.ActivitySku'
                }
              },
              'startTime': {
                'description': '活动开始时间',
                'type': 'string'
              },
              'totalInventory': {
                'description': '活动总库存，多个sku库存相加',
                'type': 'integer'
              },
              'type': {
                'description': '活动类型，拼团：10001001，秒杀：10002001,限时优惠：10004001 周期购：10005001',
                'type': 'string'
              }
            },
            '$$ref': '#/definitions/goods.Activity'
          }
        },
        'agentNum': {
          'description': '代理商总数',
          'type': 'string'
        },
        'attributes': {
          'description': '商品规格，列表不返回当前数据',
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'attributeId': {
                'description': '商品规格id',
                'type': 'string'
              },
              'default': {
                'description': '默认',
                'type': 'boolean'
              },
              'isShowImage': {
                'description': '是否显示图片',
                'type': 'boolean'
              },
              'name': {
                'description': '商品规格名字',
                'type': 'string'
              },
              'options': {
                'description': '可选属性',
                'type': 'array',
                'items': {
                  'type': 'object',
                  'properties': {
                    '_id': {
                      'description': '规格ID',
                      'type': 'string'
                    },
                    'default': {
                      'description': '默认',
                      'type': 'boolean'
                    },
                    'imageUrl': {
                      'description': '图片',
                      'type': 'string'
                    },
                    'value': {
                      'description': '值',
                      'type': 'string'
                    }
                  },
                  '$$ref': '#/definitions/goods.AttributeOption'
                }
              }
            },
            '$$ref': '#/definitions/goods.AttributeRes'
          }
        },
        'categoryId': {
          'description': '分类id，自节点的id，服务器自己递归查询',
          'type': 'string'
        },
        'categoryName': {
          'description': '分类名字，拼接后的字符串，例如：衣服/鞋子，裤子/短裤，可以直接显示，详情才回返回该信息',
          'type': 'string'
        },
        'channelSet': {
          'type': 'object',
          'properties': {
            'agent': {
              'description': '代理商',
              'type': 'array',
              'items': {
                'type': 'string'
              }
            },
            'agentChannel': {
              'description': '1 全部代理商 2 指定代理商',
              'type': 'integer'
            }
          },
          '$$ref': '#/definitions/goods.agentChannelSet'
        },
        'code': {
          'description': '商品编码',
          'type': 'string'
        },
        'content': {
          'description': '内容',
          'type': 'string'
        },
        'couponsList': {
          'description': '付费优惠券商品包含优惠券列表',
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'batchId': {
                'description': '方案批次号',
                'type': 'string'
              },
              'desc': {
                'description': '描述  满1000可用',
                'type': 'string'
              },
              'discount': {
                'description': '折扣  type=2 使用',
                'type': 'number'
              },
              'id': {
                'description': 'id',
                'type': 'string'
              },
              'name': {
                'description': '优惠券名',
                'type': 'string'
              },
              'num': {
                'description': '数量',
                'type': 'integer'
              },
              'price': {
                'description': '面额  单位元  type=1 使用',
                'type': 'number'
              },
              'restCount': {
                'description': '剩余可发送数量',
                'type': 'integer'
              },
              'status': {
                'description': '0=未开始 1=进行中 2=已结束',
                'type': 'integer'
              },
              'threshold': {
                'description': '门槛 满多少可用 0=无门槛',
                'type': 'number'
              },
              'type': {
                'description': '优惠券类型： 1:满减 2:折扣 3：到店核销券',
                'type': 'integer'
              },
              'usedGoods': {
                'description': '适用商品 1:所有商品适用 2：部分商品适用',
                'type': 'integer'
              },
              'valid': {
                'description': '有效期',
                'type': 'string'
              }
            },
            '$$ref': '#/definitions/goods.CouponsInfoRes'
          }
        },
        'createdTime': {
          'description': '创建时间',
          'type': 'string'
        },
        'defaultSku': {
          'type': 'object',
          'properties': {
            'imageUrl': {
              'description': '图片',
              'type': 'string'
            },
            'name': {
              'description': 'sku名字，多个规格拼接后的名字,例如，白色-M，红色-L',
              'type': 'string'
            },
            'price': {
              'description': '价格',
              'type': 'number'
            },
            'skuId': {
              'description': 'skuId,不传表示新建',
              'type': 'string'
            }
          },
          '$$ref': '#/definitions/goods.DefaultSkuData'
        },
        'detailType': {
          'description': '详情类型 0是图文视频详情 1是图文详情',
          'type': 'integer'
        },
        'dibOnShelf': {
          'description': '分销商品是否已上架',
          'type': 'boolean'
        },
        'fronOrBack': {
          'description': '展示在详情前或者后 前 : fron 后：back',
          'type': 'string'
        },
        'goodsBaseLogistics': {
          'type': 'object',
          'properties': {
            '_id': {
              'description': '物流信息ID，不传表示新建',
              'type': 'string'
            },
            'chargeMode': {
              'description': '计费方式 1按件 2按重量',
              'type': 'integer'
            },
            'deliveryMethod': {
              'description': '配送方式（1：快递发货（目前只有这一个））',
              'type': 'integer'
            },
            'expressFee': {
              'description': '具体运费多少钱',
              'type': 'number'
            },
            'expressFeeTemplateId': {
              'description': '运费模板ID',
              'type': 'string'
            },
            'expressFreightMethod': {
              'description': '运费计算方式---1： 统一邮费，2：运费模板',
              'type': 'integer'
            },
            'firstFee': {
              'description': '首费，2位小数----返回数据中返回的是值最小的一个',
              'type': 'number'
            },
            'goodsId': {
              'description': '商品ID',
              'type': 'string'
            },
            'templateName': {
              'description': '模板名称',
              'type': 'string'
            }
          },
          '$$ref': '#/definitions/goods.goodsBaseLogistics'
        },
        'goodsExt': {
          'type': 'object',
          'properties': {
            'inventoryWarning': {
              'type': 'object',
              'properties': {
                'enable': {
                  'description': '是否开启库存预警',
                  'type': 'boolean'
                },
                'value': {
                  'description': '库存预警阀值，只可以正数量',
                  'type': 'integer'
                }
              },
              '$$ref': '#/definitions/goods.inventoryWarning'
            },
            'marketPrice': {
              'description': '市场价格,转换精度后的值，用于前端展示   0',
              'type': 'number'
            },
            'offlineTime': {
              'description': '下架时间',
              'type': 'string'
            },
            'onlineTime': {
              'description': '上架时间',
              'type': 'string'
            },
            'originalMarketPrice': {
              'description': '市场价格,db原始值   0',
              'type': 'integer'
            },
            'originalStandardPrice': {
              'description': '标准价格，用于筛选（就是sku里面的最低价格），db原始值  500000',
              'type': 'integer'
            },
            'qwMarketPrice': {
              'description': '市场价格 企微端-带多位小数     "0"',
              'type': 'string'
            },
            'qwStandardPrice': {
              'description': '标准价格，企微端-带多位小数   "50"',
              'type': 'string'
            },
            'standardPrice': {
              'description': '标准价格，用于筛选（就是sku里面的最低价格），用于前端展示  50',
              'type': 'number'
            },
            'unsalableWarning': {
              'type': 'object',
              'properties': {
                'day': {
                  'description': '滞销天数',
                  'type': 'integer'
                },
                'enable': {
                  'description': '是否开启滞销预警',
                  'type': 'boolean'
                },
                'value': {
                  'description': '滞销阀值',
                  'type': 'integer'
                }
              },
              '$$ref': '#/definitions/goods.unsalableWarning'
            }
          },
          '$$ref': '#/definitions/goods.goodsExt'
        },
        'goodsParams': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'id': {
                'description': 'id',
                'type': 'string'
              },
              'isShowAtDetail': {
                'description': '是否展示在商详页',
                'type': 'boolean'
              },
              'name': {
                'description': '名称',
                'type': 'string'
              },
              'paramValue': {
                'description': '参数值',
                'type': 'array',
                'items': {
                  'type': 'string'
                }
              }
            },
            '$$ref': '#/definitions/goods.DetailGoodsShowParams'
          }
        },
        'h5MallLink': {
          'description': 'H5 商城链接地址 （内部用-商品列表）',
          'type': 'string'
        },
        'hasCoupon': {
          'description': '是否展示优惠券',
          'type': 'boolean'
        },
        'hasSaleLimit': {
          'description': '是否限购',
          'type': 'boolean'
        },
        'hasSaleWeight': {
          'description': '销量加权值开启，关闭',
          'type': 'boolean'
        },
        'highestActivityPrice': {
          'description': '活动最高价',
          'type': 'number'
        },
        'hqGoodsStatus': {
          'description': '总部商品状态(1:上架,2:下架)(代理商模式下才有效)',
          'type': 'integer'
        },
        'inventoryStatus': {
          'description': '售罄状态 0=售罄 1=未售罄',
          'type': 'integer'
        },
        'isDib': {
          'description': '是否为分销商品',
          'type': 'boolean'
        },
        'isMemberSaleLimit': {
          'description': '是否限购',
          'type': 'boolean'
        },
        'isPriceZero': {
          'description': '判断价格是否小于0.01 true 小于0.01 false 大于0.01',
          'type': 'boolean'
        },
        'isSync': {
          'description': '是否同步代理商',
          'type': 'boolean'
        },
        'limitPurchaseNum': {
          'description': '限购数量',
          'type': 'integer'
        },
        'lowestActivityPrice': {
          'description': '活动最低价',
          'type': 'number'
        },
        'materialId': {
          'description': '素材ID',
          'type': 'string'
        },
        'memberSaleLimit': {
          'description': '用户可购买数量  只对付费优惠券类型生效',
          'type': 'integer'
        },
        'name': {
          'description': '商品名称',
          'type': 'string'
        },
        'offlineTime': {
          'description': '下架时间',
          'type': 'string'
        },
        'onlineTime': {
          'description': '上架时间',
          'type': 'string'
        },
        'rebate': {
          'description': '具体佣金金额',
          'type': 'number'
        },
        'rebateRatio': {
          'description': '佣金比例',
          'type': 'string'
        },
        'rebateTime': {
          'description': '成为分销商品的时间',
          'type': 'string'
        },
        'remark': {
          'description': '备注',
          'type': 'string'
        },
        'resources': {
          'type': 'object',
          'properties': {
            'detailImages': {
              'description': '详情图',
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'name': {
                    'description': '图片名称',
                    'type': 'string'
                  },
                  'url': {
                    'description': '图片地址',
                    'type': 'string'
                  }
                },
                '$$ref': '#/definitions/goods.goodsImage'
              }
            },
            'detailVideoCovers': {
              'description': '详情视频封面',
              'type': 'array',
              'items': {
                'type': 'string'
              }
            },
            'detailVideos': {
              'description': '详情视频',
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'name': {
                    'description': '视频名称',
                    'type': 'string'
                  },
                  'second': {
                    'description': '视频长度，单位：秒',
                    'type': 'integer'
                  },
                  'size': {
                    'description': '视频大小，单位：字节',
                    'type': 'integer'
                  },
                  'url': {
                    'description': '视频地址',
                    'type': 'string'
                  }
                },
                '$$ref': '#/definitions/goods.goodsVideo'
              }
            },
            'images': {
              'description': '头图图片',
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'name': {
                    'description': '图片名称',
                    'type': 'string'
                  },
                  'url': {
                    'description': '图片地址',
                    'type': 'string'
                  }
                },
                '$$ref': '#/definitions/goods.goodsImage'
              }
            },
            'videoCovers': {
              'description': '头图视频封面',
              'type': 'array',
              'items': {
                'type': 'string'
              }
            },
            'videos': {
              'description': '头图视频',
              'type': 'array',
              'items': {
                'type': 'object',
                'properties': {
                  'name': {
                    'description': '视频名称',
                    'type': 'string'
                  },
                  'second': {
                    'description': '视频长度，单位：秒',
                    'type': 'integer'
                  },
                  'size': {
                    'description': '视频大小，单位：字节',
                    'type': 'integer'
                  },
                  'url': {
                    'description': '视频地址',
                    'type': 'string'
                  }
                },
                '$$ref': '#/definitions/goods.goodsVideo'
              }
            }
          },
          '$$ref': '#/definitions/goods.ValGoodsResource'
        },
        'richText': {
          'description': '图文详情',
          'type': 'string'
        },
        'saleLimit': {
          'description': '限购数量',
          'type': 'integer'
        },
        'saleWeight': {
          'description': '销售加权值',
          'type': 'integer'
        },
        'sales': {
          'description': '商品销量',
          'type': 'integer'
        },
        'selfPickAddrList': {
          'description': '自提地点',
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'addressDetail': {
                'description': '详细地址，省市区+详细地址',
                'type': 'string'
              },
              'addressId': {
                'description': '关联自提点ID',
                'type': 'string'
              },
              'addressName': {
                'description': '自提点名称',
                'type': 'string'
              },
              'enable': {
                'description': '地址开启状态',
                'type': 'boolean'
              },
              'forWardTimeValue': {
                'description': '非必须   预约自提时间数值  天范围1-30  小时范围1-24  分支范围1-60',
                'type': 'integer'
              },
              'forwardTimeType': {
                'description': '预约自提时间类型  1=天 2=小时 3=分钟',
                'type': 'integer'
              },
              'goodsId': {
                'description': '商品ID',
                'type': 'string'
              },
              'isDefault': {
                'description': '是否是默认自提点',
                'type': 'boolean'
              },
              'isForward': {
                'description': '自提是否提前联系',
                'type': 'boolean'
              }
            },
            '$$ref': '#/definitions/mallveriflication.GoodsSelfPickAddr'
          }
        },
        'sendWays': {
          'description': '配送方式,1自提，2物流',
          'type': 'integer'
        },
        'showType': {
          'description': '是否在C端展示',
          'type': 'boolean'
        },
        'skus': {
          'description': '商品sku列表，列表不返回当前数据',
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              '_id': {
                'description': 'skuId,不传表示新建',
                'type': 'string'
              },
              'activityPrice': {
                'description': '活动价格',
                'type': 'number'
              },
              'attributeItems': {
                'description': '规格-子选项',
                'type': 'array',
                'items': {
                  'type': 'string'
                }
              },
              'code': {
                'description': '编码，sku标识',
                'type': 'string'
              },
              'const': {
                'description': '成本 小数点2位之前',
                'type': 'number'
              },
              'default': {
                'description': '默认sku，如果商品未选择规格会默认生成一个sku的哦',
                'type': 'boolean'
              },
              'inventory': {
                'description': '库存',
                'type': 'integer'
              },
              'itemUnits': {
                'description': '计量单位（销售单位）',
                'type': 'string'
              },
              'itemWeight': {
                'description': '重量、保留2位小数',
                'type': 'number'
              },
              'maxRrp': {
                'description': '代理商的 max recommend retail price',
                'type': 'number'
              },
              'minRrp': {
                'description': '代理商的 min recommend retail price',
                'type': 'number'
              },
              'name': {
                'description': 'sku名字，多个规格拼接后的名字,例如，白色-M，红色-L',
                'type': 'string'
              },
              'originalCost': {
                'description': '成本，原始值，用于服务间使用',
                'type': 'integer'
              },
              'originalPrice': {
                'description': '价格，原始值，用于服务间使用',
                'type': 'integer'
              },
              'price': {
                'description': '价格 小数点2位之前',
                'type': 'number'
              },
              'qwConst': {
                'description': '成本 小数点多位',
                'type': 'string'
              },
              'qwPrice': {
                'description': '企微端，小数点多位',
                'type': 'string'
              },
              'rebate': {
                'description': '具体佣金金额',
                'type': 'number'
              }
            },
            '$$ref': '#/definitions/goods.Sku'
          }
        },
        'snowflakeId': {
          'description': '雪花ID，前端展示用，制作为展示，不能用于商品详情查询，切记',
          'type': 'string'
        },
        'startPurchaseNum': {
          'description': '起购数量',
          'type': 'integer'
        },
        'startPurchaseScope': {
          'description': '起购数量的控制范围--1、全渠道，2：仅商城',
          'type': 'integer'
        },
        'status': {
          'description': '商品状态(1:上架,2:下架)',
          'type': 'integer'
        },
        'syncSet': {
          'description': '同步商品设置  1:商品标题 2：商品图片 3：标准价格',
          'type': 'integer'
        },
        'totalInventory': {
          'description': '总库存，所有sku剩余库存相加',
          'type': 'integer'
        },
        'trashedAt': {
          'description': '商品删除时间',
          'type': 'string'
        },
        'type': {
          'description': '商品类型(1:普通商品,2:虚拟商品,3:付费优惠券）',
          'type': 'integer'
        },
        'units': {
          'type': 'object',
          'properties': {
            'name': {
              'description': '单位',
              'type': 'string'
            }
          },
          '$$ref': '#/definitions/goods.goodsUnit'
        },
        'walletStatus': {
          'description': '0-功能未开启， 1-该商品不支持余额支付, 3-该商品支持余额支付(bitmap:从右往左,第一位控制功能开关,第二位控制商品是否支持)',
          'type': 'integer'
        },
        'weights': {
          'description': '权重',
          'type': 'integer'
        }
      },
      '$$ref': '#/definitions/goods.Res'
    },
    'msg': {
      'description': '请求结果的message',
      'type': 'string',
      'example': 'ok'
    },
    'success': {
      'description': '请求结果，失败:false，成功:true',
      'type': 'boolean',
      'example': true
    }
  },
  '$$ref': '#/definitions/http.goodsDetailRes'
}

export default target