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
                        <div class="chapter_number ltr"><h1>17.</h1></div>
                        <div class="chapter_title ltr"><h1>保罗放胆传讲主的道——初信的火热</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒9:15</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>主对<u class="person underline">亚拿尼亚</u>说：&ldquo;你只管去！他是我所拣选的器皿，要在外邦人和君王并以色列人面前宣扬我的名。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">扫罗残害主的门徒，并求得大祭司授权到大马色各会堂，捆绑男女信徒带到耶路撒冷。但就在路上，还没到大马色，还没机会执行他的任务，主向他显现，对他说：&ldquo;扫罗！扫罗！你为什么逼迫我？&rdquo;这里清楚看到神掌权，若神不允许，任何人都不可能迫害属神的人。神能拦阻意图残害主门徒的扫罗，并彻底改变他的人生方向，使他成为将来反要被别人残害的基督门徒。扫罗到大马色擒拿主的门徒，谁知就在大马色路上反而被主所擒。神的意念高过我们的意念，神的能力远超过我们所能想象的。我们所侍奉的神是那位又真又活，无所不知，无所不能的掌权者，我们还惧怕谁呢！</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">根据<span class="popup-link" @click = "popUp('pop2')"> 加拉太书1:17-18</span>，
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>也没有上耶路撒冷去见那些比我先做使徒的，唯独往阿拉伯去，后又回到大马士革。</p>

	<p><sup class="versenum">18&nbsp;</sup>过了三年才上耶路撒冷去见<u class="person underline">矶法</u>，和他同住了十五天。</p>
	<!-- end bible --></div>
	至少包括扫罗去亚拉伯旷野又回到大马色的三年。&ldquo; 17也没有上耶路撒冷去见那些比我先作使徒的，惟独往阿拉伯去，后又回到大马士革。18过了三年，才上耶路撒冷去见矶法。&rdquo; 虽无人确知扫罗在旷野阶段如何亲近神，领受教导，但从加拉太书中可以知道他已经领悟了律法与恩典的关系，以及基督身体内犹太人和外邦人如何成为一体彼此联合的真理。他回到大马色后，信息必是更加犀利有力，以至于硬心不信的犹太人商议想杀他。</li>
</ul>

<p class="indent2">他主动接触门徒，但门徒开始不信任他，&ldquo;怕他&rdquo;，是巴拿巴首先相信他的见证。巴拿巴的介绍，将他引入门徒的团契。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒9:20-31》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒9:20-31</button><div class="collapsed" id ="Text0">

<p><sup>20</sup>就在各会堂里宣传耶稣，说他是神的儿子。<sup>21</sup>凡听见的人都惊奇说：&ldquo;在耶路撒冷残害求告这名的，不是这人吗？并且他到这里来，特要捆绑他们，带到祭司长那里。&rdquo;<sup>22</sup>但扫罗越发有能力，驳倒住大马士革的犹太人，证明耶稣是基督。</p>

<p><sup>23</sup>过了好些日子，犹太人商议要杀扫罗，<sup>24</sup>但他们的计谋被扫罗知道了。他们又昼夜在城门守候，要杀他。<sup>25</sup>他的门徒就在夜间用筐子把他从城墙上缒下去。</p>

<p><sup>26</sup>扫罗到了耶路撒冷，想与门徒结交。他们却都怕他，不信他是门徒。<sup>27</sup>惟有巴拿巴接待他，领去见使徒，把他在路上怎么看见主，主怎么向他说话，他在大马士革怎么奉耶稣的名放胆传道，都述说出来。<sup>28</sup>于是扫罗在耶路撒冷和门徒出入来往，<sup>29</sup>奉主的名放胆传道，并与说希腊话的犹太人讲论辩驳。他们却想法子要杀他。<sup>30</sup>弟兄们知道了，就送他下凯撒利亚，打发他往大数去。</p>

<p><sup>31</sup>那时，犹太、加利利、撒马利亚各处的教会都得平安，被建立；凡事敬畏主，蒙圣灵的安慰，人数就增多了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/317.mp4" type="button" class="external-movie">
         观看&nbsp;徒9:20-31&nbsp;</button>
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
	<li class="up"><strong>+ 小结</strong></li></ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">大马士革的信徒皆因扫罗感到惊奇。他们听说扫罗来这里是为了追捕他们，如今他反倒在这里宣传耶稣是上帝永活的儿子。扫罗先前的教育让他马上能运用圣经的知识，提供证据，使人信服耶稣就是所应许的弥赛亚。耶稣曾教导过凡熟练旧约圣经又相信耶稣的人，他们能够从旧约圣经和天国的新教训中拿出宝物来（<span class="popup-link" @click = "popUp('pop3')"> 太13:52</span>）。
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">52&nbsp;</sup>他说：&ldquo;凡文士受教做天国的门徒，就像一个家主从他库里拿出新旧的东西来。&rdquo;</p>
	<!-- end bible --></div>
	扫罗的见证大有能力，犹太人见自己无法与他辩驳，就想在大马士革杀掉他。当扫罗来到耶路撒冷时，只有巴拿巴鼓励扫罗，为他背书，帮助他来到使徒面前。扫罗的生命再次受到威胁，门徒便送他往自己的家乡去，就是耶路撒冷北边九百三十公里处基利家的大数。</li>
</ul>

<p class="up">本句为《使徒行传》下第二个总结：&ldquo;教会都得平安，凡事敬畏主与祂的能力，人数就增多了。&ldquo;（徒9:31）</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒9:31</p>

<p class="forward bible">那时，犹太、加利利、撒马利亚各处的教会都得平安，被建立；凡事敬畏主，蒙圣灵的安慰，人数就增多了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">别人（甚至是基督徒）曾经对我们的伤害或误会是否让我们拒绝接受他们的改变？我们如何从巴拿巴身上学到接纳？</li>
	<li class="forward">在你自己属灵成长的道路上，是否有人像亚拿尼亚和巴拿巴一样，带领、帮助和扶持你？而你自己在别人属灵生命成长又扮演什么角色呢？是否有可以改进的地方？如果有，如何改进？</li>
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
	<li class="forward">继续祷告神，求祂让你经历领人归主的喜悦，亲眼经历罪得赦免，爱心回应的真实见证。</li>
	<li class="forward">在你造就初信者生命时，更多的包容、接纳与陪伴对方成长，相信神对他生命有奇妙的计划。同时鼓励门徒和你一起在教会中主动参与服事，报答主恩。</li>
	<li class="forward">在你现有的门徒小组，重点栽培和发展三位门徒，邀请他们参与每月一次的《发展领袖》课程学习，一起受装备，以后与你带领小组并主动关心和帮助身边的弟兄姐妹和初信者生命的成长。</li>
	<li class="forward">阅读附录：《宣教士：包忠杰》，把感受和心得写下，下周分享。</li>
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
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为更多的教会看到培训领袖的重要性，愿意花时间付代价训练和装备弟兄姐妹的生命和侍奉，成为被主使用和差派到各地的福音使者。弟兄姐妹也主动接受装备，渴慕神的话语并被神使用，在教会为主所用，奉主差遣。</li>
	<li class="forward">为那些反对我们信仰的亲友、同胞和官长祷告，求神柔软他们的心，圣灵开他们的心眼，看见他们所逼迫的耶稣是真神，是他们的救主，愿意悔改归向基督，并被主大大使用。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->