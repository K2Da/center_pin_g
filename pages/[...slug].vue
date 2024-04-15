<script setup lang="ts">
const error = useError();
</script>
<template>
  <h1>ページが見つかりませんでした</h1>
  <p>
    おそらく、お探しのページは移転してしまいました。すいません、もっと気をつけていればよかったのですが……。
  </p>
  <ul class="list-disc ml-8">
    <li>プレイヤーを探していた場合、<a href="/players">プレイヤー一覧</a></li>
    <li>チームを探していた場合、<a href="/teams">チーム一覧</a></li>
    <li>大会を探していた場合、<a href="/tournaments">大会一覧</a></li>
  </ul>
  <p>
    をご覧ください。 それ以外の場合は、<a href="/">トップページ</a
    >に戻ってください。
  </p>
</template>
