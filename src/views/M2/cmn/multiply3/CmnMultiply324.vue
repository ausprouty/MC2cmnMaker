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
                        <div class="chapter_number ltr"><h1>24.</h1></div>
                        <div class="chapter_title ltr"><h1>教会差派宣教士——教会差传的开始</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒12:23-24</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup><u class="person underline">希律</u>不归荣耀给神，所以主的使者立刻罚他，他被虫所咬，气就绝了。</p>

	<p><sup class="versenum">24&nbsp;</sup>神的道日见兴旺，越发广传。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="flush">希律王用刀杀了约翰的哥哥雅各。他见犹太人喜欢这事，又把彼得囚在监里，打算在逾越节后办他。于是教会为他切切的祷告神。神答应祷告，施行拯救。神的时间从来不急也不慢。就在希律将要提他出来的前一夜，神差使者放人。希律囚人，用铁链锁着，有十六个兵丁，门外也有人看守。但天使放人，铁链兵丁，无法拦阻。铁链自动脱落，铁门自己打开。彼得去那称呼马可的约翰他母亲马利亚家去，在那里有好些人聚集祷告。彼得敲外门，使女听得是彼得的声音，就欢喜得顾不得开门，跑进去告诉众人说：&ldquo;彼得站在门外。&rdquo;他们说：&ldquo;你是疯了。&rdquo;</p>

<p class="flush">他们切切地为彼得祷告，现在神答应他们的祷告，他们却不能相信，对报信的使女说：&ldquo;你是疯了。&rdquo;我们在教会的祷告或是自己的祷告生活中，我们是否相信自己向神祷告和祈求的？我们是否相信神是那位做事直到如今的神？祂是垂听祷告的主？</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">上一章最后一节 &ldquo;巴拿巴和扫罗办完了他们供给的事，就从耶路撒冷回来，带著称呼马可的约翰同去&rdquo; （<span class="popup-link" @click = "popUp('pop2')"> 徒12:25</span>），
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup><u class="person underline">巴拿巴</u>和<u class="person underline">扫罗</u>办完了他们供给的事，就从耶路撒冷回来，带着称呼<u class="person underline">马可</u>的<u class="person underline">约翰</u>同去。</p>
	<!-- end bible --></div>
	可以当作下一段的开头，也可以作为那段的结尾。它总结了耶路撒冷的事，并预备下一幕的布景，开始保罗的第一次宣教之旅。</li>
</ul>

<p class="indent2">路加结束了他书中的第二大部分。在 1-7 章中，教会在耶路撒冷被建立；在 8-12章中，教会延展到外邦人中，安提阿成为基督教的中心。</p>

<ul>
	<li class="nobreak-final-final">从13-28章是使徒传福音直到地极的见证，路加在这里描述了福音广传的第三个主要阶段，即福音传到外族人中。彼得已经打开了往外族人的道路（<span class="popup-link" @click = "popUp('pop3')"> 徒10:1-11:18</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
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

	<h3>圣灵降在众人身上</h3>

	<p><sup class="versenum">44&nbsp;</sup><u class="person underline">彼得</u>还说这话的时候，圣灵降在一切听道的人身上。<sup class="versenum">45&nbsp;</sup>那些奉割礼、和<u class="person underline">彼得</u>同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都稀奇，<sup class="versenum">46&nbsp;</sup>因听见他们说方言，称赞神为大。<sup class="versenum">47&nbsp;</sup>于是<u class="person underline">彼得</u>说：&ldquo;这些人既受了圣灵，与我们一样，谁能禁止用水给他们施洗呢？&rdquo;<sup class="versenum">48&nbsp;</sup>就吩咐奉耶稣基督的名给他们施洗。他们又请<u class="person underline">彼得</u>住了几天。</p>

	<p><sup class="versenum">1 </sup>使徒和在犹太的众弟兄听说外邦人也领受了神的道。<sup class="versenum">2&nbsp;</sup>及至<u class="person underline">彼得</u>上了耶路撒冷，那些奉割礼的门徒和他争辩，说：<sup class="versenum">3&nbsp;</sup>&ldquo;你进入未受割礼之人的家，和他们一同吃饭了！&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">彼得</u>就开口把这事挨次给他们讲解，说：<sup class="versenum">5&nbsp;</sup>&ldquo;我在约帕城里祷告的时候，魂游象外，看见异象：有一物降下，好像一块大布，系着四角，从天缒下，直来到我跟前。<sup class="versenum">6&nbsp;</sup>我定睛观看，见内中有地上四足的牲畜和野兽、昆虫并天上的飞鸟。<sup class="versenum">7&nbsp;</sup>我且听见有声音向我说：&lsquo;<u class="person underline">彼得</u>，起来，宰了吃！&rsquo;<sup class="versenum">8&nbsp;</sup>我说：&lsquo;主啊，这是不可的！凡俗而不洁净的物从来没有入过我的口。&rsquo;<sup class="versenum">9&nbsp;</sup>第二次有声音从天上说：&lsquo;神所洁净的，你不可当做俗物。&rsquo;<sup class="versenum">10&nbsp;</sup>这样一连三次，就都收回天上去了。<sup class="versenum">11&nbsp;</sup>正当那时，有三个人站在我们所住的房门前，是从恺撒利亚差来见我的。<sup class="versenum">12&nbsp;</sup>圣灵吩咐我和他们同去，不要疑惑。同着我去的，还有这六位弟兄，我们都进了那人的家。<sup class="versenum">13&nbsp;</sup>那人就告诉我们他如何看见一位天使站在他屋里，说：&lsquo;你打发人往约帕去，请那称呼<u class="person underline">彼得</u>的<u class="person underline">西门</u>来，<sup class="versenum">14&nbsp;</sup>他有话告诉你，可以叫你和你的全家得救。&rsquo;<sup class="versenum">15&nbsp;</sup>我一开讲，圣灵便降在他们身上，正像当初降在我们身上一样。<sup class="versenum">16&nbsp;</sup>我就想起主的话说：&lsquo;<u class="person underline">约翰</u>是用水施洗，但你们要受圣灵的洗。&rsquo;<sup class="versenum">17&nbsp;</sup>神既然给他们恩赐，像在我们信主耶稣基督的时候给了我们一样，我是谁，能拦阻神呢？&rdquo;<sup class="versenum">18&nbsp;</sup>众人听见这话，就不言语了，只归荣耀于神，说：&ldquo;这样看来，神也赐恩给外邦人，叫他们悔改得生命了。&rdquo;</p>
	<!-- end bible --></div>
	但是现在注意力转移到保罗身上，在他身上延续了使徒这部分的宣教使命。而13-14章是保罗的第一次宣教旅程。在这次的旅程中，保罗和巴拿巴到达了塞浦路斯和加拉太。13章中也包括了使徒行传中保罗第一次讲道的讲章。</li>
	<li><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒13:1-12》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒13:1-12</button><div class="collapsed" id ="Text0">

