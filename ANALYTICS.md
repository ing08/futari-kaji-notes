# アクセス計測の運用

## 確認用アクセス

- 確認開始：https://ing08.github.io/futari-kaji-notes/?analytics=off
- 除外解除：https://ing08.github.io/futari-kaji-notes/?analytics=on
- ブラウザごとに最初に確認開始URLを開く。30日間、サイト全体でGoogleタグを読み込まず送信を停止する。
- 上部の「計測から除外中」を確認してから検証する。別端末・別ブラウザ・プライベートウィンドウでは再設定する。
- URLから切替パラメータを取り除くので、共有時の誤った除外を避けられる。保存不可の場合はURLを保持し、そのページのみ除外する。
- 過去の確認アクセスを遡って消すものではない。除外中に開いた共有リンクも計測されない。

## 共有用リンク

外部へ共有するときだけ以下を使う。内部リンクやcanonicalにはUTMを付けない。確認用URLは共有しない。
GA4のトラフィック獲得で「セッションの参照元 / メディア」「セッションのキャンペーン」を確認する。
同一セッション中の複数リンククリックは、別の流入として集計されるとは限らない。

### 記事一覧

- [Discord](https://ing08.github.io/futari-kaji-notes/?utm_source=discord&utm_medium=social&utm_campaign=housework_journal)
- [LINE](https://ing08.github.io/futari-kaji-notes/?utm_source=line&utm_medium=social&utm_campaign=housework_journal)
- [X](https://ing08.github.io/futari-kaji-notes/?utm_source=x&utm_medium=social&utm_campaign=housework_journal)
- [メール](https://ing08.github.io/futari-kaji-notes/?utm_source=newsletter&utm_medium=email&utm_campaign=housework_journal)

### 家事分担アプリの選び方

- [Discord](https://ing08.github.io/futari-kaji-notes/articles/choosing-chore-apps/?utm_source=discord&utm_medium=social&utm_campaign=housework_journal)
- [LINE](https://ing08.github.io/futari-kaji-notes/articles/choosing-chore-apps/?utm_source=line&utm_medium=social&utm_campaign=housework_journal)
- [X](https://ing08.github.io/futari-kaji-notes/articles/choosing-chore-apps/?utm_source=x&utm_medium=social&utm_campaign=housework_journal)
- [メール](https://ing08.github.io/futari-kaji-notes/articles/choosing-chore-apps/?utm_source=newsletter&utm_medium=email&utm_campaign=housework_journal)

### 共働きの家事分担がおかしい？

- [Discord](https://ing08.github.io/futari-kaji-notes/articles/rebalancing-housework/?utm_source=discord&utm_medium=social&utm_campaign=housework_journal)
- [LINE](https://ing08.github.io/futari-kaji-notes/articles/rebalancing-housework/?utm_source=line&utm_medium=social&utm_campaign=housework_journal)
- [X](https://ing08.github.io/futari-kaji-notes/articles/rebalancing-housework/?utm_source=x&utm_medium=social&utm_campaign=housework_journal)
- [メール](https://ing08.github.io/futari-kaji-notes/articles/rebalancing-housework/?utm_source=newsletter&utm_medium=email&utm_campaign=housework_journal)

### ふたりで家事を始める方法

- [Discord](https://ing08.github.io/futari-kaji-notes/articles/starting-housework-together/?utm_source=discord&utm_medium=social&utm_campaign=housework_journal)
- [LINE](https://ing08.github.io/futari-kaji-notes/articles/starting-housework-together/?utm_source=line&utm_medium=social&utm_campaign=housework_journal)
- [X](https://ing08.github.io/futari-kaji-notes/articles/starting-housework-together/?utm_source=x&utm_medium=social&utm_campaign=housework_journal)
- [メール](https://ing08.github.io/futari-kaji-notes/articles/starting-housework-together/?utm_source=newsletter&utm_medium=email&utm_campaign=housework_journal)

## 追加記事の手順

- Googleタグの直書きを複製せず、assets/analytics-v1.jsをheadで同期読み込みする。
- 新しい記事の共有URLにも同じUTM規則を適用する。
- 国やDirectだけでは実読者か検証アクセスかを断定しない。

参考: https://developers.google.com/tag-platform/security/guides/privacy
参考: https://support.google.com/analytics/answer/10917952
