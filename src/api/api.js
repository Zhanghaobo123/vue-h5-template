import axios from 'axios'
import qs from 'qs'
// axios
// import request from '@/utils/request'
//home api

// axios
const api = {
  login: '/api/pangolin/login', //用户登录接口
  register: '/api/pangolin/register', //用户注册
  code: '/api/pangolin/send/code', //发送验证码
  info: '/api/pangolin/info' ,//获取详情
  
}
import request from '@/utils/request'
// 获取用户信息 post 方法

// 用户登录 post 方法
export function postLogin(data) {
  return request({
    url: api.login,
    method: 'post',
    data: qs.stringify(data),
    hideloading: true
  })
}
// 用户注册 post 方法
export function postRegister(data) {
  return request({
    url: api.register,
    method: 'post',
    data: qs.stringify(data),
    hideloading: true
  })
}

// 发送验证码 get 方法
export function postCode(data) {
  return request({
    url: api.code,
    method: 'post',
    data: qs.stringify(data),
    hideloading: true
  })
}

//获取用户详情
export function getInfo(data) {
  return request({
    url: api.info,
    method: 'post',
    data: qs.stringify(data),
    hideloading: true
  })
}
