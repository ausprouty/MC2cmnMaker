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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>与上帝说话</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课告诉我们，祷告就是和天父说话。祷告对我们属灵生命很重要，耶稣也亲自为我们做了祷告的榜样。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇100:1-5</p>

<p class="back bible"><sup>1</sup>你们当乐意事奉耶和华，当来向祂歌唱！普天下当向耶和华欢呼！<sup>2</sup>你们当乐意事奉耶和华，当来向他歌唱！<sup>3</sup>你们当晓得耶和华是　神。我们是他造的，也是属他的；我们是他的民，也是他草场的羊。<sup>4</sup>当称谢进入他的门，当赞美进入他的院；当感谢他，称颂他的名。<sup>5</sup>因为耶和华本为善，他的慈爱存到永远，他的信实直到万代！〔大卫的诗〕</p>

</div>

<ul class="back">
	<li class="back">现在让我们一起用诗歌来称谢赞美神，我们是祂的子民，神本为善，当受极大赞美。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路24:45</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">45&nbsp;</sup>于是耶稣开他们的心窍，使他们能明白圣经。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">耶稣走遍各城各乡时，祂看到人们的需要，就怜悯他们。祂对门徒说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主打发工人出去收他的庄稼。&rdquo;天父的心意是愿意所有人都认识并体验祂的爱。当门徒跟随耶稣并看到祂的一生与事奉，他们请求耶稣教导他们如何祷告，使他们能凡事讨神的喜悦并按神的心意来行事。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
</ul>

<p class="indent2">耶稣虽然忙于事工，但仍然花许多时间与天父说话。他的跟随者看见他祷告，也想学习如何向天父说话。今天我们将学习耶稣所教导他们的。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音11:1-13》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音11:1-13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">1 </sup>耶稣在一个地方祷告，祷告完了，有个门徒对他说：&ldquo;求主教导我们祷告，像<u class="person underline">约翰</u>教导他的门徒。&rdquo;<sup class="versenum">2&nbsp;</sup>耶稣说：&ldquo;你们祷告的时候，要说：&lsquo;我们在天上的父，愿人都尊你的名为圣，愿你的国降临，愿你的旨意行在地上，如同行在天上。<sup class="versenum">3&nbsp;</sup>我们日用的饮食，天天赐给我们。<sup class="versenum">4&nbsp;</sup>赦免我们的罪，因为我们也赦免凡亏欠我们的人。不叫我们遇见试探，救我们脱离凶恶。&rsquo;&rdquo;</p>

<p><sup class="versenum">5&nbsp;</sup>耶稣又说：&ldquo;你们中间谁有一个朋友半夜到他那里去，说：&lsquo;朋友，请借给我三个饼，<sup class="versenum">6&nbsp;</sup>因为我有一个朋友行路，来到我这里，我没有什么给他摆上。&rsquo;<sup class="versenum">7&nbsp;</sup>那人在里面回答说：&lsquo;不要搅扰我，门已经关闭，孩子们也同我在床上了，我不能起来给你。&rsquo;<sup class="versenum">8&nbsp;</sup>我告诉你们：虽不因他是朋友起来给他，但因他情词迫切地直求，就必起来照他所需用的给他。<sup class="versenum">9&nbsp;</sup>我又告诉你们：你们祈求，就给你们；寻找，就寻见；叩门，就给你们开门。<sup class="versenum">10&nbsp;</sup>因为凡祈求的，就得着；寻找的，就寻见；叩门的，就给他开门。<sup class="versenum">11&nbsp;</sup>你们中间做父亲的，谁有儿子求饼，反给他石头呢？求鱼，反拿蛇当鱼给他呢？<sup class="versenum">12&nbsp;</sup>求鸡蛋，反给他蝎子呢？<sup class="versenum">13&nbsp;</sup>你们虽然不好，尚且知道拿好东西给儿女，何况天父，岂不更将圣灵给求他的人吗？&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/106.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音11:1-13&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对耶稣有什么新的认识？</li>
	</ul>
	</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">祷告就是和天父说话。我们可以用以下四点总结耶稣的教导：</p>

