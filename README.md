# html-template

自分が学習用のWEBアプリを作る際の、ベースになるHTML

## ファイル説明

```cmd
html-template
├─ajaxResponse
│      base-table.json          ......base.htmlのAjaxによるテーブル表示向けデータ
│      top.json                 ......top.htmlのAjaxによるテーブル表示向けデータ
│
├─static
│  ├─css
│  │      common.css            ......共通部品のcss
│  │      login.css             ......login.html用のcss
│  │
│  └─js
│          base.js              ......base.html用のJavaScript
│          login.js             ......login.html用のJavaScript
│          myGridjsConfig.js    ......テーブル用ライブラリGrid.js向けの日本語表示用設定値
│          top.js               ......top.html用のJavaScript
│
└─template
        base.html               ......「UI部品基本設計」としてのHTML
        login.html              ......「ログイン」画面としてのHTML
        orderDetail.html        ......「案件詳細」画面としてのHTML
        top.html                ......「トップページ(案件一覧)」画面としてのHTML
```
