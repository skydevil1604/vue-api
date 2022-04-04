<template>
  <div class="footer">
    <p>
      <strong>Author:</strong>
      {{ fullName }}
    </p>
    <p>
      <strong>GitHub:</strong>
      <a :href="gitHub">link to Github</a>
    </p>
  </div>
</template>
<script>
export default {
  data: () => ({
    fullName: "Valeriia Kozhevnikova",
    gitHub: "https://github.com/skydevil1604/",
  }),
};
</script>