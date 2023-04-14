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
                        <div class="chapter_number ltr"><h1>37.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与恐惧</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约6:14</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>众人看见耶稣所行的神迹，就说：&ldquo;这真是那要到世间来的先知！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>天父要我们学习举目观看众人的需要；我们的心被打动，能去怜悯人；并且有颗乐意分享的心。当我们愿意奉献所有的时候，就能看见倍增的发生。此外，祂也教导我们也需要好好规划安排，在信心中将一切交给上帝并献上感谢。相信当我们愿意将自己所有的摆上，必能经历天父丰富的供应和成全，成为众人祝福的管道。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">五饼二鱼这个神迹引爆了群众的热情，他们想拥戴耶稣作王，在这个敏感的时机和巨大的压力下，耶稣独自退到山上去（<span class="popup-link" @click = "popUp('pop2')"> 约6:15</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>耶稣既知道众人要来强逼他做王，就独自又退到山上去了。</p>
	<!-- end bible --></div>
	在五饼二鱼的神迹中，耶稣再次彰显出祂的身分，以及祂对群众的怜悯和丰富的供应（<span class="popup-link" @click = "popUp('pop3')"> 太14:13-21</span>）；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>耶稣听见了，就上船从那里独自退到野地里去。众人听见，就从各城里步行跟随他。<sup class="versenum">14&nbsp;</sup>耶稣出来，见有许多的人，就怜悯他们，治好了他们的病人。<sup class="versenum">15&nbsp;</sup>天将晚的时候，门徒进前来，说：&ldquo;这是野地，时候已经过了，请叫众人散开，他们好往村子里去自己买吃的。&rdquo;<sup class="versenum">16&nbsp;</sup>耶稣说：&ldquo;不用他们去，你们给他们吃吧！&rdquo;<sup class="versenum">17&nbsp;</sup>门徒说：&ldquo;我们这里只有五个饼、两条鱼。&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣说：&ldquo;拿过来给我。&rdquo;<sup class="versenum">19&nbsp;</sup>于是吩咐众人坐在草地上，就拿着这五个饼、两条鱼，望着天祝福，掰开饼递给门徒，门徒又递给众人。<sup class="versenum">20&nbsp;</sup>他们都吃，并且吃饱了。把剩下的零碎收拾起来，装满了十二个篮子。<sup class="versenum">21&nbsp;</sup>吃的人，除了妇女孩子，约有五千。</p>
	<!-- end bible --></div>
	接下来耶稣在海上行走的神迹更进一步启示祂与神同等的身分，因为唯有旧约中的耶和华才有驾驭大自然的能力。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音14:22-33》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音14:22-33</button><div class="collapsed" id ="Text0">

<p><sup>22</sup> 耶稣随即催门徒上船，先渡到那边去，等他叫众人散开。<sup>23</sup>散了众人以后，他就独自上山去祷告。到了晚上，只有他一人在那里。<sup>24</sup>那时，船在海中，因风不顺，被浪摇撼。<sup>25</sup>夜里四更天，耶稣在海面上走，往门徒那里去。<sup>26</sup>门徒看见他在海面上走，就惊慌了，说： &ldquo;是个鬼怪！&rdquo;便害怕，喊叫起来。<sup>27</sup>耶稣连忙对他们说：&ldquo;你们放心，是我，不要怕！&rdquo;<sup>28</sup>彼得说：&ldquo;主，如果是你，请叫我从水面上走到你那里去。&rdquo;<sup>29</sup>耶稣说：&ldquo;你来吧！&rdquo;彼得就从船上下去，在水面上走，要到耶稣那里去；<sup>30</sup>只因见风甚大，就害怕，将要沉下去，便喊着说：&ldquo;主啊，救我！&rdquo;<sup>31</sup>耶稣赶紧伸手拉住他，说：&ldquo;你这小信的人哪，为什么疑惑呢？&rdquo;<sup>32</sup>他们上了船，风就住了。<sup>33</sup>在船上的人都拜他，说：&ldquo;你真是　神的儿子了。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/237.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音14:22-33&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p>+ 有关鬼</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>根据圣经，鬼是真实的存在，它们不是人死后的灵魂变的，也不是动物植物成精，而是一群堕落的天使，他们的头目是撒旦。圣经称呼它们为&ldquo;邪灵污鬼&rdquo;、&ldquo;荒谬的灵&rdquo;、&ldquo;敌基督的灵&rdquo;、&ldquo;这世上的灵&rdquo;等，这是表示有多数的灵界的存在物，鬼不是上帝造的，是天使堕落而来的，他们是有限的，而不是全能的。（引自：http://ocochome.info）</p>

