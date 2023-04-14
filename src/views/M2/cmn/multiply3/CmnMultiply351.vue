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
                        <div class="chapter_number ltr"><h1>51.</h1></div>
                        <div class="chapter_title ltr"><h1>海难中应许——去罗马船上</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop8')"> 徒26:28</span>）
	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">28&nbsp;</sup><u class="person underline">亚基帕</u>对<u class="person underline">保罗</u>说：&ldquo;你想稍微一劝，便叫我做基督徒啊？&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">&ldquo;神所命的&rdquo;权柄，职责都是赏善罚恶（<span class="popup-link" @click = "popUp('pop2')"> 罗13:1</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>在上有权柄的，人人当顺服他，因为没有权柄不是出于神的，凡掌权的都是神所命的。</p>
	<!-- end bible --></div>
	&ldquo;使我们可以敬虔、端正、平安无事地度日&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 提前2:2</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>为君王和一切在位的也该如此，使我们可以敬虔、端正、平安无事地度日。</p>
	<!-- end bible --></div>
	若是违背了这个原则，神必然会叫这个权柄站立不住。因此，我们最应当关心的是自己如何&ldquo;行善&rdquo;而不&ldquo;作恶&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 罗13:3</span>），

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>做官的原不是叫行善的惧怕，乃是叫作恶的惧怕。你愿意不惧怕掌权的吗？你只要行善，就可得他的称赞；</p>
	<!-- end bible --></div>
	注意自己如何在神面前交帐，而不是只关注在政府的腐败、专制或不公义上。地上的任何权柄和执行权柄的人都不是完全的。虽然各级罗马官员都认为自己的权柄是来自凯撒皇帝，罗马凯撒奥古斯都（Augustus，主前30-主后14年在位）和卡里古拉（Caligula，主后37-41年在位）甚至自命为神，但保罗却指出，他们只不过是&ldquo;神的用人&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 罗13:4</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>因为他是神的用人，是于你有益的。你若作恶，却当惧怕；因为他不是空空地佩剑，他是神的用人，是申冤的，刑罚那作恶的。</p>
	<!-- end bible --></div>
	是神手中有用的工具。我们当敬畏神，为在上掌权者祷告，而且，&ldquo;众人以为美的事要留心&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 罗12:17</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>不要以恶报恶。众人以为美的事，要留心去做。</p>
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

<p class="indent2">像已往多次一样，保罗先自述自己的成长背景为他信仰的转变铺路，继而见证他信主的经历，指出他受审的原因是由于他顺服从天上来的异象，向他的同胞以及外邦人宣扬复活的耶稣是以色列真正的盼望。当保罗提到死人复活时，他的申辩被阻止了，非斯都甚至以为保罗神智不清，保罗抓住最后的机会由衷地呼吁众人归信基督；参与这场审讯的众人做成的结论是：保罗无罪；然而因为保罗已经提出要上诉凯撒，因此保罗未被释放，他很快将被解送到罗马。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒27:1-26》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒27:1-26</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>非斯都既然定规了，叫我们坐船往意大利去，便将保罗和别的囚犯交给御营里的一个百夫长，名叫犹流。<sup>2</sup>有一只亚大米田的船，要沿着亚西亚一带地方的海边走，我们就上了那船开行，有马其顿的帖撒罗尼迦人亚里达古和我们同去。<sup>3</sup>第二天，到了西顿，犹流宽待保罗，准他往朋友那里去，受他们的照应。<sup>4</sup>从那里又开船，因为风不顺，就贴着塞浦路斯背风岸行去。<sup>5</sup>过了基利家、旁非利亚前面的海，就到了吕家的每拉。<sup>6</sup>在那里，百夫长遇见一只亚历山大的船要往意大利去，便叫我们上了那船。</p>

<p><sup>7</sup>一连多日，船行得慢，仅仅来到革尼土的对面。因为被风拦阻，就贴着克里特背风岸，从撒摩尼对面行过。<sup>8</sup>我们沿岸行走，仅仅来到一个地方，名叫佳澳。离那里不远，有拉西亚城 。</p>

<p><sup>9</sup>走的日子多了，已经过了禁食的节期，行船又危险，保罗就劝众人说：<sup>10</sup>&ldquo;众位，我看这次行船，不但货物和船要受伤损，大遭破坏，连我们的性命也难保。&rdquo;<sup>11</sup>但百夫长信从掌船的和船主，不信从保罗所说的；<sup>12</sup>且因在这海口过冬不便，船上的人就多半说，不如开船离开这地方，或者能到非尼基过冬。非尼基是克里特的一个海口，一面朝东北，一面朝东南。</p>

