<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
                        <div class="chapter_number ltr"><h1>41.</h1></div>
                        <div class="chapter_title ltr"><h1>回程坚固教会——马其顿、亚该亚</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒19:40-41</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>今日的扰乱本是无缘无故，我们难免被查问；论到这样聚众，我们也说不出所以然来。&rdquo;<sup class="versenum">41&nbsp;</sup>说了这话，便叫众人散去。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">以弗所人特别迷信假神偶像，神在此特别借保罗的手施行&ldquo;非常的奇事&rdquo;来证明主的道。今天在文明落后的国家和地区，神也常借信徒的手施行神迹奇事。当晓得是神&ldquo;借保罗的手&rdquo;行神迹（<span class="popup-link" @click = "popUp('pop2')"> 林后12:12</span>；

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>我在你们中间用百般的忍耐，借着神迹、奇事、异能，显出使徒的凭据来。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 罗15:18</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>除了基督借我做的那些事，我什么都不敢提，只提他借我言语作为，用神迹奇事的能力，并圣灵的能力，使外邦人顺服，</p>
	<!-- end bible --></div>
	并不是保罗能凭着恩赐随心所欲地行神迹、医病赶鬼。所以后来虽然保罗的同工病了，神也没有让保罗用神迹医治他们（<span class="popup-link" @click = "popUp('pop4')"> 腓2:27</span>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>他实在是病了，几乎要死，然而神怜恤他，不但怜恤他，也怜恤我，免得我忧上加忧。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 提前5:23</span>；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>因你胃口不清，屡次患病，再不要照常喝水，可以稍微用点酒。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 提后4:20</span>

	<div class="popup invisible" id="pop6"><!-- begin bible --><!-- end bible --></div>
	）。神迹不是有恩赐的人可以随意施行的，必须由神按着祂的旨意，借着人的手行出来，使人认识耶稣，并将荣耀归于神。让我们凡事按神的心意并祂最大的荣耀而行。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">福音在以弗所的丰收引起了一场暴动，看似保罗所传的福音使以弗所人所尊崇的大女神亚底米的威望受损，实际上是制造亚底米神银龛的银匠们在经济上受到巨大的亏损。由于以弗所城书记公平的裁决，这场暴动可以很快平息。</p>

<p class="indent2">以弗所的暴乱平息之后，保罗决定取道马其顿和希腊踏上归程，然而他这次的目的地不是宣教基地的安提阿，而是耶路撒冷，与保罗同行的有来自马其顿、亚西亚和加拉太众教会的一些外邦弟兄，他们在特罗亚聚集。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒20:1-12》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒20:1-12</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>乱定之后，保罗请门徒来，劝勉他们，就辞别起行，往马其顿去。<sup>2</sup>走遍了那一带地方，用许多话劝勉门徒（注：或作&ldquo;众人&rdquo;），然后来到希腊。<sup>3</sup>在那里住了三个月，将要坐船往叙利亚去，犹太人设计要害他，他就定意从马其顿回去。<sup>4</sup>同他到亚西亚去的，有庇哩亚人毕罗斯的儿子所巴特，帖撒罗尼迦人亚里达古和西公都，还有特庇人该犹，并提摩太，又有亚西亚人推基古和特罗非摩 。<sup>5</sup>这些人先走，在特罗亚等候我们。<sup>6</sup>过了除酵的日子，我们从腓立比开船，五天到了特罗亚，和他们相会，在那里住了七天。</p>

<p><sup>7</sup>七日的第一日，我们聚会擘饼的时候，保罗因为要次日起行，就与他们讲论，直讲到半夜。<sup>8</sup>我们聚会的那座楼上，有好些灯烛。<sup>9</sup>有一个少年人，名叫犹推古，坐在窗台上困倦沉睡。保罗讲了多时，少年人睡熟了，就从三层楼上掉下去；扶起他来，已经死了。<sup>10</sup>保罗下去，伏在他身上，抱着他说：&ldquo;你们不要发慌，他的灵魂还在身上。&rdquo;<sup>11</sup>保罗又上去，擘饼，吃了，谈论许久，直到天亮，这才走了。<sup>12</sup>有人把那童子活活地领来，得的安慰不小。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/341.mp4" type="button" class="external-movie">
         观看徒20:1-12</button>
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

<ul>
	<li class="nobreak-final-final">如同以往一样，保罗重访自己建立的各教会，劝勉信徒，更多地教导他们。他先往马其顿去拜访腓立比、帖撒罗尼迦、庇哩亚的教会。在马其顿的时候，他写了另一封信给哥林多教会的人。待了数个月后，他就往亚该亚去拜访哥林多的信徒。在那里的时候，他写信给罗马的教会，要让他们知道自己的行程安排，也向他们更深入地解释福音（<span class="popup-link" @click = "popUp('pop7')"> 罗1:11</span>；

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>因为我切切地想见你们，要把些属灵的恩赐分给你们，使你们可以坚固；</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop8')"> 罗15:28</span>）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">28&nbsp;</sup>等我办完了这事，把这善果向他们交付明白，我就要路过你们那里，往西班牙去。</p>
	<!-- end bible --></div>
	保罗的性命不断地受到威胁，他必须改变行程，以免遭到暗杀。这也让他有时间稍作停留，去拜访特罗亚的信徒，教导他们。我们看见保罗持续扩大事奉的团队，从禾场上培育领袖去收割庄稼。这里提到的七个人，是从其他宣教据点过来的。从保罗的书信中，我们了解到他为耶路撒冷贫穷的信徒收集奉献，因而带来各教会的合一。他将一些领袖和教会连结起来，帮助这些领袖看见他们是大规模宣教工作中的一部分。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒20:11-12</p>

