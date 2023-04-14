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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>42.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣是世界的光</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约8:10-11</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>耶稣就直起腰来，对她说：&ldquo;妇人，那些人在哪里呢？没有人定你的罪吗？&rdquo;<sup class="versenum">11&nbsp;</sup>她说：&ldquo;主啊，没有。&rdquo;耶稣说：&ldquo;我也不定你的罪。去吧，从此不要再犯罪了！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">耶稣说：&ldquo;我的教训不是我自己的，乃是那差我来者的。人若立志遵着他的旨意行，就必晓得这教训或是出于神，或是我凭着自己说的。人凭着自己说，是求自己的荣耀；惟有求那差他来者的荣耀，这人是真的，在他心里没有不义。&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 约7:16-18</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>耶稣说：&ldquo;我的教训不是我自己的，乃是那差我来者的。<sup class="versenum">17&nbsp;</sup>人若立志遵着他的旨意行，就必晓得这教训或是出于神，或是我凭着自己说的。<sup class="versenum">18&nbsp;</sup>人凭着自己说，是求自己的荣耀；唯有求那差他来者的荣耀，这人是真的，在他心里没有不义。</p>
	<!-- end bible --></div>
	当耶稣挑战这群宗教领袖他们自己的罪和铁石心肠时，祂向人示范出超人的智慧、怜悯、慈悲和恩典的领导风范。主耶稣也要我们跟随祂，与祂同行，看祂的手势，听祂讲话的谈吐，更深认识祂，学像祂，并活出祂的样式。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣的指责激起了对手的人身攻击，除了被鬼附身，有谁会吐出如此大逆不道和荒谬的鬼话？耶稣继续辩驳，祂从不曾高抬自己的来历和身分，祂一心寻求神的荣耀，高抬祂的是神自己，神将生命和审判的权柄赐给了祂；在四周虎视眈眈的压力下，耶稣不但没有退缩，而且继续口出惊人之言，在环绕着亚伯拉罕和众先知的争论中，耶稣宣告：&ldquo;还没有亚伯拉罕，就有了我。&rdquo;此言一出，犹太人愤怒的反应立刻结束了这场争论<span>（<span class="popup-link" @click = "popUp('pop3')"> 约8:48-59</span>）</span></span><span lang="ZH-CN">！<span> </span></span></span></span>
	<div class="popup invisible" id="pop3"><span><span><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span>
	<p><span><span><span lang="ZH-CN"><span><sup class="versenum">48&nbsp;</sup>犹太人回答说：&ldquo;我们说你是撒马利亚人，并且是鬼附着的，这话岂不正对吗？&rdquo;<sup class="versenum">49&nbsp;</sup>耶稣说：&ldquo;我不是鬼附着的。我尊敬我的父，你们倒轻慢我。<sup class="versenum">50&nbsp;</sup>我不求自己的荣耀，有一位为我求荣耀、定是非的。<sup class="versenum">51&nbsp;</sup>我实实在在地告诉你们：人若遵守我的道，就永远不见死。&rdquo;<sup class="versenum">52&nbsp;</sup>犹太人对他说：&ldquo;现在我们知道你是鬼附着的。<u class="person underline">亚伯拉罕</u>死了，众先知也死了，你还说&lsquo;人若遵守我的道，就永远不尝死味&rsquo;。<sup class="versenum">53&nbsp;</sup>难道你比我们的祖宗<u class="person underline">亚伯拉罕</u>还大吗？他死了，众先知也死了。你将自己当做什么人呢？&rdquo;<sup class="versenum">54&nbsp;</sup>耶稣回答说：&ldquo;我若荣耀自己，我的荣耀就算不得什么。荣耀我的乃是我的父，就是你们所说是你们的神。<sup class="versenum">55&nbsp;</sup>你们未曾认识他，我却认识他。我若说不认识他，我就是说谎的，像你们一样。但我认识他，也遵守他的道。</span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span> </span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span><sup class="versenum">56&nbsp;</sup>&ldquo;你们的祖宗<u class="person underline">亚伯拉罕</u>欢欢喜喜地仰望我的日子，既看见了，就快乐。&rdquo;<sup class="versenum">57&nbsp;</sup>犹太人说：&ldquo;你还没有五十岁，岂见过<u class="person underline">亚伯拉罕</u>呢？&rdquo;<sup class="versenum">58&nbsp;</sup>耶稣说：&ldquo;我实实在在地告诉你们：还没有<u class="person underline">亚伯拉罕</u>就有了我。&rdquo;<sup class="versenum">59&nbsp;</sup>于是他们拿石头要打他，耶稣却躲藏，从殿里出去了。</span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></div>
	<span><span><span lang="ZH-CN">亚伯拉罕真正的儿女不是出于肉身，而是属灵上的关系。</span></span></span></li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音9:1-41》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音9:1-41</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>耶稣过去的时候，看见一个人生来是瞎眼的。<sup>2</sup>门徒问耶稣说：&ldquo;拉比，这人生来是瞎眼的，是谁犯了罪？是这人呢？是他父母呢？&rdquo; <sup>3</sup>耶稣回答说：&ldquo;也不是这人犯了罪，也不是他父母犯了罪，是要在他身上显出　神的作为来。<sup>4</sup>趁着白日，我们必须做那差我来者的工；黑夜将到，就没有人能做工了。<sup>5</sup>我在世上的时候，是世上的光。&rdquo;</p>

