<template>
	<div>
		<div>
			<input type="text" v-model="email" name="" placeholder="邮箱"/>
			<button @click="getCode">获取验证码</button>
		</div>
		<br/>
		<div>
			<input type="text" v-model="code" name="" placeholder="验证" />
			<button @click="verification">验证</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	
	import {
		login,
		get_code,
		verification
	} from '../../api/common.js'

	export default {
		name: "index",
		data() {
			return {
				email: null,
				code:null,
			}
		},
		methods: {
			async login() {


				let post_data = {
					name: "ds"
				}

				let data = await login(post_data);

				console.log(data)
			},
			async getCode(){
				let post_data = {
					email:this.email
				}
				
				let data = await get_code(post_data);
				
				console.log(data)
			},
			async verification(){
				let post_data = {
					email:this.email,
					code:this.code
				}
				
				let data = await verification(post_data);
				
				console.log(data)
			}
		}
	}
</script>

<style>
</style>
