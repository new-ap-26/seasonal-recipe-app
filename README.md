# 旬ごはん

2人分を基本に、旬・栄養・薬膳と「作るたびに自分好みに育てる」機能をまとめた個人用PWAです。

## V0.1で実装済み

- ホーム / レシピ / 旬 / 薬膳 / マイ
- 主菜・副菜・作り置き等の分類と検索
- 2人分、g / mL / 大さじ / 小さじ表示
- お気に入り、わが家の定番
- 5段階評価、味タグ、自由メモ、調理履歴
- マイレシピ修正とオリジナル復元
- LocalStorage保存
- JSONバックアップ / 復元
- PWA
- GitHub Actions → GitHub Pages自動デプロイ

## 開発

```bash
npm install
npm run dev
```

## GitHub Pages

1. 新規Publicリポジトリにこのプロジェクトをpush
2. GitHub → Settings → Pages
3. Source を `GitHub Actions` に設定
4. `main` へのpushで自動デプロイ

`vite.config.ts` はGitHub Actions上のリポジトリ名から自動的にbase pathを設定します。

## データの扱い

- 公開レシピ本体: `src/data/recipes.ts`
- 個人データ（評価・メモ・お気に入り・修正）: ブラウザのLocalStorage
- 個人データはGitHubへ送信しません
- 機種変更対策としてマイ画面からJSONバックアップ可能

## 重要

現在のサンプルレシピ5件はUI・機能確認用です。`sourceStatus: 'draft'` のため、公開用の本採用レシピとして確定する前に、味付け・旬・栄養・薬膳情報の出典確認を行います。
