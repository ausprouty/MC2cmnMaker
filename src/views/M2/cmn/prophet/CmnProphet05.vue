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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>先知大卫和以赛亚</h1></div>
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

<p>读出经文以赛亚书53章和是诗篇第二篇两遍，其他人静听</p>


<button id="Button0" type="button" class="collapsible bible">读两遍 以赛亚书 53</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>叹人不信福音</h3>

<p class="chapter-2"><sup class="versenum">1&nbsp;</sup>我们所传的有谁信呢？耶和华的膀臂向谁显露呢？ <sup class="versenum">2&nbsp;</sup>他在耶和华面前生长如嫩芽，像根出于干地；他无佳形美容，我们看见他的时候，也无美貌使我们羡慕他。</p>

<h3>主为人藐视厌弃</h3>

<p><sup class="versenum">3&nbsp;</sup>他被藐视，被人厌弃，多受痛苦，常经忧患。他被藐视，好像被人掩面不看的一样，我们也不尊重他。</p>

<h3>身受诸苦为赎人罪</h3>

<p><sup class="versenum">4&nbsp;</sup>他诚然担当我们的忧患，背负我们的痛苦，我们却以为他受责罚，被神击打苦待了。 <sup class="versenum">5&nbsp;</sup>哪知他为我们的过犯受害，为我们的罪孽压伤。因他受的刑罚我们得平安，因他受的鞭伤我们得医治。 <sup class="versenum">6&nbsp;</sup>我们都如羊走迷，各人偏行己路，耶和华使我们众人的罪孽都归在他身上。</p>

<p><sup class="versenum">7&nbsp;</sup>他被欺压，在受苦的时候却不开口。他像羊羔被牵到宰杀之地，又像羊在剪毛的人手下无声，他也是这样不开口。 <sup class="versenum">8&nbsp;</sup>因受欺压和审判，他被夺去，至于他同世的人，谁想他受鞭打，从活人之地被剪除，是因我百姓的罪过呢？ <sup class="versenum">9&nbsp;</sup>他虽然未行强暴，口中也没有诡诈，人还使他与恶人同埋，谁知死的时候与财主同葬。</p>

<h3>救世之功必获大成</h3>

<p><sup class="versenum">10&nbsp;</sup>耶和华却定意将他压伤，使他受痛苦。耶和华以他为赎罪祭，他必看见后裔，并且延长年日，耶和华所喜悦的事必在他手中亨通。</p>

<h3>救世之功必获大成</h3>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;他必看见自己劳苦的功效，便心满意足。有许多人因认识我的义仆得称为义，并且他要担当他们的罪孽。 <sup class="versenum">12&nbsp;</sup>所以我要使他与位大的同分，与强盛的均分掳物。因为他将命倾倒以至于死，他也被列在罪犯之中，他却担当多人的罪，又为罪犯代求。&rdquo;</p>
<!--end of footnotes--></div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">读两遍 诗篇 2</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>耶和华之受膏者为王</h3>

<div class="poetry">
<p class="line"><span class="Ps-2-1 text"><sup class="versenum">1&nbsp;</sup>外邦为什么争闹，万民为什么谋算虚妄的事？</span><br />
<sup class="versenum">2&nbsp;</sup>世上的君王一齐起来，臣宰一同商议，要抵挡耶和华并他的受膏者，<br />
<sup class="versenum">3&nbsp;</sup>说：&ldquo;我们要挣开他们的捆绑，脱去他们的绳索！&rdquo;<br />
<sup class="versenum">4&nbsp;</sup>那坐在天上的必发笑，主必嗤笑他们。<br />
<sup class="versenum">5&nbsp;</sup>那时，他要在怒中责备他们，在烈怒中惊吓他们，<br />
<sup class="versenum">6&nbsp;</sup>说：&ldquo;我已经立我的君在<span class="double-underline place">锡安</span>我的圣山上了。&rdquo;<br />
<sup class="versenum">7&nbsp;</sup>受膏者说：&ldquo;我要传圣旨。耶和华曾对我说：&lsquo;你是我的儿子，我今日生你。<br />
<sup class="versenum">8&nbsp;</sup>你求我，我就将列国赐你为基业，将地极赐你为田产。<br />
<sup class="versenum">9&nbsp;</sup>你必用铁杖打破他们，你必将他们如同窑匠的瓦器摔碎。&rsquo;&rdquo;<br />
<sup class="versenum">10&nbsp;</sup>现在你们君王应当醒悟，你们世上的审判官该受管教！<br />
<sup class="versenum">11&nbsp;</sup>当存畏惧侍奉耶和华，又当存战兢而快乐。<br />
<sup class="versenum">12&nbsp;</sup>当以嘴亲子，恐怕他发怒，你们便在道中灭亡，因为他的怒气快要发作。凡投靠他的，都是有福的！</p>
</div>
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


<h2>定好一个时间聚会准备学习下一个故事</h2>

<ul>
	<li>下一个故事是关于耶稣的出生和他来的目的</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->