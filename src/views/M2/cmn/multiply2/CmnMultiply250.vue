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
                        <div class="chapter_number ltr"><h1>50.</h1></div>
                        <div class="chapter_title ltr"><h1>复活型领导力</h1></div>
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
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督生命的福音行动。</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约19:30</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>耶稣尝了那醋，就说：&ldquo;成了！&rdquo;便低下头，将灵魂交付神了。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>上帝的逾越节羔羊被杀流血，圣殿里的幔子裂开。耶稣是最后的献祭，使人可以借着祂能到永活上帝的面前。因着耶稣舍了自己的生命，上帝使那无罪的，替我们成为罪，好叫我们在祂里面成为上帝的义。何等牺牲的爱，神的爱子耶稣为我们钉死十字架，担负世人的罪孽。天父的心意明明可知，就是祂不愿一人沉沦，乃愿人人悔改，使人借着信靠基督，可以享受祂为人所预备永恒的生命。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" /></p>

<div class="lesson-subtitle">向上看</div>
</div>

<p class="back">&nbsp;</p>

<ul class="back">
	<li class="back"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">在十字架上，耶稣意识到自己在世界上的使命已经完成了，祂以完全的顺服成全了父的旨意，祂在世界上的最后一句话是&ldquo;成了&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 约19:28-30</span>）；
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">28&nbsp;</sup>这事以后，耶稣知道各样的事已经成了，为要使经上的话应验，就说：&ldquo;我渴了。&rdquo;<sup class="versenum">29&nbsp;</sup>有一个器皿盛满了醋，放在那里。他们就拿海绒蘸满了醋，绑在牛膝草上，送到他口。<sup class="versenum">30&nbsp;</sup>耶稣尝了那醋，就说：&ldquo;成了！&rdquo;便低下头，将灵魂交付神了。</p>
	<!-- end bible --></div>
	为要应验经上的话，作者描述了耶稣在十字架上的一些细节：&ldquo;他的骨头一根也没有折断&rdquo;、&ldquo;他们要仰望自己所扎的人&rdquo;，有人为亲眼见到的这一幕作见证，为要使人相信这件事是千真万确的。</li>
	<li class="back"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音19:31-20:31》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音19:31-20:31</button><div class="collapsed" id ="Text0">

<p><sup>19</sup>:<sup>31</sup>犹太人因这日是预备日，又因那安息日是个大日，就求彼拉多叫人打断他们的腿，把他们拿去，免得尸首当安息日留在十字架上。<sup>32</sup>于是兵丁来，把头一个人的腿，并与耶稣同钉第二个人的腿都打断了。<sup>33</sup>只是来到耶稣那里，见他已经死了，就不打断他的腿。<sup>34</sup>惟有一个兵拿枪扎他的肋旁，随即有血和水流出来。<sup>35</sup>看见这事的那人就作见证，他的见证也是真的，并且他知道自己所说的是真的，叫你们也可以信。<sup>36</sup>这些事成了，为要应验经上的话说：&ldquo;他的骨头一根也不可折断。&rdquo;<sup>37</sup>经上又有一句说：&ldquo;他们要仰望自己所扎的人。&rdquo;</p>

<p><sup>38</sup>这些事以后，有亚利马太人约瑟，是耶稣的门徒，只因怕犹太人，就暗暗地作门徒。他来求彼拉多，要把耶稣的身体领去。彼拉多允准，他就把耶稣的身体领去了。<sup>39</sup>又有尼哥德慕，就是先前夜里去见耶稣的，带着没药和沉香约有一百斤前来。<sup>40</sup>他们就照犹太人殡葬的规矩，把耶稣的身体用细麻布加上香料裹好了。<sup>41</sup>在耶稣钉十字架的地方有一个园子，园子里有一座新坟墓，是从来没有葬过人的。<sup>42</sup>只因是犹太人的预备日，又因那坟墓近，他们就把耶稣安放在那里。</p>

