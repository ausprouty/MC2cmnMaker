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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>35.</h1></div>
                        <div class="chapter_title ltr"><h1>公开卫道策略——雅典</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒17:11</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>这地方的人贤于帖撒罗尼迦的人，甘心领受这道，天天考查圣经，要晓得这道是与不是。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">吕底亚是保罗在全欧洲所结的第一个果子，福音顺利地在腓立比生了根，而且也长得很好，印证了圣灵的带领（<span class="popup-link" @click = "popUp('pop2')"> 腓1:3</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>我每逢想念你们，就感谢我的神；</p>
	<!-- end bible --></div>
	人之所以能信主，完全是神的工作，&ldquo;主就开导她的心，叫她留心听保罗所讲的话。&rdquo;传福音的人只是神手中的器皿，因&ldquo;我们作基督的使者，就好像神借我们劝你们一般&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 林后5:20</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>所以，我们做基督的使者，就好像神借我们劝你们一般，我们替基督求你们与神和好。</p>
	<!-- end bible --></div>
	所以一定要站稳与神同工的地位（<span class="popup-link" @click = "popUp('pop4')"> 林后6:1</span>），

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>我们与神同工的，也劝你们不可徒受他的恩典。</p>
	<!-- end bible --></div>
	让神借着我们来做工，而不是我们替神来做工。愿我们成为神手中合用的器皿，为主所用，经历与神同工的喜乐，成就主的美意并荣耀主的圣名。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗一行人去到的下一个城市是马其顿的首府帖撒罗尼迦，保罗按照惯例先往犹太人的会堂，向犹太人传讲耶稣就是弥赛亚，虽然有不少人信了，但不信的犹太人煽动群众，引发暴乱，保罗和西拉因此急促离开帖城，来到了庇哩亚。</p>

<p class="indent2">庇哩亚人对福音的反应较帖城的人更热诚开放，然而发生在帖城的历史又重演了一遍，迫使保罗不得不离开。当保罗被迫离开庇哩亚的时候，他来到了原先不在宣教计划中的雅典。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒17:16-34》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒17:16-34</button><div class="collapsed" id ="Text0">

<p><sup>16</sup>保罗在雅典 等候他们的时候，看见满城都是偶像，就心里着急，<sup>17</sup>于是在会堂里与犹太人和虔敬的人，并每日在市上所遇见的人辩论。<sup>18</sup>还有伊壁鸠鲁 和斯多亚 两门的学士与他争论。有的说：&ldquo;这胡言乱语的要说甚么？&rdquo;有的说：&ldquo;他似乎是传说外邦鬼神的。&rdquo;这话是因保罗传讲耶稣与复活的道。<sup>19</sup>他们就把他带到亚略巴古 ，说：&ldquo;你所讲的这新道，我们也可以知道吗？<sup>20</sup>因为你有些奇怪的事传到我们耳中，我们愿意知道这些事是甚么意思。&rdquo;<sup>21</sup>（雅典人和住在那里的客人都不顾别的事，只将新闻说说听听。）</p>

<p><sup>22</sup>保罗站在亚略巴古当中，说： &ldquo;众位雅典人哪，我看你们凡事很敬畏鬼神。<sup>23</sup>我游行的时候，观看你们所敬拜的，遇见一座坛，上面写着&lsquo;未识之神&rsquo;；你们所不认识而敬拜的，我现在告诉你们。<sup>24</sup>创造宇宙和其中万物的　神，既是天地的主，就不住人手所造的殿， <sup>25</sup>也不用人手服事，好像缺少甚么；自己倒将生命、气息、万物赐给万人。<sup>26</sup>他从一本造出万族的人（注：&ldquo;本&rdquo;有古卷作&ldquo;血脉&rdquo;），住在全地上，并且预先定准他们的年限和所住的疆界；<sup>27</sup>要叫他们寻求　神，或者可以揣摩而得。其实他离我们各人不远，<sup>28</sup>我们生活、动作、存留，都在乎他。就如你们作诗的，有人说：&lsquo;我们也是他所生的。&rsquo;<sup>29</sup>我们既是　神所生的，就不当以为　神的神性像人用手艺、心思所雕刻的金、银、石。<sup>30</sup>世人蒙昧无知的时候，　神并不监察，如今却吩咐各处的人都要悔改。<sup>31</sup>因为他已经定了日子，要借着他所设立的人按公义审判天下，并且叫他从死里复活，给万人作可信的凭据。&rdquo;</p>

