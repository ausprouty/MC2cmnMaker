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
                        <div class="chapter_number ltr"><h1>10.</h1></div>
                        <div class="chapter_title ltr"><h1>为圣殿大发热心</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约2:11</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>这是耶稣所行的头一件神迹，是在加利利的迦拿行的，显出他的荣耀来，他的门徒就信他了。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final"><span class="popup-link" @click = "popUp('pop2')"> 约翰福音3:8</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>风随着意思吹，你听见风的响声，却不晓得从哪里来，往哪里去。凡从圣灵生的，也是如此。&rdquo;</p>
	<!-- end bible --></div>
	描述圣灵就像风一样。我们既不能控制圣灵，也不能使唤祂，因祂随自己的意思运行。我们无法产生运动，因为只有圣灵自己才能做成这事。然而，我们能做的是预备好自己，当圣灵动工时，我们就能与祂同工。感恩，圣灵在各处运行！让我们预备自己，存祷告和敬畏的心与圣灵同行。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">迦南婚姻不久以后，耶稣和门徒来到耶路撒冷过逾越节，许多人因为耶稣所行的一些神迹就相信了祂。作者约翰没有记下这些神迹，却记下了耶稣在圣殿中一次破天荒的行动，耶稣赶出了圣殿中做买卖的人，祂&ldquo;洁净圣殿&rdquo;的行动引发宗教领袖前来兴师问罪。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音 2:12-25》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音 2:12-25</button><div class="collapsed" id ="Text0">

<p><sup>12</sup> 这事以后，耶稣与他的母亲、弟兄和门徒都下迦百农去，在那里住了不多几日。<sup>13</sup>犹太人的逾越节近了，耶稣就上耶路撒冷去。<sup>14</sup>看见殿里有卖牛、羊、鸽子的，并有兑换银钱的人坐在那里。<sup>15</sup>耶稣就拿绳子做成鞭子，把牛羊都赶出殿去，倒出兑换银钱之人的银钱，推翻他们的桌子。<sup>16</sup>又对卖鸽子的说：&ldquo;把这些东西拿去！不要将我父的殿当作买卖的地方。&rdquo;<sup>17</sup>他的门徒就想起经上记着说：&ldquo;我为你的殿，心里焦急，如同火烧。&rdquo;<sup>18</sup>因此犹太人问他说：&ldquo;你既做这些事，还显什么神迹给我们看呢？&rdquo;<sup>19</sup>耶稣回答说：&ldquo;你们拆毁这殿，我三日内要再建立起来。&rdquo;<sup>20</sup>犹太人便说：&ldquo;这殿是四十六年才造成的，你三日内就再建立起来吗？&rdquo;<sup>21</sup>但耶稣这话，是以他的身体为殿。<sup>22</sup>所以到他从死里复活以后，门徒就想起他说过这话，便信了圣经和耶稣所说的。<sup>23</sup>当耶稣在耶路撒冷过逾越节的时候，有许多人看见他所行的神迹，就信了他的名。<sup>24</sup>耶稣却不将自己交托他们，因为他知道万人；<sup>25</sup>也用不着谁见证人怎样，因他知道人心里所存的。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/210.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音 2:12-25&nbsp;</button>
    <div class="collapsed"></div>

<p class="up">&nbsp;</p>

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

<p class="up">耶稣带门徒到耶路撒冷守逾越节。逾越节为期七天，是为了庆祝摩西带领以色列人出埃及。耶稣为天父的圣名与声誉心里火热。祂生气以色列人不再将心思放在敬拜天父的上面，而是想在他人身上赚取钱财。我们从耶稣的身上看见属人的真实情感，也看见属神的真实勇气。爱天父的心使祂无法忍受人利用圣殿赚钱而坐视不管。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约2:17</p>

<p class="forward bible">他的门徒就想起经上记着说：&ldquo;我为你的殿，心里焦急，如同火烧。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">如果耶稣今天来到了我们的教会，你想祂可能会有什么反应（我们可以相信，祂对我们的教会了如指掌）？祂会为什么事情责备我们教会吗？我们有哪些地方违反了祂的心意吗？</li>
	<li class="forward">&ldquo;耶稣知道人心里所存的&rdquo;这件事会令你害怕、放心或大感安慰？为什么？</li>
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
	<li class="forward">主动向教会牧者/同工了解教会和小组的使命和异象，为教会和小组守望，并主动参与教会的服事，同心建造神的家。</li>
	<li class="forward">主动关心牧者/同工，问他们可以如何为教会和他们个人及家庭的需要代祷，并且以实际的行动来表达爱与服事。</li>
	<li class="forward">本周提早到教会的聚会或小组，留意教会的需要，看日后可以在哪方面应用你的恩赐、专业、才干、祷告和金钱来参与神家里的事。</li>
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

<p>教会的元首耶稣基督，我们赞美与称谢祢，祢是昔在今在以后永在的神！感谢祢以宝血拯救我们，把我们从罪恶当中拯救出来，分别为圣，归入祢的名下，为要我们爱祢、敬拜祢和事奉祢。主啊，教会有做不好或得罪祢的地方，求主赦免与炼净。主啊，我们愿意竭力多做主工，自己做门徒，也使人作主的门徒，凡事讨祢的喜悦，成为小区的光和盐，见证并荣耀祢的圣名。奉主耶稣基督的名求，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->