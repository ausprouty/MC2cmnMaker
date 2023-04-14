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
                        <div class="chapter_number ltr"><h1>29.</h1></div>
                        <div class="chapter_title ltr"><h1>回程坚固初信徒——坚固初信徒信心</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒14:19-20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>但有些犹太人从安提阿和以哥念来，挑唆众人，就用石头打<u class="person underline">保罗</u>，以为他是死了，便拖到城外。<sup class="versenum">20&nbsp;</sup>门徒正围着他，他就起来，走进城去。第二天，同<u class="person underline">巴拿巴</u>往特庇去。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">在外邦人中行神迹，却有意想不到的结果。外邦人对神迹有完全不同的理解和解释。经文（<span class="popup-link" @click = "popUp('pop2')"> 徒14:8-20</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>路司得城里坐着一个两脚无力的人，生来是瘸腿的，从来没有走过。<sup class="versenum">9&nbsp;</sup>他听<u class="person underline">保罗</u>讲道，<u class="person underline">保罗</u>定睛看他，见他有信心，可得痊愈，<sup class="versenum">10&nbsp;</sup>就大声说：&ldquo;你起来，两脚站直！&rdquo;那人就跳起来，而且行走。</p>

	<h3>众人要向二使徒献祭</h3>

	<p><sup class="versenum">11&nbsp;</sup>众人看见<u class="person underline">保罗</u>所做的事，就用吕高尼的话大声说：&ldquo;有神借着人形降临在我们中间了！&rdquo;<sup class="versenum">12&nbsp;</sup>于是称<u class="person underline">巴拿巴</u>为<u class="person underline">宙斯</u>，称<u class="person underline">保罗</u>为<u class="person underline">希耳米</u>，因为他说话领首。<sup class="versenum">13&nbsp;</sup>有城外<u class="person underline">宙斯</u>庙的祭司牵着牛、拿着花圈，来到门前，要同众人向使徒献祭。<sup class="versenum">14&nbsp;</sup><u class="person underline">巴拿巴</u>、<u class="person underline">保罗</u>二使徒听见，就撕开衣裳，跳进众人中间，喊着说：<sup class="versenum">15&nbsp;</sup>&ldquo;诸君，为什么做这事呢？我们也是人，性情和你们一样。我们传福音给你们，是叫你们离弃这些虚妄，归向那创造天、地、海和其中万物的永生神。<sup class="versenum">16&nbsp;</sup>他在从前的世代，任凭万国各行其道，<sup class="versenum">17&nbsp;</sup>然而为自己未尝不显出证据来，就如常施恩惠，从天降雨赏赐丰年，叫你们饮食饱足、满心喜乐。&rdquo;<sup class="versenum">18&nbsp;</sup>二人说了这些话，仅仅地拦住众人不献祭于他们。</p>

	<p><sup class="versenum">19&nbsp;</sup>但有些犹太人从安提阿和以哥念来，挑唆众人，就用石头打<u class="person underline">保罗</u>，以为他是死了，便拖到城外。<sup class="versenum">20&nbsp;</sup>门徒正围着他，他就起来，走进城去。第二天，同<u class="person underline">巴拿巴</u>往特庇去。</p>
	<!-- end bible --></div>
	并没说是否有人因这神迹而相信基督。这神迹和彼得约翰当时在圣殿美门口医治瘸腿的相似，但是却有完全不同的结果。从安提阿和以哥念来的犹太人，挑唆众人用石头打保罗。亲眼看见神迹的群众，竟然能轻易被挑唆用石头打保罗。保罗被石头打，众人以为他是死了，便拖到城外。门徒正围着他，他就起来，走进城去。这是另一个神迹：保罗被石头打，竟然没事。保罗起来，走进城去，再回去那差点打死他的地方。这真是圣灵所赐勇敢的心，让保罗至死忠心！</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">前一天保罗刚在路司得被人用石头打，没死，第二天就同巴拿巴往特庇去了。保罗将生命置之度外，让神负责，由神保守。到了特庇，就对那城里的人传了福音，使好些人作门徒。保罗有很专一的使命感，无论到哪里都忠心勇敢地执行神所托付给他的使命。在特庇有好些人作主门徒，教会就被建立起来了。</p>

<ul>
	<li class="flush"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒14:21-28》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒14:21-28</button><div class="collapsed" id ="Text0">

