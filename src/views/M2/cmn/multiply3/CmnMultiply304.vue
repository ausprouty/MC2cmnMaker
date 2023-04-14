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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>彼得向群众讲道——开始布道</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒2:4</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">人得救是圣灵工作的果效，所以得救的人是主给的，不是靠我们的策略才干赢得的。教会人数多寡不是衡量我们个人才干的尺度，得救的人是主加给我们的。主将得救的人天天加给教会，说明了他们是天天为主作见证（<span class="popup-link" @click = "popUp('pop2')"> 徒2:47</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
	<!-- end bible --></div>
	什么时候我们停止传福音，教会就什么时候停止生长。愿我们继续追求长进，求神使用我们建立天天成长的教会。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶稣在门徒的眼前被接上升，按照耶稣离开前的吩咐，门徒在耶路撒冷等候耶稣所应许的圣灵来到。就在五旬节的那一天，耶路撒冷聚集了来自天下各国敬虔的犹太人，圣灵以奇特的现象降临在门徒身上，被圣灵充满的门徒们用各种不同的方言向这些来自各处的犹太人讲述神的大作为，耶路撒冷的众人被这希奇的现象困惑住了。面对人对神奇妙作为的询问和质疑，彼得和十一个使徒就站起来，为主作见证。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒2:14-41》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒2:14-41</button><div class="collapsed" id ="Text0">

<p><sup>14</sup>彼得和十一个使徒站起，高声说：&ldquo;犹太人和一切住在耶路撒冷的人哪，这件事你们当知道，也当侧耳听我的话。<sup>15</sup>你们想这些人是醉了？其实不是醉了，因为时候刚到巳初。<sup>16</sup>这正是先知约珥所说的：<sup>17</sup>&lsquo; 神说：在末后的日子，我要将我的灵浇灌凡有血气的。你们的儿女要说预言；你们的少年人要见异象；老年人要做异梦。<sup>18</sup>在那些日子，我要将我的灵浇灌我的仆人和使女，他们就要说预言。<sup>19</sup>在天上我要显出奇事；在地下我要显出神迹，有血，有火，有烟雾。<sup>20</sup>日头要变为黑暗，月亮要变为血；这都在主大而明显的日子未到以前。<sup>21</sup>到那时候，凡求告主名的，就必得救。&rsquo;</p>

<p><sup>22</sup>以色列人哪，请听我的话：神藉著拿撒勒人耶稣在你们中间施行异能、奇事、神迹，将他证明出来，这是你们自己知道的。<sup>23</sup>他既按著　神的定旨、先见被交与人，你们就藉著无法之人的手，把他钉在十字架上杀了。<sup>24</sup>神却将死的痛苦解释了，叫他复活，因为他原不能被死拘禁。<sup>25</sup>大卫指著他说：&lsquo;我看见主常在我眼前，他在我右边，叫我不至于摇动。<sup>26</sup>所以我心里欢喜，我的灵（注：原文作&ldquo;舌&rdquo;）快乐；并且我的肉身要安居在指望中。<sup>27</sup>因你必不将我的灵魂撇在阴间，也不叫你的圣者见朽坏。<sup>28</sup>你已将生命的道路指示我，必叫我因见你的面（注：或作&ldquo;叫我在你面前&rdquo;），得著满足的快乐。&rsquo;</p>

<p><sup>29</sup>弟兄们，先祖大卫的事，我可以明明地对你们说，他死了，也葬埋了，并且他的坟墓直到今日还在我们这里。<sup>30</sup>大卫既是先知，又晓得　神曾向他起誓，要从他的后裔中立一位坐在他的宝座上，<sup>31</sup>就预先看明这事，讲论基督复活说：&lsquo;他的灵魂不撇在阴间；他的肉身也不见朽坏。&rsquo;<sup>32</sup>这耶稣， 神已经叫他复活了，我们都为这事作见证。<sup>33</sup>他既被　神的右手高举（注：或作&ldquo;他既高举在　神的右边&rdquo;），又从父受了所应许的圣灵，就把你们所看见、所听见的浇灌下来。<sup>34</sup>大卫并没有升到天上，但自己说：&lsquo;主对我主说：你坐在我的右边，<sup>35</sup>等我使你仇敌作你的脚凳。&rsquo;<sup>36</sup>故此，以色列全家当确实地知道，你们钉在十字架上的这位耶稣，神已经立他为主，为基督了。&rdquo;</p>

