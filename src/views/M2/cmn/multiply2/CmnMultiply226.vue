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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>26.</h1></div>
                        <div class="chapter_title ltr"><h1>拣选实习领袖</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美&mdash;&mdash;以神的话、诗歌称颂赞美神</h2>

<h2 class="back">祷告关怀&mdash;&mdash;以祷告、勉励，合乎圣经的教导彼此服侍</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践&mdash;&mdash;鼓励小组在爱中互相督促，一同顺服耶稣</h2>

<ul class="back">
	<li style="text-align:justify"><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约5:30</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>&ldquo;我凭着自己不能做什么，我怎么听见就怎么审判。我的审判也是公平的，因为我不求自己的意思，只求那差我来者的意思。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意&mdash;&mdash;体恤神的心意，成为我们行事的动机与激励</h2>

<ul>
	<li class="nobreak-final-final">在摩西律法中，安息日的设立是为了记念上帝的创造（参<span class="popup-link" @click = "popUp('pop6')"> 出20:11</span>）

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>因为六日之内，耶和华造天、地、海和其中的万物，第七日便安息，所以耶和华赐福于安息日，定为圣日。</p>
	<!-- end bible --></div>
	和拯救（参<span class="popup-link" @click = "popUp('pop7')"> 申5:15</span>），

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>你也要记念你在埃及地做过奴仆，耶和华你神用大能的手和伸出来的膀臂将你从那里领出来，因此耶和华你的神吩咐你守安息日。</p>
	<!-- end bible --></div>
	耶稣在医治的行动中成全了安息日所指向上帝的拯救。犹太人从十诫当守安息日这条诫命延伸出了三十九条安息日不可行的事，这些规定和律法有同等的地位。但主耶稣说祂是安息日的主，信靠祂的人每天在生活中享受安息和遵守主的话，比守任何的节日和规条更为重要！因为得救在乎归回安息，得力在乎平静安稳（<span class="popup-link" @click = "popUp('pop8')"> 赛30:15</span>）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>主耶和华以色列的圣者曾如此说：&ldquo;你们得救在乎归回安息，你们得力在乎平静安稳。&rdquo;你们竟自不肯！</p>
	<!-- end bible --></div>
	有耳可听的，都应当听！</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣&mdash;&mdash;学习为要应用，应用带来生命改变</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">主耶稣在传道、医病、赶鬼时，宣告神国的临到，宣扬神国的福音，宣告祂就是&ldquo;基督&rdquo;。祂选立神国的使徒，并要教导他们福音的信息，论到贫穷、饥饿、哀哭、受逼迫的人是有福的。<br />
耶稣即将选召十二个门徒，这是神救恩计划中一个重要的事件。耶稣将这事带到父神前。路加多次记载耶稣祷告，只有在这里记载整夜祷告。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音6:12-19》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音6:12-19</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>那时，耶稣出去，上山祷告，整夜祷告　神。<sup>13</sup>到了天亮，叫他的门徒来，就从他们中间挑选十二个人，称他们为使徒。<sup>14</sup>这十二个人有西门，耶稣又给他起名叫彼得，还有他兄弟安得烈，又有雅各和约翰，腓力和巴多罗买，<sup>15</sup>马太和多马，亚勒腓的儿子雅各和奋锐党的西门，<sup>16</sup>雅各的儿子（注：&ldquo;儿子&ldquo;或作&ldquo;兄弟&rdquo;）犹大和卖主的加略人犹大。</p>

<p><sup>17</sup>耶稣和他们下了山，站在一块平地上；同站的有许多门徒，又有许多百姓，从犹太全地和耶路撒冷，并推罗、西顿的海边来，都要听他讲道，又指望医治他们的病；<sup>18</sup>还有被污鬼缠磨的，也得了医治。<sup>19</sup>众人都想要摸他，因为有能力从他身上发出来，医好了他们。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/226.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音6:12-19&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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

<p class="up">耶稣的事工进到下一阶段，跟随祂的人数和影响力逐渐增长。以色列各地的人相信祂就是弥赛亚。就在这关键的时刻，耶稣叫门徒聚集，自己上山祷告。从这里我们学到培育领袖的首要原则：仰赖上帝。祷告完，耶稣下山到一块平地，公开的从门徒（可能有100人以上）中拣选十二个人，称他们为&ldquo;使徒&rdquo;或&ldquo;被差遣的人&rdquo;，这是培育领袖的第二个原则：公开设立职分。耶稣从已受过&ldquo;得人事工&rdquo;训练的门徒当中选出领袖，要这些人常和祂同在（个人发展），并差遣他们去做和祂一样的事（给予事工的权柄）。</p>