<p><sup>32</sup>众人听见从死里复活的话，就有讥诮他的；又有人说：&ldquo;我们再听你讲这个吧！&rdquo;<sup>33</sup>于是保罗从他们当中出去了。<sup>34</sup>但有几个人贴近他，信了主，其中有亚略巴古的官丢尼修，并一个妇人，名叫大马哩，还有别人一同信从。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/335.mp4" type="button" class="external-movie">
         观看&nbsp;徒17:16-34&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">主的手如何借着门徒在这城中动工和带来影响？结果如何？</li>
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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">保罗有颗怜悯的心，当他在希腊的雅典城看见人努力要取悦这么多假神，心里非常难过。在等候西拉和提摩太从马其顿赶来的同时，他就在城里继续传福音给不同的人，包括：会堂里的犹太人、市场里遇见的异教徒、不同派的哲学家（如现今的大学教授）。结果这些人对所传的道都感到好奇，就安排他到官长的议会上。我们看到保罗为雅典的官长调整了信息内容，他从这群听众知道的&ldquo;未识之神&rdquo;开始讲起，并引用了一首希腊诗。我们学到传讲福音的方式可以依据不同文化有所变化，然而不能改变需要悔改和信耶稣的福音之道。不同于其他城市，雅典只有少数几个人响应。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒17:30-31</p>

<p class="forward bible"><sup>30</sup>世人蒙昧无知的时候，　神并不监察，如今却吩咐各处的人都要悔改。<sup>31</sup>因为他已经定了日子，要借着他所设立的人按公义审判天下，并且叫他从死里复活，给万人作可信的凭据。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">保罗这篇讲道最重要的信息和特色是什么？这对你在个人传福音或是讲道中，有什么启发和提醒？为什么？</li>
	<li class="forward">当你到一个新的城市或进入一个福音对象的家里时，一般你会观察什么？为什么？若你看到不同的偶像/宗教，你对这些的反应是什么？</li>
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
	<li class="forward">保罗在雅典留下了一篇伟大的讲章，这篇亚略巴古的讲道成为向异教徒宣教的最佳范本，保罗再次运用他传福音的原则：向什么样的人就做什么样的人。
	<ul class="forward">
		<li class="forward">保罗的听众是喜爱哲学的雅典人，保罗就以他们所能理解的风格和内容切入福音，这篇&ldquo;处境化&rdquo;的讲章向我们示范，福音是不变的，讲述福音的方式却是多变的。在向不同的人群分享福音时，求主给我们有颗怜悯他人的心，圣灵赐给我们智慧，晓得如何切入福音，把人带到神面前。</li>
		<li class="forward">求神让每位基督徒都有颗谦卑受教的心，把握和熟练至少一种传福音的工具和方法，同时也学习其他传福音的技能，在生活中为主赢得更多的人。</li>
		<li class="forward">也为那些主动走进或是被邀请前来教会的慕道朋友祷告，求神借着福音信息，切中他们的需要。也祷告神开他们的心窍，看到神是创造宇宙万有的主宰，如今世人可以借着信耶稣得以认识神，归向祂和经历祂。</li>
	</ul>
	</li>
	<li class="forward">求神使用你和其他倍增小组的组长，在教会或给其他所配搭的教会提供《启动信徒》课程培训，训练弟兄姐妹成为福音的使者，为主得人、造就人。</li>
	<li class="forward">本周把《帖撒罗尼迦前书》阅读一遍，将心得写下，下周小组分享。下图书卷图表仅供参考。</li>
</ul>

<p class="forward">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply3/M3L35.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply3/M3L35.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply3/M3L35.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

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

<p class="forward">万军之耶和华我们的神啊，祢是创造天地万物的主宰! 祢是真神活神、大而可畏的主，从亘古到永远，祢是永不改变的。我们甚愿至高荣耀归于我们在天上的父，地上平安归于祢所喜悦的人。天父啊，天使天军都要赞美祢，万国万民都要称颂祢，我们这群蒙恩的人更要称谢祢。求祢开世人的心眼，得知祢是昔在、今在、以后永在的神，真知道除了耶稣以外，别无拯救，因为天下人间没有赐下别的名，我们可以靠着得救。愿人都来就近祢，得享祢在创世以前所预备的救恩。感恩祷告奉主耶稣的名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->