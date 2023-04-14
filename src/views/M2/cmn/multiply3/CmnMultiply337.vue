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
                        <div class="chapter_number ltr"><h1>37.</h1></div>
                        <div class="chapter_title ltr"><h1>归正福音——福音传讲有力（以弗所）</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒18:9-10</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>夜间，主在异象中对<u class="person underline">保罗</u>说：&ldquo;不要怕，只管讲，不要闭口。<sup class="versenum">10&nbsp;</sup>有我与你同在，必没有人下手害你。因为在这城里我有许多的百姓。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">保罗的宣教没有在高度文明的雅典建立一间教会，却在以道德沦落著名的哥林多建立了教会，期间看到圣灵的引导和保守，神为保罗预备了同工亚居拉夫妇，还有为福音开放家门的犹士都，最大的鼓励是神在异象中对保罗的安慰和坚固。保罗在哥林多的经历让我们看到，神在这个失丧的城市中如何施行拯救。因此宣教士的工作虽然会有许多艰难和挑战，但不要因为环境上的艰难而动摇，因为出于神的，神必成就。神已在各地预备属祂的子民，成就祂的旨意。让我们以信心的眼光来预见神在这地的大能和作为！</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗在声名狼藉的哥林多这个陌生的城市，保罗有幸得到亚居拉夫妇的接待，如同过往一样，犹太人的会堂是保罗传道的必到之地，历史也一再重演，保罗受到了犹太人的拒绝和逼迫，不过这回和过去不同的是，神在异象中启示保罗，鼓励保罗放胆传讲，因为在这个城中有许多属神的百姓。得到神坚固和安慰的保罗在哥林多居住了一年六个月，殷勤传讲主的道，在结束这次宣教旅程之前，保罗路过以弗所，还拜访了耶路撒冷的教会，之后才回到安提阿。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒18:23-28》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒18:23-28</button><div class="collapsed" id ="Text0">

<p><sup>23</sup>住了些日子，又离开那里，挨次经过加拉太和弗吕家地方，坚固众门徒。<sup>24</sup>有一个犹太人，名叫亚波罗，来到以弗所。他生在亚历山大，是有学问的，最能讲解圣经（注：&ldquo;学问&rdquo;或作&ldquo;口才&rdquo;）。<sup>25</sup>这人已经在主的道上受了教训，心里火热，将耶稣的事详细讲论教训人；只是他单晓得约翰的洗礼。<sup>26</sup>他在会堂里放胆讲道，百基拉、亚居拉听见，就接他来，将　神的道给他讲解更加详细。<sup>27</sup>他想要往亚该亚去，弟兄们就勉励他，并写信请门徒接待他（注：或作&ldquo;弟兄们就写信劝门徒接待他&rdquo;）。他到了那里，多帮助那蒙恩主的人信，<sup>28</sup>在众人面前极有能力，驳倒犹太人，引圣经证明耶稣是基督。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/337.mp4" type="button" class="external-movie">
         观看&nbsp;徒18:23-28&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</li>
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
	<li class="nobreak-final-final">保罗的同工亚居拉和百基拉，从哥林多搬到以弗所。两人遇见了施洗约翰的门徒&mdash;&mdash;亚波罗。他精通旧约圣经，但对耶稣的事并不完全了解。我们在这个故事里看到门徒倍增门徒的极佳例子。亚居拉和百基拉给亚波罗训练，后来亚波罗也去哥林多训练其他人（<span class="popup-link" @click = "popUp('pop2')"> 徒19:1</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup><u class="person underline">亚波罗</u>在哥林多的时候，<u class="person underline">保罗</u>经过了上边一带地方，就来到以弗所。在那里遇见几个门徒，</p>
	<!-- end bible --></div>
	请读<span class="popup-link" @click = "popUp('pop3')"> 弗4:11-16</span>：

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>他所赐的有使徒，有先知，有传福音的，有牧师和教师，<sup class="versenum">12&nbsp;</sup>为要成全圣徒，各尽其职，建立基督的身体，<sup class="versenum">13&nbsp;</sup>直等到我们众人在真道上同归于一，认识神的儿子，得以长大成人，满有基督长成的身量，<sup class="versenum">14&nbsp;</sup>使我们不再做小孩子，中了人的诡计和欺骗的法术，被一切异教之风摇动飘来飘去，就随从各样的异端，<sup class="versenum">15&nbsp;</sup>唯用爱心说诚实话，凡事长进，连于元首基督。<sup class="versenum">16&nbsp;</sup>全身都靠他联络得合式，百节各按各职，照着各体的功用彼此相助，便叫身体渐渐增长，在爱中建立自己。</p>
	<!-- end bible --></div>
	耶稣赐给教会的有使徒、有先知、有传福音的，有牧师和教师。亚波罗的恩赐是为信仰辩护，对哥林多年轻的教会帮助很大。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒18:26</p>

<p class="forward bible">他（亚波罗）在会堂里放胆讲道，百基拉、亚居拉听见，就接他来，将　神的道给他讲解更加详细。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">亚波罗的背景如何限制了他起初的事奉（参 25节）？亚居拉夫妇在他身上所作的，对今日教会有什么宝贵的提示？</li>
	<li class="forward">你认为教会牧者/传道人与信徒的关系可以是如何的？为什么？我们应当如何帮助传道人和宣教士？</li>
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
	<li class="forward">初期教会中，接待信徒是一件很平常、也很重要的服事，亚居拉夫妇接待保罗，哥林多的信徒接待亚波罗，新约中，这样的例子到处可见。
	<ul class="forward">
		<li class="forward">&ldquo;接待信徒&rdquo;在旅游发达的现代生活中逐渐不是那么需要，然而，我们在不同的处境下能以什么&ldquo;接待&rdquo;的方式来关怀有特别需要的弟兄姊妹，使&ldquo;接待&rdquo;在神的家中不至于成为一门失传的艺术？</li>
		<li class="forward">祷告神，让教会或是你的家成为&ldquo;接待&ldquo;的地方，作为短宣队、传道人/宣教士或弟兄姐妹得以从新得力、福音广传与神慈爱的出口。</li>
		<li class="forward">本周求神使用你或是你的小组借着爱心、关怀和奉献来服事教会中&ldquo;最小的弟兄&rdquo;，做在主耶稣的身上。</li>
	</ul>
	</li>
	<li class="forward">因着新冠肺炎肆虐全球，人与人之间的互动多了一些距离，教会线下聚会和小组都大受影响。祷告神，让我们晓得在新常态中继续在我们的人际网中更有智慧和创意，以不同的方式借着&ldquo;祷告-关怀-分享&rdquo;（PCS）为主得人和造就人。</li>
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
	<li class="forward">弟兄姐妹存正确的动机来服事神，并积极发挥神所赐的恩赐，与教会牧者传道同心合意地在教会侍奉配搭，一起建立基督的身体。</li>
	<li class="forward">求神使教会或是你的家成为&ldquo;接待&rdquo;的地方，作为短宣队、传道人/宣教士或弟兄姐妹得以从新得力、福音广传与神慈爱的出口，多人因此蒙福得造就。</li>
	<li class="forward">求神使用弟兄姐妹在各自的岗位和专业上发挥基督徒的影响力，为主作美好的见证，福音在各个领域中开展。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->