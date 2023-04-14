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
                        <div class="chapter_number ltr"><h1>35.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与哀伤</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太10:1-2</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣叫了十二个门徒来，给他们权柄，能赶逐污鬼，并医治各样的病症。</p>

	<p><sup class="versenum">2&nbsp;</sup>这十二使徒的名：头一个叫<u class="person underline">西门</u>，又称<u class="person underline">彼得</u>，还有他兄弟<u class="person underline">安得烈</u>，<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>，</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>主耶稣吩我们要去使万民作祂的门徒，祂应许圣灵必赐我们能力为祂作见证。我们无法产生运动，因为只有圣灵自己才能做成这事。然而，我们能做的是预备好自己，当圣灵动工时，我们就能与祂同工。感恩，圣灵在各处运行！让我们预备自己，存祷告和敬畏的心与圣灵同行，一起见证天父在这世代所要成就的奇妙作为。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="up">耶稣在加利利的事奉已进入尾声，在这个阶段，从耶稣的本乡开始，耶稣将受到更强烈的拒绝。祂在自己家乡拿撒勒的会堂中，遭到轻蔑和厌弃，以至于祂将自己比做历来在本乡不被尊重的先知（<span class="popup-link" @click = "popUp('pop2')"> 太13:54-58</span>）；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">54&nbsp;</sup>来到自己的家乡，在会堂里教训人，甚至他们都稀奇，说：&ldquo;这人从哪里有这等智慧和异能呢？<sup class="versenum">55&nbsp;</sup>这不是木匠的儿子吗？他母亲不是叫<u class="person underline">马利亚</u>吗？他弟兄们不是叫<u class="person underline">雅各</u>、<u class="person underline">约西</u>、<u class="person underline">西门</u>、<u class="person underline">犹大</u>吗？<sup class="versenum">56&nbsp;</sup>他妹妹们不是都在我们这里吗？这人从哪里有这一切的事呢？&rdquo;<sup class="versenum">57&nbsp;</sup>他们就厌弃他。耶稣对他们说：&ldquo;大凡先知，除了本地、本家之外，没有不被人尊敬的。&rdquo;<sup class="versenum">58&nbsp;</sup>耶稣因为他们不信，就在那里不多行异能了。</p>
	<!-- end bible --></div>
	接下来，作者马太以施洗约翰被杀害的事件将敌对的主题带到高峰，同时也预告了耶稣在地上最后的命运，世人如何对待弥赛亚的先锋也必如何对待弥赛亚。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音14:1-14;&nbsp;马可福音6:30 》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音14:1-14</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>那时，分封的王希律听见耶稣的名声，<sup>2</sup>就对臣仆说：&ldquo;这是施洗的约翰从死里复活，所以这些异能从他里面发出来。&rdquo;<sup>3</sup>起先希律为他兄弟腓力的妻子希罗底的缘故，把约翰拿住锁在监里。<sup>4</sup>因为约翰曾对他说：&ldquo;你娶这妇人是不合理的。&rdquo; <sup>5</sup>希律就想要杀他，只是怕百姓，因为他们以约翰为先知。<sup>6</sup>到了希律的生日，希罗底的女儿在众人面前跳舞，使希律欢喜。<sup>7</sup>希律就起誓，应许随她所求的给她。<sup>8</sup>女儿被母亲所使，就说：&ldquo;请把施洗约翰的头放在盘子里，拿来给我。&rdquo;<sup>9</sup>王便忧愁，但因他所起的誓，又因同席的人，就吩咐给她。<sup>10</sup>于是打发人去，在监里斩了约翰，<sup>11</sup>把头放在盘子里，拿来给了女子，女子拿去给她母亲。<sup>12</sup>约翰的门徒来，把尸首领去埋葬了，就去告诉耶稣。<sup>13</sup>耶稣听见了，就上船从那里独自退到野地里去。众人听见，就从各城里步行跟随他。<sup>14</sup>耶稣出来，见有许多的人，就怜悯他们，治好了他们的病人。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/235.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音14:1-14&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 马可福音6:30</button><div class="collapsed" id ="Text1">

