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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>儿童耶稣</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太2:10-11</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>他们看见那星，就大大地欢喜。<sup class="versenum">11&nbsp;</sup>进了房子，看见小孩子和他母亲<u class="person underline">马利亚</u>，就俯伏拜那小孩子，揭开宝盒，拿黄金、乳香、没药为礼物献给他。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>神的爱子，道成肉身的耶稣基督，为拯救世人，降世为人，然而客店里竟然没有接待他的地方，只好用布包起来，放在马槽里。祂本有神的形像，反倒虚己成为人的样式，就自己卑微，以至于死，且死在十字架上。神的爱就在此向世人显明了，让我们敞开心扉邀请我们的君王耶稣基督在我们心中作主掌王权。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣不但照预言为女子所生，且生在律法之下。摩西的律法规定，妇人生男孩，四十天才得洁净，满了四十天，耶稣的母亲马利亚和约瑟才可带耶稣去耶路撒冷，按着律法规定，将头生的献给主（<span class="popup-link" @click = "popUp('pop10')"> 参出 13:2</span>）。 </span></span></span>
	<div class="popup invisible" id="pop10"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>
	<p><span><span><span lang="ZH-CN"><sup class="versenum">2&nbsp;</sup>&ldquo;以色列中凡头生的，无论是人是牲畜，都是我的，要分别为圣归我。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN">耶稣被献给神，满足律法的要求，为要把律法之下的人救赎出来，叫我们信祂的人也得着儿子的名分（<span class="popup-link" @click = "popUp('pop11')"> 参加4:4-5</span>）。 </span></span></span>

	<div class="popup invisible" id="pop11"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">4&nbsp;</sup>及至时候满足，神就差遣他的儿子，为女子所生，且生在律法以下，<sup class="versenum">5&nbsp;</sup>要把律法以下的人赎出来，叫我们得着儿子的名分。 </span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">阅读或观看《</span></span></span> 马太福音2:19-23;&nbsp;路加福音 2:39-52<span><span><span lang="ZH-CN">》两遍。</span></span></span></p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音2:19-23</button><div class="collapsed" id ="Text0">

<p><sup>19</sup>希律死了以后，有主的使者在埃及向约瑟梦中显现，说：<sup>20</sup>&ldquo;起来！带着小孩子和他母亲往以色列地去，因为要害小孩子性命的人已经死了。&rdquo;<sup>21</sup>约瑟就起来，把小孩子和他母亲带到以色列地去，<sup>22</sup>只因听见亚基老接着他父亲希律作了犹太王，就怕往那里去，又在梦中被主指示，便往加利利境内去了。<sup>23</sup>到了一座城，名叫拿撒勒，就住在那里。这是要应验先知所说，他将称为拿撒勒人的话了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/204.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音2:19-23&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 路加福音 2:39-52</button><div class="collapsed" id ="Text1">

<p><sup>39</sup>约瑟和马利亚照主的律法办完了一切的事，就回加利利，到自己的城拿撒勒去了。<sup>40</sup>孩子渐渐长大，强健起来，充满智慧，又有　神的恩在他身上。</p>

