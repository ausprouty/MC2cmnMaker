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
                        <div class="chapter_number ltr"><h1>34.</h1></div>
                        <div class="chapter_title ltr"><h1>差遣领袖</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可5:20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>那人就走了，在低加波利传扬耶稣为他做了何等大的事，众人就都稀奇。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣是上帝的儿子，这是鬼一见到耶稣，就这样称呼祂；耶稣有权柄胜过魔鬼撒但的权势，并释放那些被捆绑中的人。在耶稣的眼中，人的价值远超过物质的价值，因为人的价值无法使用物质来衡量。在神眼中人被造是独一无二的，有神的荣美及赋予生命价值和意义。耶稣说祂来，为要拯救失丧的人，使人可以经历不一样和全新的人生。我们当以神的眼光来爱与关心有需要的人群，把他们带到天父的面前，这是神所喜悦的。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">耶稣以撒种的比喻、器皿下的灯以及真正的家人这三段话教导门徒之后，接着作者路加以四个一连串的神迹来彰显出耶稣超越的权柄和身份。耶稣平静风和海的神迹，彰显出祂拥有超越自然的权柄（<span class="popup-link" @click = "popUp('pop2')"> 马太福音8:22-25</span>）；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>耶稣说：&ldquo;任凭死人埋葬他们的死人，你跟从我吧！&rdquo;</p>

	<p><sup class="versenum">23&nbsp;</sup>耶稣上了船，门徒跟着他。<sup class="versenum">24&nbsp;</sup>海里忽然起了暴风，甚至船被波浪掩盖，耶稣却睡着了。<sup class="versenum">25&nbsp;</sup>门徒来叫醒了他，说：&ldquo;主啊，救我们，我们丧命啦！&rdquo;</p>
	<!-- end bible --></div>
	在格拉森这个外邦人的地区从一个被鬼附身的人身上赶出了一群鬼，彰显出祂有主宰邪灵的权柄（<span class="popup-link" @click = "popUp('pop3')"> 马太福音8:26-39</span>）；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>耶稣说：&ldquo;你们这小信的人哪！为什么胆怯呢？&rdquo;于是起来，斥责风和海，风和海就大大地平静了。<sup class="versenum">27&nbsp;</sup>众人稀奇，说：&ldquo;这是怎样的人？连风和海也听从他了！&rdquo;</p>

	<p><sup class="versenum">28&nbsp;</sup>耶稣既渡到那边去，来到加大拉人的地方，就有两个被鬼附的人从坟茔里出来迎着他，极其凶猛，甚至没有人能从那条路上经过。<sup class="versenum">29&nbsp;</sup>他们喊着说：&ldquo;神的儿子，我们与你有什么相干？时候还没有到，你就上这里来叫我们受苦吗？&rdquo;</p>

	<p><sup class="versenum">30&nbsp;</sup>离他们很远，有一大群猪吃食。<sup class="versenum">31&nbsp;</sup>鬼就央求耶稣，说：&ldquo;若把我们赶出去，就打发我们进入猪群吧。&rdquo;<sup class="versenum">32&nbsp;</sup>耶稣说：&ldquo;去吧！&rdquo;鬼就出来，进入猪群。全群忽然闯下山崖，投在海里淹死了。<sup class="versenum">33&nbsp;</sup>放猪的就逃跑进城，将这一切事和被鬼附的人所遭遇的都告诉人。<sup class="versenum">34&nbsp;</sup>合城的人都出来迎见耶稣，既见了，就央求他离开他们的境界。</p>
	<!-- end bible --></div>
	接着祂医治了一个被血漏折磨了十二年的可怜女人，彰显出祂有医治的大能（<span class="popup-link" @click = "popUp('pop8')"> 路加福音8:43-48</span>）；

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">43&nbsp;</sup>有一个女人患了十二年的血漏，在医生手里花尽了她一切养生的，并没有一人能医好她。<sup class="versenum">44&nbsp;</sup>她来到耶稣背后，摸他的衣裳穗子，血漏立刻就止住了。<sup class="versenum">45&nbsp;</sup>耶稣说：&ldquo;摸我的是谁？&rdquo;众人都不承认。<u class="person underline">彼得</u>和同行的人都说：&ldquo;夫子，众人拥拥挤挤紧靠着你。&rdquo;<sup class="versenum">46&nbsp;</sup>耶稣说：&ldquo;总有人摸我，因我觉得有能力从我身上出去。&rdquo;<sup class="versenum">47&nbsp;</sup>那女人知道不能隐藏，就战战兢兢地来俯伏在耶稣脚前，把摸他的缘故和怎样立刻得好了，当着众人都说出来。<sup class="versenum">48&nbsp;</sup>耶稣对她说：&ldquo;女儿，你的信救了你，平平安安地去吧！&rdquo;</p>
	<!-- end bible --></div>
	最后祂命令一个十二岁的女孩从死里复活，彰显出祂有胜过死亡的权柄（<span class="popup-link" @click = "popUp('pop9')"> 路加福音8:40-42</span>、

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">40&nbsp;</sup>耶稣回来的时候，众人迎接他，因为他们都等候他。<sup class="versenum">41&nbsp;</sup>有一个管会堂的，名叫<u class="person underline">睚鲁</u>，来俯伏在耶稣脚前，求耶稣到他家里去，<sup class="versenum">42&nbsp;</sup>因他有一个独生女儿，约有十二岁，快要死了。耶稣去的时候，众人拥挤他。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop10')"> 路加福音8:49-56</span>）。

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">49&nbsp;</sup>还说话的时候，有人从管会堂的家里来，说：&ldquo;你的女儿死了，不要劳动夫子。&rdquo;<sup class="versenum">50&nbsp;</sup>耶稣听见就对他说：&ldquo;不要怕，只要信！你的女儿就必得救。&rdquo;<sup class="versenum">51&nbsp;</sup>耶稣到了他的家，除了<u class="person underline">彼得</u>、<u class="person underline">约翰</u>、<u class="person underline">雅各</u>和女儿的父母，不许别人同他进去。<sup class="versenum">52&nbsp;</sup>众人都为这女儿哀哭捶胸。耶稣说：&ldquo;不要哭，她不是死了，是睡着了。&rdquo;<sup class="versenum">53&nbsp;</sup>他们晓得女儿已经死了，就嗤笑耶稣。<sup class="versenum">54&nbsp;</sup>耶稣拉着她的手，呼叫说：&ldquo;女儿，起来吧！&rdquo;<sup class="versenum">55&nbsp;</sup>她的灵魂便回来，她就立刻起来了。耶稣吩咐给她东西吃。<sup class="versenum">56&nbsp;</sup>她的父母惊奇得很。耶稣嘱咐他们，不要把所做的事告诉人。</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent2">十二位使徒在亲眼目睹耶稣行了这许多惊天动地的神迹后，耶稣将行神迹的能力和权柄赐给了他们，差遣他们出去走遍各乡传扬神国的福音，神迹奇事伴随他们。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音9:1-6; 马太福音10:5-23》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音9:1-6</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>耶稣叫齐了十二个门徒，给他们能力、权柄，制伏一切的鬼，医治各样的病，<sup>2</sup>又差遣他们去宣传　神国的道，医治病人。<sup>3</sup>对他们说：&ldquo;行路的时候，不要带拐杖和口袋，不要带食物和银子，也不要带两件褂子。<sup>4</sup>无论进哪一家，就住在那里，也从那里起行。<sup>5</sup>凡不接待你们的，你们离开那城的时候，要把脚上的尘土跺下去，见证他们的不是。&rdquo;<sup>6</sup>门徒就出去，走遍各乡宣传福音，到处治病。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/234.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音9:1-6&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 马太福音10:5-23</button><div class="collapsed" id ="Text1">

