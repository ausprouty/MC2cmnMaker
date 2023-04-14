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
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>没信心</h1></div>
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
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约4:53-54</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">53&nbsp;</sup>他便知道这正是耶稣对他说&ldquo;你儿子活了&rdquo;的时候，他自己和全家就都信了。<sup class="versenum">54&nbsp;</sup>这是耶稣在加利利行的第二件神迹，是他从犹太回去以后行的。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣差遣祂的门徒去附近的村落服事人。当他们回来时，都非常高兴上帝透过他们成就许多事：&ldquo;主啊！因你的名，就是鬼也服了我们！&rdquo;耶稣与他们一同欢喜，并对他们说：&ldquo;然而，不要因鬼服了你们而欢喜，要因你们的名记录在天上欢喜。&rdquo;耶稣提醒：我们欢喜并非因为工作有成效，乃是因为人能真正认识祂，接受祂（<span class="popup-link" @click = "popUp('pop2')"> 路10:17-24</span>）。</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<h3>七十人回来</h3>

<p><sup class="versenum">17&nbsp;</sup>那七十个人欢欢喜喜地回来，说：&ldquo;主啊，因你的名，就是鬼也服了我们！&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;我曾看见<u class="person underline">撒旦</u>从天上坠落，像闪电一样。<sup class="versenum">19&nbsp;</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup class="versenum">20&nbsp;</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>正当那时，耶稣被圣灵感动就欢乐，说：&ldquo;父啊，天地的主，我感谢你！因为你将这些事向聪明通达人就藏起来，向婴孩就显出来。父啊，是的，因为你的美意本是如此。<sup class="versenum">22&nbsp;</sup>一切所有的，都是我父交付我的。除了父，没有人知道子是谁；除了子和子所愿意指示的，没有人知道父是谁。&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣转身暗暗地对门徒说：&ldquo;看见你们所看见的，那眼睛就有福了！<sup class="versenum">24&nbsp;</sup>我告诉你们：从前有许多先知和君王要看你们所看的，却没有看见；要听你们所听的，却没有听见。&rdquo;</p>
<!-- end bible --></div>

<p>天父的心意是不愿一人沉沦，乃愿人人悔改。是的，我们深愿人人都尊天父的名为圣！</p>

<p>&nbsp;</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">&ldquo;会堂&rdquo;在犹太人被掳期间，圣殿被毁， 他们不能在圣殿敬拜神，于是建立了会堂，以便在安息日敬拜神，平时则作为教导男孩的学校。圣殿重建后，这些会堂仍然被保留。任何市镇，只要有十个犹太人家庭，就可以建立一所会堂。路加从4:14开始描述耶稣的工作，第一件就在自己家乡的会堂中宣告祂就是神的受膏者，向所有被罪恶捆绑、心灵瞎盲的人，宣告神救恩的福音。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音4:16-30》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音4:16-30</button><div class="collapsed" id ="Text0">

<p><sup>16</sup>耶稣来到拿撒勒，就是他长大的地方。在安息日，照他平常的规矩进了会堂，站起来要念圣经。<sup>17</sup>有人把先知以赛亚的书交给他，他就打开，找到一处写着说：<sup>18</sup>&ldquo;主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人；差遣我报告被掳的得释放，瞎眼的得看见，叫那受压制的得自由，<sup>19</sup>报告　神悦纳人的禧年。&rdquo; <sup>20</sup>于是把书卷起来，交还执事，就坐下。会堂里的人都定睛看他。<sup>21</sup>耶稣对他们说：&ldquo;今天这经应验在你们耳中了。&rdquo;<sup>22</sup>众人都称赞他，并希奇他口中所出的恩言。又说：&ldquo;这不是约瑟的儿子吗？&rdquo;<sup>23</sup>耶稣对他们说：&ldquo;你们必引这俗语向我说：&lsquo;医生，你医治自己吧！我们听见你在迦百农所行的事，也当行在你自己家乡里。&rsquo;&rdquo;</p>

<p><sup>24</sup>又说：&ldquo;我实在告诉你们，没有先知在自己家乡被人悦纳的。<sup>25</sup>我对你们说实话，当以利亚的时候，天闭塞了三年零六个月，遍地有大饥荒，那时，以色列中有许多寡妇，<sup>26</sup>以利亚并没有奉差往她们一个人那里去，只奉差往西顿的撒勒法一个寡妇那里去。<sup>27</sup>先知伊莱沙的时候，以色列中有许多长大麻疯的，但内中除了叙利亚国的乃缦，没有一个得洁净的。&rdquo;</p>

<p><sup>28</sup>会堂里的人听见这话，都怒气满胸，<sup>29</sup>就起来撵他出城。他们的城造在山上，他们带他到山崖，要把他推下去。<sup>30</sup>他却从他们中间直行，过去了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/215.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音4:16-30&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
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

<p class="up">耶稣回到拿撒勒，在会堂里教训人。这些人从祂小时候就认识祂和祂的家庭。他们要耶稣行医治的神迹，就如祂为大臣的儿子所行的一样。但是耶稣知道他们并不相信祂。一开始，大家喜欢祂说的话。后来，祂讲到上帝的计划和要为外邦人做的事，众人的态度就变了。他们非常生气，拒绝了耶稣的教导。只有当我们凭信心生活，才能看见上帝使不可能变为可能。主耶稣开始医病、赶鬼，以其能力彰显神国的临到，目的在使人认识祂、体会祂的爱，而不是只要祂的能力。同时祂的能力、爱，也向当时的宗教领袖及制度提出严厉的挑战。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路4:18-19</p>

<p class="forward bible"><sup>18</sup>&ldquo;主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人；差遣我报告被掳的得释放，瞎眼的得看见，叫那受压制的得自由，<sup>19</sup>报告　神悦纳人的禧年。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">今天教会如何继续耶稣在世上事工？</li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">你的亲友知道你是基督徒吗？他们的反应是如何的？为什么？当他们对你的信仰和基督徒生活不表认同或不接受，你该如何面对？</span></span></span></li>
	<li class="forward">跟进开放家庭举办福音性聚会的事宜（确定聚会的目标？方法方式？时间？地点？服事人员等分配）。在小组中一起讨论，看小组可以如何继续耶稣的事工，服事小区里的人，并成为他们的祝福。</li>
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
	<li class="forward">在祷告中，求神向你显明你在哪方面对祂没有信心，并把它列下。接下来一周，学习操练信靠神的信心，并把神给你信心的话语写下，下周与组员分享。</li>
	<li class="forward">小组将安排有一次为小区和周边的&ldquo;行走祷告&rdquo;行动，求神向我们显明教会/小组所在地方的属灵状况和需要，并借着祷告为小区祝福和守望。你也预备心及抽空一起参与为社区守望。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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
        @keyup="this.addNote('note3Text')"
        id="note3Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p>亲爱的天父，赞美祢，祢是全地的主，也是乐意施恩的主！求祢帮助我们作一个懂得感恩的人，纵然面对任何的反对，甚至被攻击的时候，我们不是去争辩、去维护、去报复；乃是效法祢的榜样，做我们当做的，行我们当行的，将结果交托给天父。求天父帮助我们谨守遵行祢的话语和吩咐，在我们所在的岗位和社区中作光作盐，荣耀祢的名。奉主耶稣的名祈求，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->