<ul class="up">
	<li class="up">赞美祂，以祂为中心。</li>
	<li class="up">向祂祈求你一切需要，并承认你的罪。</li>
	<li class="up">顺服于祂的旨意并求祂的国度降临。</li>
	<li class="up">如此祷告，我们就有把握祂会垂听，并知道祂乐意给我们好东西。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">路加福音11:10</p>

<p class="forward bible">因为凡祈求的，就得着；寻找的，就寻见；叩门的，就给他开门。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">祷告是跟神交谈。每个基督徒都有特权跟神直接的交谈。如果我们想有活力充沛的基督徒生命，我们就必须学会与神交谈。透过祷告，我们可以支取神在耶稣基督里给我们的资源。</li>
</ul>

<p class="indent2">总结耶稣的教导，我们可以用&ldquo;行动&rdquo;（ACTS）来操练祷告：</p>

<ol class="indent2">
	<li class="forward">赞美Adoration</li>
	<li class="forward">认罪Confession</li>
	<li class="forward">感恩Thanksgiving</li>
	<li class="forward">祈求Supplication</li>
</ol>

<ul class="forward">
	<li class="forward">现在让我们花一些时间操练向神&ldquo;祷告&rdquo;。</li>
</ul>

<ol class="indent2">
	<li class="forward">赞美：用几分钟来敬拜和赞美神。历代志上 29:11-12，说：&ldquo;11耶和华啊，尊大、能力、荣耀、强胜、威严都是你的；凡天上地下的都是你的；国度也是你的；并且你为至高，为万有之首。12丰富尊荣都从你而来。你也治理万物。在你手里有大能大力，使人尊大强盛都出于你。&rdquo;&nbsp; 让我们按照经文所描写有关神的性情或属性，轮流开声向神发出我们对他的敬爱与赞美。</li>
	<li class="forward">认罪：用几分钟来祷告，祈求神指示你什么地方不讨祂喜悦，把它列在一张纸上， 然后承认这些罪，并支取<span class="popup-link" @click = "popUp('pop2')"> 约翰壹书1:9</span>
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。</p>
	<!-- end bible --></div>
	的应许，最后撕毁这张纸。</li>
	<li class="forward">感谢：要凡事谢恩（<span class="popup-link" @click = "popUp('pop3')"> 帖撒罗尼迦前书5:18</span>）。
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>凡事谢恩，因为这是神在基督耶稣里向你们所定的旨意。</p>
	<!-- end bible --></div>
	用几分钟感谢神为你做过的事情（你想感谢祂的事），以及你尚未感谢神的事情（可能是那些不愉快的事或任何的难处）。</li>
	<li class="forward">祈求：明确的代求(代别人)和祈求(为自己)。接下来用几分钟，明确列出祈求和代祷的需要，并开始祷告。</li>
</ol>

<ul class="forward">
	<li class="forward">每天有规律地祷告，把每天祈求的事项写在读经笔记本上。若神应允你的祷告，请把日期写上。</li>
</ul>

<table border="1" cellpadding="1" cellspacing="1" style="height:148px; width:553px">
	<tbody>
		<tr>
			<td style="text-align:center"><span lang="ZH-CN">日期</span></td>
			<td style="text-align:center"><span lang="ZH-CN">祈求事项</span></td>
			<td style="text-align:center"><span lang="ZH-CN">应允日期</span></td>
			<td style="text-align:center"><span lang="ZH-CN">神如何成就？</span></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>

<p class="forward">&nbsp;</p>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">你可以按以上的各方面，每天向神祷告，持之以恒，不但可养成习惯，更重要的是可以体验神和经历神，增进你与祂亲密的交通。</li>
	<li class="forward">在《信徒动员表》和《福音行动表》中写下2-3个需要关心的亲朋邻舍，为他们的需要代求，并主动关心他们。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

<ul class="forward">
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>福音祷告</h2>

<p>亲爱的天父，祢眷顾并知道我们一切的需要。主耶稣在世上的时候，非常注重祷告。祂透过祷告寻求与天父的同在和旨意。我们愿意效法主耶稣，时刻与天父亲近。愿我们常在基督里面，荣耀天父，明白祢的心意，向祢祷告。我们也愿意在真理上不断生根建造，不仅顾自己的事，也顾别人的事，为他人代求。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->