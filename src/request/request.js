import axios from "axios";

// 配置项
const axiosOption = {
	baseURL: "http://localhost:5000/api",
	timeout: 5000,
};

// 创建一个单例
const instance = axios.create(axiosOption);

// 添加请求拦截器
instance.interceptors.request.use(
	function (req) {
		let token = localStorage.getItem("tokenKey");
		if (token) {
			req.headers = Object.assign({}, req.headers, { tokenKey: token });
		}
		//console.log(req);
		return req;
	},
	function (error) {
		// 对请求错误做些什么
		//console.log(error)
		return Promise.reject('请求错误');
	}
);

// 添加响应拦截器
instance.interceptors.response.use(
	function (response) {
		// 只需要 response 中的 data 数据
		console.log(response)
		return response.data
	},
	function (error) {
		// 对请求错误做些什么
		//console.log(error)
		return Promise.reject(error.response.data)
	}
);

export default instance;
