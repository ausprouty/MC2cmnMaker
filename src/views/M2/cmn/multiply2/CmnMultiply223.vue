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
                        <div class="chapter_number ltr"><h1>23.</h1></div>
                        <div class="chapter_title ltr"><h1>得人行动六</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路5:20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>耶稣见他们的信心，就对瘫子说：&ldquo;你的罪赦了！&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">赦罪是耶稣来到世上的使命。人寻求耶稣为要&ldquo;病得医治&rdquo;，但主的答应是&ldquo;罪得赦免&rdquo;，附带&ldquo;病得医治&rdquo;(<span class="popup-link" @click = "popUp('pop2')"> 可5:25</span>)。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>有一个女人患了十二年的血漏，</p>
	<!-- end bible --></div>
	因为寻求病得医治，必须先对付自己的罪(参<span class="popup-link" @click = "popUp('pop6')"> 雅5:16</span>)。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>所以你们要彼此认罪，互相代求，使你们可以得医治。义人祈祷所发的力量是大有功效的。</p>
	<!-- end bible --></div>
	人的肉身舒服了，灵却还不苏醒，不能恢复与神属灵的交通，这仍然没有解决根本问题。因为罪的代价是死，就是灵与神隔绝。神为人所预备的唯一救法，就是借着主耶稣基督，使人恢复与神的关系，得以认识神，因信耶稣而成为神的儿女。</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">税吏，就是征收税项的官员。这职业在当时的犹太社会中是极其遭人鄙夷的。因为罗马帝国幅员广大、人口众多，又没有现在社会那种精确的税制和征税渠道；于是就用了最简单的方法，就是用承包的形式将某地方的征税权判给当地的某人，委任他为税吏，专门负责征收当地的税款。因此，犹太人由衷地讨厌税吏，他们是与敌人（罗马政府）勾结者或者敲诈勒索者，这一类人被视为是不诚实的；一些犹太人的古文献将他们与强盗归在同一类别里。很可能利未（马太）就是当时罗马分封王希律手下的仆役。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音5:27-39》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音5:27-39</button><div class="collapsed" id ="Text0">

<p><sup>27</sup>这事以后，耶稣出去，看见一个税吏，名叫利未，坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;<sup>28</sup>他就撇下所有的，起来，跟从了耶稣。<sup>29</sup>利未在自己家里为耶稣大摆筵席，有许多税吏和别人与他们一同坐席。<sup>30</sup>法利赛人和文士就向耶稣的门徒发怨言说：&ldquo;你们为什么和税吏并罪人一同吃喝呢？&rdquo;<sup>31</sup>耶稣对他们说：&ldquo;无病的人用不着医生，有病的人才用得着；<sup>32</sup>我来本不是召义人悔改，乃是召罪人悔改。&rdquo;<sup>33</sup>他们说：&ldquo;约翰的门徒屡次禁食祈祷，法利赛人的门徒也是这样；惟独你的门徒又吃又喝。&rdquo;<sup>34</sup>耶稣对他们说：&ldquo;新郎和陪伴之人同在的时候，岂能叫陪伴之人禁食呢？<sup>35</sup>但日子将到，新郎要离开他们，那日他们就要禁食了。&rdquo;<sup>36</sup>耶稣又设一个比喻，对他们说：&ldquo;没有人把新衣服撕下一块来补在旧衣服上；若是这样，就把新的撕破了，并且所撕下来的那块新的和旧的也不相称。<sup>37</sup>也没有人把新酒装在旧皮袋里；若是这样，新酒必将皮袋裂开，酒便漏出来，皮袋也就坏了。<sup>38</sup>但新酒必须装在新皮袋里。<sup>39</sup>没有人喝了陈酒又想喝新的，他总说陈的好。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/223.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音5:27-39&nbsp;</button>
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

<p class="up">马太也就是利未，是亚勒腓的儿子。他有钱有势，被罗马政府信任和保护，他的工作是向以色列人收税金。但是身为税吏的他，因此被自己的人民所痛恨。他住在迦百农， 看见也听见耶稣所做的一切。或许他一直在考虑要放弃一切跟随耶稣。我们清楚看见天父不断预备他的心，因为他回应耶稣的呼召，来跟随祂。很快地，他将耶稣介绍给那些税吏朋友认识。耶稣冒着声誉受损的风险，花时间与这群人在一起为要得着他们。祂向这群人彰显特别的恩典，表现出祂的爱。耶稣喜欢人知道祂是罪人的朋友。</p>

