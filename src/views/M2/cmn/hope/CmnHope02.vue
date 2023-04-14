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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-hope-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>给不敬虔的人的盼望</h1></div>
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
	<li style="text-align:justify"><span><span><span lang="ZH-CN"><span>上周你是怎样顺服耶稣的</span></span><span lang="EN-US"><span>?</span></span></span></span></li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN"><span>上周你和谁分享了这个故事？</span></span></span></span></li>
</ul>

<h2 style="text-align:justify"><span><span><span lang="ZH-CN"><span>天父心意</span></span></span></span></h2>

<p style="text-align:justify"><span><span><span lang="ZH-CN"><span>鼓励彼此不断地顺服基督，并且互相提醒关于和他人分享这些故事的重要性。</span></span></span></span></p>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span lang="ZH-CN"><span>向上看</span></span></div>
</div>

<h2>查考圣经 一起发现圣经中的宝藏</h2>

<h3>故事背景</h3>

<p>我们在第一个希望的故事中了解了法利赛人，他们是宗教领袖。他们非常小心地避开非宗教人士。税吏不受法利赛人的尊重， 因为他们经常腐败，收受贿赂而不是征收适当的税款。耶稣讲述了一个崇拜上帝的法利赛人和税吏的故事，他们向上帝祷告的方式截然不同。</p>

<h3>阅读圣经</h3>

<p>朗读或观看视屏，路加福音18：9-17两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 18:9-17</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>法利赛人和税吏的祷告</h3>

<p><sup class="versenum">9&nbsp;</sup>耶稣向那些仗着自己是义人藐视别人的，设一个比喻，<sup class="versenum">10&nbsp;</sup>说：&ldquo;有两个人上殿里去祷告，一个是法利赛人，一个是税吏。<sup class="versenum">11&nbsp;</sup>法利赛人站着，自言自语地祷告说：&lsquo;神啊，我感谢你，我不像别人勒索、不义、奸淫，也不像这个税吏。<sup class="versenum">12&nbsp;</sup>我一个礼拜禁食两次，凡我所得的都捐上十分之一。&rsquo;<sup class="versenum">13&nbsp;</sup>那税吏远远地站着，连举目望天也不敢，只捶着胸说：&lsquo;神啊，开恩可怜我这个罪人！&rsquo;<sup class="versenum">14&nbsp;</sup>我告诉你们，这人回家去比那人倒算为义了。因为凡自高的，必降为卑；自卑的，必升为高。&rdquo;</p>

<h3>主接待小孩</h3>

<p><sup class="versenum">15&nbsp;</sup>有人抱着自己的婴孩来见耶稣，要他摸他们，门徒看见就责备那些人。<sup class="versenum">16&nbsp;</sup>耶稣却叫他们来，说：&ldquo;让小孩子到我这里来，不要禁止他们，因为在神国的正是这样的人。<sup class="versenum">17&nbsp;</sup>我实在告诉你们：凡要承受神国的，若不像小孩子，断不能进去。&rdquo;</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/02.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 18:9-17&nbsp;</button>
    <div class="collapsed"></div>

<h2>探索与讨论</h2>

<ul>
	<li>在这个故事中有什么地方引起了你的注意，为什么?</li>
	<li>从耶稣身上我们学到了什么?</li>
	<li>从众人身上我们学到了什么?</li>
	<li>这个故事中谁最让你感同身受，为什么？</li>
	<li>如今有什么在拦阻你跟随耶稣？</li>
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


<h2>故事重述</h2>

<ul>
	<li>再一次读出这个故事，请小组中的一个人口头讲述这个故事。必要时小组其他成员可以根据需要做更正。</li>
</ul>

<h2>小结</h2>

<p>法利赛人被耶稣定罪，是因为他的态度不谦卑和愿意悔改，税吏因他谦逊的态度而得到耶稣的认可。耶稣说，即使是像税吏这样的非宗教人士，也可以通过他谦卑的态度在上帝面前称义。我们必须认识到我们是有罪的人，并像税吏一样在上帝面前谦卑自己。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" /></p>

<div class="lesson-subtitle"><span lang="ZH-CN"><span>向前看</span></span></div>
</div>

<h2>福音行动</h2>

<ul>
	<li>结对一起练习讲述这个故事</li>
</ul>

<h2>一起选择要顺服的地方</h2>

<ul>
	<li>我们怎样可以顺服这个教导?</li>
	<li>这个星期里有没有什么人需要我们用单纯的方式服侍对方？</li>
	<li>在你生命中你认为有谁需要听到这个故事?</li>
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


<h2>祷告</h2>

<ul>
	<li>为着一起聚会的时间感谢神并祈求他帮助每一个人来更加认识他。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->