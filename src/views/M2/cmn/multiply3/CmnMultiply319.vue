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
                        <div class="chapter_number ltr"><h1>19.</h1></div>
                        <div class="chapter_title ltr"><h1>彼得被差进外邦人——被预备宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop10')"> 徒9:40</span>）
	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup><u class="person underline">彼得</u>叫她们都出去，就跪下祷告，转身对着死人说：&ldquo;<u class="person underline">大比大</u>，起来！&rdquo;她就睁开眼睛，见了<u class="person underline">彼得</u>，便坐起来。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">医好瘫子和多加复活的神迹证明了彼得所传的道。两件事例中，彼得的作为都使当地人归服了主。神迹本身不是最终的目的，神迹都指向了神迹背后的上帝，他们透过神迹信了耶稣。神医治（及审判）的大能既借着行动与言语彰显出来，人们就应当有所回应。奇事神迹可以辅助使徒的话语，产生说服力。特别是在当时，新约圣经还没有写成。神迹奇事的见证更加重要。作为一个有神的信仰，神迹（神的作为）是不可避免要提到的。虽然神迹并不保证一个人的信仰，但是可以吸引人来了解并让人对基督信仰重新思想，神迹也帮助证实所传的真道。（<span class="popup-link" @click = "popUp('pop1')"> 可16:17,20</span>；

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>信的人必有神迹随着他们，就是：奉我的名赶鬼；说新方言；</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 徒2:17,22</span>，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>&lsquo;神说：在末后的日子，我要将我的灵浇灌凡有血气的，你们的儿女要说预言，你们的少年人要见异象，老年人要做异梦。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 徒4:30</span>，

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>一面伸出你的手来医治疾病，并且使神迹奇事因着你圣仆耶稣的名行出来。&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 徒5:12</span>，

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>主借使徒的手在民间行了许多神迹奇事。他们都同心合意地在<u class="person underline">所罗门</u>的廊下。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 徒8:6</span>，

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>众人听见了，又看见<u class="person underline">腓利</u>所行的神迹，就同心合意地听从他的话。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 徒14:3&nbsp;</span>&hellip;&hellip;）。<span class="popup-link" @click = "popUp('pop6')"> &nbsp;</span>

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>二人在那里住了多日，倚靠主放胆讲道，主借他们的手施行神迹奇事，证明他的恩道。</p>
	<!-- end bible --></div>
	愿神迹奇事在各地伴随主的仆人，主的名彰显，吸引更多人归向独一的救主耶稣基督。</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背景</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">使徒彼得传福音的工作﹕五旬节圣灵降临，彼得在耶路撒冷讲道，对犹太人打开了福音之门（<span class="popup-link" @click = "popUp('pop7')"> 徒2:1-47</span>)&nbsp;

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<h3>门徒在五旬节被圣灵充满</h3>

	<p><sup class="versenum">1 </sup>五旬节到了，门徒都聚集在一处。<sup class="versenum">2&nbsp;</sup>忽然，从天上有响声下来，好像一阵大风吹过，充满了他们所坐的屋子；<sup class="versenum">3&nbsp;</sup>又有舌头如火焰显现出来，分开落在他们各人头上。<sup class="versenum">4&nbsp;</sup>他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。</p>

	<p><sup class="versenum">5&nbsp;</sup>那时，有虔诚的犹太人从天下各国来，住在耶路撒冷。<sup class="versenum">6&nbsp;</sup>这声音一响，众人都来聚集，各人听见门徒用众人的乡谈说话，就甚纳闷，<sup class="versenum">7&nbsp;</sup>都惊讶稀奇说：&ldquo;看哪，这说话的不都是加利利人吗？<sup class="versenum">8&nbsp;</sup>我们各人怎么听见他们说我们生来所用的乡谈呢？<sup class="versenum">9&nbsp;</sup>我们帕提亚人、玛代人、以拦人和住在美索不达米亚、犹太、加帕多家、本都、亚细亚、<sup class="versenum">10&nbsp;</sup>弗吕家、旁非利亚、埃及的人，并靠近古利奈的利比亚一带地方的人，从罗马来的客旅中或是犹太人、或是进犹太教的人，<sup class="versenum">11&nbsp;</sup>克里特和阿拉伯人，都听见他们用我们的乡谈，讲说神的大作为！&rdquo;<sup class="versenum">12&nbsp;</sup>众人就都惊讶猜疑，彼此说：&ldquo;这是什么意思呢？&rdquo;<sup class="versenum">13&nbsp;</sup>还有人讥诮说：&ldquo;他们无非是新酒灌满了！&rdquo;</p>

	<h3>彼得的讲说</h3>

	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">彼得</u>和十一个使徒站起，高声说：&ldquo;犹太人和一切住在耶路撒冷的人哪，这件事你们当知道，也当侧耳听我的话。<sup class="versenum">15&nbsp;</sup>你们想这些人是醉了，其实不是醉了，因为时候刚到巳初。<sup class="versenum">16&nbsp;</sup>这正是先知<u class="person underline">约珥</u>所说的：<sup class="versenum">17&nbsp;</sup>&lsquo;神说：在末后的日子，我要将我的灵浇灌凡有血气的，你们的儿女要说预言，你们的少年人要见异象，老年人要做异梦。<sup class="versenum">18&nbsp;</sup>在那些日子，我要将我的灵浇灌我的仆人和使女，他们就要说预言。<sup class="versenum">19&nbsp;</sup>在天上我要显出奇事，在地下我要显出神迹，有血，有火，有烟雾。<sup class="versenum">20&nbsp;</sup>日头要变为黑暗，月亮要变为血，这都在主大而明显的日子未到以前。<sup class="versenum">21&nbsp;</sup>到那时候，凡求告主名的，就必得救。&rsquo;<sup class="versenum">22&nbsp;</sup>以色列人哪，请听我的话：神借着拿撒勒人耶稣在你们中间施行异能、奇事、神迹，将他证明出来，这是你们自己知道的。<sup class="versenum">23&nbsp;</sup>他既按着神的定旨、先见被交于人，你们就借着无法之人的手，把他钉在十字架上杀了。<sup class="versenum">24&nbsp;</sup>神却将死的痛苦解释了，叫他复活，因为他原不能被死拘禁。<sup class="versenum">25&nbsp;</sup><u class="person underline">大卫</u>指着他说：&lsquo;我看见主常在我眼前，他在我右边，叫我不至于摇动。<sup class="versenum">26&nbsp;</sup>所以我心里欢喜，我的灵快乐，并且我的肉身要安居在指望中；<sup class="versenum">27&nbsp;</sup>因你必不将我的灵魂撇在阴间，也不叫你的圣者见朽坏。<sup class="versenum">28&nbsp;</sup>你已将生命的道路指示我，必叫我因见你的面得着满足的快乐。&rsquo;<sup class="versenum">29&nbsp;</sup>弟兄们，先祖<u class="person underline">大卫</u>的事，我可以明明地对你们说，他死了，也葬埋了，并且他的坟墓直到今日还在我们这里。<sup class="versenum">30&nbsp;</sup><u class="person underline">大卫</u>既是先知，又晓得神曾向他起誓，要从他的后裔中立一位坐在他的宝座上，<sup class="versenum">31&nbsp;</sup>就预先看明这事，讲论基督复活说：他的灵魂不撇在阴间，他的肉身也不见朽坏。<sup class="versenum">32&nbsp;</sup>这耶稣，神已经叫他复活了，我们都为这事作见证。<sup class="versenum">33&nbsp;</sup>他既被神的右手高举，又从父受了所应许的圣灵，就把你们所看见、所听见的浇灌下来。<sup class="versenum">34&nbsp;</sup><u class="person underline">大卫</u>并没有升到天上，但自己说：&lsquo;主对我主说：&ldquo;你坐在我的右边，<sup class="versenum">35&nbsp;</sup>等我使你仇敌做你的脚凳。&rdquo;&rsquo;<sup class="versenum">36&nbsp;</sup>故此，以色列全家当确实地知道：你们钉在十字架上的这位耶稣，神已经立他为主、为基督了。&rdquo;</p>

	<h3>感动多人信主</h3>

	<p><sup class="versenum">37&nbsp;</sup>众人听见这话，觉得扎心，就对<u class="person underline">彼得</u>和其余的使徒说：&ldquo;弟兄们，我们当怎样行？&rdquo;<sup class="versenum">38&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。<sup class="versenum">39&nbsp;</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们神所召来的。&rdquo;<sup class="versenum">40&nbsp;</sup><u class="person underline">彼得</u>还用许多话作见证，劝勉他们说：&ldquo;你们当救自己脱离这弯曲的世代！&rdquo;<sup class="versenum">41&nbsp;</sup>于是，领受他话的人就受了洗，那一天，门徒约添了三千人；<sup class="versenum">42&nbsp;</sup>都恒心遵守使徒的教训，彼此交接、掰饼、祈祷。</p>

	<p><sup class="versenum">43&nbsp;</sup>众人都惧怕，使徒又行了许多奇事神迹。<sup class="versenum">44&nbsp;</sup>信的人都在一处，凡物公用，<sup class="versenum">45&nbsp;</sup>并且卖了田产、家业，照各人所需用的分给各人。<sup class="versenum">46&nbsp;</sup>他们天天同心合意恒切地在殿里，且在家中掰饼，存着欢喜、诚实的心用饭，<sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
	<!-- end bible --></div>
	腓利在撒玛利亚传福音，彼得为相信的撒玛利亚人祷告，叫他们受圣灵（<span class="popup-link" @click = "popUp('pop8')"> 徒8:5-25</span>)&nbsp;

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup><u class="person underline">腓利</u>下撒马利亚城去宣讲基督。<sup class="versenum">6&nbsp;</sup>众人听见了，又看见<u class="person underline">腓利</u>所行的神迹，就同心合意地听从他的话。<sup class="versenum">7&nbsp;</sup>因为有许多人被污鬼附着，那些鬼大声呼叫，从他们身上出来；还有许多瘫痪的、瘸腿的，都得了医治。<sup class="versenum">8&nbsp;</sup>在那城里就大有欢喜。</p>

	<h3>行邪术的西门</h3>

	<p><sup class="versenum">9&nbsp;</sup>有一个人名叫<u class="person underline">西门</u>，向来在那城里行邪术，妄自尊大，使撒马利亚的百姓惊奇。<sup class="versenum">10&nbsp;</sup>无论大小都听从他，说：&ldquo;这人就是那称为神的大能者。&rdquo;<sup class="versenum">11&nbsp;</sup>他们听从他，因他久用邪术使他们惊奇。<sup class="versenum">12&nbsp;</sup>及至他们信了<u class="person underline">腓利</u>所传神国的福音和耶稣基督的名，连男带女就受了洗。<sup class="versenum">13&nbsp;</sup><u class="person underline">西门</u>自己也信了，既受了洗，就常与<u class="person underline">腓利</u>在一处，看见他所行的神迹和大异能，就甚惊奇。</p>

	<h3>彼得约翰传教于撒马利亚</h3>

	<p><sup class="versenum">14&nbsp;</sup>使徒在耶路撒冷听见撒马利亚人领受了神的道，就打发<u class="person underline">彼得</u>、<u class="person underline">约翰</u>往他们那里去。<sup class="versenum">15&nbsp;</sup>两个人到了，就为他们祷告，要叫他们受圣灵，<sup class="versenum">16&nbsp;</sup>因为圣灵还没有降在他们一个人身上，他们只奉主耶稣的名受了洗。<sup class="versenum">17&nbsp;</sup>于是使徒按手在他们头上，他们就受了圣灵。</p>

	<p><sup class="versenum">18&nbsp;</sup><u class="person underline">西门</u>看见使徒按手便有圣灵赐下，就拿钱给使徒，<sup class="versenum">19&nbsp;</sup>说：&ldquo;把这权柄也给我，叫我手按着谁，谁就可以受圣灵。&rdquo;<sup class="versenum">20&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你的银子和你一同灭亡吧！因你想神的恩赐是可以用钱买的。<sup class="versenum">21&nbsp;</sup>你在这道上无份无关，因为在神面前你的心不正。<sup class="versenum">22&nbsp;</sup>你当懊悔你这罪恶，祈求主，或者你心里的意念可得赦免。<sup class="versenum">23&nbsp;</sup>我看出你正在苦胆之中，被罪恶捆绑。&rdquo;<sup class="versenum">24&nbsp;</sup><u class="person underline">西门</u>说：&ldquo;愿你们为我求主，叫你们所说的，没有一样临到我身上！&rdquo;</p>

	<p><sup class="versenum">25&nbsp;</sup>使徒既证明主道而且传讲，就回耶路撒冷去，一路在撒马利亚好些村庄传扬福音。</p>
	<!-- end bible --></div>
	彼得在吕大、约帕，行神迹奇事传福音（<span class="popup-link" @click = "popUp('pop9')"> 徒9:32-43</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<h3>彼得医治以尼雅</h3>

	<p><sup class="versenum">32&nbsp;</sup><u class="person underline">彼得</u>周流四方的时候，也到了居住吕大的圣徒那里。<sup class="versenum">33&nbsp;</sup>遇见一个人名叫<u class="person underline">以尼雅</u>，得了瘫痪，在褥子上躺卧八年。<sup class="versenum">34&nbsp;</sup><u class="person underline">彼得</u>对他说：&ldquo;<u class="person underline">以尼雅</u>，耶稣基督医好你了。起来，收拾你的褥子！&rdquo;他就立刻起来了。<sup class="versenum">35&nbsp;</sup>凡住吕大和沙仑的人都看见了他，就归服主。</p>

	<p><sup class="versenum">36&nbsp;</sup>在约帕有一个女徒，名叫<u class="person underline">大比大</u>，翻希腊话就是<u class="person underline">多加</u>。她广行善事，多施周济。<sup class="versenum">37&nbsp;</sup>当时，她患病而死，有人把她洗了，停在楼上。<sup class="versenum">38&nbsp;</sup>吕大原与约帕相近，门徒听见<u class="person underline">彼得</u>在那里，就打发两个人去见他，央求他说：&ldquo;快到我们那里去，不要耽延！&rdquo;<sup class="versenum">39&nbsp;</sup><u class="person underline">彼得</u>就起身和他们同去。到了，便有人领他上楼。众寡妇都站在<u class="person underline">彼得</u>旁边哭，拿<u class="person underline">多加</u>与她们同在时所做的里衣外衣给他看。<sup class="versenum">40&nbsp;</sup><u class="person underline">彼得</u>叫她们都出去，就跪下祷告，转身对着死人说：&ldquo;<u class="person underline">大比大</u>，起来！&rdquo;她就睁开眼睛，见了<u class="person underline">彼得</u>，便坐起来。<sup class="versenum">41&nbsp;</sup><u class="person underline">彼得</u>伸手扶她起来，叫众圣徒和寡妇进去，把<u class="person underline">多加</u>活活地交给他们。<sup class="versenum">42&nbsp;</sup>这事传遍了约帕，就有许多人信了主。<sup class="versenum">43&nbsp;</sup>此后，<u class="person underline">彼得</u>在约帕一个硝皮匠<u class="person underline">西门</u>的家里住了多日。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="up">凯撒利亚有时候称为巴勒斯坦凯撒利亚，位于地中海岸，在约帕以北51公里处。凯撒利亚是巴勒斯坦在地中海最大和最重要的港口城市，是罗马统治下的犹太省的首都，又是第一个有外邦基督徒和非犹太人教会的城市。虽然哥尼流驻守凯撒利亚，不过他可能将要回到罗马，所以他的悔改是很重要的踏脚石，使福音可因此而传到首都。</p>