<p><sup>20</sup>:<sup>1</sup>七日的第一日清早，天还黑的时候，抹大拉的马利亚来到坟墓那里，看见石头从坟墓挪开了，<sup>2</sup>就跑来见西门彼得和耶稣所爱的那个门徒，对他们说：&ldquo;有人把主从坟墓里挪了去，我们不知道放在哪鶪！&rdquo;<sup>3</sup>彼得和那门徒就出来，往坟墓那里去。<sup>4</sup>两个人同跑，那门徒比彼得跑得更快，先到了坟墓，<sup>5</sup>低头往里看，就见细麻布还放在那鶪，只是没有进去。<sup>6</sup>西门彼得随后也到了，进坟墓里去，就看见细麻布还放在那鶪，<sup>7</sup>又看见耶稣的裹头巾没有和细麻布放在一处，是另在一处卷着。<sup>8</sup>先到坟墓的那门徒也进去，看见就信了。<sup>9</sup>因为他们还不明白圣经的意思，就是耶稣必要从死里复活。</p>

<p><sup>10</sup>于是两个门徒回自己的住处去了。<sup>11</sup>马利亚却站在坟墓外面哭，哭的时候，低头往坟墓里看，<sup>12</sup>就见两个天使，穿着白衣，在安放耶稣身体的地方坐着，一个在头，一个在脚。<sup>13</sup>天使对她说：&ldquo;妇人，你为什么哭？&rdquo;她说：&ldquo;因为有人把我主挪了去，我不知道放在哪里。&rdquo;<sup>14</sup>说了这话，就转过身来，看见耶稣站在那里，却不知道是耶稣。<sup>15</sup>耶稣问她说：&ldquo;妇人，为什么哭？你找谁呢？&rdquo;马利亚以为是看园的，就对他说：&ldquo;先生，若是你把他移了去，请告诉我你把他放在哪里，我便去取他。&rdquo;<sup>16</sup>耶稣说：&ldquo;马利亚！&rdquo;马利亚就转过来，用希伯来话对他说：&ldquo;拉波尼（拉波尼就是夫子的意思）！&rdquo;<sup>17</sup>耶稣说：&ldquo;不要摸我，因我还没有升上去见我的父。你往我弟兄那里去，告诉他们说：我要升上去见我的父，也是你们的父；见我的　神，也是你们的　神。&rdquo;<sup>18</sup>抹大拉的马利亚就去告诉门徒说：&ldquo;我已经看见了主！&rdquo;她又将主对她说的这话告诉他们。</p>

<p><sup>19</sup>那日（就是七日的第一日）晚上，门徒所在的地方，因怕犹太人，门都关了。耶稣来站在当中，对他们说：&ldquo;愿你们平安！&rdquo;<sup>20</sup>说了这话，就把手和肋旁指给他们看。门徒看见主，就喜乐了。<sup>21</sup>耶稣又对他们说：&ldquo;愿你们平安！父怎样差遣了我，我也照样差遣你们。&rdquo;<sup>22</sup>说了这话，就向他们吹一口气，说：&ldquo;你们受圣灵。<sup>23</sup>你们赦免谁的罪，谁的罪就赦免了；你们留下谁的罪，谁的罪就留下了。&rdquo;</p>

<p><sup>24</sup>那十二个门徒中，有称为低土马的多马，耶稣来的时候，他没有和他们同在。<sup>25</sup>那些门徒就对他说：&ldquo;我们已经看见主了。&rdquo;多马却说：&ldquo;我非看见他手上的钉痕，用指头探入那钉痕，又用手探入他的肋旁，我总不信。&rdquo;<sup>26</sup>过了八日，门徒又在屋里，多马也和他们同在。门都关了。耶稣来站在当中说：&ldquo;愿你们平安！&rdquo;<sup>27</sup>就对多马说：&ldquo;伸过你的指头来，摸（注：&ldquo;摸&rdquo;原文作&ldquo;看&rdquo;）我的手；伸出你的手来，探入我的肋旁。不要疑惑，总要信！&rdquo;<sup>28</sup>多马说：&ldquo;我的主，我的　神！&rdquo;<sup>29</sup>耶稣对他说：&ldquo;你因看见了我才信，那没有看见就信的有福了！&rdquo;<sup>30</sup>耶稣在门徒面前另外行了许多神迹，没有记在这书上。<sup>31</sup>但记这些事，要叫你们信耶稣是基督，是　神的儿子，并且叫你们信了他，就可以因他的名得生命。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/250.mp4" type="button" class="external-movie">
         观看约翰福音19:31-20:31</button>
    <div class="collapsed"></div>



