
wx.config({
	debug: <?php if(isset($debug)) echo $debug; else echo 'false';?>, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	appId: '<?php echo $appid?>', // 必填，公众号的唯一标识
	timestamp: <?php echo $timestamp?>, // 必填，生成签名的时间戳
	nonceStr: "<?php echo $noncestr?>", // 必填，生成签名的随机串
	signature: "<?php echo $sign?>",// 必填，签名，见附录1
	jsApiList: ['chooseImage', 'previewImage', 'uploadImage','onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

wx.onMenuShareTimeline({  
	title: "品匠心《神舞幻想》邀请函", // 分享标题
	link: "http://server.lighthorn.net/fantasy/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	imgUrl: "https://chuxinhui.vip/img/mainPic.jpg", // 分享图标
	success: function() {
		ons.notification.alert("感谢您的分享");
	},

	cancel: function() {
		alert('failed');
	}

});

wx.onMenuShareAppMessage({
	title: "品匠心《神舞幻想》邀请函", // 分享标题
	desc: "品匠心《神舞幻想》邀请函", // 分享描述
	link: "http://server.lighthorn.net/fantasy/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	imgUrl: "https://chuxinhui.vip/img/mainPic.jpg", // 分享图标
	success: function() {
		ons.notification.alert("感谢您的分享");
	},
	cancel: function() {
		alert('failed');
	}

});
