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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>30.</h1></div>
                        <div class="chapter_title ltr"><h1>论外邦信主条件——开放跨文化信仰</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒14:27-28</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>到了那里，聚集了会众，就述说神借他们所行的一切事，并神怎样为外邦人开了信道的门。<sup class="versenum">28&nbsp;</sup>二人就在那里同门徒住了多日。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">使徒回到安提阿教会报告工作进展。&ldquo;当初他们被众人所托蒙神之恩，要办现在所作之工&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒14:26</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>从那里坐船，往安提阿去。当初他们被众人所托、蒙神之恩要办现在所做之工，就是在这地方。</p>
	<!-- end bible --></div>
	既是众人所托的事，就需要向众人报告工作的进展。所以他们聚集了会众，就述说神借他们所行的一切事，并神怎样为外邦人开了信道的门。宣教工作不只是保罗和巴拿巴两人的工作和责任，必须是全教会负担的责任和喜乐。要全教会参与，就必须定期向教会报告工作进展和需要。事工既是神托付教会，教会就当全体参与，无论借着祷告、奉献、行动来参与，使众人在神面前同得喜乐，心被恩感，同得奖赏。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">保罗和巴拿巴知道整个传道旅程都在神的带领之下，他们清楚自己的工作不过是&ldquo;神借他们所行的一切事&rdquo;，所以能守住做器皿的地位，成功的时候没有沾沾自喜、得意忘形（<span class="popup-link" @click = "popUp('pop3')"> 徒14:14</span>），
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">巴拿巴</u>、<u class="person underline">保罗</u>二使徒听见，就撕开衣裳，跳进众人中间，喊着说：</p>
	<!-- end bible --></div>
	失败的时候也不会怨天尤人、垂头丧气（<span class="popup-link" @click = "popUp('pop4')"> 徒13:50-52</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">50&nbsp;</sup>但犹太人挑唆虔敬、尊贵的妇女和城内有名望的人，逼迫<u class="person underline">保罗</u>、<u class="person underline">巴拿巴</u>，将他们赶出境外。<sup class="versenum">51&nbsp;</sup>二人对着众人跺下脚上的尘土，就往以哥念去了。<sup class="versenum">52&nbsp;</sup>门徒满心喜乐，又被圣灵充满。</p>
	<!-- end bible --></div>
	他们在旅程中也许未必清楚神的通盘计划，但最后回顾起来，就发现神是在&ldquo;为外邦人开了信道的门&rdquo;，让外邦人有机会接受福音。</li>
</ul>

<p class="indent2">在保罗结束了他的第一次宣教旅程之后不久，福音在外邦人中大受欢迎的消息传开了，这就引起了一个极为重要的神学争论。教会的领袖们聚集在耶路撒冷，来辩论和探讨这一问题。核心的问题是：信了耶稣的外邦人是否必须受割礼，也就是说必须先作犹太人，才能得救？</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒15:1-35》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒15:1-35</button><div class="collapsed" id ="Text0">

<p><sup>1</sup> 有几个人从犹太下来，教训弟兄们说：&ldquo;你们若不按摩西的规条受割礼，不能得救。&rdquo;<sup>2</sup>保罗、巴拿巴与他们大大地纷争辩论；众门徒就定规，叫保罗、巴拿巴和本会中几个人，为所辩论的上耶路撒冷去见使徒和长老。<sup>3</sup>于是教会送他们起行。他们经过腓尼基、撒马利亚，随处传说外邦人归主的事，叫众弟兄都甚欢喜。<sup>4</sup>到了耶路撒冷，教会和使徒并长老都接待他们，他们就述说　神同他们所行的一切事。</p>

