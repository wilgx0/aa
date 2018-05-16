<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class='newslist' v-show='newsListShow'>
			<mt-header fixed  title="新闻列表">
				<mt-button icon="back" slot='left' @click='hideNewsList'>返回</mt-button>
			</mt-header>
			<!--loadmore示例-->

			<div class="page-loadmore">
				<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
					<mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
						<ul class="page-loadmore-list newslist-item">
							<li v-for="item in newslist" class="page-loadmore-listitem"><a @click.prevent='showNewspage(item.n_id)'>{{ item.news_title }}</a></li>
						</ul>
		
						<div slot="bottom" class="mint-loadmore-bottom">
							<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
							<span v-show="bottomStatus === 'loading'" >
            					<mt-spinner type="snake" class='newslist-spinner'></mt-spinner>
     					 	</span>
						</div>
					</mt-loadmore>
				</div>
			</div>

			<newspage></newspage>
		</div>
	</transition>
</template>

<script>
	import { mapGetters } from "vuex"
	import 'animate.css/animate.css'
	import Newspage from './Newspage.vue'
	
	
	export default {
		created() {
			//loadmore示例
			this.$store.dispatch('getNewsList',this.page);
		},
		mounted() {
			//loadmore示例
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
		},
		data() {
			return {
				//loadmore示例
				page:1,
				allLoaded: false,
				bottomStatus: '',
				wrapperHeight: 0
			}
		},
		computed: {
			...mapGetters(["newsListShow","newslist",'newsLastpage']),
		},
		methods: {
			hideNewsList() {
				this.$store.dispatch("hideNewsList");
			},
			//loadmore示例
			handleBottomChange(status) {
				this.bottomStatus = status;
			},
			//loadmore示例
			loadBottom() {
				if(this.page >= this.newsLastpage){
					this.allLoaded = true;
				} else {
					this.$store.dispatch('getNewsList',++this.page);
				}
				this.$refs.loadmore.onBottomLoaded();
			},
			showNewspage(id){
				//console.log(id);
				this.$store.dispatch('showNewspage',id);
			},
		},
		components:{
			Newspage,
		}
	};
</script>

<style scoped>
	.newslist {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 666;
		overflow: auto;
	}
	/*loadmore示例*/
	
	@component-namespace page {
		@component loadmore {
			@descendent desc {
				text-align: center;
				color: #666;
				padding-bottom: 5px;
				&:last-of-type {
					border-bottom: solid 1px #eee;
				}
			}
			@descendent listitem {
				height: 50px;
				line-height: 50px;
				border-bottom: solid 1px #eee;
				text-align: center;
				&:first-child {
					border-top: solid 1px #eee;
				}
			}
			@descendent wrapper {
				overflow: scroll;
			}
			.mint-spinner {
				display: inline-block;
				vertical-align: middle;
			}
		}
	}
	
	@component mint-loadmore-bottom {
		span {
			display: inline-block;
			transition: .2s linear;
			vertical-align: middle;
			@when rotate {
				transform: rotate(180deg);
			}
		}
	}
	.page-loadmore {
		margin-top:40px;
	}
	.newslist-item > li{
		border:1px solid #eee;
	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	}
	.newslist-spinner{
		display: block;
    	padding-left: 45%;
	}
</style>