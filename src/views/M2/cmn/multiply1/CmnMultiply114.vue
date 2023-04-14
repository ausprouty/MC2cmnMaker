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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>记念耶稣舍命</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课让我们知道是耶稣亲自向门徒示范守圣餐，以记念祂在十字架上的舍命。要我们记念祂的死，并活出祂复活的生命。同时，提醒我们圣餐的必要性与重要性。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">提摩太前书2:1-6</p>

<p class="back bible"><sup>1</sup>我劝你第一要为万人恳求、祷告、代求、祝谢，<sup>2</sup>为君王和一切在位的，也该如此，使我们可以敬虔、端正，平安无事地度日。<sup>3</sup>这是好的，在　神我们救主面前可蒙悦纳。<sup>4</sup>他愿意万人得救，明白真道。<sup>5</sup>因为只有一位　神，在　神和人中间，只有一位中保，乃是降世为人的基督耶稣。<sup>6</sup>他舍自己作万人的赎价，到了时候，这事必证明出来。</p>

</div>

<ul class="back">
	<li class="back">让我们诵读经文两遍，感谢主耶稣为世人所成就的一切，并以诗歌赞美神。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒2:42</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>都恒心遵守使徒的教训，彼此交接、掰饼、祈祷。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">希伯来书10:23-25提醒我们：&ldquo;23也要坚守我们所承认的指望，不至摇动，因为那应许我们的是信实的。24又要彼此相顾，激发爱心，勉励行善。25你们不可停止聚会，好像那些停止惯了的人，倒要彼此劝勉。既知道那日子临近，就更当如此。&rdquo; 。是的，神并非呼召我们一人独处，乃是将我们众人召聚在一起。我们每日面临许多挑战，需要其他弟兄姐妹的鼓励、督责，勉励一起顺服神。在小组中就是一同跟随耶稣最好的方式，因此我们需要应当常常彼此劝勉，不可停止聚会！</p>

</div>

<h2 class="back">&nbsp;</h2>

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

<p class="up">上帝赐给犹太人一个特别的节庆，称为&ldquo;逾越节&rdquo;，为要记念祂拯救他们脱离在埃及为奴的生活。耶稣在十字架上受死的前一晚，祂与门徒一同守逾越节，并说明逾越节的意义就是祂舍命、为要拯救世人。</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音22:14-20》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音22:14-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">14&nbsp;</sup>时候到了，耶稣坐席，使徒也和他同坐。<sup class="versenum">15&nbsp;</sup>耶稣对他们说：&ldquo;我很愿意在受害以先和你们吃这逾越节的筵席。<sup class="versenum">16&nbsp;</sup>我告诉你们，我不再吃这筵席，直到成就在神的国里。&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣接过杯来，祝谢了，说：&ldquo;你们拿这个，大家分着喝。<sup class="versenum">18&nbsp;</sup>我告诉你们，从今以后，我不再喝这葡萄汁，直等神的国来到。&rdquo;<sup class="versenum">19&nbsp;</sup>又拿起饼来，祝谢了，就掰开，递给他们，说：&ldquo;这是我的身体，为你们舍的。你们也应当如此行，为的是记念我。&rdquo;<sup class="versenum">20&nbsp;</sup>饭后也照样拿起杯来，说：&ldquo;这杯是用我血所立的新约，是为你们流出来的。</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/114.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音22:14-20&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
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
<div id="Summary3" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">耶稣亲自向门徒展示如何纪念他在十字架上舍命的方式。&ldquo;拿起饼来&rdquo; 这饼是祂为我们舍的身体。&ldquo;拿起葡萄酒或葡萄汁&rdquo;这杯是祂为我们所流的血，并打开通往上帝的一条新路。祂也命令门徒要如此行，为的是记念祂。在哥<span class="popup-link" @click = "popUp('pop2')"> 林多前书11:23-30</span>中，

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>我当日传给你们的，原是从主领受的，就是主耶稣被卖的那一夜，拿起饼来，<sup class="versenum">24&nbsp;</sup>祝谢了，就掰开，说：&ldquo;这是我的身体，为你们舍的。你们应当如此行，为的是记念我。&rdquo;<sup class="versenum">25&nbsp;</sup>饭后，也照样拿起杯来，说：&ldquo;这杯是用我的血所立的新约。你们每逢喝的时候，要如此行，为的是记念我。&rdquo;<sup class="versenum">26&nbsp;</sup>你们每逢吃这饼、喝这杯，是表明主的死，直等到他来。<sup class="versenum">27&nbsp;</sup>所以，无论何人，不按理吃主的饼、喝主的杯，就是干犯主的身、主的血了。<sup class="versenum">28&nbsp;</sup>人应当自己省察，然后吃这饼、喝这杯。<sup class="versenum">29&nbsp;</sup>因为人吃喝，若不分辨是主的身体，就是吃喝自己的罪了。<sup class="versenum">30&nbsp;</sup>因此，在你们中间有好些软弱的与患病的，死的也不少。</p>
	<!-- end bible --></div>
	我们看见保罗在新建立的教会中，也教导所有新信徒遵守耶稣的命令。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward">哥林多前书11:26</p>

<p class="forward bible">你们每逢吃这饼，喝这杯，是表明主的死，直等到他来。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward"><strong>认识圣餐的意义</strong></li>
</ul>

