<script lang="ts">
  let count = 0;
  $: doubled = count * 2;

  function increment() {
    count += 1;
  }

  import Instance from "./Instance.svelte";
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
<p>{count} double is {doubled}</p>
<Instance />
