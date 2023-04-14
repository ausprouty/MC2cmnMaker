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
                        <div class="chapter_number ltr"><h1>48.</h1></div>
                        <div class="chapter_title ltr"><h1>巡抚前辩解——凯撒利亚，两年</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒23:21</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>你切不要随从他们，因为他们有四十多人埋伏，已经起誓说，若不先杀<u class="person underline">保罗</u>就不吃不喝。现在预备好了，只等你应允。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">当世人是根据自己的成就来自我评价，但&ldquo;基督的仆人&rdquo;却是以他为主所受的&ldquo;劳苦&rdquo;来显明仆人的忠心。保罗讲明自己作为基督的仆人受苦的经历（<span class="popup-link" @click = "popUp('pop2')"> 林后11:23-29</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>他们是基督的仆人吗？我说句狂话，我更是！</p>

	<p>我比他们多受劳苦、多下监牢，受鞭打是过重的，冒死是屡次有的。<sup class="versenum">24&nbsp;</sup>被犹太人鞭打五次，每次四十减去一下；<sup class="versenum">25&nbsp;</sup>被棍打了三次，被石头打了一次，遇着船坏三次，一昼一夜在深海里。<sup class="versenum">26&nbsp;</sup>又屡次行远路，遭江河的危险、盗贼的危险、同族的危险、外邦人的危险、城里的危险、旷野的危险、海中的危险、假弟兄的危险。<sup class="versenum">27&nbsp;</sup>受劳碌、受困苦，多次不得睡，又饥又渴，多次不得食，受寒冷，赤身露体。<sup class="versenum">28&nbsp;</sup>除了这外面的事，还有为众教会挂心的事天天压在我身上。<sup class="versenum">29&nbsp;</sup>有谁软弱我不软弱呢？有谁跌倒我不焦急呢？</p>
	<!-- end bible --></div>
	保罗没有借着这些经历&ldquo;自夸&rdquo;刚强，因为他知道这一切都是神自己做的，他所要夸的只是他的&ldquo;软弱&rdquo;，是神的能力&ldquo;在人的软弱上显得完全&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 林后12:9</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>他对我说：&ldquo;我的恩典够你用的，因为我的能力是在人的软弱上显得完全。&rdquo;所以，我更喜欢夸自己的软弱，好叫基督的能力覆庇我。</p>
	<!-- end bible --></div>
	我们越经历十字架的工作，就越认识自己是软弱的、一无所有，且是有心无力的人，就越不敢夸口为主做大事，只是靠着神每一天新鲜的恩典，忠心做好神每一天量给的那份工作。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">之前，保罗在圣殿中千钧一发地从暴民手中逃脱之后，这群狂热份子并没有就此罢手，他们同谋另一个杀害保罗的计策，幸好保罗的外甥得知了这个阴谋，急速告知保罗，罗马千夫长当机立断，决定连夜将保罗护送到该撒利亚；在致该撒利亚巡抚的信中，千夫长陈述了有关保罗事件的来龙去脉，于是，保罗在罗马士兵严密的保护下被安全地解送到了该撒利亚，等待另一场的审讯。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒24:1-27》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒24:1-27</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>过了五天，大祭司亚拿尼亚同几个长老和一个辩士帖土罗下来 ，向巡抚控告保罗。<sup>2</sup>保罗被提了来，帖土罗就告他说： <sup>3</sup>&ldquo;腓力斯大人，我们因你得以大享太平，并且这一国的弊病，因着你的先见得以更正了，我们随时随地满心感谢不尽。<sup>4</sup>惟恐多说，你嫌烦絮，只求你宽容听我们说几句话。</p>

<p><sup>5</sup>我们看这个人，如同瘟疫一般，是鼓动普天下众犹太人生乱的，又是拿撒勒教党里的一个头目， <sup>6</sup>连圣殿他也想要污秽。我们把他捉住了（注：有古卷在此有&ldquo;要按我们的律法审问， <sup>7</sup>不料，千夫长吕西亚前来，甚是强横，从我们手中把他夺去，吩咐告他的人到你这里来。&rdquo;）。<sup>8</sup>你自己究问他，就可以知道我们告他的一切事了。&rdquo; <sup>9</sup>众犹太人也随着告他说：&ldquo;事情诚然是这样。&rdquo;</p>

<p><sup>10</sup>巡抚点头叫保罗说话。他就说：&ldquo;我知道你在这国里断事多年，所以我乐意为自己分诉。<sup>11</sup>你查问就可以知道，从我上耶路撒冷礼拜到今日，不过有十二天。<sup>12</sup>他们并没有看见我在殿里，或是在会堂里，或是在城里，和人辩论，耸动众人。<sup>13</sup>他们现在所告我的事并不能对你证实了。<sup>14</sup>但有一件事，我向你承认，就是他们所称为异端的道，我正按着那道事奉我祖宗的　神，又信合乎律法的和先知书上一切所记载的，<sup>15</sup>并且靠着　神，盼望死人，无论善恶，都要复活，就是他们自己也有这个盼望。<sup>16</sup>我因此自己勉励，对神、对人，常存无亏的良心。</p>

