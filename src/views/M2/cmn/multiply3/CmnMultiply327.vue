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
                        <div class="chapter_number ltr"><h1>27.</h1></div>
                        <div class="chapter_title ltr"><h1>城市传基督宣教——城市的宣教策略</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒13:48-49</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">48&nbsp;</sup>外邦人听见这话，就欢喜了，赞美神的道，凡预定得永生的人都信了。<sup class="versenum">49&nbsp;</sup>于是主的道传遍了那一带地方。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">保罗和巴拿巴放胆说：&ldquo;神的道先讲给你们原是应当的；只因你们弃绝这道，断定自己不配得永生，我们就转向外邦人去。因为主曾这样吩咐我们说：&lsquo;我已经立你作外邦人的光，叫你施行救恩，直到地极。&rsquo;&rdquo;这是一个主要的分水岭。保罗和巴拿巴开始转向外邦人。使徒确定主已经立他们作外邦人的光。他们确定主所给的使命是&ldquo;直到地极&rdquo;的使命。这带来了四方面的结果：第一，外邦人欢喜接受，赞美神的道。第二，主的道传遍了那一带地方。第三，成就带来了嫉妒和反对。犹太人挑唆虔敬、尊贵的妇女和城内有名望的人，逼迫保罗、巴拿巴，将他们赶出境外。第四，门徒满心喜乐，又被圣灵充满。</p>

<p class="back">神的作为何等奇妙，祂的旨意无法拦阻，必要成就！愿我们因此受激励。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">以哥念是位于从东到西一条主 要商道上的一座商业繁盛的城市，在那里有犹太人和外邦人。有犹太人与犹太会堂（&ldquo;以哥念&rdquo;即现代的土耳其的科尼亚（Konya），在安提阿东方145公里的罗马公路上）。</p>

<p class="indent2">保罗和巴拿巴在以哥念犹太人的会堂里讲道，叫很多犹太人和希利尼人相信基督。但那不顺从的犹太人耸动外邦人，叫他们心里恼恨弟兄。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="up"><span class="back"><span class="forward">&nbsp; &nbsp; &nbsp; &nbsp; </span></span>阅读或观看《徒14:1-7》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒14:1-7</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>二人在以哥念同进犹太人的会堂，在那里讲的，叫犹太人和希腊人信的很多。<sup>2</sup>但那不顺从的犹太人耸动外邦人，叫他们心里恼恨弟兄。<sup>3</sup>二人在那里住了多日，倚靠主放胆讲道，主藉他们的手施行神迹奇事，证明他的恩道。<sup>4</sup>城里的众人就分了党：有附从犹太人的，有附从使徒的。<sup>5</sup>那时，外邦人和犹太人并他们的官长一齐拥上来，要凌辱使徒，用石头打他们。<sup>6</sup>使徒知道了，就逃往吕高尼的路司得、特庇两个城和周围地方去，<sup>7</sup>在那里传福音。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/327.mp4" type="button" class="external-movie">
         观看&nbsp;徒14:1-7&nbsp;</button>
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
	<li class="nobreak-final-final">保罗和巴拿巴在彼西底的安提阿积极与人建立关系的方式，也用在这里。他们一开始便在当地的会堂传讲耶稣的信息，因为他们很清楚众人对谈论属灵的事有兴趣。主借着他们行许多的神迹，向人证明祂的福音之道，就有许多犹太人和外邦人信了。他们将教会建立起来，也给新信徒门徒训练。再一次，叫人来跟随耶稣的呼召使众人分了党，敌对福音的人耸动逼迫的计划，要杀保罗和巴拿巴。因此，他们离开那城，正如使徒被差派出去时，耶稣教导他们的：&ldquo;有人在这城里逼迫你们，就逃到那城里去。&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 太10:23</span>）

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>有人在这城里逼迫你们，就逃到那城里去。我实在告诉你们：以色列的城邑你们还没有走遍，人子就到了。</p>
	<!-- end bible --></div>
	他们到紧邻的乡镇和周围的地方去，继续传讲福音。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒14:3</p>

