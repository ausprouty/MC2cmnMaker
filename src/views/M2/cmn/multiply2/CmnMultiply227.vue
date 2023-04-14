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
                        <div class="chapter_number ltr"><h1>27.</h1></div>
                        <div class="chapter_title ltr"><h1>作领袖的期待</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路6:12-13</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>那时，耶稣出去上山祷告，整夜祷告神。<sup class="versenum">13&nbsp;</sup>到了天亮，叫他的门徒来，就从他们中间挑选十二个人，称他们为使徒。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣彻夜祷告，从已受过&ldquo;得人事工&rdquo;训练的门徒当中选出十二使徒，要他们常和祂同在（个人发展），并差遣他们去做和祂一样的事（给予事工的权柄）。在&ldquo;使万人作主的门徒&rdquo;上，我们当效法主耶稣的榜样，在生活与教会的服侍中，凡事仰赖上帝，寻求祂的心意，并以生命榜样为主作见证，花时间建立属神的门徒和教会领袖。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">耶稣的名声传遍了加利利地区，祂权威性的教导以及大能的医治吸引群众从各地前来寻找祂。当主耶稣在加利利开始服事时，祂随即呼召首批门徒跟从祂，彼得、雅各和约翰成为耶稣在世上最亲近的同工（<span class="popup-link" @click = "popUp('pop2')"> 路加福音5:1-11</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>在革尼撒勒湖边教训人</h3>

	<p><sup class="versenum">1 </sup>耶稣站在革尼撒勒湖边，众人拥挤他，要听神的道。<sup class="versenum">2&nbsp;</sup>他见有两只船湾在湖边，打鱼的人却离开船洗网去了。<sup class="versenum">3&nbsp;</sup>有一只船是<u class="person underline">西门</u>的，耶稣就上去，请他把船撑开，稍微离岸，就坐下，从船上教训众人。</p>

	<p><sup class="versenum">4&nbsp;</sup>讲完了，对<u class="person underline">西门</u>说：&ldquo;把船开到水深之处，下网打鱼。&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">西门</u>说：&ldquo;夫子，我们整夜劳力，并没有打着什么，但依从你的话，我就下网。&rdquo;<sup class="versenum">6&nbsp;</sup>他们下了网，就圈住许多鱼，网险些裂开，<sup class="versenum">7&nbsp;</sup>便招呼那只船上的同伴来帮助。他们就来，把鱼装满了两只船，甚至船要沉下去。</p>

	<p><sup class="versenum">8&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>看见，就俯伏在耶稣膝前，说：&ldquo;主啊！离开我，我是个罪人！&rdquo;<sup class="versenum">9&nbsp;</sup>他和一切同在的人都惊讶这一网所打的鱼。<sup class="versenum">10&nbsp;</sup>他的伙伴<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>、<u class="person underline">约翰</u>也是这样。耶稣对<u class="person underline">西门</u>说：&ldquo;不要怕，从今以后你要得人了。&rdquo;<sup class="versenum">11&nbsp;</sup>他们把两只船拢了岸，就撇下所有的，跟从了耶稣。</p>
	<!-- end bible --></div>
	不久，祂更从门徒中拣选了十二个人，称他们为&ldquo;使徒&rdquo;。</li>
	<li class="nobreak-final-final">在这段称为&ldquo;平原宝训&rdquo;的讲论中，耶稣向门徒以及众人宣示国度的伦理要求。祂以先知似的呼吁作为开始，向贫乏受压的人宣告上帝的怜悯和恩典，向富足背道的人宣告上帝将临到的审判。耶稣有关八福的教训,与马太的记录有差异，其中①只涉及马太福音八福中的四种（<span class="popup-link" @click = "popUp('pop3')"> 太5:3-13</span>）；
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>&ldquo;虚心的人有福了！因为天国是他们的。<sup class="versenum">4&nbsp;</sup>哀恸的人有福了！因为他们必得安慰。<sup class="versenum">5&nbsp;</sup>温柔的人有福了！因为他们必承受地土。<sup class="versenum">6&nbsp;</sup>饥渴慕义的人有福了！因为他们必得饱足。<sup class="versenum">7&nbsp;</sup>怜恤人的人有福了！因为他们必蒙怜恤。<sup class="versenum">8&nbsp;</sup>清心的人有福了！因为他们必得见神。<sup class="versenum">9&nbsp;</sup>使人和睦的人有福了！因为他们必称为神的儿子。<sup class="versenum">10&nbsp;</sup>为义受逼迫的人有福了！因为天国是他们的。<sup class="versenum">11&nbsp;</sup>人若因我辱骂你们，逼迫你们，捏造各样坏话毁谤你们，你们就有福了。<sup class="versenum">12&nbsp;</sup>应当欢喜快乐，因为你们在天上的赏赐是大的。在你们以前的先知，人也是这样逼迫他们。</p>

	<p><sup class="versenum">13&nbsp;</sup>&ldquo;你们是世上的盐。盐若失了味，怎能叫它再咸呢？以后无用，不过丢在外面，被人践踏了。</p>
	<!-- end bible --></div>
	②马太只讲祝福，路加也讲咒诅（<span class="popup-link" @click = "popUp('pop4')"> 路加福音6:24-26</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>&ldquo;但你们富足的人有祸了！因为你们受过你们的安慰。<sup class="versenum">25&nbsp;</sup>你们饱足的人有祸了！因为你们将要饥饿。你们喜笑的人有祸了！因为你们将要哀恸哭泣。<sup class="versenum">26&nbsp;</sup>人都说你们好的时候，你们就有祸了！因为他们的祖宗待假先知也是这样。</p>
	<!-- end bible --></div>
	</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音6:20-26》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音6:20-26</button><div class="collapsed" id ="Text0">

