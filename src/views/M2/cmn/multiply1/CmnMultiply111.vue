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
                        <div class="chapter_number ltr"><h1>11.</h1></div>
                        <div class="chapter_title ltr"><h1>为基督作见证 </h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课叫我们知道，跟随耶稣的意思是遵从祂的命令去作见证，就是作耶稣的见证人。但是唯有依靠圣灵的大能，我们才能完成生命中需要做的事，并且作有效的见证。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇95:1-7</p>

<p class="back bible"><sup>1</sup>来啊，我们要向耶和华歌唱；向拯救我们的磐石欢呼！<sup>2</sup>我们要来感谢他，用诗歌向他欢呼！<sup>3</sup>因耶和华为大　神，为大王，超乎万神之上。<sup>4</sup>地的深处在他手中，山的高峰也属他。<sup>5</sup>海洋属他，是他造的；旱地也是他手造成的。<sup>6</sup>来啊，我们要屈身敬拜，在造我们的耶和华面前跪下。<sup>7</sup>因为他是我们的　神，我们是他草场的羊，是他手下的民。惟愿你们今天听他的话。</p>

</div>

<ul class="back">
	<li class="back">现在让我们按着经文或用一首诗歌来称颂赞美这位创造宇宙万有的主宰！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop3')"> 彼前3:15</span>）</li>
	<li class="back">
	<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><p><sup class="versenum">+ 15&nbsp;</sup>只要心里尊主基督为圣。有人问你们心中盼望的缘由，就要常做准备，以温柔、敬畏的心回答各人，</p></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">在使徒行传中，我们看见信徒训练人成为能训练别人的人。耶稣首批门徒中有一个名叫巴拿巴的，他找到一个新信徒，名叫保罗，并帮助他。保罗又找到一个年轻信徒名叫提摩太，并带着他到各处传福音。之后保罗写信给提摩太，告诉他要在教会中训练忠心的人，使他们也去寻找其他年轻的信徒来训练。在<span class="popup-link" @click = "popUp('pop2')"> 提摩太后书2:2</span>，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>你在许多见证人面前听见我所教训的，也要交托那忠心能教导别人的人。</p>
	<!-- end bible --></div>
	我们看到从耶稣到巴拿巴、到保罗、到提摩太、到忠心的门徒，及至其他年轻的信徒，所有的基督徒都被呼召去训练能训练其他人的人。如此，福音就能快速广传。</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><ul>
	<li class="up">
	<p><strong>+ 故事背景</strong></p>
	</li>
</ul></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="up">耶稣从死里复活后，继续向门徒讲说上帝国度的事。最后一次聚集的时候，祂向门徒再次提醒他们被呼召的使命，以及为他们所预备的帮助。</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《使徒行传1:1-8》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 使徒行传1:1-8</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>啊，我已经作了前书，论到耶稣开头一切所行所教训的，<sup class="versenum">2&nbsp;</sup>直到他借着圣灵吩咐所拣选的使徒以后，被接上升的日子为止。<sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。<sup class="versenum">4&nbsp;</sup>耶稣和他们聚集的时候，嘱咐他们说：&ldquo;不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。<sup class="versenum">5&nbsp;</sup><u class="person underline">约翰</u>是用水施洗，但不多几日，你们要受圣灵的洗。&rdquo;</p>

<p><sup class="versenum">6&nbsp;</sup>他们聚集的时候，问耶稣说：&ldquo;主啊，你复兴以色列国就在这时候吗？&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣对他们说：&ldquo;父凭着自己的权柄所定的时候、日期，不是你们可以知道的。<sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/111.mp4" type="button" class="external-movie">
         观看&nbsp;使徒行传1:1-8&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对耶稣有什么新的认识？</li>
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
<div id="Summary4" class="summary"><ul>
	<li class="up">
	<p><strong>+ 小结</strong></p>
	</li>