<p class="up">在本章中，彼得是第一个使徒打破犹太人和外族人之间的障碍，他是在神的直接命令下这样做的，哥尼流成为第一个归主的外邦人。</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒10:1-33》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒10:1-33</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>在凯撒利亚有一个人，名叫哥尼流，是意大利营的百夫长。<sup>2</sup>他是个虔诚人，他和全家都敬畏　神，多多周济百姓，常常祷告　神。<sup>3</sup>有一天，约在申初，他在异象中明明看见　神的一个使者进去，到他那里，说：&ldquo;哥尼流。&rdquo;<sup>4</sup>哥尼流定睛看他，惊怕说：&ldquo;主啊，甚么事呢？&rdquo;天使说：&ldquo;你的祷告和你的周济达到　神面前，已蒙记念了。<sup>5</sup>现在你当打发人往约帕去，请那称呼彼得的西门来。<sup>6</sup>他住在海边一个硝皮匠西门的家里，房子在海边上。&rdquo;<sup>7</sup>向他说话的天使去后，哥尼流叫了两个家人和常伺候他的一个虔诚兵来，<sup>8</sup>把这事都述说给他们听，就打发他们往约帕去。</p>

<p><sup>9</sup>第二天，他们行路将近那城，彼得约在午正上房顶去祷告。<sup>10</sup>觉得饿了，想要吃。那家的人正预备饭的时候，彼得魂游象外，<sup>11</sup>看见天开了，有一物降下，好像一块大布，系著四角，缒在地上。<sup>12</sup>里面有地上各样四足的走兽和昆虫，并天上的飞鸟。<sup>13</sup>又有声音向他说：&ldquo;彼得，起来，宰了吃！&rdquo;<sup>14</sup>彼得却说：&ldquo;主啊，这是不可的！凡俗物和不洁净的物，我从来没有吃过。&rdquo;<sup>15</sup>第二次有声音向他说：&ldquo;　神所洁净的，你不可当作俗物。&rdquo;<sup>16</sup>这样一连三次，那物随即收回天上去了。<sup>17</sup>彼得心里正在猜疑之间，不知所看见的异象是甚么意思。哥尼流所差来的人已经访问到西门的家，站在门外，<sup>18</sup>喊著问：&ldquo;有称呼彼得的西门住在这里没有？&rdquo;<sup>19</sup>彼得还思想那异象的时候，圣灵向他说：&ldquo;有三个人来找你。<sup>20</sup>起来，下去，和他们同往，不要疑惑！因为是我差他们来的。&rdquo;</p>

