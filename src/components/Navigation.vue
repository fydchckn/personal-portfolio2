<template>
    <div class="bg-secondary">
        <div class="main-container p-[0.2rem] flex justify-between px-4 md:px-0">
            <div>
                <h4 class="text-prim-text font-h4">Kent</h4>
            </div>
            <div class="mobile-nav">
                <nav>
                    <ul class="flex justify-center items-center gap-5">
                        <li>Home Page</li>
                        <li>About Me</li>
                        <li>My Services</li>
                        <li>
                            <select name="" id="">
                                <option value="">More Links</option>
                                <option value="">we</option>
                                <option value="">ew</option>
                            </select>
                        </li>
                        <li>
                            <button class="animated-button">
                                <span>Join</span>
                                <span></span>
                            </button>
                        </li>
                        <li>
                            <button class="animated-button">
                                <span>Inquire</span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="flex items-center md:hidden text-prim-text">
                <div @click="btntoggle" class="fixed right-1 z-[9999999]">
                    <svg v-if="!togglemnav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-if="togglemnav" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    props: ['togglemnav'],
    methods: {
        btntoggle() {
            this.$emit('toggle-mobile')
        },
    },
};
</script>

<style scoped>
.mobile-nav {
    display: flex;
}

@media (max-width:775px) {
    .mobile-nav {
        display: none;
    }
}
</style>