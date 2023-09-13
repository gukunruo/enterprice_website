import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const productStore = defineStore(
  'product',
  () => {
    let dianGanSensors = reactive([
      '@/static/image/DianGan/test.jpg',
      '@/static/image/DianGan/test.jpg',
      '@/static/image/DianGan/test.jpg',
    ])
    let dianRongSensors = reactive([
      '@/static/image/DianRong/test.jpg',
      '@/static/image/DianRong/test.jpg',
      '@/static/image/DianRong/test.jpg',
    ])
    let guangDianSensors = reactive([
      '@/static/image/GuangDian/test.jpg',
      '@/static/image/GuangDian/test.jpg',
      '@/static/image/GuangDian/test.jpg',
    ])
    let testSensor = reactive(['@/static/image/test/kaiGuan.jpg'])
    return {
      dianGanSensors,
      dianRongSensors,
      guangDianSensors,
      testSensor,
    }
  },
  // TODO: 持久化
  {
    // persist: true, 网页端的配置 默认使用localStorage
    // 调整为兼容多端的API[不能单写一个true] 浏览器持久化存储数据的配置
    persist: {
      storage: {
        // 调用setter和getter
        setItem(key, value) {
          // 调用uni[wx]的持久化存储的api
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
