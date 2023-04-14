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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>从死里复活的盼望</h1></div>
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

<h2>庆贺实践</h2>

<p>鼓励彼此不断地顺服基督，并且互相提醒关于和他人分享这些故事的重要性。</p>

<ul>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span lang="ZH-CN"><span>向上看</span></span></div>
</div>

<h2>查考圣经 一起发现圣经中的宝藏</h2>

<h3>故事背景</h3>

<h3>阅读圣经</h3>

<p>朗读或默读路加福音24：1-20两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 24:1-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>从死里复活</h3>

<p><sup class="versenum">1 </sup>七日的头一日，黎明的时候，那些妇女带着所预备的香料来到坟墓前，<sup class="versenum">2&nbsp;</sup>看见石头已经从坟墓滚开了。<sup class="versenum">3&nbsp;</sup>她们就进去，只是不见主耶稣的身体。<sup class="versenum">4&nbsp;</sup>正在猜疑之间，忽然有两个人站在旁边，衣服放光。<sup class="versenum">5&nbsp;</sup>妇女们惊怕，将脸伏地。那两个人就对她们说：&ldquo;为什么在死人中找活人呢？<sup class="versenum">6&nbsp;</sup>他不在这里，已经复活了。当记念他还在加利利的时候怎样告诉你们，<sup class="versenum">7&nbsp;</sup>说：&lsquo;人子必须被交在罪人手里，钉在十字架上，第三日复活。&rsquo;&rdquo;<sup class="versenum">8&nbsp;</sup>她们就想起耶稣的话来，<sup class="versenum">9&nbsp;</sup>便从坟墓那里回去，把这一切事告诉十一个使徒和其余的人。<sup class="versenum">10&nbsp;</sup>那告诉使徒的就是抹大拉的<u class="person underline">马利亚</u>和<u class="person underline">约亚拿</u>，并<u class="person underline">雅各</u>的母亲<u class="person underline">马利亚</u>，还有与她们在一处的妇女。<sup class="versenum">11&nbsp;</sup>她们这些话使徒以为是胡言，就不相信。<sup class="versenum">12&nbsp;</sup><u class="person underline">彼得</u>起来，跑到坟墓前，低头往里看，见细麻布独在一处，就回去了，心里稀奇所成的事。</p>

<h3>耶稣与两个行路的谈论</h3>

<p><sup class="versenum">13&nbsp;</sup>正当那日，门徒中有两个人往一个村子去。这村子名叫以马忤斯，离耶路撒冷约有二十五里。<sup class="versenum">14&nbsp;</sup>他们彼此谈论所遇见的这一切事。<sup class="versenum">15&nbsp;</sup>正谈论相问的时候，耶稣亲自就近他们，和他们同行，<sup class="versenum">16&nbsp;</sup>只是他们的眼睛迷糊了，不认识他。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;你们走路彼此谈论的是什么事呢？&rdquo;他们就站住，脸上带着愁容。<sup class="versenum">18&nbsp;</sup>二人中有一个名叫<u class="person underline">革流巴</u>的回答说：&ldquo;你在耶路撒冷作客，还不知道这几天在那里所出的事吗？&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣说：&ldquo;什么事呢？&rdquo;他们说：&ldquo;就是拿撒勒人耶稣的事。他是个先知，在神和众百姓面前说话行事都有大能，<sup class="versenum">20&nbsp;</sup>祭司长和我们的官府竟把他解去，定了死罪，钉在十字架上。</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/06.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 24:1-20&nbsp;</button>
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