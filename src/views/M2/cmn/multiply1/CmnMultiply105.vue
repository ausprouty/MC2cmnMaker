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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>明白神的话</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课目的让我们看到研读查考圣经，是帮助我们更认识神、明白神的心意，并遵行祂的话语而行。主耶稣要我们明白圣经上的话并祂的教导。祂告诉我们，基督徒属灵生命的成长，乃靠上帝的话语（圣经）。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p class="back">+ 敬拜赞美</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇119:9-12</p>

<p class="back bible"><sup>9</sup>少年人用甚么洁净他的行为呢？是要遵行你的话。<sup>10</sup>我一心寻求了你，求你不要叫我偏离你的命令。<sup>11</sup>我将你的话藏在心里，免得我得罪你。<sup>12</sup>耶和华啊，你是应当称颂的！求你将你的律例教训我。&rdquo;</p>

</div>

<ul class="back">
	<li class="back">现在让我们用祷告或一首诗歌来开声赞美我们的神，求神借着祂的话语更新和洁净我们，为祂而活。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop11')"> 使徒行传8:37</span>）
	<div class="popup invisible" id="pop11"><!-- begin bible -->腓利说：&ldquo;你若是一心相信，就可以。&rdquo;他回答说：&ldquo;我信耶稣基督是神的儿子。&rdquo;<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">上帝在基督里曾赐给我们各样的属灵福气，使我们得以进入祂的家中，称为祂的儿女。 &ldquo;你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。这圣灵是我们得基业的凭据&rdquo;。（<span class="popup-link" @click = "popUp('pop7')"> 以弗所书1:13-14</span>）

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。<sup class="versenum">14&nbsp;</sup>这圣灵是我们得基业的凭据，直等到神之民被赎，使他的荣耀得着称赞。</p>
	<!-- end bible --></div>
	多奇妙的礼物！这是上帝给我们这些信祂儿子耶稣基督之人的应许。愿我们将神的话藏在心里，免得我们得罪祂！</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
</ul>

<p class="indent2">耶稣复活后，四十天之久多次向门徒显现。有一次，门徒在屋里聚集时，耶稣向他们显现并解释圣经的重要性。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音24:36-49》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音24:36-49</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">36&nbsp;</sup>正说这话的时候，耶稣亲自站在他们当中，说：&ldquo;愿你们平安！&rdquo;<sup class="versenum">37&nbsp;</sup>他们却惊慌害怕，以为所看见的是魂。<sup class="versenum">38&nbsp;</sup>耶稣说：&ldquo;你们为什么愁烦？为什么心里起疑念呢？<sup class="versenum">39&nbsp;</sup>你们看我的手、我的脚，就知道实在是我了。摸我看看！魂无骨无肉，你们看，我是有的。&rdquo;<sup class="versenum">40&nbsp;</sup>说了这话，就把手和脚给他们看。<sup class="versenum">41&nbsp;</sup>他们正喜得不敢信，并且稀奇，耶稣就说：&ldquo;你们这里有什么吃的没有？&rdquo;<sup class="versenum">42&nbsp;</sup>他们便给他一片烧鱼，<sup class="versenum">43&nbsp;</sup>他接过来，在他们面前吃了。</p>

<p><sup class="versenum">44&nbsp;</sup>耶稣对他们说：&ldquo;这就是我从前与你们同在之时所告诉你们的话说：<u class="person underline">摩西</u>的律法、先知的书和诗篇上所记的，凡指着我的话都必须应验。&rdquo;<sup class="versenum">45&nbsp;</sup>于是耶稣开他们的心窍，使他们能明白圣经。<sup class="versenum">46&nbsp;</sup>又对他们说：&ldquo;照经上所写的，基督必受害，第三日从死里复活，<sup class="versenum">47&nbsp;</sup>并且人要奉他的名传悔改、赦罪的道，从耶路撒冷起直传到万邦。<sup class="versenum">48&nbsp;</sup>你们就是这些事的见证。<sup class="versenum">49&nbsp;</sup>我要将我父所应许的降在你们身上，你们要在城里等候，直到你们领受从上头来的能力。&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/105.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音24:36-49&nbsp;</button>
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

<p class="up">耶稣要我们明白圣经上的话，以及经上关于祂的教导。耶稣的一生应验圣经中神的应许。他要我们将所知道的一切传给其他人，并教导他们认识神。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">路加福音24:45</p>

<p class="forward bible">于是耶稣开他们的心窍，使他们能明白圣经。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">阅读提摩太后书3:16-17；罗马书10:17；希伯来书 4:12，找出关于&ldquo;圣经&rdquo;的真理，并填在表格内。</li>
</ul>

<p class="indent2"><span class="popup-link" @click = "popUp('pop10')"> 提摩太后书 3:16-17</span></p>

<div class="popup invisible" id="pop10"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup>圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的，<sup class="versenum">17&nbsp;</sup>叫属神的人得以完全，预备行各样的善事。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

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


<p class="indent2"><span class="popup-link" @click = "popUp('pop4')"> 罗马书 10:17</span></p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">17&nbsp;</sup>可见信道是从听道来的，听道是从基督的话来的。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent2"><span class="popup-link" @click = "popUp('pop9')"> 希伯来书 4:12</span></p>

