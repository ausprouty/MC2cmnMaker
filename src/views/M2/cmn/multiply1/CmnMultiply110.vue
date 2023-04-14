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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>10.</h1></div>
                        <div class="chapter_title ltr"><h1>分享个人故事</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课将学习如何与人分享你认识耶稣基督的故事，以此鼓励人，耶稣也能改变他们的生命。本课使用保罗的见证作为引导，使我们可以体验把自己的故事告诉其他人，并把故事写在纸上。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇66:1-4</p>

<p class="back bible"><sup>1</sup>全地都当向神欢呼！<sup>2</sup>歌颂他名的荣耀，用赞美的言语将他的荣耀发明。<sup>3</sup>当对神说：&ldquo;你的作为何等可畏！因你的大能，仇敌要投降你。<sup>4</sup>全地要敬拜你，歌颂你，要歌颂你的名。</p>

</div>

<ul class="back">
	<li class="back">现在让我们诵读经文两遍，学唱一首诗歌，并按经文来轮流开声称谢神！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路10:2</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>就对他们说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主，打发工人出去收他的庄稼。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">约翰福音3:8描述圣灵就像风一样。我们既不能控制圣灵，也不能使唤祂，因祂随自己的意思运行。我们无法产生运动，只有圣灵自己能做成这事。然而，我们能做的是预备自己，以致当圣灵动工时，我们就能与祂同工。 之前课程所学的技巧，正是预备我们与圣灵同工。感恩的是，圣灵在各处运行！让我们预备好自己，并祷告与圣灵同工。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><ul>
	<li class="up">
	<p><strong>+ 故事背景</strong></p>
	</li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">犹太人的领袖诬告保罗违反圣殿律法，使他遭逮捕。保罗在官员面前为自己辩护，分享他认识基督的经过。</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《使徒行传 22:1-21》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 使徒行传 22:1-21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">1 </sup>&ldquo;诸位父兄，请听我现在对你们分诉！&rdquo;<sup class="versenum">2&nbsp;</sup>众人听他说的是希伯来话，就更加安静了。</p>

<p><sup class="versenum">3&nbsp;</sup><u class="person underline">保罗</u>说：&ldquo;我原是犹太人，生在基利家的大数，长在这城里；在<u class="person underline">迦玛列</u>门下，按着我们祖宗严紧的律法受教；热心侍奉神，像你们众人今日一样。<sup class="versenum">4&nbsp;</sup>我也曾逼迫奉这道的人，直到死地，无论男女都锁拿下监。<sup class="versenum">5&nbsp;</sup>这是大祭司和众长老都可以给我作见证的。我又领了他们达于弟兄的书信，往大马士革去，要把在那里奉这道的人锁拿，带到耶路撒冷受刑。<sup class="versenum">6&nbsp;</sup>我将到大马士革，正走的时候，约在晌午，忽然从天上发大光，四面照着我。<sup class="versenum">7&nbsp;</sup>我就仆倒在地，听见有声音对我说：&lsquo;<u class="person underline">扫罗</u>，<u class="person underline">扫罗</u>，你为什么逼迫我？&rsquo;<sup class="versenum">8&nbsp;</sup>我回答说：&lsquo;主啊，你是谁？&rsquo;他说：&lsquo;我就是你所逼迫的拿撒勒人耶稣。&rsquo;<sup class="versenum">9&nbsp;</sup>与我同行的人看见了那光，却没有听明那位对我说话的声音。<sup class="versenum">10&nbsp;</sup>我说：&lsquo;主啊，我当做什么？&rsquo;主说：&lsquo;起来！进大马士革去，在那里要将所派你做的一切事告诉你。&rsquo;<sup class="versenum">11&nbsp;</sup>我因那光的荣耀不能看见，同行的人就拉着我手进了大马士革。<sup class="versenum">12&nbsp;</sup>那里有一个人名叫<u class="person underline">亚拿尼亚</u>，按着律法是虔诚人，为一切住在那里的犹太人所称赞。<sup class="versenum">13&nbsp;</sup>他来见我，站在旁边对我说：&lsquo;兄弟<u class="person underline">扫罗</u>，你可以看见！&rsquo;我当时往上一看，就看见了他。<sup class="versenum">14&nbsp;</sup>他又说：&lsquo;我们祖宗的神拣选了你，叫你明白他的旨意，又得见那义者，听他口中所出的声音。<sup class="versenum">15&nbsp;</sup>因为你要将所看见的、所听见的，对着万人为他作见证。<sup class="versenum">16&nbsp;</sup>现在你为什么耽延呢？起来，求告他的名受洗，洗去你的罪！&rsquo;</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;后来我回到耶路撒冷，在殿里祷告的时候魂游象外，<sup class="versenum">18&nbsp;</sup>看见主向我说：&lsquo;你赶紧地离开耶路撒冷，不可迟延。因你为我作的见证，这里的人必不领受。&rsquo;<sup class="versenum">19&nbsp;</sup>我就说：&lsquo;主啊，他们知道我从前把信你的人收在监里，又在各会堂里鞭打他们。<sup class="versenum">20&nbsp;</sup>并且你的见证人<u class="person underline">司提反</u>被害流血的时候，我也站在旁边欢喜，又看守害死他之人的衣裳。&rsquo;<sup class="versenum">21&nbsp;</sup>主向我说：&lsquo;你去吧！我要差你远远地往外邦人那里去。&rsquo;&rdquo;</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/110.mp4" type="button" class="external-movie">
         观看&nbsp;使徒行传 22:1-21&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

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
	<li class="up"><strong>故事重述</strong>

	<ul class="up">
		<li class="up">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="up">保罗的故事（见证）可以归纳成三个部分：</p>

