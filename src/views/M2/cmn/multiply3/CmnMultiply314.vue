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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>腓利在撒玛利亚传道——近文化宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒8:1</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>从这日起，耶路撒冷的教会大遭逼迫。除了使徒以外，门徒都分散在犹太和撒马利亚各处。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">一切的迫害不能动摇司提反，不能令他停止不相信神，不能令他说威吓的话，不能令他失败，犯罪。司提反以善胜恶，还为杀害他的人求情，求主不将这罪归于他们。神绝对有能力拯救司提反，免于死亡。神为何没出手救他？我们是否相信神的主权，由神决定什么是最好的。我们的生命在神的手中，唯有祂知道什么是对我们最好的，使祂的旨意在我们身上展开。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">司提反滔滔不绝的申辩和控诉激怒了在场&ldquo;抗拒圣灵&rdquo;的众人，就在这杀机腾腾的时刻，司提反看见人子站在上帝右边的异象，并且当众宣告这个异象，然而这句被认为是亵渎的宣告将他推入了死地，结果他被一群失控的暴民用石头打死。在这一幕中，作者特别提到了一位叫做扫罗的年轻人正在现场。</p>

<p class="indent2">司提反殉道，随着这个事件来的，是对耶路撒冷教会的大逼迫。逼迫不仅造成信徒的分散，更带来了大规模的传福音的工作。腓利向撒玛利亚勇敢的传道，在当时是一件难以置信的事，但上帝却借着腓利在撒玛利亚大有能力的传讲神的福音。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒8:4-25》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒8:4-25</button><div class="collapsed" id ="Text0">

<p><sup>4</sup>那些分散的人往各处去传道。<sup>5</sup>腓利下撒马利亚城去宣讲基督。<sup>6</sup>众人听见了，又看见腓利所行的神迹，就同心合意地听从他的话。<sup>7</sup>因为有许多人被污鬼附著，那些鬼大声呼叫，从他们身上出来；还有许多瘫痪的、瘸腿的，都得了医治。<sup>8</sup>在那城里就大有欢喜。</p>

<p><sup>9</sup>有一个人，名叫西门，向来在那城里行邪术，妄自尊大，使撒马利亚的百姓惊奇；<sup>10</sup>无论大小都听从他，说：&ldquo;这人就是那称为　神的大能者。&rdquo;<sup>11</sup>他们听从他，因他久用邪术，使他们惊奇。<sup>12</sup>及至他们信了腓利所传　神国的福音和耶稣基督的名，连男带女就受了洗。<sup>13</sup>西门自己也信了，既受了洗，就常与腓利在一处，看见他所行的神迹和大异能，就甚惊奇。</p>

<p><sup>14</sup>使徒在耶路撒冷听见撒马利亚人领受了　神的道，就打发彼得、约翰往他们那里去。<sup>15</sup>两个人到了，就为他们祷告，要叫他们受圣灵。<sup>16</sup>因为圣灵还没有降在他们一个人身上，他们只奉主耶稣的名受了洗。<sup>17</sup>于是使徒按手在他们头上，他们就受了圣灵。</p>

<p><sup>18</sup>西门看见使徒按手，便有圣灵赐下，就拿钱给使徒<sup>19</sup>说：&ldquo;把这权柄也给我，叫我手按著谁，谁就可以受圣灵。&rdquo;<sup>20</sup>彼得说：&ldquo;你的银子和你一同灭亡吧！因你想　神的恩赐是可以用钱买的。<sup>21</sup>你在这道上无分无关，因为在　神面前，你的心不正。<sup>22</sup>你当懊悔你这罪恶，祈求主，或者你心里的意念可得赦免。<sup>23</sup>我看出你正在苦胆之中，被罪恶捆绑。&rdquo;</p>

<p><sup>24</sup>西门说：&ldquo;愿你们为我求主，叫你们所说的，没有一样临到我身上。&rdquo;<sup>25</sup>使徒既证明主道，而且传讲，就回耶路撒冷去，一路在撒马利亚好些村庄传扬福音。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/314.mp4" type="button" class="external-movie">
         观看徒8:4-25</button>
    <div class="collapsed"></div>



<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作主门徒？</li>
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

<p class="up">撒玛利亚占巴勒斯坦地区其中的一大部分，位于耶路撒冷北边。腓利和司提反一样，是被拣选的七人之一，帮忙照料耶路撒冷的寡妇。他也行了和使徒一样的事，显出早期的门徒训练大有果效。他医治了许多人，从人身上赶出鬼，并传讲上帝的国。虽然耶稣在其事奉期间曾到撒玛利亚的一个村庄去（约翰福音四章），但腓利在撒玛利亚城里见到的回响，仍算是大得不寻常。这是我们在《使徒行传》里头一次看到福音传到非犹太人的地方去，所以彼得和约翰被差派到那里去支持腓利的工作。主使用这个经历向彼得和约翰证实福音是给所有人的。尽管耶稣曾告诉使徒要从耶路撒冷去到犹太全地，和撒玛利亚，直到地极，他们却很少将福音带到耶路撒冷以外的地方去。彼得和约翰因主所做的事大受激励，他们在回去耶路撒冷的路上，一路在撒玛利亚的好些村庄建立教会。我们了解到司提反的死亡和随后发生的逼迫，都为上帝的计划互相效力，使天国得以扩张，教会得以建立。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>徒8:25</p>

<p class="up">使徒既证明主道，而且传讲，就回耶路撒冷去，一路在撒马利亚好些村庄传扬福音。</p>
</div>

<p class="forward bible">&nbsp;</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">西门对属灵的恩赐有那些错误的心态？你是如何看待属灵的恩赐呢？</li>
	<li class="forward">你相信福音的能力吗？试分享福音是如何改变你的世界观、价值观或生活方式。</li>
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
	<li class="forward">反思你祈求神赐恩赐的动机为何，若有不对或不讨神喜悦的地方，求神的赦免，并借着祂的话语归正和改变你，使你合乎主用。</li>
	<li class="forward">为你所知道在国内受逼迫的教会和牧者传道祷告，求主坚定祂的教会和儿女，让他们在执政掌权者面前蒙恩宠有美名，并成为当地的光和盐。也求主照顾那些被囚禁的宣教士家人，坚定他们的信心，从主得安慰，并靠主站立得稳。</li>
	<li class="forward">为教会的布道与宣教事工祷告，求神给教会牧者同工异象使命，并动员教会信徒参与大使命，有颗乐意祷告和奉献的心，积极参与福音行动或短宣，经历神能力的同在与传福音的喜乐。</li>
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
	<li class="forward">为弟兄姐妹存正确动机来服事，并积极发挥神所赐的恩赐，与教会牧者传道同心合意地在教会侍奉配搭，一起建立基督的身体。</li>
	<li class="forward">求神使用弟兄姐妹在各自的岗位和专业上发挥基督徒的影响力，为主作美好的见证，福音在各个领域中开展。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->