<p><sup>17</sup>过了几年，我带着周济本国的捐项和供献的物上去。<sup>18</sup>正献的时候，他们看见我在殿里已经洁净了，并没有聚众，也没有吵嚷，惟有几个从亚西亚来的犹太人。<sup>19</sup>他们若有告我的事，就应当到你面前来告我。<sup>20</sup>即或不然，这些人若看出我站在公会前有妄为的地方，他们自己也可以说明。<sup>21</sup>纵然有，也不过一句话，就是我站在他们&nbsp; 中间大声说： <span>&lsquo;</span> &lsquo;我今日在你们面前受审，是为死人复活的道理。&rsquo;&rdquo;</p>

<p><sup>22</sup>腓力斯本是详细晓得这道，就支吾他们说：&ldquo;且等千夫长吕西亚下来，我要审断你们的事。&rdquo; <sup>23</sup>于是吩咐百夫长看守保罗，并且宽待他，也不拦阻他的亲友来供给他。</p>

<p><sup>24</sup>过了几天，腓力斯 和他夫人、犹太的女子土西拉一同来到，就叫了保罗来，听他讲论信基督耶稣的道。<sup>25</sup>保罗讲论公义、节制和将来的审判。腓力斯甚觉恐惧，说：&ldquo;你暂且去吧！等我得便再叫你来。&rdquo;<sup>26</sup>腓力斯又指望保罗送他银钱，所以屡次叫他来，和他谈论。<sup>27</sup>过了两年，波求非斯都接了腓力斯的任。腓力斯要讨犹太人的喜欢，就留保罗在监里。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/348.mp4" type="button" class="external-movie">
         观看&nbsp;徒24:1-27&nbsp;</button>
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

<p class="up">那些施加迫害的犹太人既残暴又带着偏见。罗马人则不带成见，竭力要以法律和秩序执政。保罗被困在两股权力之间：耶路撒冷和罗马；宗教和世俗；敌对与友善。虽然他毫无权力，也可能随时受伤，但他有把握罗马人不会申诉他，而且犹太人也告不成他。他也相信主的应允，就是他将在罗马作证的事。犹太人律师帖土罗先对罗马官长虚意逢迎，接着控告保罗三项罪名：制造乱事、基督教徒的头目、亵渎犹太人耶路撒冷的圣殿。保罗只向他们承认四件事：我侍奉我祖宗的上帝、我信所有合乎律法的、我有着跟他们相同的盼望、我勉励自己常存无亏的良心。保罗藉此机会教导官长要有正义、自制和判断。他为我们做了榜样，教导我们在任何环境下都做一个信实、勇敢，又恭敬的见证人。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒24:25</p>

<p class="forward bible">保罗讲论公义、节制和将来的审判。腓力斯甚觉恐惧，说：&ldquo;你暂且去吧！等我得便再叫你来。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">&ldquo;我因此自己勉励，对神、对人，常存无亏的良心&rdquo;；今日世人也常说&ldquo;本着良心办事&rdquo;，究竟&ldquo;信徒&rdquo;的良心跟&ldquo;世人&rdquo;的良心有何异同之处？为什么？</li>
	<li class="forward">如果你是保罗，知道送些银钱，腓力斯就会释放自己。这个时候你可能会如何选择？为什么？</li>
	<li class="forward">保罗把误解、攻击甚至审讯转化成传福音的机会，我们可以从中学到什么？或是你自己是否有这样的经历，神如何使用你？</li>
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
	<li class="forward">本周个人灵修时，花时间研究圣经中关于复活主题的经文，增强你关于复活的信心和盼望，并且可以教导和牧养初信者。</li>
	<li class="forward">评估你在过去的舒适区或是不愿去改变和突破的地方，在这段信靠耶稣的历程中，耶稣怎样帮助了你，使你有突破和成长的。本周与属灵同伴一起分享、庆贺并彼此感恩代祷。</li>
	<li class="forward">本周为管理宗jiao特别是基督教的官长们祈求，神在他们心中动工，在管理的事上有公正公平敬畏神，因为知道在他们之上还有一位神，有一天众人都要在祂面前受审判；为那些正在受逼迫的教会领袖或弟兄姐妹祷告，求主在他们身边亲自坚固和安慰他们；为全球遭受逼迫的宣教士持续守望，求神施恩怜悯的手临到，使他们经历主复活能力的同在。</li>
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
	<li class="forward">神是公义的审判者，又是天天向恶人发怒的神。愿恶人的恶断绝。祂必施行公义，为一切受屈的人伸冤。</li>
	<li class="forward">愿神坚立义人，因为公义的神察验人的心肠肺腑。凡遵守公平，常行公义的，这人便为有福。愿神的百姓在自己的国中行祂看为正的事，秉公行义。也为在上掌权者祷告，使我们能敬虔，平安，端正的度日。</li>
	<li class="forward">我们身处在一个多元开放的社会中，捍卫&ldquo;绝对的&rdquo;真理成为极大的挑战，求神保守我们在个人生活、家庭以及教会整体的表现上能活出基督的见证，以公义、圣洁和良善影响这个道德日渐沉沦的世界。</li>
	<li class="forward">为教会持续有探访或是社区爱心行动祷告，求主借此使我们接触有需要的人并关心他们的需要，在当中也为我们预备和平之子。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->