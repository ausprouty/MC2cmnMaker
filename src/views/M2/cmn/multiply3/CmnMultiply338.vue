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
                        <div class="chapter_number ltr"><h1>38.</h1></div>
                        <div class="chapter_title ltr"><h1>辨明福音——福音传遍全省（以弗所）</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒18:26</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>他在会堂里放胆讲道，<u class="person underline">百基拉</u>、<u class="person underline">亚居拉</u>听见，就接他来，将神的道给他讲解更加详细。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">亚波罗有热心和恩赐，但却对主的道认识不足，这件事提醒我们（尤其是在教会中参与教导服事的信徒）对圣经必须有完备的认识，以免使人误入歧途。亚波罗这位渊博的旧约学者，居然谦卑受教地聆听并接受&ldquo;平信徒&rdquo;的教导；而亚居拉夫妇并没有当众指出亚波罗的错处，避免了冲突和不快，却私下讲解神的道，在这几位人物身上都有值得我们学习的地方。的确，神赐各人不同的恩赐与才干，祂要我们各人看别人比自己强，把自己看得合乎中道，凡事都让基督在我们身上彰显祂的旨意，并且经历在基督里互为肢体的相爱与相顾之美好团契。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">保罗约在公元53年至54年左右从安提阿出发，开始了第三次的宣教旅程，除了探访之前两次宣教之行建立的教会，保罗大多数的时间都停留在以弗所（<span class="popup-link" @click = "popUp('pop2')"> 徒18:23</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>住了些日子，又离开那里，挨次经过加拉太和弗吕家地方，坚固众门徒。</p>
	<!-- end bible --></div>
	作者打断了保罗旅程的叙述，插入了一位对早期教会发展相当有贡献的人物亚波罗。亚波罗拥有讲道的恩赐和热切传福音的心志，但对福音的认识却不完全，神使用了身为平信徒的亚居拉夫妇来帮助这位学问渊博的旧约学者。</li>
</ul>

<p class="indent2">以弗所是罗马亚西亚省的首府，也是第一世纪时小亚细亚最大的商业城市，它不但有海港，并位于从罗马到东方的大道上，地理位置极占优势，保罗在以弗所这个地方可以接触到整个亚西亚省；除了政治和商业上的重要性，以弗所人最自豪的是亚底米神庙，以弗所人以&ldquo;亚底米神庙的守护者&rdquo;自居，这个神庙攸关以弗所的经济，它也是古代世界七大奇观之一。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒19:1-10》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒19:1-10</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>亚波罗在哥林多的时候，保罗经过了上边一带地方，就来到以弗所；在那里遇见几个门徒，<sup>2</sup>问他们说：&ldquo;你们信的时候，受了圣灵没有？&rdquo;他们回答说：&ldquo;没有，也未曾听见有圣灵赐下来。&rdquo;<sup>3</sup>保罗说：&ldquo;这样，你们受的是甚么洗呢？&rdquo;他们说：&ldquo;是约翰的洗。&rdquo; <sup>4</sup>保罗说：&ldquo;约翰所行的是悔改的洗，告诉百姓当信那在他以后要来的，就是耶稣。&rdquo;<sup>5</sup>他们听见这话，就奉主耶稣的名受洗。<sup>6</sup>保罗按手在他们头上，圣灵便降在他们身上，他们就说方言，又说预言（注：或作&ldquo;又讲道&rdquo;）。<sup>7</sup>一共约有十二个人。</p>

