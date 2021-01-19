/*
* 配置封装
* @author lilin
* @date 2020/12/22
**/
const config = {}
console.log(process.env)
// uEnvDev
if (process.env.NODE_ENV === 'development') {
    // TODO
	config.BASE_API = ''
}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
    config.BASE_API = ''
}

export default config

