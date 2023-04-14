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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>与基督联合</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <ul>
	<li class="nobreak-final-final">本课透过<span class="popup-link" @click = "popUp('pop1')"> 马太福音3:13-17</span>
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>当下耶稣从加利利来到约旦河，见了<u class="person underline">约翰</u>，要受他的洗。<sup class="versenum">14&nbsp;</sup><u class="person underline">约翰</u>想要拦住他，说：&ldquo;我当受你的洗，你反倒上我这里来吗？&rdquo;<sup class="versenum">15&nbsp;</sup>耶稣回答说：&ldquo;你暂且许我，因为我们理当这样尽诸般的义。&rdquo;于是<u class="person underline">约翰</u>许了他。<sup class="versenum">16&nbsp;</sup>耶稣受了洗，随即从水里上来。天忽然为他开了，他就看见神的灵仿佛鸽子降下，落在他身上；<sup class="versenum">17&nbsp;</sup>从天上有声音说：&ldquo;这是我的爱子，我所喜悦的。&rdquo;</p>
	<!-- end bible --></div>
	清楚阐明耶稣受洗，成为跟随者的榜样。自基督时代，每个跟随祂的人都如此行。我们受洗是表明生命真正的改变，象征我们与耶稣联合，同死、同埋葬和同复活（<span class="popup-link" @click = "popUp('pop2')"> 罗6:4-5</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>所以，我们借着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督借着父的荣耀从死里复活一样。<sup class="versenum">5&nbsp;</sup>我们若在他死的形状上与他联合，也要在他复活的形状上与他联合。</p>
	<!-- end bible --></div>
	并委身加入主的教会。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇29:1-4</p>

<p class="back bible"><sup>1</sup>神的众子啊，你们要将荣耀能力归给耶和华，归给耶和华。<sup>2</sup>要将耶和华的名所当得的荣耀归给他，以圣洁的妆饰敬拜耶和华。<sup>3</sup>耶和华的声音发在水上，荣耀的　神打雷，耶和华打雷在大水之上。<sup>4</sup>耶和华的声音大有能力；耶和华的声音满有威严。</p>

</div>

<ul class="back">
	<li class="back">现在让我们以诗歌敬拜赞美上帝的创造、大能和威严，并将荣耀归给祂。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop3')"> 弗5:18</span>；
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>不要醉酒，酒能使人放荡；乃要被圣灵充满。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 约壹5:14-15</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>我们若照他的旨意求什么，他就听我们，这是我们向他所存坦然无惧的心。<sup class="versenum">15&nbsp;</sup>既然知道他听我们一切所求的，就知道我们所求于他的，无不得着。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">约翰福音十六章说圣灵在我们身边的人心中积极地动工：祂显明人的罪、使人渴望与上帝和好、让人不再害怕死亡（即最后的审判），并拆毁人心中对福音的反抗。我们应当互相提醒并彼此鼓励：&ldquo;圣灵在我们行动以前，就在人的心里动工&rdquo;。所以我们可以放胆与圣灵同工，主动与人分享耶稣的好消息，相信神会在人心中动工。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
</ul>

<p class="indent2">耶稣的跟随者腓利在以色列境内的撒马利亚向人传扬福音。主耶稣打断他的工作，告诉他向南走，往那下埃及的路上去。当他到达时，他看见一个非洲的领袖正往回家的路上。今天的故事会告诉我们接下来发生的事。</p>

<p>&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《使徒行传 8:34-40》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 使徒行传 8:34-40</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">34&nbsp;</sup>太监对<u class="person underline">腓利</u>说：&ldquo;请问，先知说这话是指着谁？是指着自己呢，是指着别人呢？&rdquo;<sup class="versenum">35&nbsp;</sup><u class="person underline">腓利</u>就开口从这经上起，对他传讲耶稣。</p>

