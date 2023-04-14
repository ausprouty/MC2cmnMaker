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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣被荣耀</h1></div>
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

<p>读出经文路加福音23：26-24：7，35-36两遍，其他人静听。</p>



<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音 23:26-24:7,35-36</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div><!-- begin bible -->
<div class="passage-text">
<div class="passage-content passage-class-0">
<div class="version-CUVMPS result-text-style-normal text-html">
<p><sup class="versenum">26&nbsp;</sup>带耶稣去的时候，有一个<span class="double-underline place">古利奈</span>人<u class="person underline">西门</u>从乡下来，他们就抓住他，把十字架搁在他身上，叫他背着跟随耶稣。</p>

<h3>许多人为耶稣号啕痛哭</h3>

<p><sup class="versenum">27&nbsp;</sup>有许多百姓跟随耶稣，内中有好些妇女，妇女们为他号啕痛哭。 <sup class="versenum">28&nbsp;</sup>耶稣转身对她们说：<span class="woj">&ldquo;<span class="double-underline place">耶路撒冷</span>的女子，不要为我哭，当为自己和自己的儿女哭。</span> <sup class="versenum">29&nbsp;</sup><span class="woj">因为日子要到，人必说：&lsquo;不生育的和未曾怀胎的、未曾乳养婴孩的有福了！&rsquo;</span> <sup class="versenum">30&nbsp;</sup><span class="woj">那时，人要向大山说&lsquo;倒在我们身上！&rsquo;，向小山说&lsquo;遮盖我们！&rsquo;。</span> <sup class="versenum">31&nbsp;</sup><span class="woj">这些事既行在有汁水的树上，那枯干的树将来怎么样呢？&rdquo;</span></p>

<p><sup class="versenum">32&nbsp;</sup>又有两个犯人，和耶稣一同带来处死。</p>

<h3>耶稣被钉十字架</h3>

<p><sup class="versenum">33&nbsp;</sup>到了一个地方，名叫髑髅地，就在那里把耶稣钉在十字架上，又钉了两个犯人，一个在左边，一个在右边。 <sup class="versenum">34&nbsp;</sup>当下耶稣说：<span class="woj">&ldquo;父啊，赦免他们！因为他们所做的他们不晓得。&rdquo;</span>兵丁就拈阄分他的衣服。 <sup class="versenum">35&nbsp;</sup>百姓站在那里观看。官府也嗤笑他，说：&ldquo;他救了别人，他若是基督，神所拣选的，可以救自己吧！&rdquo; <sup class="versenum">36&nbsp;</sup>兵丁也戏弄他，上前拿醋送给他喝， <sup class="versenum">37&nbsp;</sup>说：&ldquo;你若是<span class="double-underline place">犹太</span>人的王，可以救自己吧！&rdquo; <sup class="versenum">38&nbsp;</sup>在耶稣以上有一个牌子，写着：&ldquo;这是<span class="double-underline place">犹太</span>人的王。&rdquo;</p>

<h3>犯人求主记念</h3>

<p><sup class="versenum">39&nbsp;</sup>那同钉的两个犯人，有一个讥诮他说：&ldquo;你不是基督吗？可以救自己和我们吧！&rdquo; <sup class="versenum">40&nbsp;</sup>那一个就应声责备他说：&ldquo;你既是一样受刑的，还不怕神吗？ <sup class="versenum">41&nbsp;</sup>我们是应该的，因我们所受的与我们所做的相称，但这个人没有做过一件不好的事。&rdquo; <sup class="versenum">42&nbsp;</sup>就说：&ldquo;耶稣啊，你得国降临的时候，求你记念我！&rdquo; <sup class="versenum">43&nbsp;</sup>耶稣对他说：<span class="woj">&ldquo;我实在告诉你：今日你要同我在乐园里了！&rdquo;</span></p>

<h3>耶稣死的景象</h3>

<p><sup class="versenum">44&nbsp;</sup>那时约有午正，遍地都黑暗了，直到申初， <sup class="versenum">45&nbsp;</sup>日头变黑了，殿里的幔子从当中裂为两半。 <sup class="versenum">46&nbsp;</sup>耶稣大声喊着说：<span class="woj">&ldquo;父啊，我将我的灵魂交在你手里！&rdquo;</span>说了这话，气就断了。 <sup class="versenum">47&nbsp;</sup>百夫长看见所成的事，就归荣耀于神，说：&ldquo;这真是个义人！&rdquo; <sup class="versenum">48&nbsp;</sup>聚集观看的众人见了这所成的事，都捶着胸回去了。 <sup class="versenum">49&nbsp;</sup>还有一切与耶稣熟识的人和从<span class="double-underline place">加利利</span>跟着他来的妇女们，都远远地站着看这些事。</p>

<h3>安放在新坟墓里</h3>

<p><sup class="versenum">50&nbsp;</sup>有一个人名叫<u class="person underline">约瑟</u>，是个议士，为人善良公义， <sup class="versenum">51&nbsp;</sup>众人所谋所为他并没有附从；他本是<span class="double-underline place">犹太</span><span class="double-underline place">亚利马太</span>城里素常盼望神国的人。 <sup class="versenum">52&nbsp;</sup>这人去见<u class="person underline">彼拉多</u>，求耶稣的身体。 <sup class="versenum">53&nbsp;</sup>就取下来，用细麻布裹好，安放在石头凿成的坟墓里，那里头从来没有葬过人。 <sup class="versenum">54&nbsp;</sup>那日是预备日，安息日也快到了。 <sup class="versenum">55&nbsp;</sup>那些从<span class="double-underline place">加利利</span>和耶稣同来的妇女跟在后面，看见了坟墓和他的身体怎样安放。 <sup class="versenum">56&nbsp;</sup>她们就回去，预备了香料香膏。</p>

<p>她们在安息日便遵着诫命安息了。</p>

<h3>从死里复活</h3>

<p class="chapter-2"><sup class="versenum">1&nbsp;</sup>七日的头一日，黎明的时候，那些妇女带着所预备的香料来到坟墓前， <sup class="versenum">2&nbsp;</sup>看见石头已经从坟墓滚开了。 <sup class="versenum">3&nbsp;</sup>她们就进去，只是不见主耶稣的身体。 <sup class="versenum">4&nbsp;</sup>正在猜疑之间，忽然有两个人站在旁边，衣服放光。 <sup class="versenum">5&nbsp;</sup>妇女们惊怕，将脸伏地。那两个人就对她们说：&ldquo;为什么在死人中找活人呢？ <sup class="versenum">6&nbsp;</sup>他不在这里，已经复活了。当记念他还在<span class="double-underline place">加利利</span>的时候怎样告诉你们， <sup class="versenum">7&nbsp;</sup>说：<span class="woj">&lsquo;人子必须被交在罪人手里，钉在十字架上，第三日复活。&rsquo;&rdquo;</span></p>

<p class="chapter-2"><span class="woj">....</span></p>

<p><sup class="versenum">35&nbsp;</sup>两个人就把路上所遇见和掰饼的时候怎么被他们认出来的事，都述说了一遍。</p>

<h3>显现在耶路撒冷</h3>

<p><sup class="versenum">36&nbsp;</sup>正说这话的时候，耶稣亲自站在他们当中，说：<span class="woj">&ldquo;愿你们平安！&rdquo;</span></p>


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
	<li>下一个故事是关于我们有一个选择</li>
	<li>下次你们想要什么时候聚会？</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->