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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>常在基督里</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose"><span><span><span><span><span><span lang="ZH-CN">本课教导我们住在基督里的重要性，因为离了耶稣</span><span lang="ZH-CN">基督</span><span lang="ZH-CN">，我们什么都不能做。惟有依靠祂，并住在祂里面，我们才能活出多结果子的生命。</span></span></span></span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇16:7-11</p>

<p class="back bible"><sup>7</sup>我必称颂那指教我的耶和华，我的心肠在夜间也警戒我。<sup>8</sup>我将耶和华常摆在我面前，因他在我右边，我便不至摇动。<sup>9</sup>因此，我的心欢喜，我的灵快乐，我的肉身也要安然居住。<sup>10</sup>因为你必不将我的灵魂撇在阴间，也不叫你的圣者见朽坏。<sup>11</sup>你必将生命的道路指示我。在你面前有满足的喜乐，在你右手中有永远的福乐。</p>

</div>

<ul class="back">
	<li class="back">现在让我们用&ldquo;行动&rdquo;（ACTS）向上帝感恩赞美和祷告。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路11:10</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>因为凡祈求的，就得着；寻找的，就寻见；叩门的，就给他开门。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">上帝不只爱我们，祂更要让我们效法祂儿子耶稣基督的模样，像祂一样经历天父，并让人从我们身上看见天父的样子（<span class="popup-link" @click = "popUp('pop2')"> 罗马书8:29</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>因为他预先所知道的人，就预先定下效法他儿子的模样，使他儿子在许多弟兄中做长子；</p>
	<!-- end bible --></div>
	好消息是&ldquo;变得像基督&rdquo;是上帝的工作，在腓立比书1:6应许我们：&ldquo;那在你们心里动了善工的，必成全这工&rdquo;。上帝会在你我生命中动工，使我们能像基督，愿我们因这应许大受激励。</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
</ul>

<p class="indent2">耶稣被钉十字架的前一晚，祂和亲近的十二门徒共进晚餐。祂告诉门徒自己将离去，但是祂会差圣灵保惠师来，与他们永远同在。祂说透过圣灵同在，住在他们里面，祂要与他们同在。今天的故事用葡萄树和枝子的比喻描绘出我们与耶稣应有的关系。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音15:1-11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音15:1-11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">1 </sup>&ldquo;我是真葡萄树，我父是栽培的人。<sup class="versenum">2&nbsp;</sup>凡属我不结果子的枝子，他就剪去；凡结果子的，他就修理干净，使枝子结果子更多。<sup class="versenum">3&nbsp;</sup>现在你们因我讲给你们的道，已经干净了。<sup class="versenum">4&nbsp;</sup>你们要常在我里面，我也常在你们里面。枝子若不常在葡萄树上，自己就不能结果子；你们若不常在我里面，也是这样。<sup class="versenum">5&nbsp;</sup>我是葡萄树，你们是枝子。常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能做什么。<sup class="versenum">6&nbsp;</sup>人若不常在我里面，就像枝子丢在外面枯干，人拾起来扔在火里烧了。<sup class="versenum">7&nbsp;</sup>你们若常在我里面，我的话也常在你们里面，凡你们所愿意的，祈求，就给你们成就。<sup class="versenum">8&nbsp;</sup>你们多结果子，我父就因此得荣耀，你们也就是我的门徒了。</p>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;我爱你们，正如父爱我一样，你们要常在我的爱里。<sup class="versenum">10&nbsp;</sup>你们若遵守我的命令，就常在我的爱里，正如我遵守了我父的命令，常在他的爱里。<sup class="versenum">11&nbsp;</sup>这些事我已经对你们说了，是要叫我的喜乐存在你们心里，并叫你们的喜乐可以满足。</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/107.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音15:1-11&nbsp;</button>
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

<p class="up">离了耶稣，我们就不能做什么。惟有倚靠祂，住在祂里面，我们才能有结果子的生命。当我们顺从祂的道路，让祂的生命涌流在我们里面，就能多结果子，荣耀上帝。换句话说，我们必须让基督的灵，也就是圣灵，藉着上帝所赐的信心，充满我们并引导我们的生命。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><p class="back">+ 经文背诵</p></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">约翰福音15:5</p>

<p class="forward bible">我是葡萄树，你们是枝子；常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能作什么。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">复习第三课<!-- begin linkInternal capacitor-->
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/cmn/multiply1/multiply103', '#1')">
    《与圣灵同行》 
</span>
<!-- end linkInternal capacitor-->
当中&ldquo;属灵呼吸&rdquo;的原则。</li>
	<li class="forward">操练对讲《被圣灵充满》小册子并熟悉它。
	<ul class="forward">
		<li class="forward">每人拿一本《被圣灵充满》小册子</li>
		<li class="forward">使用开场白打开话题：&ldquo;你好，我有一本小册子解释怎样活出丰盛的基督徒生活，我想与你分享&rdquo;。并与同伴分享小册子。</li>
		<li class="forward">10分钟后，对换角色，继续分享完整本小册子。</li>
	</ul>
	</li>
</ul>

<p class="forward">（读到祷告文的部分，如果对方愿意凭信心祷告来被圣灵充满，就带领他祷告。）</p>

</div>

<h2 class="forward">福音行动</h2>

<ul>
	<li style="text-align:justify"><span><span><span><span>想出2位你将与他们分享《被圣灵充满》小册子的主内弟兄姊妹（基督徒），并在《信徒动员表》写下他们的名字，本周与他们分享。</span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span>在你的灵修笔记本上写下，有哪两种生命的品格是你希望主耶稣帮助你&ldquo;结果子&rdquo;的，写下原因和你的行动步骤，下周与小组成员分享。</span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span>依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</span></span></span></span></li>
</ul>

<p class="indent2" style="text-align:justify">我在________________（时间/地点）将会__________________（对象/事情）。</p>

<ul>
	<li class="indent" style="text-align:justify"><span><span>花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</span></span></li>
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

<p class="forward">亲爱的天父，谢谢祢宝贵的话语应许我们，祢说我们若常在祢里面，祢的话也常在我们里面；凡我们所愿意的，祈求就给我们成就。我们多结果子，天父就因此得荣耀，我们也就是主耶稣的门徒了。感谢主耶稣爱我们，正如父神爱主耶稣一样，我们要常在主耶稣的爱里。因为离了祢，我们无法活出耶稣并结出生命的果子来荣耀天父的名，求主耶稣帮助我们。奉主的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->