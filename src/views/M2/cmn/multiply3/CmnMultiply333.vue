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
                        <div class="chapter_number ltr"><h1>33.</h1></div>
                        <div class="chapter_title ltr"><h1>难中神预备人——腓立比</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒16:9</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>在夜间有异象现于<u class="person underline">保罗</u>：有一个马其顿人站着求他说：&ldquo;请你过到马其顿来帮助我们！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">在耶路撒冷会议正式决定外邦人不需要接受割礼之后不久，保罗却为提摩太行了割礼，保罗如此做不但没有违背会议的决定（提摩太是犹太人），反而贯彻了他自己一向的主张，即在不违背福音的原则之下，为了使人得到福音的好处，可以选择性地配合文化习俗，保罗这种灵活性的运用值得我们仿效；在我们遇到或看到这一类的问题时，求神赐我们当得的智慧与灵巧，去面对和处理生活与事奉上各样的难题和挑战，荣神益人！</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在保罗的宣教旅程中，圣灵两次阻挡他们原先决定的路线，最后保罗停留在特罗亚这个地方，就在那里，保罗在夜间见到异象，在这个被称做&ldquo;马其顿的异象&rdquo;中，保罗确定了圣灵是要引导他们去到马其顿，传福音给那地的未信之民。</p>

<p class="indent2">腓立比是马其顿的头一个城，也是罗马的驻防城。保罗知道在城门外河边，有一个祷告的地方。在安息日就去那里向聚会的妇女讲道。有一个卖紫色布匹的妇女，名叫吕底亚。听了道，就全家受洗归主。吕底亚一信主，立刻主动接待保罗和他的团队；而且将自己的财物与教导上帝话语的人分享。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒16:16-40》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒16:16-40</button><div class="collapsed" id ="Text0">

<p><sup>16</sup>后来，我们往那祷告的地方去。有一个使女迎着面来，她被巫鬼所附，用法术叫她主人们大得财利。<sup>17</sup>她跟随保罗和我们，喊着说：&ldquo;这些人是至高　神的仆人，对你们传说救人的道！&rdquo;<sup>18</sup>她一连多日这样喊叫，保罗就心中厌烦，转身对那鬼说：&ldquo;我奉耶稣基督的名，吩咐你从她身上出来！&rdquo;那鬼当时就出来了。</p>

<p><sup>19</sup>使女的主人们见得利的指望没有了，便揪住保罗和西拉，拉他们到市上去见首领，<sup>20</sup>又带到官长面前说：&ldquo;这些人原是犹太人，竟骚扰我们的城，<sup>21</sup>传我们罗马人所不可受、不可行的规矩。&rdquo;</p>

<p><sup>22</sup>众人就一同起来攻击他们。官长吩咐剥了他们的衣裳，用棍打；<sup>23</sup>打了许多棍，便将他们下在监里，嘱咐禁卒严紧看守。<sup>24</sup>禁卒领了这样的命，就把他们下在内监里，两脚上了木狗。</p>

<p><sup>25</sup>约在半夜，保罗和西拉祷告唱诗赞美　神，众囚犯也侧耳而听。<sup>26</sup>忽然地大震动，甚至监牢的地基都摇动了，监门立刻全开，众囚犯的锁链也都松开了。<sup>27</sup>禁卒一醒，看见监门全开，以为囚犯已经逃走，就拔刀要自杀。<sup>28</sup>保罗大声呼叫说：&ldquo;不要伤害自己！我们都在这里。&rdquo;<sup>29</sup>禁卒叫人拿灯来，就跳进去，战战兢兢地俯伏在保罗、西拉面前，<sup>30</sup>又领他们出来，说：&ldquo;二位先生，我当怎样行才可以得救？&rdquo;<sup>31</sup>他们说：&ldquo;当信主耶稣，你和你一家都必得救。<sup>32</sup>他们就把主的道讲给他和他全家的人听。<sup>33</sup>当夜，就在那时候，禁卒把他们带去，洗他们的伤；他和属乎他的人立时都受了洗。<sup>34</sup>于是禁卒领他们上自己家里去，给他们摆上饭。他和全家，因为信了神，都很喜乐。</p>

