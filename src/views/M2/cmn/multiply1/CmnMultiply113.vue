<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>委身教会生活</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课让我们知道初代信徒固定聚会中有：崇拜、祷告、过团契生活、学习上帝的话语、彼此相爱，以及去接触那些还不认识耶稣基督的人，并带领人来跟随基督。带领人跟随耶稣，不是一个人能做到的，必须彼此委身。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇9：1-5</p>

<p class="back bible"><sup>1</sup>普天下当向耶和华欢呼。<sup>2</sup>你们当乐意侍奉耶和华，当来向他歌唱。<sup>3</sup>你们当晓得耶和华是神。我们是他造的，也是属他的；我们是他的民，也是他草场的羊。<sup>4</sup>当称谢进入他的门，当赞美进入他的院；当感谢他，称颂他的名。<sup>5</sup>因为耶和华本为善，他的慈爱存到永远，他的信实直到万代。</p>

</div>

<ul class="back">
	<li class="back">现在让我们用诗歌敬拜赞美我们的神，因祂配得！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太5:9</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>使人和睦的人有福了！因为他们必称为神的儿子。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">整本圣经最伟大的应许之一就在大使命中，但我们常常忽略了它。我们更多关注在&ldquo;使万民作主门徒&rdquo;的命令上，却常忽略了后面主耶稣给我们的应许：&ldquo;我就常与你们同在，直到世界的末了&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 太28:20</span>下）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
	<!-- end bible --></div>
	在我们去接触人或造就门徒的过程中，当我们感到有挑战和恐惧时，请记得主耶稣给我们的应许&mdash;&mdash;祂一直与我们同在。</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><ul>
	<li class="up"><strong>+ 故事背景</strong></li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">在犹太教的五旬节期间，犹太人从各国各地来到耶路撒冷。当时一百二十个门徒聚集在一起，上帝差圣灵降临在他们身上。藉着圣灵的能力，这一百二十个门徒开始说起各国客旅的家乡话。接着，彼得开始向群众讲道，谈论耶稣的受死和复活，证明祂就是弥赛亚。于是，三千人相信且受了洗。不过，在他们相信之后，发生什么事呢？</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《使徒行传2:41-47, 13:1-3》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 使徒行传2:41-47</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">41&nbsp;</sup>于是，领受他话的人就受了洗，那一天，门徒约添了三千人；<sup class="versenum">42&nbsp;</sup>都恒心遵守使徒的教训，彼此交接、掰饼、祈祷。</p>

<p><sup class="versenum">43&nbsp;</sup>众人都惧怕，使徒又行了许多奇事神迹。<sup class="versenum">44&nbsp;</sup>信的人都在一处，凡物公用，<sup class="versenum">45&nbsp;</sup>并且卖了田产、家业，照各人所需用的分给各人。<sup class="versenum">46&nbsp;</sup>他们天天同心合意恒切地在殿里，且在家中掰饼，存着欢喜、诚实的心用饭，<sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
<!-- end bible -->

<p></p>

</div>


<button id="MC2/cmn/video/multiply1/113.mp4" type="button" class="external-movie">
         观看&nbsp;使徒行传2:42-47&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 使徒行传13:1-3</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">1 </sup>在安提阿的教会中有几位先知和教师，就是<u class="person underline">巴拿巴</u>和称呼<u class="person underline">尼结</u>的<u class="person underline">西面</u>、古利奈人<u class="person underline">路求</u>、与分封之王<u class="person underline">希律</u>同养的<u class="person underline">马念</u>并<u class="person underline">扫罗</u>。<sup class="versenum">2&nbsp;</sup>他们侍奉主、禁食的时候，圣灵说：&ldquo;要为我分派<u class="person underline">巴拿巴</u>和<u class="person underline">扫罗</u>，去做我召他们所做的工。&rdquo;<sup class="versenum">3&nbsp;</sup>于是禁食、祷告，按手在他们头上，就打发他们去了。</p>
<!-- end bible -->

<p></p>

</div>


