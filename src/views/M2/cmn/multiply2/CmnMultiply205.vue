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
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>年轻耶稣（作木匠）</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路2:52</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">52&nbsp;</sup>耶稣的智慧和身量，并神和人喜爱他的心，都一齐增长。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">上帝在基督里赐给我们各样的属灵的福气（<span class="popup-link" @click = "popUp('pop8')"> 弗1:1-14</span>），

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>奉神旨意做基督耶稣使徒的<u class="person underline">保罗</u>，写信给在以弗所的圣徒，就是在基督耶稣里有忠心的人。<sup class="versenum">2&nbsp;</sup>愿恩惠、平安从神我们的父和主耶稣基督归于你们！</p>

	<p><sup class="versenum">3&nbsp;</sup>愿颂赞归于我们主耶稣基督的父神！他在基督里曾赐给我们天上各样属灵的福气，<sup class="versenum">4&nbsp;</sup>就如神从创立世界以前在基督里拣选了我们，使我们在他面前成为圣洁，无有瑕疵；<sup class="versenum">5&nbsp;</sup>又因爱我们，就按着自己意旨所喜悦的，预定我们借着耶稣基督得儿子的名分，<sup class="versenum">6&nbsp;</sup>使他荣耀的恩典得着称赞。这恩典是他在爱子里所赐给我们的。<sup class="versenum">7&nbsp;</sup>我们借这爱子的血得蒙救赎，过犯得以赦免，乃是照他丰富的恩典。<sup class="versenum">8&nbsp;</sup>这恩典是神用诸般智慧聪明，充充足足赏给我们的，<sup class="versenum">9&nbsp;</sup>都是照他自己所预定的美意，叫我们知道他旨意的奥秘，<sup class="versenum">10&nbsp;</sup>要照所安排的，在日期满足的时候，使天上、地上一切所有的，都在基督里面同归于一。<sup class="versenum">11&nbsp;</sup>我们也在他里面得了基业，这原是那位随己意行做万事的，照着他旨意所预定的，<sup class="versenum">12&nbsp;</sup>叫他的荣耀从我们这首先在基督里有盼望的人，可以得着称赞。<sup class="versenum">13&nbsp;</sup>你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。<sup class="versenum">14&nbsp;</sup>这圣灵是我们得基业的凭据，直等到神之民被赎，使他的荣耀得着称赞。</p>
	<!-- end bible --></div>
	使我们得以进入祂的家中，称为祂的儿女。虽然生活不尽都顺利并充满未知数，但神是我们的力量，是我们的避难所，是我们随时的帮助。主耶稣祂已应许我们：祂胜过了世界，在祂里面我们有十分的平安和勇气，使我们可以面对各样的挑战和困境，并能靠祂站立得住！（<span class="popup-link" @click = "popUp('pop3')"> 约14:27</span>）

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>我留下平安给你们，我将我的平安赐给你们。我所赐的不像世人所赐的，你们心里不要忧愁，也不要胆怯。</p>
	<!-- end bible --></div>
	</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣返回拿撒勒城，这是耶稣长大的家乡；祂首先到会堂去教训人，但是得来的反应却是嘲笑和鄙视，而不是希奇祂的力量。&ldquo;他们处处与祂为难&rdquo;，他们讥讽耶稣，以他的出身背景为话柄，不满祂的言行举止。</span></span></span></p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马太福音13:55-56; 诗篇69:7-12;马可福音6:3》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马太福音13:55-56</button><div class="collapsed" id ="Text0">

<p><sup>55</sup> 这不是木匠的儿子吗？他母亲不是叫马利亚吗？他弟兄们不是叫雅各、约西（注：有古卷作&ldquo;约瑟&rdquo;）、西门、犹大吗？<sup>56</sup>他妹妹们不是都在我们这里吗？这人从哪里有这一切的事呢？&rdquo;</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/205.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音13:55-56&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 诗篇69:7-12</button><div class="collapsed" id ="Text1">

