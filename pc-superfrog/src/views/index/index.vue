<template>
	<div>
		<button @click="login">点击请求</button>
	</div>
</template>

<script>
	import {
		login
	} from '../../api/common.js'

	export default {
		name: "index",
		data() {
			return {
				html: null
			}
		},
		methods: {
			async login() {


				let post_data = {
					name: "ds"
				}

				let data = await login(post_data);

				console.log(data)
			}
		}
	}
</script>

<style>
</style>