<button id="MC2/cmn/video/multiply1/113-1.mp4" type="button" class="external-movie">
         观看&nbsp;使徒行传13:1-3&nbsp;</button>
    <div class="collapsed"></div>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">你发现初期教会拥有哪些特质？</li>
	</ul>
	</li>
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


<ul class="up">
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="up">圣灵引导初代信徒固定聚集，一起敬拜、祷告、团契、研读神的话、彼此相爱，并得着那些还不认识基督的人。使徒行传中各个地方的人，他们成为基督的跟随者时，也同样彼此委身。这就是对地方教会的描述！   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply1/M1L13.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply1/M1L13.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply1/M1L13.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<ul class="up">
	<li class="up">健康教会：徒2群体（<span class="popup-link" @click = "popUp('pop3')"> 徒2:42-47</span>，

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>都恒心遵守使徒的教训，彼此交接、掰饼、祈祷。</p>

	<p><sup class="versenum">43&nbsp;</sup>众人都惧怕，使徒又行了许多奇事神迹。<sup class="versenum">44&nbsp;</sup>信的人都在一处，凡物公用，<sup class="versenum">45&nbsp;</sup>并且卖了田产、家业，照各人所需用的分给各人。<sup class="versenum">46&nbsp;</sup>他们天天同心合意恒切地在殿里，且在家中掰饼，存着欢喜、诚实的心用饭，<sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 徒13:1-3</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>在安提阿的教会中有几位先知和教师，就是<u class="person underline">巴拿巴</u>和称呼<u class="person underline">尼结</u>的<u class="person underline">西面</u>、古利奈人<u class="person underline">路求</u>、与分封之王<u class="person underline">希律</u>同养的<u class="person underline">马念</u>并<u class="person underline">扫罗</u>。<sup class="versenum">2&nbsp;</sup>他们侍奉主、禁食的时候，圣灵说：&ldquo;要为我分派<u class="person underline">巴拿巴</u>和<u class="person underline">扫罗</u>，去做我召他们所做的工。&rdquo;<sup class="versenum">3&nbsp;</sup>于是禁食、祷告，按手在他们头上，就打发他们去了。</p>
	<!-- end bible --></div>

	<ul class="up">
		<li class="up">健康教会所含有的特质，包括敬拜赞美、团契生活、教导并遵行神的话、祷告、圣餐、洗礼、彼此相爱、见证福音、奉献、关怀型领袖。</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

</div>

<ul class="up">
</ul>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward">使徒行传2:42</p>

<p class="forward bible">都恒心遵守使徒的教训，彼此交接、擘饼、祈祷。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward"><strong>教会的定义</strong></li>
	<li class="nobreak-final-final"><strong>&ldquo;教会&rdquo;</strong>这个词在旧约从来出现。圣经第一次提到&ldquo;教会&rdquo;是在新约耶稣基督提到：&ldquo;我要把我的教会建造在这磐石上&rdquo;(<span class="popup-link" @click = "popUp('pop10')"> 太16:18</span>)。
	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>我还告诉你：你是<u class="person underline">彼得</u>，我要把我的教会建造在这磐石上，阴间的权柄不能胜过他。</p>
	<!-- end bible --></div>
	这磐石是指彼得之前的认信：&ldquo;你是基督，是永生神的儿子。&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 太16:16</span>）

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>回答说：&ldquo;你是基督，是永生神的儿子。&rdquo;</p>
	<!-- end bible --></div>
	基督要在地上设立教会，就是一群相信祂是救主和神的儿子，这是他道成肉身一个很重要的目的。</li>
</ul>

<p class="indent2">耶稣基督从天上到地上来寻找并呼召祂要拯救和洁净的人，使他们可以与祂合而为一。所以这个教会就是天上的恩召所聚集、所洁净、所救赎的一群人，又叫做&ldquo;召会&rdquo;（希腊文 ekklesia ，&ldquo;被召出来的人&rdquo;)。</p>

<p class="indent2">为这个缘故，教会不是礼拜堂、不是建筑物、不是宗教团体、不是一个组织；教会更不是在礼拜堂里面的诗班、琴、桌、椅、所有圣坛用具等等的总合。</p>

