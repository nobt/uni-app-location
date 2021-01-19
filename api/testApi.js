/*
* 请求接口
* @author lilin
* @date 2020/12/22
**/

import request from '../utils/request'

/** 
 * 测试接口
 */
export function test(data){
	return request.post('/login', data)
}
