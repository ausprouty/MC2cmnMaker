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
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>真喜乐的泉源</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约3:17-18</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>因为神差他的儿子降世，不是要定世人的罪，乃是要叫世人因他得救。<sup class="versenum">18&nbsp;</sup>信他的人不被定罪，不信的人罪已经定了，因为他不信神独生子的名。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">在使徒行传中，我们看见信徒训练人成为能训练别人的人。耶稣首批门徒中有一个名叫巴拿巴的，他找到一个新信徒，名叫保罗，并帮助他。保罗又找到一个年轻信徒名叫提摩太，并带着他到各处传福音。之后保罗写信给提摩太，告诉他要在教会中训练忠心的人，使他们也去寻找其他年轻的信徒来训练（<span class="popup-link" @click = "popUp('pop2')"> 提后2:2</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>为君王和一切在位的也该如此，使我们可以敬虔、端正、平安无事地度日。</p>
	<!-- end bible --></div>
	我们看到从耶稣到巴拿巴、到保罗、到提摩太、到忠心的门徒，及至其他年轻的信徒，所有的基督徒都被呼召去训练能训练其他人的人。如此，福音就能快速广传。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当耶稣日渐受到欢迎的时候，施洗约翰的门徒心生不平，然而约翰却十分笃定，因为他清楚自己的身份和使命，如今眼见自己事奉的目的已经达成，他由衷地欢喜快乐并且坦然断言&ldquo;他必兴旺，我必衰微&rdquo;</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音3:22-35》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音3:22-35</button><div class="collapsed" id ="Text0">

<p><sup>22</sup>这事以后，耶稣和门徒到了犹太地，在那里居住施洗。<sup>23</sup>约翰在靠近撒冷的哀嫩也施洗，因为那里水多，众人都去受洗。<sup>24</sup>那时约翰还没有下在监里。<sup>25</sup>约翰的门徒和一个犹太人辩论洁净的礼，<sup>26</sup>就来见约翰说：&ldquo;拉比，从前同你在约旦河外、你所见证的那位，现在施洗，众人都往他那里去了。&rdquo;<sup>27</sup>约翰说：&ldquo;若不是从天上赐的，人就不能得什么。<sup>28</sup>我曾说&lsquo;我不是基督，是奉差遣在他前面的&rsquo;，你们自己可以给我作见证。<sup>29</sup>娶新妇的就是新郎，新郎的朋友站着听见新郎的声音就甚喜乐，故此我这喜乐满足了。<sup>30</sup>他必兴旺，我必衰微。<sup>31</sup>从天上来的，是在万有之上；从地上来的，是属乎地，他所说的也是属乎地。从天上来的是在万有之上。<sup>32</sup>他将所见所闻的见证出来，只是没有人领受他的见证。<sup>33</sup>那领受他见证的，就印上印，证明　神是真的。<sup>34</sup>神所差来的，就说　神的话，因为　神赐圣灵给他，是没有限量的。<sup>35</sup>父爱子，已将万有交在他手里。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/212.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音3:22-35&nbsp;</button>
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

<p class="up">施洗约翰到犹太的北边，在低加波里和撒马利亚边境施洗，预备人来相信耶稣。当时，耶稣在犹太地区传道。施洗约翰的门徒问他：为什么耶稣的事工成长的比他大？施洗约翰解释：他知道耶稣是谁也知道自己是谁，他知道能在耶稣旁边聆听祂的声音是他喜乐的泉源，也知道听见耶稣的话后只能顺从。我们看见施洗约翰向我们示范他向自己死并且顺服天父的旨意。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约3:34-35</p>

<p class="forward bible"><sup>34</sup>神所差来的，就说　神的话，因为　神赐圣灵给他，是没有限量的。<sup>35</sup>父爱子，已将万有交在他手里。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li style="text-align:justify"><span><span><span><span lang="ZH-CN"><span><span>你会嫉妒别人的服事吗？或你曾经发现到，你的服事受到嫉妒？你会如何处理这种情况或自己的情绪？你认为真正的问题是什么？施洗约翰的人格和胸襟对你有何提醒或影响？</span></span></span></span></span></span></li>
	<li class="forward">你曾否因为向某人传福音多年不见果效，而感到灰心？&ldquo;那人撒种，这人收割&rdquo;这句话对你有什么鼓励？当你&ldquo;不劳而获&rdquo;时，你该记念谁的辛劳？归荣耀给谁？</li>
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
	<li class="forward">在教会或小组参与的服事中，求主帮助你有正确的服事观，相信神给各人的恩赐和才干不同。重要的是你是否发挥神给你的恩赐，凡事作神忠心的好管家，为要讨神的喜悦和得神的称赞？</li>
	<li class="forward">接下来，小组可以借一些特别的节日（例如：圣诞节、受难节、复活节、感恩节、生日、家庭聚餐、校友聚餐、结婚周年等）来举办&ldquo;福音性聚会&rdquo;。未来这周，小组成员可以一起为此事祷告、开始预备、策划并分配工作。</li>
	<li class="forward">在《福音行动表》中列下4-5位你将邀请参加福音性聚会的亲友的名单，为他们祷告。</li>
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

<p style="text-align:justify"><span><span><span lang="ZH-CN">亲爱的天父，感谢祢，我们愿意成为那被祢差遣的人，祈求祢给我们力量与勇气，按着祢的心意作和平之子，将我们所学到的知识、方法转化为行动。主啊，帮助我们按祢所赐的恩赐、才干和信心作忠心的管家，凡事得祢的称许。主啊，庄稼已经熟了，我们求庄稼的主打发工人去收割庄稼。求祢祝福这些我们将要举办的福音性聚会，让更多人认识祢、邀请祢、接受祢成为他们的救主。愿撒种和收割的，都一同欢呼！奉主耶稣的名祷告，阿们。</span></span></span></p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->