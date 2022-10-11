<script lang="ts">
  import { onMount } from 'svelte'
  import { Chart, LineSeries } from 'svelte-lightweight-charts'
  import { socket } from '$lib/stores'
  // socket.subscribe('')

  let current = 1
  const data = Array(20)
    .fill(null)
    .map(() => ({
      time: '2022-10-' + ++current,
      value: Math.random() * 1000
    }))
  // const data = [
  //   { time: , value: 80.01 },
  //   { time: '2019-04-12', value: 96.63 },
  //   { time: '2019-04-13', value: 76.64 },
  //   { time: '2019-04-14', value: 81.89 },
  //   { time: '2019-04-15', value: 74.43 },
  //   { time: '2019-04-16', value: 80.01 },
  //   { time: '2019-04-17', value: 96.63 },
  //   { time: '2019-04-18', value: 76.64 },
  //   { time: '2019-04-19', value: 81.89 },
  //   { time: '2019-04-20', value: 704.43 }
  // ]
  let index = 1
  onMount(() => {
    const id = setInterval(() => console.log(++index), 200)
    return () => clearInterval(id)
  })
</script>

<Chart width={800} height={600}>
  <LineSeries data={data.slice(0, index)} reactive={true} />
</Chart>

<style lang="scss"></style>
