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
                        <div class="chapter_number ltr"><h1>44.</h1></div>
                        <div class="chapter_title ltr"><h1>圣殿中被抓——耶路撒冷</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒21:13</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;你们为什么这样痛哭，使我心碎呢？我为主耶稣的名，不但被人捆绑，就是死在耶路撒冷也是愿意的。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">对于神完全的旨意，没有一样是可以&ldquo;避讳不传&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒20:27</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>因为神的旨意我并没有一样避讳不传给你们的。</p>
	<!-- end bible --></div>
	的，没有一样是可以忽略不要的，不能只传某些真理，而不传另一些真理。许多信徒不会&ldquo;避讳不传&rdquo;平安、喜乐、爱，但却可能&ldquo;避讳不传&rdquo;悔改、审判、地狱、忌邪的神、舍己、背十字架、金钱奉献、将身体献上等，结果就会使神的旨意暗昧不明，既得罪了神，也叫人无法得到益处（<span class="popup-link" @click = "popUp('pop3')"> 徒20:20</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>你们也知道，凡于你们有益的，我没有一样避讳不说的，或在众人面前，或在各人家里，我都教导你们。</p>
	<!-- end bible --></div>
	所以我们应当警醒，记念那些在我们当中为主全然摆上，花时间付代价为我们祷告、劝戒我们的牧者和同工。也愿我们成为凡事讨主喜悦的仆人，传讲真理，服事众人，把人完完全全领到神面前。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗到达耶路撒冷后与教会领袖的交往互动和所做的事情，以及他在耶路撒冷被捕的经过。往耶路撒冷的一程，记载得相当详尽，包括途中各站的情况，保罗一路上所受的欢迎，同时不断地收到先知的警告，不过他仍坚持要达成上帝在他身上的计划。</p>

<p class="indent2">当保罗终于抵达耶路撒冷时，教会领袖们欣喜地听闻保罗在外邦人中间的工作，因着耶路撒冷城中正在谣传保罗教导在外邦的基督徒离弃祖宗的律法，为了避免谣言会对教会向犹太人传福音造成拦阻，保罗听从了长老们的建议，公开在圣殿中履行了一项律法的规条。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒21:27-36》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒21:27-36</button><div class="collapsed" id ="Text0">

<p><sup>27</sup>那七日将完，从亚西亚来的犹太人，看见保罗在殿里，就耸动了众人下手拿他，<sup>28</sup>喊叫说：&ldquo;以色列人来帮助！这就是在各处教训众人，糟践我们百姓和律法 并这地方的。他又带着希腊人进殿，污秽了这圣地。&rdquo;<sup>29</sup>这话是因他们曾看见以弗所人特罗非摩同保罗在城里，以为保罗带他进了殿。<sup>30</sup>合城都震动，百姓一齐跑来，拿住保罗，拉他出殿，殿门立刻都关了。</p>

<p><sup>31</sup>他们正想要杀他，有人报信给营里的千夫长说：&ldquo;耶路撒冷合城都乱了！&rdquo;<sup>32</sup>千夫长立时带着兵丁和几个百夫长跑下去，到他们那里。他们见了千夫长和兵丁，就止住不打保罗。<sup>33</sup>于是千夫长上前拿住他，吩咐用两条铁链捆锁；又问他是甚么人，做的是甚么事。<sup>34</sup>众人有喊叫这个的，有喊叫那个的。千夫长因为这样乱嚷，得不着实情，就吩咐人将保罗带进营楼去。<sup>35</sup>到了台阶上，众人挤得凶猛，兵丁只得将保罗抬起来。<sup>36</sup>众人跟在后面，喊着说：&ldquo;除掉他！&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/344.mp4" type="button" class="external-movie">
         观看&nbsp;徒21:27-36&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">故事中克服了什么障碍或难题？又是如何克服的呢？</li>
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
	<li class="nobreak-final-final">从亚西亚来的犹太人，对保罗和特罗非摩相当熟悉，因为保罗曾长期住在以弗所。他们找到机会拦阻保罗，就耸动了众人来对抗他。讽刺的是，保罗正在行洁净的礼，要满足犹太人的律法。这显示出他们的控告是错的，有许多人都误解了保罗的教导。犹太人对他们的宗教极其热心，很快转以暴力对待保罗。主使用罗马官长救保罗脱离暴民。圣灵的预言成真，保罗果然被外邦人捆上锁炼（<span class="popup-link" @click = "popUp('pop4')"> 徒21:11</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>到了我们这里，就拿<u class="person underline">保罗</u>的腰带捆上自己的手脚，说：&ldquo;圣灵说：犹太人在耶路撒冷要如此捆绑这腰带的主人，把他交在外邦人手里。&rdquo;</p>
	<!-- end bible --></div>
	即使在暴力的逼迫下，主仍借着保护保罗的性命，实现祂的计划。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒21:35-36</p>

<p class="forward bible"><sup>35</sup>到了台阶上，众人挤得凶猛，兵丁只得将保罗抬起来。<sup>36</sup>众人跟在后面，喊着说：&ldquo;除掉他！&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你对&ldquo;聚众闹事&rdquo;有什么经历？有什么看法？为什么&ldquo;众人&rdquo;常常容易被激动，表现出不可理喻、难以预测的行为？</li>
	<li class="forward">保罗在请求千夫长让他向百姓说话时，他的处境非常的危险，因为他此时才刚刚逃离死亡，还没有被带进营楼；你想保罗当时为什么急着要向百姓说话？你对保罗这种勇敢、积极的心态，有什么响应？</li>
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
	<li class="forward">为你所听到或是知道福音封闭且遭受逼迫的国家里的那些教会和弟兄姐妹祷告，求主保守和坚定祂的教会和百姓，让他们在执政掌权者面前蒙恩宠有美名，救他们脱离一切的凶恶和试探。也求主照顾他们的家人，坚固他们的信心，并差派天使四围保护他们，供应他们一切的需要。</li>
	<li class="forward">思想教会或是你的小组可以做什么来支持前线的宣教士？另外，为了更好地宣教或传福音，教会或是小组可以在哪些方面做出调整？若有什么担忧或是惧怕的事情，都在祷告中交给神，求祂为你们开路。</li>
	<li class="forward">为教会的布道与宣教事工祷告，求神给教会牧者同工异象使命，教会信徒积极参与大使命，有颗乐意祷告和奉献的心，并分别一段时间参与短宣，经历神能力的同在与传福音的喜乐。</li>
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

<p class="forward">亲爱的天父, 祢愿万民得救，不愿一人沉沦；求祢唤醒我们沉睡的教会，看重宣教的事工，将人力、物力、财力和精力有份参与使万民作主的门徒行列里。祈求天父苏醒人心，开启世人的心眼，使世人认识并接受救恩。祈求圣灵的大能运行在各个禾场上，赐给教会和圣徒有国度的胸怀，不是建立自己的国度，彰显自己，乃要建立神的国度，彰显基督。愿神使众教会在福音的事上彼此连接，共同完成主的使命。求主也呼召有忠心和见识的工人，圣灵的大能膏抹和充满他们，神迹奇事天天伴随着他们，使他们见证祢的真实。求祢震动各地各方祢众儿女的心，用一切的资源来支持宣教事工和宣教工人。我们如此祷告，乃是奉主耶稣的名。阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->