<p><sup>8</sup>保罗进会堂放胆讲道，一连三个月，辩论　神国的事，劝化众人。<sup>9</sup>后来，有些人心里刚硬不信，在众人面前毁谤这道。保罗就离开他们，也叫门徒与他们分离，便在推喇奴的学房 天天辩论。<sup>10</sup>这样有两年之久，叫一切住在亚西亚的，无论是犹太人，是希腊人，都听见主的道。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/338.mp4" type="button" class="external-movie">
         观看&nbsp;徒19:1-10&nbsp;</button>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">保罗来到以弗所，遇见了十二个人，他们只晓得施洗约翰的道，却完全不知道耶稣或差来的圣灵，很有可能因为亚波罗之前对真理认识的不全面。他们接受保罗的教导之后，就愿意受洗归入基督，并有神迹证明圣灵的降下，如同过去这些人一样：五旬节的使徒（<span class="popup-link" @click = "popUp('pop3')"> 徒2</span>章）、

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>门徒在五旬节被圣灵充满</h3>

	<p><sup class="versenum">1 </sup>五旬节到了，门徒都聚集在一处。<sup class="versenum">2&nbsp;</sup>忽然，从天上有响声下来，好像一阵大风吹过，充满了他们所坐的屋子；<sup class="versenum">3&nbsp;</sup>又有舌头如火焰显现出来，分开落在他们各人头上。<sup class="versenum">4&nbsp;</sup>他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。</p>

	<p><sup class="versenum">5&nbsp;</sup>那时，有虔诚的犹太人从天下各国来，住在耶路撒冷。<sup class="versenum">6&nbsp;</sup>这声音一响，众人都来聚集，各人听见门徒用众人的乡谈说话，就甚纳闷，<sup class="versenum">7&nbsp;</sup>都惊讶稀奇说：&ldquo;看哪，这说话的不都是加利利人吗？<sup class="versenum">8&nbsp;</sup>我们各人怎么听见他们说我们生来所用的乡谈呢？<sup class="versenum">9&nbsp;</sup>我们帕提亚人、玛代人、以拦人和住在美索不达米亚、犹太、加帕多家、本都、亚细亚、<sup class="versenum">10&nbsp;</sup>弗吕家、旁非利亚、埃及的人，并靠近古利奈的利比亚一带地方的人，从罗马来的客旅中或是犹太人、或是进犹太教的人，<sup class="versenum">11&nbsp;</sup>克里特和阿拉伯人，都听见他们用我们的乡谈，讲说神的大作为！&rdquo;<sup class="versenum">12&nbsp;</sup>众人就都惊讶猜疑，彼此说：&ldquo;这是什么意思呢？&rdquo;<sup class="versenum">13&nbsp;</sup>还有人讥诮说：&ldquo;他们无非是新酒灌满了！&rdquo;</p>

	<h3>彼得的讲说</h3>

	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">彼得</u>和十一个使徒站起，高声说：&ldquo;犹太人和一切住在耶路撒冷的人哪，这件事你们当知道，也当侧耳听我的话。<sup class="versenum">15&nbsp;</sup>你们想这些人是醉了，其实不是醉了，因为时候刚到巳初。<sup class="versenum">16&nbsp;</sup>这正是先知<u class="person underline">约珥</u>所说的：<sup class="versenum">17&nbsp;</sup>&lsquo;神说：在末后的日子，我要将我的灵浇灌凡有血气的，你们的儿女要说预言，你们的少年人要见异象，老年人要做异梦。<sup class="versenum">18&nbsp;</sup>在那些日子，我要将我的灵浇灌我的仆人和使女，他们就要说预言。<sup class="versenum">19&nbsp;</sup>在天上我要显出奇事，在地下我要显出神迹，有血，有火，有烟雾。<sup class="versenum">20&nbsp;</sup>日头要变为黑暗，月亮要变为血，这都在主大而明显的日子未到以前。<sup class="versenum">21&nbsp;</sup>到那时候，凡求告主名的，就必得救。&rsquo;<sup class="versenum">22&nbsp;</sup>以色列人哪，请听我的话：神借着拿撒勒人耶稣在你们中间施行异能、奇事、神迹，将他证明出来，这是你们自己知道的。<sup class="versenum">23&nbsp;</sup>他既按着神的定旨、先见被交于人，你们就借着无法之人的手，把他钉在十字架上杀了。<sup class="versenum">24&nbsp;</sup>神却将死的痛苦解释了，叫他复活，因为他原不能被死拘禁。<sup class="versenum">25&nbsp;</sup><u class="person underline">大卫</u>指着他说：&lsquo;我看见主常在我眼前，他在我右边，叫我不至于摇动。<sup class="versenum">26&nbsp;</sup>所以我心里欢喜，我的灵快乐，并且我的肉身要安居在指望中；<sup class="versenum">27&nbsp;</sup>因你必不将我的灵魂撇在阴间，也不叫你的圣者见朽坏。<sup class="versenum">28&nbsp;</sup>你已将生命的道路指示我，必叫我因见你的面得着满足的快乐。&rsquo;<sup class="versenum">29&nbsp;</sup>弟兄们，先祖<u class="person underline">大卫</u>的事，我可以明明地对你们说，他死了，也葬埋了，并且他的坟墓直到今日还在我们这里。<sup class="versenum">30&nbsp;</sup><u class="person underline">大卫</u>既是先知，又晓得神曾向他起誓，要从他的后裔中立一位坐在他的宝座上，<sup class="versenum">31&nbsp;</sup>就预先看明这事，讲论基督复活说：他的灵魂不撇在阴间，他的肉身也不见朽坏。<sup class="versenum">32&nbsp;</sup>这耶稣，神已经叫他复活了，我们都为这事作见证。<sup class="versenum">33&nbsp;</sup>他既被神的右手高举，又从父受了所应许的圣灵，就把你们所看见、所听见的浇灌下来。<sup class="versenum">34&nbsp;</sup><u class="person underline">大卫</u>并没有升到天上，但自己说：&lsquo;主对我主说：&ldquo;你坐在我的右边，<sup class="versenum">35&nbsp;</sup>等我使你仇敌做你的脚凳。&rdquo;&rsquo;<sup class="versenum">36&nbsp;</sup>故此，以色列全家当确实地知道：你们钉在十字架上的这位耶稣，神已经立他为主、为基督了。&rdquo;</p>

	<h3>感动多人信主</h3>

	<p><sup class="versenum">37&nbsp;</sup>众人听见这话，觉得扎心，就对<u class="person underline">彼得</u>和其余的使徒说：&ldquo;弟兄们，我们当怎样行？&rdquo;<sup class="versenum">38&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。<sup class="versenum">39&nbsp;</sup>因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们神所召来的。&rdquo;<sup class="versenum">40&nbsp;</sup><u class="person underline">彼得</u>还用许多话作见证，劝勉他们说：&ldquo;你们当救自己脱离这弯曲的世代！&rdquo;<sup class="versenum">41&nbsp;</sup>于是，领受他话的人就受了洗，那一天，门徒约添了三千人；<sup class="versenum">42&nbsp;</sup>都恒心遵守使徒的教训，彼此交接、掰饼、祈祷。</p>

	<p><sup class="versenum">43&nbsp;</sup>众人都惧怕，使徒又行了许多奇事神迹。<sup class="versenum">44&nbsp;</sup>信的人都在一处，凡物公用，<sup class="versenum">45&nbsp;</sup>并且卖了田产、家业，照各人所需用的分给各人。<sup class="versenum">46&nbsp;</sup>他们天天同心合意恒切地在殿里，且在家中掰饼，存着欢喜、诚实的心用饭，<sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
	<!-- end bible --></div>
	信了腓利所传福音的撒马里亚人（<span class="popup-link" @click = "popUp('pop4')"> 徒8</span>章）、

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>教会被害门徒分散</h3>

	<p><sup class="versenum">1 </sup>从这日起，耶路撒冷的教会大遭逼迫。除了使徒以外，门徒都分散在犹太和撒马利亚各处。<sup class="versenum">2&nbsp;</sup>有虔诚的人把<u class="person underline">司提反</u>埋葬了，为他捶胸大哭。<sup class="versenum">3&nbsp;</sup><u class="person underline">扫罗</u>却残害教会，进各人的家，拉着男女下在监里。</p>

	<h3>腓利往撒马利亚传道</h3>

	<p><sup class="versenum">4&nbsp;</sup>那些分散的人往各处去传道。<sup class="versenum">5&nbsp;</sup><u class="person underline">腓利</u>下撒马利亚城去宣讲基督。<sup class="versenum">6&nbsp;</sup>众人听见了，又看见<u class="person underline">腓利</u>所行的神迹，就同心合意地听从他的话。<sup class="versenum">7&nbsp;</sup>因为有许多人被污鬼附着，那些鬼大声呼叫，从他们身上出来；还有许多瘫痪的、瘸腿的，都得了医治。<sup class="versenum">8&nbsp;</sup>在那城里就大有欢喜。</p>

	<h3>行邪术的西门</h3>

	<p><sup class="versenum">9&nbsp;</sup>有一个人名叫<u class="person underline">西门</u>，向来在那城里行邪术，妄自尊大，使撒马利亚的百姓惊奇。<sup class="versenum">10&nbsp;</sup>无论大小都听从他，说：&ldquo;这人就是那称为神的大能者。&rdquo;<sup class="versenum">11&nbsp;</sup>他们听从他，因他久用邪术使他们惊奇。<sup class="versenum">12&nbsp;</sup>及至他们信了<u class="person underline">腓利</u>所传神国的福音和耶稣基督的名，连男带女就受了洗。<sup class="versenum">13&nbsp;</sup><u class="person underline">西门</u>自己也信了，既受了洗，就常与<u class="person underline">腓利</u>在一处，看见他所行的神迹和大异能，就甚惊奇。</p>

	<h3>彼得约翰传教于撒马利亚</h3>

	<p><sup class="versenum">14&nbsp;</sup>使徒在耶路撒冷听见撒马利亚人领受了神的道，就打发<u class="person underline">彼得</u>、<u class="person underline">约翰</u>往他们那里去。<sup class="versenum">15&nbsp;</sup>两个人到了，就为他们祷告，要叫他们受圣灵，<sup class="versenum">16&nbsp;</sup>因为圣灵还没有降在他们一个人身上，他们只奉主耶稣的名受了洗。<sup class="versenum">17&nbsp;</sup>于是使徒按手在他们头上，他们就受了圣灵。</p>

	<h3>西门贪心受责</h3>

	<p><sup class="versenum">18&nbsp;</sup><u class="person underline">西门</u>看见使徒按手便有圣灵赐下，就拿钱给使徒，<sup class="versenum">19&nbsp;</sup>说：&ldquo;把这权柄也给我，叫我手按着谁，谁就可以受圣灵。&rdquo;<sup class="versenum">20&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你的银子和你一同灭亡吧！因你想神的恩赐是可以用钱买的。<sup class="versenum">21&nbsp;</sup>你在这道上无份无关，因为在神面前你的心不正。<sup class="versenum">22&nbsp;</sup>你当懊悔你这罪恶，祈求主，或者你心里的意念可得赦免。<sup class="versenum">23&nbsp;</sup>我看出你正在苦胆之中，被罪恶捆绑。&rdquo;<sup class="versenum">24&nbsp;</sup><u class="person underline">西门</u>说：&ldquo;愿你们为我求主，叫你们所说的，没有一样临到我身上！&rdquo;</p>

	<p><sup class="versenum">25&nbsp;</sup>使徒既证明主道而且传讲，就回耶路撒冷去，一路在撒马利亚好些村庄传扬福音。</p>

	<h3>腓利传道于埃塞俄比亚的太监</h3>

	<p><sup class="versenum">26&nbsp;</sup>有主的一个使者对<u class="person underline">腓利</u>说：&ldquo;起来，向南走，往那从耶路撒冷下加沙的路上去！&rdquo;那路是旷野。<sup class="versenum">27&nbsp;</sup><u class="person underline">腓利</u>就起身去了。不料，有一个埃塞俄比亚人，是个有大权的太监，在埃塞俄比亚女王<u class="person underline">干大基</u>的手下总管银库。他上耶路撒冷礼拜去了，<sup class="versenum">28&nbsp;</sup>现在回来，在车上坐着，念先知<u class="person underline">以赛亚</u>的书。<sup class="versenum">29&nbsp;</sup>圣灵对<u class="person underline">腓利</u>说：&ldquo;你去，贴近那车走！&rdquo;<sup class="versenum">30&nbsp;</sup><u class="person underline">腓利</u>就跑到太监那里，听见他念先知<u class="person underline">以赛亚</u>的书，便问他说：&ldquo;你所念的你明白吗？&rdquo;<sup class="versenum">31&nbsp;</sup>他说：&ldquo;没有人指教我，怎能明白呢？&rdquo;于是请<u class="person underline">腓利</u>上车与他同坐。<sup class="versenum">32&nbsp;</sup>他所念的那段经说：&ldquo;他像羊被牵到宰杀之地，又像羊羔在剪毛的人手下无声，他也是这样不开口。<sup class="versenum">33&nbsp;</sup>他卑微的时候，人不按公义审判他。谁能述说他的世代？因为他的生命从地上夺去。&rsquo;<sup class="versenum">34&nbsp;</sup>太监对<u class="person underline">腓利</u>说：&ldquo;请问，先知说这话是指着谁？是指着自己呢，是指着别人呢？&rdquo;<sup class="versenum">35&nbsp;</sup><u class="person underline">腓利</u>就开口从这经上起，对他传讲耶稣。</p>

	<p><sup class="versenum">36&nbsp;</sup>二人正往前走，到了有水的地方，太监说：&ldquo;看哪，这里有水！我受洗有什么妨碍呢？&rdquo;<sup class="versenum">38&nbsp;</sup>于是吩咐车站住，<u class="person underline">腓利</u>和太监二人同下水里去，<u class="person underline">腓利</u>就给他施洗。<sup class="versenum">39&nbsp;</sup>从水里上来，主的灵把<u class="person underline">腓利</u>提了去。太监也不再见他了，就欢欢喜喜地走路。<sup class="versenum">40&nbsp;</sup>后来有人在亚锁都遇见<u class="person underline">腓利</u>；他走遍那地方，在各城宣传福音，直到恺撒利亚。</p>
	<!-- end bible --></div>
	哥尼流家的外邦人（<span class="popup-link" @click = "popUp('pop16')"> 徒10</span>章）。

	<div class="popup invisible" id="pop16"><!-- begin bible -->
	<h3>哥尼流蒙主指示</h3>

	<p><sup class="versenum">1 </sup>在恺撒利亚有一个人名叫<u class="person underline">哥尼流</u>，是&ldquo;意大利营&rdquo;的百夫长。<sup class="versenum">2&nbsp;</sup>他是个虔诚人，他和全家都敬畏神，多多周济百姓，常常祷告神。<sup class="versenum">3&nbsp;</sup>有一天，约在申初，他在异象中明明看见神的一个使者进去，到他那里，说：&ldquo;<u class="person underline">哥尼流</u>！&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">哥尼流</u>定睛看他，惊怕说：&ldquo;主啊，什么事呢？&rdquo;天使说：&ldquo;你的祷告和你的周济达到神面前，已蒙记念了。<sup class="versenum">5&nbsp;</sup>现在你当打发人往约帕去，请那称呼<u class="person underline">彼得</u>的<u class="person underline">西门</u>来。<sup class="versenum">6&nbsp;</sup>他住在海边一个硝皮匠<u class="person underline">西门</u>的家里，房子在海边上。&rdquo;<sup class="versenum">7&nbsp;</sup>向他说话的天使去后，<u class="person underline">哥尼流</u>叫了两个家人和常伺候他的一个虔诚兵来，<sup class="versenum">8&nbsp;</sup>把这事都述说给他们听，就打发他们往约帕去。</p>

	<h3>彼得见异象</h3>

	<p><sup class="versenum">9&nbsp;</sup>第二天，他们行路将近那城，<u class="person underline">彼得</u>约在午正上房顶去祷告。<sup class="versenum">10&nbsp;</sup>觉得饿了，想要吃。那家的人正预备饭的时候，<u class="person underline">彼得</u>魂游象外，<sup class="versenum">11&nbsp;</sup>看见天开了，有一物降下，好像一块大布，系着四角，缒在地上，<sup class="versenum">12&nbsp;</sup>里面有地上各样四足的走兽和昆虫，并天上的飞鸟。<sup class="versenum">13&nbsp;</sup>又有声音向他说：&ldquo;<u class="person underline">彼得</u>，起来，宰了吃！&rdquo;<sup class="versenum">14&nbsp;</sup><u class="person underline">彼得</u>却说：&ldquo;主啊，这是不可的！凡俗物和不洁净的物，我从来没有吃过。&rdquo;<sup class="versenum">15&nbsp;</sup>第二次有声音向他说：&ldquo;神所洁净的，你不可当做俗物。&rdquo;<sup class="versenum">16&nbsp;</sup>这样一连三次，那物随即收回天上去了。</p>

	<h3>哥尼流所差的人来寻彼得</h3>

	<p><sup class="versenum">17&nbsp;</sup><u class="person underline">彼得</u>心里正在猜疑之间，不知所看见的异象是什么意思，<u class="person underline">哥尼流</u>所差来的人已经访问到<u class="person underline">西门</u>的家，站在门外，<sup class="versenum">18&nbsp;</sup>喊着问：&ldquo;有称呼<u class="person underline">彼得</u>的<u class="person underline">西门</u>住在这里没有？&rdquo;<sup class="versenum">19&nbsp;</sup><u class="person underline">彼得</u>还思想那异象的时候，圣灵向他说：&ldquo;有三个人来找你。<sup class="versenum">20&nbsp;</sup>起来，下去，和他们同往，不要疑惑，因为是我差他们来的。&rdquo;<sup class="versenum">21&nbsp;</sup>于是<u class="person underline">彼得</u>下去见那些人，说：&ldquo;我就是你们所找的人。你们来是为什么缘故？&rdquo;<sup class="versenum">22&nbsp;</sup>他们说：&ldquo;百夫长<u class="person underline">哥尼流</u>是个义人，敬畏神，为犹太通国所称赞。他蒙一位圣天使指示，叫他请你到他家里去，听你的话。&rdquo;<sup class="versenum">23&nbsp;</sup><u class="person underline">彼得</u>就请他们进去，住了一宿。</p>

	<h3>彼得往哥尼流家传道</h3>

	<p>次日起身和他们同去，还有约帕的几个弟兄同着他去。<sup class="versenum">24&nbsp;</sup>又次日，他们进入恺撒利亚。<u class="person underline">哥尼流</u>已经请了他的亲属密友等候他们。<sup class="versenum">25&nbsp;</sup><u class="person underline">彼得</u>一进去，<u class="person underline">哥尼流</u>就迎接他，俯伏在他脚前拜他。<sup class="versenum">26&nbsp;</sup><u class="person underline">彼得</u>却拉他，说：&ldquo;你起来，我也是人。&rdquo;<sup class="versenum">27&nbsp;</sup><u class="person underline">彼得</u>和他说着话进去，见有好些人在那里聚集，<sup class="versenum">28&nbsp;</sup>就对他们说：&ldquo;你们知道，犹太人和别国的人亲近来往本是不合例的，但神已经指示我，无论什么人都不可看做俗而不洁净的。<sup class="versenum">29&nbsp;</sup>所以我被请的时候，就不推辞而来。现在请问：你们叫我来有什么意思呢？&rdquo;<sup class="versenum">30&nbsp;</sup><u class="person underline">哥尼流</u>说：&ldquo;前四天这个时候，我在家中守着申初的祷告，忽然有一个人穿着光明的衣裳，站在我面前，<sup class="versenum">31&nbsp;</sup>说：&lsquo;<u class="person underline">哥尼流</u>，你的祷告已蒙垂听，你的周济达到神面前已蒙记念了。<sup class="versenum">32&nbsp;</sup>你当打发人往约帕去，请那称呼<u class="person underline">彼得</u>的<u class="person underline">西门</u>来，他住在海边一个硝皮匠<u class="person underline">西门</u>的家里。&rsquo;<sup class="versenum">33&nbsp;</sup>所以我立时打发人去请你。你来了很好！现今我们都在神面前，要听主所吩咐你的一切话。&rdquo;</p>

	<h3>彼得宣传耶稣</h3>

	<p><sup class="versenum">34&nbsp;</sup><u class="person underline">彼得</u>就开口说：&ldquo;我真看出神是不偏待人，<sup class="versenum">35&nbsp;</sup>原来各国中那敬畏主、行义的人都为主所悦纳。<sup class="versenum">36&nbsp;</sup>神借着耶稣基督&mdash;&mdash;他是万有的主&mdash;&mdash;传和平的福音，将这道赐给以色列人。<sup class="versenum">37&nbsp;</sup>这话在<u class="person underline">约翰</u>宣传洗礼以后，从加利利起，传遍了犹太。<sup class="versenum">38&nbsp;</sup>神怎样以圣灵和能力膏拿撒勒人耶稣，这都是你们知道的。他周流四方，行善事，医好凡被魔鬼压制的人，因为神与他同在。<sup class="versenum">39&nbsp;</sup>他在犹太人之地并耶路撒冷所行的一切事，有我们作见证。他们竟把他挂在木头上杀了！<sup class="versenum">40&nbsp;</sup>第三日，神叫他复活，显现出来，<sup class="versenum">41&nbsp;</sup>不是显现给众人看，乃是显现给神预先所拣选为他作见证的人看，就是我们这些在他从死里复活以后和他同吃同喝的人。<sup class="versenum">42&nbsp;</sup>他吩咐我们传道给众人，证明他是神所立定的，要做审判活人、死人的主。<sup class="versenum">43&nbsp;</sup>众先知也为他作见证说：&lsquo;凡信他的人，必因他的名得蒙赦罪。&rsquo;&rdquo;</p>

	<p><sup class="versenum">44&nbsp;</sup><u class="person underline">彼得</u>还说这话的时候，圣灵降在一切听道的人身上。<sup class="versenum">45&nbsp;</sup>那些奉割礼、和<u class="person underline">彼得</u>同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都稀奇，<sup class="versenum">46&nbsp;</sup>因听见他们说方言，称赞神为大。<sup class="versenum">47&nbsp;</sup>于是<u class="person underline">彼得</u>说：&ldquo;这些人既受了圣灵，与我们一样，谁能禁止用水给他们施洗呢？&rdquo;<sup class="versenum">48&nbsp;</sup>就吩咐奉耶稣基督的名给他们施洗。他们又请<u class="person underline">彼得</u>住了几天。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">虽然之前已经有亚波罗传讲施洗约翰的悔改之道，后有亚居拉和百基拉帮他归正耶稣基督的福音，但到保罗开始天天教导人，福音工作才扩展开来。结果，短短的两年内，福音从省会传遍整个亚西亚省（大约800万人）。福音也是那个时候进入省内一个城市歌罗西（<span class="popup-link" @click = "popUp('pop6')"> 西1:3-8</span>）。
	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>我们感谢神我们主耶稣基督的父，常常为你们祷告，<sup class="versenum">4&nbsp;</sup>因听见你们在基督耶稣里的信心并向众圣徒的爱心&mdash;&mdash;<sup class="versenum">5&nbsp;</sup>是为那给你们存在天上的盼望。这盼望就是你们从前在福音真理的道上所听见的。<sup class="versenum">6&nbsp;</sup>这福音传到你们那里，也传到普天之下，并且结果、增长，如同在你们中间，自从你们听见福音真知道神恩惠的日子一样。<sup class="versenum">7&nbsp;</sup>正如你们从我们所亲爱、一同做仆人的<u class="person underline">以巴弗</u>所学的。他为我们做了基督忠心的执事，<sup class="versenum">8&nbsp;</sup>也把你们因圣灵所存的爱心告诉了我们。</p>
	<!-- end bible --></div>
	保罗的角色不断根据需要而转换。他透过书信及特派使者的方式，为其他四个省分中不断拓展的教会提供训练。此外，长期留在一个城市以弗所，让保罗的影响力发挥到最大。许多领袖从当地被兴起，被差遣出去建立教会。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒19:10</p>

<p class="forward bible">这样有两年之久，叫一切住在亚西亚的，无论是犹太人，是希腊人，都听见主的道。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">使徒行传特别记录了四次圣灵降临，都与说方言一起的：</li>
</ul>

<p class="indent2">1) 五旬节降在犹太人门徒们身上（<span class="popup-link" @click = "popUp('pop7')"> 徒2:1-4</span>）；</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">1 </sup>五旬节到了，门徒都聚集在一处。<sup class="versenum">2&nbsp;</sup>忽然，从天上有响声下来，好像一阵大风吹过，充满了他们所坐的屋子；<sup class="versenum">3&nbsp;</sup>又有舌头如火焰显现出来，分开落在他们各人头上。<sup class="versenum">4&nbsp;</sup>他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。</p>
<!-- end bible --></div>

<p class="indent2">2) 降在犹太人与外邦人混杂的撒马利亚人身上（<span class="popup-link" @click = "popUp('pop8')"> 徒8:16-17</span>）；</p>

<div class="popup invisible" id="pop8"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup>因为圣灵还没有降在他们一个人身上，他们只奉主耶稣的名受了洗。<sup class="versenum">17&nbsp;</sup>于是使徒按手在他们头上，他们就受了圣灵。</p>
<!-- end bible --></div>

<p class="indent2">3) 降在罗马人哥尼流和他的亲友身上（<span class="popup-link" @click = "popUp('pop9')"> 徒10:44-46</span>）；</p>

<div class="popup invisible" id="pop9"><!-- begin bible -->
<p><sup class="versenum">44&nbsp;</sup><u class="person underline">彼得</u>还说这话的时候，圣灵降在一切听道的人身上。<sup class="versenum">45&nbsp;</sup>那些奉割礼、和<u class="person underline">彼得</u>同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都稀奇，<sup class="versenum">46&nbsp;</sup>因听见他们说方言，称赞神为大。</p>
<!-- end bible --></div>

<p class="indent2">4) 降在以弗所十二位施洗约翰的门徒的身上（<span class="popup-link" @click = "popUp('pop10')"> 徒19:7</span>）</p>

<div class="popup invisible" id="pop10"><!-- begin bible -->
<p><sup class="versenum">7&nbsp;</sup>一共约有十二个人。</p>
<!-- end bible --></div>

<ul>
	<li class="nobreak-final-final">此外圣经并未再提及圣灵降临的实例，甚至记述五旬节那天三千人信主（<span class="popup-link" @click = "popUp('pop11')"> 徒2:41</span>）、

	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<p><sup class="versenum">41&nbsp;</sup>于是，领受他话的人就受了洗，那一天，门徒约添了三千人；</p>
	<!-- end bible --></div>
	另一天五千人信主时（<span class="popup-link" @click = "popUp('pop12')"> 徒4:4</span>），

	<div class="popup invisible" id="pop12"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>但听道之人有许多信的，男丁数目约到五千。</p>
	<!-- end bible --></div>
	也没提圣灵降临之事。因此，这四次圣灵降临具有代表性的意义，他们代表所有的犹太人和外邦人信徒&ldquo;都从一位圣灵受洗，成了一个身体，饮于一位圣灵&rdquo;（<span class="popup-link" @click = "popUp('pop17')"> 林前10:12-13</span>）。

	<div class="popup invisible" id="pop17"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>所以，自己以为站得稳的须要谨慎，免得跌倒。<sup class="versenum">13&nbsp;</sup>你们所遇见的试探，无非是人所能受的。神是信实的，必不叫你们受试探过于所能受的，在受试探的时候，总要给你们开一条出路，叫你们能忍受得住。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">我们信耶稣受洗，是否就领受了圣灵？怎么知道？（<span class="popup-link" @click = "popUp('pop14')"> 罗8:2</span>，
	<div class="popup invisible" id="pop14"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>因为赐生命圣灵的律在基督耶稣里释放了我，使我脱离罪和死的律了。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop15')"> 罗8:16</span>）

	<div class="popup invisible" id="pop15"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>圣灵与我们的心同证我们是神的儿女。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>谁能简要分享自己的经历？</p>