<ul>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop5')"> 马可福音3:13-19</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>耶稣上了山，随自己的意思叫人来，他们便来到他那里。<sup class="versenum">14&nbsp;</sup>他就设立十二个人，要他们常和自己同在，也要差他们去传道，<sup class="versenum">15&nbsp;</sup>并给他们权柄赶鬼。<sup class="versenum">16&nbsp;</sup>这十二个人有<u class="person underline">西门</u>，耶稣又给他起名叫<u class="person underline">彼得</u>；<sup class="versenum">17&nbsp;</sup>还有<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>，又给这两个人起名叫<u class="person underline">半尼其</u>，就是雷子的意思；<sup class="versenum">18&nbsp;</sup>又有<u class="person underline">安得烈</u>，<u class="person underline">腓力</u>，<u class="person underline">巴多罗买</u>，<u class="person underline">马太</u>，<u class="person underline">多马</u>，<u class="person underline">亚勒腓</u>的儿子<u class="person underline">雅各</u>，和<u class="person underline">达太</u>，并奋锐党的<u class="person underline">西门</u>；<sup class="versenum">19&nbsp;</sup>还有卖耶稣的加略人<u class="person underline">犹大</u>。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵&mdash;&mdash;将神话语藏在心里，成为我们行事的准则</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路6:12-13</p>

<p class="forward bible"><sup>12</sup>那时，耶稣出去，上山祷告，整夜祷告　神。<sup>13</sup>到了天亮，叫他的门徒来，就从他们中间挑选十二个人，称他们为使徒。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备&mdash;&mdash;操练有信心并忠心地实践和训练他人</h2>

<ul class="forward">
	<li class="forward">主耶稣在拣选十二使徒的事上，花了一整夜祷告，你看到或学习到什么？试想你在拣选门徒，或是教会在选立领袖上，最看重一个人的什么？会如何做？为什么？</li>
	<li class="forward">让我们现在就花一些时间（10分钟），感谢神拣选我们成为祂的儿女，有福音传给我们，并借着教会牧者和造就者的栽培和建立，使我们成为主的门徒。另外你也为曾在或正在你生命中造就和建立你的牧者或造就者来感恩和祷告，并用实际的行动（卡片、言语或行动关心）表达你对他们的感谢和祝福。</li>
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


<h2 class="forward">福音行动&mdash;&mdash;设定行动点，彼此督责，勉励行道</h2>

<ul class="forward">
	<li class="forward">在《信徒动员表》中列下3-5位弟兄或姐妹的名字，提名为他们祷告，求神在他们生命中动工，让你也有份参与栽培和训练他们成为主的门徒。</li>
	<li class="forward">如果你有带领人信主，或是你知道有初信者有心成长，没人造就他的，这周就主动与他们开始学习一对一《初信栽培》，帮助他们在基督里一同成长。</li>
	<li class="forward">为教会的牧者和同工祷告，求神保守他们的心常在基督里，在拣选门徒和倍增教会领袖的事上专心仰赖和寻求神的心意，且看重及花时间栽培门徒，并付代价培训及建立教会的新领袖。</li>
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


<h2 class="forward">福音祷告&mdash;&mdash;将所行的交托神，求主按祂旨意成就</h2>

<p>爱我们的天父，我们承认自己本不配，也曾悖逆和得罪祢。感谢祢没有放弃我们，谢谢祢借着身边的亲友及教会的弟兄姐妹把福音传给我们，让我们能认识祢这位独一的救主。感谢祢在我们生命中放下属灵的长辈和同伴，用祢的话牧养我们属灵生命的成长。天父啊，求祢不断更新和建造我们，使我们更合祢的心意。我们愿珍惜和看重祢摆在我们生命中的人，寻求明白祢的心意，付上祷告的代价，拣选并以生命的榜样来栽培和建立属祢的门徒，爱祢、并追随祢的脚踪而行。感恩祷告是奉主耶稣基督的名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->