<p><sup>21</sup>对那城里的人传了福音，使好些人作门徒；就回路司得、以哥念、安提阿去， <sup>22</sup>坚固门徒的心，劝他们恒守所信的道，又说：&ldquo;我们进入　神的国，必须经历许多艰难。&rdquo;<sup>23</sup>二人在各教会中选立了长老，又禁食祷告，就把他们交托所信的主。<sup>24</sup>二人经过彼西底，来到旁非利亚。<sup>25</sup>在别加讲了道，就下亚大利去， <sup>26</sup>从那里坐船，往安提阿去。当初他们被众人所托，蒙　神之恩，要办现在所做之工，就是在这地方。<sup>27</sup>到了那里，聚集了会众，就述说　神藉他们所行的一切事，并　神怎样为外邦人开了信道的门。<sup>28</sup>二人就在那里同门徒住了多日。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/329.mp4" type="button" class="external-movie">
         观看&nbsp;徒14:20-28&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</li>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">在特庇建立教会之后，保罗和巴拿巴决定在回叙利亚安提阿的路上，重访拜访那些刚建立的教会。这样做是为了坚固新信徒的信心。另外，他们也为每间新教会选立了长老，以稳固教会的成长。虽然这些教会只成立了几个月，新信徒却已开始带领。保罗在基础的门徒训练中，教导新信徒：身为耶稣的门徒，面对逼迫和困难，要勇敢顺服。这是门徒训练中一个很重要的原则。保罗和巴拿巴完成所有工作后，就回到安提阿，述说主所行的一切事。整个旅程大约用了一年的时间。旅程结束后不久，保罗就写信给加拉太的新教会。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒14:27-28</p>

<p class="forward bible"><sup>27</sup>到了那里，聚集了会众，就述说　神藉他们所行的一切事，并　神怎样为外邦人开了信道的门。<sup>28</sup>二人就在那里同门徒住了多日。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">如果你在一个地方被欺压或有被伤害的经历，你还愿意回去吗？为什么？</li>
</ul>

<p class="indent2">在 21 节中保罗依次回去路司得、以哥念、安提阿，坚固那里的教会。你观察他们在哪些方面坚固众教会呢？我们从这些事可以学到什么功课？</p>

<ul class="forward">
	<li class="forward">反思：我们今天已经有了全本圣经，属灵的知识比使徒时代更多，但却不能象当日那么快就能在教会中选立长老。当日的信徒是在逼迫中信主的，他们肯付代价信主，也肯付代价追求主，因此生命就长进得更快。我们现在是太安逸了，信主不用付代价，也不愿付代价去跟随主，所以许多教会迟迟不能显出生命成熟的长老来。</li>
</ul>

<p class="indent2">回顾并总结保罗的第一次宣教旅程，你有何触动或感想？我们教会或小组是否有在建立和培养新的领袖？做的如何？为什么？</p>

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
	<li class="forward">学习保罗向不同群体传福音的方式，本周尝试向两个属于不同群体的人用适合他们的方式传福音。</li>
	<li class="forward">对教会所认领的宣教群体或宣教士，关心问候他们，并问他们有什么是教会或是小组可以为他们做的。</li>
	<li class="forward">为更多的人能在逼迫中信主，肯付代价信主，也肯付代价追求主，生命不断长进祷告。也为我们信主多年的弟兄姐妹愿意付代价的跟随主，教会能够培养更多生命成熟的长老和领袖起来，教会和倍增小组在各地被建立，倍增多代门徒和教会。</li>
	<li class="forward">为教会在建立和培养新的领袖上祷告，更加积极和有意的建立门徒和同工。同时，你自己持续接受装备，更合乎主用，奉主差遣。</li>
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

<p class="forward">我们在天上的父，愿人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上，如同行在天上。在各地的教会，因在基督里都是一家人，且在基督里同享属灵的产业和福气。天父啊，我们愿做顺从的子民，效法耶稣的榜样，并在各地坚固门徒的心，劝他们恒守所信的道。也愿世人的心眼被祢打开，心被柔软，归向祢这独一的真神。求主坚定教会所做的工，在各地显明祢自己的作为来，求主将得救的人数多多加给教会，更多的教会和倍增小组在各地被建立，倍增多代门徒和教会。奉主的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->