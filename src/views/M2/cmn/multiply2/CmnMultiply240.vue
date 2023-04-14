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
                        <div class="chapter_number ltr"><h1>40.</h1></div>
                        <div class="chapter_title ltr"><h1>再聚焦以达至倍增</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动。</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太16:15-16</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>耶稣说：&ldquo;你们说我是谁？&rdquo;<sup class="versenum">16&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>回答说：&ldquo;你是基督，是永生神的儿子。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>主耶稣三年半的服事与生命影响着那世代，让人可以真认识天父并明白祂的心意。今天主耶稣也要在我们的服事和生活中展现一个基督文化并影响这世代的生命，并吸引人来归向祂自己，真实体验神所赐的救恩。虽然撒旦的迷惑与破坏、世人的无知与悖逆，一再攻击和阻挡神的教会和子民，但他们却无法拦阻神的旨意成就在地上。主耶稣教导我们紧紧跟随祂的脚踪行，一起经历神要成就的事，因神做事直到如今！</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">路加福音第九章来到了耶稣在加利利传道的尾声，在使徒们成功轰动的宣教之后，紧接着耶稣行了一个意义深远的大神迹，祂以五个饼和两条鱼喂饱了成千上万在荒野听祂讲道的群众（<span class="popup-link" @click = "popUp('pop2')"> 路加福音9:10-17</span>）；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>使徒回来，将所做的事告诉耶稣。耶稣就带他们暗暗地离开那里，往一座城去，那城名叫伯赛大。<sup class="versenum">11&nbsp;</sup>但众人知道了，就跟着他去。耶稣便接待他们，对他们讲论神国的道，医治那些需医的人。<sup class="versenum">12&nbsp;</sup>日头快要平西，十二个门徒来对他说：&ldquo;请叫众人散开，他们好往四面乡村里去借宿找吃的，因为我们这里是野地。&rdquo;<sup class="versenum">13&nbsp;</sup>耶稣说：&ldquo;你们给他们吃吧！&rdquo;门徒说：&ldquo;我们不过有五个饼、两条鱼，若不去为这许多人买食物就不够。&rdquo;<sup class="versenum">14&nbsp;</sup>那时人数约有五千。耶稣对门徒说：&ldquo;叫他们一排一排地坐下，每排大约五十个人。&rdquo;<sup class="versenum">15&nbsp;</sup>门徒就如此行，叫众人都坐下。<sup class="versenum">16&nbsp;</sup>耶稣拿着这五个饼、两条鱼，望着天祝福，掰开，递给门徒，摆在众人面前。<sup class="versenum">17&nbsp;</sup>他们就吃，并且都吃饱了。把剩下的零碎收拾起来，装满了十二篮子。</p>
	<!-- end bible --></div>
	时机成熟了！耶稣亲自询问最亲近的门徒：&ldquo;你们说，我是谁？&rdquo;彼得石破天惊地道出：你是上帝所立的基督（<span class="popup-link" @click = "popUp('pop3')"> 路加福音9:18-20</span>）；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣自己祷告的时候，门徒也同他在那里。耶稣问他们说：&ldquo;众人说我是谁？&rdquo;<sup class="versenum">19&nbsp;</sup>他们说：&ldquo;有人说是施洗的<u class="person underline">约翰</u>，有人说是<u class="person underline">以利亚</u>，还有人说是古时的一个先知又活了。&rdquo;<sup class="versenum">20&nbsp;</sup>耶稣说：&ldquo;你们说我是谁？&rdquo;<u class="person underline">彼得</u>回答说：&ldquo;是神所立的基督。&rdquo;</p>
	<!-- end bible --></div>
	然而这位基督却不是他们所认知的弥赛亚，耶稣第一次对门徒预言自己的受难和复活。不但如此，祂的门徒也必须跟从祂的脚踪行，就是舍己背十字架（<span class="popup-link" @click = "popUp('pop4')"> 路加福音9:21-27</span>）；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>耶稣切切地嘱咐他们，不可将这事告诉人。</p>

	<h3>预言受难</h3>

	<p><sup class="versenum">22&nbsp;</sup>又说：&ldquo;人子必须受许多的苦，被长老、祭司长和文士弃绝，并且被杀，第三日复活。&rdquo;</p>

	<p><sup class="versenum">23&nbsp;</sup>耶稣又对众人说：&ldquo;若有人要跟从我，就当舍己，天天背起他的十字架来跟从我。<sup class="versenum">24&nbsp;</sup>因为凡要救自己生命的，必丧掉生命；凡为我丧掉生命的，必救了生命。<sup class="versenum">25&nbsp;</sup>人若赚得全世界，却丧了自己、赔上自己，有什么益处呢？<sup class="versenum">26&nbsp;</sup>凡把我和我的道当做可耻的，人子在自己的荣耀里，并天父与圣天使的荣耀里降临的时候，也要把那人当做可耻的。<sup class="versenum">27&nbsp;</sup>我实在告诉你们：站在这里的，有人在没尝死味以前，必看见神的国。&rdquo;</p>
	<!-- end bible --></div>
	作者路加没有提及门徒对耶稣这段话的反应，但接下来却用了一段耶稣登山显出荣耀的记载来坚固几位门徒的信心，人子虽然会经历受苦，但最终祂将得到完全的荣耀。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音9:28-36》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音9:28-36</button><div class="collapsed" id ="Text0">

