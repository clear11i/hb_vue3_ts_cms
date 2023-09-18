// export const BASE_URL = 'http://123.207.32.32:5000'
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)
// let BASE_URL = ''
// if (import.meta.env.PROD) {
//   BASE_URL = 'http://123.207.32.32:5000'
// } else {
//   BASE_URL = 'http://123.207.32.32:8000'
// }

const BASE_URL = import.meta.env.VITE_BASE_URL

export const TIME_OUT = 10000
export { BASE_URL }
