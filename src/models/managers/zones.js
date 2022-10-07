import ObjectManager from '@/utils/objectManager';
import commons from './_common';

function getIcon (key) {
  const ICON_MAP = {
    MAINLINE: "mdi-chess-queen",
    WEEKLY: "mdi-puzzle",
    ACTIVITY: "mdi-sack",
    ACTIVITY_PERMANENT: "mdi-chess-pawn",
    GACHABOX: "mdi-treasure-chest",
    RECRUIT: "mdi-ticket-percent",
  };
  return ICON_MAP[key]
}

const zones = new ObjectManager({
  name: 'zones',
  api: {
    url: '/zones'
  },
  transform: [
    (object) => {
      // object.push({
      //   "zoneId": "act12side_zone1",
      //   "zoneIndex": 0,
      //   "type": "ACTIVITY",
      //   "zoneName": "测试活动",
      //   "zoneName_i18n": {"ja": "测试活动 ja", "ko": "测试活动 ko", "en": "测试活动 en", "zh": "测试活动 zh"},
      //   "existence": {
      //     "US": {"exist": true},
      //     "JP": {"exist": true},
      //     "CN": {"exist": true},
      //     "KR": {"exist": true}
      //   },
      //   "stages": ["act12side_zone1_001"]
      // })
      // object.push({
      //   "zoneId": "test02",
      //   "zoneIndex": 0,
      //   "type": "PERMANENT",
      //   "zoneName": "测试活动",
      //   "zoneName_i18n": {"ja": "测试活动 ja", "ko": "测试活动 ko", "en": "测试活动 en", "zh": "测试活动 2 全无dropInfos"},
      //   "existence": {
      //     "US": {"exist": true, "openTime": Date.now() + 10000, "closeTime": 1800000000000},
      //     "JP": {"exist": false},
      //     "CN": {"exist": true},
      //     "KR": {"exist": false}
      //   },
      //   "stages": ["test02_001", "test02_002"]
      // })

      object.map((el) => {
        el.icon = getIcon(el.type) || 'mdi-help-circle'

        el.isActivity = el.type === 'ACTIVITY'

        return el
      })
      return object
    }
  ],
  validator: commons.defaultValidator,
  ttl: 1000 * 60 * 60 * 1, // 1 hour
  ajaxHooks: commons.defaultAjaxHooks
})

export default zones
