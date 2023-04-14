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
                        <div class="chapter_number ltr"><h1>44.</h1></div>
                        <div class="chapter_title ltr"><h1>无酵型领导力</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路10:19-20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup class="versenum">20&nbsp;</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p style="text-align:justify"><span><span><span lang="ZH-CN">耶稣差遣门徒两个两个出去，进到各城，寻找当得平安的家庭，并分享天国的福音、服事人群。当他们返回时，非常高兴上帝使用他们。但耶稣提醒他们应当为名字记录在生命册上而欢喜。今天我们采取主动，靠着圣灵的大能与人单单分享主耶稣，我们当将结果交托给神。我们深愿更多人的名字记录在生命册上，与我们一样同享永生，神的名得着最大的荣耀。</span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">前往耶路撒冷的路上是一段门徒训练的旅程，耶稣使用各种时机殷切教导门徒，然而在表面平静的旅程中却潜伏着暗潮汹涌，耶稣和犹太宗教领袖的冲突接二连三地出现，耶稣明知旅程的终点将发生的事，但祂却&ldquo;定意&rdquo;走向耶路撒冷，为要完成祂的使命。跟从耶稣的门徒必须先被建造，才能在老师离开以后承担大任。在一个上万人的&ldquo;大型聚会&rdquo;开始前，或许门徒心中因为群众的热烈反应而沾沾自喜，不久前才刚刚责备过法利赛人的耶稣因而转过身来警告门徒，不可像法利赛人一样看重虚浮的荣耀，要敬畏神，因全知的神知道人所想和所行的一切（<span class="popup-link" @click = "popUp('pop2')"> 路加福音12:1-3</span>）。</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">1 </sup>这时，有几万人聚集，甚至彼此践踏。耶稣开讲，先对门徒说：&ldquo;你们要防备法利赛人的酵，就是假冒为善。<sup class="versenum">2&nbsp;</sup>掩盖的事没有不露出来的，隐藏的事没有不被人知道的。<sup class="versenum">3&nbsp;</sup>因此，你们在暗中所说的，将要在明处被人听见；在内室附耳所说的，将要在房上被人宣扬。</p>
<!-- end bible --></div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音12:1-12》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音12:1-12</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>这时，有几万人聚集，甚至彼此践踏。耶稣开讲，先对门徒说：&ldquo;你们要防备法利赛人的酵，就是假冒为善。<sup>2</sup>掩盖的事，没有不露出来的；隐藏的事，没有不被人知道的。<sup>3</sup>因此，你们在暗中所说的，将要在明处被人听见；在内室附耳所说的，将要在房上被人宣扬。<sup>4</sup>我的朋友，我对你们说：那杀身体以后不能再做什么的，不要怕他们。<sup>5</sup>我要指示你们当怕的是谁，当怕那杀了以后又有权柄丢在地狱里的。我实在告诉你们：正要怕他。<sup>6</sup>五个麻雀不是卖二分银子吗？但在　神面前，一个也不忘记；<sup>7</sup>就是你们的头发，也都被数过了。不要惧怕，你们比许多麻雀还贵重！<sup>8</sup>我又告诉你们，凡在人面前认我的，人子在　神的使者面前也必认他；<sup>9</sup>在人面前不认我的，人子在　神的使者面前也必不认他。<sup>10</sup>凡说话干犯人子的，还可得赦免；惟独亵渎圣灵的，总不得赦免。<sup>11</sup>人带你们到会堂，并官府和有权柄的人面前，不要思虑怎么分诉，说什么话，<sup>12</sup>因为正在那时候，圣灵要指教你们当说的话。&rdquo;</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/244.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音12:1-12&nbsp;</button>
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
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">过去的六个月，耶稣将两种领导作强烈对比：一、祂期望的领导方式；二、祂的门徒从小效法的领导方式。祂指出以色列领袖的领导方式，并不适用于上帝的国。祂用&ldquo;发酵的面团做面包&rdquo;的比喻教导门徒，要他们防备法利赛人和撒都该人的酵。法利赛人假冒为善，他们讲的是一套，做的又是另一套。撒都该人则是硬着心肠，不接受真理。他们不相信死里复活的事，也不相信有天使或魔鬼（<span class="popup-link" @click = "popUp('pop3')"> 徒23:8</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>因为撒都该人说没有复活，也没有天使和鬼魂，法利赛人却说两样都有。</p>
	<!-- end bible --></div>
	耶稣指出他们的错误，但是他们却只想辩论。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路12:5</p>

<p class="forward bible">我要指示你们当怕的是谁，当怕那杀了以后又有权柄丢在地狱里的。我实在告诉你们：正要怕他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">上帝不仅是严厉的审判官，祂也是体贴顾念我们的救主，祂更是全知的神，这段经文是否帮助你对上帝有更全面的认识？这样的认识是否会减轻你所面对的人或所处环境的惧怕？为什么？</li>
	<li class="forward">金钱虽然会拦阻人来到上帝面前，然而金钱也可以成为被上帝使用的工具，我们应该如何善用钱财？读<span class="popup-link" @click = "popUp('pop4')"> 提前6:17-19</span>
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>你要嘱咐那些今世富足的人，不要自高，也不要倚靠无定的钱财，只要倚靠那厚赐百物给我们享受的神。 <sup class="versenum">18&nbsp;</sup>又要嘱咐他们行善，在好事上富足，甘心施舍，乐意供给人， <sup class="versenum">19&nbsp;</sup>为自己积成美好的根基，预备将来，叫他们持定那真正的生命。</p>
	<!--end of footnotes--><!-- end bible --></div>
	。这段经文对你有什么提示吗？它有那些地方是对你说的吗？</li>
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
	<li class="forward">求神监察你的心，看是否有隐藏的罪，以致你逃避神不敢到神的面前。我们的罪在基督里已经完全被赦免，让我们不被撒旦迷惑或欺哄，要知道神悦纳我们真诚谦卑悔改的心。</li>
	<li class="forward">纵然洪水泛滥，耶和华依然坐着为王。我们知道神必能使万事都互相效力，叫爱祂的我们得益处，并效法祂儿子耶稣基督的样式。为你所处的环境与和困境祷告，求神让你凭信心交托仰望祂，为你开通达的道路并赐十分的平安。</li>
	<li class="forward">在小组中与门徒一起为国家社会并世界所面对的灾难和困境向神求怜悯和恩惠，求神眷顾城中属祂的百姓，赦免人因任意妄为而得罪神的罪孽，怜悯医治这地。</li>
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

<p>监察人心的主，祢说&ldquo;掩盖的事，没有不露出来的；隐藏的事，没有不被人知道的&rdquo;，我们世人无法向祢隐藏，祢若追究罪孽，有谁能逃脱呢！ 感谢主耶稣降世为要拯救罪人；我们得拯救全因祢的慈爱与怜悯。主啊，祢说，那杀身体以后不能再做什么的，不要怕他们。当怕的是那杀了以后又有权柄丢在地狱里的。求主帮助我们存敬畏和谦恭的心服事，向祢全然敞开我们的心扉，并勇敢向世人宣扬救主耶稣。奉主耶稣名求，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->