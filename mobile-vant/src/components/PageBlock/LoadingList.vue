<template>
  <van-pull-refresh v-model="refreshing" @refresh="reload" class="win-height">
    <van-empty description="这里啥也没有~" v-if="empty"/>
    <template v-else>
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoadList"
      >
        <slot name="list" :list.sync="list"/>
      </van-list>
    </template>
  </van-pull-refresh>
</template>

<script>
  export default {
    name: "loading-list",
    props: {
      url: {
        type: String,
        required: true
      },
      query: {
        type: Object,
        default: () => {
          return {}
        }
      },
      size: {
        type: Number,
        default: 20
      }
    },
    watch: {
      query() {
        this.reload()
      }
    },
    data() {
      return {
        // 页码
        page: 1,
        // 列表数据
        list: [],
        // 加载状态
        loading: false,
        finished: false,
        refreshing: false,
        empty: false
      }
    },
    methods: {
      reload() {
        this.page = 1
        this.finished = false
        this.refreshing = false
        this.list = []
        this.onLoadList()
      },
      // 加载列表
      onLoadList() {
        let params = Object.assign(this.query, {
          page: this.page,
          size: this.size
        })
        this.loading = true
        this.$http.post(this.url, params).then(res => {
          if (this.refreshing) {
            this.refreshing = false
          }
          if (res.code === 200) {
            if (res.result.count === 0) {
              this.empty = true
              this.finished = true
            } else {
              this.empty = false
              this.list = this.list.concat(res.result.list)
              this.loading = false
              let pageCount = Math.ceil(res.result.count / this.size)
              if (pageCount <= this.page) {
                this.finished = true
              }
              this.page += 1
            }
          } else {
            this.empty = true
            this.finished = true
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
