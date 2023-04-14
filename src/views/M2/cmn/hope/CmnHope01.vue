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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>给被弃绝者的盼望</h1></div>
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
	<li><span><span><span lang="ZH-CN"><span>因为这是小组首次聚会，所以学习第一课时没有评估的环节。</span></span></span></span></li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span lang="ZH-CN"><span>向上看</span></span></div>
</div>

<h2>查考圣经 一起发现圣经中的宝藏</h2>

<h3>故事背景</h3>

<p>法利赛人是他们那个时代的宗教领袖，他们非常小心，不与有罪的人交往。在这个故事中，一个有罪的女人接近耶稣，法利赛人对耶稣没有打发她离开感到震惊。</p>

<h3>阅读圣经</h3>

<p>读路加福音7：36-50节两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 7:36-50</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>有罪的女人用香膏抹主</h3>

<p><sup class="versenum">36&nbsp;</sup>有一个法利赛人请耶稣和他吃饭，耶稣就到法利赛人家里去坐席。<sup class="versenum">37&nbsp;</sup>那城里有一个女人，是个罪人，知道耶稣在法利赛人家里坐席，就拿着盛香膏的玉瓶，<sup class="versenum">38&nbsp;</sup>站在耶稣背后，挨着他的脚哭，眼泪湿了耶稣的脚，就用自己的头发擦干，又用嘴连连亲他的脚，把香膏抹上。<sup class="versenum">39&nbsp;</sup>请耶稣的法利赛人看见这事，心里说：&ldquo;这人若是先知，必知道摸他的是谁，是个怎样的女人，乃是个罪人！&rdquo;<sup class="versenum">40&nbsp;</sup>耶稣对他说：&ldquo;<u class="person underline">西门</u>，我有句话要对你说。&rdquo;<u class="person underline">西门</u>说：&ldquo;夫子，请说。&rdquo;<sup class="versenum">41&nbsp;</sup>耶稣说：&ldquo;一个债主有两个人欠他的债，一个欠五十两银子，一个欠五两银子。<sup class="versenum">42&nbsp;</sup>因为他们无力偿还，债主就开恩免了他们两个人的债。这两个人哪一个更爱他呢？&rdquo;<sup class="versenum">43&nbsp;</sup><u class="person underline">西门</u>回答说：&ldquo;我想是那多得恩免的人。&rdquo;耶稣说：&ldquo;你断的不错。&rdquo;</p>

<h3>爱大赦免也大</h3>

<p><sup class="versenum">44&nbsp;</sup>于是转过来向着那女人，便对<u class="person underline">西门</u>说：&ldquo;你看见这女人吗？我进了你的家，你没有给我水洗脚，但这女人用眼泪湿了我的脚，用头发擦干；<sup class="versenum">45&nbsp;</sup>你没有与我亲嘴，但这女人从我进来的时候就不住地用嘴亲我的脚；<sup class="versenum">46&nbsp;</sup>你没有用油抹我的头，但这女人用香膏抹我的脚。<sup class="versenum">47&nbsp;</sup>所以我告诉你：她许多的罪都赦免了，因为她的爱多；但那赦免少的，他的爱就少。&rdquo;<sup class="versenum">48&nbsp;</sup>于是对那女人说：&ldquo;你的罪赦免了！&rdquo;<sup class="versenum">49&nbsp;</sup>同席的人心里说：&ldquo;这是什么人，竟赦免人的罪呢？&rdquo;<sup class="versenum">50&nbsp;</sup>耶稣对那女人说：&ldquo;你的信救了你，平平安安地回去吧！&rdquo;</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/01.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 7:36-50&nbsp;</button>
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


<p><strong>故事重述</strong></p>

<ul>
	<li>再一次读出这个故事，请小组中的一个人口头讲述这个故事。必要时小组其他成员可以根据需要做更正。</li>
</ul>

<h2>小结</h2>

<p>耶稣接纳了这个女人， 但是法利赛人拒绝了这个女人，想把她赶走。耶稣讲了一个故事来帮助法利赛人理解饶恕。他用这个女人作为一个正在经历被饶恕的人的例子。然后他对那个女人说话，告诉她她的罪已经被赦免了<strong>。</strong></p>

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