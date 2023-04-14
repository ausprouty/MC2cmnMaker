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
                        <div class="chapter_number ltr"><h1>47.</h1></div>
                        <div class="chapter_title ltr"><h1>谋杀得保护——耶路撒冷</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒22:30</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>第二天，千夫长为要知道犹太人控告<u class="person underline">保罗</u>的实情，便解开他，吩咐祭司长和全公会的人都聚集，将<u class="person underline">保罗</u>带下来，叫他站在他们面前。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">保罗所经历的患难都极其沉重，一直伴随着他为主工作的一生。但与神所预备的那&ldquo;极重无比、永远荣耀&rdquo;相比，他把这些患难看作&ldquo;至暂至轻的苦楚&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 林后4:17</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>我们这至暂至轻的苦楚，要为我们成就极重无比、永远的荣耀。</p>
	<!-- end bible --></div>
	简直不成比例。因为信徒苦难的经历，都是为了成就将要显明的荣耀，&ldquo;如果我们和祂一同受苦，也必和祂一同得荣耀&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 罗8:17</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>既是儿女，便是后嗣，就是神的后嗣，和基督同做后嗣。如果我们和他一同受苦，也必和他一同得荣耀。</p>
	<!-- end bible --></div>
	而&ldquo;基督的爱&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 林后5:14</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>原来基督的爱激励我们，因我们想：一人既替众人死，众人就都死了；</p>
	<!-- end bible --></div>
	不仅成为激励我们事奉的动力，也改变了我们的眼光，使我们不再按照人的标准，凭外表来认人，以前认为重要的事情现在看起来已无甚价值了（<span class="popup-link" @click = "popUp('pop5')"> 腓3:4-8</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>其实我也可以靠肉体，若是别人想他可以靠肉体，我更可以靠着了。<sup class="versenum">5&nbsp;</sup>我第八天受割礼，我是以色列族便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；<sup class="versenum">6&nbsp;</sup>就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。<sup class="versenum">7&nbsp;</sup>只是我先前以为于我有益的，我现在因基督都当做有损的。<sup class="versenum">8&nbsp;</sup>不但如此，我也将万事当做有损的，因我以认识我主基督耶稣为至宝。</p>

	<p>我为他已经丢弃万事，看做粪土，为要得着基督，</p>
	<!-- end bible --></div>
	</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当保罗向群众解释自己为何在外邦人当中工作的原因时，或许是&ldquo;外邦人&rdquo;所代表的一切激起了众人的反感，以至群情激愤，千夫长为了探得实情决定对保罗施刑，就在千钧一发之际，保罗以罗马公民权作为护身符而逃过了一劫。罗马千夫长为了厘清犹太人控告保罗的真相，他给了保罗一个在公会面前申诉的机会，保罗首先坦言自己的清白，继而毫不留情地指责祭司亚拿尼亚的不公，接下来机智地将他受审的原因导向福音的核心，亦即死人复活的盼望，保罗的论述当场引发了神学的争辩，以至一发不可收拾，罗马千夫长不得不草草结束了这场申辩。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒23:12-35》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒23:12-35</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>到了天亮，犹太人同谋起誓说：&ldquo;若不先杀保罗，就不吃不喝！&rdquo; <sup>13</sup>这样同心起誓的有四十多人。<sup>14</sup>他们来见祭司长和长老，说：&ldquo;我们已经起了一个大誓，若不先杀保罗，就不吃甚么。<sup>15</sup>现在你们和公会要知会千夫长，叫他带下保罗到你们这里来，假作要详细察考他的事；我们已经预备好了，不等他来到跟前就杀他。&rdquo;</p>

<p><sup>16</sup>保罗的外甥听见他们设下埋伏，就来到营楼里告诉保罗。<sup>17</sup>保罗请一个百夫长来，说：&ldquo;你领这少年人去见千夫长，他有事告诉他。&rdquo;<sup>18</sup>于是把他领去见千夫长，说：&ldquo;被囚的保罗请我到他那里，求我领这少年人来见你，他有事告诉你。&rdquo;<sup>19</sup>千夫长就拉着他的手，走到一旁，私下问他说：&ldquo;你有甚么事告诉我呢？&rdquo;<sup>20</sup>他说：&ldquo;犹太人已经约定，要求你明天带下保罗到公会里去，假作要详细查问他的事。<sup>21</sup>你切不要随从他们，因为他们有四十多人埋伏，已经起誓说，若不先杀保罗，就不吃不喝。现在预备好了，只等你应允。&rdquo;</p>

<p><sup>22</sup>于是千夫长打发少年人走，嘱咐他说：&ldquo;不要告诉人你将这事报给我了。&rdquo;<sup>23</sup>千夫长便叫了两个百夫长来，说：&ldquo;预备步兵二百，马兵七十，长枪手二百，今夜亥初往凯撒利亚去； <sup>24</sup>也要预备牲口叫保罗骑上，护送到巡抚腓力斯那里去。&rdquo; <sup>25</sup>千夫长又写了文书，<sup>26</sup>大略说：革老丢吕西亚请巡抚腓力斯大人安。<sup>27</sup>这人被犹太人拿住，将要杀害，我得知他是罗马人，就带兵丁下去救他出来。<sup>28</sup>因要知道他们告他的缘故，我就带他下到他们的公会去，<sup>29</sup>便查知他被告是因他们律法的辩论，并没有甚么该死该绑的罪名。<sup>30</sup>后来有人把要害他的计谋告诉我，我就立时解他到你那里去，又吩咐告他的人在你面前告他。（注：有古卷在此有&ldquo;愿你平安！&rdquo;）</p>