<p><sup>30</sup> 使徒聚集到耶稣那里，将一切所做的事，所传的道全告诉他。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/235-1.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音6:30&nbsp;</button>
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
	<li class="nobreak-final-final">众使徒出去传道的时候，希律王安提帕正在庆祝自己的生日。他大摆宴席，请了千夫长并加利利的首领到宫殿来。又愚蠢地答应要给侄女所求的，因为喜欢她在客人面前跳舞的样子。她询问母亲的意见。正好使她母亲可以逮到机会向施洗约翰报复，便建议她跟希律要施洗约翰的头。希律不想在客人面前丢脸，就答应她的要求，斩了约翰。当时耶稣继续往各城去传道和训练其他门徒（<span class="popup-link" @click = "popUp('pop3')"> 太11:1</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣吩咐完了十二个门徒，就离开那里，往各城去传道、教训人。</p>
	<!-- end bible --></div>
	约翰被斩的消息传到耶稣耳中的同时，众使徒也刚好回来了。耶稣哀悼逝世的约翰，只想和最亲近的领袖团队一起退到旷野。祂展现了在哀伤和耗尽的时候如何领导。</li>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop4')"> 马可福音6:14-34</span>；
	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>约翰责备希律被斩</h3>

	<p><sup class="versenum">14&nbsp;</sup>耶稣的名声传扬出来。<u class="person underline">希律</u>王听见了，就说：&ldquo;施洗的<u class="person underline">约翰</u>从死里复活了，所以这些异能由他里面发出来。&rdquo;<sup class="versenum">15&nbsp;</sup>但别人说是<u class="person underline">以利亚</u>，又有人说是先知，正像先知中的一位。<sup class="versenum">16&nbsp;</sup><u class="person underline">希律</u>听见却说：&ldquo;是我所斩的<u class="person underline">约翰</u>，他复活了。&rdquo;<sup class="versenum">17&nbsp;</sup>先是<u class="person underline">希律</u>为他兄弟<u class="person underline">腓力</u>的妻子<u class="person underline">希罗底</u>的缘故，差人去拿住<u class="person underline">约翰</u>，锁在监里，因为<u class="person underline">希律</u>已经娶了那妇人。<sup class="versenum">18&nbsp;</sup><u class="person underline">约翰</u>曾对<u class="person underline">希律</u>说：&ldquo;你娶你兄弟的妻子是不合理的。&rdquo;<sup class="versenum">19&nbsp;</sup>于是<u class="person underline">希罗底</u>怀恨他，想要杀他，只是不能。<sup class="versenum">20&nbsp;</sup>因为<u class="person underline">希律</u>知道<u class="person underline">约翰</u>是义人，是圣人，所以敬畏他，保护他，听他讲论就多照着行，并且乐意听他。<sup class="versenum">21&nbsp;</sup>有一天，恰巧是<u class="person underline">希律</u>的生日，<u class="person underline">希律</u>摆设筵席，请了大臣和千夫长并加利利做首领的。<sup class="versenum">22&nbsp;</sup><u class="person underline">希罗底</u>的女儿进来跳舞，使<u class="person underline">希律</u>和同席的人都欢喜。王就对女子说：&ldquo;你随意向我求什么，我必给你。&rdquo;<sup class="versenum">23&nbsp;</sup>又对她起誓说：&ldquo;随你向我求什么，就是我国的一半，我也必给你！&rdquo;<sup class="versenum">24&nbsp;</sup>她就出去对她母亲说：&ldquo;我可以求什么呢？&rdquo;她母亲说：&ldquo;施洗<u class="person underline">约翰</u>的头！&rdquo;<sup class="versenum">25&nbsp;</sup>她就急忙进去见王，求他说：&ldquo;我愿王立时把施洗<u class="person underline">约翰</u>的头放在盘子里给我。&rdquo;<sup class="versenum">26&nbsp;</sup>王就甚忧愁，但因他所起的誓，又因同席的人，就不肯推辞，<sup class="versenum">27&nbsp;</sup>随即差一个护卫兵，吩咐拿<u class="person underline">约翰</u>的头来。护卫兵就去，在监里斩了<u class="person underline">约翰</u>，<sup class="versenum">28&nbsp;</sup>把头放在盘子里，拿来给女子，女子就给她母亲。<sup class="versenum">29&nbsp;</sup><u class="person underline">约翰</u>的门徒听见了，就来把他的尸首领去，葬在坟墓里。</p>

	<p><sup class="versenum">30&nbsp;</sup>使徒聚集到耶稣那里，将一切所做的事、所传的道全告诉他。<sup class="versenum">31&nbsp;</sup>他就说：&ldquo;你们来，同我暗暗地到旷野地方去歇一歇。&rdquo;这是因为来往的人多，他们连吃饭也没有工夫。<sup class="versenum">32&nbsp;</sup>他们就坐船，暗暗地往旷野地方去。<sup class="versenum">33&nbsp;</sup>众人看见他们去，有许多认识他们的，就从各城步行，一同跑到那里，比他们先赶到了。<sup class="versenum">34&nbsp;</sup>耶稣出来，见有许多的人，就怜悯他们，因为他们如同羊没有牧人一般，于是开口教训他们许多道理。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 路加福音9:7-11</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>分封的王<u class="person underline">希律</u>听见耶稣所做的一切事，就游移不定，因为有人说是<u class="person underline">约翰</u>从死里复活，<sup class="versenum">8&nbsp;</sup>又有人说是<u class="person underline">以利亚</u>显现，还有人说是古时的一个先知又活了。<sup class="versenum">9&nbsp;</sup><u class="person underline">希律</u>说：&ldquo;<u class="person underline">约翰</u>我已经斩了，这却是什么人，我竟听见他这样的事呢？&rdquo;就想要见他。</p>

	<p><sup class="versenum">10&nbsp;</sup>使徒回来，将所做的事告诉耶稣。耶稣就带他们暗暗地离开那里，往一座城去，那城名叫伯赛大。<sup class="versenum">11&nbsp;</sup>但众人知道了，就跟着他去。耶稣便接待他们，对他们讲论神国的道，医治那些需医的人。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太14:12-13</p>