<p><sup class="versenum">36&nbsp;</sup>二人正往前走，到了有水的地方，太监说：&ldquo;看哪，这里有水！我受洗有什么妨碍呢？&rdquo;<sup class="versenum">38&nbsp;</sup>于是吩咐车站住，<u class="person underline">腓利</u>和太监二人同下水里去，<u class="person underline">腓利</u>就给他施洗。<sup class="versenum">39&nbsp;</sup>从水里上来，主的灵把<u class="person underline">腓利</u>提了去。太监也不再见他了，就欢欢喜喜地走路。<sup class="versenum">40&nbsp;</sup>后来有人在亚锁都遇见<u class="person underline">腓利</u>；他走遍那地方，在各城宣传福音，直到恺撒利亚。</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/104.mp4" type="button" class="external-movie">
         观看&nbsp;使徒行传 8:34-40&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">分享让你印象最深刻的部分，为什么？</li>
		<li class="up">从这段经文中你对耶稣有什么新的认识？</li>
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
<div id="Summary2" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">马太福音3:13-17记载：&ldquo;<sup>13</sup>当下，耶稣从加利利来到约旦河，见了约翰，要受他的洗。<sup>14</sup>约翰想要拦住他，说：&ldquo;我当受你的洗，你反倒上我这里来吗？&rdquo;<sup>15</sup>耶稣回答说：&ldquo;你暂且许我，因为我们理当这样尽诸般的义。 &rdquo;于是约翰许了他。<sup>16</sup>耶稣受了洗，随即从水里上来。天忽然为他开了，他就看见　神的灵彷佛鸽子降下 ，落在他身上。<sup>17</sup>从天上有声音说：&ldquo;这是我的爱子，我所喜悦的。&rdquo; 耶稣受了洗，成为跟随者的榜样。我们也借着洗礼，表明我们的生命在基督里有了真正的改变，并象征我们愿意与耶稣联合，同死、同埋葬和同复活。（<span class="popup-link" @click = "popUp('pop9')"> 罗马书6:4-5</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>所以，我们借着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督借着父的荣耀从死里复活一样。<sup class="versenum">5&nbsp;</sup>我们若在他死的形状上与他联合，也要在他复活的形状上与他联合。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2>&nbsp;</h2>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="back">使徒行传8:37</p>

<p class="forward bible">腓利说：&ldquo;你若是一心相信，就可以。&rdquo;他回答说：&ldquo;我信耶稣基督是神的儿子。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward"><strong>为什么要接受洗礼</strong></li>
</ul>

<p class="indent3">主耶稣基督命令门徒必须要受洗礼，并且奉圣父、圣子、圣灵的名受洗 （太 28:18-20）。受洗者的唯一条件，就是已经悔改信主，重生得救的人。 而且圣经中的记载，大多信主者很快的就接受洗礼。</p>

<p class="indent3">虽然洗礼不是我们得救的条件，但是受洗却是：</p>

<p class="indent3">1) 主耶稣基督门徒的记号，因为我们公开顺服遵从祂的命令。</p>

<p class="indent3">2) 一个终生不变的决定，至死忠心跟随耶稣。</p>

<p class="indent3">3) 表明我们的生命在基督里已经有了真正的改变，叫我们一举一动都有新生的样式。</p>

<p class="indent3">4) 同时也是一个蒙福的事，因为我们信心藉洗礼得以坚定。</p>

<ul>
	<li>​​​​​​<strong>洗礼的意义有三方面</strong>：</li>
</ul>

<p class="indent3">1) 见证我们已经与主联合，并认同主耶稣基督的死、埋葬及复活（<span class="popup-link" @click = "popUp('pop6')"> 罗6:4-5</span>）</p>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>所以，我们借着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督借着父的荣耀从死里复活一样。<sup class="versenum">5&nbsp;</sup>我们若在他死的形状上与他联合，也要在他复活的形状上与他联合。</p>
<!-- end bible --></div>

<p>2) 见证我们已经重生，罪得赦免，是新造的人（<span class="popup-link" @click = "popUp('pop7')"> 罗 6:4</span>）</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>所以，我们借着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督借着父的荣耀从死里复活一样。</p>
<!-- end bible --></div>

<p>3) 见证我们已经归入基督的身体，成为教会的一分子，并同为基督的肢体（<span class="popup-link" @click = "popUp('pop8')"> 林前 12:13</span>）</p>

<p>&nbsp;</p>

<div class="popup invisible" id="pop8"><!-- begin bible -->
<p><sup class="versenum">3&nbsp;</sup>我们不拘是犹太人，是希腊人，是为奴的，是自主的，都从一位圣灵受洗，成了一个身体，饮于一位圣灵。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul class="forward">
	<li class="forward"><strong>预备心接受洗礼</strong>，并计划参加教会的洗礼班。</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在《信徒动员表》里写下2位你认识且受过洗礼的基督徒，听听他们生命的故事，并了解他们为何接受受洗。另外写下1位还未受洗的弟兄/姊妹的名字，向他们分享今天你所学的，邀请他们与你考虑一同接受洗礼。</li>
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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">福音祷告</h2>

<p class="forward">亲爱的天父，祢从起初就爱我们，并决意使我们与祢和好，在祢里面拥有一切的丰富。感谢祢赐下耶稣基督，为我们流血、舍命、复活，使我们与基督联合，得着新生命，成为天父的儿女。我们愿意接受洗礼，公开表明我们是属于祢的，并且加入教会成为肢体的一部分，同心侍奉祢。我们立志愿意为主而活，奉主耶稣的名祷告，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->