<div class="popup invisible" id="pop9"><!-- begin bible -->
<p><sup class="versenum">12&nbsp;</sup>神的道是活泼的，是有功效的，比一切两刃的剑更快，甚至魂与灵、骨节与骨髓，都能刺入、剖开，连心中的思念和主意都能辨明；</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note4Text')"
        id="note4Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<ul class="forward">
	<li class="forward">当你阅读圣经时，祈求圣灵指教你明白：</li>
</ul>

<p class="indent2">1. （观察）这段经文在讲什么？</p>

<p class="indent2">2. （解释）作者写这段经文的目的是什么？</p>

<p class="indent2">3. （应用）我可以如何应用在生活中？</p>

<ul class="forward">
	<li class="forward">读经示范</li>
</ul>

<p class="indent2">下面的例子是用以上三个步骤来查考彼得前书5:7</p>

<p class="indent2">&nbsp;</p>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<td>经文</td>
			<td colspan="2">你们要将一切的忧虑卸给 神，因为他顾念你们（彼前5:7</td>
		</tr>
		<tr>
			<td rowspan="5">观察</td>
			<td>卸是什么意思？</td>
			<td>卸的意思是交出去。</td>
		</tr>
		<tr>
			<td>顾念是什么意思？</td>
			<td>神顾念表示神知道、在乎、顾惜我们。</td>
		</tr>
		<tr>
			<td>一切的忧虑有哪些？</td>
			<td>可能是难题或挂心的事。</td>
		</tr>
		<tr>
			<td>我们可以把忧虑卸给谁？</td>
			<td>我们可以安心卸给神。</td>
		</tr>
		<tr>
			<td>为什么我需要卸下我的忧虑？</td>
			<td>因祂顾念我们。</td>
		</tr>
		<tr>
			<td>解释</td>
			<td colspan="2">要把我们的难题或挂心的事交出去给神，因为神知道、在乎和顾惜我们。</td>
		</tr>
		<tr>
			<td>应用</td>
			<td colspan="2">
			<p class="forward">我不必为我的任何困扰来忧虑，特别是现在的 。</p>

			<p class="forward">我可以祷告并信靠神帮助我，因祂顾念我。</p>
			</td>
		</tr>
	</tbody>
</table>

<ul class="forward">
	<li class="forward">读经操练</li>
	<li class="nobreak-final-final"><span class="popup-link" @click = "popUp('pop6')"> 约翰福音15:10-12</span>，
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>你们若遵守我的命令，就常在我的爱里，正如我遵守了我父的命令，常在他的爱里。<sup class="versenum">11&nbsp;</sup>这些事我已经对你们说了，是要叫我的喜乐存在你们心里，并叫你们的喜乐可以满足。<sup class="versenum">12&nbsp;</sup>你们要彼此相爱，像我爱你们一样，这就是我的命令。</p>
	<!-- end bible --></div>
	照着上面的例子，练习使用这三个步骤，学习明白神要对你说的话。你可以用下面这个表。现在就花10分钟的时间来查考这段经文。完成后互相分享。</li>
</ul>

<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<td>经文</td>
			<td><sup>10</sup>你们若遵守我的命令，就常在我的爱里；正如我遵守了我父的命令，常在他的爱里。<sup>11</sup>这些事我已经对你们说了，是要叫我的喜乐存在你们心里，并叫你们的喜乐可以满足。<sup>12</sup>你们要彼此相爱，像我爱你们一样，这就是我的命令。</td>
		</tr>
		<tr>
			<td>观察</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note5Text')"
        id="note5Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
		<tr>
			<td>解释</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note6Text')"
        id="note6Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
		<tr>
			<td>应用</td>
			<td>
			<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note7Text')"
        id="note7Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->

			</td>
		</tr>
	</tbody>
</table>

<p class="forward">&nbsp;</p>

<ul class="forward">
	<li class="forward">组长可以赠送每位组员一本读经（灵修）笔记本，以记录每天读经心得和祷告。</li>
	<li class="forward">你可以立志在神面前，每天至少阅读一章圣经（建议从路加福音开始）。</li>
</ul>

</div>

<h2 class="forward">&nbsp;</h2>

<ul class="forward">
</ul>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">设定每天读经的时间段、地点，并于组内分享。</li>
</ul>

<p class="indent2">我立志每天在_____________（时间）________________（地点）阅读圣经。</p>

<ul class="forward">
	<li class="forward">学习每天灵修时，写灵修笔记（就是写下你从神话语的领受，反思、感恩和祷告的内容）</li>
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
        @keyup="this.addNote('note8Text')"
        id="note8Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2>福音祷告</h2>

<p>亲爱的天父，感谢祢赐下祢宝贵的话语&mdash;&mdash;圣经。正如诗人说的：少年人用什么洁净他的行为呢？是要遵行祢的话！&nbsp;天父啊，我们愿意一心寻求祢，求祢不要叫我们偏离祢的命令。我们要将祢的话藏在心里，免得我们得罪祢。祈求圣灵保惠师指教我们明白一切真理，使我们有能力遵行祢的话，凡事荣耀祢的名而行。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->