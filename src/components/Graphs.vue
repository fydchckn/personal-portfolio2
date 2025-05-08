<template>
<section class="bg-color-bg">
    <div class="main-container py-[112px]" data-aos="fade-up">
    <div>
        <div>
            <canvas canvas id="myChart"></canvas>
        </div>
    </div>
    </div>
</section>  
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    mounted() {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Vue JS', 'Tailwind CSS', 'PHP', 'Vanilla JS', 'Java'],
      datasets: [{
        label: 'Percentage of Skills',
        data: [19, 12, 5, 3, 2],
        borderWidth: 1,
        font: {
            size: 48,       // Font size in pixels
            weight: 'bold'  // Can be 'normal', 'bold', 400, 700, etc.
          },
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'My Technical Stacks',
          color: 'white',
          font: {
            size: 36,       // Font size in pixels
            weight: 'bold'  // Can be 'normal', 'bold', 400, 700, etc.
          },
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}
</script>

<style>

</style>