<p><sup>13</sup>这时微微起了南风，他们以为得意，就起了锚，贴近克里特行去。<sup>14</sup>不多几时，狂风从岛上扑下来。那风名叫&ldquo;友拉革罗&rdquo;。<sup>15</sup>船被风抓住，敌不住风，我们就任风刮去。<sup>16</sup>贴着一个小岛的背风岸奔行。那岛名叫高大，在那里仅仅收住了小船。<sup>17</sup>既然把小船拉上来，就用缆索捆绑船底，又恐怕在赛耳底沙滩上搁了浅，就落下篷来，任船飘去。<sup>18</sup>我们被风浪逼得甚急，第二天，众人就把货物抛在海里。<sup>19</sup>到第三天，他们又亲手把船上的器具抛弃了。<sup>20</sup>太阳和星辰多日不显露，又有狂风大浪催逼，我们得救的指望就都绝了。</p>

<p><sup>21</sup>众人多日没有吃甚么，保罗就出来站在他们中间说：&ldquo;众位，你们本该听我的话，不离开克里特，免得遭这样的伤损破坏。<sup>22</sup>现在我还劝你们放心，你们的性命一个也不失丧，惟独失丧这船。<sup>23</sup>因我所属所事奉的　神，他的使者昨夜站在我旁边说：<sup>24</sup>&lsquo;保罗，不要害怕！你必定站在凯撒面前；并且与你同船的人，　神都赐给你了。&rsquo;<sup>25</sup>所以众位可以放心，我信　神他怎样对我说，事情也要怎样成就。<sup>26</sup>只是我们必要撞在一个岛上。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/351.mp4" type="button" class="external-movie">
         观看徒27:1-26</button>
    <div class="collapsed"></div>



<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">故事中克服了什么障碍或难题？又是如何克服的呢？</li>
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
	
	<li class="nobreak-final-final">帖撒罗尼迦人的领袖亚里达古两年前随着保罗到耶路撒冷，他与路加同保罗一起被带到罗马（2 节）。适合旅行的季节就快要结束，船员却要冒着极大的危险在此时行船，无非是把大家置于危险之中。就我们所知，保罗、路加、亚里达古是船上仅有的基督徒，和二百七十三个非基督徒同行(<span class="popup-link" @click = "popUp('pop7')"> 徒27:37</span>)。
	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">37&nbsp;</sup>我们在船上的共有二百七十六个人。</p>
	<!-- end bible --></div>
	我们看见耶稣对众人怜悯的心，祂应许搭救保罗和船上所有的人。保罗在众人面前活出对耶稣的信靠。他也实际去帮助众人的需要。他不只信靠上帝和虔敬，也能用常理判断大家需要的是什么。虽然保罗是个囚犯，地位卑微，但他的领导性格和能力在这里却显露无遗，大家也因而开始听他的话。我们学到影响力的发挥不在于我们所处的地位。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒27:23-24</p>

<p class="forward bible"><sup>23</sup>因我所属所事奉的　神，他的使者昨夜站在我旁边说：<sup>24</sup>&lsquo;保罗，不要害怕！你必定站在凯撒面前；并且与你同船的人，神都赐给你了。&rsquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">这次的船难，如果你当时在场，你更愿意相信保罗的观点，还是船主的观点？这个事件使你对神的属性有什么新的认识？为什么？</li>
	<li class="forward">&ldquo;我们得救的指望就都绝了&rdquo;，你曾在人生的风浪中绝望过吗？是什么力量将你救拔出来？ 或是&ldquo;我信神祂怎样对我说，事情也要怎样成就&rdquo;，在你人生的经历当中，有过这样实际的体验吗？</li>
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
	<li class="forward">列下哪些事情或是经历拦阻你继续跟随耶稣并爱祂？回想与感恩当初你信耶稣的种种美好经历，你想今天耶稣来到你所处的境况，祂会对你说什么？而你想耶稣为你做什么？将心里的一切向主耶稣倾诉，祂知道，祂同在。</li>
	<li class="forward">鼓励自己和小组成员，每天学习数算一件神在你身上的恩典和作为，并向神感恩。相信神使万事互相效力，叫爱祂的人得益处，并效法祂爱子耶稣基督的样式。现在所经历的一切，试想有什么是神要你们学习和成长的。</li>
	<li class="forward">在小组中与门徒一起为国家社会、并世界所面对的灾难和困境向神求怜悯和恩惠，求神眷顾城中属祂的百姓，赦免人因任意妄为而得罪神的罪孽，怜悯医治这地。求神坚定祂的百姓，举起圣洁的手为国家守望，按神的心意来治理这地。</li>
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
	<li class="forward">为你所认识正在面对人生风浪，甚至几乎被打击垮下的弟兄姐妹/宣教士提名祷告，求神与他们同在，赐他们十足的信心和平安，看到苦难背后的祝福。</li>
	<li class="forward">求神使用每位基督徒成为身边非信徒亲友危难中的扶持和安慰，并知道主耶稣才是人生的主宰，祂愿意陪伴他们一起渡过人生的暴风雨，赐他们十分的平安。</li>
	<li class="forward">为这城市的众教会和牧者同工合一的配搭祷告。若在配搭期间有任何嫌隙、误解或是难处的，因着耶稣彼此谦卑，放下自己，选择饶恕和沟通，让主耶稣作我们的主，引领我们走过各样的试炼，教会和各人得以成熟完备，合乎主用。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->