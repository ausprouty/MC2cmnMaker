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
                        <div class="chapter_number ltr"><h1>49.</h1></div>
                        <div class="chapter_title ltr"><h1>新官前辩解——凯撒利亚</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒24:25</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup><u class="person underline">保罗</u>讲论公义、节制和将来的审判，<u class="person underline">腓力斯</u>甚觉恐惧，说：&ldquo;你暂且去吧，等我得便再叫你来。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">耶稣曾经说过&ldquo;财主要进神的国比骆驼穿过针眼还困难&rdquo;，这句话正印证在听保论论 道的腓力斯身上，腓力斯认识基督徒的信仰，他有许多归信的机会，但权力和金钱的欲望却阻碍了他进入神的国。然而保罗在这位&ldquo;大人物&rdquo;面前，毫无避讳地论及公义、节制和审判，这是所有的&ldquo;腓力斯们&rdquo;最需要的信息，保罗的直言不讳令人激赏，也值得我们效法，完整的福音是不能打折扣的，无论在乞丐或王子面前，福音只有一个。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">腓力斯开审保罗的案件。大祭司和长老们带来一个辩士控告保罗，说他鼓动犹太人生乱，及企图污秽圣殿。保罗自己答辩，否认所控的罪名，指出他们所告之事不实。但他承认他按&ldquo;那道&rdquo;事奉祖宗的上帝。腓力斯明知保罗无罪，千夫长的信函也是如此报告的。但他一方面不想得罪犹太人，另一方面希望得到贿赂，就推脱要等吕西亚来的报告再作定论。于是保罗被留在他监管之下，直到他任期满了仍未释放。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒25:1-22》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒25:1-22</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>非斯都到了任，过了三天，就从凯撒利亚上耶路撒冷去。<sup>2</sup>祭司长和犹太人的首领向他控告保罗，<sup>3</sup>又央告他，求他的情，将保罗提到耶路撒冷来，他们要在路上埋伏杀害他。<sup>4</sup>非斯都却回答说：&ldquo;保罗押在凯撒利亚，我自己快要往那里去。&rdquo;<sup>5</sup>又说：&ldquo;你们中间有权势的人与我一同下去，那人若有甚么不是，就可以告他。&rdquo;</p>

<p><sup>6</sup>非斯都在他们那里住了不过十天八天，就下凯撒利亚去。第二天坐堂，吩咐将保罗提上来。<sup>7</sup>保罗来了，那些从耶路撒冷下来的犹太人周围站着，将许多重大的事控告他，都是不能证实的。<sup>8</sup>保罗分诉说：&ldquo;无论犹太人的律法、或是圣殿、或是凯撒，我都没有干犯。&rdquo; <sup>9</sup>但非斯都要讨犹太人的喜欢，就问保罗说：&ldquo;你愿意上耶路撒冷去，在那里听我审断这事吗？&rdquo;<sup>10</sup>保罗说：&ldquo;我站在凯撒的堂前 ，这就是我应当受审的地方。我向犹太人并没有行过甚么不义的事，这也是你明明知道的。<sup>11</sup>我若行了不义的事，犯了甚么该死的罪，就是死，我也不辞！他们所告我的事若都不实，就没有人可以把我交给他们。我要上告于凯撒。&rdquo;<sup>12</sup>非斯都和议会商量了，就说：&ldquo;你既上告于凯撒，可以往凯撒那里去。&rdquo;</p>

