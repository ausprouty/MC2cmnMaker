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
                        <div class="chapter_number ltr"><h1>51.</h1></div>
                        <div class="chapter_title ltr"><h1>牧养型领导力</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约20:30-31</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>耶稣在门徒面前另外行了许多神迹，没有记在这书上。<sup class="versenum">31&nbsp;</sup>但记这些事要叫你们信耶稣是基督，是神的儿子，并且叫你们信了他，就可以因他的名得生命。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣胜过死亡的能力在我们里面，使我们能过新生活。当我们让天父改变我们时，复活的耶稣就赐给我们能力胜过生命中的罪。当我们放下自己，让耶稣住在我们里面、使用我们，耶稣的复活大能就会涌流在我们生命中。神要我们效法耶稣这样的领导方式，而非像世界只求高抬自己、支配他人的领导方式！&nbsp;</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">复活的耶稣首先向抹大拉的马利亚显现，接着向祂最亲近的一些门徒显现，门徒的忧伤立时被喜乐所取代。根据对观福音的记载，天使吩咐门徒到加利利去等候耶稣，门徒们将从最先遇见耶稣的地方重新再出发。</p>

<p class="indent2">不久之后，在加利利的海边，一个曙光初现的清晨，耶稣第三次向七位门徒显现。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音21:1-25》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音21:1-25</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>这些事以后，耶稣在提比哩亚海边又向门徒显现。他怎样显现记在下面：<sup>2</sup>有西门彼得和称为低土马的多马，并加利利的迦拿人拿但业，还有西庇太的两个儿子，又有两个门徒，都在一处。<sup>3</sup>西门彼得对他们说：&ldquo;我打鱼去。&rdquo;他们说：&ldquo;我们也和你同去。&rdquo;他们就出去，上了船，那一夜并没有打着什么。<sup>4</sup>天将亮的时候，耶稣站在岸上，门徒却不知道是耶稣。<sup>5</sup>耶稣就对他们说：&ldquo;小子！你们有吃的没有？&rdquo;他们回答说：&ldquo;没有！&rdquo;<sup>6</sup>耶稣说：&ldquo;你们把网撒在船的右边，就必得着。&rdquo;他们便撒下网去，竟拉不上来了，因为鱼甚多。</p>

<p><sup>7</sup>耶稣所爱的那门徒对彼得说：&ldquo;是主！&rdquo;那时西门彼得赤着身子，一听见是主，就束上一件外衣，跳在海里。<sup>8</sup>其余的门徒离岸不远，约有二百肘（注：古代以肘为尺，一肘约有今时尺半），就在小船上把那网鱼拉过来。<sup>9</sup>他们上了岸，就看见那里有炭火，上面有鱼，又有饼。<sup>10</sup>耶稣对他们说：&ldquo;把刚才打的鱼拿几条来。&rdquo;<sup>11</sup>西门彼得就去（注：或作&ldquo;上船&rdquo;），把网拉到岸上，那网满了大鱼，共一百五十三条。鱼虽这样多，网却没有破。<sup>12</sup>耶稣说：&ldquo;你们来吃早饭。&rdquo;门徒中没有一个敢问他：&ldquo;你是谁？&rdquo;，因为知道是主。<sup>13</sup>耶稣就来拿饼和鱼给他们。<sup>14</sup>耶稣从死里复活以后向门徒显现，这是第三次。</p>

<p><sup>15</sup>他们吃完了早饭，耶稣对西门彼得说：&ldquo;约翰的儿子西门（注：&ldquo;约翰&rdquo;在马太<sup>16</sup>章<sup>17</sup>节称&ldquo;约拿&rdquo;），你爱我比这些更深吗？&rdquo;彼得说：&ldquo;主啊，是的，你知道我爱你。&rdquo;耶稣对他说：&ldquo;你喂养我的小羊。&rdquo;<sup>16</sup>耶稣第二次又对他说：&ldquo;约翰的儿子西门，你爱我吗？&rdquo;彼得说：&ldquo;主啊，是的，你知道我爱你。&rdquo;耶稣说：&ldquo;你牧养我的羊。&rdquo;<sup>17</sup>第三次对他说：&ldquo;约翰的儿子西门，你爱我吗？&rdquo;彼得因为耶稣第三次对他说：&ldquo;你爱我吗&rdquo;，就忧愁，对耶稣说：&ldquo;主啊，你是无所不知的，你知道我爱你。&rdquo;耶稣说：&ldquo;你喂养我的羊。<sup>18</sup>我实实在在地告诉你：你年少的时候，自己束上带子，随意往来；但年老的时候，你要伸出手来，别人要把你束上，带你到不愿意去的地方。&rdquo;<sup>19</sup>耶稣说这话，是指着彼得要怎样死，荣耀　神。说了这话，就对他说：&ldquo;你跟从我吧！&rdquo;</p>

