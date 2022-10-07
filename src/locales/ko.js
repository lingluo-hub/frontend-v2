const messages = {
  app: {
    name: "펭귄 물류 데이터 분석 부서",
    name_line1: "펭귄 물류",
    name_line2: "데이터 분석 부서",
  },
  server: {
    name: "서버",
    switch: "서버 변경",
    selected: "선택됨",
    servers: {
      CN: "CN",
      US: "US",
      JP: "JP",
      KR: "KR",
    },
  },
  menu: {
    _beta: "베타",
    home: "홈",
    search: "검색",
    report: {
      _name: "보고서 작성",
      stage: "스테이지 선택",
      recognition: "스크린샷 인식",
    },
    stats: {
      _name: "드랍률",
      stage: "스테이지별 통계",
      item: "아이템별 통계",
      advanced: "고급 쿼리",
    },
    about: {
      _name: "펭귄 통계에 대해서",
      members: "팀 구성원",
      contribute: "기여",
      changelog: "변경 로그",
      contact: "문의",
      donate: "기부",
      links: "링크",
      bulletin: "공지",
      credits: "크레딧",
    },
    siteStats: "사이트 데이터",
    planner: "파밍 플래너",
    v1: "구 버전 방문",
    refreshData: "데이터 새로고침",
    languages: "언어 변경",
    settings: {
      name: "설정",
      themeStyles: {
        name: "테마 변경",
        disabled: "(비활성화됨: 특수 테마 활성화)",
        default: "기본 테마",
        miku2021: "하츠네 미쿠 2021년 생일 테마",
      },
      appearances: {
        name: "색상 변경",
        system: "시스템 연동",
        dark: "다크 모드",
        light: "라이트 모드",
      },
    },
    overline: {
      planner: "ArkPlanner",
    },
  },
  meta: {
    details: "세부사항",
    loading: "데이터 새로고침 중...",
    notfound: "???",
    footer: {
      copyright: {
        title: "라이센스",
        content:
          "데이터는 펭귄 물류 데이터 분석 부서에 의하여 수집되었으며, 크리에이티브 커먼즈 저작자표시-비영리 4.0 국제 라이센스를 따릅니다. 재배포 혹은 변경시 적절한 출처와 라이센스 링크를 제공하여야 하며, 상업적 용도로 사용할 수 없습니다.",
      },
      credit: "펭귄 물류 데이터 분석 부서 | {date}",
    },
    separator: ", ",
    quotation: {
      start: "“",
      end: "”",
    },
    boolean: {
      true: "네",
      false: "아니오",
    },
    hasNorNot: {
      true: "드랍됨",
      false: "드랍되지 않음",
    },
    dialog: {
      cancel: "취소",
      confirm: "확인",
      submit: "제출",
      save: "저장",
      close: "닫기",
    },
    time: {
      minute: "{m}분",
      second: "{s}초",
    },
    copyWarning: "\n\n펭귄 물류 데이터 분석 부서의 데이터 ({site})",
  },
  stats: {
    headers: {
      pattern: "패턴",
      stage: "스테이지",
      apCost: "이성",
      item: "아이템",
      itemDrops: "아이템 드랍 합계",
      times: "표본 수",
      quantity: "드랍 수",
      percentage: "백분율",
      apPPR: "아이템당 필요 이성",
      clearTime: "최단 클리어 시간",
      timeRange: "집계 기간",
      itemPerTime: "아이템당 시간",
    },
    headerDesc: {
      apCost: "이 스테이지에 필요한 이성",
      quantity: "이 스테이지에서의 모든 드랍 합계",
      times: "이 스테이지에서의 보고서 수",
      percentage: "드랍률 기대치. (드랍 수 / 표본 수)",
      patternPercentage: "드랍 패턴이 나올 확률. (드랍 수 / 표본 수)",
      apPPR: "1개의 아이템을 얻기 위해 필요한 이성의 기대치",
      clearTime:
        "이 스테이지를 클리어하기 위해 필요한 가장 짧은 시간 - 작전 시작과 마지막 적 출현의 시간 간격. 출처: [PRTS Wiki]({prtsLink}).",
      itemPerTime:
        "“백분율”을 계산해 두었으므로 시간 기대치를 계산할 수 있습니다. (클리어 시간 / (드랍 수 / 표본 수))",
      timeRange:
        "이 스테이지의 드랍 테이블 변화로 인해서, 해당하는 줄의 데이터는 드랍 테이블의 가장 마지막 변화 시점 이후의 데이터만 집계되며, “집계 기간”으로 표시됩니다.",
    },
    filter: {
      title: "필터",
      indicator: "필터 {count}개 적용됨",
      stats: "필터링 후 {filtered} / 필터링 전 {total}",
      overview: "필터 개요",
      type: {
        _name: "스테이지 종류",
        showPermanent: "영구",
        showActivity: "이벤트",
      },
      status: {
        _name: "스테이지 상태",
        onlyOpen: "개방된 스테이지만 표시",
      },
    },
    timeRange: {
      inBetween: "{0} - {1}",
      toPresent: "{date} - 현재",
      endsAt: "출시 - {date}",
      unknown: "미확인",
      notSelected: "(선택되지 않음)",
    },
    trends: {
      name: "드랍 데이터 역사",
      set: {
        rate: "드랍률",
        sample: "표본 수",
        drops: "드랍 수",
      },
    },
    lastUpdated: "마지막 업데이트: {date}",
    site: {
      viewMore: "더 보기",
      total: {
        sanity: "보고서의 사용된 이성 총합",
        report: "보고서 수 총합",
        items: "드랍 수 총합",
      },
      stages: "스테이지 순위",
      items: "아이템 순위",
      all: "전체 시간",
      "24hr": "지난 24시간",
      generating: {
        title: "사이트 통계 생성 중...",
        subtitle:
          "신경 네트워크 메시지: 데이터의 양이 많아 약 5분간의 계산이 필요합니다. 조금 뒤 다시 접속해 주세요.",
        refresh: "사이트 통계 새로고침",
      },
    },
  },
  contribute: {
    repo: "프로젝트 저장소: ",
    frontend: "프론트엔드",
    frontendV4: "프론트엔드 v4",
    backend: "백엔드",
    livehouse: "LiveHouse",
    recognizer: "인식기",
    newFolder: "새로운 프로젝트 저장소 생성을 위해 노력 중입니다...",
    caption:
      "펭귄 통계는 공동 프로젝트로, 커뮤니티의 지원 없이는 존재할 수 없습니다. GitHub 저장소에서 별을 눌러주시면 도움이 됩니다. 이슈 생성이나 수정 요청은 언제든지 환영합니다!",
    contribute_0:
      "다음 기술 중 하나라도 경험이 있고, 펭귄 물류에 기여하고자 한다면. QQ 그룹: 747099627로 연락하여 주십시오.",
    contribute_1: "펭귄 물류 데이터 분석 부서는 비영리 오픈소스 프로젝트입니다",
    skills: {
      frontend: "프론트엔드 개발 (React)",
      backend: "백엔드 개발 (Go, PostgreSQL)",
      mobile: "모바일 앱 개발 (iOS, Android)",
      maintenance: "데브옵스",
      design: "UI/UX 디자인",
      analysis: "데이터 분석",
      others: "...",
    },
  },
  fetch: {
    loading: "데이터를 불러오는 중...",
    chunk: {
      title: "레벨 2 신경 네트워크와 연결하는 중...",
      subtitle: "페이지 모듈과 그래픽을 불러오는 중입니다. 기다려 주세요...",
    },
    failed: {
      title: "신경 네트워크와 연결할 수 없습니다",
      subtitle:
        "신경 네트워크와 연결할 수 없습니다. 일부 혹은 모든 정보를 불러올 수 없습니다.",
      retry: "재시도",
      deploying:
        "최신 버전을 배포하는 중입니다. 최대 5분이 걸릴 수 있으니 인내심을 갖고 기다려 주세요.",
      error: {
        zones: "구역 데이터",
        stages: "스테이지 데이터",
        items: "아이템 데이터",
        limitations: "보고서 검수 기준",
        trends: "보고서 추세 역사",
        globalMatrix: "전체 드랍 데이터",
        personalMatrix: "개인 드랍 데이터",
        globalPatternMatrix: "전체 드랍 패턴 데이터",
        personalPatternMatrix: "개인 드랍 패턴 데이터",
        stats: "사이트 통계",
        period: "서버 이벤트",
        config: "프론트엔드 설정",
      },
    },
  },
  report: {
    alert: {
      title: {
        first: "거짓 보고 감지",
        repeat: "주의",
      },
      continue: {
        first: "이대로 보고서를 제출하시겠습니까?",
        repeat: "보고서를 제출하시겠습니까?",
      },
      contact: {
        before: "만약 이 오류가 잘못됐다면, ",
        activator: "저희에게 문의",
        after:
          "해주시면 더없이 기쁠 것입니다. (검증을 위해 스테이지 이름과 드랍 목록을 볼 수 있는 스크린샷을 보내 주십시오)저희 팀이 잘못됐음을 확인하면, 최대치를 수정할 것입니다.",
      },
      causes: {
        noDrop: "드랍된 아이템이 선택되지 않았습니다.",
        limitation:
          "지금 제출되려는 보고서는 저희가 가진 데이터와 큰 차이가 있습니다, 이 보고서를 제출하면, 거짓 보고서로 판단되어 삭제될 수 있습니다.",
      },
    },
    recognition: {
      step: {
        select: "이미지 선택",
        recognize: "인식",
        confirm: "확인",
        report: "제출",
      },
      tips: {
        fileTooBig: "파일 “{name}”({size}MB)는 너무 큽니다",
        fileTooOld: "파일 “{name}”은 36시간 전보다 이전에 생성되었습니다",
        chooseImage: "클릭하거나 드래그해 사진을 추가하세요",
        dragImage: "이미지를 이곳으로 드래그하세요",
        addImage: "클릭해 이미지를 추가하세요",
        copyImage: "우클릭하거나 길게 눌러서 사진을 공유하세요",
        abnormal:
          "{count}개의 이미지가 판독성 검사를 통과하지 못하거나 인식되지 않아 “제외” 처리되었습니다",
        notImageFile: "“{files}”은/는 이미지 파일이 아니므로 무시되었습니다",
        emptyResult: "유효한 결과 없음",
        unsatisfiedStart: "시작 불가",
        emptyFile: "선택된 이미지 없음",
        hasInvalidFile: "유효하지 않은 파일 있음",
      },
      status: {
        success: "성공",
        warning: "경고",
        error: "오류",
      },
      description:
        "클리어 스크린샷을 올리기만 하면 자동으로 결과가 식별되어 보고서를 작성할 수 있습니다.",
      recognize: {
        noFilename: "파일 이름 없음",
        elapsed: "소모 시간",
        remaining: "남은 시간",
        speed: "평균 속도",
        imagePerSecond: "{count}개/초",
      },
      confirm: {
        loadingImage: "스크린샷 미리보기 불러오는 중",
        overview: {
          _name: "개요",
          total: "인식됨",
          success: "성공",
          error: "실패",
          count: "{count}",
          server: "데이터 서버",
          duration: "평균 소모 시간",
        },
        details: "세부사항",
        unknownStage: "인식 실패",
        abnormal: {
          error: "이 이미지는 판독성 검사를 통과하지 못했습니다",
          fatal: "이 이미지는 정상적으로 인식되지 못했습니다",
          details: "오류 목록",
          hover: "마우스를 올려 인식 결과를 확인하세요",
        },
        cherryPick: {
          disabled: "비정상적인 인식 결과를 업로드할 수 없습니다",
          accepted: "이미지 결과 업로드",
          rejected: "이미지 결과 삭제",
        },
        noResult: "인식 결과 없음",
        submit: "선택된 {count}개의 결과 업로드",
        itemsTotal: "아이템 총합",
      },
      report: {
        title: "보고서 세부 정보",
        total: "총합",
        submit: "{count}개의 작전 결과 제출",
        reporting: "보고서를 제출하는 중...",
        allSucceeded: "{count}개의 작전 결과가 성공적으로 제출되었습니다.",
        partialSucceeded:
          "{count}개의 작전 결과만이 성공적으로 제출되었습니다.",
        partialFailed:
          "{count}개의 작전 결과를 제출하지 못했습니다. 오류를 해결하기 위해서 다음을 확인해 주세요",
        partialFailedDesc: [
          "네트워크 연결을 확인하세요: 좋지 않은 네트워크 환경에서는 업로드에 실패할 수 있습니다.",
          "외부 공격으로부터 데이터가 오염되는 것을 막기 위한 제출 가능 횟수 제한에 도달했을 수 있습니다. 남은 보고서는 24시간 후에 다시 시도해 주세요.",
          "IP의 특성상 개개인을 추적할 수 없으므로 대중망에서 IP가 다른 사람들과 공유되고 있을 수 있습니다. 모바일 네트워크나 Wi-Fi를 전환하고 다시 시도하거나, 24시간 후에 다시 시도해 주세요.",
          "재전송 공격을 방지하기 위해, 요청에 타임스탬프가 부여되고 있습니다. 기기의 시간이 표준 시간과 크게 다를 경우 업로드가 실패할 수 있습니다. 기기의 시간을 조정하고 다시 시도해 주세요.",
        ],
        caption:
          "제출에 감사드립니다. 캐시로 인해서 전체 데이터에 추가되어 나타나는 데 최대 20분이 소요될 수 있습니다.",
      },
      states: {
        pending: "초기화 대기 중...",
        initializing: "초기화 중...",
        recognizing: "인식 중...",
        rendering: "내용 불러오는 중...",
        submitting: "제출 중...",
      },
      cost: "소모 시간",
      filename: "파일 이름",
      result: "결과",
      queue: "대기열",
      start: "{count}개의 이미지 식별",
      progress: "진행도",
      submit: "제출",
      retry: "제출에 실패했습니다. 다시 시도하는 중...",
      filter: "필터",
      notices: {
        welcome: [
          "이미지 파일은 **WebAssembly** 기술로 **기기에서** 처리되며, 서버로 업로드되지 않습니다.",
          "36시간 이내에 생성된 스크린샷만을 사용해 주세요. 중복 파일은 감지되어 *제외* 처리됩니다.",
          "스테이지의 첫 드랍이 포함된 결과를 제출하지 말고, 또한 운이 좋았던 결과들만 제출하지 말고 모든 결과를 제출해 주세요.",
        ],
        confirm: [
          "다시 확인하려면 이미지를 눌러서 확대하세요.",
          "판독성 검사를 통과한 스크린샷은 이미 업로드되도록 선택되어 있습니다.",
          "데이터 정확성을 고려하여, 판독성 검사를 통과하지 못한 스크린샷의 업로드는 금지되어 있습니다.",
        ],
      },
      exceptions: {
        "Fingerprint::Same": {
          title: "중복 이미지",
          subtitle: "중복된 이미지가 있는지 확인하세요",
        },
        "FileTimestamp::TooClose": {
          title: "스크린샷 간격이 너무 짧음",
          subtitle: "중복된 이미지가 있는지 확인하세요",
        },
        "DropInfos::Violation": "결과 검수 통과 실패",
        "StageChar::LowConfidence": {
          title: "스테이지 인식 오류",
          subtitle:
            "인식 결과의 신뢰성이 낮습니다. 인식 결과가 이미지와 일치하는지 확인하세요.",
        },
        "DropQuantityChar::LowConfidence": {
          title: "아이템 개수 인식 오류",
          subtitle:
            "인식 결과의 신뢰성이 낮습니다. 인식 결과가 이미지와 일치하는지 확인하세요.",
        },
        "DropAreaDropsQuantity::NotFound": {
          title: "드랍 인식 실패",
          subtitle:
            "낮은 해상도 또는 화질의 이미지로 인해 발생할 수 있습니다. 이미지가 압축되지는 않았는지 확인하세요.",
        },
        "DropAreaDrops::LowConfidence": {
          title: "신뢰성이 낮은 아이템 드랍",
          subtitle: "종료된 이벤트의 드랍을 포함하고 있지는 않은지 확인하세요.",
        },
        "DropAreaDrops::Illegal": {
          title: "잘못된 드랍",
          subtitle:
            "스테이지에서 드랍되어서는 안 되는 드랍이 스크린샷에 있습니다. 주로 이벤트 기간이 아닐 때 이벤트 드랍이 있는 경우입니다.",
        },
        "Result::False": {
          title: "작전 결과 화면이 아님",
          subtitle:
            "작전 결과 화면이 맞는다면, 데이터 서버가 정확한지 확인해 주세요.",
        },
        "Stage::NotFound": {
          title: "유효한 스테이지를 찾을 수 없음",
          subtitle:
            "스테이지 식별 오류이거나, 펭귄 물류가 해당 스테이지의 드랍을 집계하지 않는 경우입니다.",
        },
        "Stage::Illegal": {
          title: "잘못된 스테이지",
          subtitle: "스테이지가 열려 있지 않습니다",
        },
        "3stars::False": "3성 클리어가 아님",
        "Droptypes::Illegal": {
          title: "잘못된 드랍 분류",
          subtitle:
            "첫 드랍이나 이성 반환 등 잘못된 드랍 분류가 스크린샷에 있습니다.",
        },
        "Droptypes::NotFound": "드랍 분류를 찾을 수 없음",
      },
    },
    rules: {
      item: {
        _name: "아이템 수",
        now: "“{stage}”에서 “{item}” {quantity}개가 선택되었습니다",
        gte: "“{item}” {should}개보다 많아야 합니다",
        lte: "“{item}” {should}개보다 적어야 합니다",
        not: "“{item}” {should}개가 아니어야 합니다",
      },
      type: {
        _name: "아이템 종류",
        now: "“{stage}”에서 {quantity}가지의 아이템이 선택되었습니다",
        gte: "“{stage}”에서는 최소 {quantity}가지의 아이템이 드랍됩니다",
        lte: "“{stage}”에서는 최대 {quantity}가지의 아이템만 드랍됩니다",
        not: "“{stage}”에서는 {quantity}가지의 아이템이 드랍될 수 없습니다",
      },
    },
    clear: "초기화",
    closedReason: {
      INVALID: "제출 불가: 이 스테이지의 메타데이터가 존재하지 않습니다.",
      NOT_FOUND:
        "스테이지 없음: 선택된 서버에 해당 스테이지가 존재하지 않습니다.",
      EXPIRED:
        "제출 가능 기간이 아님: 스테이지가 이미 닫혔거나 아직 열리지 않았습니다.",
    },
    furniture: "럭키 드랍: {state}",
    name: "보고",
    submit: "제출",
    success: "성공적으로 제출되었습니다",
    unable: "제출 실패: ",
    undo: "제출 취소",
    undoSuccess: "성공적으로 취소되었습니다",
    gacha: "이 스테이지에서는 여러 개의 결과를 보고서에 제출할 수 있습니다.",
    notices: {
      rule_1:
        "한 번에 하나의 전투에 대한 보고서를 작성하여야 합니다, 제출 전에 입력 내용을 한번 더 확인해 주십시오.",
      rule_2:
        "드랍이 없는 경우에는, 아무것도 누르지 않은 채로 제출을 눌러 주십시오.",
      rule_3:
        "처음으로 클리어한 작전은 보고하지 마시고, 운이 좋았던 작전만 보고하지 마십시오 - 모든 드랍을 보고해 주십시오.",
      rule_4: "3성으로 클리어하여 주십시오.",
      rule_5: "CN 서버에서의 드랍만 보고하여 주십시오.",
    },
    usage: "좌클릭시 드랍 개수가 증가하며, 우클릭시 감소합니다",
  },
  mirrors: {
    global: {
      notification: "접속 문제로 인해 글로벌 사이트 사용을 권장합니다. {0}",
    },
    cn: {
      notification: "접속 문제로 인해 CN 미러 사용을 권장합니다. {0}",
    },
    _notification: {
      ignore: {
        title: "미러 사용 알림을 무시할까요?",
        subtitle:
          "정말로 모든 미러 최적화 알림을 끄시겠습니까? 접속 속도 문제가 발생할 수 있습니다.",
      },
    },
  },
  settings: {
    storageIssue:
      "데이터 오류가 감지되었습니다. 비정상적으로 작동할 수 있습니다. 이 경고가 계속 표시된다면, “설정”에서 “전부 초기화”를 사용해 로컬 데이터를 초기화해보세요.",
    category: {
      appearance: "페이지",
      data: "데이터",
      about: "정보",
    },
    optimization: {
      lowData: {
        title: "데이터 절약 모드",
        active: "데이터 절약 모드 활성화됨",
        subtitle:
          "데이터 절약 모드는 스테이지 선택 시의 구역 배경 이미지나 웹사이트의 배경 이미지같은 불필요한 리소스 요청을 줄여 데이터 사용량을 줄이도록 도와줍니다.",
      },
    },
    data: {
      server: "로컬 데이터의 서버 목록: ",
      size: "로컬 데이터 크기: ",
      reset: {
        title: "전부 초기화",
        subtitle:
          "이 작업은 모든 로컬 데이터를 삭제하고 설정을 초기화할 것입니다. 초기화 후, 모든 설정이 기본값으로 돌아가며, 모든 데이터를 다시 다운로드해야 하고, 웹페이지가 새로고침될 것입니다. 정말로 계속하시겠습니까?",
      },
    },
  },
  zone: {
    name: "구역",
    types: {
      MAINLINE: "메인",
      WEEKLY: "물자 비축",
      ACTIVITY: "이벤트",
      ACTIVITY_OPEN: "이벤트 (개방 중)",
      ACTIVITY_CLOSED: "이벤트 (종료)",
      ACTIVITY_PENDING: "이벤트 (개방 예정)",
      ACTIVITY_PERMANENT: "에피소드 & 사이드 스토리",
      GACHABOX: "보급 물자",
    },
    subTypes: {
      2019: "2019",
      2020: "2020",
      2021: "2021",
      2022: "2022",
      AWAKENING_HOUR: {
        title: "각성",
        subtitle: "에피소드 0-3",
      },
      VISION_SHATTER: {
        title: "환멸",
        subtitle: "에피소드 4-8",
      },
      DYING_SUN: {
        title: "석양",
        subtitle: "에피소드 9-10",
      },
      INTERLUDE: "에피소드",
      SIDESTORY: "사이드 스토리",
    },
    status: {
      0: "개방 중",
      1: "닫힘",
      "-1": "개방 예정",
      permanentOpen: "영구",
    },
    opensAt: "이벤트 기간: {0} - {1}",
  },
  stage: {
    name: "스테이지",
    about: "스테이지 관련 정보",
    apCost: "{apCost} 이성 필요",
    actions: {
      _name: {
        selector: "빠른 액세스",
        selectorEmpty: "사용 가능한 빠른 액세스 없음",
        panel: "빠른 액션",
      },
      star: {
        name: "북마크",
        activate: "북마크",
        activated: "북마크됨",
        deactivate: "클릭해서 북마크를 제거",
        empty: [
          "북마크된 스테이지가 없습니다.",
          "스테이지의 빠른 액션 패널에서 북마크를 추가할 수 있습니다.",
        ],
      },
      history: {
        name: "최근 액세스",
        empty: [
          "최근에 액세스한 스테이지가 없습니다.",
          "스테이지 페이지를 방문하면 기록이 표시될 것입니다.",
        ],
        clear: "초기화",
      },
      links: {
        "prts-wiki": "위키",
        "map-arknights-com": "맵",
      },
      advanced: {
        activator: "고급 쿼리",
      },
    },
    loots: {
      NORMAL_DROP: "일반 드랍",
      EXTRA_DROP: "추가 드랍",
      SPECIAL_DROP: "특수 드랍",
      FURNITURE: "럭키 드랍",
    },
    selector: {
      plannerExclude: "플래너 스테이지 제외",
      excludeAll: "전부 제외",
      includeAll: "전부 포함",
      title: "스테이지 선택",
    },
  },
  planner: {
    notices: {
      autoExistence:
        "ArkPlanner는 이제 존재하지 않거나 닫혀 있는 스테이지를 자동으로 숨깁니다.",
    },
    options: {
      _name: "설정",
      byProduct: "부산물 획득 고려",
      requireExp: "경험치 획득 고려",
      requireLmb: "용문폐 획득 고려",
      excludeStage: {
        _name: "제외",
        title: "선택",
        selected: "{stages}개의 스테이지 제외됨",
      },
    },
    reset: {
      name: "초기화",
      success: "성공적으로 플래너 데이터를 초기화했습니다.",
      dialog: {
        title: "플래너 초기화",
        subtitle:
          "이 작업은 플래너 데이터와 선택한 설정을 초기화할 것입니다. 정말로 계속하시겠습니까?",
        options: {
          options: {
            name: "플래너 옵션",
            indicator: "옵션 모두 초기화",
          },
          excludes: {
            name: "제외 스테이지",
            indicator: "제외 스테이지 모두 초기화",
          },
          items: {
            name: "아이템 데이터",
            indicator: "아이템 데이터 모두 초기화",
          },
        },
      },
    },
    actions: {
      _name: "데이터",
      import: "불러오기",
      export: "내보내기",
      importExport: "@:(planner.actions.import)/@:(planner.actions.export)",
      calculate: "계산",
      calculating: "계산 중...",
      link: {
        generate: "공유 링크 생성",
        generating: "생성 중...",
        share: "링크 공유",
      },
      config: {
        _name: "구성 코드",
        share: "구성 코드 공유",
        import: "구성 코드로부터 불러오기",
      },
    },
    craft: {
      do: "가공",
      unable: "재료 없음",
      errors: {
        title: "가공에 필요한 재료 부족",
        notEnough:
          "{need}개의 “{item}”이/가 필요하지만, {have}개만 보유 중",
      },
      plans: {
        title: "가공 플랜",
        plan: "{cost}개의 “{item}”(으)로 가공, {remain}개 남음",
      },
      success: "{sourceItems}을/를 사용해 {amount}개의 {productItem}을 생성함",
    },
    have: "보유량",
    need: "필요량",
    copy: "클립보드로 복사",
    calculation: {
      title: "계산 결과",
      tabs: {
        stages: "스테이지",
        syntheses: "가공",
        values: "재료 이성 가치",
      },
      lmb: "예상 용문폐 획득량",
      sanity: "예상 이성 필요량",
      exp: "예상 경험치 획득량",
      times: "회",
      level: "T",
      noStage: "스테이지 없음",
      noSyntheses: "가공 없음",
    },
  },
  item: {
    name: "아이템",
    choose: {
      name: "아이템 선택",
    },
    categories: {
      ACTIVITY_ITEM: "이벤트 아이템",
      CARD_EXP: "작전 기록",
      CHIP: "칩",
      FURN: "가구",
      MATERIAL: "재료",
    },
    related: "관련 아이템",
    undefined: "미확인",
  },
  query: {
    panel: {
      builder: "쿼리 빌더",
      results: "쿼리 결과",
      footer: {
        cache:
          "현재 표시되는 쿼리 결과는 캐시 데이터입니다. 최신 데이터를 얻으려면 “쿼리 실행”을 다시 눌러주세요.",
        disclaimer:
          "“고급 쿼리” 기능으로 생성된 모든 데이터는 이 사이트의 “데이터 라이센스 협약”으로 보호됩니다. 펭귄 통계는 “고급 쿼리” 기능으로 생성된 데이터에 대하여 어떠한 형태의 약속이나 보증도 하지 않습니다.",
      },
    },
    title: {
      main: "메인 쿼리",
      comparison: "비교용 쿼리 #{index}",
    },
    type: {
      matrix: "통계",
      trend: "추세",
    },
    selector: {
      item: {
        title: "아이템 선택",
        subtitle: "선택된 아이템으로 쿼리 결과를 필터링합니다.",
        unspecified: "모든 아이템 표시",
        selected: "{length}개의 아이템 쿼리",
      },
      stage: {
        title: "스테이지 선택",
        subtitle: "(필수) 선택된 스테이지로 쿼리 결과를 필터링합니다.",
      },
      timeRange: {
        title: "기간 설정",
        subtitle: "(필수) 특정 기간으로 쿼리 결과를 제한합니다.",
        presets: {
          title: "프리셋",
          start: "시작",
          end: "끝",
        },
      },
      interval: {
        title: "추세 간격 단위",
        subtitle: "추세 확인을 위해 시간 간격을 설정합니다.",
        unspecified: "추세를 확인하지 않음",
      },
    },
    operation: {
      add: "비교용 쿼리 추가",
      execute: "쿼리 실행",
      inProgress: "쿼리 실행 중...",
    },
    result: {
      main: "메인 쿼리 결과",
      comparison: "비교용 쿼리 #{index} 결과",
      empty: "이 쿼리는 0개의 결과를 반환했습니다. 매개변수를 확인하세요.",
      hideTime: "상세한 시간 숨기기",
    },
  },
  version: {
    upgrade: {
      title: "오래된 버전",
      subtitle:
        "클라이언트 버전이 업데이트로 인해 만료되었습니다. 업데이트 후 다시 시도해 주세요.",
      action: "업데이트",
      unable: "업데이트할 수 없나요?",
    },
  },
  notice: {
    failed: "공지 불러오기 실패 : {error}",
    loading: "공지 불러오는 중...",
  },
  dataSource: {
    switch: "데이터 출처",
    global: "전부",
    loginNotice: "개인 드랍 데이터를 확인하려면 먼저 로그인해주세요.",
    personal: "개인",
    title: "로그인 필요",
  },
  validator: {
    required: "필수",
  },
  quotes: {
    doYouKnow: [
      "그거 아시나요? 프틸롭시스의 깃털은 너어어무 귀엽답니다! o(*≧▽≦)ツ",
    ],
  },
  credits: {
    material: {
      title: "콘텐츠 크레딧",
      content: [
        "펭귄 통계는 이미지, 애니메이션, 오디오, 원본 텍스트를 포함하며 이들에 한정되지 않는 리소스를 게임의 요소를 더 잘 반영하고 사용자의 경험을 향상시키기 위해 사용합니다. 이러한 작업물의 저작권은 게임 서비스를 제공하는 Shanghai Hypergryph Network Technology Co., Ltd. 및/또는 YOSTAR (HONG KONG) LIMITED, 株式会社Yostar, YOSTAR LIMITED, 龍成網路 등을 포함하는 관련사들에게 있습니다.",
        "펭귄 통계는 PRTS Wiki([http://prts.wiki](http://prts.wiki))의 일부 리소스를 사용하며 그 중 일부를 원본의 내용이 변하지 않는 선에서 수정했습니다.",
        "펭귄 통계는 개인/상업 이용이 전부 가능하다고 공식 페이지([http://jovanny.ru](http://jovanny.ru))에서 밝히고 있는 Free Fonts Project에서 제공하는 Bender 글꼴을 직접 조금 수정한 글꼴을 사용하고 있습니다. 따라서 펭귄 통계는 Bender 글꼴이 이러한 라이센스 하에 배포된 것에 특별히 감사를 표합니다.",
      ],
    },
    source: {
      title: "오픈소스 라이센스",
    },
  },
  auth: {
    forgot: {
      activator: "PenguinID를 잊음",
      title: "로그인할 수 없나요?",
      subtitle: "로그인 정보를 복원합니다",
      penguinIdHistory: {
        title: "기존에 사용한 PenguinID",
        lastLoginAt: "마지막 로그인: {time}",
        loginAsUserId: "이 PenguinID로 로그인",
        deleteUserId: "이 PenguinID 기록 제거",
        noData: "데이터 없음",
        tips: "클라이언트 v3.3.1 또는 그 이상의 버전에서 사용된 PenguinID만 복원할 수 있습니다.",
      },
    },
  },
  members: {
    categories: {
      owner: "웹마스터",
      maintainer: "메인테이너",
      contributors: "기여자",
      others: "그 외",
      translators: "번역가",
    },
    responsibilities: {
      _name: "기여사항",
      arkplanner: "ArkPlanner 제작",
      backend: "백엔드",
      bulkupload: "동시 업로드",
      customersupport: "고객 지원",
      v1frontend: "v1.0 프론트엔드",
      frontend: "프론트엔드",
      localization_en: "영어 현지화",
      localization_ja: "일본어 현지화",
      localization_ko: "한국어 현지화",
      logo: "로고 디자이너",
      maintenance: "데브옵스",
      materials: "재료 이미지 제공",
      statistics: "분석 및 통계",
      widget: "위젯 개발",
      native: "앱 개발",
      recognition: "스크린샷 인식",
    },
    socials: {
      email: "Email",
      github: "GitHub",
      qq: "QQ",
      twitter: "Twitter",
      weibo: "Weibo",
    },
  },
  pattern: {
    name: "드랍 패턴",
    empty: "(드랍 없음)",
    error: ["이 스테이지의 드랍 패턴", "현재 이용 불가능"],
  },
  share: {
    name: "공유",
    shortlink: {
      name: "짧은 링크",
    },
    text: {
      _tmpl: "펭귄 통계 - {name}의 드랍률",
      stage: '스테이지 "{name}"',
      item: '아이템 "{name}"',
    },
    success: "성공적으로 공유됨",
  },
  search: {
    placeholder: "검색...",
    hint: "스테이지, 구역 또는 아이템 이름 입력",
  },
  confirmLeave: {
    title: "정말로 떠나시겠습니까?",
    subtitle: "저장되지 않은 내용이 소실될 수 있습니다.",
  },
  specials: {
    mikubirthday2021: {
      caption: "생일 축하해 하츠네 미쿠",
    },
  },
};

export default Object.freeze(messages);
