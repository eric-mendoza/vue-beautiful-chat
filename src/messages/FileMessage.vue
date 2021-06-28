<template>
  <div class="sc-message--file" :style="messageColors">
    <div class="sc-message--file-icon">
      <img
          v-if="didLoad"
          :src="data.file.url"
          class="sc-image"
          alt="Image sent by user"
          @error="pictureLoadingError"
      />
      <div v-else class="not-found--container">
        <img
            :src="placeholderImage"
            class="sc-image sc-image-not-found"
            alt="Image didn't load"
        />
        <div class="centered not-found-text">
          Image not found
        </div>
      </div>
    </div>
    <div class="sc-message--file-name" :style="messageColors">
      <a :href="data.file.url ? data.file.url : '#'" target="_blank">{{ data.file.name || '' }}</a>
    </div>
    <div class="sc-message--file-text" :style="messageColors">
      <span class="sc-message--file-text-content" v-html="data.text"></span>
      <p v-if="data.meta || message.timestamp" class="sc-message--meta" :style="messageColors">
        {{ data.meta }} {{ message.timestamp }}
      </p>
    </div>
  </div>
</template>

<script>
import PlaceholderImage from './../assets/placeholder.jpg';
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    message: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    },
    placeholderImage: {
      default: PlaceholderImage
    }
  },
  data() {
    return {
      didLoad: true,
    }
  },
  methods: {
    pictureLoadingError() {
      this.didLoad = false;
    }
  }
}
</script>

<style scoped>
.sc-message--file {
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  /* white-space: pre-wrap; */
  -webkit-font-smoothing: subpixel-antialiased;
  max-width: 50%;
}

.sc-message--content.sent .sc-message--file {
  word-wrap: break-word;
}

.sc-message--file-icon {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 0px;
}

.sc-image {
  max-width: 100%;
  min-width: 100%;
}

.sc-message--file-text {
  padding: 6px 7px 3px 9px;
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
  -webkit-font-smoothing: subpixel-antialiased;
}

.sc-message--file-text-content {
  padding-right: 65px;
  margin: 0 0;
}

.sc-message--file-name {
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  font-size: x-small;
  text-align: center;
}

.sc-message--file-name a {
  text-decoration: none;
  color: #ece7e7;
}

.sc-message--file-name a:hover {
  color: white;
}

.sc-message--content.sent .sc-message--file-text {
  color: white;
  background-color: #4e8cff;
  word-wrap: break-word;
}

.sc-message--content.received .sc-message--file {
  color: #263238;
  background-color: #f4f7f9;
  margin-right: 40px;
}

.sc-message--content.received .sc-message--file-name {
  color: #000;
}

.sc-message--content.received .sc-message--file a {
  color: rgba(43, 40, 40, 0.7);
}

.sc-message--content.received .sc-message--file a:hover {
  color: #0c0c0c;
}

.sc-image-not-found {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(4px);
  transform: scale(1.1)
}

.not-found--container {
  overflow: hidden;
  position: relative;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.not-found-text {
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 200;
  font-style: italic;
}
</style>
