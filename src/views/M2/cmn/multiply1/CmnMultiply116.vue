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
                        <div class="chapter_number ltr"><h1>16.</h1></div>
                        <div class="chapter_title ltr"><h1>作门徒的代价</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课叫我们知道作耶稣的门徒并非一帆风顺，需要付上代价；可能需要经历痛苦与试炼、逼迫或挑战。因为我们是活在一个罪恶的世界，与神的心意背道而驰，而且圣经也提醒我们&ldquo;凡在基督耶稣里立志过敬虔生活的，都会遭受逼迫。&rdquo;（提摩太后书3：12）</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">腓利比书2:5-11</p>

<p class="back bible"><sup>5</sup>你们当以基督耶稣的心为心。<sup>6</sup>他本有神的形像，不以自己与神同等为强夺的，<sup>7</sup>反倒虚己，取了奴仆的形像，成为人的样式。<sup>8</sup>既有人的样子，就自己卑微，存心顺服，以致于死，且死在十字架上。<sup>9</sup>所以神将他升为至高，又赐给他那超乎万名之上的名，<sup>10</sup>叫一切在天上的、地上的和地底下的，因耶稣的名无不屈膝，<sup>11</sup>无不口称耶稣基督为主，使荣耀归与父神。</p>

</div>

<ul class="back">
	<li class="back">让我们用诗歌来赞美主耶稣，并用信心宣告关于耶稣基督的真理！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 林后9:7</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">上帝在乎所有失丧的人。然而，我们周围有许多地方并没有耶稣的门徒，作世人光和盐的见证，让人看见上帝的爱。作为耶稣的跟随者，上帝也呼召我们心系所有失丧的人。让我们也存怜悯的心，去接触并关心身边那些失丧的人！相信上帝将使用我们在各城各区建立教会，将福音带给每个人！</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><ul>
	<li class="up">
	<p><strong>+ 故事背景</strong></p>
	</li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">有一大群人跟随耶稣，他们听见耶稣医治人和喂饱一大群人的神迹，就来接近祂，想要从祂那里得好处。但耶稣知道他们的心，晓得这些人并非愿意毫无保留地跟随祂。祂要人晓得：跟随祂意味着要舍弃一切。</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音14:25-33》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音14:25-33</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">25&nbsp;</sup>有极多的人和耶稣同行。他转过来对他们说：<sup class="versenum">26&nbsp;</sup>&ldquo;人到我这里来，若不爱我胜过爱自己的父母、妻子、儿女、弟兄、姐妹和自己的性命，就不能做我的门徒。<sup class="versenum">27&nbsp;</sup>凡不背着自己十字架跟从我的，也不能做我的门徒。<sup class="versenum">28&nbsp;</sup>你们哪一个要盖一座楼，不先坐下算计花费，能盖成不能呢？<sup class="versenum">29&nbsp;</sup>恐怕安了地基，不能成功，看见的人都笑话他，<sup class="versenum">30&nbsp;</sup>说：&lsquo;这个人开了工，却不能完工！&rsquo;<sup class="versenum">31&nbsp;</sup>或是一个王出去和别的王打仗，岂不先坐下酌量，能用一万兵去敌那领二万兵来攻打他的吗？<sup class="versenum">32&nbsp;</sup>若是不能，就趁敌人还远的时候，派使者去求和息的条款。<sup class="versenum">33&nbsp;</sup>这样，你们无论什么人，若不撇下一切所有的，就不能做我的门徒。</p>
<!-- end bible -->

<p></p>

</div>


