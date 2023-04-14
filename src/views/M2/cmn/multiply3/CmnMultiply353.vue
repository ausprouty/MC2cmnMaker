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
                        <div class="chapter_number ltr"><h1>53.</h1></div>
                        <div class="chapter_title ltr"><h1>岛上蒙保守——马耳他岛</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒27:35-37</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup><u class="person underline">保罗</u>说了这话，就拿着饼，在众人面前祝谢了神，掰开吃。<sup class="versenum">36&nbsp;</sup>于是他们都放下心，也就吃了。</p>

	<p><sup class="versenum">37&nbsp;</sup>我们在船上的共有二百七十六个人。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">主耶稣即将被钉十字架，但祂却预先告诉门徒说&ldquo;在世上，你们有苦难；但你们可以放心，我已经胜了世界&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 约翰福音16:33</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">33&nbsp;</sup>我将这些事告诉你们，是要叫你们在我里面有平安。在世上你们有苦难，但你们可以放心，我已经胜了世界。&rdquo;</p>
	<!-- end bible --></div>
	因为世界一切的环境、势力都无法使祂偏离十字架的使命。门徒也能&ldquo;胜过世界&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 约壹5:4</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>因为凡从神生的，就胜过世界。使我们胜了世界的，就是我们的信心。</p>
	<!-- end bible --></div>
	世界一切的环境、势力也无法使我们偏离基督和祂的使命。而&ldquo;使我们胜了世界的，就是我们的信心&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 约壹5:4</span>），

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>因为凡从神生的，就胜过世界。使我们胜了世界的，就是我们的信心。</p>
	<!-- end bible --></div>
	当我们凭着信心活在复活的主里面，主的得胜就成了我们的得胜，因为神的道常在我们心中（<span class="popup-link" @click = "popUp('pop5')"> 约壹2:13-14</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>父老啊，我写信给你们，因为你们认识那从起初原有的。少年人哪，我写信给你们，因为你们胜了那恶者。小子们哪，我曾写信给你们，因为你们认识父。</p>

	<p><sup class="versenum">14&nbsp;</sup>父老啊，我曾写信给你们，因为你们认识那从起初原有的。少年人哪，我曾写信给你们，因为你们刚强，神的道常存在你们心里，你们也胜了那恶者。</p>
	<!-- end bible --></div>
	也因为在我们里面的圣灵比在世界的敌基督的灵更大（<span class="popup-link" @click = "popUp('pop6')"> 约壹4:4</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>小子们哪，你们是属神的，并且胜了他们；因为那在你们里面的，比那在世界上的更大。</p>
	<!-- end bible --></div>
	求神帮助我们信靠祂，以面对和胜过生命的种种境况和挑战，在祂里面得着勇气、平安和喜乐。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">这艘船在海上整整漂流了十四天，当船只有触礁危险的时候，水手们险些逃走，保罗在关键时刻镇定地安抚众人，当船终于搁浅时，士兵们起意杀掉囚犯，以免承担囚犯逃脱的责任，幸亏百夫长为了救保罗而保住了全体囚犯的性命，结果真如保罗的神所预言的，整船的人全都获救。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒28:1-11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒28:1-11</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>我们既已得救，才知道那岛名叫马耳他。<sup>2</sup>土人看待我们，有非常的情分；因为当时下雨，天气又冷，就生火接待我们众人。<sup>3</sup>那时，保罗拾起一捆柴，放在火上，有一条毒蛇，因为热了出来，咬住他的手。<sup>4</sup>土人看见那毒蛇悬在他手上，就彼此说：&ldquo;这人必是个凶手，虽然从海里救上来，天理还不容他活着。&rdquo; <sup>5</sup>保罗竟把那毒蛇甩在火里，并没有受伤。<sup>6</sup>土人想他必要肿起来，或是忽然仆倒死了；看了多时，见他无害，就转念说：&ldquo;他是个神！&rdquo;</p>

