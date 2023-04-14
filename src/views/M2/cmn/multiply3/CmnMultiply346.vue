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
                        <div class="chapter_number ltr"><h1>46.</h1></div>
                        <div class="chapter_title ltr"><h1>公会中辩解——耶路撒冷</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒21:40</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>千夫长准了。<u class="person underline">保罗</u>就站在台阶上，向百姓摆手。他们都静默无声，<u class="person underline">保罗</u>便用希伯来话对他们说：</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">圣灵的&ldquo;指证&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒21:23</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>你就照着我们的话行吧。我们这里有四个人，都有愿在身。</p>
	<!-- end bible --></div>
	是预告而不是&ldquo;禁止&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 徒16:6-7</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>圣灵既然禁止他们在亚细亚讲道，他们就经过弗吕家、加拉太一带地方。<sup class="versenum">7&nbsp;</sup>到了每西亚的边界，他们想要往庇推尼去，耶稣的灵却不许。</p>
	<!-- end bible --></div>
	许多人寻求&ldquo;圣灵带领&rdquo;、&ldquo;神的旨意&rdquo;，其实只是一种&ldquo;趋吉避凶&rdquo;的算命心理，只是想知道怎样做对自己最有利，而不是想知道怎样做最讨神喜悦。如果圣灵向我们预告前面有&ldquo;捆锁与患难&rdquo;在等待，我们还会继续顺服前行吗？正如主耶稣明知祂将会在耶路撒冷受死，却仍&ldquo;定意向耶路撒冷去&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 路9:51</span>），

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">51&nbsp;</sup>耶稣被接上升的日子将到，他就定意向耶路撒冷去，</p>
	<!-- end bible --></div>
	出于圣灵的带领都是一个原则：&ldquo;不要成就我的意思，只要成就祢的意思&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 路22:42</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>说：&ldquo;父啊！你若愿意，就把这杯撤去！然而，不要成就我的意思，只要成就你的意思。&rdquo;</p>
	<!-- end bible --></div>
	每一个信徒都和保罗一样，有一份&ldquo;从主耶稣所领受的职事&rdquo;。这一份职事的内容和大小由神决定，我们当做的是忠心完成自己的一份、&ldquo;行完我的路程&rdquo;，人生就有永远的价值，在神眼中被&ldquo;看为宝贵&rdquo;。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗先为自己信仰上的转变铺路，他陈诉自己曾经是一个受过最严谨训练的法利赛人，过去为祖宗的律法大发热心，甚至激烈地逼迫耶稣的门徒；话锋一转，保罗开始见证他改变的经过，复活的拿撒勒人耶稣曾经在大光中亲自向他显现，并且感动一位敬虔的犹太人亚拿尼亚去帮助他，同时向他宣告神在他身上的旨意。</p>

<p class="indent2">后来他在耶路撒冷竭力向犹太人见证耶稣时，却遭到了自己人的敌挡，在一次异象中，神指示他前往远方之地，向外邦人宣扬耶稣的福音。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒22:22-23:11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒22:22-23:11</button><div class="collapsed" id ="Text0">

<p><sup>22</sup>众人听他说到这句话，就高声说：&ldquo;这样的人，从世上除掉他吧！他是不当活着的！&rdquo; <sup>23</sup>众人喧嚷，摔掉衣裳，把尘土向空中扬起来。<sup>24</sup>千夫长就吩咐将保罗带进营楼去，叫人用鞭子拷问他，要知道他们向他这样喧嚷是为甚么缘故。<sup>25</sup>刚用皮条捆上，保罗对旁边站着的百夫长说：&ldquo;人是罗马人，又没有定罪，你们就鞭打他，有这个例吗？&rdquo; <sup>26</sup>百夫长听见这话，就去见千夫长，告诉他说：&ldquo;你要做甚么？这人是罗马人！&rdquo; <sup>27</sup>千夫长就来问保罗说：&ldquo;你告诉我，你是罗马人吗？&rdquo;保罗说：&ldquo;是。&rdquo;<sup>28</sup>千夫长说：&ldquo;我用许多银子，才入了罗马的民籍。&rdquo;保罗说：&ldquo;我生来就是。&rdquo; <sup>29</sup>于是那些要拷问保罗的人，就离开他去了。千夫长既知道他是罗马人，又因为捆绑了他，也害怕了。</p>

<p><sup>30</sup>第二天，千夫长为要知道犹太人控告保罗的实情，便解开他，吩咐祭司长和全公会的人都聚集，将保罗带下来，叫他站在他们面前。</p>

<p><sup>23</sup>:<sup>1</sup>保罗定睛看着公会的人，说：&ldquo;弟兄们，我在　神面前行事为人都是凭着良心，直到今日。&rdquo; <sup>2</sup>大祭司亚拿尼亚就吩咐旁边站着的人打他的嘴。<sup>3</sup>保罗对他说：&ldquo;你这粉饰的墙，神要打你！你坐堂为的是按律法审问我，你竟违背律法，吩咐人打我吗？&rdquo; <sup>4</sup>站在旁边的人说：&ldquo;你辱骂　神的大祭司吗？&rdquo;<sup>5</sup>保罗说：&ldquo;弟兄们，我不晓得他是大祭司。经上记着说：&lsquo;不可毁谤你百姓的官长。&rsquo;&rdquo; <sup>6</sup>保罗看出大众一半是撒都该人，一半是法利赛人，就在公会中大声说：&ldquo;弟兄们，我是法利赛人，也是法利赛人的子孙。我现在受审问，是为盼望死人复活。&rdquo;</p>