<p><sup>37</sup>众人听见这话，觉得扎心，就对彼得和其余的使徒说：&ldquo;弟兄们，我们当怎样行？&rdquo;<sup>38</sup>彼得说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵；<sup>39</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们　神所召来的。&rdquo;<sup>40</sup>彼得还用许多话作见证，劝勉他们说：&ldquo;你们当救自己脱离这弯曲的世代。&rdquo;<sup>41</sup>于是，领受他话的人就受了洗。那一天，门徒约添了三千人。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/304.mp4" type="button" class="external-movie">
         观看&nbsp;徒2:14-41&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，带领人来认识耶稣基督？</li>
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
	<li class="nobreak-final-final">就在几个星期前，耶稣开门徒的心窍使他们能明白圣经上指着有关祂的话（<span class="popup-link" @click = "popUp('pop3')"> 路24:44-49</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">44&nbsp;</sup>耶稣对他们说：&ldquo;这就是我从前与你们同在之时所告诉你们的话说：<u class="person underline">摩西</u>的律法、先知的书和诗篇上所记的，凡指着我的话都必须应验。&rdquo;<sup class="versenum">45&nbsp;</sup>于是耶稣开他们的心窍，使他们能明白圣经。<sup class="versenum">46&nbsp;</sup>又对他们说：&ldquo;照经上所写的，基督必受害，第三日从死里复活，<sup class="versenum">47&nbsp;</sup>并且人要奉他的名传悔改、赦罪的道，从耶路撒冷起直传到万邦。<sup class="versenum">48&nbsp;</sup>你们就是这些事的见证。<sup class="versenum">49&nbsp;</sup>我要将我父所应许的降在你们身上，你们要在城里等候，直到你们领受从上头来的能力。&rdquo;</p>
	<!-- end bible --></div>
	现在借着圣灵，彼得能用经上的话解释近来发生的事（<span class="popup-link" @click = "popUp('pop7')"> 珥2:28-32</span>；

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<h3>许赐圣灵</h3>

	<p><sup class="versenum">28&nbsp;</sup>&ldquo;以后，我要将我的灵浇灌凡有血气的，你们的儿女要说预言，你们的老年人要做异梦，少年人要见异象。<sup class="versenum">29&nbsp;</sup>在那些日子，我要将我的灵浇灌我的仆人和使女。<sup class="versenum">30&nbsp;</sup>在天上地下，我要显出奇事，有血，有火，有烟柱。<sup class="versenum">31&nbsp;</sup>日头要变为黑暗，月亮要变为血，这都在耶和华大而可畏的日子未到以前。</p>

	<p><sup class="versenum">32&nbsp;</sup>&ldquo;到那时候，凡求告耶和华名的，就必得救。因为照耶和华所说的，在锡安山耶路撒冷必有逃脱的人，在剩下的人中必有耶和华所召的。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 诗16:8-11</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<p><sup class="versenum">8&nbsp;</sup>我将耶和华常摆在我面前，因他在我右边，我便不致摇动。<br />
	<sup class="versenum">9&nbsp;</sup>因此我的心欢喜，我的灵快乐，我的肉身也要安然居住。<br />
	<sup class="versenum">10&nbsp;</sup>因为你必不将我的灵魂撇在阴间，也不叫你的圣者见朽坏。<br />
	<sup class="versenum">11&nbsp;</sup>你必将生命的道路指示我，在你面前有满足的喜乐，在你右手中有永远的福乐。</p>
	</div>
	<!-- end bible --></div>
	，<span class="popup-link" @click = "popUp('pop6')"> 诗110:1</span>

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<p><sup class="versenum">1 </sup><u class="person underline">大卫</u>的诗。</p>

	<p><sup class="versenum">1&nbsp;</sup>耶和华对我主说：&ldquo;你坐在我的右边，等我使你仇敌做你的脚凳。&rdquo;</p>
	</div>
	<!-- end bible --></div>
	从罗马各地来朝圣的犹太人听见了福音的信息，包括：耶稣的生平事奉、受死与复活，以及祂来拯救人脱离罪恶。彼得要众人悔改，离弃各人错误的态度与行为，并奉耶稣基督的名受洗，与祂联合。这福音的好消息不仅是给予这群人，也给予他们的家人、朋友，以及世上所有的人。</li>
</ul>

<p class="up">上帝借着福音白白赐给人两样礼物：一、使我们罪得赦免，与上帝和好；二、圣灵的内住。这个信息完全颠覆了当时犹太人的思想，因为他们认为上帝的同在只出现在圣殿里。门徒竟在一天内经历到信徒人数从120人爆增至约3,000人。透过拯救罗马各地来的这些人，耶稣向人确保了将来大使命的成就。</p>

</div>

<p class="up">&nbsp;</p>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒2:38-39</p>

<p class="forward bible"><sup>38</sup>彼得说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵；<sup>39</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们　神所召来的。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">彼得勇敢为基督作见证，如果今天你要为耶稣作见证，你见证的内容会是什么？你所听过的见证，内容大部份又是什么？我们应当对神的道有什么回应？反思最近你对神话语的态度如何？为什么？</li>
	<li class="forward">为什么洗礼这么必要？信主就一定要受洗吗？分享你受洗的历程。</li>
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
	<li class="forward">彼得在众人面前挺身而出、放胆宣讲，条理清晰、言辞精确，与之前三次否认主的懦弱的他判若两人。他的改变完全在于得着圣灵的能力，不仅给予他勇气和信心，也赐予他口才和智慧。
	<ul class="forward">
		<li class="forward">思想在见证主耶稣的事上，有什么事让你却步？有什么是你需要经历圣灵的大能带来生命的改变？把它们写下并为自己祷告，下周在小组中分享。</li>
		<li class="forward">你也祈求神让你本周在传福音中，真实经历主耶稣复活的大能和信实。</li>
	</ul>
	</li>
	<li class="forward">为你带领的门徒小组成员提名祷告。如果有的正在经历生命的软弱或不信，求神借着你牧养和建立他们，圣灵使他们刚强起来。</li>
	<li class="forward">为教会的牧者和同工团队代求，竭力保守圣灵所赐合而为一的心，以基督的心为心，在传讲神的话语及见证基督的事上大得神的同在、智慧和能力。</li>
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

<p class="forward">满有慈爱怜悯的天父，感谢祢的救恩临到我们，让我们生命经历祢全然的赦免与医治。我们今天成为何等的人，都是蒙了祢的恩惠。天父啊，求祢大大恩膏我们，我们要奉主名传说祢的大能与作为。当人问起我们盼望的缘由，我们就随时作好准备，存温柔、敬畏的心，把人领到主面前。祷告我们的亲友因看见祢在我们身上的作为，就赞叹不已，愿意来就近祢，认识祢这独一的救主。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->