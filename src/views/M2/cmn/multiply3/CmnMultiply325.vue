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
                        <div class="chapter_number ltr"><h1>25.</h1></div>
                        <div class="chapter_title ltr"><h1>省会犹太人宣教——异地同文化宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒13:2-3</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>他们侍奉主、禁食的时候，圣灵说：&ldquo;要为我分派<u class="person underline">巴拿巴</u>和<u class="person underline">扫罗</u>，去做我召他们所做的工。&rdquo;<sup class="versenum">3&nbsp;</sup>于是禁食、祷告，按手在他们头上，就打发他们去了。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">差派工人出去是要作圣灵召他们所作的工，不是要建立个人的王国，也不是要扩展教会的地盘。这些工人是圣灵所召，就要向圣灵负责。工作的方向和策略也是由圣灵决定。因此，我们在顺服神的过程或愿意顺服神的旨意时，才能察觉圣灵的带领。我们如果不愿意事奉、不肯顺服神，就不可能体会圣灵的带领。让我们众教会在差派的事上与圣灵同工，敏锐和顺从圣灵的带领，完成天父的旨意。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">居比路是地中海东北的小岛，是巴拿巴的家乡（<span class="popup-link" @click = "popUp('pop2')"> 徒4:36</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">36&nbsp;</sup>有一个利未人，生在塞浦路斯，名叫<u class="person underline">约瑟</u>，使徒称他为<u class="person underline">巴拿巴</u>（&ldquo;<u class="person underline">巴拿巴</u>&rdquo;翻出来就是&ldquo;劝慰子&rdquo;）。</p>
	<!-- end bible --></div>
	他们的宣教行踪就从居比路开始。他们到了撒拉米，就在犹太人各会堂里传讲神的道。开始时，他们主要的对象还是犹太人，就在犹太人各会堂里传讲神的道。在帕弗，方伯士求保罗请了巴拿巴和扫罗来，要听神的道。那里有一位行法术的假先知巴耶稣（或叫以吕马）敌挡使徒，要叫方伯不信真道。圣灵的工作，使假先知不能抵挡真道。圣灵的工作，使方伯信基督，能影响全岛的福音工作。</li>
</ul>

<p class="indent2">旁非利亚是罗马在小亚西亚南岸经济穷困的省份。别加城在塞浦路斯西北面，位于旁非利亚沿海地区。彼西底的安提阿离别加以北大约160公里，海拔1000米，位于弗吕家，接近彼西底边界。为了区别于弗吕家的另一个安提阿，这个地方被称为&ldquo;彼西底的安提阿&rdquo;。接下来，使徒来到彼西底的安提阿，在安息日进会堂坐下。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒13:13-43》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒13:13-43</button><div class="collapsed" id ="Text0">

<p><sup>13</sup>保罗和他的同人从帕弗开船，来到旁非利亚的别加，约翰就离开他们，回耶路撒冷去。<sup>14</sup>他们离了别加往前行，来到彼西底的安提阿，在安息日进会堂坐下。<sup>15</sup>读完了律法和先知的书，管会堂的叫人过去，对他们说：&ldquo;二位兄台，若有甚么劝勉众人的话，请说。&rdquo;</p>

<p><sup>16</sup>保罗就站起来，举手说：&ldquo;以色列人和一切敬畏　神的人，请听。<sup>17</sup>这以色列民的　神拣选了我们的祖宗，当民寄居埃及的时候，抬举他们，用大能的手领他们出来； <sup>18</sup>又在旷野容忍他们约有四十年（注：&ldquo;容忍&rdquo;或作&ldquo;抚养&rdquo;）。<sup>19</sup>既灭了迦南地七族的人，就把那地分给他们为业。<sup>20</sup>此后，给他们设立士师，约有四百五十年，直到先知撒母耳的时候。</p>

<p><sup>21</sup>后来他们求一个王，　神就将便雅悯支派中基士的儿子扫罗，给他们作王四十年。<sup>22</sup>既废了扫罗，就选立大卫作他们的王，又为他作见证说：&lsquo;我寻得耶西的儿子大卫，他是合我心意的人，凡事要遵行我的旨意。&rsquo;</p>

