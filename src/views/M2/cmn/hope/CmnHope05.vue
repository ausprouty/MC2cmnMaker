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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>穿越死亡的盼望</h1></div>
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

<p>朗读或默读路加福音22：66-23:25两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 22:66-23:25</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>在公会前受审</h3>

<p><sup class="versenum">66&nbsp;</sup>天一亮，民间的众长老连祭司长带文士都聚会，把耶稣带到他们的公会里，<sup class="versenum">67&nbsp;</sup>说：&ldquo;你若是基督，就告诉我们。&rdquo;耶稣说：&ldquo;我若告诉你们，你们也不信；<sup class="versenum">68&nbsp;</sup>我若问你们，你们也不回答。<sup class="versenum">69&nbsp;</sup>从今以后，人子要坐在神权能的右边。&rdquo;<sup class="versenum">70&nbsp;</sup>他们都说：&ldquo;这样，你是神的儿子吗？&rdquo;耶稣说：&ldquo;你们所说的是。&rdquo;<sup class="versenum">71&nbsp;</sup>他们说：&ldquo;何必再用见证呢？他亲口所说的，我们都亲自听见了。&rdquo;</p>

<h3>将耶稣解交彼拉多</h3>

<p><sup class="versenum">1 </sup>众人都起来，把耶稣解到<u class="person underline">彼拉多</u>面前，<sup class="versenum">2&nbsp;</sup>就告他说：&ldquo;我们见这人诱惑国民，禁止纳税给恺撒，并说自己是基督，是王。&rdquo;<sup class="versenum">3&nbsp;</sup><u class="person underline">彼拉多</u>问耶稣说：&ldquo;你是犹太人的王吗？&rdquo;耶稣回答说：&ldquo;你说的是。&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">彼拉多</u>对祭司长和众人说：&ldquo;我查不出这人有什么罪来。&rdquo;<sup class="versenum">5&nbsp;</sup>但他们越发极力地说：&ldquo;他煽惑百姓，在犹太遍地传道，从加利利起直到这里了。&rdquo;<sup class="versenum">6&nbsp;</sup><u class="person underline">彼拉多</u>一听见，就问：&ldquo;这人是加利利人吗？&rdquo;<sup class="versenum">7&nbsp;</sup>既晓得耶稣属<u class="person underline">希律</u>所管，就把他送到<u class="person underline">希律</u>那里去。那时<u class="person underline">希律</u>正在耶路撒冷。</p>

<h3>耶稣在希律前被藐视</h3>

<p><sup class="versenum">8&nbsp;</sup><u class="person underline">希律</u>看见耶稣，就很欢喜，因为听见过他的事，久已想要见他，并且指望看他行一件神迹。<sup class="versenum">9&nbsp;</sup>于是问他许多的话，耶稣却一言不答。<sup class="versenum">10&nbsp;</sup>祭司长和文士都站着，极力地告他。<sup class="versenum">11&nbsp;</sup><u class="person underline">希律</u>和他的兵丁就藐视耶稣，戏弄他，给他穿上华丽衣服，把他送回<u class="person underline">彼拉多</u>那里去。<sup class="versenum">12&nbsp;</sup>从前<u class="person underline">希律</u>和<u class="person underline">彼拉多</u>彼此有仇，在那一天就成了朋友。</p>

<h3>在彼拉多前受审</h3>

<p><sup class="versenum">13&nbsp;</sup><u class="person underline">彼拉多</u>传齐了祭司长和官府并百姓，<sup class="versenum">14&nbsp;</sup>就对他们说：&ldquo;你们解这人到我这里，说他是诱惑百姓的。看哪，我也曾将你们告他的事在你们面前审问他，并没有查出他什么罪来。<sup class="versenum">15&nbsp;</sup>就是<u class="person underline">希律</u>也是如此，所以把他送回来。可见他没有做什么该死的事。<sup class="versenum">16&nbsp;</sup>故此，我要责打他，把他释放了。&rdquo;</p>

<h3>除掉耶稣释放巴拉巴</h3>

<p><sup class="versenum">18&nbsp;</sup>众人却一齐喊着说：&ldquo;除掉这个人！释放<u class="person underline">巴拉巴</u>给我们！&rdquo;<sup class="versenum">19&nbsp;</sup>这<u class="person underline">巴拉巴</u>是因在城里作乱杀人，下在监里的。<sup class="versenum">20&nbsp;</sup><u class="person underline">彼拉多</u>愿意释放耶稣，就又劝解他们。<sup class="versenum">21&nbsp;</sup>无奈他们喊着说：&ldquo;钉他十字架！钉他十字架！&rdquo;<sup class="versenum">22&nbsp;</sup><u class="person underline">彼拉多</u>第三次对他们说：&ldquo;为什么呢？这人做了什么恶事呢？我并没有查出他什么该死的罪来。所以，我要责打他，把他释放了。&rdquo;<sup class="versenum">23&nbsp;</sup>他们大声催逼<u class="person underline">彼拉多</u>，求他把耶稣钉在十字架上，他们的声音就得了胜。<sup class="versenum">24&nbsp;</sup><u class="person underline">彼拉多</u>这才照他们所求的定案，<sup class="versenum">25&nbsp;</sup>把他们所求的那作乱杀人下在监里的释放了，把耶稣交给他们，任凭他们的意思行。</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/05.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 22:66-23:25&nbsp;</button>
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