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
                        <div class="chapter_number ltr"><h1>48.</h1></div>
                        <div class="chapter_title ltr"><h1>顺服型领导力</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约13:1</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>逾越节以前，耶稣知道自己离世归父的时候到了。他既然爱世间属自己的人，就爱他们到底。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣知道自己离世归父的时候到了，他既然爱世间属自己的人，就爱他们到底。是这份爱，让耶稣踏上十字架的道路，纵然遭受唾沫、讥笑、鞭打、甚至被钉死在十字架上，也义无反顾。今天也是这份爱，吸引我们紧紧跟随基督；也是这份爱，让我们学习放下自己，彼此谦卑服事，并依靠圣灵，齐心兴旺福音，使万民作主的门徒。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶稣明说自己即将离去的话语令门徒惊疑忧心，为了坚固门徒的信心，耶稣告诉他们，祂的离去只是暂时的，祂会再来接他们到祂那里去。祂自己就是那位真理和生命的道路。耶稣告诉门徒，祂的离去并非代表一切就结束了。祂是回到创世之前与父同在的荣耀中，在父的面前为门徒代求。耶稣的离去将开启救恩历史另一个新的阶段，那时门徒将完成&ldquo;更大的事&rdquo;。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音14:1-31;&nbsp;马太福音26:36-46 》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音14:1-31</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>你们心里不要忧愁，你们信　神，也当信我。<sup>2</sup>在我父的家里有许多住处；若是没有，我就早已告诉你们了；我去原是为你们预备地方去。<sup>3</sup>我若去为你们预备了地方，就必再来接你们到我那里去；我在哪里，叫你们也在那里。<sup>4</sup>我往哪里去，你们知道；那条路，你们也知道（注：有古卷作&ldquo;我往哪里去，你们知道那条路&rdquo;）。&rdquo;</p>

<p><sup>5</sup>多马对他说：&ldquo;主啊，我们不知道你往哪里去，怎么知道那条路呢？ &rdquo;<sup>6</sup>耶稣说：&ldquo;我就是道路、真理、生命；若不借着我，没有人能到父那里去。<sup>7</sup>你们若认识我，也就认识我的父。从今以后，你们认识他，并且已经看见他。&rdquo;<sup>8</sup>腓力对他说：&ldquo;求主将父显给我们看，我们就知足了。&rdquo;<sup>9</sup>耶稣对他说：&ldquo;腓力，我与你们同在这样长久，你还不认识我吗？人看见了我，就是看见了父，你怎么说&lsquo;将父显给我们看&rsquo;呢？<sup>10</sup>我在父里面，父在我里面，你不信吗？我对你们所说的话，不是凭着自己说的，乃是住在我里面的父做他自己的事。<sup>11</sup>你们当信我，我在父里面，父在我里面；即或不信，也当因我所做的事信我。<sup>12</sup>我实实在在地告诉你们：我所做的事，信我的人也要做；并且要做比这更大的事，因为我往父那里去。<sup>13</sup>你们奉我的名无论求什么，我必成就，叫父因儿子得荣耀。<sup>14</sup>你们若奉我的名求什么，我必成就。</p>

<p><sup>15</sup>你们若爱我，就必遵守我的命令。<sup>16</sup>我要求父，父就另外赐给你们一位保惠师（注：或作&ldquo;训慰师&rdquo;。下同），叫他永远与你们同在，<sup>17</sup>就是真理的圣灵，乃世人不能接受的，因为不见他，也不认识他；你们却认识他，因他常与你们同在，也要在你们里面。<sup>18</sup>我不撇下你们为孤儿，我必到你们这里来。<sup>19</sup>还有不多的时候，世人不再看见我；你们却看见我，因为我活着，你们也要活着。<sup>20</sup>到那日你们就知道我在父里面，你们在我里面，我也在你们里面。<sup>21</sup>有了我的命令又遵守的，这人就是爱我的；爱我的必蒙我父爱他， 我也要爱他，并且要向他显现。&rdquo;<sup>22</sup>犹大（不是加略人犹大）问耶稣说：&ldquo;主啊，为什么要向我们显现，不向世人显现呢？&rdquo;<sup>23</sup>耶稣回答说：&ldquo;人若爱我，就必遵守我的道，我父也必爱他，并且我们要到他那里去，与他同住。<sup>24</sup>不爱我的人就不遵守我的道，你们所听见的道不是我的，乃是差我来之父的道。</p>