<p><sup>23</sup>从这人的后裔中，　神已经照著所应许的，为以色列人立了一位救主，就是耶稣。:<sup>24</sup>在他没有出来以先，约翰向以色列众民宣讲悔改的洗礼。<sup>25</sup>约翰将行尽他的程途说：&lsquo;你们以为我是谁？我不是基督；只是有一位在我以后来的，我解他脚上的鞋带也是不配的。&rsquo;</p>

<p><sup>26</sup>弟兄们，亚伯拉罕的子孙和你们中间敬畏　神的人哪，这救世的道是传给我们的。<sup>27</sup>耶路撒冷居住的人和他们的官长，因为不认识基督，也不明白每安息日所读众先知的书，就把基督定了死罪，正应了先知的预言。<sup>28</sup>虽然查不出他有当死的罪来，还是求彼拉多杀他。<sup>29</sup>既成就了经上指著他所记的一切话，就把他从木头上取下来，放在坟墓里。<sup>30</sup>神却叫他从死里复活。<sup>31</sup>那从加利利同他上耶路撒冷的人多日看见他，这些人如今在民间是他的见证。</p>

<p><sup>32</sup>我们也报好信息给你们，就是那应许祖宗的话， <sup>33</sup>神已经向我们这作儿女的应验，叫耶稣复活了。正如诗篇第二篇上记著说：&lsquo;你是我的儿子，我今日生你。&rsquo;<sup>34</sup>论到　神叫他从死里复活，不再归于朽坏，就这样说：&lsquo;我必将所应许大卫那圣洁可靠的恩典，赐给你们。&rsquo;<sup>35</sup>又有一篇上说：&lsquo;你必不叫你的圣者见朽坏。&rsquo;<sup>36</sup>大卫在世的时候，遵行了　神的旨意，就睡了（注：或作&ldquo;大卫按神的旨意服事了他那一世的人，就睡了&rdquo;），归到他祖宗那里，已见朽坏；<sup>37</sup>惟独　神所复活的，他并未见朽坏。</p>

<p><sup>38</sup>所以弟兄们，你们当晓得：赦罪的道是由这人传给你们的。<sup>39</sup>你们靠摩西的律法，在一切不得称义的事上信靠这人，就都得称义了。<sup>40</sup>所以，你们务要小心，免得先知书上所说的临到你们。<sup>41</sup>主说：&lsquo;你们这轻慢的人要观看、要惊奇、要灭亡，因为在你们的时候，我行一件事，虽有人告诉你们，你们总是不信。&rsquo;&rdquo;</p>

<p><sup>42</sup>他们出会堂的时候，众人请他们到下安息日再讲这话给他们听。<sup>43</sup>散会以后，犹太人和敬虔进犹太教的人多有跟从保罗、巴拿巴的。二人对他们讲道，劝他们务要恒久在　神的恩中。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/325.mp4" type="button" class="external-movie">
         观看&nbsp;徒13:13-43&nbsp;</button>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">保罗和巴拿巴离开塞浦路斯来到旁非利亚后，约翰马可决定离开他们。他们往北方内陆前行，穿过旁非利亚，到了彼西底的安提阿&mdash;&mdash;多山的加拉太的首都。至于为什么要去那里，历史提供了我们重要的洞见：塞浦路斯的官员有家人住在这个城市里，表示保罗和巴拿巴继续跟随主所打开的关系网络前行。另一个原因则是这个城市位于邻近区域的主要交叉道路上。他们到会堂讲道，因为知道会有虔诚的犹太人和对属灵的事有渴慕的外邦人在那里（<span class="popup-link" @click = "popUp('pop3')"> 徒13:26</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>弟兄们，<u class="person underline">亚伯拉罕</u>的子孙和你们中间敬畏神的人哪，这救世的道是传给我们的。</p>
	<!-- end bible --></div>
	保罗分享圣经上的故事，证明上帝为了他们的罪，预备了耶稣（<span class="popup-link" @click = "popUp('pop4')"> 徒13:38-39</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>&ldquo;所以弟兄们，你们当晓得：赦罪的道是由这人传给你们的！<sup class="versenum">39&nbsp;</sup>你们靠<u class="person underline">摩西</u>的律法，在一切不得称义的事上信靠这人，就都得称义了。</p>
	<!-- end bible --></div>
	许多人信了，所以保罗和巴拿巴作了初步的跟进，鼓励他们与基督建立更深的关系。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒13:43</p>

