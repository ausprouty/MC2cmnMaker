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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-prophet-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>先知诺亚</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span lang="ZH-CN">向后看</span></div>
</div>

<div>
<h2>祷告关怀</h2>

<ul>
	<li>这个星期有过什么让人兴奋的故事？</li>
	<li>这个星期遇到的挑战是什么？</li>
	<li>本周你想要耶稣为你做什么？</li>
	<li>简短祷告，祈求耶稣满足大家所分享的需要。</li>
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


<h2>庆贺实践</h2>

<ul>
	<li>上周你是怎样顺服耶稣的?</li>
	<li>上周你和谁分享了这个故事？</li>
</ul>

<h2>天父心意</h2>

<p>鼓励彼此不断地顺服基督，并且互相提醒关于和他人分享这些故事的重要性。</p>

<ul>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span lang="ZH-CN"><span>向上看</span></span></div>
</div>

<h2>查考圣经 一起发现圣经中的宝藏</h2>

<h3>阅读经文</h3>

<p>读出经文创世记6：9-8:22两遍，其他人静听。</p>



<button id="Button0" type="button" class="collapsible bible">读两遍 创世记 6:9-8:22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<p><sup class="versenum">9&nbsp;</sup><u class="person underline">挪亚</u>的后代记在下面。<u class="person underline">挪亚</u>是个义人，在当时的世代是个完全人。<u class="person underline">挪亚</u>与神同行。 <sup class="versenum">10&nbsp;</sup><u class="person underline">挪亚</u>生了三个儿子，就是<u class="person underline">闪</u>、<u class="person underline">含</u>、<u class="person underline">雅弗</u>。 <sup class="versenum">11&nbsp;</sup>世界在神面前败坏，地上满了强暴。 <sup class="versenum">12&nbsp;</sup>神观看世界，见是败坏了，凡有血气的人，在地上都败坏了行为。</p>

<h3>神命挪亚造方舟</h3>

<p><sup class="versenum">13&nbsp;</sup>神就对<u class="person underline">挪亚</u>说：&ldquo;凡有血气的人，他的尽头已经来到我面前，因为地上满了他们的强暴。我要把他们和地一并毁灭。 <sup class="versenum">14&nbsp;</sup>你要用歌斐木造一只方舟，分一间一间地造，里外抹上松香。 <sup class="versenum">15&nbsp;</sup>方舟的造法乃是这样：要长三百肘，宽五十肘，高三十肘。 <sup class="versenum">16&nbsp;</sup>方舟上边要留透光处，高一肘。方舟的门要开在旁边。方舟要分上、中、下三层。 <sup class="versenum">17&nbsp;</sup>看哪，我要使洪水泛滥在地上，毁灭天下，凡地上有血肉、有气息的活物，无一不死。 <sup class="versenum">18&nbsp;</sup>我却要与你立约，你同你的妻，与儿子、儿妇，都要进入方舟。 <sup class="versenum">19&nbsp;</sup>凡有血肉的活物，每样两个，一公一母，你要带进方舟，好在你那里保全生命。 <sup class="versenum">20&nbsp;</sup>飞鸟各从其类，牲畜各从其类，地上的昆虫各从其类，每样两个，要到你那里，好保全生命。 <sup class="versenum">21&nbsp;</sup>你要拿各样食物积蓄起来，好做你和它们的食物。&rdquo; <sup class="versenum">22&nbsp;</sup><u class="person underline">挪亚</u>就这样行。凡神所吩咐的，他都照样行了。</p>

<h3>挪亚进方舟</h3>

<p class="chapter-1"><span class="chapternum">7&nbsp;</span>耶和华对<u class="person underline">挪亚</u>说：&ldquo;你和你的全家都要进入方舟，因为在这世代中，我见你在我面前是义人。 <sup class="versenum">2&nbsp;</sup>凡洁净的畜类，你要带七公七母，不洁净的畜类，你要带一公一母， <sup class="versenum">3&nbsp;</sup>空中的飞鸟也要带七公七母，可以留种，活在全地上。 <sup class="versenum">4&nbsp;</sup>因为再过七天，我要降雨在地上四十昼夜，把我所造的各种活物都从地上除灭。&rdquo; <sup class="versenum">5&nbsp;</sup><u class="person underline">挪亚</u>就遵着耶和华所吩咐的行了。</p>

