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
                        <div class="chapter_number ltr"><h1>21.</h1></div>
                        <div class="chapter_title ltr"><h1>得人行动四</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路5:10-11</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>他的伙伴<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>、<u class="person underline">约翰</u>也是这样。耶稣对<u class="person underline">西门</u>说：&ldquo;不要怕，从今以后你要得人了。&rdquo;<sup class="versenum">11&nbsp;</sup>他们把两只船拢了岸，就撇下所有的，跟从了耶稣。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">人若看见基督的丰满，就必认识自己的败坏；我们越认识主，也必越觉得自己的败 坏。所以神要我们脱离罪恶，并不是要我们消极的对付自己，乃是要积极的看见基督的赦免与能力。当彼得俯伏在耶稣膝前，说：&ldquo;主啊，离开我，我是个罪人！&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 路5:8</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>看见，就俯伏在耶稣膝前，说：&ldquo;主啊！离开我，我是个罪人！&rdquo;</p>
	<!-- end bible --></div>
	耶稣非但没有责备，反而赋予他生命新的意义。他们因此撇下一切跟随耶稣，成为得人的渔夫。今天神呼召你和我，也要我们成为得人的渔夫。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">大痳疯是一种皮肤溃烂的疾病，在当时被认为是一种可怕的传染病。 当时麻疯病人的处境十分可怜﹔得了麻疯病不只意味着身体受折磨，更残酷的是被社会、人群的弃绝。犹太人更视大麻疯为不洁净，认为一定是得罪神了才会染病。病人因此常被赶到山区，与人隔离。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音5:12-16》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音5:12-16</button><div class="collapsed" id ="Text0">

<p><sup>12</sup>有一回，耶稣在一个城里，有人满身长了大麻疯，看见他，就俯伏在地，求他说：&ldquo;主若肯，必能叫我洁净了。&rdquo;<sup>13</sup>耶稣伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;大麻疯立刻就离了他的身。<sup>14</sup>耶稣嘱咐他：&ldquo;你切不可告诉人，只要去把身体给祭司察看，又要为你得了洁净，照摩西所吩咐的献上礼物，对众人作证据。&rdquo;<sup>15</sup>但耶稣的名声越发传扬出去。有极多的人聚集来听道，也指望医治他们的病。<sup>16</sup>耶稣却退到旷野去祷告。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/221.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音5:12-16&nbsp;</button>
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
	<li class="nobreak-final-final">耶稣和门徒走遍各城各乡。有一次在一个城里，耶稣遇见一个全身长满大麻疯的人。麻疯病是一种容易传染的疾病。染上这种疾病的人会被社会和宗教群体排斥，人生了无希望。这些人不但被整个社会拒绝，也被认为是上帝定罪的人，因此只有上帝能医好这种疾病。耶稣动了怜悯的心，并不害怕麻疯病。祂爱这群被社会弃绝、讨厌的人，并还要得着这些人。祂嘱咐这人切不可告诉人只把身体给祭司察看，对祭司作证据，让祭司知道弥赛亚已经来到（摩西律法：<span class="popup-link" @click = "popUp('pop7')"> 利14:1-20</span>）。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶和华晓谕<u class="person underline">摩西</u>说：<sup class="versenum">2&nbsp;</sup>&ldquo;长大麻风得洁净的日子，其例乃是这样：要带他去见祭司，<sup class="versenum">3&nbsp;</sup>祭司要出到营外察看，若见他的大麻风痊愈了，<sup class="versenum">4&nbsp;</sup>就要吩咐人为那求洁净的拿两只洁净的活鸟和香柏木、朱红色线并牛膝草来。<sup class="versenum">5&nbsp;</sup>祭司要吩咐用瓦器盛活水，把一只鸟宰在上面。<sup class="versenum">6&nbsp;</sup>至于那只活鸟，祭司要把它和香柏木、朱红色线并牛膝草一同蘸于宰在活水上的鸟血中，<sup class="versenum">7&nbsp;</sup>用以在那长大麻风求洁净的人身上洒七次，就定他为洁净，又把活鸟放在田野里。<sup class="versenum">8&nbsp;</sup>求洁净的人当洗衣服，剃去毛发，用水洗澡，就洁净了，然后可以进营，只是要在自己的帐篷外居住七天。<sup class="versenum">9&nbsp;</sup>第七天，再把头上所有的头发与胡须、眉毛并全身的毛都剃了，又要洗衣服，用水洗身，就洁净了。</p>

	<p><sup class="versenum">10&nbsp;</sup>&ldquo;第八天，他要取两只没有残疾的公羊羔和一只没有残疾、一岁的母羊羔，又要把调油的细面伊法十分之三为素祭，并油一罗革，一同取来。<sup class="versenum">11&nbsp;</sup>行洁净之礼的祭司要将那求洁净的人和这些东西安置在会幕门口，耶和华面前。<sup class="versenum">12&nbsp;</sup>祭司要取一只公羊羔献为赎愆祭，和那一罗革油一同做摇祭，在耶和华面前摇一摇。<sup class="versenum">13&nbsp;</sup>把公羊羔宰于圣地，就是宰赎罪祭牲和燔祭牲之地，赎愆祭要归祭司，与赎罪祭一样，是至圣的。<sup class="versenum">14&nbsp;</sup>祭司要取些赎愆祭牲的血，抹在求洁净人的右耳垂上和右手的大拇指上，并右脚的大拇指上。<sup class="versenum">15&nbsp;</sup>祭司要从那一罗革油中取些倒在自己的左手掌里，<sup class="versenum">16&nbsp;</sup>把右手的一个指头蘸在左手的油里，在耶和华面前用指头弹七次，<sup class="versenum">17&nbsp;</sup>将手里所剩的油抹在那求洁净人的右耳垂上和右手的大拇指上，并右脚的大拇指上，就是抹在赎愆祭牲的血上。<sup class="versenum">18&nbsp;</sup>祭司手里所剩的油要抹在那求洁净人的头上，在耶和华面前为他赎罪。<sup class="versenum">19&nbsp;</sup>祭司要献赎罪祭，为那本不洁净求洁净的人赎罪，然后要宰燔祭牲，<sup class="versenum">20&nbsp;</sup>把燔祭和素祭献在坛上，为他赎罪，他就洁净了。</p>
	<!-- end bible --></div>
	但那人出去，倒说许多的话，叫耶稣以后不得再明明的进城（<span class="popup-link" @click = "popUp('pop4')"> 可1:45</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">45&nbsp;</sup>那人出去，倒说许多的话，把这件事传扬开了，叫耶稣以后不得再明明地进城，只好在外边旷野地方。人从各处都就了他来。</p>
	<!-- end bible --></div>
	</li>