<p class="forward bible"><sup>43</sup>散会以后，犹太人和敬虔进犹太教的人多有跟从保罗、巴拿巴的。二人对他们讲道，劝他们务要恒久在神的恩中。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">保罗在使徒行传中的第一个讲道词与彼得的第一个讲道词，甚至与司提反有什么相似之处吗？给我们什么启发？</li>
	<li class="forward">在你生命中靠什么称义，并如何享受神所赐的福气呢？保罗的责备对你有何提醒？</li>
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
	<li class="forward">马可此时退出（<span class="popup-link" @click = "popUp('pop5')"> 徒13:13</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup><u class="person underline">保罗</u>和他的同人从帕弗开船，来到旁非利亚的别加，<u class="person underline">约翰</u>就离开他们，回耶路撒冷去。</p>
	<!-- end bible --></div>
	可能是畏惧后面路途中的崇山峻岭。保罗也不喜悦马可此时离去（<span class="popup-link" @click = "popUp('pop6')"> 徒15:38</span>），

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">38&nbsp;</sup>但<u class="person underline">保罗</u>因为<u class="person underline">马可</u>从前在旁非利亚离开他们，不和他们同去做工，就以为不可带他去。</p>
	<!-- end bible --></div>
	但圣灵却保守保罗的心里仍有安息。马可虽然在传道的事上一度离开，但是后来却大大改变，而为保罗所器重，说他&ldquo;在传道的事上于我有益&rdquo;（<span class="popup-link" @click = "popUp('pop7')"> 提后4:11</span>）。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>这些事你要吩咐人，也要教导人。</p>
	<!-- end bible --></div>

	<ul class="forward">
		<li class="forward">若教会或你的同工因为一些个人或外在因素，而中途离开你们，求神保守你们在祂里面有平静安稳的心，不去论断或批评，乃是成全和祝福。</li>
		<li class="forward">持续为他/他们祷告，在未来的日子，持续坚定地信靠神，生命经历神的装备和更新，不久的将来可以更好被主重用，成为教会和同工的祝福。</li>
	</ul>
	</li>
	<li class="forward">为教会的牧者同工团队代求，求神让他们有颗合而为一的心，凡事谦卑寻求神的心意，以基督的心为心，在教会各项事工的决策上，有神的智慧，凡事讨神的喜悦。</li>
	<li class="forward">为宣教士在各地有神的同在和能力，在他们所服事的禾场中，讲道大有圣灵的恩膏，并劝众人务要恒久在神的恩中，并牧养和建立他们成为当地的教会领袖。</li>
	<li class="forward">阅读附录：《宣教士：艾得理》，把感受和心得写下，下周分享。</li>
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

<p class="forward">亲爱的天父，愿这地的人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上，如同行在天上。求主打发更多工人收割祢的庄稼，拓展我们的疆界，我们深愿在每1000人中就有1个&ldquo;徒2群体&rdquo;。天父阿，因为国度、荣耀、权柄全是祢的，直到永远。我们要奉祢的名，宣扬天国的福音，求祢赐我们够用的胆量、当说的话语，使我们在祢并众人的面前蒙恩宠有美名。我们也为在宣教禾场的每位宣教士的身心灵祷告，求主保守他们常在里面，救他们脱离凶恶，不叫他们遇见试探，他们日用的饮食，求天父供应他们。祷告奉主名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->