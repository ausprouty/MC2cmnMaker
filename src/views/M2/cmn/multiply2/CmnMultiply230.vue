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
                        <div class="chapter_number ltr"><h1>30.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与误解</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路7:9</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>耶稣听见这话，就稀奇他，转身对跟随的众人说：&ldquo;我告诉你们：这么大的信心，就是在以色列中我也没有遇见过！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p><span><span><span lang="ZH-CN">在待人的事上，世上似乎有很多不同层次的人：有以善待恶的人、有以多善待少善的人、有以少善待多善的人、有以恶待善的人。但我们从主耶稣登山宝训的教导看到，基督徒应该以行善为属天善良生命自然的流露，完全不存在生意算盘的机械性考虑。因为我们若不能以基督的生命去主导自己的待人处事与接物，可能因为自己里面根本没有基督的生命；也有可能是因为自己存心抵挡压制基督的生命！ 求主监察，我们当以基督的心为心，凡事从心底为主而作，讨祂的喜悦和称许。</span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">耶稣医治了一个外邦百夫长的仆人，百夫长的信心甚至连耶稣都感到惊讶（<span class="popup-link" @click = "popUp('pop2')"> 路加福音7:1-10</span>）；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣对百姓讲完了这一切的话，就进了迦百农。</p>

	<p><sup class="versenum">2&nbsp;</sup>有一个百夫长所宝贵的仆人害病快要死了。<sup class="versenum">3&nbsp;</sup>百夫长风闻耶稣的事，就托犹太人的几个长老去求耶稣来救他的仆人。<sup class="versenum">4&nbsp;</sup>他们到了耶稣那里，就切切地求他，说：&ldquo;你给他行这事是他所配得的，<sup class="versenum">5&nbsp;</sup>因为他爱我们的百姓，给我们建造会堂。&rdquo;<sup class="versenum">6&nbsp;</sup>耶稣就和他们同去。离那家不远，百夫长托几个朋友去见耶稣，对他说：&ldquo;主啊，不要劳动，因你到我舍下，我不敢当，<sup class="versenum">7&nbsp;</sup>我也自以为不配去见你。只要你说一句话，我的仆人就必好了。<sup class="versenum">8&nbsp;</sup>因为我在人的权下，也有兵在我以下，对这个说&lsquo;去！&rsquo;他就去，对那个说&lsquo;来！&rsquo;他就来，对我的仆人说&lsquo;你做这事！&rsquo;他就去做。&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣听见这话，就稀奇他，转身对跟随的众人说：&ldquo;我告诉你们：这么大的信心，就是在以色列中我也没有遇见过！&rdquo;<sup class="versenum">10&nbsp;</sup>那托来的人回到百夫长家里，看见仆人已经好了。</p>
	<!-- end bible --></div>
	同时在拿因的城门口，耶稣也出于怜悯，叫一个寡妇的儿子从死里复活，这震撼人的神迹引发众口纷纭说：&ldquo;有大先知在我们中间兴起了&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 路加福音7:11-17</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>过了不多时，耶稣往一座城去，这城名叫拿因，他的门徒和极多的人与他同行。<sup class="versenum">12&nbsp;</sup>将近城门，有一个死人被抬出来。这人是他母亲独生的儿子，他母亲又是寡妇。有城里的许多人同着寡妇送殡。<sup class="versenum">13&nbsp;</sup>主看见那寡妇，就怜悯她，对她说：&ldquo;不要哭！&rdquo;<sup class="versenum">14&nbsp;</sup>于是进前按着杠，抬的人就站住了。耶稣说：&ldquo;少年人，我吩咐你，起来！&rdquo;<sup class="versenum">15&nbsp;</sup>那死人就坐起，并且说话。耶稣便把他交给他母亲。<sup class="versenum">16&nbsp;</sup>众人都惊奇，归荣耀于神，说：&ldquo;有大先知在我们中间兴起来了！&rdquo;又说：&ldquo;神眷顾了他的百姓！&rdquo;<sup class="versenum">17&nbsp;</sup>他这事的风声就传遍了犹太和周围地方。</p>
	<!-- end bible --></div>
	这位行大神迹的拿撒勒人究竟是谁？此时，被分封王希律关在狱中的施洗约翰风闻这些传言，在不确定中，他吩咐自己的门徒前往求见耶稣，并问耶稣：&ldquo;你真的是我们所等候的那一位吗？&rdquo;</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音7:18-35》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音7:18-35</button><div class="collapsed" id ="Text0">