<p><sup>20</sup>彼得转过来，看见耶稣所爱的那门徒跟着，就是在晚饭的时候，靠着耶稣胸膛说&ldquo;主啊，卖你的是谁&rdquo;的那门徒。<sup>21</sup>彼得看见他，就问耶稣说：&ldquo;主啊，这人将来如何？&rdquo;<sup>22</sup>耶稣对他说：&ldquo;我若要他等到我来的时候，与你何干？你跟从我吧！&rdquo;<sup>23</sup>于是这话传在弟兄中间，说那门徒不死；其实耶稣不是说他不死，乃是说：&ldquo;我若要他等到我来的时候，与你何干？&rdquo;<sup>24</sup>为这些事作见证，并且记载这些事的就是这门徒。我们也知道他的见证是真的。<sup>25</sup>耶稣所行的事还有许多；若是一一的都写出来，我想，所写的书，就是世界也容不下了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/251.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音21:1-25&nbsp;</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">从死里复活后，耶稣好几次向门徒显现。一共多达五百人看见祂。有一次耶稣回加利利海边，看重操旧业回去捕鱼工作的领袖。这让人回想起过去他们曾经整晚打不到鱼的窘境。当他们再次经历和几年前一样的神迹时，祂们才认出原来是耶稣。彼得很高兴再看见主。耶稣问他是否要全心委身给自己，祂问彼得是否爱祂过于从前的生活？如果是，那么彼得应当在乎耶稣所在乎的事，&ldquo;去牧养人&rdquo;，像耶稣牧养他一样。彼得再次被恢复，跟随耶稣，继续去做得人和牧养人的工作。这是我们最后一次看见彼得回去捕鱼。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约21:17</p>

<p class="forward bible"><sup>17</sup>第三次对他说：&ldquo;约翰的儿子西门，你爱我吗？&rdquo;彼得因为耶稣第三次对他说：&ldquo;你爱我吗&rdquo;，就忧愁，对耶稣说：&ldquo;主啊，你是无所不知的，你知道我爱你。&rdquo;耶稣说：&ldquo;你喂养我的羊。灵魂交付　神了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">约翰在属灵上的敏锐使他很容易认出耶稣（7节）。我们可以怎样培养这种属灵的敏锐度，以致我们能在一些事情上辨识出是上帝在作工？</li>
	<li class="forward">彼得曾经三次否认主，从耶稣和彼得的对话中，你认为彼得的内心是否得到了医治？曾经失败的彼得被耶稣完全的接纳和任命，耶稣今天仍在问你和我：&ldquo;你爱我吗？来跟从我！&rdquo;你愿意委身跟从祂吗？为什么？</li>
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
	<li class="forward">列下哪些事情或是经历拦阻你继续跟随耶稣并爱祂？回想当初你信耶稣的种种美好经历，是什么事让你却步，愧疚或是怀疑祂的爱？你想今天耶稣来到你所处的境况，祂会对你说什么？而你想耶稣为你做什么？</li>
	<li class="forward">鼓励自己和门徒，每天学习数算一件神在你身上的恩典和作为，并向神感恩。相信神使万事互相效力，叫爱祂的人得益处，并效法祂爱子耶稣基督的样式。现在所经历的一切，试想有什么是神要你们学习和成长的。</li>
	<li class="forward">本周用行动或创意的方式来表达对教会牧者或小组长的关爱和摆上，谢谢他们这些年日对你的包容，关爱和付出。并鼓励他们爱神爱人，继续让爱走动。</li>
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

<p style="text-align:justify"><span><span><span lang="ZH-CN">复活的救主，我们称谢祢，因着祢的复活，向我们显明祢是神的儿子，祢已经胜过罪恶和死亡的权势。感谢祢体恤并怜悯世人，要人享受在祢里面的丰富。求祢帮助我们对祢有正确的认识，待人有恩典，正如祢也无条件接纳和爱我们。我们承认我们还是会被过去的一些失败的经历或是对祢的错误看法所影响，以致对祢对人的认知有偏颇，得罪神也得罪人。求祢赦免我们一切的过犯，帮助我们重拾起初对祢的爱心，牧养并照管那些祢放在我们生命的人。祷告祈求是奉主耶稣的名，阿们。</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->