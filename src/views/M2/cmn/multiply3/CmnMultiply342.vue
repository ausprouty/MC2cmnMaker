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
                        <div class="chapter_number ltr"><h1>42.</h1></div>
                        <div class="chapter_title ltr"><h1>招聚坚固领袖——以弗所教会领袖</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒20:11-12</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup><u class="person underline">保罗</u>又上去，掰饼吃了，谈论许久，直到天亮，这才走了。<sup class="versenum">12&nbsp;</sup>有人把那童子活活地领来，得的安慰不小。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">马其顿信徒捐助犹太弟兄，不只是出于人的同情，&ldquo;更照神的旨意先把自己献给主&rdquo;，并且&ldquo;又归附了我们&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 林后8:5</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>并且他们所做的，不但照我们所想望的，更照神的旨意，先把自己献给主，又归附了我们。</p>
	<!-- end bible --></div>
	承认神在使徒身上所显明的权柄。神所要得着的不是人的财物，因为这一切都是神先给人的；神所要得着的是顺服祂旨意的人。因此，&ldquo;先把自己献给主&rdquo;，&ldquo;将身体献上，当作活祭&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 罗12:1</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>所以弟兄们，我以神的慈悲劝你们，将身体献上，当做活祭，是圣洁的，是神所喜悦的，你们如此侍奉乃是理所当然的。</p>
	<!-- end bible --></div>
	乃是信徒一切事奉、捐献的属灵前提。我们把财物供给有需要的肢体，把自己献给&ldquo;元首基督&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 弗4:15</span>），

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>唯用爱心说诚实话，凡事长进，连于元首基督。</p>
	<!-- end bible --></div>
	这样做在基督的身体上，才是做在主自己身上（<span class="popup-link" @click = "popUp('pop5')"> 太25:40</span>）。

	<div class="popup invisible" id="pop5">
	<p><sup class="versenum">40&nbsp;</sup>王要回答说：&lsquo;我实在告诉你们：这些事你们既做在我这弟兄中一个最小的身上，就是做在我身上了。&rsquo;</p>
	<!-- end bible --></div>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p>愿我们为主摆上和奉献的，都蒙主悦纳，建立基督的身体，荣耀归于父神。</p>
	</div>
	</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">当保罗一行人暂停特罗亚的时候发生了一件意外，有一个叫犹推古的年轻人在半夜听保罗讲道时不慎从楼上摔落，当场死亡，保罗在众人眼前行了一个使死人复活的神迹，使众人大得安慰；因为时间紧促，保罗一行人越过了以弗所，几经波折来到米利都。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒20:13-38》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒20:13-38</button><div class="collapsed" id ="Text0">

<p><sup>13</sup>我们先上船开往亚朔去，意思要在那里接保罗，因为他是这样安排的，他自己打算要步行。<sup>14</sup>他既在亚朔与我们相会，我们就接他上船，来到米推利尼。<sup>15</sup>从那里开船，次日到了基阿的对面；又次日，在撒摩靠岸；又次日，来到米利都。<sup>16</sup>乃因保罗早已定意越过以弗所，免得在亚西亚耽延。他急忙前走，巴不得赶五旬节能到耶路撒冷。</p>

<p><sup>17</sup>保罗从米利都打发人往以弗所去，请教会的长老来。<sup>18</sup>他们来了，保罗就说：&ldquo;你们知道，自从我到亚西亚的日子以来，在你们中间始终为人如何，<sup>19</sup>服事主凡事谦卑，眼中流泪，又因犹太人的谋害，经历试炼。<sup>20</sup>你们也知道，凡与你们有益的，我没有一样避讳不说的。或在众人面前，或在各人家里，我都教导你们。<sup>21</sup>又对犹太人和希腊人证明当向　神悔改，信靠我主耶稣基督。</p>

<p><sup>22</sup>现在我往耶路撒冷去，心甚迫切（注：原文作&ldquo;心被捆绑&rdquo;），不知道在那里要遇见甚么事。<sup>23</sup>但知道圣灵在各城里向我指证，说有捆锁与患难等待我。<sup>24</sup>我却不以性命为念，也不看为宝贵，只要行完我的路程，成就我从主耶稣所领受的职事，证明　神恩惠的福音。</p>

<p><sup>25</sup>我素常在你们中间来往，传讲　神国的道。如今我晓得，你们以后都不得再见我的面了。<sup>26</sup>所以我今日向你们证明，你们中间无论何人死亡，罪不在我身上（注：原文作&ldquo;我于众人的血是洁净的&rdquo;）。<sup>27</sup>因为　神的旨意，我并没有一样避讳不传给你们的。<sup>28</sup>圣灵立你们作全群的监督，你们就当为自己谨慎，也为全群谨慎，牧养　神的教会，就是他用自己血所买来的（注：或作&ldquo;救赎的&rdquo;）。<sup>29</sup>我知道我去之后，必有凶暴的豺狼进入你们中间，不爱惜羊群。<sup>30</sup>就是你们中间，也必有人起来，说悖谬的话，要引诱门徒跟从他们。<sup>31</sup>所以你们应当警醒，记念我三年之久昼夜不住地流泪，劝戒你们各人。<sup>32</sup>如今我把你们交托　神和他恩惠的道；这道能建立你们，叫你们和一切成圣的人同得基业。<sup>33</sup>我未曾贪图一个人的金、银、衣服。<sup>34</sup>我这两只手常供给我和同人的需用，这是你们自己知道的。<sup>35</sup>我凡事给你们作榜样，叫你们知道应当这样劳苦，扶助软弱的人，又当记念主耶稣的话，说：&lsquo;施比受更为有福。&rsquo;&rdquo;</p>

