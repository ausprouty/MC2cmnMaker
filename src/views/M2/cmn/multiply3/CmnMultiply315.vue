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
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>腓利向非洲太监传道——跨文化宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒8:25</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>使徒既证明主道而且传讲，就回耶路撒冷去，一路在撒马利亚好些村庄传扬福音。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">西门久用邪术，使人们惊奇，为得名利地位。他要用钱买按手的权柄，把这和为己牟利的邪术同等看待，以为可以因此得名得利。他的动机错了。彼得说：&ldquo;你的心不正&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 徒8:21</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>你在这道上无份无关，因为在神面前你的心不正。</p>
	<!-- end bible --></div>
	神的恩赐不是可以用钱买的。神的恩赐也不是可以用来牟利的。神的恩赐是为了建立信徒，过圣洁生活，荣耀神的（<span class="popup-link" @click = "popUp('pop3')"> 弗4:11-12</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>他所赐的有使徒，有先知，有传福音的，有牧师和教师，<sup class="versenum">12&nbsp;</sup>为要成全圣徒，各尽其职，建立基督的身体，</p>
	<!-- end bible --></div>
	我们是否珍惜神所赐给我们的恩赐？我们是否使用神所赐的恩赐来建立基督的身体，荣神益人？</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">不久之前被选为教会七位执事之一的腓利也因为这次事件去到了撒玛利亚，在这群&ldquo;以色列迷失的羊&rdquo;中间，腓利以神迹奇事证明他所传扬的信息，作者描述在那城里，包括男女在内，许多人不但相信，而且立刻受洗，城中充满了喜乐；远在耶路撒冷的使徒们 也听到了这个好消息，他们专程前来了解状况，并且公开接纳这群和犹太人彼此仇视的外人进入教会。</p>

<p class="indent2">然而，就在这个欢天喜地的时刻出现了一道阴影，有一个叫做西门的人虽受了洗，却没有真正领受腓利所传的道，这人以为可以用金钱收买使徒而得到属灵的权柄，西门受到了彼得毫不留情的痛斥和警告；完成任务的两位使徒沿着撒玛利亚的村庄，一边传福音，一边回到了耶路撒冷。</p>

<p class="indent2">上帝借着腓利在撒玛利亚大有能力的传讲神的福音。腓利又向埃塞俄比亚的太监传福音，埃塞俄比亚的传统，认为这个太监是他们国家的第一个布道者。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒8:26-40》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒8:26-40</button><div class="collapsed" id ="Text0">

<p><sup>26</sup>有主的一个使者对腓利说：&ldquo;起来！向南走，往那从耶路撒冷下迦萨的路上去。那路是旷野。&rdquo; <sup>27</sup>腓利就起身去了。不料，有一个埃提阿伯（注：即古实，见以赛亚<sup>18</sup>:<sup>1</sup>）人，是个有大权的太监，在埃提阿伯女王干大基的手下总管银库，他上耶路撒冷礼拜去了。<sup>28</sup>现在回来，在车上坐著，念先知以赛亚的书。<sup>29</sup>圣灵对腓利说：&ldquo;你去贴近那车走。&rdquo;</p>

<p><sup>30</sup>腓利就跑到太监那里，听见他念先知以赛亚的书，便问他说：&ldquo;你所念的，你明白吗？&rdquo;<sup>31</sup>他说：&ldquo;没有人指教我，怎能明白呢？&rdquo;于是请腓利上车，与他同坐。<sup>32</sup>他所念的那段经，说：&ldquo;他像羊被牵到宰杀之地，又像羊羔在剪毛的人手下无声，他也是这样不开口。<sup>33</sup>他卑微的时候，人不按公义审判他（注：原文作&ldquo;他的审判被夺去&rdquo;）；谁能述说他的世代？因为他的生命从地上夺去。&rdquo;<sup>34</sup>太监对腓利说：&ldquo;请问先知说这话，是指著谁？是指著自己呢？是指著别人呢？&rdquo;<sup>35</sup>腓利就开口从这经上起，对他传讲耶稣。</p>

<p><sup>36</sup>二人正往前走，到了有水的地方，太监说：&ldquo;看哪，这里有水，我受洗有甚么妨碍呢？&rdquo;（注：有古卷在此有<sup>37</sup>腓利说：&ldquo;你若是一心相信，就可以。&rdquo;他回答说：&ldquo;我信耶稣基督是　神的儿子。&rdquo;）<sup>38</sup>于是吩咐车站住，腓利和太监二人同下水里去，腓利就给他施洗。<sup>39</sup>从水里上来，主的灵把腓利提了去。太监也不再见他了，就欢欢喜喜地走路。<sup>40</sup>后来有人在亚锁都遇见腓利。他走遍那地方，在各城宣传福音，直到凯撒利亚。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/315.mp4" type="button" class="external-movie">
         观看&nbsp;徒8:26-40&nbsp;</button>
    <div class="collapsed"></div>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，使万民作门徒与建立教会？</li>
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

<p class="up">圣灵打断腓利在撒玛利亚成功的事奉，差他去以色列的最南端，见一位重要的和平之子。虽然不知道为什么被差去那里，腓利仍前往那里，显出他有一颗顺服的心，敏锐圣灵的带领。他所见的这位埃提阿伯的领袖，是一名非犹太人，但接受了犹太人的信仰。身为一名非犹太人以及太监（为了在女性掌权的宫廷服事，而被阉割的人），他无法完全被犹太人的信仰所接受。然而，耶稣准备好了要接受他！主已预备他的心，使用腓利向他传讲福音的好消息。腓利在耶路撒冷学到的施洗方式，他曾在撒玛里亚用过，如今也照样用在这里。这位埃提阿伯人信了，立刻受了洗。腓利在以色列沿岸的各城市传讲福音，最后居住在西泽利亚&mdash;&mdash;以色列最大的国际港口城市，也是罗马政府在犹太地区设立的政治中心。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒8:38</p>

<p class="forward bible">于是吩咐车站住，腓利和太监二人同下水里去，腓利就给他施洗。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">综合第八章从这段经文，我们可以看到耶路撒冷教会大遭逼迫后的正面效应是什么？这帮助我们怎样看待神的作为。</li>
	<li class="forward">试比较腓利在第八章中两次传福音中的异同点，对我们教会的传福音事工有何提醒？另外，从腓利身上有那些值得我们效法的生命特质？</li>
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
	<li class="forward">求主监察你的心，最近什么事让你丧胆、后退，耗尽或是哀伤的，你就一一带到施恩的主面前。本周在你个人的读经和灵修，试着在经文中不断发现基督，思想基督和他的十字架对你有何意义？</li>
	<li class="forward">本周与属灵同伴祷告，并找时间向一个自己陌生的群体传福音。也与教会牧者分享，在小组中一起借着祷告、奉献或短宣认领一个未得之民的宣教事工。</li>
	<li class="forward">为教会的牧者/同工，并教会开展的福音事工祷告，求主保守他们无论在任何境况和处境都靠主常喜乐，顺着圣灵的引领，主预备和平之子，并将福音传开。</li>
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
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">为更多的教会看到培训领袖的重要性，弟兄姐妹也愿意花时间付代价，接受传福音的训练装备，成为被主使用和差派到各地的福音使者。</li>
	<li class="forward">求主拓展教会的疆界，众教会都走出去，作基督的精兵，为主放胆传讲福音、造就门徒、发展领袖和倍增教会，成为多人的祝福，主名得荣！</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->