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
<h1>奉主差遣：天国扩张</h1>
<div id="showVideoOptions"></div>
  <ul>
	<li class="nobreak-final-final">《使徒行传》为路加所撰写，是《路加福音》记载耶稣故事的续篇。&ldquo;这些事我既从起头都详细考察了，就定意要按着次序写给你&rdquo;（<span class="popup-link" @click = "popUp('pop1')"> 路1:3</span>）。
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>这些事我既从起头都详细考察了，就定意要按着次序写给你，</p>
	<!-- end bible --></div>
	&ldquo;提阿非罗啊，我已经作了前书，论到耶稣开头一切所行所教训的&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒1:1</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>啊，我已经作了前书，论到耶稣开头一切所行所教训的，</p>
	<!-- end bible --></div>
	本卷书记载了初代教会三十年的历史</li>
</ul>

<p>（公元30年至公元62年）。</p>

<h2>简介</h2>

<ul>
	<li class="nobreak-final-final">耶稣被差到世上，是为了在世界各地扩展上帝的国度。祂刚开始传道时，只有几个从施洗约翰转过去的门徒。他开始事奉的范围遍及以色列的各城各乡（<span class="popup-link" @click = "popUp('pop3')"> 可1:38</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;</p>
	<!-- end bible --></div>
	但他预备他的跟从者更大的范围。他不只是教导他们关于天国的真理，并在他的人性，展示一个以天国为中心、依靠圣灵的生命。耶稣透过得着门徒，从中拣选领袖，又给予训练之后，差遣他们将福音传到全世界，以扩展他的事工到更远更广的地方。在他死在十字架上之前，已经告诉门徒整个使命的范围：&ldquo;这天国的福音要传遍天下，对万民作见证，然后末期才来到。&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 太24:14</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>这天国的福音要传遍天下，对万民作见证，然后末期才来到。</p>
	<!-- end bible --></div>
	祂的异象是要在世界各地的万民中建立上帝的国度，使上帝的名被尊为圣并他的旨意行在地上（<span class="popup-link" @click = "popUp('pop5')"> 太6:9-10</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>&ldquo;所以，你们祷告要这样说：&lsquo;我们在天上的父，愿人都尊你的名为圣，<sup class="versenum">10&nbsp;</sup>愿你的国降临，愿你的旨意行在地上，如同行在天上。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">耶稣示范了如何与失丧的人连结，如何造就门徒去造就门徒，还有如何找出领袖并给予训练，使他们也能去到万民中重复同样的步骤。耶稣应许祂在世上开始的工作，祂会在天上继续作工：&ldquo;我所做的事，信我的人也要做，并且要做比这更大的事，因为我往父那里去。&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 约14:12</span>）；
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>我实实在在地告诉你们：我所做的事，信我的人也要做，并且要做比这更大的事，因为我往父那里去。</p>
	<!-- end bible --></div>
	&ldquo;我去是与你们有益的&hellip;&hellip;我若去，就差（保惠师）来。&rdquo;（<span class="popup-link" @click = "popUp('pop7')"> 约16:7</span>）；

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>然而我将真情告诉你们，我去是于你们有益的。我若不去，保惠师就不到你们这里来；我若去，就差他来。</p>
	<!-- end bible --></div>
	&ldquo;但圣灵降临在你们身上，你们就必得着能力；并要在耶路撒冷、犹太全地和撒玛利亚，直到地极，作我的见证。&rdquo;（<span class="popup-link" @click = "popUp('pop8')"> 徒1:8</span>）

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>这就是《使徒行传》的故事。它告诉我们，当门徒开始活出主耶稣所教导的靠圣灵行事，圣灵就工作&mdash;&mdash;建立与扩展上帝的国度到万民之中。它也提供了背景故事，帮助我们将新约中其他的书信运用在耶稣的事工中。《使徒行传》记载在短短的三十年间，神的国度影响了整个社会，以及在各地建立了新的门徒和新的教会，我们就得知天国扩展的根基从此立下。</p>

<p style="text-align:justify"><span><span><span><strong><span lang="ZH-CN"><span><span style="color:black">使用下列的问题讨论，帮助大家学习各段经文：</span></span></span></strong></span></span></span></p>

<ul>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">分享最有感动或最喜欢的部分</span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">目前为止，故事中有哪些是新发生或刚发展的事？</span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">这段经文教导我们怎样倚靠圣灵生活，怎样去使万民作门徒，或带人？</span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">明白这段故事后，我们该如何过得不一样？</span></span></span></span></span></li>
</ul>

<p style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">另外可以使用的问题：</span></span></span></span></span></p>

<ul>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">如何影响世人和社会？</span></span></span></span></span></li>
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span style="color:black">故事中克服了什么障碍或难题？又是如何克服的呢？</span></span></span></span></span></li>
</ul>

<p style="text-align:justify">&nbsp;</p>

<p style="text-align:justify"><span><span><span lang="ZH-CN">内容参考：</span></span></span></p>

<ul>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">橄榄社区，分卷查经（</span>http://ocochome.info/聚会资料</span><span>/</span><span lang="ZH-CN">分卷查经</span><span>/</span><span lang="ZH-CN">使徒行传</span><span>/</span><span lang="ZH-CN">）</span></span></li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">圣经综合解读 </span><span lang="EN-US">https://cmcbiblereading.com/wp-content/</span></span></span></li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">提摩太课程</span><span lang="EN-US">:</span> <span lang="ZH-CN">《活出神的大能》</span></span></span></li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->