<p><sup>5</sup>惟有几个信徒是法利赛教门的人，起来说：&ldquo;必须给外邦人行割礼，吩咐他们遵守摩西的律法。&rdquo;<sup>6</sup>使徒和长老聚会商议这事。<sup>7</sup>辩论已经多了，彼得就起来说：&ldquo;诸位弟兄，你们知道　神早已在你们中间拣选了我，叫外邦人从我口中得听福音之道，而且相信。<sup>8</sup>知道人心的　神也为他们作了见证，赐圣灵给他们，正如给我们一样；<sup>9</sup>又藉著信洁净了他们的心，并不分他们、我们。<sup>10</sup>现在为甚么试探　神，要把我们祖宗和我们所不能负的轭放在门徒的颈项上呢？<sup>11</sup>我们得救乃是因主耶稣的恩，和他们一样，这是我们所信的。&rdquo;</p>

<p><sup>12</sup>众人都默默无声，听巴拿巴和保罗述说　神藉他们在外邦人中所行的神迹奇事。<sup>13</sup>他们住了声，雅各就说：&ldquo;诸位弟兄，请听我的话。<sup>14</sup>方才西门述说　神当初怎样眷顾外邦人，从他们中间选取百姓归于自己的名下；<sup>15</sup>众先知的话也与这意思相合。<sup>16</sup>正如经上所写的：&lsquo;此后，我要回来，重新修造大卫倒塌的帐幕，把那破坏的，重新修造建立起来。<sup>17</sup>叫余剩的人，就是凡称为我名下的外邦人，都寻求主。&rsquo;<sup>18</sup>这话是从创世以来显明这事的主说的。<sup>19</sup>所以据我的意见，不可难为那归服　神的外邦人；<sup>20</sup>只要写信吩咐他们禁戒偶像的污秽和奸淫，并勒死的牲畜和血。<sup>21</sup>因为从古以来，摩西的书在各城有人传讲，每逢安息日在会堂里诵读。&rdquo;</p>

<p><sup>22</sup>那时，使徒和长老并全教会定意从他们中间拣选人，差他们和保罗、巴拿巴同往安提阿去。所拣选的就是称呼巴撒巴的犹大和西拉；这两个人在弟兄中是作首领的。<sup>23</sup>于是写信交付他们，内中说：&ldquo;使徒和作长老的弟兄们问安提阿、叙利亚、基利家外邦众弟兄的安！<sup>24</sup>我们听说有几个人从我们这里出去，用言语搅扰你们，惑乱你们的心。（注：有古卷在此有&ldquo;你们必须受割礼，守摩西的律法。&rdquo;）其实我们并没有吩咐他们。<sup>25</sup>所以我们同心定意拣选几个人，差他们同我们所亲爱的巴拿巴和保罗往你们那里去。<sup>26</sup>这二人是为我主耶稣基督的名不顾性命的。<sup>27</sup>我们就差了犹大和西拉，他们也要亲口诉说这些事。<sup>28</sup>因为圣灵和我们定意不将别的重担放在你们身上，惟有几件事是不可少的，<sup>29</sup>就是禁戒祭偶像的物和血，并勒死的牲畜和奸淫。这几件你们若能自己禁戒不犯就好了。愿你们平安！&rdquo;</p>

<p><sup>30</sup>他们既奉了差遣，就下安提阿去，聚集众人，交付书信。<sup>31</sup>众人念了，因为信上安慰的话就欢喜了。<sup>32</sup>犹大和西拉也是先知，就用许多话劝勉弟兄，坚固他们。<sup>33</sup>住了些日子，弟兄们打发他们平平安安地回到差遣他们的人那里去。（注：有古卷在此有<sup>34</sup>&ldquo;惟有西拉定意仍住在那里。&rdquo;）<sup>35</sup>但保罗和巴拿巴仍住在安提阿，和许多别人一同教训人，传主的道。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/330.mp4" type="button" class="external-movie">
         观看徒15:1-35</button>
    <div class="collapsed"></div>