<ul class="back">
	<li class="back"><strong>探索与讨论</strong>

	<ul class="back">
		<li class="back">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="back">耶稣怎样向门徒示范生活和事奉，作属神的领袖？</li>
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


<ul class="back">
	<li class="back"><strong>故事重述</strong>

	<ul class="back">
		<li class="back">再读一次这段故事。请小组中一个人口头讲述这故事，并根据需要作更正。</li>
	</ul>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">祂从死里复活了！圣经说耶稣的复活改变了一切。&ldquo;我们若是与基督同死，就信必与他同活。因为知道基督既从死里复活，就不再死，死也不再作他的主了。他死是向罪死了，只有一次；他活是向上帝活着。这样，你们向罪也当看自己是死的；向上帝在基督耶稣里，却当看自己是活的。&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 罗6:8-11</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>我们若是与基督同死，就信必与他同活。<sup class="versenum">9&nbsp;</sup>因为知道，基督既从死里复活，就不再死，死也不再做他的主了。<sup class="versenum">10&nbsp;</sup>他死是向罪死了，只有一次；他活是向神活着。<sup class="versenum">11&nbsp;</sup>这样，你们向罪也当看自己是死的；向神，在基督耶稣里，却当看自己是活的。</p>
	<!-- end bible --></div>
	耶稣胜过死亡的能力在我们里面，使我们能过新生活。当我们让天父改变我们时，复活的耶稣就赐给我们能力胜过生命中的罪。当我们放下自己的意志，让耶稣住在我们里面、使用我们，耶稣的复活大能就会涌流在我们生命中。&ldquo;复活型领导力&rdquo;是让耶稣住在我们里面、使用我们。像耶稣这样的领导方式和只求高抬自己、支配他人的世界的领导方式是根本不同的！</li>
</ul>

