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
                        <div class="chapter_number ltr"><h1>52.</h1></div>
                        <div class="chapter_title ltr"><h1>遵从型领导力</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动。</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约21:17</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>第三次对他说：&ldquo;<u class="person underline">约翰</u>的儿子<u class="person underline">西门</u>，你爱我吗？&rdquo;<u class="person underline">彼得</u>因为耶稣第三次对他说&ldquo;你爱我吗&rdquo;，就忧愁，对耶稣说：&ldquo;主啊，你是无所不知的，你知道我爱你。&rdquo;耶稣说：&ldquo;你喂养我的羊。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>彼得虽三次不认主，但耶稣复活后向他显现，并问彼得是否愿意全心委身给主，爱祂过于从前的生活。与耶稣的对话，彼得再次被恢复和医治，他继续跟随耶稣，去做得人和牧养人的工作。耶稣这一生都在彰显上帝的慈爱与信实，祂爱我们到底，祂完全接纳我们的失败和软弱。当我们完全回到神的面前，我们可以相信在神没有难成的事，我们的过去与失败，神会使它们成为我们与他人的祝福。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">耶稣受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说　神国的事（<span class="popup-link" @click = "popUp('pop2')"> 徒1:3</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。</p>
	<!-- end bible --></div>
	如今门徒来到耶稣约定的山上与主见面。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音28:16-20》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音28:16-20</button><div class="collapsed" id ="Text0">

<p><sup>16</sup>十一个门徒往加利利去，到了耶稣约定的山上。<sup>17</sup>他们见了耶稣就拜他，然而还有人疑惑。<sup>18</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup>19</sup>所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗（注：或作&ldquo;给他们施洗，归于父、子、圣灵的名）。<sup>20</sup>凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。&rdquo;</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/252.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音28:16-20&nbsp;</button>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">彼得带其他领袖到耶稣约定的山上和耶稣会面。他们敬拜耶稣这位全人类的复活救主。耶稣在这里总结一生的工作，给门徒一个简单的命令&mdash;去使万民作我的门徒！耶稣所有的训练都是为了这个命令。耶稣说：你们要&ldquo;去&rdquo;， 真正的意思是&ldquo;你们活着的这一生，要去使万民作主的门徒&rdquo;。在每天的日常生活中，花时间在他人身上。耶稣的这个命令是给各民、各族、各文化、各语言的。使万人作门徒的宣教行动应该广及全世界。祂应许当我们遵守祂的命令时，祂就常与我们同在。这是耶稣要我们活出的生活方式。重要的是，这件事发生在&ldquo;加利利的山上&rdquo;，能够俯瞰他们被呼召和训练的地方，也能看见周围的列国。几天后，耶稣在耶路撒冷外的橄榄山上升天（<span class="popup-link" @click = "popUp('pop3')"> 徒1:1-11</span>）。
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>应许得圣灵的能力</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>啊，我已经作了前书，论到耶稣开头一切所行所教训的，<sup class="versenum">2&nbsp;</sup>直到他借着圣灵吩咐所拣选的使徒以后，被接上升的日子为止。<sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。<sup class="versenum">4&nbsp;</sup>耶稣和他们聚集的时候，嘱咐他们说：&ldquo;不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。<sup class="versenum">5&nbsp;</sup><u class="person underline">约翰</u>是用水施洗，但不多几日，你们要受圣灵的洗。&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>他们聚集的时候，问耶稣说：&ldquo;主啊，你复兴以色列国就在这时候吗？&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣对他们说：&ldquo;父凭着自己的权柄所定的时候、日期，不是你们可以知道的。<sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;<sup class="versenum">9&nbsp;</sup>说了这话，他们正看的时候，他就被取上升，有一朵云彩把他接去，便看不见他了。<sup class="versenum">10&nbsp;</sup>当他往上去，他们定睛望天的时候，忽然有两个人身穿白衣站在旁边，说：<sup class="versenum">11&nbsp;</sup>&ldquo;加利利人哪，你们为什么站着望天呢？这离开你们被接升天的耶稣，你们见他怎样往天上去，他还要怎样来。&rdquo;</p>
	<!-- end bible --></div>
	这是祂最后一次的显现，祂提醒门徒要等候被圣灵的充满，使他们得着能力去做上帝的工作。</li>