<p><sup>5</sup>耶稣差这十二个人去，吩咐他们说：&ldquo;外邦人的路，你们不要走；撒马利亚人的城，你们不要进；<sup>6</sup>宁可往以色列家迷失的羊那里去。<sup>7</sup>随走随传，说：&lsquo;天国近了！&rsquo;<sup>8</sup>医治病人，叫死人复活，叫长大麻疯的洁净，把鬼赶出去。你们白白地得来，也要白白地舍去。</p>

<p><sup>9</sup>腰袋里不要带金银铜钱。<sup>10</sup>行路不要带口袋，不要带两件褂子，也不要带鞋和拐杖，因为工人得饮食是应当的。<sup>11</sup>你们无论进哪一城，哪一村，要打听那里谁是好人，就住在他家，直住到走的时候。<sup>12</sup>进他家里去，要请他的安。<sup>13</sup>那家若配得平安，你们所求的平安就必临到那家；若不配得，你们所求的平安仍归你们。<sup>14</sup>凡不接待你们、不听你们话的人，你们离开那家或是那城的时候，就把脚上的尘土跺下去 。<sup>15</sup>我实在告诉你们：当审判的日子，所多玛和蛾摩拉所受的，比那城还容易受呢！</p>

<p><sup>16</sup>我差你们去，如同羊进入狼群，所以你们要灵巧像蛇，驯良像鸽子。<sup>17</sup>你们要防备人，因为他们要把你们交给公会，也要在会堂里鞭打你们；<sup>18</sup>并且你们要为我的缘故，被送到诸侯君王面前，对他们和外邦人作见证。<sup>19</sup>你们被交的时候，不要思虑怎样说话，或说什么话。到那时候，必赐给你们当说的话，<sup>20</sup>因为不是你们自己说的，乃是你们父的灵在你们里头说的。<sup>21</sup>弟兄要把弟兄，父亲要把儿子，送到死地；儿女要与父母为敌，害死他们。<sup>22</sup>并且你们要为我的名被众人恨恶，惟有忍耐到底的必然得救。<sup>23</sup>有人在这城里逼迫你们，就逃到那城里去。我实在告诉你们：以色列的城邑，你们还没有走遍，人子就到了。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/234-1.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音10:5-23&nbsp;</button>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">经过好几个月的事工训练，这些领袖已准备好要被差遣出去。他们被设立为领袖，与耶稣在一起，之后要被差去做和祂一样的事。差他们两两出去之前，耶稣清楚地指示该做什么、说什么、停留多久，以及被逼迫时如何回应。如同天父差遣祂去到世界，祂也照样差遣他们出去，并要他们完全倚靠上帝供应所需的一切。这个短期宣教是在自己的国家里，用自己的语言，向自己的人传福音。这是他们被差出去，第一次经验到没有耶稣陪伴，要自己去传福音。之前这一个团队只有耶稣和十二使徒，现在重组成七个团队，其中两两出去的使徒团队有六个，再加上耶稣和其他继续接受训练的门徒组成的一个团队。</p>