<p><sup>7</sup>说了这话，法利赛人和撒都该人就争论起来，会众分为两党。<sup>8</sup>因为撒都该人说没有复活，也没有天使和鬼魂；法利赛人却说两样都有。 <sup>9</sup>于是大大地喧嚷起来。有几个法利赛党的文士站起来争辩说：&ldquo;我们看不出这人有甚么恶处，倘若有鬼魂或是天使对他说过话，怎么样呢？&rdquo; <sup>10</sup>那时大起争吵，千夫长恐怕保罗被他们扯碎了，就吩咐兵丁下去，把他从众人当中抢出来，带进营楼去。</p>

<p><sup>11</sup>当夜，主站在保罗旁边说：&ldquo;放心吧！你怎样在耶路撒冷为我作见证，也必怎样在罗马为我作见证。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/346.mp4" type="button" class="external-movie">
         观看徒22:22-23:11</button>
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
	<li class="up"><strong>故事重述 </strong>

	<ul class="up">
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="nobreak-final-final">身为罗马公民的保罗虽受到千夫长保护，但仍处于极大的危险中。罗马千夫长力求了解实情及遵守罗马公民法，展现出他的清廉公正。犹太人相当热心于自己的宗教信仰，对持不同信念或被他们认为&ldquo;冒犯&rdquo;上帝的那些人，他们会想要杀掉。保罗利用神学的差异，将大家的焦点从自己身上转到神学上的争辩。耶稣向保罗显现，要他知道尽管犹太的宗教领袖敌对他，主正透过他作工。当我们追求上帝国度的扩张时，耶稣持守祂的应许：&ldquo;我就常与你们同在&rdquo;（馬太福音28 :20）。如同保罗在以弗所书2:10所说的:&ldquo;我们原是他的工作，在基督耶稣里造成的，为要叫我们行善，就是神所预备叫我们行的。&rdquo;我们每个人都是主的工作，为要去行善，祂按自己的意思，使用我们所有的经历做祂预备要我们行的。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒22:30</p>

<p class="forward bible"><sup>30</sup>第二天，千夫长为要知道犹太人控告保罗的实情，便解开他，吩咐祭司长和全公会的人都聚集，将保罗带下来，叫他站在他们面前。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">保罗在神面前行事为人都是凭着良心；身为主的门徒，我们怎样才能把&ldquo;凭着良心行事为人&rdquo;的准则，应用在家庭、职场、学校或生活当中？</li>
	<li class="forward">&ldquo;当夜，主站在保罗旁边，说：放心吧！&rdquo;这个异象显示保罗虽在黑暗笼罩的境遇当中，仍有主的同在；这件事给你什么激励？你是否相信，当我们陷入危难或是逼迫中，主也会与我们同在？为什么？</li>
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
	<li class="forward">当保罗受到不平的对待时，保罗使用他的罗马公民权以及犹太律法的规定来保护自己，保罗立定心志为主受苦、甚至受死，但却不做无谓的牺牲。
	<ul class="forward">
		<li class="forward">保罗的做法提供我们一个原则，若基督徒受到不公平或恶意的对待时，只要不违背福音的原则，不使神的名受到亏损，基督徒可以在国家的法律保护之下为自己抗争，直接维护社会的正义。</li>
		<li class="forward">神所喜悦的是我们行公义、好怜悯、存谦卑的心与祂同行。为你自己的国民身份感恩，相信神有祂自己的美意，并祷告神使你在所处的岗位/职位上为祂作美好的见证，成为光和盐，堵住破口。</li>
	</ul>
	</li>
	<li class="forward">在《信徒动员表》里写下2位你所认识的其他教会的弟兄/姐妹名字，请他们分享个人如何信主、如何在家庭，职场或学校为主作见证，并彼此鼓励和代祷。</li>
	<li class="forward">在《福音行动表》上找出那些目前还反对、取笑和攻击你信仰的人并为他们祷告，求主施恩怜悯并赦免他们，因为他们所做的他们不知道。求主亲自得着他们，甚至有一天他们可以成为被主耶稣大大使用的人。</li>
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

<ul class="forward">
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为自己国民的身份感谢神，相信祂让我们在这个国家、这个城市、这个环境、这个家庭成长和受教育，有祂自己的美意，并对我们生命有奇妙的计划。也为我们国家求祝福，愿神施恩怜悯，让这地成为蒙福和福音拓展之地。</li>
	<li class="forward">求主将那先知讲道的口才赐给祂的仆人，使他们能够按着正义分解真道、按时分粮给弟兄姊妹和牧养主的教会。也求主记念和坚定他们在祂面前所做的一切圣工，使做工的果效常常伴随他们。</li>
	<li class="forward">求主赐祂仆人信心和力量，在他们感觉软弱无助的时候，与他们同在，担当他们的软弱，扶助他们的身体。主耶和华亲自成为他们的力量、随时的帮助和四围的盾牌，使他们抬起头来，为主作无惧的见证。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->