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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣被接升上天——颁大使命</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美&mdash;&mdash;以神的话、诗歌称颂赞美神</h2>

<h2 class="back">祷告关怀&mdash;&mdash;以祷告、勉励，合乎圣经的教导彼此服侍</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践&mdash;&mdash;鼓励小组在爱中互相督促，一同顺服耶稣</h2>

<ul class="back">
	<li class="back">分享未来一年你参与<span lang="ZH-CN">《倍增门徒之天国扩展》</span>？为什么？</li>
	<li class="back">背诵经文（<span class="popup-link" @click = "popUp('pop1')"> 太28:18-20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup class="versenum">19&nbsp;</sup>所以你们要去，使万民做我的门徒，奉父、子、圣灵的名给他们施洗，<sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意&mdash;&mdash;体恤神的心意，成为我们行事的动机与激励</h2>

<p class="back">耶稣基督复活后四十天之久，再三地向使徒们显现，为了帮助他们确定基督的复活，使他们的信心有绝对的根据。同样神也知道并体谅我们的软弱，不厌其烦地用许多的凭据，再三地证明基督的复活，要使我们的信心有牢固的根基。因为若没有复活又永活的基督，我们就不可能有信心勇往直前，靠主能力去完成使命。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣&mdash;&mdash;学习为要应用，应用带来生命改变</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">《使徒行传》为新约各书卷提供了一个桥梁，将福音书的记载与使徒们的书信连接起来。本书也提供了使徒保罗的生平记录，使我们得知他各书信的背景。</p>

<p class="indent2">就地理来说，使徒行传的故事横跨耶路撒冷（教会发源地）与罗马（当时帝国的政治中心）两城之间的疆域。从历史来看，它叙述教会最初三十年间的事迹，也是将初代教会与后来各时期教会连系起来的桥梁。</p>

<ul class="up">
	<li class="nobreak-final-final">作者路加在本书中叙述福音怎样从耶路撒冷（犹太世界的首府），传到罗马（外邦世界的首府）。<span class="popup-link" @click = "popUp('pop2')"> 使徒行传1:1-11</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>应许得圣灵的能力</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>啊，我已经作了前书，论到耶稣开头一切所行所教训的，<sup class="versenum">2&nbsp;</sup>直到他借着圣灵吩咐所拣选的使徒以后，被接上升的日子为止。<sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。<sup class="versenum">4&nbsp;</sup>耶稣和他们聚集的时候，嘱咐他们说：&ldquo;不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。<sup class="versenum">5&nbsp;</sup><u class="person underline">约翰</u>是用水施洗，但不多几日，你们要受圣灵的洗。&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>他们聚集的时候，问耶稣说：&ldquo;主啊，你复兴以色列国就在这时候吗？&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣对他们说：&ldquo;父凭着自己的权柄所定的时候、日期，不是你们可以知道的。<sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;<sup class="versenum">9&nbsp;</sup>说了这话，他们正看的时候，他就被取上升，有一朵云彩把他接去，便看不见他了。<sup class="versenum">10&nbsp;</sup>当他往上去，他们定睛望天的时候，忽然有两个人身穿白衣站在旁边，说：<sup class="versenum">11&nbsp;</sup>&ldquo;加利利人哪，你们为什么站着望天呢？这离开你们被接升天的耶稣，你们见他怎样往天上去，他还要怎样来。&rdquo;</p>
	<!-- end bible --></div>
	是本书的主题，路加让我们知道这些事实：复活升天的耶稣事工的延续、基督所拣选的领袖&mdash;&mdash;使徒、 圣灵是能力的源头，以及耶稣对未来的计划。而这些事实自始至终支配着整卷书发展的脉络。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒1:1-11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒1:1-11</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>提阿非罗啊，我已经作了前书，论到耶稣开头一切所行所教训的，<sup>2</sup>直到他藉著圣灵吩咐所拣选的使徒，以后被接上升的日子为止。<sup>3</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说　神国的事。</p>

<p><sup>4</sup>耶稣和他们聚集的时候，嘱咐他们说：&ldquo;不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。<sup>5</sup>约翰是用水施洗 ，但不多几日，你们要受圣灵的洗。&rdquo;<sup>6</sup>他们聚集的时候，问耶稣说：&ldquo;主啊，你复兴以色列国就在这时候吗？&rdquo;<sup>7</sup>耶稣对他们说：&ldquo;父凭著自己的权柄所定的时候、日期，不是你们可以知道的。<sup>8</sup>但圣灵降临在你们身上，你们就必得著能力；并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>