<ol>
	<li class="up">遇见基督前的生命；</li>
	<li class="up">遇见基督的经过；</li>
	<li class="up">遇见基督后的生命。</li>
</ol>

<p class="up">若我们用这样的方式分享见证，将能有效告诉别人耶稣在我们身上的作为。我们的故事就是最有力的见证 ，并告诉人认识上帝的好处。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward">彼得前书3:15</p>

<p class="forward bible">只要心里尊主基督为圣。有人问你们心中盼望的缘由，就要常作准备，以温柔、敬畏的心回答各人。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward">练习与反馈
	<ul class="forward">
		<li class="forward">两人一组，彼此分享自己的故事。</li>
		<li class="forward">聆听者记下从对方故事中听到的重点，并根据所听到的给予反馈。</li>
		<li class="forward">5分钟后，互换角色练习。</li>
	</ul>
	</li>
	<li class="forward">花10钟简略写下你的个人故事，每部分用三个形容词和句子记下。
	<ul class="forward">
		<li class="forward">你认识基督前的生命景况如何？</li>
		<li class="forward">你是怎么遇见基督的？</li>
		<li class="forward">在你接受基督之后，你的生命景况如何？</li>
	</ul>
	</li>
	<li class="forward">练习与反馈（第二次）
	<ul class="forward">
		<li class="forward">另找一位同伴，重复讲一次自己的故事</li>
		<li class="forward">以自己听到的给予对方反馈</li>
		<li class="forward">3分钟后，互换角色练习</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">本周花时间把你的个人故事写下（参考并使用下一页的格式），下周交给组长。</li>
	<li class="forward">本周找一位亲朋邻舍分享你的个人信主故事。</li>
	<li class="forward">依照你今天所学习到的，写下一个&ldquo;届时我会&rdquo;的宣告，并于组内分享。</li>
</ul>

<p class="indent2">我在_______________（时间/地点）将会____________________(对象/事情）。</p>

<ul class="forward">
	<li class="forward">花3分钟写下你在本课的学习心得，或是你未来一周可能有的其他行动点。</li>
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


<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p class="forward">亲爱的天父，感谢祢是那位又真又活的神，祢使我可以经历与祢真实敞开的关系，使我可以脱去旧人，焕发新的生命。求祢帮助我时刻思想祢的所是，记念祢的作为，并常存感恩的心。求祢帮助我珍惜祢所赐的生命，警醒度日，主动向身边的人分享祢在我生命的作为和故事。奉主耶稣基督的名求，阿们！</p>

</div>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->