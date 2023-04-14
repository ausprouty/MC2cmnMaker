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
                        <div class="chapter_number ltr"><h1>50.</h1></div>
                        <div class="chapter_title ltr"><h1>王上前辩解——凯撒利亚</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒25:6</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup><u class="person underline">非斯都</u>在他们那里住了不过十天八天，就下恺撒利亚去。第二天坐堂，吩咐将<u class="person underline">保罗</u>提上来。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">在专制的社会里，掌权者若是只喜欢听恭维和奉承，他的手下必然会投其所好，周围就再没有一个敢说真话的人。因此，专制很快就会腐化堕落，绝对的权力招引来的总是谄媚小人，天才的专制者总是由无赖或暴君来继承。而在民主的社会里，百姓若是恨恶真理，也会堕落成集体暴政；凡是关心利润和选票的人都会异口同声地说虚浮媚俗的假话，社会就会排斥针砭人性的良心。因此，神不允许任何人获得绝对的权力，不管是少数人还是多数人；相反，律法的智慧在于一面限制君王（<span class="popup-link" @click = "popUp('pop2')"> 申17:16</span>）、

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>只是王不可为自己加添马匹，也不可使百姓回埃及去，为要加添他的马匹，因耶和华曾吩咐你们说：&lsquo;不可再回那条路去。&rsquo;</p>
	<!-- end bible --></div>
	一面也限制百姓（<span class="popup-link" @click = "popUp('pop9')"> 民14:4</span>），

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>众人彼此说：&ldquo;我们不如立一个首领回埃及去吧！&rdquo;</p>
	<!-- end bible --></div>
	不但限制专制、而且限制民主。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">非斯都到任的第一件事就是即刻前往耶路撒冷拜会当地的宗教领袖，之前极力想置保罗于死地的犹太人不但对保罗提出不实的指控，并且要求非斯都将保罗解送到耶路撒冷，因他们想伺机在路上杀害保罗，幸好非斯都没有答应对方的要求；犹太人随同非斯都来到了该撒利亚，虽然保罗的申辩是合理的，非斯都却打算将保罗解到耶路撒冷受审，保罗深知其中隐藏的危机，他当机立断提出向凯撒上诉。</p>

<p class="indent2">当亚基帕王来拜访非斯都的时候，由于亚基帕王对犹太人的宗教习俗有相当的认识，因此非斯都趁机将保罗这个棘手的案件提出来，希望能从亚基帕王那里得到好的建议，保罗因此有机会在亚基帕王以及众达官显要面前为自己申辩。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒25:23-26:32》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒25:23-26:32</button><div class="collapsed" id ="Text0">

<p><sup>25</sup>:<sup>23</sup> 第二天，亚基帕和百妮基大张威势而来，同着众千夫长和城里的尊贵人进了公厅。非斯都吩咐一声，就有人将保罗带进来。<sup>24</sup>非斯都说：&ldquo;亚基帕王和在这里的诸位啊，你们看这人，就是一切犹太人在耶路撒冷和这里，曾向我恳求呼叫说：&lsquo;不可容他再活着！&rsquo;<sup>25</sup>但我查明他没有犯甚么该死的罪，并且他自己上告于皇帝，所以我定意把他解去。<sup>26</sup>论到这人，我没有确实的事可以奏明主上。因此，我带他到你们面前，也特意带他到你亚基帕王面前，为要在查问之后有所陈奏。<sup>27</sup>据我看来，解送囚犯，不指明他的罪案是不合理的。</p>

<p><sup>26</sup>:<sup>1</sup>亚基帕对保罗说：&ldquo;准你为自己辩明。&rdquo;于是保罗伸手分诉说：<sup>2</sup>&ldquo;亚基帕王啊，犹太人所告我的一切事，今日得在你面前分诉，实为万幸！<sup>3</sup>更可幸的，是你熟悉犹太人的规矩和他们的辩论，所以求你耐心听我。</p>