</ul></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="up">跟随耶稣的意思是遵从祂的命令，成为祂的见证。但是唯有依靠圣灵的大能，我们才能完成所托付的使命。圣灵必加能力给我们，使我们作有效的见证。神的心意是：我们向那些和我们一样或是不一样、在周围的还是住在世界各地的人来作见证。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p class="forward">使徒行传1:8</p>

<p class="forward bible">但圣灵降临在你们身上，你们就必得着能力；并要在耶路撒冷、犹太全地和撒玛利亚，直到地极，作我的见证。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">组长示范如何使用传福音工具《四件事》</li>
</ul>

<p class="indent">（每人手上有这本小册子，并跟着组长一起看）</p>

<ul>
	<li class="indent2">使用开场白打开话题</li>
</ul>

<p class="indent3">&ldquo;你好，请问你听过人生的好消息吗？我想与你分享这本小子，并听听你的想法。&rdquo;</p>

<ul class="forward">
	<li class="indent2">然后就开始与对方分享小册子的内容。</li>
	<li class="indent2">读到两个圆圈&ldquo;自我管理的生命&rdquo;与&ldquo;基督管理的生命&rdquo;时，先暂停，解释及归纳两个问题可能有的三种回答。（可翻阅附录#11.2：处理在分享《四件事》时不同的反应）</li>
</ul>

<p class="indent2">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply1/M1L11.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply1/M1L11.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply1/M1L11.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<ul class="forward">
	<li class="indent3">哪一个圆圈代表你现在的生命？</li>
</ul>

<p class="indent3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;左边、右边、不知道/不确定/中间</p>

<ul class="forward">
	<li class="indent3">如果让你选择，你愿意哪一个圆圈代表你的生命？</li>
</ul>

<p class="indent3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;左边、右边、不知道/不确定/中间</p>

<ul class="forward">
	<li class="indent2">从两个圆圈的问题，按照对方所做的选择回应，并继续示范。</li>
	<li class="indent2">对方若表示愿意跟着祷告接受耶稣，带领对方祷告，然后读完整本小册子/内容。</li>
</ul>

<ul class="forward">
	<li class="forward">观察发现和讨论
	<ul class="forward">
		<li class="forward">让你印象最深刻的是什么？为什么？</li>
		<li class="forward">请分享你对接下来这两个问题的答案。</li>
	</ul>
	</li>
	<li class="forward">接下来，你找一位同伴对讲练习《四件事》
	<ul class="forward">
		<li class="forward">使用开场白打开话题，&ldquo;你好，请问你听过改变生命的《四件事》吗？我想与你分享这本小子，并听听你对它的看法。&rdquo; 然后开始与他分享</li>
		<li class="forward">读到两种生命的圆圈图表时，按同伴所作的选择来回应</li>
		<li class="forward">继续把内容读完。同伴给予反馈</li>
	</ul>
	</li>
	<li class="forward">10分钟之后，互换角色练习</li>
</ul>

</div>

<ul class="forward">
</ul>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<p class="up">一个人能信主是神的作为，我们只是神手中的器皿。求主使用我们来帮助初信者，认识在基督里的新关系、新生命和新生活，并经历在基督里生命的改变，在生活中为主作见证，荣耀基督。</p>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">回顾你的《信徒动员表》和《福音行动表》并加入最近认识的新人。</li>
	<li class="forward">选出至少2位本周与他们分享《四件事》并继续操练前几课所学的技巧。</li>
	<li class="forward">依照你今天所学习到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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
<div id="Summary8" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->

<p class="forward">亲爱的天父，祢是信实的主，在万世以前应许拯救我们。我们要感谢祢，耶稣基督为世人的罪受死，被埋葬，第三天从死里复活了。祢也应许凡信靠耶稣基督的人都有永生，求祢刚强我们，使我们抓紧时机，依靠圣灵的能力传扬福音，让更多的人可以认识并接受主耶稣作他们个人的救主和生命的主。奉主耶稣的圣名，阿们！</p>

</div>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->