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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>问奇妙的问题</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课强调祷告与关怀的重要性，主耶稣赐给我们祷告的权柄，叫我们借着祷告支取上帝丰盛的慈爱和怜悯；也借着祷告关怀行动，关怀并帮助有需要的人。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇33:1-5</p>

<p class="back bible"><sup>1</sup>义人哪，你们应当靠耶和华欢乐，正直人的赞美是合宜的。<sup>2</sup>你们应当弹琴称谢耶和华，用十弦瑟歌颂他。<sup>3</sup>应当向他唱新歌，弹得巧妙，声音洪亮。<sup>4</sup>因为耶和华的言语正直，凡他所作的，尽都诚实。<sup>5</sup>他喜爱仁义公平，遍地满了耶和华的慈爱。</p>

</div>

<ul class="back">
	<li class="back">现在让我们借着诗歌一起歌颂赞美我们的神！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约15:5</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>我是葡萄树，你们是枝子。常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能做什么。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">在马可福音中，耶稣一开始就告诉人要&ldquo;悔改&rdquo;。意思是改变我们的思考方式，因为上帝的道路不同于我们的道路。其中要改变的是我们看待自己的方式。我们需要重新理解自己与上帝的关系，并祂在我们生命中能成就的事。接着，耶稣告诉人&ldquo;来跟从我！我要叫你们得人如得鱼一样。&rdquo;耶稣呼召每个门徒活出这&ldquo;跟从祂&rdquo;和&ldquo;得人如得鱼&rdquo;的双重呼召。我们奉献委身于耶稣，并转变我们的日常生活和人际关系。让我们彼此鼓励，持续不断地悔改、跟随主和得人。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
</ul>

<p class="indent2">耶稣受死的几个星期前，祂和跟随者在耶利哥城。当他们要离开上耶路撒冷时，路途尚有24公里之远。有一个瞎子大声呼叫耶稣的名字，要得祂的注意。今天的故事会告诉我们接下来发生的事。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音18:35-43》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音18:35-43</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">35&nbsp;</sup>耶稣将近耶利哥的时候，有一个瞎子坐在路旁讨饭。<sup class="versenum">36&nbsp;</sup>听见许多人经过，就问是什么事。<sup class="versenum">37&nbsp;</sup>他们告诉他，是拿撒勒人耶稣经过。<sup class="versenum">38&nbsp;</sup>他就呼叫说：&ldquo;<u class="person underline">大卫</u>的子孙耶稣啊，可怜我吧！&rdquo;<sup class="versenum">39&nbsp;</sup>在前头走的人就责备他，不许他作声，他却越发喊叫说：&ldquo;<u class="person underline">大卫</u>的子孙，可怜我吧！&rdquo;<sup class="versenum">40&nbsp;</sup>耶稣站住，吩咐把他领过来。到了跟前，就问他说：<sup class="versenum">41&nbsp;</sup>&ldquo;你要我为你做什么？&rdquo;他说：&ldquo;主啊，我要能看见！&rdquo;<sup class="versenum">42&nbsp;</sup>耶稣说：&ldquo;你可以看见！你的信救了你了。&rdquo;<sup class="versenum">43&nbsp;</sup>瞎子立刻看见了，就跟随耶稣，一路归荣耀于神。众人看见这事，也赞美神。</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/108.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音18:35-43&nbsp;</button>
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
<div id="Summary2" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">&nbsp;</p>

<ul>
	<li class="nobreak-final-final">耶稣对世人有极大的怜悯之心！祂问那位瞎子一个奇妙的问题：&ldquo;你要我为你做什么？&rdquo;然后满足了这瞎子的需要。在<span class="popup-link" @click = "popUp('pop2')"> 约翰福音14:12-13</span>，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>我实实在在地告诉你们：我所做的事，信我的人也要做，并且要做比这更大的事，因为我往父那里去。<sup class="versenum">13&nbsp;</sup>你们奉我的名无论求什么，我必成就，叫父因儿子得荣耀。</p>
	<!-- end bible --></div>
	耶稣说：&ldquo;我所做的事，信我的人也要做，并且要做比这更大的事，因为我往父那里去。你们奉我的名无论求甚么，我必成就，叫父因儿子得荣耀。&rdquo;作为耶稣的跟随者，我们依靠圣灵的能力，主动怜悯他人，像耶稣一样问&ldquo;要我为你做什么？&rdquo;这个奇妙的问题（Amazing Question），来满足他人实际的需要。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">路加福音18:40-41</p>

<p class="forward bible"><sup>40</sup>耶稣站住，吩咐把他领过来。到了跟前，就问他说：<sup>41</sup>&ldquo;你要我为你作什么？&rdquo; 他说：&ldquo;主阿，我要能看见。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">下载耶稣生平&ldquo;JesusFilm&rdquo;的App，并把&ldquo;医治巴底买&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 路18:35-43</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>耶稣将近耶利哥的时候，有一个瞎子坐在路旁讨饭。<sup class="versenum">36&nbsp;</sup>听见许多人经过，就问是什么事。<sup class="versenum">37&nbsp;</sup>他们告诉他，是拿撒勒人耶稣经过。<sup class="versenum">38&nbsp;</sup>他就呼叫说：&ldquo;<u class="person underline">大卫</u>的子孙耶稣啊，可怜我吧！&rdquo;<sup class="versenum">39&nbsp;</sup>在前头走的人就责备他，不许他作声，他却越发喊叫说：&ldquo;<u class="person underline">大卫</u>的子孙，可怜我吧！&rdquo;<sup class="versenum">40&nbsp;</sup>耶稣站住，吩咐把他领过来。到了跟前，就问他说：<sup class="versenum">41&nbsp;</sup>&ldquo;你要我为你做什么？&rdquo;他说：&ldquo;主啊，我要能看见！&rdquo;<sup class="versenum">42&nbsp;</sup>耶稣说：&ldquo;你可以看见！你的信救了你了。&rdquo;<sup class="versenum">43&nbsp;</sup>瞎子立刻看见了，就跟随耶稣，一路归荣耀于神。众人看见这事，也赞美神。</p>
	<!-- end bible --></div>
	的视频存到自己的手机上。</li>
	<li class="forward">组长示范：如何分享&ldquo;奇妙的问题&rdquo;。
	<ul class="forward">
		<li class="forward">示范步骤如下：</li>
	</ul>
	</li>
</ul>

<p class="indent3">1. 一个开场白</p>

<p class="indent3">2. 分享故事与提出&ldquo;奇妙的问题&rdquo;</p>

<p class="indent3">3. 与对方一起为需求祷告</p>

<p class="indent3">4. 请他想出可能因这个故事受益的2-3人</p>

<p class="indent3">5. 询问：&ldquo;我可以做什么&rdquo;来满足他的需要，以表达关心</p>

<ul class="forward">
	<li class="forward">接下来，你与一位组员按照上述示范的步骤练习&ldquo;奇妙的问题&rdquo;，10分钟后互换角色练习&ldquo;奇妙的问题&rdquo;。</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">从你《信徒动员表》和《福音行动表》选2-4个人，这周借着&ldquo;奇妙的问题&rdquo;表达对他们的代祷与关怀。</li>
	<li class="forward">依照你今天所学习到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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

<p>怜悯施恩我们的主，我们感谢祢，祢完全知晓我们心中的需要，并能带给我们真正的满足和喜乐。求祢也使用我们的生命，为身边的人来代祷，向他们提问&ldquo;奇妙的问题&rdquo;，并以实际的行动来表达关心和满足他们的需要，把他们完全带到天父的面前，使他们可以亲自体验祢丰盛的慈爱和赦免。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->