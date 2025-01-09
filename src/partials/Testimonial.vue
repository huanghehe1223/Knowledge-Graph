<script setup>
const props = defineProps(['testimonial'])

const channelIcon = (channel) => {
  switch (channel) {
    case 'Twitter':
      return (
        `<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="none">
          <path fill-rule="evenodd"
            d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z" />
        </svg>`
      )
    case 'Google':
      return (
        `<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
          <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z"></path>
        </svg>`
      )
    case 'YouTube':
      return (
        `<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="17" height="13" fill="none">
          <path d="M16.044 3.416c-.178-1.303-.762-2.213-2.158-2.438C11.693.54 8.294.48 8.294.48s-3.4-.059-5.606.303C1.284.958.568 1.846.446 3.143.223 4.44.19 6.34.19 6.34s-.033 1.9.144 3.203c.178 1.303.762 2.214 2.158 2.438 2.193.438 5.592.498 5.592.498s3.4.059 5.606-.303c1.405-.275 2.02-1.065 2.242-2.36.223-1.297.256-3.197.256-3.197s.033-1.9-.144-3.203ZM6.137 9.444l.105-5.999 4.946 3.087-5.051 2.912Z"></path>
        </svg>`
      )
    default: ''
  }
}
</script>

<template>
  <article
    class="relative flex flex-col rounded-2xl h-full p-5 shadow-lg md:odd:-rotate-1 md:even:rotate-1 bg-white/70 shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
    <header class="flex items-center gap-3 mb-4">
      <img class="shrink-0 rounded-full" :src="props.testimonial.img" width="44" height="44"
        :alt="props.testimonial.name" />
      <div>
        <div class="font-bold">{{ props.testimonial.name }}</div>
        <div>
          <a class="text-sm font-medium text-gray-500/80 hover:text-gray-500 transition" href="#0">{{ props.testimonial.username }}</a>
        </div>
      </div>
    </header>
    <div v-if="props.testimonial.rating" class="inline-flex mb-3">
      <span class="sr-only">Rating is 5 out of 5</span>
      <div class="relative">
        <svg class="fill-gray-200" xmlns="http://www.w3.org/2000/svg" width="114" height="18">
          <path
            d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
        </svg>
        <div class="absolute inset-0 overflow-hidden" style="width:100%">
          <svg class="fill-amber-400" xmlns="http://www.w3.org/2000/svg" width="114" height="18">
            <path
              d="m105 .44 2.782 5.636 6.218.903-4.5 4.386 1.062 6.195L105 14.635l-5.562 2.925 1.062-6.195L96 6.98l6.218-.903L105 .44ZM81 .44l2.782 5.636L90 6.979l-4.5 4.386 1.062 6.195L81 14.635l-5.562 2.925 1.062-6.195L72 6.98l6.218-.903L81 .44ZM57 .44l2.782 5.636L66 6.979l-4.5 4.386 1.062 6.195L57 14.635l-5.562 2.925 1.062-6.195L48 6.98l6.218-.903L57 .44ZM33 .44l2.782 5.636L42 6.979l-4.5 4.386 1.062 6.195L33 14.635l-5.562 2.925 1.062-6.195L24 6.98l6.218-.903L33 .44ZM9 .44l2.782 5.636L18 6.979l-4.5 4.386 1.062 6.195L9 14.635 3.438 17.56 4.5 11.365 0 6.98l6.218-.903L9 .44Z" />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="props.testimonial.videoThumb" class="grow">
      <p class="font-semibold mb-4">
        <slot />
      </p>
      <a :href="props.testimonial.videoUrl">   
        <img class="w-full" :src="props.testimonial.videoThumb" width="312" height="180" alt="View on YouTuobe" />
      </a>
    </div>
    <div v-else class="grow text-sm text-gray-700">
      <slot />
    </div>
    <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
      <div v-html="channelIcon(props.testimonial.channel)"></div>
      <div class="text-xs">{{ props.testimonial.date }}</div>
    </footer>
  </article>
</template>
