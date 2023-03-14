# classes-aogaku-ec-site
青学の授業情報や過去問ECサイト（架空）

#### ▶ <a href="https://www.youtube.com/watch?v=3d-I2WtdP38" target="_blank" rel="noopener noreferrer">デモ動画 URL</a>
#### ▶ <a href="https://classes-aogaku-ec-site.vercel.app/" target="_blank" rel="noopener noreferrer">デプロイ URL</a>


## 技術スタック
#### フロントエンド：React/TypeScript/Tailwind CSS
#### サーバー：Express/Firebase
#### その他：Stripe API　


## フロントエンド
<a href="https://github.com/Wata-Naoki/classes-aogaku-ec-site/tree/main/frontend#readme" target="_blank" rel="noopener noreferrer">Readmeはこちら</a>

## サーバーサイド
<a href="https://github.com/Wata-Naoki/classes-aogaku-ec-site/tree/main/server#readme" target="_blank" rel="noopener noreferrer">Readmeはこちら</a>


</br>

## 概要
#### [背景]
コロナ禍で上との繋がりが非常に作りづらかったため、授業に関する情報などを入手することが困難で非常に苦しんだという背景がありました。一方で、バイトをしている人は多かったというビジネスモデルも考え、このようなECサイトがあったらいいなという思いで開発しました。
#### [工夫した点]
商品をクリックするとカートに追加でき、ユーザーさんがまとめて購入できるようにしました。
#### [苦労した点]
リロードすると、カートの中身や検索結果が初期化されてしまうのを防止する処理が大変でした。
特に検索結果の際は、検索結果が初期化されないようにクエリーパラーメータを使い、またページネーションにおいてもクエリーパラメータを使用し実装しているので、同時処理するロジックが特に大変でした。