<p><sup>41</sup>每年到逾越节，他父母就上耶路撒冷去。<sup>42</sup>当他十二岁的时候，他们按着节期的规矩上去。<sup>43</sup>守满了节期，他们回去，孩童耶稣仍旧在耶路撒冷。他的父母并不知道，<sup>44</sup>以为他在同行的人中间，走了一天的路程，就在亲族和熟识的人中找他，<sup>45</sup>既找不着，就回耶路撒冷去找他。<sup>46</sup>过了三天，就遇见他在殿里，坐在教师中间，一面听，一面问。<sup>47</sup>凡听见他的，都希奇他的聪明和他的应对。<sup>48</sup>他父母看见就很希奇。他母亲对他说：&ldquo;我儿，为什么向我们这样行呢？看哪，你父亲和我伤心来找你！&rdquo;<sup>49</sup> 耶稣说：&ldquo;为什么找我呢？岂不知我应当以我父的事为念吗？（注：或作&ldquo;岂不知我应当在我父的家里吗？&rdquo;）&rdquo;<sup>50</sup>他所说的这话，他们不明白。<sup>51</sup>他就同他们下去，回到拿撒勒，并且顺从他们。他母亲把这一切的事都存在心里。<sup>52</sup>耶稣的智慧和身量（注：或作：&ldquo;年纪&rdquo;），并　神和人喜爱他的心，都一齐增长。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/204-1.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 2:41-52&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">每一年耶稣全家会上耶路撒冷朝圣，和亲戚朋友一起守逾越节。敬虔的马利亚和约瑟，按着律法，当孩童耶稣满了12岁时，就带祂一同上耶路撒冷过逾越节。节期共有七天，除了献祭诵经和许多宗教活动节目之外，也是亲友和族人难得的相聚机会。耶稣12岁那年是特别的一年(<span class="popup-link" @click = "popUp('pop12')"> 路2:40</span>)，

	<div class="popup invisible" id="pop12"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>孩子渐渐长大，强健起来，充满智慧，又有神的恩在他身上。</p>
	<!-- end bible --></div>
	因为祂开始与当时的宗教领袖互动、问问题。耶稣这时已很明显的表明祂与父神的关系，同时也表明了祂降世的使命：&ldquo;是以我父的事为念。&rdquo; 耶稣顺从父母与他们回到拿撒勒去，是儿女当顺从父母的好榜样。而<span class="popup-link" @click = "popUp('pop13')"> 路加福音2:52</span>

	<div class="popup invisible" id="pop13"><!-- begin bible -->
	<p><sup class="versenum">52&nbsp;</sup>耶稣的智慧和身量，并神和人喜爱他的心，都一齐增长。</p>
	<!-- end bible --></div>
	则记录耶稣18岁到30岁左右的成长过程。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路2:52</p>

<p class="forward bible">耶稣的智慧和身量（注：或作：&ldquo;年纪&rdquo;），并　神和人喜爱他的心，都一齐增长。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣的成长过程：智能和身量，并神与人喜爱祂的心，都一齐增长（<span class="popup-link" @click = "popUp('pop8')"> 路2:40</span>,

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>孩子渐渐长大，强健起来，充满智慧，又有神的恩在他身上。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop9')"> 路2:52</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">52&nbsp;</sup>耶稣的智慧和身量，并神和人喜爱他的心，都一齐增长。</p>
	<!-- end bible --></div>
	我们生命成长的表现又是什么呢？为什么？</li>
	<li class="forward">身为神子，耶稣没有轻看作为人的家庭责任。我们基督徒该如何看待我们在世上的人际关系及家庭责任，并有美好的见证？</li>
	<li class="forward">我们如何面对所看见的事、所经历的事？为什么要存在心理，反复思想？</li>
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


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在未来的人际关系与家庭责任里，有哪些是神提醒你要加强或修复的？我们会否因许多宗教活动的活动或只顾与亲友交往应酬，而忽略我们的子女或是我们在家中当尽的责任？</li>
	<li class="forward">年纪老迈的西面渴望见到救恩而得蒙神的悦纳。你是否渴慕这种与主面对面的关系呢？鼓励你继续分别30分钟有个人灵修的时间，单单亲近神，寻求神的面，为要遇见神。</li>
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
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p>亲爱的天父，我赞美祢，因祢满有智慧与能力。求祢帮助我在灵性、智性和身量上一同增长；在个人生活、家庭、课业、工作与关系上有美好的见证，使认识我的家人亲友、同事同学都可以从我身上看见祢的作为。天父啊，我愿意凡事荣耀祢的名，在各样的事上尽职忠心，并不找借口推脱我当付的责任，多结生命的果子，使人认出我是祢的门徒。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->