<p><sup>4</sup>我从起初在本国的民中，并在耶路撒冷，自幼为人如何，犹太人都知道。<sup>5</sup>他们若肯作见证，就晓得我从起初是按着我们教中最严紧的教门作了法利赛人。<sup>6</sup>现在我站在这里受审，是因为指望　神向我们祖宗所应许的。<sup>7</sup>这应许，我们十二个支派，昼夜切切地事奉　神，都指望得着。王啊，我被犹太人控告，就是因这指望。<sup>8</sup>神叫死人复活，你们为甚么看作不可信的呢？</p>

<p><sup>9</sup>从前我自己以为应当多方攻击拿撒勒人耶稣的名，<sup>10</sup>我在耶路撒冷也曾这样行了。既从祭司长得了权柄，我就把许多圣徒囚在监里；他们被杀，我也出名定案。<sup>11</sup>在各会堂，我屡次用刑强逼他们说亵渎的话，又分外恼恨他们，甚至追逼他们直到外邦的城邑。</p>

<p><sup>12</sup>那时，我领了祭司长的权柄和命令，往大马士革去。<sup>13</sup>王啊，我在路上，晌午的时候，看见从天发光，比日头还亮，四面照着我并与我同行的人。<sup>14</sup>我们都仆倒在地，我就听见有声音用希伯来话向我说：&lsquo;扫罗，扫罗！为甚么逼迫我？你用脚踢刺是难的 ！&rsquo;<sup>15</sup>我说：&lsquo;主啊，你是谁？&rsquo;主说：&lsquo;我就是你所逼迫的耶稣。<sup>16</sup>你起来站着！我特意向你显现，要派你作执事，作见证，将你所看见的事和我将要指示你的事证明出来。<sup>17</sup>我也要救你脱离百姓和外邦人的手。<sup>18</sup>我差你到他们那里去，要叫他们的眼睛得开，从黑暗中归向光明，从撒但权下归向　神；又因信我，得蒙赦罪，和一切成圣的人同得基业。&rsquo;</p>

<p><sup>19</sup>亚基帕王啊，我故此没有违背那从天上来的异象，<sup>20</sup>先在大马士革，后在耶路撒冷和犹太全地以及外邦，劝勉他们应当悔改归向　神，行事与悔改的心相称。<sup>21</sup>因此，犹太人在殿里拿住我，想要杀我。<sup>22</sup>然而我蒙　神的帮助，直到今日还站得住，对着尊贵、卑贱、老幼作见证。所讲的，并不外乎众先知和摩西所说将来必成的事， <sup>23</sup>就是基督必须受害，并且因从死里复活，要首先把光明的道传给百姓和外邦人。&rdquo;</p>

<p><sup>24</sup>保罗这样分诉，非斯都大声说：&ldquo;保罗，你癫狂了吧！你的学问太大，反叫你癫狂了。&rdquo;<sup>25</sup>保罗说：&ldquo;非斯都大人，我不是癫狂，我说的乃是真实明白话。<sup>26</sup>王也晓得这些事，所以我向王放胆直言。我深信这些事没有一件向王隐藏的，因都不是在背地里做的。<sup>27</sup>亚基帕王啊，你信先知吗？我知道你是信的。&rdquo;</p>

