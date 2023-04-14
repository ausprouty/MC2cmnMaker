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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>12.</h1></div>
                        <div class="chapter_title ltr"><h1>为主开放家庭</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课强调福音的大能是出于上帝。上帝自己打开福音的大门，预备和平之子，借着开放家庭，将福音传开；而我们只要配合上帝的工作，相信祂必在人心中动善工。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">诗篇9：7-11</p>

<p class="back bible"><sup>7</sup>惟耶和华坐著为王，直到永远！他已经为审判设摆他的宝座。<sup>8</sup>他要按公义审判世界，按正直判断万民。<sup>9</sup>耶和华又要给受欺压的人作高台，在患难的时候作高台。<sup>10</sup>耶和华啊，认识你名的人要倚靠你，因你没有离弃寻求你的人。<sup>11</sup>应当歌颂居锡安的耶和华，将他所行的传扬在众民中。</p>

</div>

<ul class="back">
	<li class="back">让我们用诗歌或一起开声赞美神公义的判断，也为我们国家现在的情况祷告在神的面前，相信依靠神的人，神没有离弃他们。</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒1:8</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">耶稣呼召每个人来跟随祂，并且得人如得鱼。由此可见，世界上只有两种人：失丧的人和得救的人。失丧的人需要来跟随耶稣，得救的人需要学习得着那些失丧的人。当你把世人看成两种人，你每天与人的互动就简单多了。遇见失丧的人，你就向他们作见证；遇见得救的人，为他们提供培训，训练他们成为倍增门徒。没有什么比这更简单的了！</p>

</div>

<h2 class="back">&nbsp;</h2>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 故事背景</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">使<span class="popup-link" @click = "popUp('pop7')"> 徒行传1:1-8</span>，

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<h3>应许得圣灵的能力</h3>

	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>啊，我已经作了前书，论到耶稣开头一切所行所教训的，<sup class="versenum">2&nbsp;</sup>直到他借着圣灵吩咐所拣选的使徒以后，被接上升的日子为止。<sup class="versenum">3&nbsp;</sup>他受害之后，用许多的凭据将自己活活地显给使徒看，四十天之久向他们显现，讲说神国的事。<sup class="versenum">4&nbsp;</sup>耶稣和他们聚集的时候，嘱咐他们说：&ldquo;不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。<sup class="versenum">5&nbsp;</sup><u class="person underline">约翰</u>是用水施洗，但不多几日，你们要受圣灵的洗。&rdquo;</p>

	<p><sup class="versenum">6&nbsp;</sup>他们聚集的时候，问耶稣说：&ldquo;主啊，你复兴以色列国就在这时候吗？&rdquo;<sup class="versenum">7&nbsp;</sup>耶稣对他们说：&ldquo;父凭着自己的权柄所定的时候、日期，不是你们可以知道的。<sup class="versenum">8&nbsp;</sup>但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。&rdquo;</p>
	<!-- end bible --></div>
	彼得受圣灵引导，去到海边一个名叫凯撒利亚的小镇，那里住着一位罗马军长，名叫哥尼流。他是上帝预备的一位&ldquo;和平之子&rdquo;。彼得顺从引导，就前往凯撒利亚去告诉哥尼流关于耶稣的事。 现在一起看看接下来发生的事。</li>
</ul>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《使徒行传10:24-48》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 使徒行传10:24-48</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">24&nbsp;</sup>又次日，他们进入恺撒利亚。<u class="person underline">哥尼流</u>已经请了他的亲属密友等候他们。<sup class="versenum">25&nbsp;</sup><u class="person underline">彼得</u>一进去，<u class="person underline">哥尼流</u>就迎接他，俯伏在他脚前拜他。<sup class="versenum">26&nbsp;</sup><u class="person underline">彼得</u>却拉他，说：&ldquo;你起来，我也是人。&rdquo;<sup class="versenum">27&nbsp;</sup><u class="person underline">彼得</u>和他说着话进去，见有好些人在那里聚集，<sup class="versenum">28&nbsp;</sup>就对他们说：&ldquo;你们知道，犹太人和别国的人亲近来往本是不合例的，但神已经指示我，无论什么人都不可看做俗而不洁净的。<sup class="versenum">29&nbsp;</sup>所以我被请的时候，就不推辞而来。现在请问：你们叫我来有什么意思呢？&rdquo;<sup class="versenum">30&nbsp;</sup><u class="person underline">哥尼流</u>说：&ldquo;前四天这个时候，我在家中守着申初的祷告，忽然有一个人穿着光明的衣裳，站在我面前，<sup class="versenum">31&nbsp;</sup>说：&lsquo;<u class="person underline">哥尼流</u>，你的祷告已蒙垂听，你的周济达到神面前已蒙记念了。<sup class="versenum">32&nbsp;</sup>你当打发人往约帕去，请那称呼<u class="person underline">彼得</u>的<u class="person underline">西门</u>来，他住在海边一个硝皮匠<u class="person underline">西门</u>的家里。&rsquo;<sup class="versenum">33&nbsp;</sup>所以我立时打发人去请你。你来了很好！现今我们都在神面前，要听主所吩咐你的一切话。&rdquo;</p>

