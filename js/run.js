var host=document.location.hostname;
var hostRules={
	"blog.csdn.net":
		[
		 "//div[@class='c_ad_block']"
		,"//iframe[contains(@src,'pos.baidu.com')]//ancestor::div[contains(@class,'csdn-tracking-statistics')]"
		,"//iframe[contains(@src,'pos.baidu.com')]//ancestor::div[@class='aside-box']"
		,"//ins[@class='adsbygoogle']"
		,"//iframe[contains(@src,'adaccount.csdn.net')]//ancestor::div[contains(@class,'recommend-item-box')]"
		,"//iframe[contains(@src,'pos.baidu.com')]//ancestor::div[contains(@class,'recommend-item-box')]"
		,"//div[@class='mediav_ad']//ancestor::div[contains(@class,'recommend-item-box')]"
		,"//div[@id='dmp_ad_58']"
		],
	"jingyan.baidu.com":
		[
			"//*[span='广告']//ancestor::div[@id='bottom-ads-container']"
			,"//div[@id='aside-ads-container']"
		],
	"segmentfault.com":
		[
		"//div[contains(@class,'ad-should-be-fixed')]"
		]

}
var pubRules=[
	"//ins[contains(@class,'adsbygoogle')]"
	
]

setInterval(function(){
	var xpaths=(host in hostRules)?hostRules[host]:[];
	xpaths=xpaths.concat(pubRules);
	for (var x in xpaths){
		xpath=xpaths[x];
		var result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
		while (node = result.iterateNext()) {
	        node.remove();
	    }
	}
},5000);
