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
                        <div class="chapter_number ltr"><h1>47.</h1></div>
                        <div class="chapter_title ltr"><h1>仆人型领导力</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路19:47-48</span>）。
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">47&nbsp;</sup>耶稣天天在殿里教训人。祭司长和文士与百姓的尊长都想要杀他，<sup class="versenum">48&nbsp;</sup>但寻不出法子来，因为百姓都侧耳听他。</p>
	</div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>罪使人与神隔绝，让人逃离神的面甚至不敢来到主跟前。但在神没有任何一项罪是大到祂不能赦免和医治。因为主耶稣来，为要拯救失丧的人，祂愿意人都来就近祂，经历祂的拯救和医治。让我们存坦然无惧的心，来到这位施恩与医治的神面前，为要得怜恤，作随时的帮助。因为神应许：&ldquo;哀恸的人有福了，因为他们必得安慰。温柔的人有福了，因为他们必承受地土。饥渴慕义的人有福了，因为他们必得饱足。&rdquo;</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在逾越节期大批的人潮中，耶稣骑着驴驹，在群众的欢呼下，以和平之君的姿态进入耶路撒冷。有几个来自希腊世界的外邦人前来求见耶稣，启动了耶稣得荣耀的&ldquo;时候&rdquo;。</p>

<p class="indent2">时候到了！耶稣很快就要离去。之前，耶稣常在行过神迹以后，就用长篇的讲论来解释神迹的意义。如今，最大的一个神迹，就是祂在十字架的受死、埋葬、得高举即将发生。而与以往不同的是，耶稣这次先对门徒解释这个神迹的意义。 &nbsp;</p>

<p class="indent2">约翰福音十三至十七章是著名的&ldquo;告别讲论&rdquo;，十三章所呈现最后晚餐的一幕则是讲论的背景。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音13:1-38》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音13:1-38</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>逾越节以前，耶稣知道自己离世归父的时候到了，他既然爱世间属自己的人，就爱他们到底。<sup>2</sup>吃晚饭的时候，魔鬼已将卖耶稣的意思放在西门的儿子加略人犹大心里。<sup>3</sup>耶稣知道父已将万有交在他手里，且知道自己是从　神出来的，又要归到　神那里去，<sup>4</sup>就离席站起来脱了衣服，拿一条手巾束腰，<sup>5</sup>随后把水倒在盆里，就洗门徒的脚，并用自己所束的手巾擦干。<sup>6</sup>挨到西门彼得，彼得对他说：&ldquo;主啊，你洗我的脚吗？&rdquo;<sup>7</sup>耶稣回答说：&ldquo;我所做的，你如今不知道，后来必明白。 &rdquo;<sup>8</sup>彼得说：&ldquo;你永不可洗我的脚！&rdquo;耶稣说：&ldquo;我若不洗你，你就与我无分了。&rdquo;<sup>9</sup>西门彼得说：&ldquo;主啊，不但我的脚，连手和头也要洗！。&rdquo;<sup>10</sup>耶稣说：&ldquo;凡洗过澡的人，只要把脚一洗，全身就干净了；你们是干净的，然而不都是干净的。&rdquo;<sup>11</sup>耶稣原知道要卖他的是谁，所以说：&ldquo;你们不都是干净的。&rdquo;</p>

<p><sup>12</sup>耶稣洗完了他们的脚，就穿上衣服，又坐下，对他们说：&ldquo;我向你们所做的，你们明白吗？<sup>13</sup>你们称呼我夫子，称呼我主，你们说的不错，我本来是。<sup>14</sup>我是你们的主，你们的夫子，尚且洗你们的脚，你们也当彼此洗脚。<sup>15</sup>我给你们作了榜样，叫你们照着我向你们所做的去做。<sup>16</sup>我实实在在地告诉你们：仆人不能大于主人，差人也不能大于差他的人。<sup>17</sup>你们既知道这事，若是去行就有福了。<sup>18</sup>我这话不是指着你们众人说的，我知道我所拣选的是谁。现在要应验经上的话，说：&lsquo;同我吃饭的人，用脚踢我。&rsquo;<sup>19</sup>如今事情还没有成就，我要先告诉你们，叫你们到事情成就的时候，可以信我是基督。<sup>20</sup>我实实在在地告诉你们：有人接待我所差遣的，就是接待我；接待我，就是接待那差遣我的。&rdquo;</p>

