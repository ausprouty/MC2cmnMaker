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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>盼望带来饶恕</h1></div>
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

<h3>故事背景</h3>

<h3>阅读圣经</h3>

<p>朗读或默读马太福音18：21-35两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音 18:21-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>饶恕七十个七次</h3>

<p><sup class="versenum">21&nbsp;</sup>那时，<u class="person underline">彼得</u>进前来，对耶稣说：&ldquo;主啊，我弟兄得罪我，我当饶恕他几次呢？到七次可以吗？&rdquo;<sup class="versenum">22&nbsp;</sup>耶稣说：&ldquo;我对你说，不是到七次，乃是到七十个七次。<sup class="versenum">23&nbsp;</sup>天国好像一个王要和他仆人算账。<sup class="versenum">24&nbsp;</sup>才算的时候，有人带了一个欠一千万银子的来。<sup class="versenum">25&nbsp;</sup>因为他没有什么偿还之物，主人吩咐把他和他妻子儿女并一切所有的都卖了偿还。<sup class="versenum">26&nbsp;</sup>那仆人就俯伏拜他，说：&lsquo;主啊，宽容我！将来我都要还清。&rsquo;<sup class="versenum">27&nbsp;</sup>那仆人的主人就动了慈心，把他释放了，并且免了他的债。</p>

<h3>不怜悯人的必不蒙怜悯</h3>

<p><sup class="versenum">28&nbsp;</sup>&ldquo;那仆人出来，遇见他的一个同伴欠他十两银子，便揪着他，掐住他的喉咙，说：&lsquo;你把所欠的还我！&rsquo;<sup class="versenum">29&nbsp;</sup>他的同伴就俯伏央求他，说：&lsquo;宽容我吧！将来我必还清。&rsquo;<sup class="versenum">30&nbsp;</sup>他不肯，竟去把他下在监里，等他还了所欠的债。<sup class="versenum">31&nbsp;</sup>众同伴看见他所做的事，就甚忧愁，去把这事都告诉了主人。<sup class="versenum">32&nbsp;</sup>于是主人叫了他来，对他说：&lsquo;你这恶奴才！你央求我，我就把你所欠的都免了。<sup class="versenum">33&nbsp;</sup>你不应当怜恤你的同伴，像我怜恤你吗？&rsquo;<sup class="versenum">34&nbsp;</sup>主人就大怒，把他交给掌刑的，等他还清了所欠的债。<sup class="versenum">35&nbsp;</sup>你们各人若不从心里饶恕你的弟兄，我天父也要这样待你们了。&rdquo;</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/04.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音 18:21-35&nbsp;</button>
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