<div>
<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-TW">(</span><span lang="ZH-CN">进深学习：<span class="popup-link" @click = "popUp('pop4')"> 路加福音23:50-24:49</span>； </span></span></span>

	<div class="popup invisible" id="pop4"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">安放在新坟墓里</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">50&nbsp;</sup>有一个人名叫<u class="person underline">约瑟</u>，是个议士，为人善良公义，<sup class="versenum">51&nbsp;</sup>众人所谋所为他并没有附从；他本是犹太亚利马太城里素常盼望神国的人。<sup class="versenum">52&nbsp;</sup>这人去见<u class="person underline">彼拉多</u>，求耶稣的身体。<sup class="versenum">53&nbsp;</sup>就取下来，用细麻布裹好，安放在石头凿成的坟墓里，那里头从来没有葬过人。<sup class="versenum">54&nbsp;</sup>那日是预备日，安息日也快到了。<sup class="versenum">55&nbsp;</sup>那些从加利利和耶稣同来的妇女跟在后面，看见了坟墓和他的身体怎样安放。<sup class="versenum">56&nbsp;</sup>她们就回去，预备了香料香膏。</span></span></span></p>

	<p><span><span><span lang="ZH-CN">她们在安息日便遵着诫命安息了。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">从死里复活</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">1 </sup>七日的头一日，黎明的时候，那些妇女带着所预备的香料来到坟墓前，<sup class="versenum">2&nbsp;</sup>看见石头已经从坟墓滚开了。<sup class="versenum">3&nbsp;</sup>她们就进去，只是不见主耶稣的身体。<sup class="versenum">4&nbsp;</sup>正在猜疑之间，忽然有两个人站在旁边，衣服放光。<sup class="versenum">5&nbsp;</sup>妇女们惊怕，将脸伏地。那两个人就对她们说：&ldquo;为什么在死人中找活人呢？<sup class="versenum">6&nbsp;</sup>他不在这里，已经复活了。当记念他还在加利利的时候怎样告诉你们，<sup class="versenum">7&nbsp;</sup>说：&lsquo;人子必须被交在罪人手里，钉在十字架上，第三日复活。&rsquo;&rdquo;<sup class="versenum">8&nbsp;</sup>她们就想起耶稣的话来，<sup class="versenum">9&nbsp;</sup>便从坟墓那里回去，把这一切事告诉十一个使徒和其余的人。<sup class="versenum">10&nbsp;</sup>那告诉使徒的就是抹大拉的<u class="person underline">马利亚</u>和<u class="person underline">约亚拿</u>，并<u class="person underline">雅各</u>的母亲<u class="person underline">马利亚</u>，还有与她们在一处的妇女。<sup class="versenum">11&nbsp;</sup>她们这些话使徒以为是胡言，就不相信。<sup class="versenum">12&nbsp;</sup><u class="person underline">彼得</u>起来，跑到坟墓前，低头往里看，见细麻布独在一处，就回去了，心里稀奇所成的事。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣与两个行路的谈论</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">13&nbsp;</sup>正当那日，门徒中有两个人往一个村子去。这村子名叫以马忤斯，离耶路撒冷约有二十五里。<sup class="versenum">14&nbsp;</sup>他们彼此谈论所遇见的这一切事。<sup class="versenum">15&nbsp;</sup>正谈论相问的时候，耶稣亲自就近他们，和他们同行，<sup class="versenum">16&nbsp;</sup>只是他们的眼睛迷糊了，不认识他。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;你们走路彼此谈论的是什么事呢？&rdquo;他们就站住，脸上带着愁容。<sup class="versenum">18&nbsp;</sup>二人中有一个名叫<u class="person underline">革流巴</u>的回答说：&ldquo;你在耶路撒冷作客，还不知道这几天在那里所出的事吗？&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣说：&ldquo;什么事呢？&rdquo;他们说：&ldquo;就是拿撒勒人耶稣的事。他是个先知，在神和众百姓面前说话行事都有大能，<sup class="versenum">20&nbsp;</sup>祭司长和我们的官府竟把他解去，定了死罪，钉在十字架上。<sup class="versenum">21&nbsp;</sup>但我们素来所盼望、要赎以色列民的就是他。不但如此，而且这事成就，现在已经三天了。<sup class="versenum">22&nbsp;</sup>再者，我们中间有几个妇女使我们惊奇，她们清早到了坟墓那里，<sup class="versenum">23&nbsp;</sup>不见他的身体，就回来告诉我们说看见了天使显现，说他活了。<sup class="versenum">24&nbsp;</sup>又有我们的几个人往坟墓那里去，所遇见的正如妇女们所说的，只是没有看见他。&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣对他们说：&ldquo;无知的人哪，先知所说的一切话，你们的心信得太迟钝了！<sup class="versenum">26&nbsp;</sup>基督这样受害，又进入他的荣耀，岂不是应当的吗？&rdquo;<sup class="versenum">27&nbsp;</sup>于是从<u class="person underline">摩西</u>和众先知起，凡经上所指着自己的话，都给他们讲解明白了。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">显现在以马忤斯</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">28&nbsp;</sup>将近他们所去的村子，耶稣好像还要往前行，<sup class="versenum">29&nbsp;</sup>他们却强留他，说：&ldquo;时候晚了，日头已经平西了，请你同我们住下吧！&rdquo;耶稣就进去，要同他们住下。<sup class="versenum">30&nbsp;</sup>到了坐席的时候，耶稣拿起饼来，祝谢了，掰开，递给他们。<sup class="versenum">31&nbsp;</sup>他们的眼睛明亮了，这才认出他来。忽然耶稣不见了。<sup class="versenum">32&nbsp;</sup>他们彼此说：&ldquo;在路上他和我们说话，给我们讲解圣经的时候，我们的心岂不是火热的吗？&rdquo;<sup class="versenum">33&nbsp;</sup>他们就立时起身，回耶路撒冷去。正遇见十一个使徒和他们的同人聚集在一处，<sup class="versenum">34&nbsp;</sup>说：&ldquo;主果然复活，已经现给<u class="person underline">西门</u>看了。&rdquo;<sup class="versenum">35&nbsp;</sup>两个人就把路上所遇见和掰饼的时候怎么被他们认出来的事，都述说了一遍。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">显现在耶路撒冷</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">36&nbsp;</sup>正说这话的时候，耶稣亲自站在他们当中，说：&ldquo;愿你们平安！&rdquo;<sup class="versenum">37&nbsp;</sup>他们却惊慌害怕，以为所看见的是魂。<sup class="versenum">38&nbsp;</sup>耶稣说：&ldquo;你们为什么愁烦？为什么心里起疑念呢？<sup class="versenum">39&nbsp;</sup>你们看我的手、我的脚，就知道实在是我了。摸我看看！魂无骨无肉，你们看，我是有的。&rdquo;<sup class="versenum">40&nbsp;</sup>说了这话，就把手和脚给他们看。<sup class="versenum">41&nbsp;</sup>他们正喜得不敢信，并且稀奇，耶稣就说：&ldquo;你们这里有什么吃的没有？&rdquo;<sup class="versenum">42&nbsp;</sup>他们便给他一片烧鱼，<sup class="versenum">43&nbsp;</sup>他接过来，在他们面前吃了。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">44&nbsp;</sup>耶稣对他们说：&ldquo;这就是我从前与你们同在之时所告诉你们的话说：<u class="person underline">摩西</u>的律法、先知的书和诗篇上所记的，凡指着我的话都必须应验。&rdquo;<sup class="versenum">45&nbsp;</sup>于是耶稣开他们的心窍，使他们能明白圣经。<sup class="versenum">46&nbsp;</sup>又对他们说：&ldquo;照经上所写的，基督必受害，第三日从死里复活，<sup class="versenum">47&nbsp;</sup>并且人要奉他的名传悔改、赦罪的道，从耶路撒冷起直传到万邦。<sup class="versenum">48&nbsp;</sup>你们就是这些事的见证。<sup class="versenum">49&nbsp;</sup>我要将我父所应许的降在你们身上，你们要在城里等候，直到你们领受从上头来的能力。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop5')"> 马太福音27:57-28:15</span>； </span></span></span>

	<div class="popup invisible" id="pop5"><span><span><span lang="ZH-CN"><!-- begin bible --></span></span></span>

	<div>
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3><span><span><span lang="ZH-CN">安放耶稣于新墓</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">57&nbsp;</sup>到了晚上，有一个财主，名叫<u class="person underline">约瑟</u>，是亚利马太来的，他也是耶稣的门徒，<sup class="versenum">58&nbsp;</sup>这人去见<u class="person underline">彼拉多</u>，求耶稣的身体。<u class="person underline">彼拉多</u>就吩咐给他。<sup class="versenum">59&nbsp;</sup><u class="person underline">约瑟</u>取了身体，用干净细麻布裹好，<sup class="versenum">60&nbsp;</sup>安放在自己的新坟墓里，就是他凿在磐石里的。他又把大石头滚到墓门口，就去了。<sup class="versenum">61&nbsp;</sup>有抹大拉的<u class="person underline">马利亚</u>和那个<u class="person underline">马利亚</u>在那里，对着坟墓坐着。</span></span></span></p>

	<h3><span><span><span lang="ZH-CN">封石妥守</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">62&nbsp;</sup>次日，就是预备日的第二天，祭司长和法利赛人聚集来见<u class="person underline">彼拉多</u>，说：<sup class="versenum">63&nbsp;</sup>&ldquo;大人，我们记得那诱惑人的还活着的时候曾说：&lsquo;三日后我要复活。&rsquo;<sup class="versenum">64&nbsp;</sup>因此，请吩咐人将坟墓把守妥当，直到第三日，恐怕他的门徒来把他偷了去，就告诉百姓说他从死里复活了。这样，那后来的迷惑比先前的更厉害了。&rdquo;<sup class="versenum">65&nbsp;</sup><u class="person underline">彼拉多</u>说：&ldquo;你们有看守的兵，去吧，尽你们所能的把守妥当。&rdquo;<sup class="versenum">66&nbsp;</sup>他们就带着看守的兵同去，封了石头，将坟墓把守妥当。</span></span></span></p>

	<h3><span><span><span lang="ZH-CN">从死里复活</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">1 </sup>安息日将尽，七日的头一日天快亮的时候，抹大拉的<u class="person underline">马利亚</u>和那个<u class="person underline">马利亚</u>来看坟墓。<sup class="versenum">2&nbsp;</sup>忽然，地大震动，因为有主的使者从天上下来，把石头滚开，坐在上面。<sup class="versenum">3&nbsp;</sup>他的相貌如同闪电，衣服洁白如雪。<sup class="versenum">4&nbsp;</sup>看守的人就因他吓得浑身乱战，甚至和死人一样。<sup class="versenum">5&nbsp;</sup>天使对妇女说：&ldquo;不要害怕！我知道你们是寻找那钉十字架的耶稣。<sup class="versenum">6&nbsp;</sup>他不在这里，照他所说的，已经复活了。你们来看安放主的地方！<sup class="versenum">7&nbsp;</sup>快去告诉他的门徒，说他从死里复活了，并且在你们以先往加利利去，在那里你们要见他。看哪，我已经告诉你们了！&rdquo;<sup class="versenum">8&nbsp;</sup>妇女们就急忙离开坟墓，又害怕又大大地欢喜，跑去要报给他的门徒。<sup class="versenum">9&nbsp;</sup>忽然，耶稣遇见她们，说：&ldquo;愿你们平安！&rdquo;她们就上前抱住他的脚拜他。<sup class="versenum">10&nbsp;</sup>耶稣对她们说：&ldquo;不要害怕！你们去告诉我的弟兄，叫他们往加利利去，在那里必见我。&rdquo;</span></span></span></p>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">11&nbsp;</sup>她们去的时候，看守的兵有几个进城去，将所经历的事都报给祭司长。<sup class="versenum">12&nbsp;</sup>祭司长和长老聚集商议，就拿许多银钱给兵丁，说：<sup class="versenum">13&nbsp;</sup>&ldquo;你们要这样说：&lsquo;夜间我们睡觉的时候，他的门徒来把他偷去了。&rsquo;<sup class="versenum">14&nbsp;</sup>倘若这话被巡抚听见，有我们劝他，保你们无事。&rdquo;<sup class="versenum">15&nbsp;</sup>兵丁受了银钱，就照所嘱咐他们的去行。这话就传说在犹太人中间，直到今日。</span></span></span></p>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop6')"> 马可福音15:42-16:18</span>) </span></span></span>

	<div class="popup invisible" id="pop6"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">安放在坟墓里</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">42&nbsp;</sup>到了晚上，因为这是预备日，就是安息日的前一日，<sup class="versenum">43&nbsp;</sup>有亚利马太的<u class="person underline">约瑟</u>前来，他是尊贵的议士，也是等候神国的。他放胆进去见<u class="person underline">彼拉多</u>，求耶稣的身体。<sup class="versenum">44&nbsp;</sup><u class="person underline">彼拉多</u>诧异耶稣已经死了，便叫百夫长来，问他耶稣死了久不久。<sup class="versenum">45&nbsp;</sup>既从百夫长得知实情，就把耶稣的尸首赐给<u class="person underline">约瑟</u>。<sup class="versenum">46&nbsp;</sup><u class="person underline">约瑟</u>买了细麻布，把耶稣取下来，用细麻布裹好，安放在磐石中凿出来的坟墓里，又滚过一块石头来挡住墓门。<sup class="versenum">47&nbsp;</sup>抹大拉的<u class="person underline">马利亚</u>和<u class="person underline">约西</u>的母亲<u class="person underline">马利亚</u>都看见安放他的地方。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣从死里复活</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">1 </sup>过了安息日，抹大拉的<u class="person underline">马利亚</u>和<u class="person underline">雅各</u>的母亲<u class="person underline">马利亚</u>并<u class="person underline">撒罗米</u>买了香膏，要去膏耶稣的身体。<sup class="versenum">2&nbsp;</sup>七日的第一日清早，出太阳的时候，她们来到坟墓那里，<sup class="versenum">3&nbsp;</sup>彼此说：&ldquo;谁给我们把石头从墓门滚开呢？&rdquo;<sup class="versenum">4&nbsp;</sup>那石头原来很大，她们抬头一看，却见石头已经滚开了。<sup class="versenum">5&nbsp;</sup>她们进了坟墓，看见一个少年人坐在右边，穿着白袍，就甚惊恐。<sup class="versenum">6&nbsp;</sup>那少年人对她们说：&ldquo;不要惊恐！你们寻找那钉十字架的拿撒勒人耶稣，他已经复活了，不在这里。请看安放他的地方！<sup class="versenum">7&nbsp;</sup>你们可以去告诉他的门徒和<u class="person underline">彼得</u>说：&lsquo;他在你们以先往加利利去，在那里你们要见他，正如他从前所告诉你们的。&rsquo;&rdquo;<sup class="versenum">8&nbsp;</sup>她们就出来，从坟墓那里逃跑，又发抖又惊奇，什么也不告诉人，因为她们害怕。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣显现于抹大拉之马利亚看</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">9&nbsp;</sup>在七日的第一日清早，耶稣复活了，就先向抹大拉的<u class="person underline">马利亚</u>显现，耶稣从她身上曾赶出七个鬼。<sup class="versenum">10&nbsp;</sup>她去告诉那向来跟随耶稣的人，那时他们正哀恸哭泣。<sup class="versenum">11&nbsp;</sup>他们听见耶稣活了，被<u class="person underline">马利亚</u>看见，却是不信。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣数次向门徒显现</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">12&nbsp;</sup>这事以后，门徒中间有两个人往乡下去。走路的时候，耶稣变了形象，向他们显现。<sup class="versenum">13&nbsp;</sup>他们就去告诉其余的门徒，其余的门徒也是不信。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">14&nbsp;</sup>后来，十一个门徒坐席的时候，耶稣向他们显现，责备他们不信、心里刚硬，因为他们不信那些在他复活以后看见他的人。<sup class="versenum">15&nbsp;</sup>他又对他们说：&ldquo;你们往普天下去，传福音给万民听。<sup class="versenum">16&nbsp;</sup>信而受洗的必然得救，不信的必被定罪。<sup class="versenum">17&nbsp;</sup>信的人必有神迹随着他们，就是：奉我的名赶鬼；说新方言；<sup class="versenum">18&nbsp;</sup>手能拿蛇；若喝了什么毒物，也必不受害；手按病人，病人就必好了。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>
