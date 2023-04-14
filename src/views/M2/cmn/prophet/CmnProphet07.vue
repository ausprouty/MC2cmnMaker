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
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣是有大能的主</h1></div>
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

<p>读出经文路加福音5：17-26两遍，其他人静听。</p>



<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 5:17-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>医治瘫子</h3>

<p><sup class="versenum">17&nbsp;</sup>有一天，耶稣教训人，有法利赛人和教法师在旁边坐着，他们是从<span class="double-underline place">加利利</span>各乡村和<span class="double-underline place">犹太</span>并<span class="double-underline place">耶路撒冷</span>来的。主的能力与耶稣同在，使他能医治病人。 <sup class="versenum">18&nbsp;</sup>有人用褥子抬着一个瘫子，要抬进去放在耶稣面前， <sup class="versenum">19&nbsp;</sup>却因人多，寻不出法子抬进去，就上了房顶，从瓦间把他连褥子缒到当中，正在耶稣面前。 <sup class="versenum">20&nbsp;</sup>耶稣见他们的信心，就对瘫子说：<span class="woj">&ldquo;你的罪赦了！&rdquo;</span> <sup class="versenum">21&nbsp;</sup>文士和法利赛人就议论说：&ldquo;这说僭妄话的是谁？除了神以外，谁能赦罪呢？&rdquo; <sup class="versenum">22&nbsp;</sup>耶稣知道他们所议论的，就说：<span class="woj">&ldquo;你们心里议论的是什么呢？</span> <sup class="versenum">23&nbsp;</sup><span class="woj">或说&lsquo;你的罪赦了&rsquo;，或说&lsquo;你起来行走&rsquo;，哪一样容易呢？</span> <sup class="versenum">24&nbsp;</sup><span class="woj">但要叫你们知道，人子在地上有赦罪的权柄。&rdquo;</span>就对瘫子说：<span class="woj">&ldquo;我吩咐你，起来，拿你的褥子回家去吧！&rdquo;</span> <sup class="versenum">25&nbsp;</sup>那人当众人面前立刻起来，拿着他所躺卧的褥子回家去，归荣耀于神。 <sup class="versenum">26&nbsp;</sup>众人都惊奇，也归荣耀于神，并且满心惧怕，说：&ldquo;我们今日看见非常的事了！&rdquo;</p>
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
	<li>下一个故事是关于耶稣被荣耀</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->