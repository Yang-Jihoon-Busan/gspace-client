import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import env from '../constants/env';
import qs from 'qs';
import { Platform } from 'react-native';

const API = Axios.create({
	baseURL: env.baseURL + '/api',
	timeout: 5000,
});

// request interceptor
API.interceptors.request.use(async function (config) {
	const token = await AsyncStorage.getItem('token');
	
	if (config.method === 'post' || config.method === 'put') {
		// console.log(typeof(config.data));		
		if (!(config.data instanceof FormData) && typeof(config.data) !== 'string') {
			config.headers = { 
				authorization: token,
				'Content-Type': 'application/x-www-form-urlencoded',
				'apikey': env.apiKey,
				'os': Platform.OS,
				'app_version': env.version * 10,
			}
			for(let prop in config.data) {
				if (config.data[prop] === true) config.data[prop] = 1;
				else if (config.data[prop] === false) config.data[prop] = 0;
				else if (config.data[prop] == null) config.data[prop] = '';     // php 에서 문자열 'null' 을 받으므로
			}

			config.data = qs.stringify(config.data);
		}
		else {
			config.headers = { 
				authorization: token,
				'Content-Type': 'application/json',
				'apikey': env.apiKey,
				'os': Platform.OS,
				'app_version': env.version * 10,
			}
		}		
	}
	else {
		config.headers = { 
			authorization: token,
			'apikey': env.apiKey,
			'os': Platform.OS,
			'app_version': env.version * 10,
		}
	}

	console.log('API Request:', config.url, config.data);

	return config;
});
 

// response interceptor
API.interceptors.response.use(function (response) {
	switch(response.data.result) {
		case 'success':
			console.log('API Response:', response);
			return response.data.data;
		case 'fail':
			console.log('Fail: ', response);
			const error = new Error(response.data.data);
			error.code = response.data.code;
			throw error;
		case 'null':
			console.log('need parameters: ', response);
			const message = `${response.data.data[0]} 정보가 필요합니다.`;
			throw new Error(message);
		default:
			console.log('unknwon err: ', response);
			throw new Error('unknown err with http status code 200.'); // http error handler 에서 처리할 수 있도록 영어로
	}
}, function (error) {
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log(error.request);
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message);
	}

	return Promise.reject(error);
});

export default API;













