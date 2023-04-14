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
                        <div class="chapter_number ltr"><h1>18.</h1></div>
                        <div class="chapter_title ltr"><h1>得人行动一</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可1:17</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final"><span><span><span><span lang="ZH-CN"><span><span style="color:black"><span>神不愿有一人沉沦，乃愿人人都悔改</span></span></span></span><span><span><span style="color:black"><span>(<span class="popup-link" @click = "popUp('pop9')"> 彼后3:9</span> </span></span></span></span></span></span></span>

	<div class="popup invisible" id="pop9"><span><span><span><span><span><span style="color:black"><span><!-- begin bible --> </span></span></span></span></span></span></span>

	<p><span><span><span><span><span><span style="color:black"><span><sup class="versenum">9&nbsp;</sup>主所应许的尚未成就，有人以为他是耽延，其实不是耽延，乃是宽容你们，不愿有一人沉沦，乃愿人人都悔改。 </span></span></span></span></span></span></span></p>
	<span><span><span><span><span><span style="color:black"><span> <!-- end bible --> </span></span></span></span></span></span></span></div>
	<span><span><span><span><span><span style="color:black"><span>)。信主</span></span></span></span><span lang="ZH-CN"><span><span>得救的人死后，灵魂会回到天家，在那里与众圣徒一同享受与神同在的喜乐。不得救的人死后，他们的灵魂便到恶人的阴间在火焰中受苦（<span class="popup-link" @click = "popUp('pop3')"> 路16:22-26</span>； </span></span></span></span></span></span>

	<div class="popup invisible" id="pop3"><span><span><span><span lang="ZH-CN"><span><span><!-- begin bible --> </span></span></span></span></span></span>

	<p><span><span><span><span lang="ZH-CN"><span><span><sup class="versenum">22&nbsp;</sup>后来那讨饭的死了，被天使带去放在<u class="person underline">亚伯拉罕</u>的怀里。财主也死了，并且埋葬了。<sup class="versenum">23&nbsp;</sup>他在阴间受痛苦，举目远远地望见<u class="person underline">亚伯拉罕</u>，又望见<u class="person underline">拉撒路</u>在他怀里，<sup class="versenum">24&nbsp;</sup>就喊着说：&lsquo;我祖<u class="person underline">亚伯拉罕</u>哪，可怜我吧！打发<u class="person underline">拉撒路</u>来，用指头尖蘸点水，凉凉我的舌头，因为我在这火焰里极其痛苦。&rsquo;<sup class="versenum">25&nbsp;</sup><u class="person underline">亚伯拉罕</u>说：&lsquo;儿啊，你该回想你生前享过福，<u class="person underline">拉撒路</u>也受过苦；如今他在这里得安慰，你倒受痛苦。<sup class="versenum">26&nbsp;</sup>不但这样，并且在你我之间有深渊限定，以致人要从这边过到你们那边是不能的，要从那边过到我们这边也是不能的。&rsquo; </span></span></span></span></span></span></p>
	<span><span><span><span lang="ZH-CN"><span><span> <!-- end bible --> </span></span></span></span></span></span></div>
	<span><span><span><span lang="ZH-CN"><span><span><span class="popup-link" @click = "popUp('pop8')"> 启20:11-15</span>）。 </span></span></span></span></span></span>

	<div class="popup invisible" id="pop8"><span><span><span><span lang="ZH-CN"><span><span><!-- begin bible --> </span></span></span></span></span></span>

	<p><span><span><span><span lang="ZH-CN"><span><span><sup class="versenum">11&nbsp;</sup>我又看见一个白色的大宝座与坐在上面的，从他面前天地都逃避，再无可见之处了。<sup class="versenum">12&nbsp;</sup>我又看见死了的人，无论大小，都站在宝座前，案卷展开了；并且另有一卷展开，就是生命册。死了的人都凭着这些案卷所记载的，照他们所行的受审判。<sup class="versenum">13&nbsp;</sup>于是海交出其中的死人，死亡和阴间也交出其中的死人，他们都照各人所行的受审判。<sup class="versenum">14&nbsp;</sup>死亡和阴间也被扔在火湖里。这火湖就是第二次的死。<sup class="versenum">15&nbsp;</sup>若有人名字没记在生命册上，他就被扔在火湖里。</span></span></span></span></span></span></p>
	<span><span><span><span lang="ZH-CN"><span><span> <!-- end bible --> </span></span></span></span></span></span></div>
	<span><span><span><span lang="ZH-CN"><span><span>圣经没有一节经文告诉我们，死后的人会变鬼搅扰人。这些鬼，是魔鬼的使者们。</span></span></span><span lang="ZH-CN"><span><span>基督徒一般认为魔鬼是天使堕落而来，牠是有限的，而不是全能的，牠曾经是被上帝创造的美丽天使。按照圣经的启示，在十字架上耶稣也已经败坏了掌死权的魔鬼，在末日牠将被上帝投入火湖。我们这信耶稣的人，当靠主站立，因主</span></span></span><span lang="ZH-CN"><span><span>耶稣拥有天上地下所有一切的权柄，连鬼魔也服了祂！</span></span></span></span></span></span></li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">&ldquo;迦百农&rdquo;位于加利利海的北边，主耶稣曾有一段时期在迦百农居住并传道（<span class="popup-link" @click = "popUp('pop5')"> 太9:1</span>；
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣上了船，渡过海，来到自己的城里。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 太11:23</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>迦百农啊，你已经升到天上，将来必坠落阴间！因为在你那里所行的异能，若行在所多玛，它还可以存到今日。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>&ldquo;会堂&rdquo;（Synagogue）是犹太人被掳到巴比伦后才开始有的，那时圣殿被毁，犹太人就建立会堂，聚集祷告并讲解律法。犹太成年男人每天必须由10人以上聚集在一起祷告三次，会堂最初是为此目的设立的。主耶稣&ldquo;进了会堂教训人&rdquo;，对象都是犹太人。主耶稣的时代，撒都该人掌控着圣殿，法利赛人掌控着会堂。</p>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马可福音1:21-28》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马可福音1:21-28</button><div class="collapsed" id ="Text0">

