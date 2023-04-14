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
                        <div class="chapter_number ltr"><h1>20.</h1></div>
                        <div class="chapter_title ltr"><h1>得人行动三</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可1:38-39</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup class="versenum">39&nbsp;</sup>于是在加利利全地，进了会堂，传道、赶鬼。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-CN">主耶稣拒绝众人的寻找</span><span style="background-color:white"><span><span style="color:black"><span>（<span class="popup-link" @click = "popUp('pop2')"> 可1:38</span>）</span></span></span></span><span lang="ZH-CN">，</span><span style="background-color:white"><span><span style="color:black"><span> </span></span></span></span></span></span>

	<div class="popup invisible" id="pop2"><span><span><span style="background-color:white"><span><span style="color:black"><span><!-- begin bible --> </span></span></span></span></span></span>

	<p><span><span><span style="background-color:white"><span><span style="color:black"><span><sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo; </span></span></span></span></span></span></p>
	<span><span><span style="background-color:white"><span><span style="color:black"><span> <!-- end bible --> </span></span></span></span></span></span></div>
	<span><span><span lang="ZH-CN">因为祂奉差遣来服事的目的是要传神的道，而不是为了医病赶鬼。主耶稣甘心服事人，但祂的服事并不是根据人的需要，而是根据神的心意。人都是看重肉身的需要、眼前的好处，主耶稣却要让人看重神的心意过于肉身的需要，留意永恒的事情过于眼前的好处，并把人带回到神永远的计划里。</span></span></span></li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶稣非常清楚知道祂来到世上的使命，耶稣的每项事工都是应验了旧约中的预言，证明了祂是从上而来、有权柄、有能力。虽然耶稣的名声传遍了周围地方，许多有需要的人涌到祂的面前，病得医治，鬼被赶出。与此同时反对祂的势力也渐渐的形成。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音5:1-11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音5:1-11</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>耶稣站在革尼撒勒湖边，众人拥挤他，要听　神的道。<sup>2</sup>他见有两只船湾在湖边，打鱼的人却离开船洗网去了。<sup>3</sup>有一只船是西门的，耶稣就上去，请他把船撑开，稍微离岸，就坐下，从船上教训众人。<sup>4</sup>讲完了，对西门说：&ldquo;把船开到水深之处，下网打鱼。&rdquo;<sup>5</sup>西门说：&ldquo;夫子，我们整夜劳力，并没有打着什么。但依从你的话，我就下网。&rdquo;<sup>6</sup>他们下了网，就圈住许多鱼，网险些裂开，<sup>7</sup>便招呼那只船上的同伴来帮助。他们就来把鱼装满了两只船，甚至船要沉下去。<sup>8</sup>西门彼得看见，就俯伏在耶稣膝前，说：&ldquo;主啊，离开我，我是个罪人！&rdquo;<sup>9</sup>他和一切同在的人都惊讶这一网所打的鱼。<sup>10</sup>他的伙伴西庇太的儿子雅各、约翰，也是这样。耶稣对西门说：&ldquo;不要怕！从今以后，你要得人了。&rdquo;<sup>11</sup>他们把两只船拢了岸，就撇下所有的，跟从了耶稣。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/220.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音5:1-11&nbsp;</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣到门徒的工作场所事工&mdash;&mdash;彼得的船上。祂继续提供门徒在职训练，要使他们能得人如得鱼。耶稣一早就到了，正值众人来购买前晚刚打捞上来的新鲜鱼货。祂把握机会趁势举办了一场&ldquo;露天&rdquo;的外展宣教活动。祂并没有主动聚集群众，只是去了众人聚集的地方，把当地进行的活动变成一个得人和训练门徒的机会。有趣的是彼得已回去做捕鱼的工作。有可能是他正在挣扎是否要委身跟随耶稣去传道。但是彼得有一颗愿意顺服耶稣的心。他看出了耶稣是神。神是圣洁，彼得知道自己有罪，不敢接近神。纵然彼得叫耶稣远离他，当耶稣再次呼召彼得，他接受了并放下一切，全时间来跟随耶稣，最后他却成了与耶稣最亲近的门徒之一。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路5:10-11</p>

<p class="forward bible"><sup>10</sup>他的伙伴西庇太的儿子雅各、约翰，也是这样。耶稣对西门说：&ldquo;不要怕！从今以后，你要得人了。&rdquo;<sup>11</sup>他们把两只船拢了岸，就撇下所有的，跟从了耶稣。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">对圣经要我们去做的事，你会迟疑吗？是否要靠找印证来试探神？</li>
	<li class="forward">你认为神与你专业之间有关系吗？为什么？当神的带领与我们的专业或经历有冲突的时候，我们的反应是如何（耶稣对门徒说：&ldquo;不要怕！从今以后，你要得人了。&rdquo;）？你有没有与西门彼得相似的经历（在自己专业的领域里，经历了神的介入）？</li>
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
	<li class="forward">每天开始新的一天时，先来到施恩的神面前，求祂赐你聪明智慧和各样的技巧，并让祂介入你的专业和事奉，使你满得祂的能力与同在，真实经历祂的真实。</li>
	<li class="forward">在你事奉或所在的岗位上，试想神会如何使用你的恩赐、专业、才干、祷告和金钱来参与教会事工需要与神国的拓展，并为主成为得人的渔夫。请把它写下，下周在小组分享。</li>
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

<p>拯救世人的主耶稣基督，我们称谢祢，祢是我们的救赎主，祢以宝血把我们从罪恶当中拯救出来，让我们经历祢的大爱与赦免。求主耶稣常常光照并监察我们内心的败坏与不信，我们承认很多时候我们的信仰与生活、行事为人会与祢的心意和使命不相干，甚至我们不相信祢能在我们的专业上为我们做什么。求主赦免我们的自负与不信，帮助我们做主门徒，并使人也作主门徒。奉主耶稣基督的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->