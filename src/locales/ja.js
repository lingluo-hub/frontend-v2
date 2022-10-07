const messages = {
  app: {
    name: "ペンギン急便データ統計処理部門",
    name_line1: "ペンギン急便",
    name_line2: "データ統計処理部門",
  },
  server: {
    name: "サーバー",
    switch: "ゲームサーバー切替",
    servers: {
      CN: "大陸版",
      US: "英語版",
      JP: "日本版",
      KR: "韓国版",
    },
  },
  menu: {
    home: "トップページ",
    report: {
      _name: "ドロップ報告",
      stage: "章别",
      recognition: "スクショ認識",
    },
    search: "グローバル検索",
    stats: {
      _name: "ドロップ率",
      stage: "作戦別",
      item: "素材別",
      advanced: "高度なクエリ",
    },
    about: {
      _name: "当サイトについて",
      members: "制作協力者",
      contribute: "開発協力者募集中",
      changelog: "更新履歴",
      contact: "連絡先",
      donate: "寄付について",
      links: "相互リンク",
      bulletin: "お知らせ",
      credits: "コピーライト",
    },
    siteStats: "全サイト統計データ",
    planner: "周回計画作成ツール",
    v1: "旧バージョン",
    refreshData: "データ更新",
    languages: "言語切替",
    settings: {
      name: "設定",
      themeStyles: {
        name: "テーマ切替",
        disabled: "(無効：アクティブな特殊テーマ)",
        default: "デフォルトテーマ",
        miku2021: "初音ミク2021誕生日特別テーマ",
      },
      appearances: {
        name: "外観モード切替",
        system: "システム設定に従う",
        dark: "常にダークモード",
        light: "常にライトモード",
      },
    },
    overline: {
      planner: "ArkPlanner",
    },
  },
  meta: {
    details: "詳細を見る",
    loading: "読み込み中...",
    notfound: "ここはどこ¿¿¿",
    footer: {
      copyright: {
        title: "利用許諾",
        content:
          "ドロップ統計データはクリエイティブ・コモンズ 表示 - 非営利 4.0 国際 ライセンスの下に提供されています。当サイトのいかなる内容の転載や公開を行う場合は、必ず内容の元となっているページまたはトップページのURLのリンクを行い、データ統計の転載を行ったことを明記しなければなりません。また許可無しに当サイトの内容または派生作品を商業目的で利用することを許可しません。",
      },
      credit: "ペンギン急便データ統計処理部門 | {date}",
    },
    separator: "、",
    quotation: {
      start: "「",
      end: "」",
    },
    boolean: {
      true: "はい",
      false: "いいえ",
    },
    hasNorNot: {
      true: "有り",
      false: "無し",
    },
    dialog: {
      cancel: "いいえ",
      confirm: "はい",
      submit: "送信",
      close: "閉じる",
    },
    time: {
      minute: "{m}分",
      second: "{s}秒",
    },
    copyWarning: "\n\nCopyright © 2021 Penguin Statistics（{site}）",
  },
  stats: {
    headers: {
      pattern: "パターン",
      stage: "ステージ",
      apCost: "理性",
      item: "アイテム",
      times: "サンプル数",
      quantity: "ドロップ数",
      percentage: "ドロップ率",
      apPPR: "１個あたりの必要理性期待値",
      clearTime: "最速クリアタイム",
      timeRange: "期間",
      itemPerTime: "1個あたりの必要時間期待値",
    },
    filter: {
      title: "フィルタ",
      indicator:
        "フィルタ未適用 | {count} フィルタ適用中 | {count} フィルタ適用中",
      stats: "ﾌｨﾙﾀﾘﾝｸﾞ後 {filtered} / ﾌｨﾙﾀﾘﾝｸﾞ前 {total}",
      overview: "フィルタ結果",
      type: {
        _name: "ステージタイプ",
        showPermanent: "恒常",
        showActivity: "イベント",
      },
      status: {
        _name: "ステージ状態",
        onlyOpen: "開放中ステージのみを表示",
      },
    },
    timeRange: {
      inBetween: "{0} ~ {1}",
      toPresent: "{date} ~ 現在",
      endsAt: "{date} 以前",
      unknown: "不明",
      notSelected: "（選択されていない）",
    },
    trends: {
      name: "歴史ドロップデータ",
      set: {
        rate: "ドロップ率",
        sample: "サンプル数",
        drops: "ドロップ数",
      },
    },
    lastUpdated: "最終更新日時：{date}",
    site: {
      viewMore: "さらに詳しく",
      total: {
        sanity: "すべての報告で消費された理性",
        report: "総報告数",
        items: "総ドロップ数",
      },
      stages: "ステージサンプル数ランキング",
      items: "アイテムドロップ数ランキング",
      all: "全期間",
      "24hr": "過去24時間",
      generating: {
        title: "Generating Site Statistics...",
        subtitle:
          "Neural Network Message: Due to high amount of data, site statistics need up to 5 minutes to calculate. Please come back later.",
        refresh: "Refresh Site Statistics",
      },
    },
  },
  contribute: {
    repo: "プロジェクトリポジトリ：",
    frontend: "ﾌﾛﾝﾄｴﾝﾄﾞ",
    frontendV4: "ﾌﾛﾝﾄｴﾝﾄﾞ v4",
    backend: "ﾊﾞｯｸｴﾝﾄﾞ",
    livehouse: "LiveHouse",
    recognizer: "ｽｸｼｮ認識",
    newFolder: "新規フォルダー鋭意作成中",
    caption:
      "Penguin Statisticは非営利コミュニティプロジェクトです。本プロジェクトの発展は、皆様のご助力が必要不可欠でございます。宜しければGitHubへ本レポジトリにスターをお付けください。イシューやプルリクエストも心よりお待ちしております。皆様のご支援とご協力を賜りますよう、よろしくお願い申し上げます。",
    contribute_0:
      "下記の開発経験お持ちの方を募集しています。Penguin Statisticsに自らの力を貢献してみませんか？ご興味のある方は、ぜひこのQQグループにご参加ください：747099627",
    contribute_1: "本プロジェクトは無償のオープンソースプロジェクトです",
    skills: {
      frontend: "フロントエンド開発 React",
      backend: "バックエンド開発 Go, PostgreSQL",
      mobile: "モバイルアプリ開発 iOS、Android",
      maintenance: "DevOps",
      design: "UI/UXデザイン",
      analysis: "データ統計解析",
      others: "...",
    },
  },
  fetch: {
    loading: "読み込み中...",
    chunk: {
      title: "拡張ニューラルコネクタにデータが転送されています",
      subtitle: "ページモデルを読み込み中、お待ちください…",
    },
    failed: {
      title: "ニューラルコネクタ接続エラー",
      subtitle:
        "ニューラルコネクタに同期接続できませんでした。一部のリソースロスが発生しました。",
      retry: "再試行",
      deploying: "データを最新の状態にしています。最大5分程お待ちください…",
      error: {
        zones: "ゾーンデータ",
        stages: "作戦データ",
        items: "素材データ",
        limitations: "レポートデータの検証ルール",
        trends: "履歴レポートデータ",
        globalMatrix: "全体ドロップデータ",
        personalMatrix: "個人ドロップデータ",
        globalPatternMatrix: "全体ドロップパターンデータ",
        personalPatternMatrix: "個人ドロップパターンデータ",
        stats: "サイト統計データ",
        period: "サーバーイベントデータ",
      },
    },
  },
  report: {
    alert: {
      title: {
        first: "障害リスクの検出",
        repeat: "警告",
      },
      continue: {
        first: "本当に送信しますか？",
        repeat: "本当にこのデータを送信しますか？",
      },
      contact: {
        before: "誤った情報であると判断した場合は",
        activator: "管理人までご連絡ください",
        after:
          "（その際はスクリーンショットの添付をお願いいたします）。確認次第速やかに修正を行わせて頂きます。",
      },
      causes: {
        noDrop:
          "ドロップアイテムが何も選択されていません。送信するデータに問題はありませんか？",
        limitation:
          "今回報告しようとしている内容は既存のデータとの差が大きくなっており、このまま報告するのであれば今回の報告は異常と判定され、全て統計データに反映されることはできません。",
      },
    },
    specialSideStory: {
      dialog: {
        title: "「ドッソレスホリデー」のラベルドロップについて",
        cancel: "閉じる",
        confirmTimerPending: "わかりました ({timer})",
        confirmTimerDone: "わかりました",
      },
    },
    recognition: {
      step: {
        select: "選択",
        recognize: "認識",
        confirm: "確認",
        report: "レポート",
      },
      tips: {
        fileTooBig: '"{name}" ({size}MB) はサイズの制限を超過しています',
        fileTooOld:
          '"{name}" のスクリーンショットの作成時刻は36時間以内の制限を超過しています',
        chooseImage: "クリックして画像を選択、もしくはボックスに画像をドロップ",
        dragImage: "ここに画像をドラッグ＆ドロップ",
        addImage: "ここにクリックして画像を選択",
        copyImage:
          "画像を右クリック、もしくは長押しすると、画像をクリップボードにコピー・保存ができます",
        abnormal:
          "クオリティモニタリング（品質監査）により、ご提出いただいたスクリーンショットのうち、 {count} 枚が基準を満たしていないとして、当該スクリーンショットを「却下」し、サーバーへのレポートはしません",
        notImageFile: "{files} は画像ファイルではないので、ご提出できません",
        emptyResult: "認識結果はありません",
        unsatisfiedStart: "認識をスタートできません",
        emptyFile: "選択された画像はありません",
        hasInvalidFile: "無効のファイルが含まれています",
      },
      status: {
        success: "成功",
        warning: "警告",
        error: "エラー",
      },
      description:
        "「作戦成果」画面のスクリーンショットを自動認識で、ドロップ報告は楽で簡単にする！",
      recognize: {
        noFilename: "ファイル名なし",
        elapsed: "経過時間",
        remaining: "推定残り時間",
        speed: "認識速度",
        imagePerSecond: "{count} 枚/秒",
      },
      confirm: {
        loadingImage: "スクリーンショットのプレビューを読み込み中",
        overview: {
          _name: "結果概要",
          total: "総計",
          success: "成功",
          error: "異常",
          count: "{count} 枚",
          server: "データサーバー",
          duration: "1画像の平均認識時間",
        },
        details: "結果詳細",
        unknownStage: "認識できません",
        abnormal: {
          error: "この画像は却下されます",
          fatal: "この画像は認識できません",
          details: "異常リスト",
          hover: "マウスオーバーで認識内容表示",
        },
        cherryPick: {
          disabled: "異常なので選択不可",
          accepted: "この結果をアップロード",
          rejected: "この結果を破棄",
        },
        noResult: "認識結果はありません",
        submit: "選択した {count} 件の認識結果をアップロード",
        itemsTotal: "アイテム合計",
      },
      report: {
        title: "レポート詳細",
        total: "総計",
        submit: "選択した {count} 件の認識結果をアップロード",
        reporting: "結果をアップロード中...",
        allSucceeded: "{count} 件の認識結果がアップロード成功",
        partialSucceeded: "{count} 件の認識結果のみアップロード成功",
        partialFailed:
          "{count} 件の認識結果がアップロード失敗しました。以下のチェックリストをしたがって、問題を解決してみてください。",
        partialFailedDesc: [
          "●　ネットワーク接続の状況を確認：接続不安定・接続中断でアップロード失敗が発生します。",
          "●　大量のレポートしましたか：データベースを外部の攻撃から守るために、一日のレポート数には上限があります。何度も試してもアップロードできない場合、上限に達した可能性がありますので、24時間後に再試行してください。",
          "●　共有IPアドレスを使用していますか：一部の地域には、ご使用のIPアドレスは他人と共有している可能性があります。この場合、ネット環境の切り替え（ルーター再起動、WiFi・4Gの切り替え）をしてから再試行してください。また、24時間後に再試行してください。",
          "●　デバイスの時刻を確認：重複レポ攻撃を防止対策として、端末からのリクエストにはタイムスタンプを付与します。ご使用のデバイスの時刻が正確な時刻と大きく異なる場合、アップロード失敗が発生しますので、デバイスの時刻を調整してください。",
        ],
        caption:
          "レポートありがとうございます。キャッシュの原因で、レポートしたデータが反映するまで、20分程度の時間がかかる可能性があります。",
      },
      states: {
        pending: "初期化準備中...",
        initializing: "初期化中...",
        recognizing: "認識中...",
        rendering: "結果をレンダリング中...",
        submitting: "結果をアップロード中...",
      },
      cost: "時間コスト",
      filename: "ファイル名",
      result: "認識結果",
      queue: "画像リスト",
      start: "{count} 枚画像を認識",
      progress: "進捗状況",
      retry: "送信失敗、リトライ中",
      filter: "結果フィルター",
      notices: {
        welcome: [
          "ご提供の画像はWebAssembly技術でローカルにて認識しますので、認識段階でサーバーへのデーター送信はございません。",
          "スクリーンショットは、作成時刻が**36 時間内**、またクリア評価が**星3**のものをご選択ください。",
          "初回クリアのスクリーンショットの選択はご遠慮ください。**偏向的に**一部だけのスクリーンショット（極端にいい・悪いケース）でのレポートはご遠慮ください。",
        ],
        confirm: [
          "画像をクリックしたら拡大できます、もう一回クリックしたら元に戻せます",
          "認識成功のスクリーンショットは自動的にチェックを入れています",
          "本サイトのデータの正確度のため、エラーのある画像はご選択できません",
        ],
      },
      exceptions: {
        "Fingerprint::Same": {
          title: "完全一致の画像が存在",
          subtitle: "重複的なスクリーンショットを選択しましたかご確認ください",
        },
        "FileTimestamp::TooClose": {
          title: "作成時間間隔が短すぎる画像が存在",
          subtitle: "重複的なスクリーンショットを選択しましたかご確認ください",
        },
        "DropInfos::Violation": "認識結果が検証失敗",
        "StageChar::LowConfidence": {
          title: "ステージ認識異常の可能性がある",
          subtitle: "認識の信頼性が低い、認識結果を画像と照合してください",
        },
        "DropQuantityChar::LowConfidence": {
          title: "アイテム数量認識異常の可能性がある",
          subtitle: "認識の信頼性が低い、認識結果を画像と照合してください",
        },
        "DropAreaDropsQuantity::NotFound": {
          title: "数量検出失敗のドロップが存在",
          subtitle:
            "解像度・品質の低い画像はこの問題を引き起こす可能性があります。画像は圧縮処理されましたかご確認ください",
        },
        "DropAreaDrops::LowConfidence": {
          title: "未知のドロップが存在",
          subtitle:
            "この問題は通常、イベント期間外のイベントドロップによるものです",
        },
        "DropAreaDrops::Illegal": {
          title: "非合法ドロップが存在",
          subtitle:
            "このステージには今、可能のドロップが存在していませんが、検出されました。これは通常、イベント期間外のイベントドロップによるものです",
        },
        "Result::False": {
          title: "作戦成果のスクリーンショットではない",
          subtitle:
            "もしこれは確かに作戦成果のスクリーンショットであれば、ご選択のサーバーは間違いないかご確認ください",
        },
        "Stage::NotFound": {
          title: "未知のステージ",
          subtitle:
            "これはステージ認識にはエラーが発生しましたか、又はこのステージは記録されていません（殲滅作戦、絶境作戦など）",
        },
        "Stage::Illegal": {
          title: "非合法ステージ",
          subtitle: "このステージただ今有効していません",
        },
        "3stars::False": "星3評価ではない",
        "Droptypes::Illegal": {
          title: "非合法のドロップタイプ",
          subtitle:
            "スクリーンショットには初回、理性返却などの非合法なドロップタイプ、又は認識できないドロップタイプが存在しています",
        },
        "Droptypes::NotFound": "ドロップタイプ未検出",
      },
    },
    rules: {
      item: {
        _name: "アイテム数量",
        now: "{stage}ドロップで選択された {item} ×{quantity}",
        gte: "@:(meta.quotation.start){item}@:(meta.quotation.end)の数を{should}個以上の数値で再入力して下さい",
        lte: "@:(meta.quotation.start){item}@:(meta.quotation.end)の数を{should}個以下の数値で再入力して下さい",
        not: "@:(meta.quotation.start){item}@:(meta.quotation.end)のドロップ数が{should}個になることはありません",
      },
      type: {
        _name: "アイテム種類数",
        now: "{stage}ドロップで選択されたアイテムは{quantity}種類です",
        gte: "最少{should}種類のアイテムが必要です",
        lte: "最大{should}種類のアイテムが必要です",
        not: "{should}種類のアイテムであってはなりません",
      },
    },
    clear: "クリア",
    furniture: "家具ドロップ：{state}",
    name: "報告",
    submit: "送信",
    success: "送信成功",
    unable: "送信失敗：",
    undo: "送信キャンセル",
    undoSuccess: "キャンセルしました",
    gacha: "この操作を行うことでデータに複数の結果を反映させることが出来ます。",
    notices: {
      rule_1: "ここに追加する内容は1回でドロップした内容です。",
      rule_2: "素材がドロップしなかった場合は直接送信をクリックしてください。",
      rule_3:
        "初回クリア時の報酬を報告しないでください。また、極端なロップ結果（極めてよかった・悪かったなど）を報告しないでください。",
      rule_4: "星３クリアした時の結果のみを報告してください。",
      rule_5:
        "大陸版以外のドロップデータをアップロードしないよう、ご協力をお願いいたします。",
    },
    dossolesHoliday: {
      title: {
        inner: "全種類のラノベを獲得してから",
        tmpl: "{0}ご報告ください",
      },
      content:
        "これまでのデータに基づいて、ラノベのドロップ事件は統計的な独立性を満たしていないと推測されます。全種類のラノベを獲得していないなら、そのドロップ率が動態的に変化し、本来のドロップ率とは異なる可能性があります。本来のドロップ率を正確に計算するため、全種類のラノベを獲得してからご報告ください。",
    },
    usage: "左クリックで個数を増やし、右クリックで個数を減らす",
  },
  settings: {
    category: {
      appearance: "スタイル",
      data: "設定とデータ",
      about: "当サイトについて",
    },
    iosSystemSettings: "言語とプライバシーの設定",
    optimization: {
      lowData: {
        title: "軽量モード",
        active: "軽量モード有効中",
        subtitle:
          "軽量モードとは、作戦リストや全ステーションなどの画像リソースを無効し、データ通信量の消費を抑えるモードです。",
      },
    },
    data: {
      server: "キャッシュされたのサーバー：",
      size: "ローカルデータ：",
      reset: {
        title: "ローカルデータと設定初期化",
        subtitle:
          "すべてのローカルデータと設定を削除します。その後ローカル設定はすべて初期化され、ページを刷新します。データを再読み込みする必要があります。本当に続けますか？",
      },
    },
  },
  zone: {
    name: "章",
    types: {
      MAINLINE: "メインステージ",
      WEEKLY: "物資調達",
      ACTIVITY_OPEN: "イベント（開催中）",
      ACTIVITY_CLOSED: "イベント（終了）",
      ACTIVITY_PENDING: "イベント（近日開催）",
      ACTIVITY_PERMANENT: "エピソード & サイドストーリー",
      GACHABOX: "補給物資",
    },
    subTypes: {
      2019: "2019",
      2020: "2020",
      2021: "2021",
      2022: "2022",
      AWAKENING_HOUR: {
        title: "覚醒",
        subtitle: "0~3 章",
      },
      VISION_SHATTER: {
        title: "幻滅",
        subtitle: "4~8 章",
      },
      DYING_SUN: {
        title: "残映",
        subtitle: "9 章",
      },
      INTERLUDE: "エピソード",
      SIDESTORY: "サイドストーリー",
    },
    status: {
      0: "開催中",
      1: "終了",
      "-1": "近日開催",
      permanentOpen: "恒常",
    },
    opensAt: "開催期間：{0} - {1}",
  },
  stage: {
    name: "作戦",
    about: "この作戦について",
    apCost: "消費理性：{apCost}",
    actions: {
      _name: {
        selector: "クイックアクセス",
        selectorEmpty: "クイックアクセスはありません",
        panel: "クイック操作",
      },
      star: {
        name: "スター付き作戦",
        activate: "作戦にスターを追加",
        activated: "作戦にスターを追加しました",
        deactivate: "クリックしてスターを削除",
        empty: [
          "スター付き作戦はありません",
          "作戦情報の「クイック操作」で作戦にスターを追加するとここに表示されます",
        ],
      },
      history: {
        name: "最近選択した作戦",
        empty: [
          "最近選択した作戦はありません",
          "作戦のページをアクセスするとここに表示されます",
        ],
        clear: "クリア",
      },
      links: {
        "prts-wiki": "Wiki",
        "map-arknights-com": "マップ",
      },
      advanced: {
        activator: "高度なクエリを実行",
      },
    },
    loots: {
      NORMAL_DROP: "通常",
      EXTRA_DROP: "その他",
      SPECIAL_DROP: "レア",
      FURNITURE: "家具",
    },
    selector: {
      plannerExclude: "ステージ除外設定",
      excludeAll: "全て除外",
      includeAll: "全て含む",
      title: "ステージ選択",
    },
  },
  planner: {
    notices: {
      autoExistence:
        "ArkPlannerは、選択したサーバーで開いていないステージを自動的に非表示にします",
    },
    options: {
      _name: "オプション",
      byProduct: "加工副産物を考慮する",
      requireExp: "大量の経験値が必要",
      requireLmb: "大量の龍門幣が必要",
      excludeStage: {
        _name: "ステージ除外",
        title: "選ぶ",
        selected: "{stages} ステージ除外中",
      },
    },
    reset: {
      name: "リセット",
      dialog: {
        title: "ArkPlannerをリセット",
        subtitle: "すべてのデータや設定はリセットされます。続行しますか？",
        options: {
          options: {
            name: "オプション",
            indicator: "全てのオプションをオフにします",
          },
          excludes: {
            name: "ステージ除外",
            indicator: "全ての除外をオフにします",
          },
          items: {
            name: "素材データ",
            indicator: "全ての素材個数をリセットします",
          },
        },
      },
    },
    actions: {
      _name: "データ",
      import: "インポート",
      export: "エクスポート",
      importExport: "@:(planner.actions.import)/@:(planner.actions.export)",
      calculate: "計算を行う",
      calculating: "少女計算中…",
      config: {
        _name: "コンフィグレーション",
        share: "エクスポート",
        import: "インポート",
      },
    },
    have: "所持数",
    need: "必要数",
    copy: "クリップボードにコピー",
    craft: {
      do: "加工",
      unable: "加工できません",
      errors: {
        title: "加工には必要な素材が欠けています",
        notEnough:
          "加工には {need} 個の「{item}」が必要ですが、 {have} 個しか保有していません",
      },
      plans: {
        title: "加工プラン",
        plan: "加工には {cost} 個の「{item}」を消耗して、 残り{remain} 個あります",
      },
      success:
        " {sourceItems} を使って {amount} 個の {productItem} に加工しました",
    },
    calculation: {
      title: "計算結果",
      tabs: {
        stages: "ステージ",
        syntheses: "素材加工",
        values: "素材理性価値",
      },
      lmb: "推定獲得龍門幣",
      sanity: "推定必要理性",
      exp: "戦闘で入手出来る経験値の推定",
      times: "回",
      level: "素材レベル",
      noStage: "入力内容に不備があるため結果を表示出来ません。",
      noSyntheses: "入力内容に不備があるため結果を表示出来ません。",
    },
  },
  item: {
    choose: {
      name: "素材選択",
    },
    categories: {
      ACTIVITY_ITEM: "イベントアイテム",
      CARD_EXP: "作戦記録",
      CHIP: "SoC",
      FURN: "家具",
      MATERIAL: "素材",
    },
    related: "関連素材",
  },
  dataSource: {
    switch: "データソース",
    global: "全体",
    loginNotice:
      "個人所有のドロップデータを閲覧するには、ログインする必要があります。",
    personal: "個人",
    title: "ログインが必要です",
  },
  matrixCategory: {
    switch: "集計範囲",
    all: {
      label: "全体",
    },
    auto: {
      label: "自動",
      // tooltip: "自动数据来源：指由第三方工具所自动汇报的掉落数据",
    },
    manual: {
      label: "手動",
      // tooltip:
        // "手动数据来源：指由用户使用企鹅物流数据统计的「网页或 App 端」中的「掉落汇报」或「截图识别」汇报的掉落数据",
    },
  },
  members: {
    categories: {
      developers: "開発者",
      others: "その他",
      owner: "管理人",
      translators: "翻訳者",
    },
    responsibilities: {
      _name: "コントリビューション",
      arkplanner: "ArkPlannerの著者",
      backend: "バックエンド",
      bulkupload: "一括アップロード",
      customersupport: "コンサルタント",
      frontend: "フロントエンド",
      localization_ja: "日本語化",
      localization_ko: "韓国語化",
      logo: "ロゴデザイナー",
      maintenance: "DevOps",
      materials: "素材提供",
      statistics: "データ統計解析",
      widget: "ウィジェット",
      native: "アプリ開発",
      recognition: "スクショ認識",
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
    name: "ドロップパターン",
    empty: "ドロップなし",
    error: ["本作戦のドロップパターンの", "データはありません"],
  },
  share: {
    name: "共有",
    shortlink: {
      name: "短縮URL",
    },
    text: {
      _tmpl: "Penguin Statisticsで「{name}」のドロップデータを確認",
      stage: "作戦 {name}",
      item: "素材 {name}",
    },
    success: "共有しました",
  },
  search: {
    placeholder: "検索...",
    hint: "素材名・作战名・ステージコード・章タイトル・イベント名（漢字・ふりがな・カタカナ・ローマ字）で検索",
  },
};

export default Object.freeze(messages);
