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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>36.</h1></div>
                        <div class="chapter_title ltr"><h1>会堂辩道策略——哥林多</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒17:30-31</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>世人蒙昧无知的时候，神并不监察，如今却吩咐各处的人都要悔改。<sup class="versenum">31&nbsp;</sup>因为他已经定了日子，要借着他所设立的人按公义审判天下，并且叫他从死里复活，给万人做可信的凭据。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">雅典并非保罗预定传福音的路线，然而保罗在等候人的时候并没有枯等，他随时随地不忘传福音，保罗在会堂中向那些和他有同样背景的人传福音，他在热闹的街头向市井小民布道，他还和哲学家争辩神的道，保罗的恩赐令人称羡，他对福音的热诚更令人感动，在保罗身上我们看到了一位宣教士的典范，使我们的心得到激励。是的，福音本是神的大能，要救一切相信的。今天，天父同样要使用每一位基督徒，成为祂无惧的见证人，在各地依靠圣灵的大能，采取主动单单传讲基督，并将结果交托给神！让我们加入这个行列，为主所用。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当保罗被迫离开庇哩亚的时候，来到了雅典。在亚略八古这个有悠久历史传统的议会中，面对群集的雅典异教知识分子，保罗侃侃而论，传讲了一篇&ldquo;处境化&rdquo;的布道，这篇讲章成为了日后基督徒向异教徒传道的典范。保罗这次的宣讲虽然有少数几个人信从了福音，但雅典的议会并没有接受保罗的这套&ldquo;哲学&rdquo;，于是保罗离开了雅典，来到了哥林多。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒18:1-22》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒18:1-22</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>这事以后，保罗离了雅典，来到哥林多 。<sup>2</sup>遇见一个犹太人，名叫亚居拉，他生在本都；因为革老丢命犹太人都离开罗马，新近带着妻百基拉从意大利来。保罗就投奔了他们。<sup>3</sup>他们本是制造帐棚为业。保罗因与他们同业，就和他们同住做工。<sup>4</sup>每逢安息日，保罗在会堂里辩论，劝化犹太人和希腊人。</p>

<p><sup>5</sup>西拉和提摩太从马其顿来的时候，保罗为道迫切，向犹太人证明耶稣是基督。<sup>6</sup>他们既抗拒、毁谤，保罗就抖着衣裳说：&ldquo;你们的罪归到你们自己头上（注：&ldquo;罪&rdquo;原文作&ldquo;血&rdquo;），与我无干（注：原文作&ldquo;我却干净&rdquo;）！从今以后，我要往外邦人那里去。&rdquo;</p>

<p><sup>7</sup>于是离开那里，到了一个人的家中，这人名叫提多犹士都，是敬拜神的，他的家靠近会堂。<sup>8</sup>管会堂的基利司布和全家都信了主，还有许多哥林多人听了，就相信受洗。</p>

<p><sup>9</sup>夜间，主在异象中对保罗说：&ldquo;不要怕，只管讲，不要闭口。<sup>10</sup>有我与你同在，必没有人下手害你，因为在这城里，我有许多的百姓。&rdquo; <sup>11</sup>保罗在那里住了一年零六个月，将　神的道教训他们。</p>

<p><sup>12</sup>到迦流 作亚该亚方伯的时候，犹太人同心起来攻击保罗，拉他到公堂，<sup>13</sup>说：&ldquo;这个人，劝人不按着律法敬拜　神。&rdquo; <sup>14</sup>保罗刚要开口，迦流就对犹太人说：&ldquo;你们这些犹太人！如果是为冤枉或奸恶的事，我理当耐性听你们。<sup>15</sup>但所争论的，若是关乎言语、名目和你们的律法，你们自己去办吧！这样的事我不愿意审问。&rdquo; <sup>16</sup>就把他们撵出公堂。<sup>17</sup>众人便揪住管会堂的所提尼，在堂前打他。这些事迦流都不管。</p>

<p><sup>18</sup>保罗又住了多日，就辞别了弟兄，坐船往叙利亚去，百基拉、亚居拉和他同去。他因为许过愿，就在坚革哩剪了头发。<sup>19</sup>到了以弗所，保罗就把他们留在那里，自己进了会堂，和犹太人辩论。<sup>20</sup>众人请他多住些日子，他却不允，<sup>21</sup>就辞别他们，说：&ldquo;神若许我，我还要回到你们这里。&rdquo;于是开船离了以弗所。<sup>22</sup>在凯撒利亚下了船，就上耶路撒冷去问教会安，随后下安提阿去。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/336.mp4" type="button" class="external-movie">
         观看徒18:1-22</button>
    <div class="collapsed"></div>