<p><sup>13</sup>过了些日子，亚基帕王和百妮基氏来到凯撒利亚 ，问非斯都安。<sup>14</sup>在那里住了多日，非斯都将保罗的事告诉王说：&ldquo;这里有一个人，是腓力斯留在监里的。<sup>15</sup>我在耶路撒冷的时候，祭司长和犹太的长老将他的事禀报了我，求我定他的罪。<sup>16</sup>我对他们说：&lsquo;无论甚么人，被告还没有和原告对质，未得机会分诉告他的事，就先定他的罪，这不是罗马人的条例。&rsquo;<sup>17</sup>及至他们都来到这里，我就不耽延，第二天便坐堂，吩咐把那人提上来。<sup>18</sup>告他的人站着告他，所告的，并没有我所逆料的那等恶事，<sup>19</sup>不过是有几样辩论，为他们自己敬鬼神的事，又为一个人名叫耶稣，是已经死了，保罗却说他是活着的。<sup>20</sup>这些事当怎样究问，我心里作难，所以问他说：&lsquo;你愿意上耶路撒冷去，在那里为这些事听审吗？&rsquo;<sup>21</sup>但保罗求我留下他，要听皇上审断，我就吩咐把他留下，等我解他到凯撒那里去。&rdquo;<sup>22</sup>亚基帕对非斯都说：&ldquo;我自己也愿听这人辩论。&rdquo;非斯都说：&ldquo;明天你可以听。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/349.mp4" type="button" class="external-movie">
         观看徒25:1-22</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">巡抚腓力斯把保罗留在监狱里两年，后来又把他留给新巡抚处理。非斯都上耶路撒冷的时候，犹太人的宗教领袖终于找到杀他的机会。如果可以把审判带回耶路撒冷，就有机会在两天的旅程中暗杀保罗。保罗不信任他们，力劝巡抚要遵守罗马的法律，不要为了讨犹太领袖的喜欢而让步。保罗有两年的时间不法地被关在牢里，现在他使用罗马公民的权利要求能在凯撒面前受审。 他也辩解，跟随耶稣与他作为犹太人和忠心罗马公民的身份并不抵触。当亚基帕王和百妮基来到凯撒利亚，他们很有兴趣听保罗的分享。耶稣在所有环境中掌权带领，要实现保罗在凯撒面前作证的应许。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒25:6</p>

<p class="forward bible">非斯都在他们那里住了不过十天八天，就下凯撒利亚去。第二天坐堂，吩咐将保罗提上来。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">非斯都在处理保罗的案件时，存心&ldquo;讨犹太人的喜欢&rdquo;，这在&ldquo;审断&rdquo;上，是否有失公正 (参 9节)？他两次宣称保罗并没有犯下违反罗马法律的罪行，却仍不释放他(参 18，25节)。这对基督的仆人有什么警惕？基督徒行事为人的原则又当如何？（参 加1:10；<span class="popup-link" @click = "popUp('pop3')"> 弗 6:6</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>不要只在眼前侍奉，像是讨人喜欢的，要像基督的仆人，从心里遵行神的旨意，</p>
	<!-- end bible --></div>
	</li>
	<li class="forward">你通常遇到难题时，会尽快采取行动摆脱困境，还是尽量拖延面对？为什么？</li>
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
	<li class="forward">有什么&ldquo;人&rdquo;是你讨厌、不喜欢或是不满的？告诉耶稣，并向耶稣祷告，求祂帮助你。另外与属灵同伴分享并为他们的救恩提名祷告。</li>
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;（你要我为你做什么？），主动表达关心和服事他们，并找机会与他们分享《被圣灵充满》或《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法。</li>
	<li class="forward">为教会或是门徒小组借着PCS的每周福音行动祷告，求神为你们预备&ldquo;和平之子&rdquo;，成为福音的出口和祝福，也求神使用教会成为其他城市和地区的祝福。</li>
	<li class="forward">阅读附录：《主仆：宋尚节》，把阅读心得和反思写下，下周分享</li>
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
	<li class="forward">神是公义的审判者，又是天天向恶人发怒的神。愿恶人的恶断绝；愿神坚立义人，因为公义的神察验人的心肠肺腑。祂必施行公义，为一切受屈的人伸冤。</li>
	<li class="forward">凡遵守公平，常行公义的，这人便为有福。愿神的百姓在自己的国中行祂看为正的事，秉公行义，得众民的喜悦，神将得救的人数天天加给教会。</li>
	<li class="forward">为国家执政掌权者和官长祷告，求神开他们的心眼，知道主耶稣是各样执政掌权者的首领，就存恐惧战兢的心敬畏神，并秉公行义来治理和服务百姓，使我们可以敬虔、端正、平安无事地度日。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->