<p><sup class="versenum">34&nbsp;</sup><u class="person underline">彼得</u>就开口说：&ldquo;我真看出神是不偏待人，<sup class="versenum">35&nbsp;</sup>原来各国中那敬畏主、行义的人都为主所悦纳。<sup class="versenum">36&nbsp;</sup>神借着耶稣基督&mdash;&mdash;他是万有的主&mdash;&mdash;传和平的福音，将这道赐给以色列人。<sup class="versenum">37&nbsp;</sup>这话在<u class="person underline">约翰</u>宣传洗礼以后，从加利利起，传遍了犹太。<sup class="versenum">38&nbsp;</sup>神怎样以圣灵和能力膏拿撒勒人耶稣，这都是你们知道的。他周流四方，行善事，医好凡被魔鬼压制的人，因为神与他同在。<sup class="versenum">39&nbsp;</sup>他在犹太人之地并耶路撒冷所行的一切事，有我们作见证。他们竟把他挂在木头上杀了！<sup class="versenum">40&nbsp;</sup>第三日，神叫他复活，显现出来，<sup class="versenum">41&nbsp;</sup>不是显现给众人看，乃是显现给神预先所拣选为他作见证的人看，就是我们这些在他从死里复活以后和他同吃同喝的人。<sup class="versenum">42&nbsp;</sup>他吩咐我们传道给众人，证明他是神所立定的，要做审判活人、死人的主。<sup class="versenum">43&nbsp;</sup>众先知也为他作见证说：&lsquo;凡信他的人，必因他的名得蒙赦罪。&rsquo;&rdquo;</p>

<p><sup class="versenum">44&nbsp;</sup><u class="person underline">彼得</u>还说这话的时候，圣灵降在一切听道的人身上。<sup class="versenum">45&nbsp;</sup>那些奉割礼、和<u class="person underline">彼得</u>同来的信徒，见圣灵的恩赐也浇在外邦人身上，就都稀奇，<sup class="versenum">46&nbsp;</sup>因听见他们说方言，称赞神为大。<sup class="versenum">47&nbsp;</sup>于是<u class="person underline">彼得</u>说：&ldquo;这些人既受了圣灵，与我们一样，谁能禁止用水给他们施洗呢？&rdquo;<sup class="versenum">48&nbsp;</sup>就吩咐奉耶稣基督的名给他们施洗。他们又请<u class="person underline">彼得</u>住了几天。</p>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/112.mp4" type="button" class="external-movie">
         观看&nbsp;使徒行传10:24-48&nbsp;</button>
    <div class="collapsed"></div>

<p class="up">&nbsp;</p>

<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对耶稣并祂爱世人的心有什么新的认识？</li>
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
<div id="Summary3" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">&ldquo;和平之子&rdquo;是与人有好关系的人。我们可以向个人传福音，但我们也把握机会邀请&ldquo;和平之子&rdquo;开放他们的家庭，向他们的家人朋友传福音。藉着关系把福音传开的例子，圣经还记载其他类似的例证，如:吕底亚和她一家（<span class="popup-link" @click = "popUp('pop3')"> 徒16:14-15</span>）；

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>有一个卖紫色布匹的妇人，名叫<u class="person underline">吕底亚</u>，是推雅推喇城的人，素来敬拜神。她听见了，主就开导她的心，叫她留心听<u class="person underline">保罗</u>所讲的话。<sup class="versenum">15&nbsp;</sup>她和她一家既领了洗，便求我们说：&ldquo;你们若以为我是真信主的，请到我家里来住。&rdquo;于是强留我们。</p>
	<!-- end bible --></div>
	腓立比的禁卒和他一家（<span class="popup-link" @click = "popUp('pop4')"> 徒16:30-33</span>）；

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>又领他们出来，说：&ldquo;二位先生，我当怎样行才可以得救？&rdquo;</p>

	<p><sup class="versenum">31&nbsp;</sup>他们说：&ldquo;当信主耶稣，你和你一家都必得救。&rdquo;<sup class="versenum">32&nbsp;</sup>他们就把主的道讲给他和他全家的人听。<sup class="versenum">33&nbsp;</sup>当夜，就在那时候，禁卒把他们带去，洗他们的伤，他和属乎他的人立时都受了洗。</p>
	<!-- end bible --></div>
	税吏马太并他的朋友们（<span class="popup-link" @click = "popUp('pop5')"> 太9:9-10</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>耶稣从那里往前走，看见一个人，名叫<u class="person underline">马太</u>，坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;他就起来跟从了耶稣。</p>

	<p><sup class="versenum">10&nbsp;</sup>耶稣在屋里坐席的时候，有好些税吏和罪人来，与耶稣和他的门徒一同坐席。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward">马太福音5:9</p>

