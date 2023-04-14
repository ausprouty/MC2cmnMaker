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
                        <div class="chapter_number ltr"><h1>31.</h1></div>
                        <div class="chapter_title ltr"><h1>再次出发重整团队——因马可分两队</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<h2 class="back">敬拜赞美&mdash;&mdash;以神的话、诗歌称颂赞美神</h2>

<h2 class="back">祷告关怀&mdash;&mdash;以祷告、勉励，合乎圣经的教导彼此服侍</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷</li>
</ul>

<h2 class="back">庆贺实践&mdash;&mdash;鼓励小组在爱中互相督促，一同顺服耶稣</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神忠心地操练和实践基督使命的福音行动。</li>
	<li class="back">背诵经文（<span class="popup-link" @click = "popUp('pop1')"> 徒15:19-20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>&ldquo;所以据我的意见，不可难为那归服神的外邦人，<sup class="versenum">20&nbsp;</sup>只要写信吩咐他们禁戒偶像的污秽和奸淫，并勒死的牲畜和血。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意&mdash;&mdash;体恤神的心意，成为我们行事的动机与激励</h2>

<p class="back">在耶路撒冷会议中出现的一些教会领袖令人印象深刻，尤其是雅各和彼得，他们是耶路撒冷犹太教会的领袖，虽然有身为犹太人的偏好和立场，但却能放下自己的喜好，有属灵的视野和宽广的心胸，秉公顺服神的心意，在圣灵的引导中做出智慧的决定。教会领袖的决策影响深远，身为领袖者岂能不谨慎？岂能不求神赐下智慧和谦卑，秉公治理神的家呢？愿神帮助我们在教会作领袖的，凡事为荣耀神并弟兄姐妹最大的益处着想，在各项的决策上，寻求神的智慧与带领，竭力保守圣灵所赐合而为一的心，主名得荣！</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣&mdash;&mdash;学习为要应用，应用带来生命改变</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">耶路撒冷会议的结论以正式信函的方式并差派特使传送至外邦信徒，其结果圆满得到众人的接纳。使徒和长老并全教会定意拣选犹大和西拉，差他们和保罗、巴拿巴同往安提阿去。于是写信交付他们带去。信的目的有三：</p>

<ol class="indent3">
	<li class="up">澄清没有吩咐外邦人须守律法才得救</li>
	<li class="up">认同巴拿巴与保罗的工作</li>
	<li class="up">建议几件禁戒的事</li>
</ol>

<p class="indent2">保罗和西拉带着使徒们的信回到安提阿，众人都因着信上安慰的话得着坚固。一段时间后，保罗再度出发&ldquo;回到从前宣传主道的各城，看望弟兄们。&rdquo;</p>

<p class="indent2">使徒行传15:36 节标志了保罗第2次旅行布道的开始。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒15:36-16:5》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒15:36-16:5</button><div class="collapsed" id ="Text0">

<p><sup>5</sup>:<sup>36</sup>过了些日子，保罗对巴拿巴说：&ldquo;我们可以回到从前宣传主道的各城，看望弟兄们景况如何。&rdquo; <sup>37</sup>巴拿巴有意要带称呼马可的约翰同去；<sup>38</sup>但保罗因为马可从前在旁非利亚离开他们，不和他们同去做工，就以为不可带他去。<sup>39</sup>于是二人起了争论，甚至彼此分开。巴拿巴带着马可坐船往塞浦路斯去；<sup>40</sup>保罗拣选了西拉也出去，蒙弟兄们把他交于主的恩中。<sup>41</sup>他就走遍叙利亚、基利家，坚固众教会。</p>

<p><sup>6</sup>:<sup>1</sup>保罗来到特庇，又到路司得。在那里有一个门徒，名叫提摩太，是信主之犹太妇人的儿子，他父亲却是希腊人。<sup>2</sup>路司得和以哥念的弟兄都称赞他。<sup>3</sup>保罗要带他同去，只因那些地方的犹太人都知道他父亲是希腊人，就给他行了割礼。<sup>4</sup>他们经过各城，把耶路撒冷使徒和长老所定的条规交给门徒遵守。<sup>5</sup>于是众教会信心越发坚固，人数天天加增。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/331.mp4" type="button" class="external-movie">
         观看徒15:36-16:5</button>
    <div class="collapsed"></div>



