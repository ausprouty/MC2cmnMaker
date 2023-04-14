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
                        <div class="chapter_number ltr"><h1>54.</h1></div>
                        <div class="chapter_title ltr"><h1>软禁中辩解——罗马</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美</h2>

<h2 class="back">祷告关怀</h2>

<ul>
	<li>分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2>庆贺实践</h2>

<ul>
	<li>请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li>背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒28:6</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>土人想他必要肿起来，或是忽然仆倒死了。看了多时，见他无害，就转念说：&ldquo;他是个神！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2>天父心意</h2>

<ul>
	<li class="nobreak-final-final">使徒行传开始于&ldquo;神的国&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒1:3</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。</p>
	<!-- end bible --></div>
	又结束于&ldquo;神的国&rdquo;。保罗信主后就全人奉献给&ldquo;神的国&rdquo;，虽然身被囚禁，还能放胆和喜乐，最后又勉励每一个爱慕主的人：&ldquo;那美好的仗我已经打过了；当跑的路我已经跑尽了；所信的道我已经守住了。从此以后，有公义的冠冕为我存留，就是按着公义审判的主到了那日要赐给我的；不但赐给我，也赐给凡爱慕祂显现的人&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 提后4:7-8</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>只是要弃绝那世俗的言语和老妇荒渺的话，在敬虔上操练自己。<sup class="versenum">8&nbsp;</sup>操练身体益处还少，唯独敬虔，凡事都有益处，因有今生和来生的应许。</p>
	<!-- end bible --></div>
	愿神的国持续被扩展，更多人奉主差遣、神在全地得着荣耀和称颂；愿我们作主忠心良善的仆人，直到见主的那日，得祂的称赞与赏赐。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗一行人在这个叫做马耳他的小岛上获救，岛上的土人们友善地接待他们，当保罗意外地被毒蛇缠住却毫发无伤时，着实令土人们惊异，而当保罗施行医治的神迹治好了岛上所有的病人，他获得了土人们更大的尊敬，以至在保罗一行人离开的时候，土人们慷慨地供应了船上的需用。保罗一行人其实在岛上三个月过冬，直到初春，海上航行恢复后，他们才启航继续航向罗马</p>

<ul>
	<li><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒28:12-31》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒28:12-31</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>到了叙拉古，我们停泊三日，<sup>13</sup>又从那里绕行，来到利基翁。过了一天，起了南风，第二天就来到部丢利。<sup>14</sup>在那里遇见弟兄们，请我们与他们同住了七天。这样，我们来到罗马。<sup>15</sup>那里的弟兄们一听见我们的信息，就出来到亚比乌市和三馆地方迎接我们。保罗见了他们，就感谢　神，放心壮胆。<sup>16</sup>进了罗马城，（注：有古卷在此有&ldquo;百夫长把众囚犯交给御营的统领，惟有&rdquo;）保罗蒙准和一个看守他的兵另住在一处。</p>

<p><sup>17</sup>过了三天，保罗请犹太人的首领来。他们来了，就对他们说：&ldquo;弟兄们，我虽没有做甚么事干犯本国的百姓和我们祖宗的规条，却被锁绑，从耶路撒冷解在罗马人的手里。<sup>18</sup>他们审问了我，就愿意释放我，因为在我身上并没有该死的罪。<sup>19</sup>无奈犹太人不服，我不得已，只好上告于凯撒，并非有甚么事要控告我本国的百姓。<sup>20</sup>因此，我请你们来见面说话。我原为以色列人所指望的，被这链子捆锁。&rdquo; <sup>21</sup>他们说：&ldquo;我们并没有接着从犹太来论你的信，也没有弟兄到这里来，报给我们说你有甚么不好处。<sup>22</sup>但我们愿意听你的意见如何，因为这教门，我们晓得是到处被毁谤的。&rdquo;</p>

<p><sup>23</sup>他们和保罗约定了日子，就有许多人到他的寓处来。保罗从早到晚对他们讲论这事，证明　神国的道，引摩西的律法和先知的书，以耶稣的事劝勉他们。<sup>24</sup>他所说的话，有信的，有不信的。<sup>25</sup>他们彼此不合，就散了。未散以先，保罗说了一句话，说：&ldquo;圣灵藉先知以赛亚向你们祖宗所说的话是不错的。<sup>26</sup>他说：&lsquo;你去告诉这百姓说，你们听是要听见，却不明白；看是要看见，却不晓得。<sup>27</sup>因为这百姓油蒙了心，耳朵发沉，眼睛闭着；恐怕眼睛看见，耳朵听见，心里明白，回转过来，我就医治他们。</p>

<p><sup>28</sup>所以你们当知道，神这救恩如今传给外邦人，他们也必听受。&rdquo;（注：有古卷在此有<sup>29</sup>&ldquo;保罗说了这话，犹太人议论纷纷地就走了。&rdquo;）<sup>30</sup>保罗在自己所租的房子里住了足足两年。凡来见他的人，他全都接待，<sup>31</sup>放胆传讲　神国的道，将主耶稣基督的事教导人，并没有人禁止。</p>

<p></p>

<p>&nbsp;</p>

</div>

<button id="MC2/cmn/video/multiply3/354.mp4" type="button" class="external-movie">
         观看徒28:12-31</button>
    <div class="collapsed"></div>



<ul>
	<li><strong>探索与讨论</strong>

	<ul>
		<li>让你印象深刻的经文/部分是什么？为什么？</li>
		<li>主的手如何借着门徒在这城中动工和带来影响？结果如何？</li>
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