<p><sup class="versenum">6&nbsp;</sup>当洪水泛滥在地上的时候，<u class="person underline">挪亚</u>整六百岁。 <sup class="versenum">7&nbsp;</sup><u class="person underline">挪亚</u>就同他的妻和儿子、儿妇，都进入方舟，躲避洪水。 <sup class="versenum">8&nbsp;</sup>洁净的畜类和不洁净的畜类，飞鸟并地上一切的昆虫， <sup class="versenum">9&nbsp;</sup>都是一对一对的，有公有母，到<u class="person underline">挪亚</u>那里进入方舟，正如神所吩咐<u class="person underline">挪亚</u>的。 <sup class="versenum">10&nbsp;</sup>过了那七天，洪水泛滥在地上。 <sup class="versenum">11&nbsp;</sup>当<u class="person underline">挪亚</u>六百岁，二月十七日那一天，大渊的泉源都裂开了，天上的窗户也敞开了， <sup class="versenum">12&nbsp;</sup>四十昼夜降大雨在地上。</p>

<p><sup class="versenum">13&nbsp;</sup>正当那日，<u class="person underline">挪亚</u>和他三个儿子<u class="person underline">闪</u>、<u class="person underline">含</u>、<u class="person underline">雅弗</u>，并<u class="person underline">挪亚</u>的妻子和三个儿妇，都进入方舟。 <sup class="versenum">14&nbsp;</sup>他们和百兽各从其类，一切牲畜各从其类，爬在地上的昆虫各从其类，一切禽鸟各从其类，都进入方舟。 <sup class="versenum">15&nbsp;</sup>凡有血肉、有气息的活物，都一对一对地到<u class="person underline">挪亚</u>那里，进入方舟。 <sup class="versenum">16&nbsp;</sup>凡有血肉进入方舟的，都是有公有母，正如神所吩咐<u class="person underline">挪亚</u>的。耶和华就把他关在方舟里头。</p>

<h3>洪水泛滥四十日</h3>

<p><sup class="versenum">17&nbsp;</sup>洪水泛滥在地上四十天，水往上涨，把方舟从地上漂起。 <sup class="versenum">18&nbsp;</sup>水势浩大，在地上大大地往上涨，方舟在水面上漂来漂去。 <sup class="versenum">19&nbsp;</sup>水势在地上极其浩大，天下的高山都淹没了。 <sup class="versenum">20&nbsp;</sup>水势比山高过十五肘，山岭都淹没了。 <sup class="versenum">21&nbsp;</sup>凡在地上有血肉的动物，就是飞鸟、牲畜、走兽和爬在地上的昆虫，以及所有的人都死了。 <sup class="versenum">22&nbsp;</sup>凡在旱地上，鼻孔有气息的生灵都死了。 <sup class="versenum">23&nbsp;</sup>凡地上各类的活物，连人带牲畜、昆虫，以及空中的飞鸟，都从地上除灭了，只留下<u class="person underline">挪亚</u>和那些与他同在方舟里的。 <sup class="versenum">24&nbsp;</sup>水势浩大，在地上共一百五十天。</p>

<h3>洪水消落</h3>

<p class="chapter-1"><span class="chapternum">8&nbsp;</span>神记念<u class="person underline">挪亚</u>和<u class="person underline">挪亚</u>方舟里的一切走兽牲畜。神叫风吹地，水势渐落。 <sup class="versenum">2&nbsp;</sup>渊源和天上的窗户都闭塞了，天上的大雨也止住了。 <sup class="versenum">3&nbsp;</sup>水从地上渐退，过了一百五十天，水就渐消。 <sup class="versenum">4&nbsp;</sup>七月十七日，方舟停在<span class="double-underline place">亚拉腊</span>山上。 <sup class="versenum">5&nbsp;</sup>水又渐消，到十月初一日，山顶都现出来了。</p>