<p><sup>6</sup>耶稣说了这话，就吐唾沫在地上，用唾沫和泥抹在瞎子的眼睛上，<sup>7</sup>对他说：&ldquo;你往西罗亚池子里去洗。&rdquo;（&ldquo;西罗亚&rdquo;翻出来，就是&ldquo; 奉差遣&rdquo;）他去一洗，回头就看见了。<sup>8</sup>他的邻舍和那素常见他是讨饭的，就说：&ldquo;这不是那从前坐着讨饭的人吗？&rdquo;<sup>9</sup>有人说：&ldquo;是他。&rdquo;又有人说：&ldquo;不是，却是像他。&rdquo;他自己说：&ldquo;是我。&rdquo;<sup>10</sup>他们对他说：&ldquo;你的眼睛是怎么开的呢？&rdquo;<sup>11</sup>他回答说：&ldquo;有一个人名叫耶稣，他和泥抹我的眼睛，对我说&lsquo;你往西罗亚池子去洗&rsquo;；我去一洗，就看见了。&rdquo;<sup>12</sup>他们说：&ldquo;那个人在哪里？&rdquo;他说：&ldquo;我不知道。&rdquo;</p>

<p><sup>13</sup>他们把从前瞎眼的人带到法利赛人那里。<sup>14</sup>耶稣和泥开他眼睛的日子是安息日。<sup>15</sup>法利赛人也问他是怎么得看见的。瞎子对他们说：&ldquo;他把泥抹在我的眼睛上，我去一洗，就看见了。&rdquo;<sup>16</sup>法利赛人中有的说：&ldquo;这个人不是从　神来的，因为他不守安息日。&rdquo;又有人说：&ldquo;一个罪人怎能行这样的神迹呢？&rdquo;他们就起了纷争。<sup>17</sup>他们又对瞎子说：&ldquo;他既然开了你的眼睛，你说他是怎样的人呢？&rdquo;他说：&ldquo;是个先知。&rdquo;<sup>18</sup>犹太人不信他从前是瞎眼，后来能看见的，等到叫了他的父母来，<sup>19</sup>问他们说：&ldquo;这是你们的儿子吗？你们说他生来是瞎眼的，如今怎么能看见了呢？&rdquo;<sup>20</sup>他父母回答说：&ldquo;他是我们的儿子，生来就瞎眼，这是我们知道的。<sup>21</sup>至于他如今怎么能看见，我们却不知道；是谁开了他的眼睛，我们也不知道。他已经成了人，你们问他吧！他自己必能说。&rdquo;<sup>22</sup>他父母说这话，是怕犹太人，因为犹太人已经商议定了，若有认耶稣是基督的，要把他赶出会堂。<sup>23</sup>因此他父母说：&ldquo;他已经成了人，你们问他吧！&rdquo;</p>

<p><sup>24</sup>所以法利赛人第二次叫了那从前瞎眼的人来，对他说：&ldquo;你该将荣耀归给　神，我们知道这人是个罪人。&rdquo;<sup>25</sup>他说：&ldquo;他是个罪人不是，我不知道；有一件事我知道：从前我是眼瞎的，如今能看见了！&rdquo;<sup>26</sup>他们就问他说：&ldquo;他向你做什么？是怎么开了你的眼睛呢？&rdquo;<sup>27</sup>他回答说：&ldquo;我方才告诉你们，你们不听，为什么又要听呢？莫非你们也要作他的门徒吗？&rdquo;<sup>28</sup>他们就骂他说：&ldquo;你是他的门徒，我们是摩西的门徒！<sup>29</sup>神对摩西说话，是我们知道的；只是这个人，我们不知道他从哪里来。&rdquo;<sup>30</sup>那人回答说：&ldquo;他开了我的眼睛，你们竟不知道他从哪里来，这真是奇怪！<sup>31</sup>我们知道　神不听罪人，惟有敬奉　神、遵行他旨意的，　神才听他。<sup>32</sup>从创世以来，未曾听见有人把生来是瞎子的眼睛开了。<sup>33</sup>这人若不是从　神来的，什么也不能做。&rdquo;<sup>34</sup>他们回答说：&ldquo;你全然生在罪孽中，还要教训我们吗？&rdquo;于是把他赶出去了。</p>