<p><sup>21</sup>于是彼得下去见那些人，说：&ldquo;我就是你们所找的人。你们来是为甚么缘故？&rdquo; <sup>22</sup>他们说：&ldquo;百夫长哥尼流是个义人，敬畏　神，为犹太通国所称赞。他蒙一位圣天使指示，叫他请你到他家里去，听你的话。&rdquo;<sup>23</sup>彼得就请他们进去，住了一宿。次日起身和他们同去，还有约帕的几个弟兄同著他去。<sup>24</sup>又次日，他们进入凯撒利亚。哥尼流已经请了他的亲属、密友等候他们。<sup>25</sup>彼得一进去，哥尼流就迎接他。俯伏在他脚前拜他。<sup>26</sup>彼得却拉他说：&ldquo;你起来，我也是人。&rdquo;</p>

<p><sup>27</sup>彼得和他说著话进去，见有好些人在那里聚集，<sup>28</sup>就对他们说：&ldquo;你们知道，犹太人和别国的人亲近来往，本是不合例的，但　神已经指示我，无论甚么人都不可看作俗而不洁净的。<sup>29</sup>所以我被请的时候，就不推辞而来。现在请问：你们叫我来有甚么意思呢？&rdquo;<sup>30</sup>哥尼流说：&ldquo;前四天这个时候，我在家中守著申初的祷告，忽然有一个人穿著光明的衣裳，站在我面前，<sup>31</sup>说：&lsquo;哥尼流，你的祷告已蒙垂听，你的周济达到　神面前，已蒙记念了。<sup>32</sup>你当打发人往约帕去，请那称呼彼得的西门来，他住在海边一个硝皮匠西门的家里。&rsquo;<sup>33</sup>所以我立时打发人去请你。你来了很好，现今我们都在　神面前，要听主所吩咐你的一切话。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/319.mp4" type="button" class="external-movie">
         观看徒10:1-33</button>
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
<div id="Summary2" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">从约帕到西泽利亚需要两天的路程。耶稣帮助彼得以及同行的犹太信徒跨越犹太人教会最终必须跨过的文化籓篱。遵循犹太传统的犹太人是不能进入外邦人的家，所以这对他们来说是一件天大的事。哥尼流是和平之子的绝佳例子。他是让人意想不到的人，耶稣已经预备好他的心。他聚集自己网络关系中的人，与他们一同聆听福音。他不仅是外邦人，也是罗马手下有影响力的百夫长&mdash;&mdash;军事指挥官，管理大约八十名的意大利士兵。这个故事告诉我们主如何预备两方的心：传福音的人，与将接受福音的和平之子及他们的朋友。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">徒10:17</p>

