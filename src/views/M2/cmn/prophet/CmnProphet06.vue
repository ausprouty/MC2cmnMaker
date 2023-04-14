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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣的出生和他来的目的</h1></div>
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

<p>读出经文路加福音1：16-38，2：1-20两遍，其他人静听。</p>



<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 1:26-38</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>加百列预言耶稣的生</h3>

<p><sup class="versenum">26&nbsp;</sup>到了第六个月，天使<u class="person underline">加百列</u>奉神的差遣往<span class="double-underline place">加利利</span>的一座城去，这城名叫<span class="double-underline place">拿撒勒</span>； <sup class="versenum">27&nbsp;</sup>到一个童女那里，是已经许配<u class="person underline">大卫</u>家的一个人，名叫<u class="person underline">约瑟</u>，童女的名字叫<u class="person underline">马利亚</u>。 <sup class="versenum">28&nbsp;</sup>天使进去，对她说：&ldquo;蒙大恩的女子，我问你安，主和你同在了！&rdquo; <sup class="versenum">29&nbsp;</sup><u class="person underline">马利亚</u>因这话就很惊慌，又反复思想这样问安是什么意思。 <sup class="versenum">30&nbsp;</sup>天使对她说：&ldquo;<u class="person underline">马利亚</u>，不要怕，你在神面前已经蒙恩了。 <sup class="versenum">31&nbsp;</sup>你要怀孕生子，可以给他起名叫耶稣。 <sup class="versenum">32&nbsp;</sup>他要为大，称为至高者的儿子；主神要把他祖<u class="person underline">大卫</u>的位给他， <sup class="versenum">33&nbsp;</sup>他要做<span class="double-underline place">雅各</span>家的王，直到永远；他的国也没有穷尽。&rdquo; <sup class="versenum">34&nbsp;</sup><u class="person underline">马利亚</u>对天使说：&ldquo;我没有出嫁，怎么有这事呢？&rdquo; <sup class="versenum">35&nbsp;</sup>天使回答说：&ldquo;圣灵要临到你身上，至高者的能力要荫庇你。因此，所要生的圣者必称为神的儿子。 <sup class="versenum">36&nbsp;</sup>况且你的亲戚<u class="person underline">伊利莎白</u>，在年老的时候也怀了男胎，就是那素来称为不生育的，现在有孕六个月了。 <sup class="versenum">37&nbsp;</sup>因为出于神的话，没有一句不带能力的。&rdquo; <sup class="versenum">38&nbsp;</sup><u class="person underline">马利亚</u>说：&ldquo;我是主的使女，情愿照你的话成就在我身上！&rdquo;天使就离开她去了。</p>
<!--end of footnotes--></div>
</div>
</div>
<!-- end bible --></div>
<!-- end bible -->

<p class="bible"></p>

</div>

<button id="Button1" type="button" class="collapsible bible">读两遍 路加福音 2:1-20</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<h3>耶稣降生</h3>

<p class="chapter-1"><sup class="versenum">1&nbsp;</sup>当那些日子，恺撒<u class="person underline">奥古斯都</u>有旨意下来，叫天下人民都报名上册。 <sup class="versenum">2&nbsp;</sup>这是<u class="person underline">居里扭</u>做<span class="double-underline place">叙利亚</span>巡抚的时候，头一次行报名上册的事。 <sup class="versenum">3&nbsp;</sup>众人各归各城，报名上册。 <sup class="versenum">4&nbsp;</sup><u class="person underline">约瑟</u>也从<span class="double-underline place">加利利</span>的<span class="double-underline place">拿撒勒</span>城上<span class="double-underline place">犹太</span>去，到了<u class="person underline">大卫</u>的城，名叫<span class="double-underline place">伯利恒</span>，因他本是<u class="person underline">大卫</u>一族一家的人， <sup class="versenum">5&nbsp;</sup>要和他所聘之妻<u class="person underline">马利亚</u>一同报名上册。那时<u class="person underline">马利亚</u>的身孕已经重了。 <sup class="versenum">6&nbsp;</sup>他们在那里的时候，<u class="person underline">马利亚</u>的产期到了， <sup class="versenum">7&nbsp;</sup>就生了头胎的儿子，用布包起来，放在马槽里，因为客店里没有地方。</p>

<h3>天使报喜信给牧羊的人</h3>

<p><sup class="versenum">8&nbsp;</sup>在<span class="double-underline place">伯利恒</span>之野地里有牧羊的人，夜间按着更次看守羊群。 <sup class="versenum">9&nbsp;</sup>有主的使者站在他们旁边，主的荣光四面照着他们，牧羊的人就甚惧怕。 <sup class="versenum">10&nbsp;</sup>那天使对他们说：&ldquo;不要惧怕，我报给你们大喜的信息，是关乎万民的。 <sup class="versenum">11&nbsp;</sup>因今天在<u class="person underline">大卫</u>的城里，为你们生了救主，就是主基督。 <sup class="versenum">12&nbsp;</sup>你们要看见一个婴孩，包着布，卧在马槽里，那就是记号了。&rdquo; <sup class="versenum">13&nbsp;</sup>忽然有一大队天兵，同那天使赞美神说： <sup class="versenum">14&nbsp;</sup>&ldquo;在至高之处荣耀归于神！在地上平安归于他所喜悦的人！&rdquo;</p>

<p><sup class="versenum">15&nbsp;</sup>众天使离开他们升天去了，牧羊的人彼此说：&ldquo;我们往<span class="double-underline place">伯利恒</span>去，看看所成的事，就是主所指示我们的。&rdquo; <sup class="versenum">16&nbsp;</sup>他们急忙去了，就寻见<u class="person underline">马利亚</u>和<u class="person underline">约瑟</u>，又有那婴孩卧在马槽里。 <sup class="versenum">17&nbsp;</sup>既然看见，就把天使论这孩子的话传开了。 <sup class="versenum">18&nbsp;</sup>凡听见的，就诧异牧羊之人对他们所说的话。 <sup class="versenum">19&nbsp;</sup><u class="person underline">马利亚</u>却把这一切的事存在心里，反复思想。 <sup class="versenum">20&nbsp;</sup>牧羊的人回去了，因所听见、所看见的一切事正如天使向他们所说的，就归荣耀于神，赞美他。</p>
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


<h2>定好一个时间聚会准备学习下一个故事</h2>

<ul>
	<li><span><span><span lang="ZH-CN"><span>下一个故事是关于耶稣是有大能的主</span></span></span></span></li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->