<p><sup>28</sup>说了这话以后约有八天，耶稣带着彼得、约翰、雅各上山去祷告。<sup>29</sup>正祷告的时候，他的面貌就改变了，衣服洁白放光。<sup>30</sup>忽然有摩西、以利亚两个人同耶稣说话；<sup>31</sup>他们在荣光里显现，谈论耶稣去世的事，就是他在耶路撒冷将要成的事。<sup>32</sup>彼得和他的同伴都打盹，既清醒了，就看见耶稣的荣光，并同他站着的那两个人。<sup>33</sup>二人正要和耶稣分离的时候，彼得对耶稣说：&ldquo;夫子，我们在这里真好！可以搭三座棚，一座为你，一座为摩西，一座为以利亚。&rdquo;他却不知道所说的是什么。<sup>34</sup>说这话的时候，有一朵云彩来遮盖他们；他们进入云彩里就惧怕。<sup>35</sup>有声音从云彩里出来，说：&ldquo;这是我的儿子，我所拣选的（注：有古卷作&ldquo;这是我的爱子&rdquo;），你们要听他。&rdquo;<sup>36</sup>声音住了，只见耶稣一人在那里。当那些日子，门徒不提所看见的事，一样也不告诉人。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/240.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音9:28-36&nbsp;</button>
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

<p class="up">在彼得认耶稣是弥赛亚六天后，耶稣开始教导门徒为了天国扩张必须受苦。耶稣在十二位领袖当中选了三个人并分别他们。祂让彼得、雅各、约翰能与祂更接近的来了解祂是谁并给他们特别的指示，因为他们是领袖中的领袖。祂留下九个人，带他们三个人上到山顶，让他们看见祂全然荣耀的显现。他们在那里听见天父的声音，证实耶稣是祂的儿子。虽然摩西和以利亚是犹太人的英雄，天父却使耶稣高过所有的人，并告诉这三位门徒要&ldquo;听耶稣的话&rdquo;。</p>