<p><sup>35</sup>耶稣听说他们把他赶出去，后来遇见他，就说：&ldquo;你信　神的儿子吗？&rdquo;<sup>36</sup>他回答说：&ldquo;主啊，谁是　神的儿子，叫我信他呢？&rdquo;<sup>37</sup>耶稣说：&ldquo;你已经看见他，现在和你说话的就是他。&rdquo;<sup>38</sup>他说：&ldquo;主啊，我信！&rdquo;就拜耶稣。<sup>39</sup>耶稣说：&ldquo;我为审判到这世上来，叫不能看见的，可以看见；能看见的，反瞎了眼。&rdquo;<sup>40</sup>同他在那里的法利赛人听见这话，就说：&ldquo;难道我们也瞎了眼吗？&rdquo;<sup>41</sup>耶稣对他们说：&ldquo;你们若瞎了眼，就没有罪了；但如今你们说：&lsquo;我们能看见，&rsquo;所以你们的罪还在。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/242.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音9:1-41&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣去守另一个节期，称&ldquo;修殿节&rdquo;（Feast of Dedication）或&ldquo;光明节&rdquo;（Feast of Lights）。这个节期是纪念上帝为犹太人施行的神迹&mdash;&mdash;当圣殿没有足够的油点灯时，上帝的供应使灯能持续发光。耶稣在节期中遇见一个生来瞎眼的人。大多数人认为一个人如果有苦难，是因为他或近亲犯了罪。耶稣表明这人生来瞎眼，是因为上帝要在他身上显出 神的荣耀来。祂的话震惊了全场，让人了解到一个奇妙的原则：上帝允许苦难的发生，好让祂的荣耀能彰显出来。我们应当记住上帝就是生命的中心。祂藉着回应人在患难中的呼求，得着荣耀。我们因此学到：应当小心，别论断他人的苦难。因为人受苦难，可能不是因为他做了不好的事，而是上帝要在他身上显出 神的荣耀来。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约9:4-5</p>

<p class="forward bible"><sup>4</sup>趁着白日，我们必须做那差我来者的工；黑夜将到，就没有人能做工了。<sup>5</sup>我在世上的时候，是世上的光。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">在你曾经历或目睹的苦难中，最难接受或感到困惑的事是什么？这段经文对你有什么帮助吗？瞎子的苦难是为了&ldquo;要在他身上显出神的作为来&rdquo;，你能接受苦难是一个见证的机会吗？为什么？</li>
	<li class="forward">瞎子的父母不敢付出承认耶稣的代价，瞎子却不同于自己的父母，他自称是耶稣的门徒（27节）。你曾经因为是基督徒而受到任何的排挤或嘲笑吗？你当时的反应会比较像这个得医治的瞎子或是他的父母？为什么？现在呢？</li>
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
	<li class="forward">这个得医治的人做见证：&ldquo;有一件事我知道，从前我是眼瞎的，如今能看见了&rdquo;？本周花时间写下你生命转变的故事（就是你的信主见证，可按三部分写：信主前，怎样信，以及信主后），下周交给组长。（若你已写过，看是否有什么需要补充或是修改的，把它完整。祷告神，以后有机会在教会和福音聚会中作见证）</li>
	<li class="forward">为门徒小组或教会弟兄姐妹提名守望，求主坚定他们的信心，在面对质问或逼迫时，能以勇敢见证这位生命中复活的救主基督。</li>
	<li class="forward">为教会福音事工及教会的牧者同工代祷，求主使我们教会的众人能体验得人如得鱼的喜乐，也求主为教会预备成熟的福音果子，能以结出倍增的生命。</li>
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

<p>恩主，我们感谢赞美祢！祢为传天国福音的缘故，道成肉身住在我们中间，愿意成为奴仆的样式来服事人，甚至将生命摆上，存心顺服，以致死在十字架上，成为我们世人的救赎。主耶稣祢是世界的光，真光照进黑暗，黑暗就驱散。愿祢医治我们的国家和百姓，开他们的心眼，得以看见祢。愿祢的荣光照耀，吸引人就进祢这真光。我们愿意效法祢的样式，生命被祢改变，作祢光明之子，将我们的好行为照在人前，使荣耀归于天父。我们如此祷告乃是奉主耶稣的名求，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->