<p><sup>18</sup>约翰的门徒把这些事都告诉约翰。<sup>19</sup>他便叫了两个门徒来，打发他们到主那里去，说：&ldquo;那将要来的是你吗？还是我们等候别人呢？&rdquo;<sup>20</sup>那两个人来到耶稣那里，说：&ldquo;施洗的约翰打发我们来问你：&lsquo;那将要来的是你吗？还是我们等候别人呢？&rsquo;&rdquo;</p>

<p><sup>21</sup>正当那时候，耶稣治好了许多有疾病的，受灾患的，被恶鬼附着的，又开恩叫好些瞎子能看见。<sup>22</sup>耶稣回答说：&ldquo;你们去，把所看见所听见的事告诉约翰，就是瞎子看见，瘸子行走，长大麻疯的洁净，聋子听见，死人复活，穷人有福音传给他们。<sup>23</sup>凡不因我跌倒的，就有福了！&rdquo;</p>

<p><sup>24</sup>约翰所差来的人既走了，耶稣就对众人讲论约翰说：&ldquo;你们从前出去到旷野，是要看什么呢？要看风吹动的芦苇吗？<sup>25</sup>你们出去，到底是要看什么？要看穿细软衣服的人吗？那穿华丽衣服 、宴乐度日的人是在王宫里。<sup>26</sup>你们出去，究竟是要看什么？要看先知吗？我告诉你们，是的，他比先知大多了。<sup>27</sup>经上记着说：&lsquo;我要差遣我的使者在你前面预备道路。&rsquo;所说的就是这个人。<sup>28</sup>我告诉你们，凡妇人所生的，没有一个大过约翰的；然而　神国里最小的比他还大。&rdquo;<sup>29</sup>众百姓和税吏既受过约翰的洗，听见这话，就以　神为义；<sup>30</sup>但法利赛人和律法师没有受过约翰的洗，竟为自己废弃了　神的旨意。（注：<sup>29</sup>、<sup>30</sup>两节或作&ldquo;众百姓和税吏听见了约翰的话，就受了他的洗，便以　神为义；但法利赛人和律法师不受约翰的洗，竟为自己废弃了　神的旨意&rdquo;）。<sup>31</sup>主又说：&ldquo;这样，我可用什么比这世代的人呢？他们好像什么呢？<sup>32</sup>好像孩童坐在街市上，彼此呼叫说：&lsquo;我们向你们吹笛，你们不跳舞；我们向你们举哀，你们不啼哭。&rsquo;<sup>33</sup>施洗的约翰来，不吃饼，不喝酒，你们说他是被鬼附着的。<sup>34</sup>人子来，也吃也喝，你们说他是贪食好酒的人，是税吏和罪人的朋友。<sup>35</sup>但智慧之子都以智慧为是。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/230.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音7:18-35&nbsp;</button>
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

<p class="up">身为领袖的耶稣常被人误解。这个故事里，祂替身为领袖的施洗约翰背书。施洗约翰坐监时，心中起了疑惑，不确定耶稣是否带来上帝的国。于是打发几个剩下的门徒去问耶稣。耶稣引用了旧约经文中的《以赛亚书》回应（祂在拿撒勒也用这段经文），叫他们回去告诉施洗约翰祂所做的正是弥赛亚的工作。耶稣在门徒面前称赞施洗约翰是所有人当中最大的一个。这和众人谈论施洗约翰时所说的恶言，形成对比。即使在观看耶稣超过两年之后，这些人还是指控祂被鬼附，是贪食好酒的人。(可见)被误解是领导者必须经历的。</p>

<p class="up">（进深研读：<span class="popup-link" @click = "popUp('pop4')"> 马太福音11:2-19</span>）</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">2&nbsp;</sup><u class="person underline">约翰</u>在监里听见基督所做的事，就打发两个门徒去，<sup class="versenum">3&nbsp;</sup>问他说：&ldquo;那将要来的是你吗？还是我们等候别人呢？&rdquo;<sup class="versenum">4&nbsp;</sup>耶稣回答说：&ldquo;你们去，把所听见、所看见的事告诉<u class="person underline">约翰</u>，<sup class="versenum">5&nbsp;</sup>就是：瞎子看见，瘸子行走，长大麻风的洁净，聋子听见，死人复活，穷人有福音传给他们。<sup class="versenum">6&nbsp;</sup>凡不因我跌倒的，就有福了！&rdquo;<sup class="versenum">7&nbsp;</sup>他们走的时候，耶稣就对众人讲论<u class="person underline">约翰</u>说：&ldquo;你们从前出到旷野是要看什么呢？要看风吹动的芦苇吗？<sup class="versenum">8&nbsp;</sup>你们出去到底是要看什么？要看穿细软衣服的人吗？那穿细软衣服的人是在王宫里。<sup class="versenum">9&nbsp;</sup>你们出去究竟是为什么？是要看先知吗？我告诉你们，是的，他比先知大多了。<sup class="versenum">10&nbsp;</sup>经上记着说：&lsquo;我要差遣我的使者在你前面预备道路&rsquo;，所说的就是这个人。</p>