<p><sup>31</sup>于是兵丁照所吩咐他们的，将保罗夜里带到安提帕底。<sup>32</sup>第二天让马兵护送，他们就回营楼去。<sup>33</sup>马兵来到凯撒利亚，把文书呈给巡抚，便叫保罗站在他面前。<sup>34</sup>巡抚看了文书，问保罗是哪省的人。既晓得他是基利家人， <sup>35</sup>就说：&ldquo;等告你的人来到，我要细听你的事。&rdquo;便吩咐人把他看守在希律的衙门里。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/347.mp4" type="button" class="external-movie">
         观看徒23:12-35</button>
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
	<li class="nobreak-final-final">保罗一生的基督徒生活当中，拒绝耶稣的犹太人也拒绝他和福音。这提醒了我们耶稣的教导：&ldquo;弃绝你们的就是弃绝我；弃绝我的就是弃绝那差我来的&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 路10:16</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>又对门徒说：&ldquo;听从你们的，就是听从我；弃绝你们的，就是弃绝我；弃绝我的，就是弃绝那差我来的。&rdquo;</p>
	<!-- end bible --></div>
	他们认为保罗亵渎上帝，而且将他的信息看成是一种威胁，因为犹太人用一种自私自利的民族优越感去看待上帝的计划。上帝使用保罗的外甥听见害他的计谋，我们也从中看见祂的掌权。千夫长差派了470人的罗马军队护送保罗112公里（70 英里），去到海边的凯撒利亚城。在那里，保罗被看守在前大希律王的夏日王宫里（<span class="popup-link" @click = "popUp('pop7')"> 太2:1</span>；

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>当<u class="person underline">希律</u>王的时候，耶稣生在犹太的伯利恒。有几个博士从东方来到耶路撒冷，说：</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop8')"> 路1:5</span>）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>当犹太王<u class="person underline">希律</u>的时候，<u class="person underline">亚比雅</u>班里有一个祭司，名叫<u class="person underline">撒迦利亚</u>。他妻子是<u class="person underline">亚伦</u>的后人，名叫<u class="person underline">伊利莎白</u>。</p>
	<!-- end bible --></div>
	保罗的例子告诉我们，主与服事天国的人同在，最安全的地方就是在天父的旨意里。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒23:21</p>

<p class="forward bible">你（千夫长）切不要随从他们，因为他们有四十多人埋伏，已经起誓说，若不先杀保罗，就不吃不喝。现在预备好了，只等你应允。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">路加写作使徒行传的目的之一是维护基督教，因基督教被诬蔑为制造社会动乱的祸源，有颠覆罗马政府的危险；保罗多次在罗马政府面前为基督教提出有力的辩解，保罗可称得上是教会历史上护教士的先驱。</li>
	<li class="forward">在每一个时代中，基督教都会受到不同程度的污蔑和攻击，我们这个时代的保罗在那里？教会如何栽培和支持有像保罗一样恩赐的人来捍卫基督徒的信仰？</li>
	<li class="forward">保罗的外甥所做的，必带给他极大的安慰和激励。你能够带给哪位处于需要、孤独或焦虑中的人什么安慰和鼓励？</li>
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
	<li class="forward">&ldquo;护教士&rdquo;不仅要以智取胜对方，并且要以见证影响对手；保罗在激辩的场合多次提及他对神对人有无亏的良心，这是他捍卫真理的立足点；我们身处在一个多元开放的社会中，捍卫&ldquo;绝对的&rdquo;真理成为极大的挑战。
	<ul class="forward">
		<li class="forward">求神保守我们在个人生活、家庭以及教会整体的表现上有好名声，活出基督的见证，以公义、圣洁和良善影响这个道德日渐沉沦的世代。</li>
		<li class="forward">纵使我们缺少像保罗那样的恩赐，我们仍可在真理上装备自己，同时去认识我们所处的世界，知己知彼，人人成为&ldquo;护教士&rdquo;。</li>
	</ul>
	</li>
	<li class="forward">祷告神差派祂的&ldquo;天使&rdquo;成为你在困境和试炼中的鼓励和帮助。你也成为那些有需要、孤独、焦虑或面对困境者的&ldquo;天使&rdquo;。</li>
	<li class="forward">在你所发展的三位核心门徒中，为他们继续守望祷告并装备他们也去发展他们的核心门徒，在不久将来可以和他们一起同工配搭，带领小组，</li>
</ul>

<ul>
	<li class="forward">奉主差遣。</li>
</ul>

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

<ul class="forward">
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为更多的教会看到培训领袖的重要，愿意花时间付代价训练和装备弟兄姐妹的生命和侍奉，成为被主使用和差派到各地的福音使者。此外，弟兄姐妹也积极主动在真理上接受装备，真实认识所处的世界，知己知彼。但愿教会人人成为&ldquo;护教士&rdquo;，竭力为真道争辩。</li>
	<li class="forward">祷告神破坏恶人诡诈的计谋，使他们所谋的变为愚拙；愿神的百姓靠主站立得稳，所筹算的，为耶和华所坚定。</li>
	<li class="forward">为那些敌对基督信仰的亲友、同胞和官长祷告，求神柔软他们的心，圣灵开他们的心眼，看见他们所逼迫的耶稣是真神，是弥赛亚，并悔改归向基督，有一天成为被主使用的使者。</li>
	<li class="forward">分享教会或个人的代祷需要（最后请一位作结束和祝福祷告）。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->