<p><sup>25</sup>我还与你们同住的时候，已将这些话对你们说了。<sup>26</sup>但保惠师，就是父因我的名所要差来的圣灵，他要将一切的事指教你们，并且要叫你们想起我对你们所说的一切话。<sup>27</sup>我留下平安给你们，我将我的平安赐给你们。我所赐的，不像世人所赐的；你们心里不要忧愁，也不要胆怯。</p>

<p><sup>28</sup>你们听见我对你们说了，我去还要到你们这里来。你们若爱我，因我到父那里去，就必喜乐，因为父是比我大的。<sup>29</sup>现在事情还没有成就，我预先告诉你们，叫你们到事情成就的时候，就可以信。<sup>30</sup>以后我不再和你们多说话，因为这世界的王将到，他在我里面是毫无所有；<sup>31</sup>但要叫世人知道我爱父，并且父怎样吩咐我，我就怎样行。起来，我们走吧。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/248.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音14:1-31&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 马太福音26:36-46</button><div class="collapsed" id ="Text1">

<p><sup>36</sup>耶稣同门徒来到一个地方，名叫客西马尼，就对他们说：&ldquo;你们坐在这里，等我到那边去祷告。&rdquo;<sup>37</sup>于是带着彼得和西庇太的两个儿子同去，就忧愁起来，极其难过，<sup>38</sup>便对他们说：&ldquo;我心里甚是忧伤，几乎要死；你们在这里等候，和我一同警醒。&rdquo;<sup>39</sup>他就稍往前走，俯伏在地祷告说：&ldquo;我父啊，倘若可行，求你叫这杯离开我；然而，不要照我的意思，只要照你的意思。&rdquo;</p>

<p><sup>40</sup>来到门徒那里，见他们睡着了，就对彼得说：&ldquo;怎么样，你们不能同我警醒片时吗？<sup>41</sup>总要警醒祷告，免得入了迷惑。你们心灵固然愿意，肉体却软弱了。 &rdquo;<sup>42</sup>第二次又去祷告说：&ldquo;我父啊，这杯若不能离开我，必要我喝，就愿你的意旨成全。&rdquo;<sup>43</sup>又来见他们睡着了，因为他们的眼睛困倦。<sup>44</sup>耶稣又离开他们去了。第三次祷告，说的话还是与先前一样。<sup>45</sup>于是来到门徒那里，对他们说：&ldquo;现在你们仍然睡觉安歇吧（注：&ldquo;吧&rdquo;或作&ldquo;吗&rdquo;）？时候到了，人子被卖在罪人手里了。<sup>46</sup>起来，我们走吧！看哪，卖我的人近了！&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/248-1.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音26:36-46&nbsp;</button>
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

<p class="up">耶稣在世的最后几年，教导人天国的生活守则和天国的样子。最后一晚，祂特别交代门徒自己即将离去，会赐下圣灵帮助他们活出天国的生活样式。接下来几个小时会发生什么事，门徒还不清楚。但耶稣解释自己是上帝的肉身显现，是生命和事奉的完美榜样。我们能认识上帝是因为祂透过耶稣的生命彰显自己。耶稣靠着天父做工，同样地，我们藉着圣灵的能力也能去使万民作门徒。耶稣示范出领导就是顺服天父，靠祂的能力行出天父的旨意。祂提醒门徒最重要的事：倚靠圣灵、祷告、遵从天父的旨意、将上帝和耶稣的话摆在第一、赞扬天父、和人建立爱和牺牲的关系。</p>

