<template>
  <div class="svg-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 512 512"
      aria-hidden="true">
        <use :xlink:href = "'#' + name"  :fill="color"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svgIcon',
  props: {
    name: {
      type: String
    },
    size: {
      type: [Number, String],
      default: 14
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
};
</script>
