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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>先知摩西</h1></div>
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

<p>读出经文出埃及记12：1-12，12：28-30两遍，其他人静听。</p>



<button id="Button0" type="button" class="collapsible bible">读两遍 出埃及 12:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>定逾越节之礼</h3>

<p class="chapter-2"><span class="chapternum">12&nbsp;</span>耶和华在<span class="double-underline place">埃及</span>地晓谕<u class="person underline">摩西</u>、<u class="person underline">亚伦</u>说： <sup class="versenum">2&nbsp;</sup>&ldquo;你们要以本月为正月，为一年之首。 <sup class="versenum">3&nbsp;</sup>你们吩咐<span class="double-underline place">以色列</span>全会众说：本月初十日，各人要按着父家取羊羔，一家一只。 <sup class="versenum">4&nbsp;</sup>若是一家的人太少，吃不了一只羊羔，本人就要和他隔壁的邻舍共取一只。你们预备羊羔，要按着人数和饭量计算。 <sup class="versenum">5&nbsp;</sup>要无残疾、一岁的公羊羔，你们或从绵羊里取，或从山羊里取，都可以。 <sup class="versenum">6&nbsp;</sup>要留到本月十四日，在黄昏的时候，<span class="double-underline place">以色列</span>全会众把羊羔宰了。 <sup class="versenum">7&nbsp;</sup>各家要取点血，涂在吃羊羔的房屋左右的门框上和门楣上。 <sup class="versenum">8&nbsp;</sup>当夜要吃羊羔的肉，用火烤了，与无酵饼和苦菜同吃。 <sup class="versenum">9&nbsp;</sup>不可吃生的，断不可吃水煮的，要带着头、腿、五脏，用火烤了吃。 <sup class="versenum">10&nbsp;</sup>不可剩下一点留到早晨，若留到早晨，要用火烧了。 <sup class="versenum">11&nbsp;</sup>你们吃羊羔当腰间束带，脚上穿鞋，手中拿杖，赶紧地吃。这是耶和华的逾越节。 <sup class="versenum">12&nbsp;</sup>因为那夜我要巡行<span class="double-underline place">埃及</span>地，把<span class="double-underline place">埃及</span>地一切头生的，无论是人是牲畜，都击杀了，又要败坏<span class="double-underline place">埃及</span>一切的神。我是耶和华。</p>
</div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">读两遍 出埃及 12:28-30</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<p><sup class="versenum">28&nbsp;</sup>耶和华怎样吩咐<u class="person underline">摩西</u>、<u class="person underline">亚伦</u>，<span class="double-underline place">以色列</span>人就怎样行。</p>

<h3>耶和华击杀埃及长子</h3>

<p><sup class="versenum">29&nbsp;</sup>到了半夜，耶和华把<span class="double-underline place">埃及</span>地所有的长子，就是从坐宝座的法老，直到被掳囚在监里之人的长子，以及一切头生的牲畜，尽都杀了。 <sup class="versenum">30&nbsp;</sup>法老和一切臣仆，并<span class="double-underline place">埃及</span>众人，夜间都起来了。在<span class="double-underline place">埃及</span>有大哀号，无一家不死一个人的。</p>
</div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>



<p>[BibleBlock]</p>

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
	<li>下一个故事是关于先知大卫和以赛亚</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->