<p><sup>7</sup>因我为你的缘故受了辱骂，满面羞愧。<sup>8</sup>我的弟兄看我为外路人，我的同胞看我为外邦人。<sup>9</sup>因我为你的殿心里焦急，如同火烧，并且辱骂你人的辱骂都落在我身上。<sup>10</sup>我哭泣，以禁食刻苦我心，这倒算为我的羞辱。<sup>11</sup>我拿麻布当衣裳，就成了他们的笑谈。<sup>12</sup>坐在城门口的谈论我，酒徒也以我为歌曲。</p>

<p></p>

</div>

<button id="Button2" type="button" class="collapsible bible">读两遍 马可福音6:3</button><div class="collapsed" id ="Text2">

<p><sup>3</sup>这不是那木匠吗？不是马利亚的儿子雅各、约西、犹大、西门的长兄吗？他妹妹们不也是在我们这里吗？&rdquo;他们就厌弃他。（注：&ldquo;厌弃他&rdquo;原文作&ldquo;因他跌倒&rdquo;）</p>

<p></p>

</div>

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

<p class="up">&nbsp;</p>

<ul>
	<li class="nobreak-final-final">关于耶稣青少年时期的生活，圣经并没有提到很多，但是我们可以推测祂在平常的犹太人大家庭中长大，是家中的长子（<span class="popup-link" @click = "popUp('pop5')"> 可6:3</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>这不是那木匠吗？不是<u class="person underline">马利亚</u>的儿子<u class="person underline">雅各</u>、<u class="person underline">约西</u>、<u class="person underline">犹大</u>、<u class="person underline">西门</u>的长兄吗？他妹妹们不也是在我们这里吗？&rdquo;他们就厌弃他。</p>
	<!-- end bible --></div>
	承继约瑟的家业，从事木匠的工作。圣经上说：像我们一样&ldquo;他学了顺从&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 来5:8</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>他虽然为儿子，还是因所受的苦难学了顺从。</p>
	<!-- end bible --></div>
	换句话说，祂接受指正并且应对合宜；遭受兄弟们的侮辱和忽视。约瑟死后，祂变成家庭的经济支柱，直到出来公开事奉之前（<span class="popup-link" @click = "popUp('pop7')"> 可6:3</span>）。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>这不是那木匠吗？不是<u class="person underline">马利亚</u>的儿子<u class="person underline">雅各</u>、<u class="person underline">约西</u>、<u class="person underline">犹大</u>、<u class="person underline">西门</u>的长兄吗？他妹妹们不也是在我们这里吗？&rdquo;他们就厌弃他。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">可6:3</p>

<p class="forward bible">这不是那木匠吗？不是马利亚的儿子雅各、约西、犹大、西门的长兄吗？他妹妹们不也是在我们这里吗？&rdquo;他们就厌弃他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你觉得这些人为什么要列举耶稣家人的名字呢？耶稣如何回应他们的态度？我们从耶稣家乡的人的表现中可以学到什么教训？</li>
	<li class="forward">向家人传福音是特别困难的一件事，你是否有这样的经验？耶稣也曾经受到家人和同乡的拒绝，然而耶稣的家人后来都成为了上帝家中的人，这件事能给你安慰和鼓励吗？请分享你的见证、困难和代祷。</li>
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
	<li class="forward">在《信徒动员表》和《福音行动表》中写下2-3位需要关心的人。另外为你还没认识神的家人或亲友救恩祷告，求神开福音的门，刚强你的心，开口传扬福音。</li>
	<li class="forward">在《福音行动表》列下那些目前反对、取笑和攻击你信仰的人。为他们祷告，求主怜悯和赦免他们，因为他们所做的他们不知道。求主得着他们，甚至有一天他们可以成为被主耶稣大大使用的人。</li>
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

<p><span><span><span lang="ZH-CN">创造宇宙万有的天父，感恩祢赐我生命气息，感谢祢让我在这原生家庭，这个城市，这个国家长大。相信祢不误事并对我生命有最大的美意。爱我的天父啊，我为我的父母和家人感恩，谢谢他们的养育之恩，求祢加倍赐福和保守他们。我也为他们祈求，已经相信祢的，求祢坚定他们的信心并有见证和美名；还没相信祢的，求圣灵开他们的心眼，看见主耶稣是真神，是唯一的救主，并速速回转归向祢。奉主耶稣的名感恩和祷告，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->