<ul>
	<li><strong>故事重述</strong>

	<ul>
		<li>再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	
	<li class="nobreak-final-final">此次航行一帆风顺，在部丢利这个地方，保罗甚至有机会和一些基督徒彼此相交；保罗将抵罗马城之前，罗马的弟兄们已风闻保罗将至，他们不远千里来到亚比乌布和三馆这两个地方迎接保罗，弟兄们的盛情使保罗得到很大的激励。罗马信徒收到保罗书信的时间，已经是将近三年前的事了。我们看到保罗总是从犹太人开始传，向他们证明耶稣是经上所说的弥赛亚，然后再开始转向非犹太人传福音。犹太领袖说：&ldquo;因为这教门，我们晓得是到处被毁谤的。&rdquo;（<span class="popup-link" @click = "popUp('pop10')"> 徒28:22</span>）。
	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>但我们愿意听你的意见如何，因为这教门我们晓得是到处被毁谤的。&rdquo;</p>
	<!-- end bible --></div>
	从这里可得知耶稣给门徒大使命之后（<span class="popup-link" @click = "popUp('pop5')"> 徒1:8</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	福音传开的范围广大。虽然在软禁之下，主却给保罗极大的自由接待访客，也让他能在见到凯撒之前作主的工。这段期间，保罗不仅能对看守的罗马兵丁作见证，甚至连凯撒家里的人也有成为信徒的（<span class="popup-link" @click = "popUp('pop11')"> 腓4:22</span>）。

	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>众圣徒都问你们安。在恺撒家里的人特特地问你们安。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>保罗在所有的景况中，实践耶稣所看重的一切，包括：倚靠圣灵、祷告、服从天国的计划、教导耶稣的事、凡事高举天父、积极和周围的人建立关系。待在罗马的期间，保罗不断写信训练、指导腓立比、歌罗西、以弗所的信徒。</p>

<ul>
	<li class="nobreak-final-final">（备注：他也写了一封个人书信给歌罗西教会的领袖腓利门。这封信显出保罗期望获释（<span class="popup-link" @click = "popUp('pop14')"> 腓1:22</span>）。

	<div class="popup invisible" id="pop14"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>但我在肉身活着，若成就我工夫的果子，我就不知道该挑选什么。</p>
	<!-- end bible --></div>
	教会历史告诉我们保罗确实被释放，而且继续到各地传福音（<span class="popup-link" @click = "popUp('pop13')"> 多3:12</span>；

	<div class="popup invisible" id="pop13"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>我打发<u class="person underline">亚提马</u>或是<u class="person underline">推基古</u>到你那里去的时候，你要赶紧往尼哥波立去见我，因为我已经定意在那里过冬。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop15')"> 提后4:20</span>）。

	<div class="popup invisible" id="pop15"><!-- begin bible --><sup class="versenum">20</sup> 以拉都在哥林多住下了。特罗非摩病了，我就留他在米利都。<!-- end bible --></div>
	他到更多地方去建立教会，又写了三封个人书信给他一手培育出来的领袖：提摩太和提多。）</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>徒28:30-31</p>

<p><sup>30</sup>保罗在自己所租的房子里住了足足两年。凡来见他的人，他全都接待，<sup>31</sup>放胆传讲　神国的道，将主耶稣基督的事教导人，并没有人禁止。</p>

</div>

<h2>福音预备</h2>

<ul>
	<li>
	<p>以色列民&ldquo;听是要听见，却不明白；看是要看见，却不晓得&rdquo;是 谁的责任（参 26节）？ 神对他们的心意是什么？给我们今天有什么启发和提醒？</p>
	</li>
	<li>
	<p>在你我的生活中，是否也有看似很不顺的时候？从保罗的被囚生涯中我们是否学到怎样来看待和使用现处的困境？为什么？</p>

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

	</li>
</ul>

<h2>福音行动</h2>

<ul>
	<li>也许因着疫情、或疾病、或需照顾家人而暂时留守在家、无法出差，求主让你有创意和智慧以不同的方式接续天国的事奉，为主得人、造就人、训练人和差遣人。</li>
	<li>持续为教会所差派出去的宣教士（或你认识的宣教士），或所植立的教会或小组，以及城市植堂联盟的需要献上祷告、奉献和主动关心他们的需要。</li>
	<li>本周花时间回顾并写下你这一年多在《倍增门徒》之天国扩展&mdash;&mdash;奉主差遣学习到什么？最大的获益是什么？你对自己、材料和组长的带领并组员的互动，觉得哪方面做得好？有哪些需要改善的？为什么？另外，统计&ldquo;行动计划表&rdquo;里所接触和动员的人数，并神借着你所完成的事工。下周小组学习时，我们会一起数算神恩，评估回馈，并计划&ldquo;下一步&rdquo;。</li>
	<li>未来两个月，花时间把保罗其他书信阅读完毕，并把心得和领受写下，与属灵伙伴或门徒小组一起分享。</li>
	<li>花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
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


<h2>福音祷告</h2>

<ul>
	<li>愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li>求主感动祂的众教会、众圣徒，各尽其职，齐来广传福音，使全地的人都能听见福音而信主得救，并来跟随基督。此外，全地需要收的庄稼还有许多，作工的人却很少，求主感动祂的众圣徒为此祈求主打发更多的工人，齐心传扬福音，使得救的人数早日添满，迎见主的再来。</li>
	<li>使徒行传没有结束，还有许多神的器皿在各地作神的工作。求圣灵充满我们，使我们活着为耶稣，放胆宣扬神的国，成为基督复活见证人，好让我们继续写下使徒行传的脚踪，并让我们的一生为主使用，甘心听从主的差遣，延续使徒行传。</li>
	<li>分享教会或个人的代祷需要。</li>
	<li>组长作结束和祝福祷告</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->