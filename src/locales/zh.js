const messages = {
  "app": {
    "name": "企鹅物流数据统计",
    "name_line1": "企鹅物流数据统计",
    "name_line2": ""
  },
  "server": {
    "name": "服务器",
    "switch": "服务器切换",
    "selected": "已选择",
    "servers": {
      "CN": "国服",
      "US": "美服",
      "JP": "日服",
      "KR": "韩服"
    }
  },
  "menu": {
    "_beta": "公测",
    "home": "首页",
    "report": {
      "_name": "掉落汇报",
      "stage": "按章节",
      "recognition": "截图识别"
    },
    "search": "全局搜索",
    "stats": {
      "_name": "素材掉率",
      "stage": "按作战",
      "item": "按素材",
      "advanced": "高级查询"
    },
    "about": {
      "_name": "关于本站",
      "members": "团队成员",
      "contribute": "参与开发",
      "changelog": "更新记录",
      "contact": "联系我们",
      "donate": "捐助",
      "links": "友情链接",
      "bulletin": "公告",
      "credits": "内容来源"
    },
    "siteStats": "全站数据一览",
    "planner": "刷图规划器",
    "v1": "访问旧版",
    "refreshData": "刷新数据",
    "languages": "语言切换",
    "settings": {
      "name": "设置",
      "themeStyles": {
        "name": "切换主题",
        "disabled": "(已禁用：活跃的特殊主题)",
        "default": "默认主题",
        "miku2021": "初音未来 2021 生日特别主题"
      },
      "appearances": {
        "name": "切换外观",
        "system": "跟随系统设置",
        "dark": "总是使用暗色",
        "light": "总是使用亮色"
      }
    },
    "overline": {
      "planner": "ArkPlanner"
    }
  },
  "meta": {
    "details": "详细信息",
    "loading": "正在加载...",
    "notfound": "？？？",
    "footer": {
      "copyright": {
        "title": "许可协议",
        "content": "素材掉落统计数据由企鹅物流统计，采用知识共享 署名-非商业性使用 4.0 国际 许可协议进行许可。转载、公开或以任何形式复制、发行、再传播本站任何内容时，必须注明从企鹅物流数据统计转载，并提供版权标识、许可协议标识、免责标识和作品链接；且未经许可，不得将本站内容或由其衍生作品用于商业目的。"
      },
      "credit": "企鹅物流数据统计 | {date}"
    },
    "separator": "、",
    "quotation": {
      "start": "“",
      "end": "”"
    },
    "boolean": {
      "true": "是",
      "false": "否"
    },
    "hasNorNot": {
      "true": "有",
      "false": "无"
    },
    "dialog": {
      "cancel": "取消",
      "confirm": "确认",
      "submit": "提交",
      "save": "保存",
      "close": "关闭"
    },
    "time": {
      "minute": "{m}分 ",
      "second": "{s}秒"
    },
    "copyWarning": "\n\n以上数据来自企鹅物流数据统计（{site}）"
  },
  "stats": {
    "headers": {
      "pattern": "组合",
      "stage": "作战",
      "apCost": "理智",
      "item": "物品",
      "itemDrops": "掉落情况合计",
      "times": "样本数",
      "quantity": "掉落数",
      "percentage": "百分比",
      "apPPR": "单件期望理智",
      "clearTime": "最短通关用时",
      "itemPerTime": "单件期望用时",
      "timeRange": "统计区间"
    },
    "headerDesc": {
      "apCost": "完成单次该作战的所需理智数量",
      "quantity": "在该作战中，所有提交到企鹅物流数据统计的样本内，该物品的出现次数",
      "times": "在该作战中，所有提交到企鹅物流数据统计的样本提交次数",
      "percentage": "期望掉落概率；计算方式为 (掉落数 / 样本数)",
      "patternPercentage": "此掉落组合占所有掉落汇报的百分比；计算方式为 (掉落数 / 样本数)",
      "apPPR": "根据当前的「百分比」项，计算出的在该作战获得「1x对应物品」所需的期望理智，即 (作战理智消耗 / (掉落数 / 样本数))",
      "clearTime": "来源为 PRTS Wiki 中的「最短通关用时」；其中，PRTS Wiki 对此的计算方法为：由「作战开始」直至「最后出怪」期间，使用 1 倍速的最短所需游戏时间总长",
      "itemPerTime": "根据当前的「百分比」项，计算出的在该作战获得「1x对应物品」所需的期望时间消耗，即 (作战最短通关用时 / (掉落数 / 样本数))",
      "timeRange": "由于存在掉落物列表变动故引入的「统计区间」概念。在本表所展示的数据中，其将仅包含已标注时间段内所提交的样本统计数据。若欲查看其它统计区间内的样本统计情况，请使用「高级查询」"
    },
    "filter": {
      "title": "数据过滤",
      "indicator": "已应用 {count} 个过滤器",
      "stats": "过滤后 {filtered} / 过滤前 {total}",
      "overview": "过滤概览",
      "type": {
        "_name": "作战类型",
        "showPermanent": "常驻",
        "showActivity": "活动"
      },
      "status": {
        "_name": "作战状态",
        "onlyOpen": "仅正在开放"
      }
    },
    "itemPreview": {
      "more": "共 {count} 个作战含有此掉落"
    },
    "timeRange": {
      "inBetween": "{0} ~ {1}",
      "toPresent": "{date} 至今",
      "endsAt": "{date} 之前",
      "unknown": "未知",
      "notSelected": "（暂未选择）"
    },
    "trends": {
      "name": "掉落历史趋势",
      "set": {
        "rate": "掉落率",
        "sample": "当日样本量",
        "drops": "掉落数"
      }
    },
    "lastUpdated": "最后更新：{date}",
    "site": {
      "viewMore": "查看更多",
      "total": {
        "sanity": "所有掉落汇报消耗理智",
        "report": "掉落汇报总数",
        "items": "物品掉落总数"
      },
      "stages": "作战掉落汇报排行",
      "items": "物品掉落汇报排行",
      "all": "全时段",
      "24hr": "最近 24hr",
      "generating": {
        "title": "全站数据一览正在计算中...",
        "subtitle": "神经网络信息：由于数据量庞大，全站数据一览需要大约 5 分钟进行计算。请稍后再来。",
        "refresh": "刷新全站数据一览"
      }
    }
  },
  "contribute": {
    "repo": "项目仓库：",
    "frontend": "前端",
    "frontendV4": "前端 v4",
    "backend": "后端",
    "recognizer": "截图识别",
    "newFolder": "锐意新建文件夹中",
    "caption": "企鹅物流数据统计是一项非盈利的社区项目，我们的发展离不开大家的共同维护与支持。欢迎前往上方 GitHub 为我们点 Star、提出 Issues，我们当然同时也欢迎 Pull Requests。",
    "contribute_0": "如果您有以下一项或多项经验，愿意为企鹅数据贡献自己的一份力量，请加QQ群：747099627",
    "contribute_1": "本项目为无偿开源项目",
    "skills": {
      "frontend": "网站前端开发（React）",
      "backend": "网站后端开发（Go, PostgreSQL）",
      "mobile": "移动端 App 开发（iOS、Android）",
      "maintenance": "网站运维",
      "design": "UI/UX设计",
      "analysis": "数据统计分析",
      "others": "..."
    }
  },
  "fetch": {
    "loading": "正在刷新数据...",
    "chunk": {
      "title": "正在从扩展神经网络传输数据",
      "subtitle": "页面模块项正在加载中，请稍等..."
    },
    "failed": {
      "title": "神经网络连接异常",
      "subtitle": "未能与神经网络建立对等连接，部分资源丢失",
      "retry": "重试",
      "deploying": "新版部署中，最多将持续 5 分钟，请耐心等待",
      "error": {
        "zones": "章节元数据",
        "stages": "作战元数据",
        "items": "物品数据",
        "limitations": "汇报数据校验规则",
        "trends": "汇报历史数据",
        "globalMatrix": "全平台掉落数据",
        "personalMatrix": "个人掉落数据",
        "globalPatternMatrix": "全平台掉落组合数据",
        "personalPatternMatrix": "个人掉落组合数据",
        "stats": "全站概览数据",
        "period": "服务器事件数据"
      }
    }
  },
  "report": {
    "alert": {
      "title": {
        "first": "检测到失误风险",
        "repeat": "警告"
      },
      "continue": {
        "first": "确定要继续吗？",
        "repeat": "真的确定要继续吗？"
      },
      "contact": {
        "before": "如果您认为这是一次误判，欢迎",
        "activator": "联系作者",
        "after": "（请附作战名称、实际掉落、若有掉落截图更佳），确认后我们会尽快予以修正。"
      },
      "causes": {
        "noDrop": "尚未选择任何掉落物品",
        "limitation": "本次汇报与现有数据差距较大，继续提交可能导致此次汇报被判定为异常，无法计入全部统计数据中。"
      }
    },
    "specialSideStory": {
      "dialog": {
        "title": "「多索雷斯假日」活动特殊掉落汇报策略提示",
        "cancel": "关闭",
        "confirmTimerPending": "我已知晓并继续 ({timer})",
        "confirmTimerDone": "我已知晓并继续"
      }
    },
    "recognition": {
      "step": {
        "select": "选择",
        "recognize": "识别",
        "confirm": "确认",
        "report": "汇报"
      },
      "tips": {
        "fileTooBig": "\"{name}\" ({size}MB) 超出大小限制",
        "fileTooOld": "\"{name}\" 的截图时间超过了 36h 内的时间限制",
        "chooseImage": "点击以选择并加入图片、或直接向框内区域拖拽以加入图片",
        "dragImage": "将图片拖拽到此处",
        "addImage": "点击此处加入图片",
        "copyImage": "右键图片或长按图片可拷贝到剪贴板或保存图片；再次点击图片即可关闭",
        "abnormal": "您提交识别的截图中有 {count} 张截图由于未成功通过质量监测，被标记为了「汇报排除」并将无法上传至本站",
        "notImageFile": "{files} 不是图片文件，无法使用",
        "emptyResult": "无可用识别结果",
        "unsatisfiedStart": "无法开始识别",
        "emptyFile": "暂未选择任何图片",
        "hasInvalidFile": "含有无效文件"
      },
      "status": {
        "success": "成功",
        "warning": "警告",
        "error": "异常"
      },
      "description": "仅需选择结算页面截图，即可自动识别并上传所有掉落结果。",
      "recognize": {
        "noFilename": "暂无文件名",
        "elapsed": "已用时间",
        "remaining": "预计剩余",
        "speed": "识别速度",
        "imagePerSecond": "{count} 图/秒"
      },
      "confirm": {
        "loadingImage": "正在加载截图预览",
        "overview": {
          "_name": "结果概览",
          "total": "共识别了",
          "success": "检测通过",
          "error": "检测异常",
          "count": "{count} 张",
          "server": "数据集服务器",
          "duration": "每张图片平均识别用时"
        },
        "details": "结果详情",
        "unknownStage": "无法识别",
        "abnormal": {
          "error": "此张图片未通过质量监测",
          "fatal": "此张图片无法被识别",
          "details": "详细异常列表",
          "hover": "鼠标悬浮以查看识别内容"
        },
        "cherryPick": {
          "disabled": "无法选择异常图片",
          "accepted": "上传本图结果",
          "rejected": "不上传本图结果"
        },
        "noResult": "暂时没有识别结果",
        "submit": "确认已勾选的 {count} 次结算记录",
        "itemsTotal": "物品数合计"
      },
      "report": {
        "title": "汇报详情",
        "total": "总计",
        "submit": "汇报 {count} 次结算记录",
        "reporting": "正在批量上传掉落汇报...",
        "allSucceeded": "已成功上传 {count} 次结算记录",
        "partialSucceeded": "仅成功上传共 {count} 次的部分结算记录",
        "partialFailed": "共计 {count} 次结算记录上传失败。请依照下方步骤排查可能出现的错误原因",
        "partialFailedDesc": [
          "检查您的网络连接：质量较差的网络连接或网络中断可能造成上传失败。",
          "为保证全站数据集免受外部攻击的影响，若您在多次重试后依然无法上传，则可能您的提交量已触发汇报上限、请于 24 小时后再重试上传剩余的掉落汇报。",
          "由于 IP 性质并不能定位到您个体，在宽带热门区域，您的 IP 有可能与他人共享使用。此种情况下，请尝试切换您的移动网络或 WiFi 重试识别，亦或您可以于 24 小时后重试上传。",
          "为防止重传攻击，我们会对您的请求附加时间戳；若您的设备的时间与正常时间差距过大，则可能导致上传失败，请尝试校准设备时间后重试。"
        ],
        "caption": "感谢您的掉落汇报；由于缓存原因，您汇报的数据可能需要最多 20 分钟即可于全站数据集生效"
      },
      "states": {
        "pending": "正等待初始化...",
        "initializing": "初始化中...",
        "recognizing": "正在识别...",
        "rendering": "渲染确认内容中...",
        "submitting": "正在提交记录..."
      },
      "cost": "耗时",
      "filename": "文件名",
      "result": "识别结果",
      "queue": "识别图片队列",
      "start": "识别 {count} 张图片",
      "progress": "进度",
      "retry": "提交失败，正在重试",
      "filter": "结果过滤",
      "notices": {
        "welcome": [
          "新版截图识别已适配于 2022 年 4 月的国服新游戏内 UI。",
          "您所有提供的图片均仅会通过使用 WebAssembly 技术于您的浏览器**本地**进行识别、不会向服务器上传，因此不产生额外流量开销。",
          "为保证本站数据集准确度，请仅选择**截图时间在 36 小时内**、通关评价为 **3 星**的**结算界面**截图。",
          "请**不要**选择首次通关截图，并请如实汇报**所有**发生的掉落情况。"
        ],
        "confirm": [
          "点击图片可以放大以便于核对；再次点击图片即可关闭",
          "成功识别的截图已被自动选中上传",
          "为保证本站数据集准确度，您将**不可**选中发生识别错误的截图"
        ]
      },
      "exceptions": {
        "Fingerprint::Same": {
          "title": "存在完全一致的图片",
          "subtitle": "请检查是否选择了重复的截图"
        },
        "FileTimestamp::TooClose": {
          "title": "存在截图相隔时间过短的图片",
          "subtitle": "请检查是否选择了重复截图"
        },
        "DropInfos::Violation": "识别结果验证失败",
        "StageChar::LowConfidence": {
          "title": "关卡识别可能存在错误",
          "subtitle": "识别置信度低，请核对识别结果是否与图片一致"
        },
        "DropQuantityChar::LowConfidence": {
          "title": "物品数量识别可能存在错误",
          "subtitle": "识别置信度低，请核对识别结果是否与图片一致"
        },
        "DropAreaDropsQuantity::NotFound": {
          "title": "存在未识别到数量的掉落",
          "subtitle": "分辨率或质量较差的图片可能会导致此问题。请检查图片是否经过压缩处理"
        },
        "DropAreaDrops::LowConfidence": {
          "title": "存在未知掉落",
          "subtitle": "此问题通常是由于非活动期间的活动掉落的导致的。"
        },
        "DropAreaDrops::Illegal": {
          "title": "存在非法掉落",
          "subtitle": "此关卡目前不应存在任何掉落，但图片中存在。这通常是由于非活动期间的活动掉落的导致的。"
        },
        "Result::False": {
          "title": "非结算页面截图或内部错误",
          "subtitle": "若这确实是一张结算页面截图，请检查您是否选择了正确的服务器"
        },
        "Stage::NotFound": {
          "title": "未知关卡",
          "subtitle": "这可能是关卡识别出现了错误，或此关卡不被收录（如剿灭作战、绝境作战等）"
        },
        "Stage::Illegal": {
          "title": "非法关卡",
          "subtitle": "此关卡目前不开放"
        },
        "3stars::False": "非三星评价",
        "DropType::Illegal": {
          "title": "非法掉落类型",
          "subtitle": "截图中存在首次掉落、理智返还等非法掉落类型，或存在识别失败的掉落类型"
        },
        "DropType::NotFound": "未找到任何掉落类型"
      }
    },
    "rules": {
      "item": {
        "_name": "物品项",
        "now": "已于 “{stage}” 选择了 {quantity} 个 “{item}”",
        "gte": "“{stage}” 内的 “{item}” 应至少有 {should} 个",
        "lte": "“{stage}” 内的 “{item}” 应至多有 {should} 个",
        "not": "“{stage}” 内的 “{item}” 数量不应等于 {should}"
      },
      "type": {
        "_name": "物品种类",
        "now": "于 “{stage}” 已选 {quantity} 种物品",
        "gte": "“{stage}” 内应至少有 {should} 种物品",
        "lte": "“{stage}” 内应至多有 {should} 种物品",
        "not": "“{stage}” 内的物品种类数应总计不为 {should}"
      }
    },
    "clear": "清空",
    "closedReason": {
      "EXPIRED": "不在可汇报时间区间内：作战已结束或暂未开启",
      "NOT_FOUND": "作战不存在：于所选服务器未找到此作战",
      "INVALID": "无法汇报：此作战未包含掉落汇报元数据"
    },
    "furniture": "家具掉落：{state}",
    "name": "汇报结果",
    "submit": "提交",
    "success": "汇报成功",
    "unable": "无法提交：",
    "undo": "撤销",
    "undoSuccess": "撤销成功",
    "gacha": "本作战允许在一次汇报内包含多个结果。",
    "notices": {
      "rule_1": "这是单次作战的提交，请注意核对数目；",
      "rule_2": "若无素材掉落，请直接点击提交；",
      "rule_3": "请不要汇报首次通关奖励，不要只汇报比较“欧”的掉落；",
      "rule_4": "请保证通关评价是3星；",
      "rule_5": "请只汇报国服的掉落，谢谢。"
    },
    "dossolesHoliday": {
      "title": {
        "inner": "确保集齐所有标志物",
        "tmpl": "请{0}后再进行汇报"
      },
      "content": "根据初步数据统计推测，标志物掉率计算事件可能不满足独立前提，即：在所有标志物被集齐前、其掉率可能会产生动态变化。因此，我们决定仅收集集齐所有标志物后的掉率数据"
    },
    "usage": "左键增加，右键减少"
  },
  "mirrors": {
    "global": {
      "notification": "推荐使用海外镜像站 {0}，可以提升访问速度哦！"
    },
    "cn": {
      "notification": "推荐使用国内镜像站 {0}，可以提升访问速度哦！"
    },
    "_notification": {
      "ignore": {
        "title": "不再显示镜像提示？",
        "subtitle": "确定要忽略所有镜像提示吗？网站加载性能可能会受到影响。"
      }
    }
  },
  "settings": {
    "storageIssue": "本地缓存存储出现问题，应用可能不稳定；若持续出现此警告，请尝试通过「菜单 - 设置 - 重置本地数据与设置」清空缓存以修复",
    "category": {
      "appearance": "外观",
      "data": "设置与数据",
      "about": "关于"
    },
    "iosSystemSettings": "语言与隐私设置",
    "optimization": {
      "lowData": {
        "title": "低数据模式",
        "active": "低数据模式已启用",
        "subtitle": "低数据模式将停止加载诸如作战列表背景图、全站背景立绘等不必要资源以减少网络数据的使用。"
      }
    },
    "data": {
      "server": "本地缓存数据包含服务器：",
      "size": "本地数据大小：",
      "reset": {
        "title": "重置本地数据与设置",
        "subtitle": "将会删除所有本地数据与设置。删除后，所有本地设置均会重置至默认值并刷新页面，数据将需要重新加载。确定要继续吗？"
      }
    },
    "push": {
      "language": "消息语言",
      "categories": {
        "_name": "推送类型",
        "NewStage": {
          "title": "新章节加入",
          "subtitle": "在新章节加入本 App 时通知您"
        },
        "ImportantTimePoint": {
          "title": "防侠客",
          "subtitle": "在活动即将结束时通知您"
        },
        "Maintenance": {
          "title": "上游闪断更新",
          "subtitle": "在新的游戏服务器闪断更新公告发布后通知您"
        },
        "ClientUpgrade": {
          "title": "客户端强制更新",
          "subtitle": "在新的客户端强制更新公告发布后通知您"
        }
      }
    }
  },
  "zone": {
    "name": "章节",
    "types": {
      "MAINLINE": "主题曲",
      "WEEKLY": "资源收集",
      "ACTIVITY": "限时活动",
      "ACTIVITY_OPEN": "限时活动 — 开放中",
      "ACTIVITY_CLOSED": "限时活动 — 已结束",
      "ACTIVITY_PENDING": "限时活动 — 即将开放",
      "ACTIVITY_PERMANENT": "插曲 & 别传",
      "GACHABOX": "物资补给箱"
    },
    "subTypes": {
      "2019": "2019",
      "2020": "2020",
      "2021": "2021",
      "2022": "2022",
      "AWAKENING_HOUR": {
        "title": "觉醒",
        "subtitle": "0~3 章"
      },
      "VISION_SHATTER": {
        "title": "幻灭",
        "subtitle": "4~8 章"
      },
      "DYING_SUN": {
        "title": "残阳",
        "subtitle": "9~10 章"
      },
      "INTERLUDE": "插曲",
      "SIDESTORY": "别传"
    },
    "status": {
      "0": "开放中",
      "1": "已结束",
      "-1": "即将开放",
      "permanentOpen": "常驻开放"
    },
    "opensAt": "开放时间：{0} - {1}"
  },
  "stage": {
    "name": "作战",
    "about": "关于此作战",
    "apCost": "{apCost} 点理智",
    "actions": {
      "_name": {
        "selector": "快速访问",
        "selectorEmpty": "暂无任何快速访问记录",
        "panel": "快速操作"
      },
      "star": {
        "name": "星标作战",
        "activate": "星标此作战",
        "activated": "已星标此作战",
        "deactivate": "点击以取消",
        "empty": [
          "暂无已星标的作战",
          "使用作战详情中的「快速操作」即可星标作战并于此处显示"
        ]
      },
      "history": {
        "name": "最近选择作战",
        "empty": [
          "暂无最近选择作战",
          "访问任何作战页面后，记录即会于此处显示"
        ],
        "clear": "清空"
      },
      "links": {
        "prts-wiki": "Wiki",
        "map-arknights-com": "地图"
      },
      "advanced": {
        "activator": "进行高级查询"
      }
    },
    "loots": {
      "NORMAL_DROP": "常规掉落",
      "EXTRA_DROP": "额外物资",
      "SPECIAL_DROP": "特殊掉落",
      "FURNITURE": "家具"
    },
    "selector": {
      "plannerExclude": "排除规划作战",
      "excludeAll": "排除全部",
      "includeAll": "选中全部",
      "title": "作战选择"
    }
  },
  "planner": {
    "notices": {
      "autoExistence": "刷图规划器现将会自动隐藏未于已选择服务器出现或开放的作战"
    },
    "options": {
      "_name": "选项",
      "byProduct": "考虑合成副产物",
      "requireExp": "大量需求经验",
      "requireLmb": "大量需求龙门币",
      "excludeStage": {
        "_name": "计算排除",
        "title": "选择",
        "selected": "已排除 {stages} 关"
      }
    },
    "reset": {
      "name": "重置",
      "success": "成功重置所选数据项",
      "dialog": {
        "title": "重置刷图规划器数据",
        "subtitle": "将会删除所选部分的相关刷图规划器数据项",
        "options": {
          "options": {
            "name": "规划选项",
            "indicator": "将清除所有规划选项"
          },
          "excludes": {
            "name": "计算排除",
            "indicator": "将清除所有排除作战"
          },
          "items": {
            "name": "物品数据",
            "indicator": "将清除所有物品数据"
          }
        }
      }
    },
    "actions": {
      "_name": "数据",
      "import": "导入",
      "export": "导出",
      "importExport": "@:(planner.actions.import)/@:(planner.actions.export)",
      "calculate": "计算规划",
      "calculating": "少女计算中...",
      "link": {
        "generate": "获取分享链接",
        "generating": "正在生成",
        "share": "分享链接"
      },
      "config": {
        "_name": "配置代码",
        "share": "分享配置代码",
        "import": "导入配置代码"
      }
    },
    "craft": {
      "do": "合成",
      "unable": "无法合成",
      "errors": {
        "title": "合成缺少所需物品",
        "notEnough": "需要 {need} 个「{item}」以合成，但仅已有 {have} 个"
      },
      "plans": {
        "title": "合成规划",
        "plan": "将使用 {cost} 个「{item}」合成并剩余 {remain} 个"
      },
      "success": "已使用 {sourceItems} 合成 {amount} 个 {productItem}"
    },
    "have": "已有",
    "need": "需要",
    "copy": "复制到剪贴板",
    "calculation": {
      "title": "规划结果",
      "tabs": {
        "stages": "作战列表",
        "syntheses": "合成列表",
        "values": "素材理智价值"
      },
      "lmb": "预计龙门币收益",
      "sanity": "预计需要理智",
      "exp": "预计获得录像带经验",
      "times": "次",
      "level": "材料等级",
      "noStage": "未找到需要进行的作战。",
      "noSyntheses": "未找到需要合成的素材。"
    }
  },
  "item": {
    "name": "素材",
    "choose": {
      "name": "素材选择"
    },
    "categories": {
      "ACTIVITY_ITEM": "活动道具",
      "CARD_EXP": "作战记录",
      "CHIP": "芯片",
      "FURN": "家具",
      "MATERIAL": "材料"
    },
    "related": "相关物品",
    "undefined": "未知物品"
  },
  "query": {
    "panel": {
      "builder": "查询编辑器",
      "results": "查询结果",
      "footer": {
        "cache": "现在显示的查询结果数据为缓存数据。若需要获取最新数据，请再次「执行查询」。",
        "disclaimer": "「高级查询」功能所产出的所有数据信息均受本站「数据许可协议」保护；本站不对「高级查询」功能所产出的所有数据信息做任何形式的承诺或背书。"
      }
    },
    "disclaimer": {
      "title": "使用前必读",
      "content": "「高级查询」意在为有更复杂数据分析需求的用户提供以更高自由度使用企鹅物流数据统计内相关数据集之可能性。由于本功能的高自由度属性，在不了解统计学等相关学科的学术内容前，尝试分析此功能的查询结果可能会存在误导性。企鹅物流数据统计提醒各位对数据进行二次分析的刀客塔：请在分析时不要断章取义、故意使用本站数据引导舆论。高级查询功能的受众群体是熟悉统计学等学科的用户，开放后便于他们以更多维度分析数据集。我们欢迎对掉落数据感兴趣并进行客观与科学分析的刀客塔，但我们不欢迎带有个人情绪或既定立场的情况下、尝试错误地从本站数据中得出对任何实体不利结论的用户。"
    },
    "title": {
      "main": "主查询",
      "comparison": "对比查询 #{index}"
    },
    "type": {
      "matrix": "统计数据",
      "trend": "历史趋势"
    },
    "selector": {
      "item": {
        "title": "素材选择",
        "subtitle": "用于将查询结果过滤为此作战内的特定素材。",
        "unspecified": "显示作战全部掉落素材",
        "selected": "仅查询 {length} 种素材"
      },
      "stage": {
        "title": "选择作战",
        "subtitle": "（必填）用于将查询结果过滤为一特定作战。"
      },
      "timeRange": {
        "title": "时间段",
        "subtitle": "（必填）用于将查询结果过滤为于一特定时间段内。",
        "presets": {
          "title": "预设时间",
          "start": "开始",
          "end": "结束"
        }
      },
      "interval": {
        "title": "分段间隔",
        "subtitle": "用于设置历史趋势的分段间隔。",
        "unspecified": "不分段"
      }
    },
    "operation": {
      "add": "添加对比查询",
      "execute": "执行查询",
      "inProgress": "正在执行查询"
    },
    "result": {
      "main": "主查询结果",
      "comparison": "对比查询 #{index} 结果",
      "empty": "此查询返回了 0 个结果，请检查对应查询条件后重试",
      "hideTime": "隐藏详细时间"
    }
  },
  "version": {
    "upgrade": {
      "title": "版本已过期",
      "subtitle": "由于接口升级，您现在使用的版本已过期。请在升级后重试",
      "action": "升级",
      "unable": "无法升级？"
    }
  },
  "notice": {
    "failed": "获取公告失败：{error}",
    "loading": "正在加载公告"
  },
  "dataSource": {
    "switch": "数据源",
    "global": "全平台",
    "loginNotice": "查看个人掉落数据前，请先登录",
    "personal": "个人",
    "title": "需要登录"
  },
  "validator": {
    "required": "必填"
  },
  "quotes": {
    "doYouKnow": [
      "你知道吗？白面鸮头上的那一撮毛超级可爱！o(*≧▽≦)ツ"
    ]
  },
  "credits": {
    "material": {
      "title": "网站内容声明",
      "content": [
        "企鹅物流数据统计网站内所使用的游戏资源（包括但不限于：游戏图片、动画、音频、文本原文或其转译版本等），其目的仅为更好地反映游戏内对应元素、增强用户体验，相关作品之版权仍属于上海鹰角网络科技有限公司和/或其关联公司，即鹰角网络游戏软件和/或鹰角网络游戏服务的提供方（包括但不限于：YOSTAR (HONG KONG) LIMITED, 株式会社Yostar, YOSTAR LIMITED, 龍成網路 等）",
        "企鹅物流数据统计网站内所使用的部分资源来源于 PRTS Wiki ([http://prts.wiki](http://prts.wiki)) 并同时对部分资源进行了非歧义性的更改",
        "企鹅物流数据统计网站内使用了经细微修改的、由 Free Fonts Project 提供的 Bender 字体（[http://jovanny.ru](http://jovanny.ru)），该字体特别说明使用者可将相关字体以任何用途、没有任何限制地使用，在此特别表示感谢。",
        "企鹅物流数据统计网站的「掉落识别」功能中，嵌入了经格式转换的、由 Synthview Type Design 提供的 Novecento Sans Bold 字体（[http://typography.synthview.com/novecento-sans-font-family.php](http://typography.synthview.com/novecento-sans-font-family.php)），以供非展示性用途的模板匹配使用。"
      ]
    },
    "source": {
      "title": "开源许可列表"
    }
  },
  "auth": {
    "forgot": {
      "activator": "忘记 PenguinID",
      "title": "无法登录？",
      "subtitle": "找回登录信息",
      "penguinIdHistory": {
        "title": "此前曾登录的 PenguinID",
        "lastLoginAt": "最后于 {time} 在本设备登录",
        "loginAsUserId": "以此 PenguinID 登录",
        "deleteUserId": "删除此 PenguinID 登录记录",
        "noData": "暂无数据",
        "tips": "本功能仅可找回于 v3.3.1 及更新版本客户端所登录的 PenguinID"
      }
    }
  },
  "members": {
    "categories": {
      "owner": "站长",
      "maintainer": "主要贡献者",
      "contributors": "内容贡献者",
      "others": "其他",
      "translators": "翻译"
    },
    "responsibilities": {
      "_name": "贡献项目",
      "arkplanner": "ArkPlanner 作者",
      "backend": "后端",
      "bulkupload": "批量汇报",
      "customersupport": "客服",
      "v1frontend": "v1.0 前端",
      "frontend": "前端",
      "localization_en": "英语本地化",
      "localization_ja": "日语本地化",
      "localization_ko": "韩语本地化",
      "logo": "Logo 画师",
      "maintenance": "运维",
      "materials": "素材提供",
      "statistics": "统计分析",
      "widget": "小组件开发",
      "native": "App 开发",
      "recognition": "截图识别"
    },
    "socials": {
      "email": "Email",
      "github": "GitHub",
      "qq": "QQ",
      "twitter": "Twitter",
      "weibo": "微博"
    }
  },
  "pattern": {
    "name": "掉落组合",
    "empty": "无掉落",
    "error": [
      "暂无本作战",
      "掉落组合数据"
    ]
  },
  "share": {
    "name": "分享",
    "shortlink": {
      "name": "短链接"
    },
    "text": {
      "_tmpl": "查看企鹅物流数据统计中「{name}」的掉落统计数据",
      "stage": "作战 {name}",
      "item": "素材 {name}"
    },
    "success": "分享成功"
  },
  "search": {
    "placeholder": "搜索...",
    "hint": "键入 物品全拼 拼音首字母 作战名 章节名 关卡编号 或 部分关卡/物品昵称"
  },
  "confirmLeave": {
    "title": "确定要离开此页面吗？",
    "subtitle": "未保存的更改可能会丢失"
  },
  "specials": {
    "mikubirthday2021": {
      "caption": "祝公主殿下生日快乐"
    }
  }
}

export default Object.freeze(messages)
