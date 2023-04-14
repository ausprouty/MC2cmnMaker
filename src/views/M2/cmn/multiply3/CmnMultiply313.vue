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
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>司提反殉道——逼迫促扩展</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒7:52</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">52&nbsp;</sup>哪一个先知不是你们祖宗逼迫呢？他们也把预先传说那义者要来的人杀了，如今你们又把那义者卖了、杀了。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">彼得说：&ldquo;&hellip;为什么定睛看我们，以为我们凭自己的能力和虔诚使这人行走呢？&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒3:12</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup><u class="person underline">彼得</u>看见，就对百姓说：&ldquo;以色列人哪，为什么把这事当做稀奇呢？为什么定睛看我们，以为我们凭自己的能力和虔诚使这人行走呢？</p>
	<!-- end bible --></div>
	不是我们的能力和虔诚使这人行走。是基督复活的大能成就了这事，我们只是他手中的器皿。别看我们，看那复活的基督耶稣，是祂的名使这人行走。彼得不敢窃取神的荣耀，不敢将功劳占为己有。当神使用我们行大事成大功时，千万别以为那能力是我们自己的，那能力还是神的，而且离了神我们什么都作不了。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在7章中司提反抓住为自己辩护的机会来传讲福音。司提反的讲道，记录了神是如何与犹太人交往的，从对亚伯拉罕的呼召开始；也记录了犹太人是如何不断地悖逆神、甚至反叛神的。犹太人对信徒的逼迫，在司提反殉道的事上达到高峰，同时这件事却带来教会在地域上的扩张，信徒开始超越犹太教的范围，向外作见证。司提反成为第一个为主殉道的信徒。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒7:54-8:3》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒7:54-8:3</button><div class="collapsed" id ="Text0">

<p><sup>54</sup>众人听见这话，就极其恼怒，向司提反咬牙切齿。<sup>55</sup>但司提反被圣灵充满，定睛望天，看见　神的荣耀，又看见耶稣站在神的右边，<sup>56</sup>就说：&ldquo;我看见天开了，人子站在　神的右边！&rdquo;<sup>57</sup>众人大声喊叫，捂著耳朵，齐心拥上前去，<sup>58</sup>把他推到城外，用石头打他。作见证的人把衣裳放在一个少年人名叫扫罗的脚前。<sup>59</sup>他们正用石头打的时候，司提反呼吁主说：&ldquo;求主耶稣接收我的灵魂！&rdquo; <sup>60</sup>又跪下大声喊著说：&ldquo;主啊，不要将这罪归于他们！&rdquo;说了这话，就睡了。扫罗也喜悦他被害。</p>

<p><sup>8</sup>:<sup>1</sup>从这日起，耶路撒冷的教会大遭逼迫。除了使徒以外，门徒都分散在犹太和撒马利亚各处。<sup>2</sup>有虔诚的人把司提反埋葬了，为他捶胸大哭。<sup>3</sup>扫罗却残害教会，进各人的家，拉著男女下在监里。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/313.mp4" type="button" class="external-movie">
         观看徒7:54-8:3</button>
    <div class="collapsed"></div>



