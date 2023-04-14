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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>神人耶稣</h1></div>
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
	<li class="back">自从参加《倍增门徒&mdash;基础查经》，你最大的得着或心得是什么？</li>
	<li class="back">背诵经文（<span class="popup-link" @click = "popUp('pop1')"> 路14:26-27</span>)
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>&ldquo;人到我这里来，若不爱我胜过爱自己的父母、妻子、儿女、弟兄、姐妹和自己的性命，就不能做我的门徒。<sup class="versenum">27&nbsp;</sup>凡不背着自己十字架跟从我的，也不能做我的门徒。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意&mdash;&mdash;体恤神的心意，成为我们行事的动机与激励</h2>

<p><span><span><span lang="ZH-CN">耶稣是完全的神成为人，并进入人类的历史中，将上帝完全启示出来<span style="color:black">。祂在十字架上受死，说出神何等爱我们。故此，耶稣基督就是神给人活泼的道，表达神对世人的爱。</span>未来一年在《倍增门徒之天国典范》小组里，我们将从人子耶稣的一生与事工，来看神如何造就和建立门徒的生命，并使他们建立与人连结、以上帝为中心的基础，去使多人作主的门徒（参看课程说明与目录）。</span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣&mdash;&mdash;学习为要应用，应用带来生命改变</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">作者约翰以&ldquo;道&rdquo;作为福音书之始。英语的&ldquo;道&rdquo;字（word）是说话的单位，用以向人表达自己。这里的&ldquo;道&rdquo;不是指一段说话或演辞，乃指一个人──神的儿子主耶稣基督。神在主耶稣身上全面向人类彰显祂自己。基督来到世上，完美地向我们显明神的形象。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音1:1-14》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音1:1-14</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>太初有道，道与神同在，道就是神。<sup>2</sup>这道太初与神同在。<sup>3</sup>万物是借着他造的。凡被造的，没有一样不是借着他造的。<sup>4</sup>生命在他里头。这生命就是人的光。<sup>5</sup>光照在黑暗里，黑暗却不接受光。<sup>6</sup>有一个人，是从神那里差来的，名叫约翰。<sup>7</sup>这人来，为要作见证，就是为光作见证，叫众人因他可以信。<sup>8</sup>他不是那光，乃是要为光作见证。<sup>9</sup>那光是真光，照亮一切生在世上的人。<sup>10</sup>他在世界，世界也是借着他造的，世界却不认识他。<sup>11</sup>他到自己的地方来，自己的人倒不接待他。<sup>12</sup>凡接待他的，就是信他名的人，他就赐他们权柄，作神的儿女。<sup>13</sup>这等人不是从血气生的，不是从情欲生的，也不是从人意生的，乃是从神生的。<sup>14</sup>道成了肉身住在我们中间，充充满满的有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/201.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音1:1-14&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">在这段经文中，你对耶稣的神性或人性有何认识？</li>
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

<p class="up">&nbsp;</p>

<ul>
	<li class="nobreak-final-final">翻阅<span class="popup-link" @click = "popUp('pop2')"> 腓立比书2:5-11</span>。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>你们当以基督耶稣的心为心。<sup class="versenum">6&nbsp;</sup>他本有神的形象，不以自己与神同等为强夺的，<sup class="versenum">7&nbsp;</sup>反倒虚己，取了奴仆的形象，成为人的样式；<sup class="versenum">8&nbsp;</sup>既有人的样子，就自己卑微，存心顺服以至于死，且死在十字架上。</p>

	<p><sup class="versenum">9&nbsp;</sup>所以神将他升为至高，又赐给他那超乎万名之上的名，<sup class="versenum">10&nbsp;</sup>叫一切在天上的、地上的和地底下的，因耶稣的名无不屈膝，<sup class="versenum">11&nbsp;</sup>无不口称耶稣基督为主，使荣耀归于父神。</p>
	<!-- end bible --></div>
	全能的上帝成了人的样式。祂选择降生成为一个婴孩，而非成人的样式。圣经说：祂&ldquo;反倒虚己&rdquo;， 成为一个&ldquo;人&rdquo;与我们同住在这世界。 然而，祂也一直是完全的神，是全能、全知、全在的。祂隐藏了神性，定意使自己和自己的大能受到限制，成为一个真正的人。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵&mdash;&mdash;将神话语藏在心里，成为我们行事的准则</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约1:1-2</p>

<p class="forward bible"><sup>1</sup>太初有道，道与神同在，道就是神。<sup>2</sup>这道太初与神同在。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备&mdash;&mdash;操练有信心并忠心地实践和训练他人</h2>

<ul class="forward">
	<li class="forward">如果我们不明白耶稣独特的源头和使命，我们就无法真的认识祂。在你&ldquo;认识神&rdquo;的过程中，你对耶稣有过什么错误的看法吗？这段经文如何帮助你认识耶稣？</li>
	<li class="forward">作为&ldquo;人的儿女&rdquo;，我们没有选择的自由，但我们却有自由选择作&ldquo;上帝的儿女&rdquo;，你的选择是什么？是什么因素促成你做这样的选择？</li>
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
	<li class="forward">花一段时间来到神的面前，回顾你接受主耶稣作你生命的救主之后，你的生命经历什么改变？把它写下，下周在小组里分享。</li>
	<li class="forward">在你的人际网络中想出2-3位你将与他们分享你遇见耶稣生命改变的故事，并在《福音行动表》写下他们的名字。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在________________（时间/地点）将会__________________（对象/事情）。</p>

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


<h2 class="forward">福音祷告&mdash;&mdash;将所行的交托神，求主按祂旨意成就</h2>

<p>亲爱的天父，感谢祢那么爱我们，借着祢的爱子耶稣基督降世为人，为要拯救我们世人。我们本不认识祢，甚至曾公然反对祢，但祢不离不弃的爱，却一再将我们挽回。如今我们可以因信耶稣为基督，成为祢的儿女。天父啊，我们愿意更认识祢，真知道祢，求祢帮助我们在福音书中对主耶稣有正确的认识，并效法祂的生命。奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->