<p class="forward bible"><sup>12</sup>约翰的门徒来，把尸首领去埋葬了，就去告诉耶稣。<sup>13</sup>耶稣听见了，就上船从那里独自退到野地里去。众人听见，就从各城里步行跟随他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward"><span class="popup-link" @click = "popUp('pop6')"> 马可福音6:20</span>

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>因为<u class="person underline">希律</u>知道<u class="person underline">约翰</u>是义人，是圣人，所以敬畏他，保护他，听他讲论就多照着行，并且乐意听他。</p>
	<!-- end bible --></div>
	记载希律知道约翰是义人，敬畏他，保护他，听他讲论。就多照着行（游移不定），并且乐意听他。新译本的翻译较为清晰：希律惧怕约翰，。。。希律听了约翰的话，就非常困扰，却仍然喜欢听他。但最后希律仍杀害了约翰。从希律对约翰的态度对我们的信仰有何提醒和反思？为什么？</li>
	<li class="forward">当你听到神重用的仆人因基督信仰受逼迫、监禁甚至杀害，你的心情会是如何？为什么你会做这样的感受和反应呢？</li>
	<li class="forward">在人生重大的时刻或是需要做一个关键性的决定时，一般你会怎么做？为什么？耶稣是独自安静祷告，寻求神的旨意，你会这样做吗？为什么？</li>
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
	<li class="forward">为你认识的那些被叫去问话，甚至被囚禁的牧者或弟兄姐妹祷告，求神安慰和医治他们的心。若他们心里有害怕丧胆或后退的，求神坚定他们的心，让他们能以体会基督的爱是何等长阔高深，并知道那叫基督从死里复活的能力是何等浩大，他们的心因此就喜乐和坚固。</li>
	<li class="forward">为教会的牧者/同工，并教会开展的事工，求主保守我们无论在任何境况和处境都靠主常喜乐，有从神而来的平安和喜乐做主，靠主抵挡并站立得住。</li>
	<li class="forward">求主监察你的心，最近什么事让你丧胆、后退，耗尽或是哀伤的，你就一一带到施恩的主面前，并分别一段可以安静退修并与主面对面的时间。同时把你从主领受的话语和安慰写下，下周与组员分享。</li>
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

<p>教会的元首耶稣基督，我们赞美与称谢祢，祢是昔在、今在、以后永在的神！感谢祢以宝血拯救我们，把我们从罪恶当中拯救出来，分别为圣，归入祢的名下，特作你光明的儿女。主啊，我们知道末世的时候，必有许多假先知、异端冒祢的名行异能，甚至连祢的选民都被迷惑了。民攻打民，国攻打国，多处多有地震、瘟疫和饥荒；也因着不法的事增多，人的爱心也渐渐冷淡。求主帮助我们常在祢里面，因为知道离了祢，我们什么也不能做。求主坚定我们在祢里面的爱心和信心，奉主耶稣基督的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->