<p><sup>1</sup> 在安提阿的教会中有几位先知和教师，就是巴拿巴和称呼尼结的西面、古利奈人路求，与分封之王希律同养的马念，并扫罗。<sup>2</sup>他们事奉主，禁食的时候，圣灵说：&ldquo;要为我分派巴拿巴和扫罗，去做我召他们所做的工。&rdquo;<sup>3</sup>于是禁食祷告，按手在他们头上，就打发他们去了。</p>

<p><sup>4</sup>他们既被圣灵差遣，就下到西流基，从那里坐船往塞浦路斯去。<sup>5</sup>到了撒拉米 ，就在犹太人各会堂里传讲　神的道，也有约翰作他们的帮手。<sup>6</sup>经过全岛，直到帕弗，在那里遇见一个有法术、假充先知的犹太人，名叫巴耶稣。<sup>7</sup>这人常和方伯士 求保罗同在。士求保罗是个通达人，他请巴拿巴和扫罗来，要听 神的道。<sup>8</sup>只是那行法术的以吕马（这名翻出来就是&ldquo;行法术&rdquo;的意思）敌挡使徒，要叫方伯不信真道。<sup>9</sup>扫罗又名保罗，被圣灵充满，定睛看他，<sup>10</sup>说：&ldquo;你这充满各样诡诈奸恶，魔鬼的儿子，众善的仇敌，你混乱主的正道还不止住吗？<sup>11</sup>现在主的手加在你身上，你要瞎眼，暂且不见日光。&rdquo;他的眼睛立刻昏蒙黑暗，四下里求人拉著手领他。<sup>12</sup>方伯看见所做的事，很希奇主的道，就信了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/324.mp4" type="button" class="external-movie">
         观看徒13:1-12</button>
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
	<li class="nobreak-final-final">安提阿教会的领导团队是由不同恩赐和不同文化的人所组成。圣灵带领他们差派两位最合适的领袖&mdash;&mdash;扫罗和巴拿巴，出去使人作门徒并到新的地方建立新教会。他们两人决定带巴拿巴的表弟约翰马可去作他们的帮手。值得注意的是，他们所去的第一个地方是巴拿巴的家乡塞浦路斯，它是位于叙利亚沿岸上的一座岛。塞浦路斯的信徒曾在安提阿帮助建立教会（<span class="popup-link" @click = "popUp('pop4')"> 徒11:20</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>但内中有塞浦路斯和古利奈人，他们到了安提阿，也向希腊人传讲主耶稣。</p>
	<!-- end bible --></div>
	我们学习到让福音自然传开，最好的方式就是透过关系网络。在罗马帝国各地旅行时， 扫罗用非犹太人的名字保罗来称呼自己。保罗和巴拿巴透过一个行法术的犹太人，认识了岛上的官员，结果引发了一场重大的属灵争战。保罗并不害怕，以耶稣至高无上的权柄战胜魔鬼的敌挡（<span class="popup-link" @click = "popUp('pop5')"> 太28:18-20</span>)。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup class="versenum">19&nbsp;</sup>所以你们要去，使万民做我的门徒，奉父、子、圣灵的名给他们施洗，<sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
	<!-- end bible --></div>
	官员的归信，立下另一个重要的里程碑。这是第一次罗马的地方官长变为基督的跟随者。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒13:2-3</p>