<p><sup>36</sup>保罗说完了这话，就跪下同众人祷告。<sup>37</sup>众人痛哭，抱着保罗的颈项和他亲嘴。<sup>38</sup>叫他们最伤心的，就是他说&ldquo;以后不能再见我的面&rdquo;那句话，于是送他上船去了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/342.mp4" type="button" class="external-movie">
         观看&nbsp;徒20:13-38&nbsp;</button>
    <div class="collapsed"></div>

<p class="up">&nbsp;</p>

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
	<li class="nobreak-final-final">保罗和事奉团队暂时停在米利都，请以弗所长老来给予最后的教诲。从保罗的经历，我们学到要在非基督教城市建立教会需要坚强的毅力。虽然保罗面临到许多艰难和试炼，但没有一样真理避讳不告诉以弗所信徒的。他并没有为了取悦人心而改变所要传的信息。即使在受苦中，保罗也完全降服于主的旨意。我们也学到长老的角色很重要。他们的工作是看守好自己和上帝的子民，教导上帝的话喂养信徒，并与耶稣同行，成为众人的榜样。耶稣曾教导，上帝国度的本质始终含有邪恶的存在（<span class="popup-link" @click = "popUp('pop6')"> 太13:24-30</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">24&nbsp;</sup>耶稣又设个比喻对他们说：&ldquo;天国好像人撒好种在田里，<sup class="versenum">25&nbsp;</sup>及至人睡觉的时候，有仇敌来，将稗子撒在麦子里就走了。<sup class="versenum">26&nbsp;</sup>到长苗吐穗的时候，稗子也显出来。<sup class="versenum">27&nbsp;</sup>田主的仆人来告诉他说：&lsquo;主啊，你不是撒好种在田里吗？从哪里来的稗子呢？&rsquo;<sup class="versenum">28&nbsp;</sup>主人说：&lsquo;这是仇敌做的。&rsquo;仆人说：&lsquo;你要我们去薅出来吗？&rsquo;<sup class="versenum">29&nbsp;</sup>主人说：&lsquo;不必，恐怕薅稗子，连麦子也拔出来。<sup class="versenum">30&nbsp;</sup>容这两样一齐长，等着收割。当收割的时候，我要对收割的人说：先将稗子薅出来，捆成捆，留着烧，唯有麦子要收在仓里。&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	保罗知道他们将会面临到假教师摧毁信徒的危险。此阶段结束于保罗在罗马帝国东部的工作宣告完成时（<span class="popup-link" @click = "popUp('pop7')"> 罗15:19</span>）。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>甚至我从耶路撒冷直转到以利哩古，到处传了基督的福音。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒20:32</p>

<p class="forward bible">如今我把你们交托　神和他恩惠的道；这道能建立你们，叫你们和一切成圣的人同得基业。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">犹太人在路上设计要杀害保罗，保罗却在这段行程中写下了罗马书，书中畅述他对犹太同胞的深情热爱；若有一日，我们被自己同胞或至亲好友拒绝，甚至迫害的时候，我们是否仍然能保持对他们的爱心？我们是否能真正爱我们的敌人，为那逼迫我们的人祷告？</li>
	<li class="forward">保罗在这篇告别讲论中的真情告白令人动容，他一方面凡事谦卑，却又可以坦然地劝诫众人：&ldquo;你们要效法我的榜样&rdquo;，保罗的真城和毫无虚假的坦荡令人想到，是怎样的一种关系可以让保罗如此地畅所欲言？在耶稣的爱里，你和你的羊群或是你的牧者同工之间是怎样的一种关系呢？为什么？</li>
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
	<li class="forward">保罗以牧者的心肠教导以弗所的教会领袖如何牧养教会，其中的三个重点为我们提供了牧者的首要之务，首先必须自己谨慎，其次要小心地教导别人正确的真理，最后加上全备的牧养。
	<ul class="forward">
		<li class="forward">耶稣是忠心的牧人，甚至为羊舍命，教会领袖理当效法耶稣，作群羊的榜样，忠心牧养，甚至不惜作出牺牲。保罗已经这样做了，他并且劝勉所有教会领袖效法他的榜样。求主帮助我们效法祂和保罗一样，牧养并照管主的群羊。</li>
		<li class="forward">从保罗告别讲论的内容里，哪些生命和服事的心志是你所期待拥有或是你缺乏的？为自己祷告，求主让你的生命越来越有主的样式，作主忠心好管家。</li>
		<li class="forward">为教会的牧者和同工祷告，求神帮助他们为自己谨慎，教导和服事都蒙主悦纳，生命的特质与心志不断成熟，能作众人的榜样。</li>
	</ul>
	</li>
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

<ul class="forward">
	<li class="forward">愿全地的人都尊神的名为圣，为世界各地另有1/3从未听过耶稣的人祷告，福音能借着不同的渠道和媒介遍传世界各个角落。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为传道人或是宣教士的生命品格祷告，首先他们&ldquo;凡事谦卑&rdquo;，作众人的仆人，不是要受人的服事，乃是要服事人；其次是&ldquo;眼中流泪&rdquo;，对信徒有真正的关爱之心；最后忍耐坚毅，&ldquo;经历试炼&rdquo;，仍继续做主工。</li>
	<li class="forward">求神赐教会的牧者、执事和同工在神的话语上下功夫，有神的聪明和智慧，在教导和传讲上有神的能力和信心，放胆讲说神的话，为真道竭力争辩。</li>
	<li class="forward">为教会弟兄姐妹每天花时间并渴慕研读神的话，并真认识神祷告，让他们行事为人与所蒙的恩相称，在各自的岗位和角色上凡事尊荣主的名，并爱人如己。</li>
	<li class="forward">分享教会或个人的代祷需要。最后请一位作结束和祝福祷告。</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->