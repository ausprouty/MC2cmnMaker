<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>救恩的确据	</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="indent4">本课的目的是在基督里一起学习和生命成长。同时对救恩有确据和信心，相信耶稣的信实和祂的保守，使我们靠主耶稣能活出救恩的真实。</p>

<h2 class="back">欢迎介绍</h2>

<ul class="back">
	<li class="back">欢迎你加入小组</li>
	<li class="back">彼此介绍和认识</li>
	<li class="back">参加课程的期待</li>
</ul>

<h2 class="back">课程介绍</h2>

<ul class="back">
	<li class="back">学习目的：每周培育初信徒建立与耶稣的关系，并在关系网中见证福音</li>
	<li class="back">课程内容：翻看目录</li>
	<li class="back">造就过程：三分法</li>
</ul>

<p class="back">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image12.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image12.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image12.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<h2 class="back">小组角色与期望</h2>

<ul class="back">
	<li class="back">以小组方式来进行</li>
	<li class="back">鼓励组员参与讨论</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">祷告关怀&mdash;&mdash;以祷告、勉励，合乎圣经的教导彼此服侍</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践&mdash;&mdash;鼓励小组在爱中互相督促，一同顺服耶稣</h2>

<ul class="back">
	<li class="back">分享你是怎样信主的？自从相信并接受主耶稣以后，你发现你的生命有什么改变？为什么？</li>
	<li class="back">分享你为什么会参与《倍增门徒》之天国基础小组？有什么期待吗？</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ 天父心意&mdash;&mdash;体恤神的心意，成为我们行事的动机与激励</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>圣经告诉我们，上帝爱世人，并愿意所有的人都能接受福音，而且能够明白真理（提摩太前书2:3）。上帝爱你，也爱你身边的人，而且要使用你将关乎耶稣的故事告诉他们，使他们也可以跟随耶稣。当我们一起踏上这个旅程，你将会看到上帝借着我们影响和改变身边的人，这是多么令人兴奋的事。</p>

</div>

<h2 class="back">&nbsp;</h2>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召&mdash;&mdash;学习带来应用，应用带来生命改变</h2>

<ul>
	<li class="up"><strong>故事背景</strong></li>
</ul>

<p class="indent2">耶稣教导众人&ldquo;我是好牧人；好牧人为羊舍命&rdquo;（约翰福音10:11），祂又对他们说：&ldquo;我认识我的羊，我的羊也认识我&rdquo;，并且&ldquo;我来了，是要叫羊得生命，并且得的更丰盛。&rdquo;然而，许多犹太人不相信祂，怀疑祂所宣称的话。</p>

<p class="up">&nbsp;</p>

<ul>
	<li class="up"><strong><strong>阅读经文</strong></strong></li>
</ul>

<button id="Button0" type="button" class="collapsible bible">读两遍 阅读约翰福音10:22-30两遍</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">22&nbsp;</sup>在耶路撒冷有修殿节，是冬天的时候。<sup class="versenum">23&nbsp;</sup>耶稣在殿里<u class="person underline">所罗门</u>的廊下行走。<sup class="versenum">24&nbsp;</sup>犹太人围着他，说：&ldquo;你叫我们犹疑不定到几时呢？你若是基督，就明明地告诉我们。&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣回答说：&ldquo;我已经告诉你们，你们不信。我奉我父之名所行的事可以为我作见证，<sup class="versenum">26&nbsp;</sup>只是你们不信，因为你们不是我的羊。<sup class="versenum">27&nbsp;</sup>我的羊听我的声音，我也认识他们，他们也跟着我。<sup class="versenum">28&nbsp;</sup>我又赐给他们永生，他们永不灭亡，谁也不能从我手里把他们夺去。<sup class="versenum">29&nbsp;</sup>我父把羊赐给我，他比万有都大，谁也不能从我父手里把他们夺去。</p>

<p><sup class="versenum">30&nbsp;</sup>&ldquo;我与父原为一。&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/101.mp4" type="button" class="external-movie">
         观看&nbsp;约福音10:22-30&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up">
	<p><strong>探索与讨论</strong></p>

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
	<li class="up">
	<p><strong>故事重述</strong></p>

	<ul class="up">
		<li class="up">再读一遍故事。请小组一员口述这故事，其他人根据需要作补充或更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">耶稣是好牧人，在十字架上为你的罪牺牲，舍去生命。身为主耶稣的羊，祂要你明白你有永生，必永不灭亡。在祂手中你是安全的，没有人能够把你从祂手中夺去，就连撒旦也不能。因此在基督里我们有十分的保障和平安！</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ 经文背诵&mdash;&mdash;将神话语藏在心里，成为我们行事的准则</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>约翰福音10:29-30</p>

<p class="up"><sup>29</sup>我父把羊赐给我，他比万有都大，谁也不能从我父手里把他们夺去。<sup>30</sup>我与父原为一。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备&mdash;&mdash;操练有信心并忠心地实践和训练他人</h2>

<ul class="forward">
	<li class="forward">得救确据的确信：翻到《四件事》的&ldquo;你是否已经接受基督进入了你的生命？&rdquo;并一起阅读直到最后一页。
	<ul class="forward">
		<li class="forward">回答相关问题并写下答案。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><p class="flush">+ 1) &ldquo;怎样知道基督已在你的生命中&rdquo;</p></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="indent">a) 第一个问题：&ldquo;你有没有请基督进入你的生命？&rdquo;</p>

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