</ul>

<div>
<ul>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop4')"> 马可福音16:19-20</span>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>主耶稣和他们说完了话，后来被接到天上，坐在神的右边。<sup class="versenum">20&nbsp;</sup>门徒出去，到处宣传福音。主和他们同工，用神迹随着证实所传的道。阿门。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 路加福音24:50-53</span>；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">50&nbsp;</sup>耶稣领他们到伯大尼的对面，就举手给他们祝福。<sup class="versenum">51&nbsp;</sup>正祝福的时候，他就离开他们，被带到天上去了。<sup class="versenum">52&nbsp;</sup>他们就拜他，大大地欢喜，回耶路撒冷去，<sup class="versenum">53&nbsp;</sup>常在殿里称颂神。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 使徒行传1:1-11</span>）

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<h3>应许得圣灵的能力</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>啊，我已经作了前书，论到耶稣开头一切所行所教训的，<sup class="versenum">2&nbsp;</sup>直到他借着圣灵吩咐所拣选的使徒以后，被接上升的日子为止。<sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。<sup class="versenum">4&nbsp;</sup>耶稣和他们聚集的时候，嘱咐他们说：&ldquo;不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。<sup class="versenum">5&nbsp;</sup><u class="person underline">约翰</u>是用水施洗，但不多几日，你们要受圣灵的洗。&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>他们聚集的时候，问耶稣说：&ldquo;主啊，你复兴以色列国就在这时候吗？&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣对他们说：&ldquo;父凭着自己的权柄所定的时候、日期，不是你们可以知道的。<sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;<sup class="versenum">9&nbsp;</sup>说了这话，他们正看的时候，他就被取上升，有一朵云彩把他接去，便看不见他了。<sup class="versenum">10&nbsp;</sup>当他往上去，他们定睛望天的时候，忽然有两个人身穿白衣站在旁边，说：<sup class="versenum">11&nbsp;</sup>&ldquo;加利利人哪，你们为什么站着望天呢？这离开你们被接升天的耶稣，你们见他怎样往天上去，他还要怎样来。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>
</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太28:18-20</p>

<p class="forward bible"><sup>18</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup>19</sup>所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗（注：或作&ldquo;给他们施洗，归于父、子、圣灵的名）。<sup>20</sup>凡我所吩咐你们的，都教训他们遵守，我就常与你们同在。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">若耶稣没有复活，我们所传的都是虚空，我们所信的也是没有意义。既然确信耶稣已经复活，我们有一天也要复活。那么你我现在的生活或人生的目标会有什么不同的想法或安排吗？</li>
	<li class="forward">现在我们在小组一起讨论，可以如何接续主耶稣的事工，为主得人、造就人、训练人和差遣人，有份参与在大使命的行列里。</li>
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
	<li class="forward">本周花时间，回顾并写下你在这一年倍增门徒之《天国典范》中学习到什么？参与这个小组最大的获益是什么？你自己、材料、组长的带领并组员的互动，哪些是做得好的？有哪些需要改善的？为什么？</li>
	<li class="up">统计这一年你共接触、关怀祷告、主动分享和传福音的人数，看看神借着你忠心摆上所成就的工作为何？并将一切荣耀和感谢归于父神。同时忠心倍增门徒，建立他们学像基督，成为合神心意的领袖。</li>
	<li class="up">这周安排时间与门徒一起观赏《抹大拉的马利亚》影片。从全然被耶稣释放和改变的抹大拉马利亚，她追述自己的生命如何被耶稣反转，义无反顾追随和服侍耶稣，并见证耶稣的生命与服事。</li>
	<li class="up">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
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

<p>永活的救主耶稣基督，我们赞美祢，信靠祢的人有福了，到那日必要复活，与祢相见！祢是我们的大牧者，我们是祢手中的羊。感谢祢保护我们脱离罪恶和死亡，不再受罪和死的捆绑和辖制。感谢祢赐下圣灵，天上地下所有权柄都是祢的。使万民作祢的门徒是祢给我们的使命，主啊，我们在这里，我们愿意奉祢差派，为主得人、造就人、训练人和差遣人，有份参与大使命。求祢坚定我们手中所做的工，愿我们所做的工被你坚立。奉主耶稣的名祈求，阿们。</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->