<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-CN">（进深学习：<span class="popup-link" @click = "popUp('pop2')"> 路加福音22:39-46</span>； </span></span></span>

	<div class="popup invisible" id="pop2"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">在客西马尼祷告</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">39&nbsp;</sup>耶稣出来，照常往橄榄山去，门徒也跟随他。<sup class="versenum">40&nbsp;</sup>到了那地方，就对他们说：&ldquo;你们要祷告，免得入了迷惑。&rdquo;<sup class="versenum">41&nbsp;</sup>于是离开他们约有扔一块石头那么远，跪下祷告，<sup class="versenum">42&nbsp;</sup>说：&ldquo;父啊！你若愿意，就把这杯撤去！然而，不要成就我的意思，只要成就你的意思。&rdquo;<sup class="versenum">43&nbsp;</sup>有一位天使从天上显现，加添他的力量。<sup class="versenum">44&nbsp;</sup>耶稣极其伤痛，祷告更加恳切，汗珠如大血点滴在地上。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">45&nbsp;</sup>祷告完了，就起来，到门徒那里，见他们因为忧愁都睡着了，<sup class="versenum">46&nbsp;</sup>就对他们说：&ldquo;你们为什么睡觉呢？起来祷告，免得入了迷惑。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop3')"> 马可福音14:32-42</span>） </span></span></span>

	<div class="popup invisible" id="pop3"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">在客西马尼祷告</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">32&nbsp;</sup>他们来到一个地方，名叫客西马尼，耶稣对门徒说：&ldquo;你们坐在这里，等我祷告。&rdquo;<sup class="versenum">33&nbsp;</sup>于是带着<u class="person underline">彼得</u>、<u class="person underline">雅各</u>、<u class="person underline">约翰</u>同去，就惊恐起来，极其难过，<sup class="versenum">34&nbsp;</sup>对他们说：&ldquo;我心里甚是忧伤，几乎要死。你们在这里等候，警醒。&rdquo;<sup class="versenum">35&nbsp;</sup>他就稍往前走，俯伏在地，祷告说倘若可行，便叫那时候过去。<sup class="versenum">36&nbsp;</sup>他说：&ldquo;阿爸，父啊！在你凡事都能，求你将这杯撤去！然而，不要从我的意思，只要从你的意思。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">37&nbsp;</sup>耶稣回来，见他们睡着了，就对<u class="person underline">彼得</u>说：&ldquo;<u class="person underline">西门</u>，你睡觉吗？不能警醒片时吗？<sup class="versenum">38&nbsp;</sup>总要警醒祷告，免得入了迷惑。你们心灵固然愿意，肉体却软弱了。&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣又去祷告，说的话还是与先前一样。<sup class="versenum">40&nbsp;</sup>又来，见他们睡着了，因为他们的眼睛甚是困倦；他们也不知道怎么回答。<sup class="versenum">41&nbsp;</sup>第三次来，对他们说：&ldquo;现在你们仍然睡觉安歇吧！够了，时候到了。看哪，人子被卖在罪人手里了！<sup class="versenum">42&nbsp;</sup>起来，我们走吧！看哪，那卖我的人近了！&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约14:21</p>

<p class="forward bible"><sup>21</sup>有了我的命令又遵守的，这人就是爱我的；爱我的必蒙我父爱他， 我也要爱他，并且要向他显现。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">世界上各样的保障都是短暂的，惟有耶稣在天上为我们所预备永恒的家才是最可靠和完备的保障。试想我们拥有这份属天的盼望，如何影响我们在世上的生活？</li>
	<li class="forward">彼得信心满满地以为自己站得比别人都稳，但他跌倒了。这经验给我们什么借镜？我们常常心灵愿意，肉体却是软弱。主耶稣让我们看到祂是靠着祷告胜过人性的软弱，我们呢？而祷告之后，我们该当如何？</li>
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
	<li class="forward">人生会经历不同的阶段，如：考入大学、留学海外、进入婚姻、工作环境的改变、孩子就学、照顾年老双亲等等，都需要有主的带领和帮助，帮助我们面对和胜任。现在你在哪个阶段呢？将你的需要和挑战带到施恩怜悯的主面前。</li>
	<li class="forward">彼得的跌倒提醒我们不当看自己过于所当看的。你如何形容你的属灵生命？刚强不会跌倒？永远都如此刚强？还是软弱无助？还是&hellip;&hellip;？敞开心扉真实来到神的面前，求主保守和坚固你的信心胜过保守一切。</li>
	<li class="forward">为前线服事的宣教士、牧师传道，小组长的身心灵蒙神保守祷告。求神使他们心里的力量刚强起来，每天与神有美好的团契，有神的话指引，时刻被圣灵充满，服事大有能力和信心。</li>
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

<p>爱我们的主耶稣，祢说祢去原是为我们预备地方，祢应许赐下圣灵，如今每个信靠祢的人，都有圣灵内住并作随时的帮助和指引。求主耶稣帮助我们的跟随、爱心和服事都是甘心乐意的摆上。当我们与身边的人相处或共事时，常存一颗谦卑柔和的心；当我们软弱跌倒的时候，祈求圣灵为我们祷告，并提醒我们要回到天父的爱中，从祂里面得力量和帮助。我们承认需要祢的拯救，需要祢双手的托住，并时刻警醒祷告，免得我们落入迷惑和试探，软弱跌倒，羞辱祢的名。奉主耶稣的圣名祷告，阿们。</p>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->