<p><sup>21</sup>耶稣说了这话，心里忧愁，就明说：&ldquo;我实实在在地告诉你们：你们中间有一个人要卖我了。&rdquo;<sup>22</sup>门徒彼此对看，猜不透所说的是谁。<sup>23</sup>有一个门徒，是耶稣所爱的，侧身挨近耶稣的怀里。<sup>24</sup>西门彼得点头对他说：&ldquo;你告诉我们，主是指着谁说的。&rdquo;<sup>25</sup>那门徒便就势靠着耶稣的胸膛，问他说：&ldquo;主啊，是谁呢？&rdquo;<sup>26</sup>耶稣回答说：&ldquo;我蘸一点饼给谁，就是谁。&rdquo;耶稣就蘸了一点饼，递给加略人西门的儿子犹大。<sup>27</sup>他吃了以后，撒但就入了他的心。耶稣便对他说：&ldquo;你所做的，快做吧！&rdquo;<sup>28</sup>同席的人，没有一个知道是为什么对他说这话。<sup>29</sup>有人因犹大带着钱囊，以为耶稣是对他说：&ldquo;你去买我们过节所应用的东西&rdquo;，或是叫他拿什么周济穷人。<sup>30</sup>犹大受了那点饼，立刻就出去。那时候是夜间了。</p>

<p><sup>31</sup>他既出去，耶稣就说：&ldquo;如今人子得了荣耀，神在人子身上也得了荣耀。<sup>32</sup>神要因自己荣耀人子，并且要快快地荣耀他。<sup>33</sup>小子们，我还有不多的时候与你们同在，后来你们要找我，但我所去的地方你们不能到。这话我曾对犹太人说过，如今也照样对你们说。<sup>34</sup>我赐给你们一条新命令，乃是叫你们彼此相爱；我怎样爱你们，你们也要怎样相爱。<sup>35</sup>你们若有彼此相爱的心，众人因此就认出你们是我的门徒了。&rdquo;<sup>36</sup>西门彼得问耶稣说：&ldquo;主往哪里去？&rdquo;耶稣回答说：&ldquo;我所去的地方，你现在不能跟我去，后来却要跟我去。&rdquo;<sup>37</sup>彼得说：&ldquo;主啊，我为什么现在不能跟你去？我愿意为你舍命。&rdquo;<sup>38</sup>耶稣说：&ldquo;你愿意为我舍命吗？我实实在在地告诉你：鸡叫以先，你要三次不认我。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/247.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音13:1-38&nbsp;</button>
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

<p class="up">耶稣在世的最后一周，白天在圣殿教导人，夜晚在橄榄山祷告。和门徒在一起的最后一晚，祂教了许多领导的功课。祂&ldquo;爱他们到底&rdquo;。祂如同家仆一样为十二门徒洗脚，让他们很震惊。因为他们从来没这样做过！耶稣告诉他们应该效法祂谦卑自己，放下身份，服事彼此的需要。大多数的文化里，仆人式领导被认为很软弱，但这正是天国的领导方式。耶稣和最亲近的十二门徒共进最后的晚餐时，心里哀痛他们当中有人要出卖祂。犹大对耶稣的领导失去信心，便与宗教领袖谈好价钱，要在远离人群的安静地方帮忙逮捕耶稣。犹大让撒旦操控他的心。在这个情况下，耶稣仍嘱咐门徒要彼此相爱。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约13:1</p>

<p class="forward bible">逾越节以前，耶稣知道自己离世归父的时候到了，他既然爱世间属自己的人，就爱他们到底。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣是先为门徒洗脚，之后才吩咐门徒应当彼此洗脚。我们若非先经历主的恩典，生命被主改变，我们无法谦卑服事别人。耶稣说，我们若能如此去行就有福了！你认为洗脚的意义为何？你在教会是否看过或经历彼此洗脚的礼仪？当时你的感受为何？为什么？</li>
	<li class="forward">犹大曾经跟随耶稣一段时日，亲聆耶稣权柄的教导，亲眼见到耶稣行大能的神迹，他见到了光，却选择被黑暗吞没，犹大的故事能够给我们什么警告？十字架的苦难虽然迫在眼前，但上帝始终在掌权。你相信在你生命中最黑暗的时候，上帝仍然掌权吗？为什么？</li>
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
	<li class="forward">为你的牧者和小组长的服事是有生命榜样和仆人式的领导祷告，求神借着他们生命敬虔的榜样和谦卑的服事建立和造就教会弟兄姐妹。你期待他们生命有什么圣灵的果子，就按感动一一为他们代求。</li>
	<li class="forward">你也为自己的生命学像基督的谦卑，有颗为门徒舍己服事的心，并做众人的榜样祷告。本周找机会在行动上服事你&ldquo;最小的弟兄&rdquo;。</li>
	<li class="forward">来临的主日，与教会牧者同工事先沟通，带领门徒和你一起参与教会主日的服事，会后主动关心并为有需要的弟兄姐妹代祷及服事他们。</li>
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

<p style="text-align:justify"><span><span><span lang="ZH-CN">爱我们的救主，感谢祢谦卑虚己的生命，纵然在背叛祢的人面前，依旧选择爱他们到底。求主怜悯我们，保守我们常在祢的爱里，让我们对祢忠贞不二。求祢救我们脱离凶恶，不叫我们遇见试探；托住我们的双脚，免得我们跌倒失败。我们愿意效法祢，存谦恭的心去爱与服事身边的人，接纳和包容他们生命的成长，作祢喜悦的仆人。奉主耶稣基督的名求，阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->