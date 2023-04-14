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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>门徒寻求神替补——编制工人</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒1:8</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">我们可能都急着要马上出发，为神干一番轰轰烈烈的大事。神若要我们暂停等候，我们是否愿意顺服？安静等候，无事可作，对许多人是很痛苦的事。一个人的成败不在于外在工作的表现，而在于内在的平安、喜乐和满足。你是否相信神的智慧：神无所不知，祂的智慧远高于我们的智慧？你是否相信神的能力：神无所不能，祂有足够的能力改变环境？你是否相信神的慈爱：神无条件完全地爱我们，将最好的给我们？因此我们或前进，或停留，是否愿意听凭神的安排，并相信神的慈爱和信实，让祂带领我们呢？</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当使徒们定睛望天，看着升上高天的耶稣，被云彩接去。当他们还定睛望天，忽然天使出现并提醒他们既然主被接升天，祂必荣耀再来。使徒们回到耶路撒冷，同心合一的祷告，寻求神的心意。</p>

<p class="indent2">加略人犹大原本列在使徒数中，且在使徒的职任上得了一分，却因不信而卖主，最后被弃绝。如今他们祈求那&ldquo;知道万人的心&rdquo;之主耶稣向他们显明，选出一位代替犹大使徒的职分。（摇签在旧约圣经中被认可的一种寻求神旨意的方法，但在五旬节圣灵浇灌后似乎就不再被采用了）</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒1:12-26》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒1:12-26</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>有一座山，名叫橄榄山，离耶路撒冷不远，约有安息日可走的路程。当下，门徒从那里回耶路撒冷去，<sup>13</sup>进了城，就上了所住的一间楼房。在那里有彼得、约翰、雅各、安得烈、腓力、多马、巴多罗买、马太、亚勒腓的儿子雅各、奋锐党的西门和雅各的儿子（注：或作&ldquo;兄弟&rdquo;）犹大。<sup>14</sup>这些人同著几个妇人和耶稣的母亲马利亚，并耶稣的弟兄，都同心合意地恒切祷告。</p>

<p><sup>15</sup>那时，有许多人聚会，约有一百二十名，彼得就在弟兄中间站起来，<sup>16</sup>说：&ldquo;弟兄们，圣灵藉大卫的口，在圣经上预言领人捉拿耶稣的犹大，这话是必须应验的。<sup>17</sup>他本来列在我们数中，并且在使徒的职任上得了一分。</p>

<p><sup>18</sup>这人用他作恶的工价买了一块田，以后身子仆倒，肚腹崩裂，肠子都流出来。<sup>19</sup>住在耶路撒冷的众人都知道这事，所以按著他们那里的话给那块田起名叫亚革大马，就是血田的意思。　<sup>20</sup>因为诗篇上写著说：&lsquo;愿他的住处变为荒场，无人在内居住，&rsquo;又说：&lsquo;愿别人得他的职分。&rsquo;<sup>21</sup>所以主耶稣在我们中间始终出入的时候，<sup>22</sup>就是从约翰施洗起，直到主离开我们被接上升的日子为止，必须从那常与我们作伴的人中，立一位与我们同作耶稣复活的见证。&rdquo;</p>

<p><sup>23</sup>于是选举两个人，就是那叫做巴撒巴，又称呼犹士都的约瑟和马提亚。(此包括徒<sup>1</sup>:<sup>23</sup>-<sup>24</sup> ) <sup>25</sup>众人就祷告说：&ldquo;主啊，你知道万人的心。求你从这两个人中，指明你所拣选的是谁，叫他得这使徒的位分。这位分犹大已经丢弃，往自己的地方去了。&rdquo;<sup>26</sup>于是众人为他们摇签，摇出马提亚来；他就和十一个使徒同列。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/302.mp4" type="button" class="external-movie">
         观看&nbsp;徒1:12-26&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒？</li>
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
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">当时只剩下120个门徒聚集在耶路撒冷。此时耶稣的母亲，和耶稣的兄弟姊妹都被列在信徒当中。这个故事显示，虽然许多人从耶稣受洗至返回天上的这段时间中都一路跟随祂，但他们在福音书当中却没有被提到。耶稣之前从众多可能的人选中，拣选了十二使徒。现在，剩下的十一个使徒要另选一人得使徒的位分，而他们决定的标准是&ldquo;常与他们作伴，见过耶稣的生活与事奉的人&rdquo;。旧约圣经中使用摇签下决定的方法，在这里是最后一次出现。耶稣从未使用摇签的方式辨明天父的旨意，因为祂聆听并顺从圣灵的带领。圣灵被差来世上后，我们可以藉由顺服圣灵，并与圣灵同行，来分辨上帝的旨意。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒1:26</p>

<p class="forward bible">于是众人为他们摇签，摇出马提亚来；他就和十一个使徒同列。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">彼得提议要从门徒中选出一位来取代卖主的犹大，他列出了入选条件（也就是使徒的资格），你想为什么需要这些条件？从拣选马提亚的方法和过程，告诉我们哪些寻求神指引的原则？</li>
	<li class="forward">犹大的事件给我们什么反思？在跟随主的过程中有什么重要的借鉴？</li>
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
	<li class="forward">向你教会牧者了解教会在选立同工或是长老/执事有什么要求和条件。同时为教会的牧者同工和长执持续存敬畏神的心、有敬虔和热忱的生命来服事主守望。</li>
	<li class="forward">若你就是教会的同工，在未来与同工配搭服事时，学习效法使徒们处理事情的态度和心志，同心合意寻求神的带领，凡事为众人最大益处着想，讨神的喜悦。</li>
	<li class="forward">为教会的牧者同工团队代求，求神让他们有颗同心合一的心，凡事谦卑寻求神的心意，以基督的心为心，在教会各项事工的决策上，有从神来的智慧，凡事寻求圣灵的指引，荣神益人。</li>
	<li class="forward">主动了解教会所面对的问题或是需要，求神使用你成为教会的祝福。</li>
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

<p class="forward">知道万人的心之主耶稣基督，我们信靠祢。我们众人的心无法隐藏在祢面前，祢真认识并知道我们的心。我们愿意在交账的那日，在祢面前无可指摘，得祢的称赞和奖赏。求祢保守我们常在祢里面，活出祢的真实，我们愿意凡事寻求祢的指引，做祢喜悦的事。愿祢帮助我们在牧养和建立门徒上，存恭敬和谦卑的心，成为众人的榜样，一同荣耀祢的圣名，奉主耶稣的圣名祷告，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->