<ul>
	<li class="nobreak-final-final">（进深学习：<span class="popup-link" @click = "popUp('pop4')"> 马太福音9:9-17</span>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>马太被召</h3>

	<p><sup class="versenum">9&nbsp;</sup>耶稣从那里往前走，看见一个人，名叫<u class="person underline">马太</u>，坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;他就起来跟从了耶稣。</p>

	<p><sup class="versenum">10&nbsp;</sup>耶稣在屋里坐席的时候，有好些税吏和罪人来，与耶稣和他的门徒一同坐席。<sup class="versenum">11&nbsp;</sup>法利赛人看见，就对耶稣的门徒说：&ldquo;你们的先生为什么和税吏并罪人一同吃饭呢？&rdquo;<sup class="versenum">12&nbsp;</sup>耶稣听见就说：&ldquo;康健的人用不着医生，有病的人才用得着。<sup class="versenum">13&nbsp;</sup>经上说：&lsquo;我喜爱怜恤，不喜爱祭祀&rsquo;，这句话的意思你们且去揣摩；我来本不是召义人，乃是召罪人。&rdquo;</p>

	<p><sup class="versenum">14&nbsp;</sup>那时，<u class="person underline">约翰</u>的门徒来见耶稣，说：&ldquo;我们和法利赛人常常禁食，你的门徒倒不禁食，这是为什么呢？&rdquo;<sup class="versenum">15&nbsp;</sup>耶稣对他们说：&ldquo;新郎和陪伴之人同在的时候，陪伴之人岂能哀恸呢？但日子将到，新郎要离开他们，那时候他们就要禁食。<sup class="versenum">16&nbsp;</sup>没有人把新布补在旧衣服上，因为所补上的反带坏了那衣服，破的就更大了。<sup class="versenum">17&nbsp;</sup>也没有人把新酒装在旧皮袋里，若是这样，皮袋就裂开，酒漏出来，连皮袋也坏了。唯独把新酒装在新皮袋里，两样就都保全了。&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> 马太福音2:14-22</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">约瑟</u>就起来，夜间带着小孩子和他母亲往埃及去，<sup class="versenum">15&nbsp;</sup>住在那里，直到<u class="person underline">希律</u>死了。这是要应验主借先知所说的话说：&ldquo;我从埃及召出我的儿子来。&rdquo;</p>

	<h3>屠杀男孩</h3>

	<p><sup class="versenum">16&nbsp;</sup><u class="person underline">希律</u>见自己被博士愚弄，就大大发怒，差人将伯利恒城里并四境所有的男孩，照着他向博士仔细查问的时候，凡两岁以里的都杀尽了。<sup class="versenum">17&nbsp;</sup>这就应了先知<u class="person underline">耶利米</u>的话说：<sup class="versenum">18&nbsp;</sup>&ldquo;在拉玛听见号啕大哭的声音，是<u class="person underline">拉结</u>哭她儿女，不肯受安慰，因为他们都不在了。&rdquo;</p>

	<p><sup class="versenum">19&nbsp;</sup><u class="person underline">希律</u>死了以后，有主的使者在埃及向<u class="person underline">约瑟</u>梦中显现，说：<sup class="versenum">20&nbsp;</sup>&ldquo;起来！带着小孩子和他母亲往以色列地去，因为要害小孩子性命的人已经死了。&rdquo;<sup class="versenum">21&nbsp;</sup><u class="person underline">约瑟</u>就起来，把小孩子和他母亲带到以色列地去。<sup class="versenum">22&nbsp;</sup>只因听见<u class="person underline">亚基老</u>接着他父亲<u class="person underline">希律</u>做了犹太王，就怕往那里去。又在梦中被主指示，便往加利利境内去了，</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路5:31</p>

<p class="forward bible">耶稣对他们说：&ldquo;无病的人用不着医生，有病的人才用得着；<sup>32</sup>我来本不是召义人悔改，乃是召罪人悔改。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">我们对身边的那些&ldquo;罪人&rdquo;持什么心态？你想耶稣会怎么看待他们？我们又该如何与他们相处？</li>
	<li class="forward">利未跟从耶稣，是决定性的委身。一个富有的税吏（类似今天的国家公务员）跟随了耶稣，他的生活品质可会有巨大的差异！但为了主，他义无反顾。<span><span><span lang="ZH-CN">今天耶稣也呼召你来服事祂，你如何看待和衡量你在生活、教会或小组里为耶稣所摆上的一切？是损失还是得着？是喜乐还是埋怨？是感恩还是比较？</span></span></span></li>
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
	<li class="forward">在人生每个阶段（如：考入大学、留学海外、进入婚姻、工作环境的改变、家庭孩子、照顾年老双亲等），求主耶稣帮助你都以得着和感恩的心态来面对，而不是总回头看自己失去了什么，甚至为自己失去的在他人身上寻找责任。</li>
	<li class="forward">利未的故事，激励我们与身边的人相处，学习不对任何人抱持成见、不对任何 人绝望、不断定对方是否得救，因为我们相信主若愿意搭救他，圣灵若在他的生命里动工，在信的人，凡事都能。<span><span><span lang="ZH-CN">花时间为那些还没信主的亲友祷告，求神施恩怜悯和拯救他们。</span></span></span></li>
	<li class="forward">为你身边的人祷告，若你心里对他们有任何埋怨、苦毒、不满、怀恨、比较、嫉妒、生气等情绪，将它们交托给主，向主倾心吐意。也求主赦免你，让你经历祂真实的爱与接纳，使你能以基督的心为心，竭力寻求与神与人和好。</li>
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

<p>施恩怜悯我们的主，我们感谢赞美祢！祢说：无病的人用不着医生，有病的人才用得着；祢来本不是召义人悔改，乃是召罪人悔改的。主耶稣啊，祢是监察人心的主，税吏利未听到祢呼召，就甘愿并马上放下一切跟随祢。求主帮助我们的跟随、爱心和服事都是甘心乐意摆上的。当我们以身边的人相处或共事时，有颗谦卑软和的心，因为我们一样都是罪人，都是需要祢拯救并经历救恩丰盛的人。奉主耶稣的圣名祷告，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->