<button id="MC2/cmn/video/multiply1/116.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音14:25-33&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对跟随耶稣有什么新的认识？</li>
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
<div id="Summary3" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<ol>
	<li class="nobreak-final-final">跟随基督可以得到永恒且无可比拟的好处：罪得赦免，蒙救赎，并在万王之王、万主之主里得平安。但是，作耶稣的门徒并不会让人免于痛苦和试炼，因为我们活在一个罪恶的世界里。跟随基督也面临逼迫和挑战，所有立志在基督耶稣里过敬虔生活的都必遭受逼迫。(阅读<span class="popup-link" @click = "popUp('pop2')"> 彼得前书4:12-16</span>、

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>亲爱的弟兄啊，有火炼的试验临到你们，不要以为奇怪，似乎是遭遇非常的事；<sup class="versenum">13&nbsp;</sup>倒要欢喜，因为你们是与基督一同受苦，使你们在他荣耀显现的时候，也可以欢喜快乐。<sup class="versenum">14&nbsp;</sup>你们若为基督的名受辱骂，便是有福的，因为神荣耀的灵常住在你们身上。<sup class="versenum">15&nbsp;</sup>你们中间却不可有人因为杀人、偷窃、作恶、好管闲事而受苦。<sup class="versenum">16&nbsp;</sup>若为做基督徒受苦，却不要羞耻，倒要因这名归荣耀给神。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop3')"> 彼得前书4:19</span>，

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>所以，那照神旨意受苦的人要一心为善，将自己灵魂交于那信实的造化之主。</p>
	<!-- end bible --></div>
	让我们从耶稣其中一个亲密的朋友彼得的话中得激励。)</li>
</ol>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward">路加福音14:26-27</p>

<p class="forward bible"><sup>26</sup> &ldquo;人到我这里来，若不爱我胜过爱自己的父母、妻子、儿女、弟兄、姐妹和自己的性命，就不能作我的门徒；<sup>27</sup>凡不背着自己十字架跟从我的，也不能作我的门徒。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="indent">耶稣呼召我们作他的门徒</li>
</ul>

<p class="indent2">门徒就是跟从基督，越来越像基督的人。</p>

<p class="indent3">1) <strong>要以爱彼此服事</strong></p>

<p class="indent3">&ldquo;我赐给你们一条新命令，乃是叫你们彼此相爱；我怎样爱你们，你们也要怎样相爱。你们若有彼此相爱的心，众人因此就认出你们是我的门徒了。&rdquo;</p>

<ul>
	<li class="indent3">彼此相爱是主耶稣门徒的标志。（<span class="popup-link" @click = "popUp('pop4')"> 约13:34-35</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">34&nbsp;</sup>我赐给你们一条新命令，乃是叫你们彼此相爱，我怎样爱你们，你们也要怎样相爱。<sup class="versenum">35&nbsp;</sup>你们若有彼此相爱的心，众人因此就认出你们是我的门徒了。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent3">2)<strong> 要顺服活出真道</strong></p>

<p class="indent3">耶稣回答说：&ldquo;人若爱我，就必遵守我的道；我父也必爱他，并且我们要到他那里去，与他同住。不爱我的人，就不遵守我的道；你们所听见的道，不是我的，乃是差我来之父的道。&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 约14:23-24</span>）</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">23&nbsp;</sup>耶稣回答说：&ldquo;人若爱我，就必遵守我的道，我父也必爱他，并且我们要到他那里去，与他同住。<sup class="versenum">24&nbsp;</sup>不爱我的人就不遵守我的道；你们所听见的道不是我的，乃是差我来之父的道。</p>
<!-- end bible --></div>

<ul class="indent3">
	<li class="forward">只在口头上说自己是基督的门徒是不足够的，必须也要有证明顺服的行动。</li>
	<li class="forward">在口头上称呼主的人不一定都能进天国，只有真正遵行神旨意的人才能进去。</li>
</ul>

<p class="indent2">3) <strong>要成为得人渔夫</strong></p>

<p class="indent3">耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 太 4:19</span>）</p>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">19&nbsp;</sup>耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;</p>
<!-- end bible --></div>

<ul>
	<li class="indent3">&nbsp;耶稣对门徒的呼召是要去得人。我们不可能只跟从主，而不去为主得人。</li>
</ul>

<p class="indent2">4) <strong>要按神旨意祈求</strong></p>