<p class="forward bible"><sup>2</sup>他们事奉主，禁食的时候，圣灵说：&ldquo;要为我分派巴拿巴和扫罗，去做我召他们所做的工。&rdquo;<sup>3</sup>于是禁食祷告，按手在他们头上，就打发他们去了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">圣灵说：&ldquo;要为我分派巴拿巴和扫罗，去作我召他们所作的工。&rdquo;（徒13:2）他们在什么时候听到圣灵说话？</li>
</ul>

<p class="indent2">是在事奉主、禁食、祷告的时候。这里我们看见三件事：</p>

<ul class="forward">
	<li class="forward">第一，&ldquo;要为我&rdquo;说明这是圣灵的意愿与要求。差派人出去宣教不是教会自己的计划，而是圣灵的感动和指示。</li>
	<li class="forward">第二，&ldquo;要为我分派巴拿巴和扫罗&rdquo; 说明圣灵明确地指明要差派哪些人。圣灵知道哪些人合他用。圣灵要差派当中最好、最有恩赐的工人出去。差派不是把本地用不了、不合用的工人送到外地去。</li>
	<li class="forward">第三，&ldquo;去作我召他们所作的工&rdquo; 说明差派工人出去是要作圣灵召他们所作的工，不是要建立个人的王国，也不是要扩展教会的地盘。这些工人是圣灵所召，就要向圣灵负责。工作的方向和策略也是由圣灵决定。</li>
</ul>

<p class="indent2">因此，在顺服神的过程或愿意顺服神的旨意时，才能察觉圣灵的带领。我们如果不愿意事奉、不肯顺服神，就不可能体会圣灵的带领。</p>

<ul class="forward">
	<li class="forward">在向外的宣教上圣灵和当地教会，各担任了什么角色？这件事让我们对关于神的引导学到什么功课？</li>
	<li class="forward">通过这段经文你对福音的大能和魔鬼搅乱人心的工作有何进一步的认识？</li>
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
	<li class="forward">主耶稣拥有天上地下的权柄，连撒旦和魔鬼都要伏在祂的脚下，而且祂应许有一天撒旦要永远被消灭（<span class="popup-link" @click = "popUp('pop6')"> 启20:10</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>那迷惑他们的魔鬼被扔在硫磺的火湖里，就是兽和假先知所在的地方。他们必昼夜受痛苦，直到永永远远。</p>
	<!-- end bible --></div>
	本周为那些你认识或听闻的，他们被魔鬼辖制或是在黑暗中生活的人祷告，求主耶稣的真光照进他们生命，他们愿意让主耶稣作他们的救主，得着真正的医治、自由和释放。</li>
	<li class="forward">经文中提到2 次禁食，但禁食却不是单独出现的。第2 节连于敬拜，第3 节连于祷告。禁食本身很少是（或从来不是）一个目的，它往往是途径。禁食是一个消极的行动（禁止自己进食，也不让其他东西分散自己的注意力），但却为了一个积极的行动（敬拜和祷告）。
	<ul class="forward">
		<li class="forward">你有禁食的经历吗？回想你当时禁食的过程，禁食对你属灵生命有什么帮助和影响。找时间与属灵同伴分享。</li>
		<li class="forward">最近神是否感动你与教会/小组一起为什么事禁食祷告吗？在教会/小组分享禁食的意义和目的，同时动员弟兄姐妹一起在禁食祷告中经历神的带领和作为。</li>
	</ul>
	</li>
	<li class="forward">&ldquo;按手&rdquo;表示按手的人与被按手的人在灵里合一。所以工人的出去，也就是教会的出去，外出差传的工人并不单独，他们的背后有教会的祷告和记念作为支持。
	<ul class="forward">
		<li class="forward">持续为教会所差派出去得宣教士（或你认识的宣教士），以及城市植堂联盟的需要献上祷告、奉献和主动关心他们的需要。</li>
	</ul>
	</li>
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

<p class="forward">天父阿，愿这地的人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上，如同行在天上。求主打发更多工人收割祢的庄稼，拓展我们的疆界，我们深愿在每1000人中就有1个&ldquo;徒2群体&rdquo;。主啊，祢是差派工人的主，愿我们教会贴近祢的心意，预备和装备属主的工人，以致从我们教会同心差出去的，是合乎主用，为主得人、造就人并植立新的教会。我们也为这城市的众教会和牧者同工祷告，若当中有任何嫌隙、骄傲和误解的，因着耶稣就彼此放下自己，各人看别人比自己强，谦卑饶恕，同心配搭，一同为这城市祷告，并为主赢得这城市，成为这城市的祝福。奉主名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->