<p class="up">&nbsp;</p>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">故事中克服了什么障碍或难题？又是如何克服的呢？</li>
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
	<li class="nobreak-final-final">保罗想要继续跟随他的呼召，去使万民信服真道（<span class="popup-link" @click = "popUp('pop2')"> 罗1:5</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>我们从他受了恩惠并使徒的职分，在万国之中叫人为他的名信服真道，</p>
	<!-- end bible --></div>
	正当保罗和巴拿巴预备离开时，他们为了巴拿巴的表弟马可起了大争执。保罗不信任马可能胜任此工作，因为他曾在第一次旅程中离开他们。巴拿巴却看见马可的领导潜能，想要给他第二次机会。最后，保罗和巴拿巴彼此分开，各自成立宣教团队。巴拿巴带着马可回到塞浦路斯。保罗则拣选了西拉&mdash;&mdash;一个耶路撒冷教会的先知（<span class="popup-link" @click = "popUp('pop10')"> 徒15:32</span>），

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">32&nbsp;</sup><u class="person underline">犹大</u>和<u class="person underline">西拉</u>也是先知，就用许多话劝勉弟兄，坚固他们。</p>
	<!-- end bible --></div>
	作为他的新同工，一起重访第一次宣教旅程建立的教会。他们去坚固那些年轻的教会，保罗也在路司得招募了一个名叫提摩太的新信徒，要他协助事奉。</li>
	<li class="nobreak-final-final">本句为《使徒行传》下第四个总结：由于保罗的鼓励和教导，众教会信心越发坚固，人数天天加增。（<span class="popup-link" @click = "popUp('pop3')"> 徒16:5</span>）
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>于是众教会信心越发坚固，人数天天加增。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵&mdash;&mdash;将神话语藏在心里，成为我们行事的准则</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒16:4-5</p>

<p class="forward bible"><sup>4</sup>他们经过各城，把耶路撒冷使徒和长老所定的条规交给门徒遵守。<sup>5</sup>于是众教会信心越发坚固，人数天天加增。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备&mdash;&mdash;操练有信心并忠心地实践和训练他人</h2>

<ul class="forward">
	<li class="forward">从本章末巴拿巴和保罗分开的描述，及其他有关的经文（例：<span class="popup-link" @click = "popUp('pop4')"> 林前9:6</span><sup>&nbsp;</sup>；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>独有我与<u class="person underline">巴拿巴</u>没有权柄不做工吗？</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop8')"> 提后4:11</span>&nbsp;），

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>这些事你要吩咐人，也要教导人。</p>
	<!-- end bible --></div>
	请分享同工服事的原则。当你与别的基督徒或同工配搭，有意见不同时，一般你会如何处理？为什么？</li>
	<li class="forward">你认为可以在哪些方面帮助初信徒坚固信心呢？请分享你目前是如何参与&ldquo;去使万民作主门徒&rdquo;的行列里？</li>
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


<h2 class="forward">福音行动&mdash;&mdash;设定行动点，彼此督责，勉励行道</h2>

<ul class="forward">
	<li class="forward">保罗与巴拿巴的分道扬镳，主要是由于性格和处事方法的不同，与他们对真理的看法和教导无关。同时，他们也决不是从此就老死不相往来、不相闻问。保罗虽不同意巴拿巴和马可，但他仍旧以他们为主里亲爱的同工(<span class="popup-link" @click = "popUp('pop9')"> 林前9:6</span>；

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>独有我与<u class="person underline">巴拿巴</u>没有权柄不做工吗？</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop7')"> 提后4:11</span>)。

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>这些事你要吩咐人，也要教导人。</p>
	<!-- end bible --></div>

	<ul class="forward">
		<li class="forward">在教会的服事配搭当中，是否有因为一些性格或是处事方法的不同，而与同工间有分歧？祷告神赐你或牧者同工属灵的智慧与胸怀，看到神在这事上的心意，以及祂要在你们生命中做什么雕琢的工作，就愿意谦卑放下自己的权力；竭力保守圣灵所赐合而为一的心、不给魔鬼留地步、相信彼此不是对方的敌人，是在基督里亲爱的弟兄姐妹和同工。</li>
		<li class="forward">的确，神的工作不因人的意见而受拦阻，福音继续的被传开。求主保守教会与本城其他教会和牧者同工有好的合作与配搭，各人放下自己、看别人比自己强、愿意资源共享、彼此祝福和成全，让主的名在这城市得着荣耀。</li>
		<li class="forward">祷告神，教会牧者和执事在断定事情的对错，不是根据对方的功劳、地位和能力，而应该根据事实，有神的智慧和谦柔，秉公顺服神的带领。</li>
	</ul>
	</li>
	<li class="forward">你继续花时间造就门徒、持续参与每月一次《发展领袖》的学习与装备，更好被主使用，倍增门徒与教会。</li>
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


<h2 class="forward">福音祷告&mdash;&mdash;将所行的交托神，愿祂旨意成就在这地</h2>

<p class="forward">永活的救主耶稣基督，祢配得一切的称颂与赞美！主啊！祢是我们的山寨，给我们最大保障；祢是我们的盘石，给我们坚固的依靠。主啊！祢在茫茫人海中拣选了我们，并在尘土中抬举我们，使我们与王子同坐，得着荣耀的座位。主啊！我们感谢祢，我们把所行的事交托给祢，我们不求自己的喜悦，只求祢的喜悦；不求自己的益处，只求天父的旨意行在全地如同行在天上。求祢保守我们众人在祢里面的合一，彼此相爱和相顾，使人认出我们是祢的门徒，奉主的圣名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->