</div>

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
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">耶稣叫门徒上船，而祂独自去祷告。令人惊讶的是，祂有意地送门徒到暴风雨中，看这些领袖挣扎好一会儿。随后耶稣在水上面行走，往他们那里去。他们又累又害怕，便喊叫起来：&ldquo;是个鬼怪！&rdquo;耶稣想要安抚他们时彼得大胆地要求从水面上走到耶稣那里。一开始彼得走得很好直到他的眼目离开耶稣，就害怕地大声求救。耶稣立刻救了他。十二使徒明白与他们同在的是上帝的儿子，就都拜祂。</p>

<ul>
	<li class="nobreak-final-final">（进阶学习：<span class="popup-link" @click = "popUp('pop4')"> 马可福音6:45-52</span>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">45&nbsp;</sup>耶稣随即催门徒上船，先渡到那边伯赛大去，等他叫众人散开。<sup class="versenum">46&nbsp;</sup>他既辞别了他们，就往山上去祷告。<sup class="versenum">47&nbsp;</sup>到了晚上，船在海中，耶稣独自在岸上，<sup class="versenum">48&nbsp;</sup>看见门徒因风不顺摇橹甚苦。夜里约有四更天，就在海面上走，往他们那里去，意思要走过他们去。<sup class="versenum">49&nbsp;</sup>但门徒看见他在海面上走，以为是鬼怪，就喊叫起来，<sup class="versenum">50&nbsp;</sup>因为他们都看见了他，且甚惊慌。耶稣连忙对他们说：&ldquo;你们放心！是我，不要怕！&rdquo;<sup class="versenum">51&nbsp;</sup>于是到他们那里，上了船，风就住了。他们心里十分惊奇，<sup class="versenum">52&nbsp;</sup>这是因为他们不明白那分饼的事，心里还是愚顽。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 约翰福音6:16-21</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>到了晚上，他的门徒下海边去，<sup class="versenum">17&nbsp;</sup>上了船，要过海往迦百农去。天已经黑了，耶稣还没有来到他们那里。<sup class="versenum">18&nbsp;</sup>忽然狂风大作，海就翻腾起来。<sup class="versenum">19&nbsp;</sup>门徒摇橹约行了十里多路，看见耶稣在海面上走，渐渐近了船，他们就害怕。<sup class="versenum">20&nbsp;</sup>耶稣对他们说：&ldquo;是我，不要怕！&rdquo;<sup class="versenum">21&nbsp;</sup>门徒就喜欢接他上船，船立时到了他们所要去的地方。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="forward">太14:32-33</p>

<p class="forward bible"><sup>32</sup>他们上了船，风就住了。<sup>33</sup>在船上的人都拜他，说：&ldquo;你真是　神的儿子了。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣在海面上行走的神迹除了使我们认识到祂超自然的能力，更彰显出祂是以色列的弥赛亚，同时令我们思想到耶稣顾念我们的安危，你曾否在恶劣的环境之中像彼得那样呼喊过&ldquo;主啊，救我！&rdquo;？耶稣如何救你脱离困境？</li>
	<li class="forward">耶稣为什么责备彼得的&ldquo;小信&rdquo;？我们是否也和彼得一样？这个神迹让你对耶稣真正的身份有新的认识吗？为什么？</li>
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
	<li class="forward">你是否有类似的经验，似乎瞥见神的启示，却又无法领会？求神给你属灵的领悟力和洞察能力，使你能分辨神的作为，觉察神在你生命的作为和带领，使你有信心继续靠主前进。</li>
	<li class="forward">写下那些让你惧怕的事，为什么你会感到惧怕？你想耶稣会怎样看待你的这些惧怕？祂能为你做什么？有什么是你需要调整和改变的？</li>
	<li class="forward">你或身边的人目前是否有遇到什么人生的风暴？你想耶稣要你或他们学习什么功课？有哪些是你或他们需要耶稣救你或他们的？有哪些是你或他们需要自己付出行动的？</li>
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

<p>体恤并知道我们需要的的主，我们所面对的人生风浪，祢没有撇下我们一人独自去面对。祢应许与我们同在，没有任何一个境况的发生，在祢出乎之外。祢是掌管宇宙万有的神，更是赏赐万物给我们享用的主。在我们面对人生的风浪时，主啊，因为有祢在我们里面，我们就不害怕，反而可以欢喜快乐地紧紧跟随祢。当我们却步后退的时候，祢缠拉我们的手，带领我们有信心和勇气走过人生的高山低谷，生命因此得以成长成熟，满有祢的信心和荣美。奉主耶稣的名祷告，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->