<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作？遇到什么难处？结果如何？</li>
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
	<li class="nobreak-final-final">司提反展现出他分解上帝话语的能力，用圣经的真理面质这群领袖。他谴责他们不服从上帝，犯罪得罪圣灵、违反摩西律法，又杀了弥赛亚耶稣。&ldquo;人子&rdquo;（the Son of Man）这个称号常被耶稣用来指称祂自己。当司提反告诉他们自己看见耶稣（人子）时，这些领袖瞬间情绪爆发，转用暴力对待他。耶稣曾告诉门徒，杀他们的人还以为自己是在服事上帝（<span class="popup-link" @click = "popUp('pop3')"> 太10:16-39</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>警戒勉励</h3>

	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我差你们去，如同羊进入狼群，所以你们要灵巧像蛇，驯良像鸽子。<sup class="versenum">17&nbsp;</sup>你们要防备人，因为他们要把你们交给公会，也要在会堂里鞭打你们，<sup class="versenum">18&nbsp;</sup>并且你们要为我的缘故被送到诸侯君王面前，对他们和外邦人作见证。<sup class="versenum">19&nbsp;</sup>你们被交的时候，不要思虑怎样说话或说什么话，到那时候必赐给你们当说的话；<sup class="versenum">20&nbsp;</sup>因为不是你们自己说的，乃是你们父的灵在你们里头说的。</p>

	<h3>服侍主之艰难</h3>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;弟兄要把弟兄，父亲要把儿子，送到死地；儿女要与父母为敌，害死他们。<sup class="versenum">22&nbsp;</sup>并且你们要为我的名被众人恨恶，唯有忍耐到底的，必然得救。<sup class="versenum">23&nbsp;</sup>有人在这城里逼迫你们，就逃到那城里去。我实在告诉你们：以色列的城邑你们还没有走遍，人子就到了。</p>

	<p><sup class="versenum">24&nbsp;</sup>&ldquo;学生不能高过先生，仆人不能高过主人。<sup class="versenum">25&nbsp;</sup>学生和先生一样，仆人和主人一样，也就罢了。人既骂家主是<u class="person underline">别西卜</u>，何况他的家人呢？<sup class="versenum">26&nbsp;</sup>所以不要怕他们，因为掩盖的事没有不露出来的，隐藏的事没有不被人知道的。<sup class="versenum">27&nbsp;</sup>我在暗中告诉你们的，你们要在明处说出来；你们耳中所听的，要在房上宣扬出来。<sup class="versenum">28&nbsp;</sup>那杀身体不能杀灵魂的，不要怕他们；唯有能把身体和灵魂都灭在地狱里的，正要怕他。<sup class="versenum">29&nbsp;</sup>两个麻雀不是卖一分银子吗？若是你们的父不许，一个也不能掉在地上。<sup class="versenum">30&nbsp;</sup>就是你们的头发，也都被数过了。<sup class="versenum">31&nbsp;</sup>所以，不要惧怕，你们比许多麻雀还贵重。<sup class="versenum">32&nbsp;</sup>凡在人面前认我的，我在我天上的父面前也必认他；<sup class="versenum">33&nbsp;</sup>凡在人面前不认我的，我在我天上的父面前也必不认他。</p>

	<p><sup class="versenum">34&nbsp;</sup>&ldquo;你们不要想我来是叫地上太平，我来并不是叫地上太平，乃是叫地上动刀兵。<sup class="versenum">35&nbsp;</sup>因为我来是叫&lsquo;人与父亲生疏，女儿与母亲生疏，媳妇与婆婆生疏；<sup class="versenum">36&nbsp;</sup>人的仇敌就是自己家里的人&rsquo;。<sup class="versenum">37&nbsp;</sup>爱父母过于爱我的，不配做我的门徒；爱儿女过于爱我的，不配做我的门徒；<sup class="versenum">38&nbsp;</sup>不背着他的十字架跟从我的，也不配做我的门徒。<sup class="versenum">39&nbsp;</sup>得着生命的，将要失丧生命；为我失丧生命的，将要得着生命。</p>
	<!-- end bible --></div>
	这是头一次这位第二代信徒（司提反）看见耶稣。尽管司提反看见耶稣站在（非坐在）天父上帝的右边观看所有的事发生，祂却没有拯救司提反脱离死亡。司提反快死掉时，直接向耶稣祷告，他的祈求显示出他了解耶稣与上帝同等（<span class="popup-link" @click = "popUp('pop4')"> 徒7:59-60</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">59&nbsp;</sup>他们正用石头打的时候，<u class="person underline">司提反</u>呼吁主说：&ldquo;求主耶稣接收我的灵魂！&rdquo;<sup class="versenum">60&nbsp;</sup>又跪下大声喊着说：&ldquo;主啊，不要将这罪归于他们！&rdquo;说了这话就睡了。<u class="person underline">扫罗</u>也喜悦他被害。</p>
	<!-- end bible --></div>
	这个故事也告诉我们，有一个年轻的宗教领袖名叫扫罗，喜悦司提反被害的事，并且开始到各地残害教会。无论男女皆因他们的信仰遭到迫害，有许多人因此离开耶路撒冷。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒8:1</p>

<p class="forward bible">从这日起，耶路撒冷的教会大遭逼迫。除了使徒以外，门徒都分散在犹太和撒马利亚各处。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">试列出一些司提反与耶稣之间的相似性，尤其在他们的被弃绝和受死的方面？你从他们的生命和使命中学习到什么？</li>
	<li class="forward">你是如何应对伤害或逼迫你的人呢？在这方面我们如何效法基督和学习司提反的榜样？难处在哪里？根本的区别在哪里？为什么？</li>
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
	<li class="forward">思想在你的生命中是否有面对任何的苦难，却因着信仰而变成祝福的经历呢？记下两件你要感谢神的事件，并向神感恩。下周与小组分享。</li>
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;（你要我为你做什么？），主动表达关心和服事他们，并找机会与他们分享《被圣灵充满》或《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法。</li>
	<li class="forward">什么是你的舒适区？你是否已经习惯或是不愿去改变和突破的？你想有哪些方面是耶稣要带你走出来并突破的？向主耶稣倾心吐意。同时，将它们一一写下来，找时间与属灵同伴分享和代祷。</li>
	<li class="forward">阅读附录：《宣教士：裨治文》，把阅读心得或反思写下，下周分享。</li>
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
	<li class="forward">为福音在各地开展，也为那些正面对大逼迫的教会和宣教士祷告，求主记念他们所摆上的，在危难中靠主站立，宣扬主的道，神迹奇事常伴随他们，主的名得高举。</li>
	<li class="forward">在苦难中，求主开我们的心眼，看见在祂里面必有预备，祂的旨意必然超越我们眼前的困境与难处，在试炼中能靠祂有大喜乐和十分的平安。</li>
	<li class="forward">分享教会或个人的代祷需要。</li>
	<li class="forward">最后请一位做结束和祝福祷告。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->