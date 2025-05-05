<template>
  <section class="bg-color-bg py-[112px]">
  <div class="main-container w-full" data-aos="fade-up">
    <div class="text-prim-text space-y-1 mb-[80px] flex flex-col justify-center items-center text-center">
      <p>Innovative</p>
      <h2 class="text-[36px] md:text-[48px]">Your Creative Partner</h2>
      <p>Transforming ideas into stunning visuals and experiences.</p>
    </div>

    <div class="flex flex-col gap-[32px] md:flex-row md:justify-center px-4">

      <div class="w-full max-w-[640px] text-prim-text">

        <!-- Card 1 -->
        <div class="flex flex-col overflow-hidden rounded-md mb-[24px] transition-transform duration-300 ease-in-out hover:scale-[1.03]" >
          <div class="h-auto space-y-6 p-[48px] bg-tertiary text-left">
            <p>Design</p>
            <h3 class="font-medium text-[32px] md:text-[40px]">Front-End Development</h3>
            <p>
              Building beautiful, responsive user interfaces using modern tools and frameworks.
            </p>
            <div class="flex flex-wrap gap-5 justify-start">
              <button class="animated-button"><span>Explore</span><span></span></button>
              <button class="animated-button"><span>View</span><span></span></button>
            </div>
          </div>
          <div class="h-[360px]">
            <img src="../assets/frontend.jpg" alt="" class="w-full h-full object-cover rounded-b-md">
          </div>
        </div>

        <!-- Cards 2 and 3 -->
        <div class="flex flex-col gap-[24px] md:flex-row md:h-[340px] md:mt-[32px]">

          <div class="p-[24px] space-y-5 bg-tertiary rounded-md flex-1 transition-transform duration-300 ease-in-out hover:scale-[1.03]" >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">...</svg>
            <h5 class="text-[20px] md:text-[24px]">UI Animations with v-motion</h5>
            <p>Enhancing UX through smooth, engaging animations.</p>
            <button class="animated-button"><span>Showcase</span><span></span></button>
          </div>

          <div class="p-[24px] space-y-5 bg-tertiary rounded-md flex-1 transition-transform duration-300 ease-in-out hover:scale-[1.03]" >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">...</svg>
            <h5 class="text-[20px] md:text-[24px]">Database Management</h5>
            <p>Efficiently structuring and managing data using MySQL.</p>
            <button class="animated-button"><span>Manage</span><span></span></button>
          </div>
        </div>
      </div>

      <div class="w-full max-w-[640px] text-prim-text flex flex-col gap-[32px]">

        <!-- Card 4 -->
        <div class="flex flex-col md:flex-row h-auto bg-tertiary rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]" >
          <div class="md:w-1/2">
            <img src="../assets/backend.png"
              class="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none">
          </div>
          <div class="md:w-1/2 p-[24px] space-y-5">
            <h5 class="font-medium text-[20px] md:text-[24px]">Back-End Development</h5>
            <p>Creating secure, dynamic websites and handling databases with clean logic.</p>
            <div class="flex gap-5">
              <button class="animated-button"><span>Discover</span><span></span></button>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="bg-tertiary rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]" >
          <div class="h-auto p-[24px] md:p-[48px] space-y-6">
            <h3 class="font-medium text-[20px] md:text-[24px]">Problem Solving & Debugging</h3>
            <p>Analyzing and fixing issues with a logical, solution-focused approach.</p>
            <div class="flex flex-wrap gap-5">
              <button class="animated-button"><span>Fix</span><span></span></button>
              <button class="animated-button"><span>Improve</span><span></span></button>
            </div>
          </div>
          <div class="h-[360px]">
            <img src="../assets/debug1.jpg" class="w-full h-full object-cover"> 
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: "Innovative",
}
</script>

<style></style>