<p class="forward bible">二人在那里住了多日，倚靠主放胆讲道，主藉他们的手施行神迹奇事，证明他的恩道。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">保罗与巴拿巴不惧怕他们，恰恰因着他们的挑衅，就在那里多住几日。靠主放胆讲道，并有神迹相随。在这里路加再一次强调，神的话语和神迹之间的密切关系，神迹是为了证实神的话，神迹显出福音完全和真正权威。然而，另一方面，使徒能施行神迹奇事（3节），却不能用神迹去阻止敌人。可见神迹奇事乃是出于神的安排，而非出于人的意愿。神有时也允许逼迫发生，因为逼迫也可以成就神的旨意，圣灵的差遣有时是借着逼迫来进行的。
	<ul>
		<li class="forward">这对你有何提醒？教会在面对逼迫时当以怎样的心态来面对呢？</li>
		<li class="indent">逃离是不是很不光荣（或说宣教士逃离了宣教工场），你如何看呢？</li>
	</ul>
	</li>
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
	<li class="forward">一般人在遇到冲突时易走极端。有人说话莽撞，轻易伤害别人，还自己溢美为耿直。更多人倾向无原则避免冲突，看到不合圣经的事也装作没事，以至小事拖成大事。这些都都不合神的心意。
	<ul class="forward">
		<li class="forward">你遇到与人冲突时一般会如何处理？是息事宁人还是要把事情搞清楚？</li>
		<li class="forward">圣经中对处理冲突的原则有什么教导？本周花时间阅读<span class="popup-link" @click = "popUp('pop3')"> 马太福音18:15-18</span>、
		<div class="popup invisible" id="pop3"><!-- begin bible -->
		<p><sup class="versenum">15&nbsp;</sup>&ldquo;倘若你的弟兄得罪你，你就去，趁着只有他和你在一处的时候，指出他的错来。他若听你，你便得了你的弟兄。<sup class="versenum">16&nbsp;</sup>他若不听，你就另外带一两个人同去，要凭两三个人的口作见证，句句都可定准。<sup class="versenum">17&nbsp;</sup>若是不听他们，就告诉教会。若是不听教会，就看他像外邦人和税吏一样。<sup class="versenum">18&nbsp;</sup>我实在告诉你们：凡你们在地上所捆绑的，在天上也要捆绑；凡你们在地上所释放的，在天上也要释放。</p>
		<!-- end bible --></div>
		<span class="popup-link" @click = "popUp('pop4')"> 马太福音18:21-35</span>

		<div class="popup invisible" id="pop4"><!-- begin bible -->
		<h3>饶恕七十个七次</h3>

		<p><sup class="versenum">21&nbsp;</sup>那时，<u class="person underline">彼得</u>进前来，对耶稣说：&ldquo;主啊，我弟兄得罪我，我当饶恕他几次呢？到七次可以吗？&rdquo;<sup class="versenum">22&nbsp;</sup>耶稣说：&ldquo;我对你说，不是到七次，乃是到七十个七次。<sup class="versenum">23&nbsp;</sup>天国好像一个王要和他仆人算账。<sup class="versenum">24&nbsp;</sup>才算的时候，有人带了一个欠一千万银子的来。<sup class="versenum">25&nbsp;</sup>因为他没有什么偿还之物，主人吩咐把他和他妻子儿女并一切所有的都卖了偿还。<sup class="versenum">26&nbsp;</sup>那仆人就俯伏拜他，说：&lsquo;主啊，宽容我！将来我都要还清。&rsquo;<sup class="versenum">27&nbsp;</sup>那仆人的主人就动了慈心，把他释放了，并且免了他的债。</p>

		<p><sup class="versenum">28&nbsp;</sup>&ldquo;那仆人出来，遇见他的一个同伴欠他十两银子，便揪着他，掐住他的喉咙，说：&lsquo;你把所欠的还我！&rsquo;<sup class="versenum">29&nbsp;</sup>他的同伴就俯伏央求他，说：&lsquo;宽容我吧！将来我必还清。&rsquo;<sup class="versenum">30&nbsp;</sup>他不肯，竟去把他下在监里，等他还了所欠的债。<sup class="versenum">31&nbsp;</sup>众同伴看见他所做的事，就甚忧愁，去把这事都告诉了主人。<sup class="versenum">32&nbsp;</sup>于是主人叫了他来，对他说：&lsquo;你这恶奴才！你央求我，我就把你所欠的都免了。<sup class="versenum">33&nbsp;</sup>你不应当怜恤你的同伴，像我怜恤你吗？&rsquo;<sup class="versenum">34&nbsp;</sup>主人就大怒，把他交给掌刑的，等他还清了所欠的债。<sup class="versenum">35&nbsp;</sup>你们各人若不从心里饶恕你的弟兄，我天父也要这样待你们了。&rdquo;</p>
		<!-- end bible --></div>
		节，找出主要的原则。同时，对比自己处理的态度和做法是否合乎圣经？有什么需要去改变的？把它写下并在本周应用和操练。</li>
		<li class="forward">若你是教会的同工，在未来同工服事时，学习效法使徒们处理事情的态度和心志，更好的在同工团队里配搭合作，荣神益人。</li>
	</ul>
	</li>
	<li class="forward">继续有爱心、耐心并忠心造就和牧养主所托付你的群羊。你和核心门徒有好的配搭和服事，为主所差，得着更多的人归向基督。</li>
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

<p class="forward">我们在天上的父，愿人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上，如同行在天上。求主打发更多工人收割祢的庄稼，拓展我们的疆界，我们深愿在每1000人中就有1个&ldquo;徒2群体&rdquo;。天父阿，我们晓得，人心比万物都诡诈，坏到极点，他们公然反对、逼迫、甚至杀害祢的门徒。然而却也看到主的门徒倚靠圣灵放胆传道，主也藉他们的手施行神迹奇事，证明主的恩道。求主刚强我们和各地的教会，靠主刚强，站立得主，能以放胆讲说神的道，不退缩、不丧胆、不后悔。祈求圣灵在人的心中动工，预备和平之子。但愿荣耀、颂赞归于父神，直到永远，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->