<ul>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop5')"> 马太福音17:1-13</span>；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<h3>改变形象</h3>

	<p><sup class="versenum">1 </sup>过了六天，耶稣带着<u class="person underline">彼得</u>、<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>暗暗地上了高山，<sup class="versenum">2&nbsp;</sup>就在他们面前变了形象，脸面明亮如日头，衣裳洁白如光。<sup class="versenum">3&nbsp;</sup>忽然，有<u class="person underline">摩西</u>、<u class="person underline">以利亚</u>向他们显现，同耶稣说话。<sup class="versenum">4&nbsp;</sup><u class="person underline">彼得</u>对耶稣说：&ldquo;主啊，我们在这里真好！你若愿意，我就在这里搭三座棚：一座为你，一座为<u class="person underline">摩西</u>，一座为<u class="person underline">以利亚</u>。&rdquo;<sup class="versenum">5&nbsp;</sup>说话之间，忽然有一朵光明的云彩遮盖他们，且有声音从云彩里出来说：&ldquo;这是我的爱子，我所喜悦的，你们要听他！&rdquo;<sup class="versenum">6&nbsp;</sup>门徒听见，就俯伏在地，极其害怕。<sup class="versenum">7&nbsp;</sup>耶稣进前来，摸他们说：&ldquo;起来，不要害怕！&rdquo;<sup class="versenum">8&nbsp;</sup>他们举目不见一人，只见耶稣在那里。</p>

	<p><sup class="versenum">9&nbsp;</sup>下山的时候，耶稣吩咐他们说：&ldquo;人子还没有从死里复活，你们不要将所看见的告诉人。&rdquo;<sup class="versenum">10&nbsp;</sup>门徒问耶稣说：&ldquo;文士为什么说<u class="person underline">以利亚</u>必须先来？&rdquo;<sup class="versenum">11&nbsp;</sup>耶稣回答说：&ldquo;<u class="person underline">以利亚</u>固然先来，并要复兴万事。<sup class="versenum">12&nbsp;</sup>只是我告诉你们：<u class="person underline">以利亚</u>已经来了，人却不认识他，竟任意待他。人子也将要这样受他们的害。&rdquo;<sup class="versenum">13&nbsp;</sup>门徒这才明白耶稣所说的是指着施洗的<u class="person underline">约翰</u>。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 马可福音9:2-13</span>）

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>改变形象</h3>

	<p><sup class="versenum">2&nbsp;</sup>过了六天，耶稣带着<u class="person underline">彼得</u>、<u class="person underline">雅各</u>、<u class="person underline">约翰</u>暗暗地上了高山，就在他们面前变了形象，<sup class="versenum">3&nbsp;</sup>衣服放光，极其洁白，地上漂布的没有一个能漂得那样白。<sup class="versenum">4&nbsp;</sup>忽然，有<u class="person underline">以利亚</u>同<u class="person underline">摩西</u>向他们显现，并且和耶稣说话。<sup class="versenum">5&nbsp;</sup><u class="person underline">彼得</u>对耶稣说：&ldquo;拉比，我们在这里真好！可以搭三座棚：一座为你，一座为<u class="person underline">摩西</u>，一座为<u class="person underline">以利亚</u>。&rdquo;<sup class="versenum">6&nbsp;</sup><u class="person underline">彼得</u>不知道说什么才好，因为他们甚是惧怕。<sup class="versenum">7&nbsp;</sup>有一朵云彩来遮盖他们，也有声音从云彩里出来说：&ldquo;这是我的爱子，你们要听他！&rdquo;<sup class="versenum">8&nbsp;</sup>门徒忽然周围一看，不再见一人，只见耶稣同他们在那里。</p>

	<p><sup class="versenum">9&nbsp;</sup>下山的时候，耶稣嘱咐他们说：&ldquo;人子还没有从死里复活，你们不要将所看见的告诉人。&rdquo;<sup class="versenum">10&nbsp;</sup>门徒将这话存记在心，彼此议论从死里复活是什么意思。<sup class="versenum">11&nbsp;</sup>他们就问耶稣说：&ldquo;文士为什么说<u class="person underline">以利亚</u>必须先来？&rdquo;<sup class="versenum">12&nbsp;</sup>耶稣说：&ldquo;<u class="person underline">以利亚</u>固然先来复兴万事。经上不是指着人子说，他要受许多的苦、被人轻慢呢？<sup class="versenum">13&nbsp;</sup>我告诉你们：<u class="person underline">以利亚</u>已经来了，他们也任意待他，正如经上所指着他的话。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路9:34-35</p>

<p class="forward bible"><sup>34</sup>说这话的时候，有一朵云彩来遮盖他们；他们进入云彩里就惧怕。<sup>35</sup>有声音从云彩里出来，说：&ldquo;这是我的儿子，我所拣选的（注：有古卷作&ldquo;这是我的爱子&rdquo;），你们要听他。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣在山上改变像貌的一幕中，上帝宣告了祂独特的身份，并说&ldquo;你们要听从祂&rdquo;。做为耶稣的门徒，我们要如何听从祂呢？</li>
	<li class="forward">评估这8个多月我们在门徒倍增小组里，与组员们一起《学像耶稣生命》最大的得着是什么？为什么？</li>
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
	<li class="forward">在《信徒动员表》中或你现有的门徒小组，祷告并选出三个你要重点栽培和发展的门徒，装备他们以后可以与你一起带领小组，并主动关心和帮助弟兄姐妹也来学像耶稣基督。</li>
	<li class="forward">未来一周，找时间评估你带领《初信栽培》的门徒生命。他们若预备好接受洗礼，请与教会牧者沟通安排事宜，并在洗礼前安排时间与他们上《洗礼课程》。</li>
	<li class="forward">与教会牧者沟通，小组主动安排有一次小区和周边&ldquo;步行祷告&rdquo;的行动，祝福并为小区祷告，愿主耶稣的荣耀、怜悯和医治临到这地。</li>
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

<p>亲爱的天父，祢的荣耀、公义和慈爱彰显予这地。我们愿作一个懂得感恩和知足的人。感谢祢，这半年多我们可以一起学习并效法主耶稣基督的生命，并在小组中彼此扶持、督责及勉励行善。天父啊，我们的生命不满足只停留在对祢的认知上，我们愿意在情感和经历上天天经历祢的真实与同在。我们也愿意帮助更多弟兄姐妹一起来认识祢、经历祢，因祢是我们生命的主。求主帮助我们谨守和遵行主耶稣话语的吩咐，依靠圣灵在各自的岗位和社区中为主作光作盐，荣耀见证祢的名。奉主耶稣的名祈求，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->