<p class="forward bible">彼得心里正在猜疑之间，不知所看见的异象是甚么意思。哥尼流所差来的人已经访问到西门的家，站在门外，</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们对传福音的范围是否有所限制？思想这些限制是否是因为某些的偏见或陈见的拦阻。我们如何依靠神的帮助以及对神的顺服除去这些拦阻？</li>
	<li class="forward">哥尼流渴慕真道的心，在彼得未到之前，就请了亲属密友等候，预备一起领受信息。我们平日是以什么样的心来期待牧者（或小组中分享）的信息呢？彼得讲道的信息内容主要有那几点？这给我们什么提醒和学习的地方？</li>
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
	<li class="forward">有什么&ldquo;人&rdquo;或民族是你讨厌或不喜欢的？为什么？你想要耶稣怎样帮助你去突破或克服的？将他们写下来，与属灵同伴分享并彼此代祷。</li>
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;，主动表达关心和服事他们，并找机会与他们分享《被圣灵充满》或《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法为何。</li>
	<li class="forward">求主使用你成为和平之子，带领更多的亲友来认识耶稣，让你的家庭成为接待家庭，被主大大使用和赐福。</li>
	<li class="forward">为教会的布道与宣教事工祷告，求神赐教会牧者和同工异象及使命，信徒也积极参与大使命，有颗乐意祷告、奉献和宣教的心。主亲自预备和平之子，使人渴慕和寻求真理并被主大大使用。</li>
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


<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->


<p class="forward">&nbsp;</p>

<ul class="forward">
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">求神在我们传福音的对象当中，找到神所预备的&ldquo;和平之子&rdquo;，他们可以成为多人的祝福。也祷告神，教会更多弟兄姐妹都愿意成为和平之子，开放家庭为主所用，成为福音的出口。</li>
	<li class="forward">求主激动更多教会为普世，不同种族，跨文化和跨地域的宣教事工代祷和奉献。也求神开我们的心眼，看到广大禾场的需要，主动回应并参与祷告，加入宣教的行列。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>

</div>

<ul class="forward">
</ul>

<p class="forward">&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->