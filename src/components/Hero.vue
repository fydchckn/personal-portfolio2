<template>
  <section
    class="bg-[url('/bg-hero.png')] bg-cover bg-center flex justify-center items-center text-center min-h-screen px-4">
    <div class="main-container text-prim-text w-full max-w-5xl" data-aos="fade-up">
      <div class="space-y-7" data-aos="fade">
        <h1 class="text-[40px] md:text-[56px]">
          Hello, I’m Kent – Creative Professional
        </h1>
        <p class="mx-auto text-base">
          Based in Lapu-Lapu, Philippines, I specialize in bringing ideas to life through innovative design and
          storytelling. Let's collaborate to create something extraordinary together.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <button class="animated-button">
            <span>Explore</span>
            <span></span>
          </button>
          <button class="animated-button">
            <span>Contact</span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
}
</script>

<style scoped></style>