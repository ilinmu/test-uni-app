<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ token }}</text>
		</view>
	</view>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
	import _ from 'lodash';
  
	export default {
    name: 'Login',
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
      this.queryLogin({
        username: 'test',
        password: 'test',
        code: 'test',
      })
		},
    computed: {
      ...mapState({
        // 使用方法见 https://vuex.vuejs.org/zh/guide/state.html
        // 将 `this.login` 映射为 `this.$store.login.token`
        token: (state) => state.login.token,
      }),
    },
		methods: {
      // 使用方法参照 https://vuex.vuejs.org/zh/guide/actions.html
      // 将 `this.queryLogin(payload)` 映射为 `this.$store.dispatch('login/queryLogin', payload)`
      ...mapActions({
        queryLogin: 'login/queryLogin',
      }),
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