<p><sup>28</sup>亚基帕对保罗说：&ldquo;你想少微一劝，便叫我作基督徒啊？&rdquo;（注：或作：&ldquo;你这样劝我，几乎叫我作基督徒了。&rdquo;）<sup>29</sup>保罗说：&ldquo;无论是少劝，是多劝，我向　神所求的，不但你一个人，就是今天一切听我的，都要像我一样，只是不要像我有这些锁链。&rdquo; <sup>30</sup>于是，王和巡抚并百妮基与同坐的人都起来， <sup>31</sup>退到里面，彼此谈论说：&ldquo;这人并没有犯甚么该死该绑的罪。&rdquo;<sup>32</sup>亚基帕又对非斯都说：&ldquo;这人若没有上告于凯撒，就可以释放了。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/350.mp4" type="button" class="external-movie">
         观看&nbsp;徒25:23-26:32&nbsp;</button>
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

	<li class="nobreak-final-final">保罗再次分享个人的见证，而这次是记录里最长的一个版本。他在犹太地的亚基帕王和巡抚非斯都面前作见证。巡抚非斯都统管整个地区，而亚基帕王有权控管地方，再回报给巡抚。巡抚已认定保罗为无罪，并试图厘清保罗要向凯撒陈奏什么内容。读<span class="popup-link" @click = "popUp('pop4')"> 提前1:12-16</span>。
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>我感谢那给我力量的我们主基督耶稣，因他以我有忠心，派我服侍他。<sup class="versenum">13&nbsp;</sup>我从前是亵渎神的、逼迫人的、侮慢人的，然而我还蒙了怜悯，因我是不信、不明白的时候而做的。<sup class="versenum">14&nbsp;</sup>并且我主的恩是格外丰盛，使我在基督耶稣里有信心和爱心。<sup class="versenum">15&nbsp;</sup>&ldquo;基督耶稣降世，为要拯救罪人。&rdquo;这话是可信的，是十分可佩服的。在罪人中我是个罪魁！<sup class="versenum">16&nbsp;</sup>然而我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明他一切的忍耐，给后来信他得永生的人做榜样。</p>
	<!-- end bible --></div>
	保罗承认遇见耶稣前的他和现在控告他的人没什么两样。他曾坚信用暴力拦阻耶稣的信息是上帝的旨意，也是他的责任。当时的保罗显然是抗拒圣灵的感动，不愿接受福音（<span class="popup-link" @click = "popUp('pop5')"> 徒26:14</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>我们都仆倒在地，我就听见有声音用希伯来话向我说：&lsquo;<u class="person underline">扫罗</u>，<u class="person underline">扫罗</u>，为什么逼迫我？你用脚踢刺是难的。&rsquo;</p>
	<!-- end bible --></div>
	耶稣接纳了这个杀人凶手， 使他成为上帝的仆人，让非犹太人有机会听到福音。&ldquo;凡逼迫他们的，就是逼迫祂&rdquo;提醒我们耶稣和门徒的联合多么紧密。再一次，保罗忠心持守他的呼召，放胆挑战政治领袖来相信耶稣，但是他们拒绝了。</li>
</ul>
</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒26:28</p>