</ul>

<div>
<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-TW">(</span><span lang="ZH-CN">进深学习：<span class="popup-link" @click = "popUp('pop5')"> 马太福音8:2-4</span>； </span></span></span>

	<div class="popup invisible" id="pop5"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">2&nbsp;</sup>有一个长大麻风的来拜他，说：&ldquo;主若肯，必能叫我洁净了。&rdquo;<sup class="versenum">3&nbsp;</sup>耶稣伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;他的大麻风立刻就洁净了。<sup class="versenum">4&nbsp;</sup>耶稣对他说：&ldquo;你切不可告诉人，只要去把身体给祭司察看，献上<u class="person underline">摩西</u>所吩咐的礼物，对众人做证据。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop6')"> 马可福音1:40-45</span>) </span></span></span>

	<div class="popup invisible" id="pop6"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">40&nbsp;</sup>有一个长大麻风的来求耶稣，向他跪下，说：&ldquo;你若肯，必能叫我洁净了。&rdquo;<sup class="versenum">41&nbsp;</sup>耶稣动了慈心，就伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;<sup class="versenum">42&nbsp;</sup>大麻风即时离开他，他就洁净了。<sup class="versenum">43&nbsp;</sup>耶稣严严地嘱咐他，就打发他走，<sup class="versenum">44&nbsp;</sup>对他说：&ldquo;你要谨慎，什么话都不可告诉人，只要去把身体给祭司察看，又因为你洁净了，献上<u class="person underline">摩西</u>所吩咐的礼物，对众人做证据。&rdquo;<sup class="versenum">45&nbsp;</sup>那人出去，倒说许多的话，把这件事传扬开了，叫耶稣以后不得再明明地进城，只好在外边旷野地方。人从各处都就了他来。</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>
</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路5:13</p>

<p class="forward bible">耶稣伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;大麻疯立刻就离了他的身。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们生命中有没有让我们与他人隔绝的地方，需要神来洁净？为什么？</li>
	<li class="forward">当我们得了神的赦罪和医治，有没有将荣耀归于神并存敬畏的心？从经文中得医治的麻风病人身上，让我们知道当如何表明将荣耀归于神和敬畏神的心呢？</li>
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
	<li class="forward">在《福音行动表》中写下2-3位，在本周使用&ldquo;奇妙的问题&rdquo;与他们分享自己的故事和传福音。</li>
	<li class="forward">邀请弟兄姐妹与你关心和探访在病痛中的亲友，为他们祷告，相信神要使用你们走入人群，为祂得着更多的人，让他们也来尝尝主恩的滋味和医治。</li>
	<li class="forward">每天学习记下两件感恩的事，并将荣耀归给神。与属灵同伴分享，彼此激励和守望。</li>
	<li class="forward">依照你今天所学到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<div>
<p class="indent2" style="text-align:justify"><span><span><span lang="ZH-TW">我在________________（时间/地点）将会__________________（对象/事情）。</span></span></span></p>
</div>

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

<p>耶和华拉法，我们的神啊，赞美祢是赦免和医治的神，投靠祢的人何等有福！世人都是按祢的形象被造，在祢眼中都是宝贝。谢谢祢从没有遗弃或轻看任何来到祢面前寻求帮助的人，祢知道世人的软弱与悖逆，但祢却仍然以无条件的爱来包容和接纳。感谢主耶稣来到世上，向我们彰显天父的公义和慈爱。愿我们的生命被祢更新和医治，常存感恩的心。我们愿寻求祢、爱祢并服事祢。奉主耶稣的圣名祷告，阿们！</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->