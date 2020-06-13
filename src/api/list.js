import axios from 'axios'
// import qs from 'qs'

const appkey = 'b1551b99dea19f9911cb1377a7f57703'

// 头条
export function getTopList() {
  return axios.post(`/api?type=top&key=${appkey}`).then(res => {
    return Promise.resolve(res.data)
  })
}

// 科技
export function getTechnologyList() {
  return axios.post(`/api?type=keji&key=${appkey}`).then(res => {
    return Promise.resolve(res.data)
  })
}

// 财经
export function getFinanceList() {
  return axios.post(`/api?type=caijing&key=${appkey}`).then(res => {
    return Promise.resolve(res.data)
  })
}

// 文章详情
// export function getDetail(id) {
//   return axios
//     .post(
//       '/portal/tnewsinfo/find',
//       qs.stringify({
//         id: id
//       })
//     )
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }
