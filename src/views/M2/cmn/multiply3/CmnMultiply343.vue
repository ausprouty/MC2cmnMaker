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
                        <div class="chapter_number ltr"><h1>43.</h1></div>
                        <div class="chapter_title ltr"><h1>预言会被抓——去耶城路上</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒20:32</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">32&nbsp;</sup>如今我把你们交托神和他恩惠的道，这道能建立你们，叫你们和一切成圣的人同得基业。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">我们在基督身上所看到的，首先就是祂在地上还没有教会的时候就&ldquo;为教会舍己&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 弗4:25</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>所以你们要弃绝谎言，各人与邻舍说实话，因为我们是互相为肢体。</p>
	<!-- end bible --></div>
	所以信徒日常生活最大的原则，就是&ldquo;凭爱心行事&rdquo;。这&ldquo;爱心&rdquo;不是按人的标准礼尚往来、有来有去，而是单方向的&ldquo;舍己&rdquo;，是送出而不盼望返还、给予而不指望回报，甚至当别人对付、践踏、委屈我们的时候，我们还是爱他们。这爱不是从我们的肉体里出来的，而是&ldquo;新人&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 弗4:24</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>并且穿上新人，这新人是照着神的形象造的，有真理的仁义和圣洁。</p>
	<!-- end bible --></div>
	里面神儿子的生命的流露（<span class="popup-link" @click = "popUp('pop4')"> 约15:12-13</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>你们要彼此相爱，像我爱你们一样，这就是我的命令。<sup class="versenum">13&nbsp;</sup>人为朋友舍命，人的爱心没有比这个大的。</p>
	<!-- end bible --></div>
	因着基督&ldquo;舍己&rdquo;的爱，肢体之间才能效法基督、彼此相爱（<span class="popup-link" @click = "popUp('pop5')"> 约13:34</span>；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">34&nbsp;</sup>我赐给你们一条新命令，乃是叫你们彼此相爱，我怎样爱你们，你们也要怎样相爱。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 约壹4:10-11</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>不是我们爱神，乃是神爱我们，差他的儿子为我们的罪做了挽回祭，这就是爱了。<sup class="versenum">11&nbsp;</sup>亲爱的弟兄啊，神既是这样爱我们，我们也当彼此相爱。</p>
	<!-- end bible --></div>
	主基督在我们身上大大被彰显，更多人被吸引归向基督。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">从米利都上船启行前，保罗打发人往以弗所去，请来教会的长老们，对他们发表了一篇语重心长的&ldquo;告别讲论&rdquo;；这是保罗唯一的一篇对信徒公开发表的谈话，真情流露牧者的心肠，保罗心知此行凶多吉少，心中牵挂他所建立幼小的教会，恐怕再也没有机会像从前一样牧养他们，在种种复杂的心情之下，保罗发自内心的倾诉令人动容；由于保罗在一些教会中受到恶意的攻击，为免福音受到亏损，保罗先为自己的所言所行辩白，并且表明自己不以性命为念的心志。</p>

<p class="indent2">最令保罗牵挂的是，他预见到教会以后会面临的内忧外患， 所以再三告诫身为教会牧人的长老们要警醒牧养上帝的教会，而保罗最后一刻所能做的，就是将他们交托在神的手中，</p>

<p class="indent2">因为他以后无法再&ldquo;坚固&rdquo;他们，这一刻，他恳求上帝的道&ldquo;坚固&rdquo;他们，保守他们到底；保罗第三次的宣教旅程就在他和长老们临别痛哭的一幕中结束。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒21:1-26》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒21:1-26</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>我们离别了众人，就开船一直行到哥士。第二天到了罗底，从那里到帕大喇，<sup>2</sup>遇见一只船要往腓尼基去，就上船起行。<sup>3</sup>望见塞浦路斯，就从南边行过，往叙利亚去。我们就在推罗上岸，因为船要在那里卸货。<sup>4</sup>找着了门徒，就在那里住了七天。他们被圣灵感动，对保罗说：&ldquo;不要上耶路撒冷去。&rdquo;<sup>5</sup>过了这几天，我们就起身前行，他们众人同妻子儿女送我们到城外。我们都跪在岸上祷告，彼此辞别；<sup>6</sup>我们上了船，他们就回家去了。</p>

<p><sup>7</sup>我们从推罗行尽了水路，来到多利买，就问那里的弟兄安，和他们同住了一天。<sup>8</sup>第二天，我们离开那里，来到凯撒利亚，就进了传福音的腓利家里，和他同住。他是那七个执事里的一个。<sup>9</sup>他有四个女儿，都是处女，是说预言的。</p>

<p><sup>10</sup>我们在那里多住了几天。有一个先知，名叫亚迦布，从犹太下来。<sup>11</sup>到了我们这里，就拿保罗的腰带捆上自己的手脚，说：&ldquo;圣灵说：&lsquo;犹太人在耶路撒冷要如此捆绑这腰带的主人，把他交在外邦人手里。&rsquo;&rdquo;</p>

<p><sup>12</sup>我们和那本地的人听见这话，都苦劝保罗不要上耶路撒冷去。<sup>13</sup>保罗说：&ldquo;你们为甚么这样痛哭，使我心碎呢？我为主耶稣的名，不但被人捆绑，就是死在耶路撒冷也是愿意的。&rdquo;<sup>14</sup>保罗既不听劝，我们便住了口，只说&ldquo;愿主的旨意成就&rdquo;便了。</p>

<p><sup>15</sup>过了几日，我们收拾行李上耶路撒冷去。<sup>16</sup>有凯撒利亚的几个门徒和我们同去，带我们到一个久为（注：&ldquo;久为&rdquo;或作&ldquo;老&rdquo;）门徒的家里，叫我们与他同住；他名叫拿孙，是塞浦路斯人。</p>

<p><sup>17</sup>到了耶路撒冷，弟兄们欢欢喜喜地接待我们。<sup>18</sup>第二天，保罗同我们去见雅各，长老们也都在那里。<sup>19</sup>保罗问了他们安，便将　神用他传教，在外邦人中间所行之事一一地述说了。<sup>20</sup>他们听见，就归荣耀与　神，对保罗说：&ldquo;兄台，你看犹太人中信主的有多少万，并且都为律法热心。<sup>21</sup>他们听见人说，你教训一切在外邦的犹太人离弃摩西，对他们说，不要给孩子行割礼，也不要遵行条规。<sup>22</sup>众人必听见你来了，这可怎么办呢？<sup>23</sup>你就照着我们的话行吧！我们这里有四个人，都有愿在身。<sup>24</sup>你带他们去，与他们一同行洁净的礼，替他们拿出规费，叫他们得以剃头。这样，众人就可知道，先前所听见你的事都是虚的；并可知道，你自己为人循规蹈矩，遵行律法。<sup>25</sup>至于信主的外邦人，我们已经写信拟定，叫他们谨忌那祭偶像之物和血，并勒死的牲畜与奸淫。&rdquo;</p>

<p><sup>26</sup>于是，保罗带着那四个人，第二天与他们一同行了洁净的礼，进了殿，报明洁净的日期满足，只等祭司为他们各人献祭。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/343.mp4" type="button" class="external-movie">
         观看徒21:1-26</button>
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
	
	<li class="nobreak-final-final">保罗并不是唯一一个建立教会的人。我们从这个故事中了解到，其他信徒群体的形成并非出于保罗的工作。保罗和其他领袖拜访了推罗（现今的黎巴嫰）、多利买（现今的以色列）和凯撒利亚（也在现今的以色列）的教会。向撒马里亚人和埃提阿伯太监作见证的腓利就住在凯撒利亚（<span class="popup-link" @click = "popUp('pop7')"> 徒8:40</span>）。
	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>后来有人在亚锁都遇见<u class="person underline">腓利</u>；他走遍那地方，在各城宣传福音，直到恺撒利亚。</p>
	<!-- end bible --></div>
	从腓利的女儿身上，我们了解到女人也得说预言的恩赐。圣灵两次预言保罗在耶路撒冷将面临到的危险，但保罗早已知道。圣灵不断迫使他去耶路撒冷（<span class="popup-link" @click = "popUp('pop8')"> 徒19:21</span>），

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>这些事完了，<u class="person underline">保罗</u>心里定意经过了马其顿、亚该亚，就往耶路撒冷去，又说：&ldquo;我到了那里以后，也必须往罗马去看看。&rdquo;</p>
	<!-- end bible --></div>
	说有逼迫等待他（<span class="popup-link" @click = "popUp('pop9')"> 徒20:22-23</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>现在我往耶路撒冷去，心甚迫切，不知道在那里要遇见什么事。<sup class="versenum">23&nbsp;</sup>但知道圣灵在各城里向我指证，说有捆锁与患难等待我。</p>
	<!-- end bible --></div>
	保罗接受主的旨意是允许他受苦。由于八年前的问题仍然困扰着犹太信徒（<span class="popup-link" @click = "popUp('pop10')"> 徒11</span>章；

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<h3>彼得辩白给外邦人施洗的事</h3>

	<p><sup class="versenum">1 </sup>使徒和在犹太的众弟兄听说外邦人也领受了神的道。<sup class="versenum">2&nbsp;</sup>及至<u class="person underline">彼得</u>上了耶路撒冷，那些奉割礼的门徒和他争辩，说：<sup class="versenum">3&nbsp;</sup>&ldquo;你进入未受割礼之人的家，和他们一同吃饭了！&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">彼得</u>就开口把这事挨次给他们讲解，说：<sup class="versenum">5&nbsp;</sup>&ldquo;我在约帕城里祷告的时候，魂游象外，看见异象：有一物降下，好像一块大布，系着四角，从天缒下，直来到我跟前。<sup class="versenum">6&nbsp;</sup>我定睛观看，见内中有地上四足的牲畜和野兽、昆虫并天上的飞鸟。<sup class="versenum">7&nbsp;</sup>我且听见有声音向我说：&lsquo;<u class="person underline">彼得</u>，起来，宰了吃！&rsquo;<sup class="versenum">8&nbsp;</sup>我说：&lsquo;主啊，这是不可的！凡俗而不洁净的物从来没有入过我的口。&rsquo;<sup class="versenum">9&nbsp;</sup>第二次有声音从天上说：&lsquo;神所洁净的，你不可当做俗物。&rsquo;<sup class="versenum">10&nbsp;</sup>这样一连三次，就都收回天上去了。<sup class="versenum">11&nbsp;</sup>正当那时，有三个人站在我们所住的房门前，是从恺撒利亚差来见我的。<sup class="versenum">12&nbsp;</sup>圣灵吩咐我和他们同去，不要疑惑。同着我去的，还有这六位弟兄，我们都进了那人的家。<sup class="versenum">13&nbsp;</sup>那人就告诉我们他如何看见一位天使站在他屋里，说：&lsquo;你打发人往约帕去，请那称呼<u class="person underline">彼得</u>的<u class="person underline">西门</u>来，<sup class="versenum">14&nbsp;</sup>他有话告诉你，可以叫你和你的全家得救。&rsquo;<sup class="versenum">15&nbsp;</sup>我一开讲，圣灵便降在他们身上，正像当初降在我们身上一样。<sup class="versenum">16&nbsp;</sup>我就想起主的话说：&lsquo;<u class="person underline">约翰</u>是用水施洗，但你们要受圣灵的洗。&rsquo;<sup class="versenum">17&nbsp;</sup>神既然给他们恩赐，像在我们信主耶稣基督的时候给了我们一样，我是谁，能拦阻神呢？&rdquo;<sup class="versenum">18&nbsp;</sup>众人听见这话，就不言语了，只归荣耀于神，说：&ldquo;这样看来，神也赐恩给外邦人，叫他们悔改得生命了。&rdquo;</p>

	<h3>教会兴盛在安提阿</h3>

	<p><sup class="versenum">19&nbsp;</sup>那些因<u class="person underline">司提反</u>的事遭患难四散的门徒，直走到腓尼基和塞浦路斯并安提阿，他们不向别人讲道，只向犹太人讲。<sup class="versenum">20&nbsp;</sup>但内中有塞浦路斯和古利奈人，他们到了安提阿，也向希腊人传讲主耶稣。<sup class="versenum">21&nbsp;</sup>主与他们同在，信而归主的人就很多了。<sup class="versenum">22&nbsp;</sup>这风声传到耶路撒冷教会人的耳中，他们就打发<u class="person underline">巴拿巴</u>出去，走到安提阿为止。<sup class="versenum">23&nbsp;</sup>他到了那里，看见神所赐的恩就欢喜，劝勉众人立定心志，恒久靠主。<sup class="versenum">24&nbsp;</sup>这<u class="person underline">巴拿巴</u>原是个好人，被圣灵充满，大有信心。于是，有许多人归服了主。</p>

	<p><sup class="versenum">25&nbsp;</sup>他又往大数去找<u class="person underline">扫罗</u>，<sup class="versenum">26&nbsp;</sup>找着了，就带他到安提阿去。他们足有一年的工夫和教会一同聚集，教训了许多人。门徒称为&ldquo;基督徒&rdquo;是从安提阿起首。</p>

	<p><sup class="versenum">27&nbsp;</sup>当那些日子，有几位先知从耶路撒冷下到安提阿。<sup class="versenum">28&nbsp;</sup>内中有一位名叫<u class="person underline">亚迦布</u>，站起来，借着圣灵指明天下将有大饥荒；这事到<u class="person underline">克劳迪</u>年间果然有了。<sup class="versenum">29&nbsp;</sup>于是门徒定意照各人的力量捐钱，送去供给住在犹太的弟兄。<sup class="versenum">30&nbsp;</sup>他们就这样行，把捐项托<u class="person underline">巴拿巴</u>和<u class="person underline">扫罗</u>送到众长老那里。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop11')"> 徒15</span>章），

	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<h3>争论外邦门徒该守摩西的律法</h3>

	<p><sup class="versenum">1 </sup>有几个人从犹太下来，教训弟兄们说：&ldquo;你们若不按<u class="person underline">摩西</u>的规条受割礼，不能得救。&rdquo;<sup class="versenum">2&nbsp;</sup><u class="person underline">保罗</u>、<u class="person underline">巴拿巴</u>与他们大大地纷争辩论，众门徒就定规，叫<u class="person underline">保罗</u>、<u class="person underline">巴拿巴</u>和本会中几个人为所辩论的，上耶路撒冷去见使徒和长老。<sup class="versenum">3&nbsp;</sup>于是教会送他们起行。他们经过腓尼基、撒马利亚，随处传说外邦人归主的事，叫众弟兄都甚欢喜。<sup class="versenum">4&nbsp;</sup>到了耶路撒冷，教会和使徒并长老都接待他们，他们就述说神同他们所行的一切事。<sup class="versenum">5&nbsp;</sup>唯有几个信徒是法利赛教门的人起来，说：&ldquo;必须给外邦人行割礼，吩咐他们遵守<u class="person underline">摩西</u>的律法。&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>使徒和长老聚会商议这事。<sup class="versenum">7&nbsp;</sup>辩论已经多了，<u class="person underline">彼得</u>就起来说：&ldquo;诸位弟兄，你们知道神早已在你们中间拣选了我，叫外邦人从我口中得听福音之道，而且相信。<sup class="versenum">8&nbsp;</sup>知道人心的神也为他们作了见证，赐圣灵给他们，正如给我们一样；<sup class="versenum">9&nbsp;</sup>又借着信洁净了他们的心，并不分他们我们。<sup class="versenum">10&nbsp;</sup>现在为什么试探神，要把我们祖宗和我们所不能负的轭放在门徒的颈项上呢？<sup class="versenum">11&nbsp;</sup>我们得救乃是因主耶稣的恩，和他们一样，这是我们所信的。&rdquo;</p>

	<h3>巴拿巴和保罗述说在外邦人中所行之事</h3>

	<p><sup class="versenum">12&nbsp;</sup>众人都默默无声，听<u class="person underline">巴拿巴</u>和<u class="person underline">保罗</u>述说神借他们在外邦人中所行的神迹奇事。<sup class="versenum">13&nbsp;</sup>他们住了声，<u class="person underline">雅各</u>就说：&ldquo;诸位弟兄，请听我的话！<sup class="versenum">14&nbsp;</sup>方才<u class="person underline">西门</u>述说神当初怎样眷顾外邦人，从他们中间选取百姓归于自己的名下。<sup class="versenum">15&nbsp;</sup>众先知的话也与这意思相合，<sup class="versenum">16&nbsp;</sup>正如经上所写的：&lsquo;此后我要回来，重新修造<u class="person underline">大卫</u>倒塌的帐幕，把那破坏的重新修造建立起来，<sup class="versenum">17&nbsp;</sup>叫余剩的人，就是凡称为我名下的外邦人，都寻求主。<sup class="versenum">18&nbsp;</sup>这话是从创世以来显明这事的主说的。&rsquo;</p>

	<h3>雅各定断此事</h3>

	<p><sup class="versenum">19&nbsp;</sup>&ldquo;所以据我的意见，不可难为那归服神的外邦人，<sup class="versenum">20&nbsp;</sup>只要写信吩咐他们禁戒偶像的污秽和奸淫，并勒死的牲畜和血。<sup class="versenum">21&nbsp;</sup>因为从古以来，<u class="person underline">摩西</u>的书在各城有人传讲，每逢安息日在会堂里诵读。&rdquo;</p>

	<h3>差人送信到安提阿</h3>

	<p><sup class="versenum">22&nbsp;</sup>那时，使徒和长老并全教会定意从他们中间拣选人，差他们和<u class="person underline">保罗</u>、<u class="person underline">巴拿巴</u>同往安提阿去。所拣选的就是称呼<u class="person underline">巴撒巴</u>的<u class="person underline">犹大</u>和<u class="person underline">西拉</u>，这两个人在弟兄中是做首领的。<sup class="versenum">23&nbsp;</sup>于是写信交付他们，内中说：&ldquo;使徒和做长老的弟兄们问安提阿、叙利亚、基利家外邦众弟兄的安！<sup class="versenum">24&nbsp;</sup>我们听说有几个人从我们这里出去，用言语搅扰你们，惑乱你们的心。其实我们并没有吩咐他们。<sup class="versenum">25&nbsp;</sup>所以，我们同心定意拣选几个人，差他们同我们所亲爱的<u class="person underline">巴拿巴</u>和<u class="person underline">保罗</u>往你们那里去。<sup class="versenum">26&nbsp;</sup>这二人是为我主耶稣基督的名不顾性命的。<sup class="versenum">27&nbsp;</sup>我们就差了<u class="person underline">犹大</u>和<u class="person underline">西拉</u>，他们也要亲口诉说这些事。<sup class="versenum">28&nbsp;</sup>因为圣灵和我们定意不将别的重担放在你们身上，唯有几件事是不可少的，<sup class="versenum">29&nbsp;</sup>就是禁戒祭偶像的物和血，并勒死的牲畜和奸淫。这几件你们若能自己禁戒不犯就好了。愿你们平安！&rdquo;</p>

	<h3>众人接信便得安慰</h3>

	<p><sup class="versenum">30&nbsp;</sup>他们既奉了差遣，就下安提阿去，聚集众人，交付书信。<sup class="versenum">31&nbsp;</sup>众人念了，因为信上安慰的话就欢喜了。<sup class="versenum">32&nbsp;</sup><u class="person underline">犹大</u>和<u class="person underline">西拉</u>也是先知，就用许多话劝勉弟兄，坚固他们。<sup class="versenum">33&nbsp;</sup>住了些日子，弟兄们打发他们平平安安地回到差遣他们的人那里去。<sup class="versenum">35&nbsp;</sup>但<u class="person underline">保罗</u>和<u class="person underline">巴拿巴</u>仍住在安提阿，和许多别人一同教训人，传主的道。</p>

	<p><sup class="versenum">36&nbsp;</sup>过了些日子，<u class="person underline">保罗</u>对<u class="person underline">巴拿巴</u>说：&ldquo;我们可以回到从前宣传主道的各城，看望弟兄们景况如何。&rdquo;<sup class="versenum">37&nbsp;</sup><u class="person underline">巴拿巴</u>有意要带称呼<u class="person underline">马可</u>的<u class="person underline">约翰</u>同去，<sup class="versenum">38&nbsp;</sup>但<u class="person underline">保罗</u>因为<u class="person underline">马可</u>从前在旁非利亚离开他们，不和他们同去做工，就以为不可带他去。<sup class="versenum">39&nbsp;</sup>于是二人起了争论，甚至彼此分开。<u class="person underline">巴拿巴</u>带着<u class="person underline">马可</u>，坐船往塞浦路斯去；<sup class="versenum">40&nbsp;</sup><u class="person underline">保罗</u>拣选了<u class="person underline">西拉</u>，也出去，蒙弟兄们把他交于主的恩中。<sup class="versenum">41&nbsp;</sup>他就走遍叙利亚、基利家，坚固众教会。</p>
	<!-- end bible --></div>
	保罗顺从了耶路撒冷领袖的要求，让犹太信徒不至于在信仰上跌倒。(阅读<span class="popup-link" @click = "popUp('pop12')"> 罗马书14:13-19</span>)。

	<div class="popup invisible" id="pop12"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>所以，我们不可再彼此论断，宁可定意谁也不给弟兄放下绊脚跌人之物。<sup class="versenum">14&nbsp;</sup>我凭着主耶稣确知深信：凡物本来没有不洁净的；唯独人以为不洁净的，在他就不洁净了。<sup class="versenum">15&nbsp;</sup>你若因食物叫弟兄忧愁，就不是按着爱人的道理行。基督已经替他死，你不可因你的食物叫他败坏。<sup class="versenum">16&nbsp;</sup>不可叫你的善被人毁谤，<sup class="versenum">17&nbsp;</sup>因为神的国不在乎吃喝，只在乎公义、和平并圣灵中的喜乐。<sup class="versenum">18&nbsp;</sup>在这几样上服侍基督的，就为神所喜悦，又为人所称许。<sup class="versenum">19&nbsp;</sup>所以，我们务要追求和睦的事与彼此建立德行的事。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒21:13</p>

<p class="forward bible">保罗说：&ldquo;你们为甚么这样痛哭，使我心碎呢？我为主耶稣的名，不但被人捆绑，就是死在耶路撒冷也是愿意的。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">圣灵引导保罗前往耶路撒冷，一路上，保罗多次受到信徒出于爱心的劝阻，却不为所动，因为他知道他人生的使命。我们是否也曾经有过或可能会遇到类似的状况？我们决定去做一件事，虽然客观的环境似乎相当不利，但因为深知是神的旨意，所以无视于他人一意孤行的批评，仍然顺服神的引导？</li>
	<li class="forward">保罗在不违背福音的原则下，他向着犹太人就做犹太人，为要得着在律法以下的犹太人。在我们的社会文化中，有什么类似的处境吗？什么是基督徒应该遵守的原则？什么是我们为了福音的好处，可以妥协和配合的事情吗？为什么？</li>
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
	<li class="forward">保罗在结束第三次旅程前往耶路撒冷的路上，在以弗所、推罗、多利买和该撒利亚各地方，无论是旧友或新交，保罗一行人得到有如家人的接待，他们在主里表达出强烈的热情，让我们一窥初代教会信徒之间彼此相爱的真诚。
	<ul class="forward">
		<li class="forward">在人际关系疏离的现代社会中，求主帮助我们因主的爱而突破文化上的影响，身体力行耶稣要门徒彼此相爱的命令。</li>
		<li class="forward">纵然忙碌，或是自己也不想花时间与弟兄姐妹连接，求主的爱激励你，主动与人分享祂的爱，并在肢体间成为爱的流通渠道，使多人因你而蒙福。</li>
	</ul>
	</li>
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;（你要我为你做什么？），主动表达关心和服事他们，并找机会与他们分享《被圣灵充满》或《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法。</li>
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

<p class="forward">眷顾和爱我们的天父，当我们继续奔跑祢为我们所预备的路程，纵然前面有困难和挑战，但我们知道这是祢要我们行的，我们就坦然无惧的前行。我们求祢在我们的路上，与我们同在，做我们的保护和随时的引领。求祢使我们对祢的信靠，始终不变，赐给我们够用的聪明和智慧，时刻倚靠圣灵的大能来抵挡和胜过试探，做好祢叫我们所做的一切圣工；也求祢也使我们以遵行祢的话语和旨意为乐，不叫相隔的距离影响我们与弟兄姐妹之间爱的团契；使我们能彼此守望，忠信到底，各尽自己的责任和本份，共同荣耀天上的父。奉主耶稣至圣的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->