<h3>挪亚放乌鸦与鸽出方舟</h3>

<p><sup class="versenum">6&nbsp;</sup>过了四十天，<u class="person underline">挪亚</u>开了方舟的窗户， <sup class="versenum">7&nbsp;</sup>放出一只乌鸦去。那乌鸦飞来飞去，直到地上的水都干了。 <sup class="versenum">8&nbsp;</sup>他又放出一只鸽子去，要看看水从地上退了没有。 <sup class="versenum">9&nbsp;</sup>但遍地上都是水，鸽子找不着落脚之地，就回到方舟<u class="person underline">挪亚</u>那里，<u class="person underline">挪亚</u>伸手把鸽子接进方舟来。 <sup class="versenum">10&nbsp;</sup>他又等了七天，再把鸽子从方舟放出去。 <sup class="versenum">11&nbsp;</sup>到了晚上，鸽子回到他那里，嘴里叼着一个新拧下来的橄榄叶子，<u class="person underline">挪亚</u>就知道地上的水退了。 <sup class="versenum">12&nbsp;</sup>他又等了七天，放出鸽子去，鸽子就不再回来了。</p>

<p><sup class="versenum">13&nbsp;</sup>到<u class="person underline">挪亚</u>六百零一岁，正月初一日，地上的水都干了。<u class="person underline">挪亚</u>撤去方舟的盖观看，便见地面上干了。 <sup class="versenum">14&nbsp;</sup>到了二月二十七日，地就都干了。</p>

<h3>挪亚和全家出方舟</h3>

<p><sup class="versenum">15&nbsp;</sup>神对<u class="person underline">挪亚</u>说： <sup class="versenum">16&nbsp;</sup>&ldquo;你和你的妻子、儿子、儿妇都可以出方舟。 <sup class="versenum">17&nbsp;</sup>在你那里凡有血肉的活物，就是飞鸟、牲畜和一切爬在地上的昆虫，都要带出来，叫它在地上多多滋生，大大兴旺。&rdquo; <sup class="versenum">18&nbsp;</sup>于是<u class="person underline">挪亚</u>和他的妻子、儿子、儿妇都出来了。 <sup class="versenum">19&nbsp;</sup>一切走兽、昆虫、飞鸟和地上所有的动物，各从其类，也都出了方舟。</p>

<h3>挪亚筑坛献祭</h3>

<p><sup class="versenum">20&nbsp;</sup><u class="person underline">挪亚</u>为耶和华筑了一座坛，拿各类洁净的牲畜、飞鸟献在坛上为燔祭。 <sup class="versenum">21&nbsp;</sup>耶和华闻那馨香之气，就心里说：&ldquo;我不再因人的缘故咒诅地（人从小时心里怀着恶念），也不再按着我才行的灭各种的活物了。 <sup class="versenum">22&nbsp;</sup>地还存留的时候，稼穑、寒暑、冬夏、昼夜就永不停息了。&rdquo;</p>
</div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<h2>探索与讨论</h2>

<ul>
	<li>在这个故事中什么引起了你的注意?</li>
	<li>你认为这个故事的中心思想是什么？</li>
	<li>关于神我们学到了什么?</li>
	<li>关于人和神的关系我们学到了什么？</li>
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




<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" /></p>

<div class="lesson-subtitle"><span lang="ZH-CN"><span>向前看</span></span></div>
</div>

<h2>一起选择要顺服的地方</h2>

<ul>
	<li>我们怎样可以顺服这个教训?</li>
	<li>这个星期里有没有什么人需要我们实实在在服侍对方</li>
	<li>本周你可以和谁分享这个故事?</li>
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


<h2>定好一个时间聚会准备学习下一个故事</h2>

<ul>
	<li>下一个故事是关于先知亚伯拉罕</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->