<p><sup>21</sup>到了迦百农，耶稣就在安息日进了会堂教训人。<sup>22</sup>众人很希奇他的教训，因为他教训他们，正像有权柄的人，不像文士。<sup>23</sup>在会堂里，有一个人被污鬼附着。他喊叫说：<sup>24</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干，你来灭我们吗？我知道你是谁，乃是　神的圣者！&rdquo;<sup>25</sup>耶稣责备他说：&ldquo;不要做声，从这人身上出来吧！&rdquo; <sup>26</sup>污鬼叫那人抽了一阵风，大声喊叫，就出来了。<sup>27</sup>众人都惊讶，以致彼此对问说：&ldquo;这是什么事？是个新道理啊！他用权柄吩咐污鬼，连污鬼也听从了他。&rdquo; <sup>28</sup>耶稣的名声就传遍了加利利的四方。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/218.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音1:21-28&nbsp;</button>
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

<p class="up">耶稣使用头六个外展事工，训练刚建立的事工团队，帮助他们接触群众，将祂是弥赛亚的好消息告诉人。第一个事工是在崇拜的地方，即当地犹太人的会堂。他们在那里接触到一群对圣经不了解的人。耶稣使用摩西五经告诉群众祂是谁，并叫人要悔改，因为天国近了。众人看出祂的不同并都惊讶污鬼听从了祂。耶稣第一次赶鬼的消息很快地传开来。这污鬼说：&ldquo;这是神的圣者&rdquo;，显然牠正确的知道耶稣是谁。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">可1:23-24</p>

<p class="forward bible"><sup>23</sup>在会堂里，有一个人被污鬼附着。他喊叫说：<sup>24</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干，你来灭我们吗？我知道你是谁，乃是　神的圣者！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward"><span lang="ZH-CN"><span>教会是什么？主耶稣怎样看待教会？今天在教会的聚会或小组中，神的话语是否被传讲，弟兄姐妹是否被神的话语更新和牧养？</span></span></li>
	<li style="text-align:justify"><span><span><span lang="ZH-CN">耶稣赶出污鬼一事，让你对主耶稣有什么新的认识？当我们亲身遇到或是听到鬼魔的事，我们应当如何回应？圣经又是怎么说的？</span></span></span></li>
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
	<li style="text-align:justify"><span><span><span lang="ZH-CN">从《福音行动表》中选出</span><span lang="EN-US">2-3</span><span lang="ZH-CN">人，本周与他们分享《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法。</span></span></span></li>
	<li class="forward">继续借着每天灵修，与神亲近，并在神的话语上扎根，以致对神有正确的认识。在生活中遵从神的话，从主得智慧，行事为人讨主的喜悦。</li>
	<li class="forward"><span lang="ZH-CN"><span>为教会的牧者与小组组长在预备每周的讲道或查考经文时，有从神而来的智慧和权柄，按着正意分解真理的道，以生命榜样，忠心牧养和照管主的群羊。</span></span></li>
	<li class="forward">依照你今天所学习到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
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

<p>大有权能的主耶稣，我们感谢赞美祢，一切能力和权柄都属乎祢。祢的话语大有能力和带有权柄，连鬼魔都服了祢。主耶稣，祢来借着神的权柄把人从黑暗的权势下释放出来，叫人得着真理的自由，享受神所赐的安息。我们为教会的牧者和同工祷告，求主保守他们的心思意念常在祢里面，天天被圣灵充满，家庭和服事上有见证有美名。愿他们带着祢的权柄，使我们众人在祢的话语中遇见祢，得着喂养和造就，同心立定心志紧紧追随祢。奉主耶稣基督的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->