<p class="indent2">主耶稣基督在被卖的那一个晚上，设立圣餐，命令祂的门徒遵守，因此，若是还没有信主受洗的人，是不能领受主耶稣的饼和杯，以免吃喝自己的罪。领受圣餐为的是记念主耶稣基督的救恩，直到祂的再来。</p>

<p class="indent2">领受圣餐的程序乃是吃主的饼和喝主的杯，而守圣餐的意义为：</p>

<p class="indent3">1) 饼代表主的身体，擘开饼代表主的身体为我们舍命。杯内的葡萄汁代表主的血，为我们赎罪，也是成就所立的新约，使我们在新约中蒙福。(<span class="popup-link" @click = "popUp('pop3')"> 林前 11:24-25</span>)</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">24&nbsp;</sup>祝谢了，就掰开，说：&ldquo;这是我的身体，为你们舍的。你们应当如此行，为的是记念我。&rdquo;<sup class="versenum">25&nbsp;</sup>饭后，也照样拿起杯来，说：&ldquo;这杯是用我的血所立的新约。你们每逢喝的时候，要如此行，为的是记念我。&rdquo;</p>
<!-- end bible --></div>

<p>2) 吃这饼，喝这杯，表明我们与主联合，主在我们里面，我们在主里面。（<span class="popup-link" @click = "popUp('pop4')"> 约 6:56</span>）</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">56&nbsp;</sup>吃我肉、喝我血的人常在我里面，我也常在他里面。</p>
<!-- end bible --></div>

<p>3) 吃这饼，喝这杯，也宣告主救赎的恩典，及至等候主的再来。(<span class="popup-link" @click = "popUp('pop5')"> 林前11:26</span>)</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">26&nbsp;</sup>你们每逢吃这饼、喝这杯，是表明主的死，直等到他来。</p>
<!-- end bible --></div>

<p>4) 吃这饼，喝这杯，也宣告我们虽多，独特不同，但却同为基督一个身体的不用肢体。（<span class="popup-link" @click = "popUp('pop6')"> 林前10:16-17</span>）</p>

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup>我们所祝福的杯，岂不是同领基督的血吗？我们所掰开的饼，岂不是同领基督的身体吗？<sup class="versenum">17&nbsp;</sup>我们虽多，仍是一个饼、一个身体，因为我们都是分受这一个饼。</p>
<!-- end bible --></div>

<ul class="forward">
	<li class="forward"><strong>一般教会实行圣餐的方式如下</strong>：

	<ul class="forward">
		<li class="forward">诵读哥<span class="popup-link" @click = "popUp('pop7')"> 林多前书11:23-30</span>。

		<div class="popup invisible" id="pop7"><!-- begin bible -->
		<p><sup class="versenum">23&nbsp;</sup>我当日传给你们的，原是从主领受的，就是主耶稣被卖的那一夜，拿起饼来，<sup class="versenum">24&nbsp;</sup>祝谢了，就掰开，说：&ldquo;这是我的身体，为你们舍的。你们应当如此行，为的是记念我。&rdquo;<sup class="versenum">25&nbsp;</sup>饭后，也照样拿起杯来，说：&ldquo;这杯是用我的血所立的新约。你们每逢喝的时候，要如此行，为的是记念我。&rdquo;<sup class="versenum">26&nbsp;</sup>你们每逢吃这饼、喝这杯，是表明主的死，直等到他来。<sup class="versenum">27&nbsp;</sup>所以，无论何人，不按理吃主的饼、喝主的杯，就是干犯主的身、主的血了。<sup class="versenum">28&nbsp;</sup>人应当自己省察，然后吃这饼、喝这杯。<sup class="versenum">29&nbsp;</sup>因为人吃喝，若不分辨是主的身体，就是吃喝自己的罪了。<sup class="versenum">30&nbsp;</sup>因此，在你们中间有好些软弱的与患病的，死的也不少。</p>
		<!-- end bible --></div>
		</li>
		<li class="forward">花一段时间承认自己的罪。</li>
		<li class="forward">说明圣餐中饼、杯的意义，存感恩的心一起领受饼和杯。</li>
		<li class="forward">牧者带领祷告并感谢主耶稣为我们所成就的事。</li>
	</ul>
	</li>
</ul>

<p class="forward">&nbsp;</p>

<ul class="forward">
	<li class="forward"><strong>观察与讨论</strong>

	<ul class="forward">
		<li class="forward">分享你对圣餐的认识？教会的圣餐主日如何进行？你个人的感受为何？</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">在《信徒动员表》中写下2位弟/姐妹，本周找时间与他们分享今天学习的内容。</li>
	<li class="forward">请按照教会的要求参与圣餐。</li>
	<li class="forward">观察并记录所在教会的牧者如何执行圣餐，以后在小组中分享。</li>
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

<p class="forward">亲爱的天父，感谢祢赐下耶稣基督，为世人的罪，舍命流血，且死在十字架上，埋葬了，第三天从死里复活。感谢祢应许凡接受主耶稣的，都可以成为神的儿女，并且有永生。每当我们领受圣餐，是为要记念主，表明主的死，并直等到主的再来。奉主耶稣的名求，阿们。</p>

</div>

<h2 class="forward">&nbsp;</h2>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->