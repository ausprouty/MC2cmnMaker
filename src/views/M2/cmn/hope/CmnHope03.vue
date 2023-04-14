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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>盼望带来事情的改变</h1></div>
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

<h2 style="text-align:justify"><span><span><strong><span lang="ZH-CN"><span>庆贺实践</span></span></strong></span></span></h2>

<p style="text-align:justify"><span><span><span lang="ZH-CN"><span>鼓励彼此不断地顺服基督，并且互相提醒关于和他人分享这些故事的重要性。</span></span></span></span></p>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span lang="ZH-CN"><span>向上看</span></span></div>
</div>

<h2>查考圣经 一起发现圣经中的宝藏</h2>

<h3>故事背景</h3>

<p>撒该是个不诚实的人，他的好奇心将他引向耶稣基督。他的名字在希伯来语中的意思是&ldquo;纯洁的&rdquo;或&ldquo;无辜的&rdquo;，他是个矮个子，因为他想见耶稣，撒该不得不爬上一棵树，才能瞥见经过的耶稣。</p>

<h3>阅读圣经</h3>

<p style="text-align:justify"><span><span><strong><span lang="ZH-CN"><span>朗读或观看路加福音</span></span></strong><strong><span lang="EN-US"><span>19</span></span></strong><strong><span lang="ZH-CN"><span>：</span></span></strong><strong><span lang="EN-US"><span>1-10</span></span></strong><strong><span lang="ZH-CN"><span>两遍，其他人静听。</span></span></strong></span></span></p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 19:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>税吏撒该</h3>

<p><sup class="versenum">1 </sup>耶稣进了耶利哥，正经过的时候，<sup class="versenum">2&nbsp;</sup>有一个人名叫<u class="person underline">撒该</u>，做税吏长，是个财主，<sup class="versenum">3&nbsp;</sup>他要看看耶稣是怎样的人。只因人多，他的身量又矮，所以不得看见。<sup class="versenum">4&nbsp;</sup>就跑到前头，爬上桑树，要看耶稣，因为耶稣必从那里经过。<sup class="versenum">5&nbsp;</sup>耶稣到了那里，抬头一看，对他说：&ldquo;<u class="person underline">撒该</u>，快下来！今天我必住在你家里。&rdquo;<sup class="versenum">6&nbsp;</sup>他就急忙下来，欢欢喜喜地接待耶稣。<sup class="versenum">7&nbsp;</sup>众人看见，都私下议论说：&ldquo;他竟到罪人家里去住宿！&rdquo;<sup class="versenum">8&nbsp;</sup><u class="person underline">撒该</u>站着对主说：&ldquo;主啊，我把所有的一半给穷人，我若讹诈了谁，就还他四倍。&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是<u class="person underline">亚伯拉罕</u>的子孙。<sup class="versenum">10&nbsp;</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/03.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 19:1-10&nbsp;</button>
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

<p>撒该对耶稣很好奇，他想了解更多，耶稣接受了他，就去他家吃饭和谈话，撒该希望成为一个不一样的人，这种希望和他对耶稣的信心改变了他的生命，以至于他从那些他腐败虐待的人那里归还了钱，他展示了生命改变的证据。</p>

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


<h2>9祷告</h2>

<ul>
	<li>为着一起聚会的时间感谢神并祈求他帮助每一个人来更加认识他。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->