<p class="forward bible">亚基帕对保罗说：&ldquo;你想少微一劝，便叫我作基督徒啊？&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">使徒行传中，路加记载保罗三次悔改的经历（<span class="popup-link" @click = "popUp('pop6')"> 徒9:1-19</span>上、

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>扫罗往大马士革要害门徒在途中遇主</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">扫罗</u>仍然向主的门徒口吐威吓凶杀的话，去见大祭司，<sup class="versenum">2&nbsp;</sup>求文书给大马士革的各会堂，若是找着信奉这道的人，无论男女，都准他捆绑带到耶路撒冷。<sup class="versenum">3&nbsp;</sup><u class="person underline">扫罗</u>行路，将到大马士革，忽然从天上发光，四面照着他。<sup class="versenum">4&nbsp;</sup>他就仆倒在地，听见有声音对他说：&ldquo;<u class="person underline">扫罗</u>，<u class="person underline">扫罗</u>，你为什么逼迫我？&rdquo;<sup class="versenum">5&nbsp;</sup>他说：&ldquo;主啊，你是谁？&rdquo;主说：&ldquo;我就是你所逼迫的耶稣。<sup class="versenum">6&nbsp;</sup>起来！进城去，你所当做的事，必有人告诉你。&rdquo;<sup class="versenum">7&nbsp;</sup>同行的人站在那里，说不出话来，听见声音，却看不见人。<sup class="versenum">8&nbsp;</sup><u class="person underline">扫罗</u>从地上起来，睁开眼睛，竟不能看见什么。有人拉他的手，领他进了大马士革。<sup class="versenum">9&nbsp;</sup>三日不能看见，也不吃也不喝。</p>

	<p><sup class="versenum">10&nbsp;</sup>当下，在大马士革有一个门徒，名叫<u class="person underline">亚拿尼亚</u>。主在异象中对他说：&ldquo;<u class="person underline">亚拿尼亚</u>！&rdquo;他说：&ldquo;主，我在这里。&rdquo;<sup class="versenum">11&nbsp;</sup>主对他说：&ldquo;起来！往直街去，在<u class="person underline">犹大</u>的家里访问一个大数人，名叫<u class="person underline">扫罗</u>。他正祷告，<sup class="versenum">12&nbsp;</sup>又看见了一个人，名叫<u class="person underline">亚拿尼亚</u>，进来按手在他身上，叫他能看见。&rdquo;<sup class="versenum">13&nbsp;</sup><u class="person underline">亚拿尼亚</u>回答说：&ldquo;主啊，我听见许多人说这人怎样在耶路撒冷多多苦害你的圣徒，<sup class="versenum">14&nbsp;</sup>并且他在这里有从祭司长得来的权柄，捆绑一切求告你名的人。&rdquo;<sup class="versenum">15&nbsp;</sup>主对<u class="person underline">亚拿尼亚</u>说：&ldquo;你只管去！他是我所拣选的器皿，要在外邦人和君王并以色列人面前宣扬我的名。<sup class="versenum">16&nbsp;</sup>我也要指示他，为我的名必须受许多的苦难。&rdquo;</p>

	<h3>亚拿尼亚给扫罗施洗</h3>

	<p><sup class="versenum">17&nbsp;</sup><u class="person underline">亚拿尼亚</u>就去了，进入那家，把手按在<u class="person underline">扫罗</u>身上，说：&ldquo;兄弟<u class="person underline">扫罗</u>，在你来的路上向你显现的主，就是耶稣，打发我来叫你能看见，又被圣灵充满。&rdquo;<sup class="versenum">18&nbsp;</sup><u class="person underline">扫罗</u>的眼睛上好像有鳞立刻掉下来，他就能看见。于是起来受了洗，<sup class="versenum">19&nbsp;</sup>吃过饭就健壮了。</p>

	<p><u class="person underline">扫罗</u>和大马士革的门徒同住了些日子，</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop7')"> 徒22:3-26</span>、

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;我原是犹太人，生在基利家的大数，长在这城里；在<u class="person underline">迦玛列</u>门下，按着我们祖宗严紧的律法受教；热心侍奉神，像你们众人今日一样。<sup class="versenum">4&nbsp;</sup>我也曾逼迫奉这道的人，直到死地，无论男女都锁拿下监。<sup class="versenum">5&nbsp;</sup>这是大祭司和众长老都可以给我作见证的。我又领了他们达于弟兄的书信，往大马士革去，要把在那里奉这道的人锁拿，带到耶路撒冷受刑。<sup class="versenum">6&nbsp;</sup>我将到大马士革，正走的时候，约在晌午，忽然从天上发大光，四面照着我。<sup class="versenum">7&nbsp;</sup>我就仆倒在地，听见有声音对我说：&lsquo;<u class="person underline">扫罗</u>，<u class="person underline">扫罗</u>，你为什么逼迫我？&rsquo;<sup class="versenum">8&nbsp;</sup>我回答说：&lsquo;主啊，你是谁？&rsquo;他说：&lsquo;我就是你所逼迫的拿撒勒人耶稣。&rsquo;<sup class="versenum">9&nbsp;</sup>与我同行的人看见了那光，却没有听明那位对我说话的声音。<sup class="versenum">10&nbsp;</sup>我说：&lsquo;主啊，我当做什么？&rsquo;主说：&lsquo;起来！进大马士革去，在那里要将所派你做的一切事告诉你。&rsquo;<sup class="versenum">11&nbsp;</sup>我因那光的荣耀不能看见，同行的人就拉着我手进了大马士革。<sup class="versenum">12&nbsp;</sup>那里有一个人名叫<u class="person underline">亚拿尼亚</u>，按着律法是虔诚人，为一切住在那里的犹太人所称赞。<sup class="versenum">13&nbsp;</sup>他来见我，站在旁边对我说：&lsquo;兄弟<u class="person underline">扫罗</u>，你可以看见！&rsquo;我当时往上一看，就看见了他。<sup class="versenum">14&nbsp;</sup>他又说：&lsquo;我们祖宗的神拣选了你，叫你明白他的旨意，又得见那义者，听他口中所出的声音。<sup class="versenum">15&nbsp;</sup>因为你要将所看见的、所听见的，对着万人为他作见证。<sup class="versenum">16&nbsp;</sup>现在你为什么耽延呢？起来，求告他的名受洗，洗去你的罪！&rsquo;</p>

	<h3>述说奉主名往外邦</h3>

	<p><sup class="versenum">17&nbsp;</sup>&ldquo;后来我回到耶路撒冷，在殿里祷告的时候魂游象外，<sup class="versenum">18&nbsp;</sup>看见主向我说：&lsquo;你赶紧地离开耶路撒冷，不可迟延。因你为我作的见证，这里的人必不领受。&rsquo;<sup class="versenum">19&nbsp;</sup>我就说：&lsquo;主啊，他们知道我从前把信你的人收在监里，又在各会堂里鞭打他们。<sup class="versenum">20&nbsp;</sup>并且你的见证人<u class="person underline">司提反</u>被害流血的时候，我也站在旁边欢喜，又看守害死他之人的衣裳。&rsquo;<sup class="versenum">21&nbsp;</sup>主向我说：&lsquo;你去吧！我要差你远远地往外邦人那里去。&rsquo;&rdquo;</p>

	<h3>众人就喧嚷要除灭他</h3>

	<p><sup class="versenum">22&nbsp;</sup>众人听他说到这句话，就高声说：&ldquo;这样的人，从世上除掉他吧！他是不当活着的！&rdquo;<sup class="versenum">23&nbsp;</sup>众人喧嚷，摔掉衣裳，把尘土向空中扬起来。<sup class="versenum">24&nbsp;</sup>千夫长就吩咐将<u class="person underline">保罗</u>带进营楼去，叫人用鞭子拷问他，要知道他们向他这样喧嚷是为什么缘故。</p>

	<p><sup class="versenum">25&nbsp;</sup>刚用皮条捆上，<u class="person underline">保罗</u>对旁边站着的百夫长说：&ldquo;人是罗马人，又没有定罪，你们就鞭打他，有这个例吗？&rdquo;<sup class="versenum">26&nbsp;</sup>百夫长听见这话，就去见千夫长，告诉他说：&ldquo;你要做什么？这人是罗马人！&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop8')"> 徒26:4-18</span>），

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>我从起初在本国的民中，并在耶路撒冷，自幼为人如何，犹太人都知道。<sup class="versenum">5&nbsp;</sup>他们若肯作见证，就晓得我从起初是按着我们教中最严紧的教门做了法利赛人。<sup class="versenum">6&nbsp;</sup>现在我站在这里受审，是因为指望神向我们祖宗所应许的。<sup class="versenum">7&nbsp;</sup>这应许，我们十二个支派昼夜切切地侍奉神，都指望得着。王啊，我被犹太人控告，就是因这指望。<sup class="versenum">8&nbsp;</sup>神叫死人复活，你们为什么看做不可信的呢？<sup class="versenum">9&nbsp;</sup>从前我自己以为应当多方攻击拿撒勒人耶稣的名，<sup class="versenum">10&nbsp;</sup>我在耶路撒冷也曾这样行了。既从祭司长得了权柄，我就把许多圣徒囚在监里；他们被杀，我也出名定案。<sup class="versenum">11&nbsp;</sup>在各会堂，我屡次用刑强逼他们说亵渎的话，又分外恼恨他们，甚至追逼他们，直到外邦的城邑。<sup class="versenum">12&nbsp;</sup>那时，我领了祭司长的权柄和命令，往大马士革去。<sup class="versenum">13&nbsp;</sup>王啊，我在路上，晌午的时候，看见从天发光，比日头还亮，四面照着我并与我同行的人。<sup class="versenum">14&nbsp;</sup>我们都仆倒在地，我就听见有声音用希伯来话向我说：&lsquo;<u class="person underline">扫罗</u>，<u class="person underline">扫罗</u>，为什么逼迫我？你用脚踢刺是难的。&rsquo;<sup class="versenum">15&nbsp;</sup>我说：&lsquo;主啊，你是谁？&rsquo;主说：&lsquo;我就是你所逼迫的耶稣。</p>

	<p><sup class="versenum">16&nbsp;</sup>&ldquo;你起来站着！我特意向你显现，要派你做执事，作见证，将你所看见的事和我将要指示你的事证明出来。<sup class="versenum">17&nbsp;</sup>我也要救你脱离百姓和外邦人的手。<sup class="versenum">18&nbsp;</sup>我差你到他们那里去，要叫他们的眼睛得开，从黑暗中归向光明，从<u class="person underline">撒旦</u>权下归向神；又因信我，得蒙赦罪，和一切成圣的人同得基业。&rsquo;</p>
	<!-- end bible --></div>
	试比较这三次叙述的内容有何差异？如何解释彼此的差异？有矛盾之处吗？为什么？</li>
	<li class="forward">保罗在三番两次的申辩中都强调，他受审的原由是因为宣扬死人复活的信息，我们除了看到保罗借着公开的机会宣扬福音的核心信息，同时也理解到耶稣复活在神学上的重要性，因为若基督没有复活，我们所信的都是一场空！
	<ul class="forward">
		<li class="forward">我们要问自己一个问题，我们教会的讲台以及我们个人的布道中，我们所传的信息是什么？我们有没有忽略复活的信息？</li>
		<li class="forward">我们是不是应该更多强调耶稣的复活？不论在保罗的时代或是我们的时代，耶稣复活的意义没有改变。你真的坚信基督复活的真理吗？为什么？</li>
	</ul>
	</li>
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
	<li class="forward">保罗在重要的关头提出向凯撒上诉，一方面这是获得公正审判以及避开犹太人的暗杀最好的方法，另外一方面，这将是他在罗马传福音最好的一个机会，所以保罗当机立断。
	<ul class="forward">
		<li class="forward">为执法和司法祷告，能够做到公正公平，求神在他们心中动工，让他们知道在他们之上还有位神，他们有一天也需要在神面前交账受审。</li>
		<li class="forward">然而法律仍然有相当的功效，基督徒必须诉诸法律时当求教于主内的法律专家，在神的国度中，法律人才能为主做出相当大的贡献。为那些你认识的主内律师提名祷告，求神加倍使用他们，让他们有神的智慧和恩赐，行公义，好怜悯，存谦卑的心与神同行，为主伸张公义。</li>
	</ul>
	</li>
	<li class="forward">与教会或小组讨论如何装备必要的法律zhi&#39;shi。</li>
	<li class="forward">持续花时间发展和装备门徒，让他们也去造就初信者，牧养和建立他们的信心。</li>
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
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过的耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">每一个政权的存在都仰赖神，地上的权柄不过是表明神的权柄。任何政权，无论形式是民主、共和，还是专制、独裁；无论成因是选举、任命，还是革命、侵略；无论信仰是敬虔、顺服，还是抵挡、悖逆，若没有神的允许，没有一个能够存在。为执政掌权者感恩和祷告，相信神是最终的掌权者，求神保守祂的子民在本国行公义，好怜悯，存谦卑的心与主同行。</li>
	<li class="forward">为那些你认识的主内律师祷告，求神加倍使用他们，有神的智能和恩赐，可以帮助教会，牧者和弟兄姐妹了解国家的法律和宗教法。也求神使用各个行业的弟兄姐妹，在自己的岗位上为主发光，存公义正直，好怜悯的心，与神同行。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->