<p class="indent3">&ldquo;你们若常在我里面，我的话也常在你们里面，凡你们所愿意的，祈求就给你们成就。&rdquo;（<span class="popup-link" @click = "popUp('pop7')"> 约15:7</span>）</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">7&nbsp;</sup>你们若常在我里面，我的话也常在你们里面，凡你们所愿意的，祈求，就给你们成就。</p>
<!-- end bible --></div>

<ul>
	<li class="indent3">我们倘若常住在基督里面，也让神的话语常住在我们里面，我们的心思意念就会服从神的旨意。我们所祈求的就是为了要成就神的旨意。</li>
</ul>

<p class="indent2">5)<strong> 要时刻圣灵充满</strong></p>

<p class="indent3">&ldquo;你们当顺着圣灵而行，就不放纵肉体的情欲了。&rdquo;（<span class="popup-link" @click = "popUp('pop8')"> 加5:16</span>）</p>

<div class="popup invisible" id="pop8"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup>我说，你们当顺着圣灵而行，就不放纵肉体的情欲了。</p>
<!-- end bible --></div>

<p>&ldquo;你们若顺从肉体活着，必要死；若靠着圣灵治死身体的恶行，必要活着。&rdquo;（<span class="popup-link" @click = "popUp('pop9')"> 罗8:13</span>）</p>

<div class="popup invisible" id="pop9"><!-- begin bible -->
<p><sup class="versenum">13&nbsp;</sup>你们若顺从肉体活着，必要死；若靠着圣灵治死身体的恶行，必要活着。</p>
<!-- end bible --></div>

<ul>
	<li class="indent3">我们若愿意时刻接受圣灵的管理、从圣灵得力，我们才能过着得胜的生活。靠着我们自己的力量，我们必定失败。</li>
</ul>

<p class="indent2">6) <strong>要与主同受苦难</strong></p>

<p class="indent3">&ldquo;因为你们蒙恩，不但得以信服基督，并要为他受苦。&rdquo;（<span class="popup-link" @click = "popUp('pop10')"> 腓 1:29</span>）</p>

<div class="popup invisible" id="pop10"><!-- begin bible -->
<p><sup class="versenum">29&nbsp;</sup>因为你们蒙恩，不但得以信服基督，并要为他受苦。</p>
<!-- end bible --></div>

<ul class="forward">
	<li class="indent3">为基督受苦，是我们所蒙恩典的一部分。&ldquo;信服基督&rdquo;与&ldquo;为他受苦&rdquo;是配套的，我们不能只要一部分，而不要另一部分。使徒保罗也说：&ldquo;凡立志在基督耶稣里敬虔度日的也都要受逼迫。&rdquo;(<span class="popup-link" @click = "popUp('pop11')"> 提后3:12</span>)

	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>执事只要做一个妇人的丈夫，好好管理儿女和自己的家。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent3">&nbsp;</p>

<ul class="forward">
	<li class="forward"><strong>问题与讨论</strong>

	<ul class="forward">
		<li class="forward">分享你生命中什么是最重要的？为什么？</li>
		<li class="forward">当你决定跟随耶稣的那天起，是否遭受任何反对或逼迫？你是如何面对的？</li>
		<li class="forward">在跟随耶稣的过程中，目前有什么是你需要舍弃（或者放下的）？</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">为那些正遭受逼迫的国家、教会或弟兄姊妹祷告。</li>
	<li class="forward">写下一项为耶稣放下或舍弃的事物，并操练依靠耶稣以胜过试探。</li>
	<li class="forward">找2位有见证有美名的弟兄或姊妹，请他们分享他们作耶稣门徒的代价，并为你祝福祷告。</li>
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


<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p class="forward">亲爱的主，感谢祢用舍己的爱为我牺牲自己，求主帮助我能委身于祢，专一爱祢，忠心于祢。我愿将自己的一生奉献给祢，求祢时刻提醒我，祢是我生命的主，祢更是我的大牧者，我要紧紧跟随祢，作祢的门徒，荣耀祢的名。奉主耶稣的名求，阿们。</p>

</div>

<h2 class="forward">&nbsp;</h2>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->