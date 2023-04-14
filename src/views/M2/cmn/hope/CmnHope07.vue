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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>盼望正在等候着你</h1></div>
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

<p>朗读或默读路加福音15:11-32两遍，其他人静听。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 15:11-32</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<h3>浪子的比喻</h3>

<p><sup class="versenum">11&nbsp;</sup>耶稣又说：&ldquo;一个人有两个儿子。<sup class="versenum">12&nbsp;</sup>小儿子对父亲说：&lsquo;父亲，请你把我应得的家业分给我。&rsquo;他父亲就把产业分给他们。<sup class="versenum">13&nbsp;</sup>过了不多几日，小儿子就把他一切所有的都收拾起来，往远方去了。在那里任意放荡，浪费资财。<sup class="versenum">14&nbsp;</sup>既耗尽了一切所有的，又遇着那地方大遭饥荒，就穷苦起来。<sup class="versenum">15&nbsp;</sup>于是去投靠那地方的一个人，那人打发他到田里去放猪。<sup class="versenum">16&nbsp;</sup>他恨不得拿猪所吃的豆荚充饥，也没有人给他。<sup class="versenum">17&nbsp;</sup>他醒悟过来，就说：&lsquo;我父亲有多少的雇工，口粮有余，我倒在这里饿死吗？<sup class="versenum">18&nbsp;</sup>我要起来，到我父亲那里去，向他说：&ldquo;父亲，我得罪了天，又得罪了你。<sup class="versenum">19&nbsp;</sup>从今以后，我不配称为你的儿子，把我当做一个雇工吧！&rdquo;&rsquo;<sup class="versenum">20&nbsp;</sup>于是起来，往他父亲那里去。相离还远，他父亲看见，就动了慈心，跑去抱着他的颈项，连连与他亲嘴。<sup class="versenum">21&nbsp;</sup>儿子说：&lsquo;父亲，我得罪了天，又得罪了你。从今以后，我不配称为你的儿子。&rsquo;<sup class="versenum">22&nbsp;</sup>父亲却吩咐仆人说：&lsquo;把那上好的袍子快拿出来给他穿，把戒指戴在他指头上，把鞋穿在他脚上，<sup class="versenum">23&nbsp;</sup>把那肥牛犊牵来宰了，我们可以吃喝快乐！<sup class="versenum">24&nbsp;</sup>因为我这个儿子是死而复活，失而又得的。&rsquo;他们就快乐起来。<sup class="versenum">25&nbsp;</sup>那时，大儿子正在田里。他回来，离家不远，听见作乐跳舞的声音，<sup class="versenum">26&nbsp;</sup>便叫过一个仆人来，问是什么事。<sup class="versenum">27&nbsp;</sup>仆人说：&lsquo;你兄弟来了，你父亲因为得他无灾无病地回来，把肥牛犊宰了。&rsquo;<sup class="versenum">28&nbsp;</sup>大儿子却生气，不肯进去。他父亲就出来劝他。<sup class="versenum">29&nbsp;</sup>他对父亲说：&lsquo;我服侍你这多年，从来没有违背过你的命，你并没有给我一只山羊羔，叫我和朋友一同快乐。<sup class="versenum">30&nbsp;</sup>但你这个儿子和娼妓吞尽了你的产业，他一来了，你倒为他宰了肥牛犊！&rsquo;<sup class="versenum">31&nbsp;</sup>父亲对他说：&lsquo;儿啊！你常和我同在，我一切所有的都是你的。<sup class="versenum">32&nbsp;</sup>只是你这个兄弟是死而复活、失而又得的，所以我们理当欢喜快乐。&rsquo;&rdquo;</p>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/cmn/video/hope/07.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音 15:11-32&nbsp;</button>
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