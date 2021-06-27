import {
  targetUrl,
} from '@/config/constants';

export const get = (url, data, header = {}) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token');
		if (token) {
			uni.request({
				url: targetUrl + url,
				data,
				method: 'GET',
				dataType: 'json'
			}).then((response) => {
				setTimeout(() => {
					uni.hideLoading();
				}, 200);
				let [error, res] = response;
				if (res.data.code == 1) {
					resolve(res.data);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					});
				}
			}).catch(error => {
				reject(error)
			});
		} else {
			uni.reLaunch({
				url: '../login/index'
			})
		}
	})
}

export const post = (url, data, header = {}) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token')
		if (token) {
			uni.request({
				url: targetUrl + url,
				data,
				method: 'POST',
				dataType: 'json',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
			}).then((response) => {
				setTimeout(function() {
					uni.hideLoading();
				}, 200);
				let [error, res] = response;
				if (res.data.code == 1) {
					resolve(res.data);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					});
				}
			}).catch(error => {
				reject(error)
			});
		} else {
			uni.reLaunch({
				url: '../login/login'
			})
		}
	})
}

export const upload = (url, data, header = {}) => {
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token')
		if (token) {
			uni.uploadFile({
				url: targetUrl + url,
				filePath: data,
				formData: {
					token: token,
				},
				name: 'file',
				header: {
					"Content-Type": "multipart/form-data"
				},
			}).then((response) => {
				setTimeout(function() {
					uni.hideLoading();
				}, 200);
				let [error, res] = response;
				const parseData = JSON.parse(res.data);
				if (parseData.code == 1) {
					resolve(parseData);
				} else {
					uni.showToast({
						title: parseData.msg,
						icon: 'none',
						duration: 2000
					});
				}
			}).catch(error => {
				reject(error)
			});
		} else {
			uni.reLaunch({
				url: '../login/login'
			})
		}
	})
}