</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约20:30-31</p>

<p class="forward bible"><sup>30</sup>耶稣在门徒面前另外行了许多神迹，没有记在这书上。<sup>31</sup>但记这些事，要叫你们信耶稣是基督，是　神的儿子，并且叫你们信了他，就可以因他的名得生命。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">请分享耶稣复活这件事对你的意义。你是否同意，若耶稣没有复活，我们所信的和所传的都毫无意义？为什么？</li>
	<li class="forward">耶稣问马利亚：&ldquo;为什么哭？你找谁呢？&rdquo;当你遇到艰难，你是否会让自己一直停留在忧伤中，或到处寻找帮助，而忘记耶稣已经复活了？</li>
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
	<li class="forward">你的个人性的信仰告白是什么？尝试用最简洁的文字把它写下来，下周在小组中分享。</li>
	<li class="forward">在《福音行动表》选出2-3位，这周与他们分享《四件事》小册子的，听听他们对主耶稣复活的看法。</li>
	<li class="forward">这周抽空将《约翰福音》电影观赏一遍。借着耶稣的事奉及与人的对话，求神帮助你对主耶稣有全面的认识。下周在小组中分享观后感。</li>
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

<p>主耶稣基督，赞美祢，祢从死里复活了！主耶稣，祢是道路、真理和生命。祢是世人到神那里唯一的道路、是向我们启示真理的主，更是赐人永恒生命的主！祢的话语应许我们若是与基督同死，就信必与祢同活。祢既从死里复活，信祢的人也必要复活。因此，我们向罪，当看自己是死的；向上帝在基督耶稣里，却当看自己是活的。愿我们天天靠祢而活、为祢而活，荣耀祢而活，奉主耶稣的名祈求，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->