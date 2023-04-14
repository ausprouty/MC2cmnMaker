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
                        <div class="chapter_number ltr"><h1>24.</h1></div>
                        <div class="chapter_title ltr"><h1>信徒说出真理</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路5:31</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">31&nbsp;</sup>耶稣对他们说：&ldquo;无病的人用不着医生，有病的人才用得着。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p><span><span><span lang="ZH-CN">耶稣来为要呼召罪人悔改。耶稣是为那些急待医治、急待赦免的人而被钉死在十字架上。所以，今日教会所传讲的福音，是呼召罪人悔改的福音，教会欢迎和收纳的，也是愿意真诚悔改的罪人。教会不是圣人俱乐部，却是一班不完全、有病的、有罪的人寻求赦免和医治、学习改变和越来越像主耶稣的地方，并成为恩典与福音的出口，领人归向基督。</span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在犹太人的一个节期（不详），耶稣又来到了耶路撒冷，那天是一个安息日，在一个叫做毕士大的池边，耶稣医治了一个病了38年的病人，这个医治的神迹没有引起荣耀归与神的颂赞，相反地，它惹恼了耶路撒冷的宗教领袖，因为耶稣触犯了安息日不可做工的规定。</p>

<p class="indent2">犹太人将维护安息日作为犹太文化和宗教的最高象征，旧约律法禁止以色列人在安息日工作，原先是指一个人日常所从事的工作，但犹太人后来发展出的口传律法将工作范围扩展成 39 个类别，医病以及将一物从一处搬到另外一处都在禁止的范围，因此耶稣和这个被治愈的瘫子都违反了安息日的规定。更令他们震怒的是，耶稣竟然将自己看做和上帝同等。<br />
&nbsp;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音5:1-17》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音5:1-17</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>这事以后，到了犹太人的一个节期，耶稣就上耶路撒冷去。<sup>2</sup>在耶路撒冷，靠近羊门有一个池子，希伯来话叫作毕士大，旁边有五个廊子。<sup>3</sup>里面躺着瞎眼的、瘸腿的、血气枯干的许多病人。（注：有古卷在此有&ldquo;等候水动，<sup>4</sup>因为有天使按时下池子搅动那水，水动之后，谁先下去，无论害什么病就痊愈了。&rdquo;）<sup>5</sup>在那里有一个人，病了三十八年。<sup>6</sup>耶稣看见他躺着，知道他病了许久，就问他说：&ldquo;你要痊愈吗？&rdquo;<sup>7</sup>病人回答说：&ldquo;先生，水动的时候，没有人把我放在池子里；我正去的时候，就有别人比我先下去。&rdquo;<sup>8</sup>耶稣对他说：&ldquo;起来，拿你的褥子走吧！&rdquo;<sup>9</sup>那人立刻痊愈，就拿起褥子来走了。<sup>10</sup>那天是安息日，所以犹太人对那医好的人说：&ldquo;今天是安息日，你拿褥子是不可的！&rdquo;<sup>11</sup>他却回答说：&ldquo;那使我痊愈的对我说：&lsquo;拿你的褥子走吧!&rsquo;&rdquo;<sup>12</sup>他们问他说：&ldquo;对你说&lsquo;拿褥子走&rsquo;的是什么人？&rdquo;<sup>13</sup>那医好的人不知道是谁，因为那里的人多，耶稣已经躲开了。</p>

<p><sup>14</sup>后来耶稣在殿里遇见他，对他说：&ldquo;你已经痊愈了，不要再犯罪，恐怕你遭遇的更加利害。&rdquo;<sup>15</sup>那人就去告诉犹太人，使他痊愈的是耶稣。<sup>16</sup>所以犹太人逼迫耶稣，因为他在安息日做了这事。<sup>17</sup>耶稣就对他们说：&ldquo;我父做事直到如今，我也做事。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/224.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音5:1-17&nbsp;</button>
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

<p class="up">耶稣又往南去耶路撒冷，守另一个节期。上回祂到耶路撒冷守节期时，引起了大骚动，而这次又发生同样的事。这次天父带领耶稣到羊门（通往城市的其中一个门）外的一个池子，那里躺着许多病人。耶稣只医治了天父要祂医治的人。由于祂在安息日（Sabbath）做了这事，宗教领袖相当不悦，逼迫耶稣。耶稣用这机会表明祂和天父独特的关系。犹太人很清楚知道耶稣称自己和上帝平等。从此之后，他们就开始找方法要杀祂。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约5:16-17</p>

<p class="forward bible"><sup>16</sup>所以犹太人逼迫耶稣，因为他在安息日做了这事。<sup>17</sup>耶稣就对他们说：&ldquo;我父做事直到如今，我也做事。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们是否会有意或无意地犯下和犹太领袖同样的错误，看重宗教外在的形式胜过关心人的需要？传统或风俗习惯有可能拦阻我们认识神，在你信主的过程中，你曾经遇到这样的困难吗？你是如何克服的？或这些是否继续影响你，为什么？</li>
	<li class="forward">那些热心宗教的人，大多数只关心安息日的规条，并不关心人在安息日有没有真安息。但安息日是为人设立的，而非人为安息日而造的(参<span class="popup-link" @click = "popUp('pop2')"> 可2:27</span>)，
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>又对他们说：&ldquo;安息日是为人设立的，人不是为安息日设立的。</p>
	<!-- end bible --></div>
	知所先后，是我们明白神心意的诀窍。你从病人、犹太人、耶稣身上学到什么样的功课？</li>
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
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN">列下哪些传统、风俗习惯或价值观惯扭曲你对神的认识，或拦阻你去爱人？与你的属灵同伴分享，并试着从圣经中找出对这事的观点和价值观为何，让圣经成为我们对任何人事物的滤镜，同时建立合神心意的价值观（圣经观）。</span></span></span></span></li>
	<li class="forward">每天学习数算一件神在你身上的恩典，并向神感恩。另外，求神帮助你成为信守诺言，在各处撒下&ldquo;和平&rdquo;种子的&ldquo;和平之子&rdquo;。</li>
	<li class="forward">与一位弟兄姐妹分享《被圣灵充满》小册子，并听听他对主耶稣与圣灵的认识。</li>
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

<p>安息日的主，我们感谢祢，安息日是为人设的，为要让人可以真实享受神在创造时，定意给人在祂里面的安息。天父啊，祢体恤并怜悯所造的人，要人享受在祢里面的丰富。求祢帮助我对祢有正确的认识，待人有恩典，正如祢也无条件接纳和爱我。我承认我还是会被过去一些的传统、观念、风俗习惯等所影响，以致对祢对人的认知会有偏颇，律人宽己，得罪神也得罪人。求主赦免我一切的过犯，<span><span><span lang="ZH-CN">帮助我对祢有正确的认识、真实地爱神爱人。祷告祈求是奉主耶稣的名，阿们。</span></span></span></p>

<p style="text-align:justify">&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->