<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>12.3.</h1></div>
                        <div class="chapter_title ltr"><h1>筹备清单及聚会主持模板</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <h2 class="forward">设备需求</h2>

<p class="indent">举办一场家庭福音聚会，主办人需要有一台平版电视&mdash;&mdash;能支持SD卡或USB接口以播放视频；一台笔计本电脑&mdash;&mdash;能用HDMI接头连接到电视。如果没有合用的电视，可以借一台投影机。</p>

<h2 class="forward">聚会流程与安排范例：（1至1.5小时。）</h2>

<table border="1" cellpadding="1" cellspacing="1" style="width:500px">
	<tbody>
		<tr>
			<td>时间</td>
			<td>分钟</td>
			<td>节目</td>
			<td>负责人</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>10</td>
			<td>欢迎（彼此介绍）&amp;破冰游戏</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>5</td>
			<td>唱诗歌</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>15</td>
			<td>播放属灵意义的视频</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>15</td>
			<td>播放《耶稣生平》的片段</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>10</td>
			<td>个人生命的见证</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>15</td>
			<td>
			<p class="forward">&nbsp;分享福音与呼召</p>

			<p class="forward">（使用四件事流沙或《耶稣生平》的结尾）</p>
			</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>5</td>
			<td>总结与填写回应表</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>15</td>
			<td>点心与交流时间</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>

<p class="forward">聚会筹备检查表</p>

<p class="indent">[&nbsp; ] 确认日期、时间、场地和主办人</p>

<p class="indent">[&nbsp; ] 决定要使用什么设备播放视频</p>

<p class="indent">[&nbsp; ] 列出被邀请人的名单，并邀请人</p>

<p class="indent">[&nbsp; ] 确认主持人、见证分享人与影音负责人</p>

<p class="indent">[&nbsp; ] 确认所需要的视频并下载</p>

<p class="indent">[&nbsp; ] 确认所使要的材料（若要使用福音小册子）</p>

<p class="indent">[&nbsp; ] 印制回应表</p>

<p class="indent">[&nbsp; ] 测试设备</p>

<p class="indent">[&nbsp; ] 确认《天国基础：被耶稣呼召》的日期、时间、场地与小组长</p>

<h2 class="forward">聚会主持模板</h2>

<p class="indent">&ldquo;我很荣幸能跟大家一起参加这个聚会，谢谢你们的莅临！</p>

<p class="indent">我想大家都同意，我们都面对着人生的很多挑战，这也是这次聚会的原因。我们相信你们对视频的回应，能对别人有所帮助，这些视频都只有几分钟。</p>

<p class="indent">每部视频播放完后，我们都有有机会在小组里分享：</p>

<p class="indent">视频中哪一个部分让你印象深刻？（请参考下一页&ldquo;播放视频&rdquo;内容）</p>

<p class="forward">&hellip;&hellip;</p>

<p class="indent">谢谢大家刚才在看完两个视频后，在小组里有美好的讨论，相信大家一定获益不少吧。接下来的环节，我邀请了 （见证分享人），他用几分钟时间，针对主题作一些回应，并分享他个人生命的故事。让我们一起来欢迎&nbsp;<u> &nbsp; &nbsp; &nbsp; &nbsp; </u>分享。</p>

<p class="forward">&hellip;&hellip;</p>

<p class="indent">非常谢谢<u>xxx</u>分享他生命的故事，以及我教会的xxx（牧师/弟兄/姐妹）告诉我们可以怎样认识耶稣。耶稣是神给我们人类最好的礼物，你若问我，我最期待分享给大家的，我想就是耶稣基督。因为耶稣，我们才得与神和好，领受生命真正的意义和丰盛。若你们以后对基督信仰有任何兴趣或疑问，可以让我们知道。我们随时愿意与您分享。</p>

<p class="indent">时间过得很快，转眼今天聚会也快接近尾声了。我这里有个回应表，我想了解大家对今天活动的一些想法、鼓励或者是建议。</p>

<p class="indent">现在我发下回应表，请你可以自由勾选，并填写你个人的资料，方便联系。谢谢你。</p>

<p class="forward">&hellip;&hellip;</p>

<p class="indent">非常谢谢大家今天抽出宝贵的时间，来到我的家中。愿上帝祝福大家。</p>

<p class="indent">我已经为大家预备一些点心，欢迎您留下一起享用。&rdquo;</p>

<h2 class="forward">播放视频</h2>

<p class="indent">&ldquo;看完这个视频，确实让我们有很多的反思和感受！我们希望所有人都参与讨论，谁想要第一个回答？让你印象深刻的是什么（或你最喜欢影片的哪部分）？为什么？&rdquo;</p>

<p class="indent">（确定大家明白所问的问题，直到有人回答，建议新朋友都有机会参与其中。当有人回答时，要记得鼓励他们，同时你也可以用笔作简要记录。）</p>

<p class="indent">&ldquo;听到你们的回应真的很鼓励我。因为&hellip;&hellip;（肯定他们的回应与简单归纳视频的内容）。现在，让我们接着看下一部影片吧。&rdquo;</p>

<p class="indent">（播放《耶稣传》片段或《我的最后一天》，并用同样的方式讨论问题）</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->