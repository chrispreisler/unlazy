<script setup lang="ts">
import { PlaygroundDivider, UnLazyImage } from '#components'
import { ref } from '#imports'
import '@unocss/reset/tailwind.css'

const blurhash = 'LKO2:N%2Tw=w]~RBVZRi};RPxuwH'
const thumbhash = '1QcSHQRnh493V4dIh4eXh1h4kJUI'
const logoUrl = new URL('../../../docs/public/logo.svg', import.meta.url).href

const shouldLoadImage = ref(false)

function loadImage() {
  shouldLoadImage.value = true
}

const exampleSources = [{ media: '(orientation: landscape)', srcSet: 'https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/960x540 960w, https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/1920x1080 1920w', width: '1920', height: '1080' }, { media: '(orientation: portrait)', srcSet: 'https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/540x960 540w, https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/1080x1920 1080w', width: '1080', height: '1920' }]
const exampleSrcset = 'https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/960x540 960w, https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/1920x1080 1920w'
</script>

<template>
  <Head>
    <Title>@unlazy/nuxt</Title>
    <Link rel="icon" :href="logoUrl" type="image/svg+xml" />
  </Head>

  <main class="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
    <div class="space-y-12">
      <div class="grid grid-cols-3 gap-6">
        <div class="flex flex-col space-y-2">
          <PlaygroundDivider>Image with media element</PlaygroundDivider>
          <UnLazyImage
            placeholder-src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            src="https://a.storyblok.com/f/261109/3840x2400/e671bbb7df/laudinella_02_16zu10_3840x2400px.jpg/m/1920x1080"
            :sources="exampleSources"
            width="1920"
            height="1080"
            class="opacity-0 transition-opacity duration-500 "
            auto-sizes
            @loaded="(image) => image.classList.remove('opacity-0')"
          />
          <p class="text-sm text-gray-500">
            Description
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <PlaygroundDivider>Lazyloaded image</PlaygroundDivider>
          <UnLazyImage
            placeholder-src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            :src-set="exampleSrcset"
            width="1920"
            height="1080"
          />
          <p class="text-sm text-gray-500">
            Description
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <PlaygroundDivider>Standard image tag</PlaygroundDivider>
          <img
            :srcset="exampleSrcset"
            width="1920"
            height="1080"
            loading="lazy"
          >
          <p class="text-sm text-gray-500">
            Description
          </p>
        </div>
      </div>
      <div class="space-y-12">
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <PlaygroundDivider><strong>SSR</strong>-decoded BlurHash</PlaygroundDivider>
            <UnLazyImage
              :blurhash="blurhash"
              src-set="image-320w.jpg 320w, image-640w.jpg 640w"
              width="640"
              height="320"
              style="aspect-ratio: 1/1;"
            />
            <p class="text-sm text-gray-500">
              The image above is inlined as a PNG data URI.
            </p>
          </div>
          <div class="space-y-2">
            <PlaygroundDivider><strong>Client-side</strong> decoded BlurHash</PlaygroundDivider>
            <UnLazyImage
              :ssr="false"
              :blurhash="blurhash"
              src-set="image-320w.jpg 320w, image-640w.jpg 640w"
              width="640"
              height="320"
              style="aspect-ratio: 1/1;"
            />
            <p class="text-sm text-gray-500">
              The client-side decoded BlurHash will infer the image dimensions from the <code>width</code> and <code>height</code> attributes.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <PlaygroundDivider><strong>SSR</strong>-decoded ThumbHash</PlaygroundDivider>
            <UnLazyImage
              :thumbhash="thumbhash"
              src="/images/sunrise-evan-wallace.jpg"
              width="480"
              height="640"
              style="aspect-ratio: 3/4;"
            />
            <p class="text-sm text-gray-500">
              The image above is inlined as a PNG data URI.
            </p>
          </div>

          <div class="space-y-2">
            <PlaygroundDivider><strong>Client-side</strong> decoded ThumbHash</PlaygroundDivider>
            <UnLazyImage
              :ssr="false"
              :thumbhash="thumbhash"
              src="/images/sunrise-evan-wallace.jpg"
              width="480"
              height="640"
              style="aspect-ratio: 3/4;"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <PlaygroundDivider>Lazy load on click</PlaygroundDivider>
            <UnLazyImage
              thumbhash="HBkSHYSIeHiPiHh8eJd4eTN0EEQG"
              :lazy-load="shouldLoadImage"
              src="/images/fall-evan-wallace.jpg"
              width="480"
              height="640"
              style="aspect-ratio: 3/2;"
              @click="loadImage"
            />
            <p class="text-sm text-gray-500">
              Lazy loading will only be triggered when the image is clicked.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
