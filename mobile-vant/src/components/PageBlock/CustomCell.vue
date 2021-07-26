<template>
  <div :class="{border: border}" class="cell-box white-block mb0" @click="$emit('click')">
    <div class="cell-title fs-two" style="min-width: 20%">
      <slot name="title"/>
    </div>
    <div class="cell-content fs-two">
      <slot name="value"/>
    </div>
    <van-icon name="arrow" class="arrow fs-two" v-if="arrow"/>
  </div>
</template>

<script>
  export default {
    name: "CustomCell",
    props: {
      arrow: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-box {
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: flex-end;

    .cell-title {
      margin-right: auto;
      line-height: 38px;
    }

    .cell-content {
      padding-left: 20px;
      text-align: right;

    }

    i.arrow {
      margin: 3px 0 0 10px;
    }

    .cell-content, i.arrow {
      color: #969799;
    }
  }

  .cell-box.border {
    border-bottom: 1px solid #f5f5f5;
  }
</style>
