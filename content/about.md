# About
Pokémon UNITE大会結果を収集しているサイトです。2024年4月より、大会日程の記録や、大会に関する情報のメモも行っています。

| ページ | 内容 |
|---|---|
| Topic | 大会・イベントに関するメモのうち、日程以外の情報を更新した場合に表示 |
| Cal | 大会・イベントに関するメモから、日程を時間順に並べて表示 |
| Tourney | 開催済み、チーム勝敗登録済みの大会一覧 |
| Player | 大会に参加したプレイヤーの情報を、プレイヤー名をキーにして集計した一覧 |
| Team | 大会に参加したチームの情報を、チーム名をキーにして集計した一覧 |

大会、プレイヤー、チームのデータは基本的に各大会で使用されたトーナメントサイトから、json、GraphQLで取得したデータをそのまま使用していますが、一部、整合性を取るためなどに修正して使用しているケースがあります。

## 連絡先
プレイヤー名を変更したので統一したい、SNSのアカウントが間違っている、大会情報が足りない、誤っている等ありましたら、XのメンションかDMでお気軽にお知らせください。DMはフォローしなくても送れるようになってると思います。

- [CenterPing@X](https://twitter.com/CenterPing)

以下のフォームから連絡いただくこともできます。内容は、「〇〇と〇〇は同じプレイヤー」など、戦績を統合したトレイナー名を複数書いてください。

対応する場合でも次の大会結果登録の際にまとめて行うことが多く、即時には変更されませんのでしばらくお待ちください。

(2024/04/22追記) JCG、start.ggのアカウントを追跡するようにした結果、従来、手動で行っていたプレイヤー別名の登録は、ほぼ不要になりました。特に連絡いただかなくても、今後は自動で統合されるケースが多くなるはずです。

:contact-form 

## 収集対象大会
基本的に、日本の公式大会はすべて、その他の大会は参加人数が多いものを収集対象としたいと思ってます。

2024シーズンから、海外の公式大会についても、データの登録を開始しています。過去のものについては、遡って登録可能であれば、登録する予定です。

## プレイヤー名
原則、大会に参加した名前が同じだったら同じプレイヤーであるとして集計しています。

また、以下のケースでは、プレイヤー名以外に、登録時に使用したアカウントから、名前の変更が追跡可能であるため、自動で同じプレイヤーとして扱っています。

- 2023年以降の公式大会でJCGのサイトが使用されている場合
- 海外公式大会で start.gg が使用されている場合

プレイヤー名は、後述するratingの値に応じて、名前の色を変えています。 「<span class="t1" >上位1%</span>」, 「<span class="t2">3%</span>」, 「<span class="t3">9%</span>」, 「<span class="t4">上記に該当しない</span>」 です。

手動で別名を登録している場合もあります。

## チーム名について
チーム名は、表記ゆれと思われるものや、ほぼ同じメンバーで別の名前になっているものについては同一のチームとみなし、一番最近使われた名前を正式名称として扱っています。

チーム一覧での表示は、優勝回数、top4回数、勝利数の順で優先して並べています。

## ratingについて
プレイヤーのリストを表示する際、勝利数順だと試合数の多い総当り大会の影響が大きくなりすぎるため、[イロレーティング]("https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%AD%E3%83%AC%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0")で個人のratingを付けています。初期値1,500、係数は400です。

各メンバーが、相手チームの平均レートのプレイヤーと戦ったものとしてレートを変動させています。味方のレートは考慮していません。

BO3などの場合、勝敗の順序が不明なため、勝者側の敗戦試合 -> 勝者側の勝利試合、の順で計算しています。

スコアが0-0の場合、棄権などで試合が行われなかったものと推測し、レートを変動させていません。その大会における、すべての試合が0-0となっているチームは不参加と見なし、記録を削除しています。このため、最終順位に抜けていたり、スイスドローにおける勝敗数カウントが、公式トーナメントサイトとずれている可能性があります。

ユーザーを名寄せしたり、過去の大会を改めて登録した場合、過去にさかのぼって当時のレートが変動します。

## rating対象外大会について
以下のような大会は、rating計算対象外としています。
- 世界大会等、通常rating計算対象となっていない、かつ、強さが通常の未ratingプレイヤーとは大きく異なるプレイヤーが参加している大会
- リリース一年目におけるドラフトピック等、メンバ確定後に通常のゲームとは異なるルールが適用されている大会