<ul class="forward">
	<li class="nobreak-final-final"><strong>教会是一群蒙恩得救的人，是真正信主的门徒、是被救赎的人群、是被拣选的信徒，也是信仰上帝、回应基督救赎和真正经历圣灵重生的基督徒群体（<span class="popup-link" @click = "popUp('pop11')"> 彼得前书2:9</span>）</strong>。<strong> </strong>

	<div class="popup invisible" id="pop11"><strong><!-- begin bible --> </strong>

	<p><strong><sup class="versenum">9&nbsp;</sup>唯有你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民，要叫你们宣扬那召你们出黑暗、入奇妙光明者的美德。 </strong></p>
	<strong> <!-- end bible --> </strong></div>
	</li>
	<li class="forward">观看视频：&ldquo;<strong>这就是门徒造就</strong>&rdquo;
	<ul class="forward">
		<li class="forward">请分享让你印象最深刻的是什么？为什么？</li>
	</ul>
	</li>
	<li class="forward"><strong>小结</strong></li>
	<li class="nobreak-final-final">这部影片让我们具体看到，门徒小组应有的特质。我们的小组将学习和体显初期教会的特质，如同使<span class="popup-link" @click = "popUp('pop8')"> 徒行传2:42-47</span>
	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>都恒心遵守使徒的教训，彼此交接、掰饼、祈祷。</p>

	<p><sup class="versenum">43&nbsp;</sup>众人都惧怕，使徒又行了许多奇事神迹。<sup class="versenum">44&nbsp;</sup>信的人都在一处，凡物公用，<sup class="versenum">45&nbsp;</sup>并且卖了田产、家业，照各人所需用的分给各人。<sup class="versenum">46&nbsp;</sup>他们天天同心合意恒切地在殿里，且在家中掰饼，存着欢喜、诚实的心用饭，<sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
	<!-- end bible --></div>
	和<span class="popup-link" @click = "popUp('pop9')"> 徒行传13:1-3</span>

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>在安提阿的教会中有几位先知和教师，就是<u class="person underline">巴拿巴</u>和称呼<u class="person underline">尼结</u>的<u class="person underline">西面</u>、古利奈人<u class="person underline">路求</u>、与分封之王<u class="person underline">希律</u>同养的<u class="person underline">马念</u>并<u class="person underline">扫罗</u>。<sup class="versenum">2&nbsp;</sup>他们侍奉主、禁食的时候，圣灵说：&ldquo;要为我分派<u class="person underline">巴拿巴</u>和<u class="person underline">扫罗</u>，去做我召他们所做的工。&rdquo;<sup class="versenum">3&nbsp;</sup>于是禁食、祷告，按手在他们头上，就打发他们去了。</p>
	<!-- end bible --></div>
	中所叙述的一样。</li>
	<li class="forward">讨论问题：
	<ul class="forward">
		<li class="forward">&ldquo;我们这个小组彼此也是做这样的委身吗？我们也算是主的教会吗？&rdquo;</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在你所在的教会中，固定委身于一个小组或团契，并使用神所赐的恩赐参与教会的服侍。</li>
	<li class="forward">在《信徒动员表》中列下2位没有稳定聚会的弟兄姊妹，主动关心和邀请他们固定参与教会的生活。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

<ul class="forward">
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
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


<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p class="forward">亲爱的主，<span lang="ZH-CN"><span><span style="color:black">愿祢</span></span></span>赐下复兴的异象，使地上的教会具备新妇的美德，且以圣洁为装饰。教会是一群蒙恩得救的人，是真正信主的门徒、是被救赎的人群、是被拣选的信徒，也是信仰上帝、回应基督救赎和真正经历圣灵重生的基督徒群体。祈求圣灵保守众教会在基督里面竭力保守合一， 发挥主所赐各自的恩赐，齐心兴旺福音、倍增门徒、发展领袖，并植立教会，将荣耀归于我们在天上的父神。奉主耶稣的名求，阿们。</p>

</div>

<h2 class="forward">&nbsp;</h2>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->