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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>我们有一个选择</h1></div>
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

<p>读出经文约翰福音3：1-21两遍，其他人静听。</p>



<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音 3:1-21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>耶稣与尼哥迪慕论重生</h3>

<p class="chapter-1"><sup class="versenum">1&nbsp;</sup>有一个法利赛人，名叫<u class="person underline">尼哥迪慕</u>，是<span class="double-underline place">犹太</span>人的官。 <sup class="versenum">2&nbsp;</sup>这人夜里来见耶稣，说：&ldquo;拉比，我们知道你是由神那里来做师傅的，因为你所行的神迹，若没有神同在，无人能行。&rdquo; <sup class="versenum">3&nbsp;</sup>耶稣回答说：<span class="woj">&ldquo;我实实在在地告诉你：人若不重生，就不能见神的国。&rdquo;</span> <sup class="versenum">4&nbsp;</sup><u class="person underline">尼哥迪慕</u>说：&ldquo;人已经老了，如何能重生呢？岂能再进母腹生出来吗？&rdquo; <sup class="versenum">5&nbsp;</sup>耶稣说：<span class="woj">&ldquo;我实实在在地告诉你：人若不是从水和圣灵生的，就不能进神的国。</span> <sup class="versenum">6&nbsp;</sup><span class="woj">从肉身生的就是肉身，从灵生的就是灵。</span> <sup class="versenum">7&nbsp;</sup><span class="woj">我说你们必须重生，你不要以为稀奇。</span> <sup class="versenum">8&nbsp;</sup><span class="woj">风随着意思吹，你听见风的响声，却不晓得从哪里来，往哪里去。凡从圣灵生的，也是如此。&rdquo;</span> <sup class="versenum">9&nbsp;</sup><u class="person underline">尼哥迪慕</u>问他说：&ldquo;怎能有这事呢？&rdquo; <sup class="versenum">10&nbsp;</sup>耶稣回答说：<span class="woj">&ldquo;你是<span class="double-underline place">以色列</span>人的先生，还不明白这事吗？</span> <sup class="versenum">11&nbsp;</sup><span class="woj">我实实在在地告诉你：我们所说的是我们知道的，我们所见证的是我们见过的，你们却不领受我们的见证。</span> <sup class="versenum">12&nbsp;</sup><span class="woj">我对你们说地上的事，你们尚且不信，若说天上的事，如何能信呢？</span> <sup class="versenum">13&nbsp;</sup><span class="woj">除了从天降下仍旧在天的人子，没有人升过天。</span> <sup class="versenum">14&nbsp;</sup><span class="woj"><u class="person underline">摩西</u>在旷野怎样举蛇，人子也必照样被举起来，</span> <sup class="versenum">15&nbsp;</sup><span class="woj">叫一切信他的都得永生</span><span class="woj">。</span></p>

<h3>神爱世人</h3>

<p><sup class="versenum">16&nbsp;</sup><span class="woj">&ldquo;神爱世人，甚至将他的独生子赐给他们，叫一切信他的不致灭亡，反得永生。</span> <sup class="versenum">17&nbsp;</sup><span class="woj">因为神差他的儿子降世，不是要定世人的罪</span><span class="woj">，乃是要叫世人因他得救。</span> <sup class="versenum">18&nbsp;</sup><span class="woj">信他的人不被定罪，不信的人罪已经定了，因为他不信神独生子的名。</span></p>

<h3>作恶的恨光</h3>

<p><sup class="versenum">19&nbsp;</sup><span class="woj">&ldquo;光来到世间，世人因自己的行为是恶的，不爱光倒爱黑暗，定他们的罪就是在此。</span> <sup class="versenum">20&nbsp;</sup><span class="woj">凡作恶的便恨光，并不来就光，恐怕他的行为受责备；</span> <sup class="versenum">21&nbsp;</sup><span class="woj">但行真理的必来就光，要显明他所行的是靠神而行。&rdquo;</span></p>
<!--end of footnotes--></div>
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
	<li>关于神我们学到了什么</li>
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


<h2>这是关于先知和耶稣的最后一个故事。</h2>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->