<p><sup>7</sup>离那地方不远，有田产是岛长部百流的。他接纳我们，尽情款待三日。<sup>8</sup>当时，部百流的父亲患热病和痢疾躺着。保罗进去为他祷告，按手在他身上，治好了他。<sup>9</sup>从此，岛上其余的病人也来得了医治。<sup>10</sup>他们又多方地尊敬我们，到了开船的时候，也把我们所需用的送到船上。<sup>11</sup>过了三个月，我们上了亚历山大的船往前行。这船以&ldquo;宙斯双子&rdquo;为记 ，是在那海岛过了冬的。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/353.mp4" type="button" class="external-movie">
         观看&nbsp;徒28:1-11&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">主的手如何借着门徒在这岛上动工和带来影响？结果如何？</li>
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

<p class="up">读《罗马书》8:28-29。虽然在人的眼中看来，这个停留是意料之外的事，也是不必要的，但却是在上帝主导的计划之中。无论景况如何，保罗寻求上帝的良善和计划。当服事周围的人时，他倚靠圣灵的工作，积极与人建立关系，顺从耶稣的天国计划。主甚至以超自然的方式保护被毒蛇咬到的保罗。可怕的海难却成了马耳他岛民的祝福，主也得了荣耀。即使在偏远的小岛上，保罗也能寻得上帝预备的和平之子&mdash;&mdash;岛长部百流。待在岛上的三个月里，部百流的家成了宣教事奉的据点。他相当感激，供应给保罗和他的同伴、兵丁一切回罗马需用的东西。主不仅救了遭遇船难的人和岛上的人民，祂也补回了在暴风雨中失去的一切。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒28:6</p>

<p class="forward bible">土人想他必要肿起来，或是忽然仆倒死了；看了多时，见他无害，就转念说：&ldquo;他是个神！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">保罗在米利大岛上，又遭受一次蛇咬之苦；似乎此行 （从该撒利亚到罗马）到目前为止，没有一处是顺利的。保罗既是是为神作工，为何要受到这多的拦阻？你的看法如何？</li>
	<li class="forward">岛上所发生的两次医治：9节的&ldquo;按手祷告&rdquo;和10节的&ldquo;得了医治&rdquo;，两者有什么不同之处？这对我们有什么启示？为什么？</li>
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
	<li class="forward">保罗经历船难，来到了一个陌生的岛屿，虽然不久前才熬过艰苦的海难，精疲力尽，然而保罗很快在岛上服事当地人，医治了岛上所有的病人。
	<ul class="forward">
		<li class="forward">保罗无论何时不忘传福音，也不忘以仆人的心态服事有需要的人，他所活出的正是一个基督徒的生命和生活。</li>
		<li class="forward">我们是否能像保罗一样，随时随地看到我们身边的人（家人、亲友、甚至不认识的人）的需要并且提供帮助？求主的爱常常激励我们。</li>
	</ul>
	</li>
	<li class="forward">纵然洪水泛滥，耶和华依然坐着为王。我们知道神必能使万事都互相效力，叫爱祂的我们得益处，并效法祂儿子耶稣基督的样式。为教会或是你所处的环境和困境祷告，求神让我们凭信心交托仰望祂，为我们开通达的道路并赐平安。</li>
	<li class="forward">为教会或是门徒小组借着PCS的每周福音行动祷告，求神为你们预备&ldquo;和平之子&rdquo;，成为福音的出口和祝福，也求神使用教会成为其他城市和地区的祝福。</li>
	<li class="forward">阅读附录：《主仆：史祈生》，把阅读心得和反思写下，下周分享。</li>
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
	<li class="forward">纵然洪水泛滥，耶和华依然坐着为王。为这世代和我们所处的环境与困境祷告，求神让我们继续仰望祂的信实和慈爱，怜悯和医治这地，使人心回转向祂。</li>
	<li class="forward">为那些在残害和杀害基督徒的国家祷告，求主记念祂的百姓，求主亲自开福音的门，使作恶的和抵挡神的，神亲自管教和对付，使人对神生存敬畏；神迹奇事在那地彰显，神的名得荣耀。</li>
	<li class="forward">这是数码的时代，我们看到神借着不同的数码策略通过互联网的空间来接触和与世界各地的未得之地和未得之民连接。求神借着众教会一起参与和配搭，让那些从未听过耶稣的人有至少一次听到耶稣的机会。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->