<p><sup>35</sup>到了天亮，官长打发差役来说：&ldquo;释放那两个人吧！&rdquo;<sup>36</sup>禁卒就把这话告诉保罗，说：&ldquo;官长打发人来叫释放你们。如今可以出监，平平安安地去吧！&rdquo;<sup>37</sup>保罗却说：&ldquo;我们是罗马人，并没有定罪，他们就在众人面前打了我们，又把我们下在监里，现在要私下撵我们出去吗？这是不行的。叫他们自己来领我们出去吧！&rdquo;<sup>38</sup>差役把这话回禀官长。官长听见他们是罗马人，就害怕了，<sup>39</sup>于是来劝他们，领他们出来，请他们离开那城。<sup>40</sup>二人出了监，往吕底亚家里去，见了弟兄们，劝慰他们一番，就走了。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/333.mp4" type="button" class="external-movie">
         观看&nbsp;徒16:16-40&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？、</li>
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
	<li class="nobreak-final-final">保罗、西拉、提摩太和路加在腓立比事奉。因为腓立比没有会堂，他们常常往河边祷告的地方去，寻找那些对属灵的事有渴慕的人。一个被邪灵附身的使女要跟着保罗，但是过去悲哀的经验让保罗担心人们以为他是属于当地错误的宗教信仰（<span class="popup-link" @click = "popUp('pop2')"> 徒14:8-20</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>路司得城里坐着一个两脚无力的人，生来是瘸腿的，从来没有走过。<sup class="versenum">9&nbsp;</sup>他听<u class="person underline">保罗</u>讲道，<u class="person underline">保罗</u>定睛看他，见他有信心，可得痊愈，<sup class="versenum">10&nbsp;</sup>就大声说：&ldquo;你起来，两脚站直！&rdquo;那人就跳起来，而且行走。</p>

	<h3>众人要向二使徒献祭</h3>

	<p><sup class="versenum">11&nbsp;</sup>众人看见<u class="person underline">保罗</u>所做的事，就用吕高尼的话大声说：&ldquo;有神借着人形降临在我们中间了！&rdquo;<sup class="versenum">12&nbsp;</sup>于是称<u class="person underline">巴拿巴</u>为<u class="person underline">宙斯</u>，称<u class="person underline">保罗</u>为<u class="person underline">希耳米</u>，因为他说话领首。<sup class="versenum">13&nbsp;</sup>有城外<u class="person underline">宙斯</u>庙的祭司牵着牛、拿着花圈，来到门前，要同众人向使徒献祭。<sup class="versenum">14&nbsp;</sup><u class="person underline">巴拿巴</u>、<u class="person underline">保罗</u>二使徒听见，就撕开衣裳，跳进众人中间，喊着说：<sup class="versenum">15&nbsp;</sup>&ldquo;诸君，为什么做这事呢？我们也是人，性情和你们一样。我们传福音给你们，是叫你们离弃这些虚妄，归向那创造天、地、海和其中万物的永生神。<sup class="versenum">16&nbsp;</sup>他在从前的世代，任凭万国各行其道，<sup class="versenum">17&nbsp;</sup>然而为自己未尝不显出证据来，就如常施恩惠，从天降雨赏赐丰年，叫你们饮食饱足、满心喜乐。&rdquo;<sup class="versenum">18&nbsp;</sup>二人说了这些话，仅仅地拦住众人不献祭于他们。</p>

	<p><sup class="versenum">19&nbsp;</sup>但有些犹太人从安提阿和以哥念来，挑唆众人，就用石头打<u class="person underline">保罗</u>，以为他是死了，便拖到城外。<sup class="versenum">20&nbsp;</sup>门徒正围着他，他就起来，走进城去。第二天，同<u class="person underline">巴拿巴</u>往特庇去。</p>
	<!-- end bible --></div>
	耶稣的能力战胜了邪灵，那使女得了释放。但也因为这样，她的主人再也无法利用她来赚钱，他们便诬告保罗和西拉传违法的宗教，导致民众上前攻击，最后两人被捕。即使在艰难的环境中，保罗和西拉仍在牢里敬拜上帝，显出他们对主的信靠。主在这次的逼迫中行了神迹，并在过程中向人显示那位狱卒是上帝预备的和平之子。保罗的团队离开前，对吕底亚家聚集的新信徒劝慰了一番。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒16:34</p>