<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">主的手如何借着门徒在这城中动工和带来影响？结果如何？</li>
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
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">犹太信徒坚持归信的外邦人若不受割礼，就不能得救。割礼是上帝在旧约时代与犹太人立约的记号，因此他们坚持耶稣的门徒也要受割礼才得救恩。尽管他们已经了解上帝的救恩是赐给万民的（<span class="popup-link" @click = "popUp('pop5')"> 徒11:18</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>众人听见这话，就不言语了，只归荣耀于神，说：&ldquo;这样看来，神也赐恩给外邦人，叫他们悔改得生命了。&rdquo;</p>
	<!-- end bible --></div>
	他们仍旧相信外邦人若要完全被上帝接受，必须受割礼及遵守律法。遵照这些律法的话，外邦人几乎不可能再继续生活在非犹太人的社会中。保罗接纳外邦人为基督身体的一部分，单单是因着他们的信仰宣告和受洗，他这样的做法受到了挑战。然而，我们看见保罗愿意听从全体信徒的决定。使万民作门徒的使命此时变得岌岌可危！领袖除了祷告，仔细聆听、辩论、思考主的话语，也观察上帝的工作，以求能明辨上帝的旨意。他们澄清教义， 结束了这场争议，也促进了众人的和平。接纳万民进入主的家中，一直都是上帝计划的一部分，而耶稣为万民打开归回天父家的路。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒15:19-20</p>

<p class="forward bible"><sup>19</sup>所以据我的意见，不可难为那归服　神的外邦人；<sup>20</sup>只要写信吩咐他们禁戒偶像的污秽和奸淫，并勒死的牲畜和血。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">法利赛派基督徒坚持外邦信徒当受割礼和守律法。今天的教会有没有把一些不成文的传统，变成不能负的轭，加在信徒身上呢？试讨论这些规定所可能引致的后果，以及我们面对这些问题所应有的态度。</li>
	<li class="forward">你认为得救不可或缺的条件是什么？为什么？基督教在得救上和其他宗教又有何不同？</li>
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


<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在基督信仰上，有什么是让你或你造就的门徒中有的疑惑呢？主动寻求神和祂话语的解答，同时请教教会的牧者或资深长辈，又或者阅读相关的属灵书籍并与属灵同伴一起分享和祷告。</li>
	<li class="forward">教会最近遇到什么事是在同工会上意见不一致的吗？作为教会的领袖，你也会用同样认真的态度去面对一些歧见吗？你想如果是耶稣，祂会怎么做？
	<ul class="forward">
		<li class="forward">在祷告上寻求在基督里的合一，同时主动做调和的工作，从神得的智慧存谦卑的态度正视问题。</li>
		<li class="forward">为教会的牧者同工团队代求，求神让他们有颗合而为一的心，凡事谦卑寻求神的心意，以基督的心为心，在教会各项事工的决策上，为神最大荣耀并众人的益处着想，凡事讨神的喜悦。</li>
	</ul>
	</li>
	<li class="forward">本周把《加拉太书》阅读一遍，将心得写下，下周小组分享。下图书卷图表仅供参考。</li>
</ul>

<p class="forward">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply3/M3L30Chart.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply3/M3L30Chart.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply3/M3L30Chart.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<ul class="forward">
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
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


<h2 class="forward">福音祷告</h2>

<p class="forward">亲爱的天父，我们祈求圣灵来光照我们的心，我们承认与世人都是一样，在祢眼里每一个都是独特的罪人，而且都需要主耶稣的救恩。感谢主耶稣为我们世人的罪所付上刑罚。除了主耶稣以外，我们别无拯救。感谢天父，如今因着相信耶稣的救赎，承认我们的罪，我们得以在基督里成为天父的儿女。求祢教导我们看自己所当看的，能虚己尊重未信之人，并用基督的爱来关怀与接纳他们，也求圣灵赐给我们智慧和谦卑，竭力保守圣灵所赐合而为一的心，奉主圣名，阿们。</p>

<p class="forward">&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->