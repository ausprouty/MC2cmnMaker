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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>信徒成使命群体——建立聚会</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒2:38-39</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。<sup class="versenum">39&nbsp;</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们神所召来的。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">在使徒行传2章1-4节应验了主耶稣升天前对门徒的应许，就是他们要受圣灵的洗（<span class="popup-link" @click = "popUp('pop2')"> 徒1:5</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup><u class="person underline">约翰</u>是用水施洗，但不多几日，你们要受圣灵的洗。&rdquo;</p>
	<!-- end bible --></div>
	并且圣灵的降临会带来能力、受灵感的口才，以及普世性的见证（<span class="popup-link" @click = "popUp('pop3')"> 徒1:8</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	此外。彼得引用<span class="popup-link" @click = "popUp('pop7')"> 约珥书2:28-32</span>

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<h3>许赐圣灵</h3>

	<p><sup class="versenum">28&nbsp;</sup>&ldquo;以后，我要将我的灵浇灌凡有血气的，你们的儿女要说预言，你们的老年人要做异梦，少年人要见异象。<sup class="versenum">29&nbsp;</sup>在那些日子，我要将我的灵浇灌我的仆人和使女。<sup class="versenum">30&nbsp;</sup>在天上地下，我要显出奇事，有血，有火，有烟柱。<sup class="versenum">31&nbsp;</sup>日头要变为黑暗，月亮要变为血，这都在耶和华大而可畏的日子未到以前。</p>

	<p><sup class="versenum">32&nbsp;</sup>&ldquo;到那时候，凡求告耶和华名的，就必得救。因为照耶和华所说的，在锡安山耶路撒冷必有逃脱的人，在剩下的人中必有耶和华所召的。</p>
	<!-- end bible --></div>
	来说明五旬节是上帝所应许的末日圣灵浇灌与得救的应验；约珥的预言在旧约的时代，只有先知、君王和祭司受到圣灵的浇灌，现在上帝的预言已经开始实现，末后的日子已经来到，圣灵要浇灌所有人。在审判的日子来到以前，向主寻求救恩的人就会得救（<span class="popup-link" @click = "popUp('pop5')"> 罗10:9-13</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>你若口里认耶稣为主，心里信神叫他从死里复活，就必得救。<sup class="versenum">10&nbsp;</sup>因为人心里相信就可以称义，口里承认就可以得救。<sup class="versenum">11&nbsp;</sup>经上说：&ldquo;凡信他的人，必不至于羞愧。&rdquo;<sup class="versenum">12&nbsp;</sup>犹太人和希腊人并没有分别，因为众人同有一位主，他也厚待一切求告他的人；<sup class="versenum">13&nbsp;</sup>因为&ldquo;凡求告主名的，就必得救&rdquo;。</p>
	<!-- end bible --></div>
	因为神从始至终的心意是不愿一人沉沦。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">这些人是醉酒吗？彼得代表其它使徒从众人的议论中切入他所要传扬的神的大作为，这些人不是被酒灌醉，而是受到圣灵的浇灌。彼得引述旧约的预言向这些神的百姓述说上帝奇妙的计划如何应验在这&ldquo;末后的日子&rdquo;，耶稣的生平、受死、复活和高升是神的旨意和预知，耶稣所应许圣灵的赐下也印证了祂如今被高举在神的面前，结论是：你们所钉死在十字架上的这位耶稣正是你们长久以来所等候的弥赛亚。就在当下，彼得历史性的宣讲呼召了三千人归入基督的名下。</p>

<p class="indent2">上帝介入的壮举，为使徒的见证拉开序幕。教会历世历代的事工都必须建立在这个基础上，继续以圣灵的能力传福音、造就门徒、牧养、在万民中拓展上帝的国度。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒2:42-47》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒2:42-47</button><div class="collapsed" id ="Text0">

<p><sup>42</sup>都恒心遵守使徒的教训，彼此交接，擘饼，祈祷。<sup>43</sup>众人都惧怕。使徒又行了许多奇事、神迹。<sup>44</sup>信的人都在一处，凡物公用；<sup>45</sup>并且卖了田产、家业，照各人所需用的分给各人。<sup>46</sup>他们天天同心合意恒切地在殿里，且在家中擘饼，存著欢喜、诚实的心用饭，<sup>47</sup>赞美　神，得众民的喜爱。主将得救的人天天加给他们。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/305.mp4" type="button" class="external-movie">
         观看&nbsp;徒2:42-47&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">这段经文教导我们怎样倚靠圣灵生活，怎样去使万民作门徒和建立教会？</li>
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
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">这个故事告诉我们这群信徒聚在一起时所做的事。之后我们在<span class="popup-link" @click = "popUp('pop6')"> 使徒行传 5:11</span>

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>全教会和听见这事的人都甚惧怕。</p>
	<!-- end bible --></div>
	就会读到这个新群体称作&ldquo;教会&rdquo;。本段经文让我们看到教会应该有的基本特征。教会就是一群受洗的信徒固定聚会，一起敬拜、团契、教导上帝的话、祷告、守圣餐、事奉、作见证、奉献，以及有谦卑的领袖带领。我们看见门徒实践了耶稣在事奉中曾教导他们的：倚靠圣灵、祷告、顺服天父的旨意、传道、高举天父的名（敬拜）、信徒彼此相交。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒2:46-47</p>

<p class="forward bible"><sup>46</sup>他们天天同心合意恒切地在殿里，且在家中擘饼，存著欢喜、诚实的心用饭，<sup>47</sup>赞美　神，得众民的喜爱。主将得救的人天天加给他们。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你如何看待44节中的&ldquo;凡物公用&rdquo;？今天我们是否也要凡物公用？为什么？</li>
	<li class="forward">初代教会兴盛的原因有哪些？对于我们现今有什么提醒？我们的教会如何能够成为一个健康的、神所喜悦的教会？为什么？</li>
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
	<li class="forward">初代教会信徒在财产上表现的一个新态度，不再把财产看成私人的，而是看成神可以用来关怀、帮助他人的资源，是对神的家的委身。今天在神的家中，在爱神爱人的事上，有哪些是你做得欠缺/不足的，将它写下和祷告，并以行动看顾有需要的人。下周在小组中分享。</li>
	<li class="forward">按照上面的讨论，为教会已拥有的特质感谢神，求神继续使用你们。有哪些是欠缺的，求神让你与教会牧者和弟兄姐妹一起来改善和营造。求神使用教会成为这小区的光和盐，祝福这城市。</li>
	<li class="forward">阅读附录：《二十一世纪的华人差传策略与方法》。反思教会在差传与策略上属于那个阶段，把心得和领受记下，下周与小组成员分享。</li>
	<li class="forward">花时间与你的核心门徒一起评估你带领的倍增小组，是否是健康和讨神喜悦的&ldquo;徒2群体&rdquo;。有哪些需要改善的，把它记下，下周在小组中分享。</li>
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

<p class="forward">亲爱的天父，感谢祢从创立世界以前，在基督里拣选了我们，使我们在祢面前成为圣洁，无有瑕疵。当我们死在过犯中的时候，便叫我们与基督一同活过来，祢又叫我们与基督耶稣一同复活，一同坐在天上，要将祢极丰富的恩典，就是祢在基督耶稣里向我们所施的恩慈，显明给后来的世代看。惟愿我们这群信靠基督的人，聚集一起学习真道，在爱中相连、彼此相顾和服事，让人可以认出我们就是主耶稣的门徒，并将荣耀归给我们在天上的父。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->