<p><sup>9</sup>说了这话，他们正看的时候，他就被取上升，有一朵云彩把他接去，便看不见他了。<sup>10</sup>当他往上去，他们定睛望天的时候，忽然有两个人身穿白衣，站在旁边，说：<sup>11</sup>&ldquo;加利利人哪，你们为甚么站著望天呢？这离开你们被接升天的耶稣，你们见他怎样往天上去，他还要怎样来。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/301.mp4" type="button" class="external-movie">
         观看&nbsp;徒1:1-11&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p>+ 约翰的洗礼</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">约翰的洗礼着重在消极方面的悔改，借着将人浸入水中，表明他已离弃过往的罪行，所以又称作&ldquo;悔改的洗&rdquo;(参<span class="popup-link" @click = "popUp('pop3')"> 徒19:3-4</span>)。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;这样，你们受的是什么洗呢？&rdquo;他们说：&ldquo;是<u class="person underline">约翰</u>的洗。&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;<u class="person underline">约翰</u>所行的是悔改的洗，告诉百姓当信那在他以后要来的，就是耶稣。&rdquo;</p>
	<!-- end bible --></div>
	这与基督徒奉主耶稣的名受洗不一样，因为基督徒的受洗，是着重在与基督的联合，包括消极方面的埋葬：与基督同死，也包括积极方面的复活：与基督同活（<span class="popup-link" @click = "popUp('pop4')"> 罗6:3-5</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>岂不知我们这受洗归入基督耶稣的人，是受洗归入他的死吗？<sup class="versenum">4&nbsp;</sup>所以，我们借着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督借着父的荣耀从死里复活一样。<sup class="versenum">5&nbsp;</sup>我们若在他死的形状上与他联合，也要在他复活的形状上与他联合。</p>
	<!-- end bible --></div>
	（引自：ocochome.info/聚会资料/分卷查经/路加福音第一课,问题5）</li>
</ul>

</div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣要门徒如何延续祂在地上的工作，使万民作门徒？</li>
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
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">此段故事描述《使徒行传》是耶稣传道事工的续篇。祂在地上开始的工作，祂继续从天上透过有圣灵内住的门徒来工作。耶稣返回天上之前，祂向门徒证明自己活着，并且继续教导天国的事。门徒却仍旧不了解耶稣对天国的教导，还在等待以色列国的政治力量复兴。耶稣告诉门徒天国将会藉由见证和圣灵的工作持续扩张，而不是借着军事力量或暴力改革的方式。如今，门徒就如同耶稣一样被差遣，但是他们需要圣灵赐下的能力，帮助他们去走耶稣走过的路。他们唯一的使命就是去使万民作门徒，直到耶稣用和祂离开时的同样方式再来。</p>

<p class="up">（参阅<span class="popup-link" @click = "popUp('pop5')"> 马太福音 28:18-20</span>）</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">18&nbsp;</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。 <sup class="versenum">19&nbsp;</sup>所以你们要去，使万民做我的门徒，奉父、子、圣灵的名给他们施洗， <sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
<!--end of footnotes--><!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 经文背诵&mdash;&mdash;将神话语藏在心里，成为我们行事的准则</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="forward">徒1:8</p>

<p class="forward bible">但圣灵降临在你们身上，你们就必得著能力；并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备&mdash;&mdash;操练有信心并忠心地实践和训练他人</h2>

<ul class="forward">
	<li class="forward">耶稣从死里复活到升天之前，在地上四十天之久，并一再向使徒们显现，与他们聚集，讲说神国的事；吩咐并差遣他们，且应许赐下圣灵。试想象门徒那时与复活后的耶稣同住会有何感受？为什么耶稣要花这样的时间和他们相处和做这一些事？</li>
	<li class="forward">主耶稣已经复活升天，并应许祂必荣耀再来，这与你和我现在的生活和事奉有何关系？为什么？</li>
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


<h2 class="forward">福音行动&mdash;&mdash;设定行动点，彼此督责，勉励行道</h2>

<ul class="forward">
	<li class="forward">花一段时间来到神的面前，回顾并记下你过去一年学习<span lang="ZH-CN">《倍增门徒之天国扩展》</span>，有哪些生命的改变，并向神感恩。下周在小组里与组员分享。</li>
	<li class="forward">评估你自己造就门徒的经历，有哪些做的好的？有哪些需要改变的？安排时间与门徒分享主再来及大使命的重要性。</li>
	<li class="forward">为这世代祷告，求神让你明白祂对世人的心意，并为身边的亲友代求，求神使用你成为福音的使者，将福音传给他们。</li>
	<li class="forward">持续为那些你所关怀代祷的慕道亲友祷告，求神继续在他们心中动工，使他们的心柔软，心被恩感，回转归向基督。</li>
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


<h2 class="forward">福音祷告&mdash;&mdash;将所行的交托神，愿祂旨意成就在这地</h2>

<p class="forward">永活的救主耶稣基督，祢配得一切的称颂与赞美！感谢祢愿意谦卑自己，降世为人，为要拯救世人。祢为我们受死、埋葬，第三天从死里复活，四十天之久在地上与门徒们同在。祢已被接升天，祢应许我们，祢去原是为我们预备地方，祢必再来接我们回去。感谢祢应许赐下圣灵与我们同在，赐我们能力在我们所住之地并直到地极，要为祢作见证。我们深愿世人都尊天父的名为圣，愿天父的国降临，愿天父的旨意行在全地如同行在天上。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->