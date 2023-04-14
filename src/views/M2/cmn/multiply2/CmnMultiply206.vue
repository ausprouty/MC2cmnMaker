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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>耶稣身份的彰显</h1></div>
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
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动</span></span></span></span></li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可6:3</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>这不是那木匠吗？不是<u class="person underline">马利亚</u>的儿子<u class="person underline">雅各</u>、<u class="person underline">约西</u>、<u class="person underline">犹大</u>、<u class="person underline">西门</u>的长兄吗？他妹妹们不也是在我们这里吗？&rdquo;他们就厌弃他。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">上帝不只爱我们，祂更要我们学像基督，效法祂的模样，像祂一样经历天父，让人从我们身上看见天父的样子（<span class="popup-link" @click = "popUp('pop2')"> 罗8:29</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>因为他预先所知道的人，就预先定下效法他儿子的模样，使他儿子在许多弟兄中做长子；</p>
	<!-- end bible --></div>
	这都是上帝的工作，因祂应许我们：&ldquo;那在你们心里动了善工的，必成全这工&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 腓1:6</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>我深信那在你们心里动了善工的必成全这工，直到耶稣基督的日子。</p>
	<!-- end bible --></div>
	上帝会在你我生命中动工，使我们能像基督，愿我们因这应许大受激励。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">根据施洗约翰的讲论，亚伯拉罕肉身的子孙犹太人并不是因为血统得到救恩，而必须有个人向神的悔改。悔改的心是内里的生命，而结出果子出来是内在生命的外在流露，两者关系紧密。里面生命的改变必会表现在行为上。可见，没有诚心悔改，没有生命的人，不能因洗礼而得赦罪。</span></span></span></p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音3:13-17》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音3:13-17</button><div class="collapsed" id ="Text0">

<p><sup>13</sup>当下，耶稣从加利利来到约旦河，见了约翰，要受他的洗。<sup>14</sup>约翰想要拦住他，说：&ldquo;我当受你的洗，你反倒上我这里来吗？&rdquo;<sup>15</sup>耶稣回答说：&ldquo;你暂且许我，因为我们理当这样尽诸般的义（注：或作&ldquo;礼&rdquo;）。 &rdquo;于是约翰许了他。<sup>16</sup>耶稣受了洗，随即从水里上来。天忽然为他开了，他就看见　神的灵彷佛鸽子降下 ，落在他身上。<sup>17</sup>从天上有声音说：&ldquo;这是我的爱子，我所喜悦的。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/206.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音3:13-17&nbsp;</button>
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
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<ul>
	
	<li class="nobreak-final-final">耶稣开头传道，年纪约有三十岁。依人看来，他是约瑟的儿子，约瑟是希里的儿子（<span class="popup-link" @click = "popUp('pop4')"> 路3:23</span>）。
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>耶稣开头传道，年纪约有三十岁。依人看来，他是<u class="person underline">约瑟</u>的儿子，<u class="person underline">约瑟</u>是<u class="person underline">希里</u>的儿子，</p>
	<!-- end bible --></div>
	耶稣从家乡加利利往南行走三至四天的路程。祂或许还不确定下一步该做什么，但天父带领祂受约翰的施洗。受洗是表示认同传信息的人和所传的信息。</li>
</ul>

<p class="up">百姓的受洗和耶稣的受洗有分别，百姓为表示悔改而受洗，而耶稣为&ldquo;尽诸般的义&rdquo; （在各样事情上顺服上帝）而受洗，有根本不同。耶稣是无罪的，不需悔改，但祂顺服神到完全的地步，即使是表面的礼仪也顺服。耶稣愿意完全顺服天父的带领而受洗，而天父也在耶稣受洗的时候表达了对耶稣的爱，可见他们是彼此相爱的关系。为一切跟随祂的人成为榜样。&nbsp;</p>

<ul>
	<li class="nobreak-final-final">(进深学习：<span class="popup-link" @click = "popUp('pop5')"> 路加福音3:21-23</span>；

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<h3>耶稣受洗</h3>

	<p><sup class="versenum">21&nbsp;</sup>众百姓都受了洗，耶稣也受了洗，正祷告的时候天就开了，<sup class="versenum">22&nbsp;</sup>圣灵降临在他身上，形状仿佛鸽子；又有声音从天上来说：&ldquo;你是我的爱子，我喜悦你。&rdquo;</p>

	<p><sup class="versenum">23&nbsp;</sup>耶稣开头传道，年纪约有三十岁。依人看来，他是<u class="person underline">约瑟</u>的儿子，<u class="person underline">约瑟</u>是<u class="person underline">希里</u>的儿子，</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 马可福音1:9-11</span>)

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>那时，耶稣从加利利的拿撒勒来，在约旦河里受了<u class="person underline">约翰</u>的洗。<sup class="versenum">10&nbsp;</sup>他从水里一上来，就看见天裂开了，圣灵仿佛鸽子降在他身上；<sup class="versenum">11&nbsp;</sup>又有声音从天上来说：&ldquo;你是我的爱子，我喜悦你。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太3:15</p>

<p class="forward bible">耶稣回答说：&ldquo;你暂且许我，因为我们理当这样尽诸般的义（注：或作&ldquo;礼&rdquo;）。 &rdquo;于是约翰许了他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">洗礼的意义是什么？基督徒一定要接受洗礼吗？为什么？</li>
	<li class="forward">你受洗了吗？什么时候？在哪里? 当时你为什么会选择接受洗礼？（若你还没接受洗礼，可以分享还未受洗的原因。）</li>
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
	<li class="forward">在《信徒动员表》里写下2位你认识但还未受洗的教会弟兄姊妹的名字，接下来主动关心并鼓励他们接受洗礼，并安排时间与他们上洗礼课程。</li>
	<li class="forward">花时间思想并记录你的属灵生命成长历程，神曾把哪些人放在你生命中，用圣经和生命的榜样造就、陪伴和督责你？另外你也祷告神，让你可以经历领人归主的喜悦，并使用你同样去陪伴和造就初信者生命成长，成为主的门徒。</li>
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


<h2 class="forward">福音祷告</h2>

<p>亲爱的天父，祢是我们的神，是我们最大的栽培者！我们愿意常在祢里面，明白祢的心意，并向祢祷告。我们愿意在各样事情上顺服祢，我们既然受洗归入祢的名下，就当在生活上活出主耶稣。谢谢祢凡事作了我们的榜样，教导我们不要单顾自己的事，也要顾别人的事，我们愿意顺从祢的榜样和心意，讨祢喜悦，奉主耶稣的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->