<p><sup>20</sup>耶稣举目看着门徒，说：&ldquo;你们贫穷的人有福了，因为　神的国是你们的！<sup>21</sup>你们饥饿的人有福了，因为你们将要饱足！你们哀哭的人有福了，因为你们将要喜笑！<sup>22</sup>人为人子恨恶你们，拒绝你们，辱骂你们，弃掉你们的名，以为是恶，你们就有福了。<sup>23</sup>当那日，你们要欢喜跳跃，因为你们在天上的赏赐是大的！他们的祖宗待先知也是这样。<sup>24</sup>但你们富足的人有祸了，因为你们受过你们的安慰！<sup>25</sup>你们饱足的人有祸了，因为你们将要饥饿！你们喜笑的人有祸了，因为你们将要哀恸哭泣！<sup>26</sup>人都说你们好的时候，你们就有祸了，因为他们的祖宗待假先知也是这样！</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/227.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音6:20-26&nbsp;</button>
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

<p class="up">设立十二个领袖后，耶稣开始教导门徒关于天国的期望。培育领袖的关键原则就是把&ldquo;期望&rdquo;讲清楚。天国的生活和天国的子民是什么样子。耶稣详细列出的各样特质， 与一般社会大众的看法成了强烈的对比，所描写的正是祂的生命榜样。以耶稣为生命中心的领袖和天国子民要能反映出祂的特质和优先次序，而非世界的。</p>

<p class="up">（进深学习：<span class="popup-link" @click = "popUp('pop5')"> 马太福音5:1-12</span>）</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">1 </sup>耶稣看见这许多的人，就上了山，既已坐下，门徒到他跟前来，<sup class="versenum">2&nbsp;</sup>他就开口教训他们，说：<sup class="versenum">3&nbsp;</sup>&ldquo;虚心的人有福了！因为天国是他们的。<sup class="versenum">4&nbsp;</sup>哀恸的人有福了！因为他们必得安慰。<sup class="versenum">5&nbsp;</sup>温柔的人有福了！因为他们必承受地土。<sup class="versenum">6&nbsp;</sup>饥渴慕义的人有福了！因为他们必得饱足。<sup class="versenum">7&nbsp;</sup>怜恤人的人有福了！因为他们必蒙怜恤。<sup class="versenum">8&nbsp;</sup>清心的人有福了！因为他们必得见神。<sup class="versenum">9&nbsp;</sup>使人和睦的人有福了！因为他们必称为神的儿子。<sup class="versenum">10&nbsp;</sup>为义受逼迫的人有福了！因为天国是他们的。<sup class="versenum">11&nbsp;</sup>人若因我辱骂你们，逼迫你们，捏造各样坏话毁谤你们，你们就有福了。<sup class="versenum">12&nbsp;</sup>应当欢喜快乐，因为你们在天上的赏赐是大的。在你们以前的先知，人也是这样逼迫他们。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路6:20</p>

<p class="forward bible">耶稣举目看着门徒，说：&ldquo;你们贫穷的人有福了，因为神的国是你们的！</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">为什么说信徒受到人的恨恶、拒绝、辱骂，是有福的呢？ (22节) 相对的也提到&ldquo;富足&rdquo;、&ldquo;饱足&rdquo;、&ldquo;好的时候&rdquo;就有&ldquo;祸&rdquo;了？ (24~26节) 这与现代世界的价值观有什么出入吗？为什么？如果今日我们按照主的价值观来看待世上的事物，会有什么结果？</li>
	<li class="forward">主耶稣为何教训门徒说&ldquo;人都说你们好的时候，你们就有祸了&rdquo;？我们基督徒应当怎样把这句话应用在平日的生活当中？</li>
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
	<li class="forward">在未来一周，花时间在主面前反思自己自从信主后，你的待人处事或是世界价值观有怎样的改变吗？哪一些基督的特征和生命是你需要培养和建立的吗？将它们记下，下周在小组中分享。</li>
	<li class="forward">帮助你所造就的门徒，更深认识神的话语，知道主耶稣对天国子民特质的期望，并依靠圣灵操练活出基督生命。（若时间许可，与他们一起灵修祷告并分享心得）。</li>
	<li class="forward">在《福音行动表》写下2-3位未信的家人朋友/同事/同学，主动问问他们对你的看法，或是你需要成长的地方，并与他们分享信耶稣对你生命的改变和影响。</li>
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

<p>亲爱的天父，赞美祢，祢是全地的主，也是乐意施恩的主！感谢主耶稣在世上对门徒的教导，祢也要我们效法祢，活出祢给我们天国的生命与品格。求主帮助我们凡事谦虚并被祢的爱充满，纵然在待人处事上遭受反对、误解或攻击，求祢帮助我们不去争辩、去维护、去报复；乃是满有祢仁爱的生命，行事为人与所蒙的恩相称。求主也帮助我们谨守遵行祢话语的吩咐，在我们所处的岗位和社区中作光作盐，身上满有主耶稣馨香之气，作主荣耀的见证。奉主耶稣的名祈求，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->