<p class="up">（进深学习：<span class="popup-link" @click = "popUp('pop7')"> 马可福音6:7-13</span>）</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">7&nbsp;</sup>耶稣叫了十二个门徒来，差遣他们两个两个地出去，也赐给他们权柄制伏污鬼，<sup class="versenum">8&nbsp;</sup>并且嘱咐他们：&ldquo;行路的时候不要带食物和口袋，腰袋里也不要带钱，除了拐杖以外，什么都不要带；<sup class="versenum">9&nbsp;</sup>只要穿鞋，也不要穿两件褂子。&rdquo;<sup class="versenum">10&nbsp;</sup>又对他们说：&ldquo;你们无论到何处，进了人的家，就住在那里，直到离开那地方。<sup class="versenum">11&nbsp;</sup>何处的人不接待你们，不听你们，你们离开那里的时候，就把脚上的尘土跺下去，对他们作见证。&rdquo;<sup class="versenum">12&nbsp;</sup>门徒就出去，传道叫人悔改，<sup class="versenum">13&nbsp;</sup>又赶出许多的鬼，用油抹了许多病人，治好他们。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">太10:1-2</p>

<p class="forward bible"><sup>1</sup>耶稣叫齐了十二个门徒，给他们能力、权柄，制伏一切的鬼，医治各样的病，<sup>2</sup>又差遣他们去宣传　神国的道，医治病人。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><p>+ 耶稣要门徒学习</p></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>耶稣要门徒学习依靠神的供应，过一个俭朴的生活，而有别于当代一些四处旅行，靠着宗教或哲学教导来赚钱的人。&ldquo;把脚上的尘土垛下去&rdquo;是犹太人离开外邦人居住的地方时所做的一个象征性的动作，表示他们和外邦人的不洁毫无关系。门徒的这种动作等于是在说，拒绝福音的人被看作是上帝子民以外的人，这个动作也宣告了上帝的审判。（引自：http://ocochome.info）</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣吩咐门徒传道途中什么都不要带，可以应用到我们现在的处境吗？耶稣这样吩咐的重点是什么？我们该如何应用才恰当？</li>
	<li class="forward">当教会处在逼迫之中，传讲主道，随时被抓拿、盘问，甚至下到监里。这段经文给我们什么安慰？基督徒如何在患难中支取主的应许？</li>
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
	<li class="forward">为你所知道在国内受逼迫的教会和牧者传道祷告，求主坚定祂的教会和儿女，让他们在执政掌权者面前蒙恩宠有美名，并成为当地的光和盐。也求主照顾那些被囚禁的牧者传道的家人，坚定他们在基督里的信心，靠主站立得住。</li>
	<li class="forward">为教会的布道与宣教事工祷告，求神给教会牧者同工异象使命，教会信徒积极参与大使命，有颗乐意祷告、奉献的心，并分别一段时间参与短宣，经历神能力的同在与传福音的喜乐。</li>
	<li class="forward">与组长做一个短宣计划，带领初信者和门徒有个短期出外布道的行动，一起有传福音的体验和团队配搭服事的机会。</li>
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

<p>使无变为有的神，在祢没有难成的事，信靠祢的，必能在祢里面得着满足和信心。天父啊，当我们在遭遇逼迫患难，或在惊慌失措的时候，求祢开我们的心眼，让我们看见在祢必有预备，我们能灵巧像蛇，驯良像鸽子。因我们相信无论在任何的境况中，祢都没有离弃我们，祢向我们所存的意念是好的，祢是赐平安和信心的主。求主赐我们勇敢的心，成为在各处撒下平安福音种子的使者，把祢预备好的人带到天父的面前，同得喜乐和奖赏。感恩祷告是奉主耶稣基督的圣名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->