<p class="forward bible"><sup>11</sup>保罗又上去，擘饼，吃了，谈论许久，直到天亮，这才走了。<sup>12</sup>有人把那童子活活地领来，得的安慰不小。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">第四节，有些外邦基督徒和保罗同行，这些人是各教会的代表，他们共同的任务是将各教会的捐款送到耶路撒冷，帮助那里贫困的信徒，马其顿各教会的代表是所巴特、亚里达古和西公都，加拉太各教会的代表是该犹和提摩太，亚西亚各教会的代表是推基古和特罗非摩，此处没有提到哥林多的代表，但根据林后8:6-24，哥林多的捐款是由提多和另两位弟兄负责。</li>
</ul>

<p class="indent2">保罗前往耶路撒冷的这个重要任务里，给我们什么提醒或学习？为什么？</p>

<ul class="forward">
	<li class="forward">保罗离开特罗亚的前一晚发生这个突发的事故，身为医生的作者路加记下的是，这个少年人已经&ldquo;死了&rdquo;。作者记载这个事件有什么特别的用意吗？为什么大家从犹推古事件得到很大安慰？如果你在场，你会如何反应？</li>
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
	<li class="forward">&ldquo;所以，你们务要在众教会面前显明你们爱心的凭据，并我所夸奖你们的凭据&rdquo;（<span class="popup-link" @click = "popUp('pop9')"> 林后8:24</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>所以，你们务要在众教会面前显明你们爱心的凭据，并我所夸奖你们的凭据。</p>
	<!-- end bible --></div>
	我们是否知道那些地方的教会面对匮乏，需要我们在基督里彼此相顾（即在教会的奉献蒙神的赐福而有余，看到不足有需要的教会或肢体，彼此帮补和补足）。

	<ul class="forward">
		<li class="forward">本月教会或小组的奉献里，用在慈惠事工上或是在供给圣徒的恩情上有份。</li>
		<li class="forward">你自己或教导门徒也学习在宣教事工上参与奉献，求神借你们的手供应有需要的教会、宣教士或传道人。</li>
	</ul>
	</li>
	<li class="forward">教会初期，擘饼记念主与爱筵聚餐往往一起进行，但后来因为有不正常的情况发生参(<span class="popup-link" @click = "popUp('pop10')"> 林前11:20-34</span>)，
	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>你们聚会的时候，算不得吃主的晚餐， <sup class="versenum">21&nbsp;</sup>因为吃的时候，各人先吃自己的饭，甚至这个饥饿，那个酒醉。 <sup class="versenum">22&nbsp;</sup>你们要吃喝，难道没有家吗？还是藐视神的教会，叫那没有的羞愧呢？我向你们可怎么说呢？可因此称赞你们吗？我不称赞！ <sup class="versenum">23&nbsp;</sup>我当日传给你们的，原是从主领受的，就是主耶稣被卖的那一夜，拿起饼来， <sup class="versenum">24&nbsp;</sup>祝谢了，就掰开，说：&ldquo;这是我的身体，为你们舍的。你们应当如此行，为的是记念我。&rdquo; <sup class="versenum">25&nbsp;</sup>饭后，也照样拿起杯来，说：&ldquo;这杯是用我的血所立的新约。你们每逢喝的时候，要如此行，为的是记念我。&rdquo; <sup class="versenum">26&nbsp;</sup>你们每逢吃这饼、喝这杯，是表明主的死，直等到他来。 <sup class="versenum">27&nbsp;</sup>所以，无论何人，不按理吃主的饼、喝主的杯，就是干犯主的身、主的血了。 <sup class="versenum">28&nbsp;</sup>人应当自己省察，然后吃这饼、喝这杯。 <sup class="versenum">29&nbsp;</sup>因为人吃喝，若不分辨是主的身体，就是吃喝自己的罪了。 <sup class="versenum">30&nbsp;</sup>因此，在你们中间有好些软弱的与患病的，死的也不少。 <sup class="versenum">31&nbsp;</sup>我们若是先分辨自己，就不至于受审。 <sup class="versenum">32&nbsp;</sup>我们受审的时候，乃是被主惩治，免得我们和世人一同定罪。 <sup class="versenum">33&nbsp;</sup>所以我弟兄们，你们聚会吃的时候，要彼此等待。 <sup class="versenum">34&nbsp;</sup>若有人饥饿，可以在家里先吃，免得你们聚会自己取罪。其余的事，我来的时候再安排。</p>
	<!--end of footnotes--><!-- end bible --></div>
	以致逐渐放弃这种习惯。因新冠疫情的缘故，有段时间大家无法参与圣餐主日。原来能与弟兄姐妹一起领受主餐，在主爱中相连，彼此勉励直等主再来，是何等的福气。未来当你能与弟兄姐妹在教会领受圣餐，操练更多参与圣餐服事和摆上，并珍惜与弟兄姐妹彼此团契和相爱的机会。</li>
	<li class="forward">本周把《罗马书》阅读一遍，将心得写下，下周小组分享。下图书卷图表仅供参考。</li>
</ul>

<p class="forward">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image9.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image9.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image9.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

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

<ul class="forward">
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为天父赐予我们一切所需要的，并且有余来感谢祂。也求主帮助我们的奉献是甘心乐意的，在神的事上尽自己一份力量，让我们的施舍和奉献，得以补足其他教会的需要和供给传道人，使他们无后顾之忧的来服事神。</li>
	<li class="forward">求主帮助我们看重主的圣餐，明白圣餐的意义，珍惜每次的圣餐主日，与弟兄姐妹存敬畏的心，彼此勉励行善，在真道上扎根，作主忠心管家，直等主再来。</li>
	<li class="forward">分享教会或个人代祷需要。最后请一位作结束和祝福祷告。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->