<p>&nbsp;</p>

<ul class="forward">
	<li class="forward">这个事件被称作&ldquo;以弗所的五旬节&rdquo;，它有什么特别的意义？基督徒有需要第二次受洗吗？圣灵充满是不是一定会说方言？</li>
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
	<li class="forward">本周与门徒一起操练被圣灵充满，在生活上依靠圣灵行事，结出圣灵的果子。写下一项你期待的圣灵果子并操练它。另外，求主让你们经历领人归主的喜乐。</li>
	<li class="forward">本周主动与2位弟兄/姐妹分享《被圣灵充满》小册子，并记录在《信徒动员表》</li>
	<li class="forward">留意教会的需要并参与奉献，一起建立神的家。另外，与小组成员主动帮助教会内有需要的人，给于协助，在爱中彼此相顾和扶持。</li>
	<li class="forward">阅读附录：《宣教士：富能仁》，把阅读心得和反思写下，下周分享。</li>
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
	<li class="forward">弟兄姐妹在生活中愿意操练时刻被圣灵充满，依靠圣灵行事，结出圣灵的果子，活出基督的生命。同时，求主使我们在祷告上经历祷告能做的事，是人手不能做的，并与圣灵同工，经历领人归主的喜乐。</li>
	<li class="forward">求主拓展教会的疆界，众教会都走出去，作基督的精兵，为主放胆传讲福音、造就门徒、发展领袖和倍增教会，成为多人的祝福，主名得荣！</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->