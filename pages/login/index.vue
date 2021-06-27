<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import _ from 'lodash';
  
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// const arr1 = [1,2,3];
			// const arr2 = _.map(arr1, (item) => item + 1);
			// console.warn('arr2', arr2);
      this.queryApi();
		},
		methods: {
      queryApi() {
        console.warn('进入 queryApi');
        this.$store.dispatch('login/queryLogin', {
          username: 'test',
          password: 'test',
          code: 'test',
        });
      },
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