<p class="forward bible">于是禁卒领他们上自己家里去，给他们摆上饭。他和全家，因为信了神，都很喜乐。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">巫鬼说的话表面上是在帮忙传福音，但实际上是对福音的干扰，让人以为主耶稣和巫鬼是一路的。邪灵也能认出基督（<span class="popup-link" @click = "popUp('pop3')"> 路8:28</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">28&nbsp;</sup>他见了耶稣，就俯伏在他面前，大声喊叫说：&ldquo;至高神的儿子耶稣，我与你有什么相干？求你不要叫我受苦！&rdquo;</p>
	<!-- end bible --></div>
	但主耶稣拒绝接受邪灵为祂作见证（<span class="popup-link" @click = "popUp('pop4')"> 路4:35,</span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>耶稣责备他说：&ldquo;不要作声！从这人身上出来吧！&rdquo;鬼把那人摔倒在众人中间，就出来了，却也没有害他。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 路4:41</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">41&nbsp;</sup>又有鬼从好些人身上出来，喊着说：&ldquo;你是神的儿子！&rdquo;耶稣斥责他们，不许他们说话，因为他们知道他是基督。</p>
	<!-- end bible --></div>
	因为这见证的源头不是出于神。

	<ul class="forward">
		<li class="forward">不是出于神的见证再有力量，也不能使荣耀归于神；不但不能把人领到神面前，反而会迷惑人，混乱主的所是和所作，模糊神与非神的界线。因此一切掺杂的见证和荣耀，主都不接受，一切表面上美好、但不是出于神的事物，主一概拒绝。</li>
		<li class="forward">神所要的是那些清心爱主的人的见证，要人们因着祂的话语和作为来认识祂，我们不能随便拿异教、异端或世俗的东西来见证神，一定要注意那见证的源头是否出于神。</li>
	</ul>
	</li>
	<li class="forward">你是否有听过或是经历过在异教徒中间分享福音，或是异教徒归信基督后生命改变的历程？他们所面对的挣扎、挑战或是捆绑是什么，如何胜过？</li>
	<li class="forward">保罗在腓立比传扬福音这段经过，作者特别选择了三个人物（吕底亚、使女、狱卒），他们有什么不同之处？作者路加在此有什么特别的用意吗？这给你什么启发或是提醒？</li>
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
	<li class="forward">保罗和西拉在这样的患难中还能够喜乐是不容易的事情，靠着人的忍耐是无法做到的。因此我们只有信赖神，知道我们受苦不是徒然，而是必然，并且有美好真实的结果。
	<ul class="forward">
		<li class="forward">为福音在世界各地开展可能面对的拦阻或逼迫祷告，求神坚定祂教会与子民手中所做的工，使他们靠主忍耐和喜乐。</li>
		<li class="forward">为所支持的宣教禾场或宣教士，以及我国目前所面对的处境祷告，求神坚定并保守祂的仆人，靠主刚强，神迹奇事常常伴随，祂救恩的道被广传，人心回转归向基督，主名在各地被高举和得荣。</li>
	</ul>
	</li>
	<li class="forward">为教会的福音行动和聚会祷告，求神预备&ldquo;和平之子&rdquo;并带到当中，主也将得救的人数多多加给教会，信徒的生命不断更新和坚固。</li>
	<li class="forward">阅读附录：《宣教士：古约翰》，把阅读心得和反思写下，下周分享。</li>
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

<p class="forward">信实且慈爱的主耶稣，我们感谢赞美祢。我们有圣灵作我们的保惠师，指教我们当行的道路，让我们真认识祢，并体验祢长阔高深的慈爱与复活的大能。是的，主啊，也唯有圣灵能使人心回转，使人为罪、为义、为审判、自己责备自己。我们坚信使万民作祢门徒是天父的心意，求主坚定我们的心志，刚强我们的信心，无论在任何的境况，都靠圣灵活出基督的真实，讲说神的大能，并将荣耀归于父神。主啊，当我们众人愿意放下自己，同心合意寻求在祢的面前，我们知道祢就在我们当中，并叫我们做比祢更大的事情。感恩祷告奉主名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->