<p class="forward bible">使人和睦的人有福了！因为他们必称为 神的儿子。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward"><strong>对群体传福音</strong></li>
</ul>

<p class="indent2">我们学习如何在&ldquo;和平之子&rdquo;的家中，向一小群人传福音。首先我们需要为&ldquo;福音性聚会&rdquo;设定一个主题，并围绕这个&ldquo;主题&rdquo;来设计内容。</p>

<p class="indent2">&ldquo;福音性聚会&rdquo;的四个主要的部分：</p>

<p class="indent3">1) 选择有属灵含义的影片播放</p>

<p class="indent3">2) 播放《耶稣生平》的片段。</p>

<p class="indent3">3) 分享个人的见证（我的故事）</p>

<p class="indent3">4) 分享福音，并给人一个祷告接受耶稣的机会</p>

<ul class="forward">
	<li class="forward"><strong>组长示范：福音性聚会</strong></li>
</ul>

<p class="indent2">接下来，我们以&ldquo;盼望&rdquo;作为主题，并按照下面步骤来示范&ldquo;福音性聚会&rdquo;的四个部分：</p>

<p class="indent3">1) 播放视频《自由》（Laliberte）</p>

<p class="indent3">2) 播放《耶稣生平》视频（路7:35-50）或《我的最后一天》</p>

<p>&nbsp;</p>

<p class="indent3">3) 分享认识基督的个人故事</p>

<p class="indent3">4) 分享福音，给人机会祷告接受基督。（使用四件事流沙或《耶稣生平》的结尾）</p>

<ul class="forward">
	<li class="indent2">这个福音性聚会让你印象最深刻的是什么，为什么？</li>
	<li class="indent2">你是否愿意成为&ldquo;和平之子&rdquo;举办福音性聚会，让更多亲朋邻舍认识耶稣？为什么？</li>
	<li class="up"><strong>小结</strong></li>
</ul>

<p class="indent2">&ldquo;福音性聚会&rdquo;对那些参加者的生命会有非常大的影响力。除了&ldquo;盼望&rdquo;这个主题，其他主题也很有帮助，值得我们使用，例如：爱、饶恕、羞愧感、罪疚、孤单、医治等。因此可以根据福音对象实际的需要，筹划福音活动。</p>

<ul class="forward">
	<li class="forward"><strong>如何筹办福音性聚会</strong></li>
</ul>

<p class="forward">我们可以借一些特别的节日（例如：圣诞节、受难节、复活节、感恩节、生日、家庭聚餐、校友聚餐、结婚周年等）来举办&ldquo;福音性聚会&rdquo;。在此提供举办&ldquo;福音性聚会&rdquo;的三项资源：</p>

<ul class="forward">
	<li class="forward">附录12.1《举办一场福音性聚会》</li>
	<li class="forward">附录12.2：《如何挑战人举办一场聚会》</li>
	<li class="forward">附录12.3《筹备清单及聚会主持模板》</li>
</ul>

<h2 class="up">小结</h2>

<p class="indent2">成功的见证是&ldquo;靠着圣灵的大能，采取主动，单单传讲基督，并将结果交托给神。&rdquo;</p>

<ul>
	<li class="forward">若有人在聚会中决志信主，我们该做什么呢？若想看到倍增，接下来的步骤非常重要。当他们决志信主，就必须在接下来的一两天跟进他们。</li>
</ul>

<p class="indent2">与这些初信者见面时，可做下列几件事情：</p>

<p class="indent2">1) 与他们一起复习《四件事》或其他福音工具，确认他们接受基督的决定。如果他们不清楚或不确定，就再给他们一次机会接受基督。</p>

<p class="indent2">2) 问他们：&ldquo;还有谁需要听到福音？&rdquo;请他们写下五位亲友的名字，开始为他们祷告，求神预备传福音的机会</p>

<p class="indent2">3) 让他们知道，你想帮助他们在基督里成长，并邀请他们开始和那些同样在聚会中决志的人，一起读圣经。</p>

<p class="indent2">4) 结束以前，为他们与基督的新关系祷告。</p>

<ul class="forward">
	<li class="forward">祷告并预备你的心，并开放你的家庭/宿舍/办公场所，作为福音性聚会的场所。</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">计划何时开放你的家庭举办福音性聚会（请阅读附录12.1，附录12.2和附录12.3）。</li>
	<li class="forward">在《福音行动表》中列下5位你将邀请参加福音性聚会的亲朋邻舍的名单，为他们祷告，求神打开他们的心眼，心被圣灵恩感，愿意来到聚会中。</li>
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
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p class="forward">亲爱的天父，感谢祢，我们愿意成为那被祢差遣的人。祈求天父给我们力量和信心，按着祢的心意去行，找到祢为我们所预备的和平之子，将我们所学到的知识、方法付诸于行动，来祝福我们的亲朋邻舍。愿祢祝福这些我们将要举办的福音聚会，让他们也来就近祢、接受祢并经历祢。奉主耶稣的名祷告，阿们。</p>

</div>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->