/*
* 请求方式封装方式
* @author lilin
* @date 2020/12/22
**/
import config from '@/config'
const service = {}

// 请求头设置
const headers = {
	'Content-Type': 'application/json;charset=UTF-8'
}

/**
 * GET请求方式封装方式
 * @method get
 */
service.get = function(url, data){
	return new Promise((resolve, reject) => {
		uniRequest(url, 'GET', data, resolve, reject)
	})
}

/**
 * POST请求方式封装方式
 * @method get
 */
service.post = function(url, data){
	return new Promise((resolve, reject) => {
		uniRequest(url, 'POST', data, resolve, reject)
	})
}

/**
 * 全路径接口请求方式封装方式
 * @method get
 */
service.fullRequest = function(url, method, data){
	return new Promise((resolve, reject) => {
		fullUrlRequest(url, method, data, resolve, reject)
	})
}


/**
 * uni.request的请求
 * @param {string} url 请求地址
 * @param {string} method 方法
 * @param {string} data 参数
 * @param {function} resolve 成功
 * @param {function} reject 失败
 */
function uniRequest(url, method, data, resolve, reject){
	uni.request({
		url: config.BASE_API + url,
		method,
		data: data,
		dataType: 'json',
		header: headers,
		success: (response) => {
			let res = response.data
			if(res.code == 200){
				resolve(res)
			}else{
				reject(res)
			}
		},
		fail: (error) => {
			// 可以根据code值进行处理
			reject(error)
		}	
	})
}

/**
 * uni.request的请求
 * @param {string} fullUrl 完整的请求地址
 * @param {string} method 方法
 * @param {string} data 参数
 * @param {function} resolve 成功
 * @param {function} reject 失败
 */
function fullUrlRequest(fullUrl, method, data, resolve, reject){
	uni.request({
		url: fullUrl,
		method,
		data: data,
		dataType: 'json',
		header: headers,
		success: (response) => {
			let res = response.data
			if(res.code == 200){
				resolve(res)
			}else{
				reject(res)
			}
		},
		fail: (error) => {
			// 可以根据code值进行处理
			reject(error)
		}	
	})
}

export default service