<p><sup class="versenum">11&nbsp;</sup>&ldquo;我实在告诉你们：凡妇人所生的，没有一个兴起来大过施洗<u class="person underline">约翰</u>的；然而天国里最小的比他还大。<sup class="versenum">12&nbsp;</sup>从施洗<u class="person underline">约翰</u>的时候到如今，天国是努力进入的，努力的人就得着了。<sup class="versenum">13&nbsp;</sup>因为众先知和律法说预言到<u class="person underline">约翰</u>为止；<sup class="versenum">14&nbsp;</sup>你们若肯领受，这人就是那应当来的<u class="person underline">以利亚</u>。<sup class="versenum">15&nbsp;</sup>有耳可听的，就应当听！<sup class="versenum">16&nbsp;</sup>我可用什么比这世代呢？好像孩童坐在街市上招呼同伴说：<sup class="versenum">17&nbsp;</sup>&lsquo;我们向你们吹笛，你们不跳舞！我们向你们举哀，你们不捶胸！&rsquo;<sup class="versenum">18&nbsp;</sup><u class="person underline">约翰</u>来了，也不吃也不喝，人就说他是被鬼附着的。<sup class="versenum">19&nbsp;</sup>人子来了，也吃也喝，人又说他是贪食好酒的人，是税吏和罪人的朋友。但智慧之子总以智慧为是。&rdquo;</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路7:22</p>

<p class="forward bible">耶稣回答说：&ldquo;你们去，把所看见所听见的事告诉约翰，就是瞎子看见，瘸子行走，长大麻疯的洁净，聋子听见，死人复活，穷人有福音传给他们。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">施洗约翰并不是不信，而是不能确定，他提醒我们，在面对慕道友的&ldquo;不信&rdquo;时，我们应该有怎样的态度？若你在困难中时，神没有按照你所期望的方式解决你的问题，你对神的信心会不会动摇？你有这样的经验吗？你从其中学到什么功课？</li>
	<li class="forward">耶稣和施洗约翰不同的生活方式提醒我们，传福音也可以有不同的风格和方式，因此我们是不是应该持更开放的态度？你曾经遇到过任何使你感到困扰或不能接受的传福音的作法吗？为什么？</li>
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
	<li class="forward">最近你遇到什么事情，以致你对基督信仰的确定性有疑惑？把它带到施恩的主面前，让主耶稣借着不同的方式来向你说话，同时把这经历写下来，下周分享。</li>
	<li class="forward">初信者可能对基督信仰有疑惑，求神也借着你的信仰历程和经历来帮助及陪伴他们成长。为他们祷告并在初信栽培时，解答他们可能有的信仰疑惑。</li>
	<li class="forward">在《信徒动员表》中写下2-3位你所知道最近因遇到一些事情而信心软弱，或是对信仰有疑惑的弟兄姐妹，为他们祷告。祈求天父借着圣灵使他们心里的力量刚强起来，开他们属灵的眼睛，真实体会基督长阔高深的爱。也求主耶稣使用你关怀和安慰他们，成为他们的属灵同伴，扶持和建立他们的属灵生命。</li>
	<li class="forward">在《福音行动表》列下那些目前还不认识神、甚至反对、取笑和攻击你信仰的家人或亲友祷告。求神开福音的门，刚强你的心，勇敢传讲基督福音。</li>
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

<p>创造宇宙万有的天父，感谢祢对我们生命有奇妙的计划。感谢祢让我们在这国家、这城市、这原生家庭成长。天父啊，我们的国家需要祢，求祢在执政掌权者和人的心中做改变的工作。已经相信祢的，求祢坚定他们的信心，靠祢站立得住；那些还不信，而且公然反对祢及攻击祢子民的，求祢赦免他们。求圣灵开他们的心眼，得以看见主耶稣是独一的救主，也是审判的主。求天父坚定祢的众子民，在遭受反对或是误解时，心里依然坚定，单单仰望为我们信心创始成终的耶稣。奉主耶稣的名祈求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->