<p class="indent">b) 第二个问题：&ldquo;根据启示录3:20的应许，现在基督是否在你心里？&rdquo;</p>

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


<p class="indent">（启示录3:20 ：&ldquo;看哪！我站在门外叩门，若有听见我声音就开门的，我要进到他那里去，我与他，他与我一同坐席。&rdquo;）</p>

<p class="indent">c) 接下来的两个问题：</p>

<p class="indent">&ldquo;基督应许进入你的生命，他会失信吗？&rdquo;为什么？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note4Text')"
        id="note4Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent">&ldquo;你有什么根据知道神答应了你的祷告？&rdquo;</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note5Text')"
        id="note5Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent">&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><p class="indent">+ 2) &ldquo;圣经应许凡接受基督的人都有永生&rdquo;</p></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="indent2">请读出约翰一书5:11-13</p>

<p class="indent2"><sup>11</sup>这见证就是神赐给我们永生，这永生也是在他儿子里面。<sup>12</sup>人有了神的儿子就有生命；没有神的儿子就没有生命。<sup>13</sup>我将这些话写给你们信奉神儿子之名的人，要叫你们知道自己有永生。</p>

<p class="indent2">试回答以下的问题。</p>

<p class="indent3">1) 神给了我们什么？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note6Text')"
        id="note6Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent3">2) 在哪里可以得到永生？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note7Text')"
        id="note7Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent3">3) 你有没有神的儿子？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note8Text')"
        id="note8Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent3">4) 如果你有了神的儿子，你就有了什么？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note9Text')"
        id="note9Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent3">5) 你怎么知道自己有永生？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note10Text')"
        id="note10Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent">&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><p class="indent">+ 3) 要常常感谢神，因为基督已进入你的生命。</p></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p class="indent2">希伯来书13:5b 说：&ldquo;因为主曾说：&ldquo;我总不撇下你，也不丢弃你。&rdquo;</p>

<p class="indent2">试回答以下的问题：</p>

<p class="indent3">1) 当你亲自接受基督之后，他会离开你吗？为什么？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note11Text')"
        id="note11Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent3">2) 既然他永不离开你，那你需要几次邀请基督进入你的生命？</p>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note12Text')"
        id="note12Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<p class="indent3">（其他有关得救确据的经文有：约翰福音10:27-29，罗马书8:31-39）</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><p class="indent">+ 4) 不要依靠感觉</p></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p class="indent2">读出&ldquo;不要依靠感觉&rdquo;这一段，试用自己的话说明你对图表的理解。</p>

<p class="indent2"><img alt="Train" src="@/assets/sites/mc2/content/M2/cmn/multiply1/M1L2.png" /></p>

<p class="indent2">&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><p class="indent">+ 5) 属灵生命长进的建议</p></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">感谢耶稣基督在我们生命所成就的事
	<ul class="forward">
		<li class="forward">耶稣基督为世人的罪被钉死在十字架上，但祂第三天从死里复活了。祂已经胜过罪恶和死亡。如今我们可以因信耶稣基督，我们罪已经完全得到赦免，已经白白得着神为我们所预备的救恩。</li>
		<li class="forward">你已经是神的儿女，并开始神为你所预备的新生命，因为在基督里你是新造的人，旧事已过，都变成新的了（哥林多后书 5:17）。</li>
		<li class="forward">让我们现在花一些时间来感恩和祷告：</li>
	</ul>
	</li>
	<li class="forward">为耶稣在你生命已经成就的事情来感谢祂，</li>
	<li class="forward">并为你在耶稣基督里生命的继续成长向神祷告。</li>
	<li class="forward">接下来，鼓励你持续参加这个倍增门徒小组，我们一起在基督里成长。</li>
</ul>

</div>

<p class="indent3">&nbsp;</p>

<ul class="forward">
</ul>

<h2 class="forward">福音行动&mdash;&mdash;设定行动点，彼此督责，勉励行道</h2>

<ul class="forward">
	<li class="forward">从今天开始，每天阅读《路加福音》一段或一章，帮助你更加认识主耶稣。</li>
	<li class="forward">每天写下一件你要感谢耶稣的事，以及你要耶稣为你做的事。</li>
	<li class="forward">在最后一页的《福音行动表》里写下2位你的亲朋好友名单，本周与他们分享你为什么信耶稣，以及你跟随耶稣的决定。</li>
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
        @keyup="this.addNote('note13Text')"
        id="note13Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 style="text-align:left"><span><span><span><strong><span lang="ZH-TW"><span>福音祷告&mdash;&mdash;</span></span></strong><strong><span><span>将所行的交托给神，求主按祂旨意成就</span></span></strong></span></span></span></h2>

<p style="text-align:left"><span><span><span>亲爱的主耶稣，感谢</span><span lang="ZH-TW">祢</span><span>为我舍命，赐给我救恩，成为我的大牧者。</span><span lang="ZH-TW">在祢手中我是</span><span>平安稳妥</span><span lang="ZH-TW">的，没有</span><span>任何</span><span lang="ZH-TW">人</span><span>或事</span><span lang="ZH-TW">能</span><span>够</span><span lang="ZH-TW">将我</span><span>从祢的手中</span><span lang="ZH-TW">夺去，就连撒旦也不能。</span><span>我愿轻轻听</span><span lang="ZH-TW">祢</span><span>的声音，紧紧跟随祢，效法</span><span><span style="color:black">祢，每天被祢更新，并经验祢所赐丰盛的生命</span></span><span>。奉主耶稣的名祷告，阿们！</span></span></span></p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->