<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，带领人，使万民作主的门徒？</li>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">哥林多是古代的经济大城，以文化道德败坏闻名。保罗来到哥林多时，遇见刚从罗马来的亚居拉和百基拉。他们两人是志同道合的生意人，后来建立教会，成为有影响力的夫妻档。保罗和他们一起做生意和传道。西拉和提摩太从马其顿来的时候，他们带来财务上的支持，以及帖撒罗尼迦信徒的消息（<span class="popup-link" @click = "popUp('pop5')"> 帖前3:2</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>打发我们的兄弟&mdash;&mdash;在基督福音上做神执事的<u class="person underline">提摩太</u>前去，坚固你们，并在你们所信的道上劝慰你们，</p>
	<!-- end bible --></div>
	保罗在哥林多建立教会时，写了两封信给帖撒罗尼迦的门徒。他面临到许多社会压力和恐惧（<span class="popup-link" @click = "popUp('pop3')"> 徒18:9</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>夜间，主在异象中对<u class="person underline">保罗</u>说：&ldquo;不要怕，只管讲，不要闭口。</p>
	<!-- end bible --></div>
	但是主要他继续做工(<span class="popup-link" @click = "popUp('pop4')"> 林前1:14-16</span>)。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>我感谢神，除了<u class="person underline">基利司布</u>并<u class="person underline">该犹</u>以外，我没有给你们一个人施洗，<sup class="versenum">15&nbsp;</sup>免得有人说，你们是奉我的名受洗。<sup class="versenum">16&nbsp;</sup>我也给<u class="person underline">司提反</u>家施过洗，此外给别人施洗没有，我却记不清。</p>
	<!-- end bible --></div>
	许多人归信耶稣，然而从保罗写给哥林多教会的信中，我们看到保罗只有给头几位信徒施过洗。从中我们学到赋予新信徒权柄很重要，这样他们就能去使人作门徒，给人施洗，并且将耶稣所吩咐的，都教训人。当时罗马官方尚未谴责基督教信仰。保罗离开哥林多时，亚居拉和百基拉和他同去，到以弗所协助展开传道的工作。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒18:9-10</p>

<p class="forward bible"><sup>9</sup>夜间，主在异象中对保罗说：&ldquo;不要怕，只管讲，不要闭口。<sup>10</sup>有我与你同在，必没有人下手害你，因为在这城里，我有许多的百姓。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">亚居拉、百基拉这对夫妇，实在是信徒的好榜样。就你所知的， 分享他们的特点并有什么值得我们学习的？另外，在你个人生命成长过程当中，谁曾经是你的亚居拉、百基拉？又或者你是传道人或宣教士的亚居拉和百基拉吗？为什么？</li>
	<li class="forward">今天的&ldquo;哥林多&rdquo;在那里？哥林多不再局限在某个地区，世界普遍漠视道德的风气，处处都可见到哥林多现象，不论在那里的&ldquo;哥林多&rdquo;，神都有未得之民，等待我们去接触，神曾经对保罗说的话也是对我们说的:&ldquo;不要怕&hellip;不要沉默&hellip;在这城里有许多属于我的人。&rdquo; 这段经文给我们什么启发和安慰？</li>
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
	<li class="forward">操练这个月主动帮助一位有需要的传道人或宣教士，关心他的需要，为他的服事和禾场守望。另外，也为那些曾经是你的&ldquo;亚居拉和百基拉&rdquo;来感谢神，求神记念他们过去的付出和摆上，继续坚定并加倍赐福他们所做的工。</li>
	<li class="forward">为所住的城市祷告，求神赐福这地，叫这地的人回转祂自己，离弃罪恶。让这地成为&ldquo;喜乐之地&rdquo;和福音的出口。教会在这城中成为光和盐，有见证和好名声，主的名得荣。</li>
	<li class="forward">与教会牧者和弟兄姐妹留心教会四围的需要，采取主动，关心和服务社区，并用爱心行动关怀有需要的人。</li>
	<li class="forward">为教会牧者祷告，看重栽培和发展新同工和新信徒，赋予他们权柄，让他们也能去使人作主门徒，给人施洗，并且将耶稣所吩咐的，都教训人。</li>
	<li class="forward">本周把《帖撒罗尼迦后书》阅读一遍，将心得写下，下周小组分享。下图书卷图表仅供参考。</li>
</ul>

<p class="forward"><img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image4.png" /></p>

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

<p class="forward">亲爱的天父，我们感谢祢，因着祢的慈爱与恩典，祢没有留下一样好处不给我们，祢使我们的好处都在祢里面。求祢在这城中建立盘石般的教会，不按照人的意思，乃是按照祢的意思；不是彰显人的能力，乃要彰显祢的主权。愿一切都在天父的主权之下，主耶稣舍己的爱将每个弟兄姐妹连接一起，并按神的命令彼此相爱，荣耀基督的名。也求主带领我们众教会常在祢里面、教导我们远离撒旦的离间和欺骗，在耶稣基督里竭力保守合一，靠主站立得住。愿这城成为喜乐和蒙福之城，奉主耶稣的名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->