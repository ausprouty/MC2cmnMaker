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
                        <div class="chapter_number ltr"><h1>26.</h1></div>
                        <div class="chapter_title ltr"><h1>省会外邦人宣教——异地跨文化宣教</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒13:43</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">43&nbsp;</sup>散会以后，犹太人和敬虔进犹太教的人多有跟从<u class="person underline">保罗</u>、<u class="person underline">巴拿巴</u>的。二人对他们讲道，劝他们务要恒久在神的恩中。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">安提阿教会的宣教工作是由圣灵发起的事工，同时教会积极寻求神的旨意、顺服圣灵的指引，使福音向外扩展。在圣灵的引导和地方教会上，应该避免两个极端：一是个人主义，即一个基督徒称自己直接从圣灵那里得到指示，他完全不提到教会；也应该避免机制主义，一切的决定都由教会做出，并不提及圣灵。记住，我们是与圣灵同工，作成神的工，因为离了基督我们什么也不能做。</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">从 13 章到 14 章是保罗的第一次宣教旅程。在这次的旅程中，保罗和巴拿巴到达了塞浦路斯（居比路）和加拉太。保罗继续在小亚西亚大小城市做游行布道的工作。他似乎选择那些具有战略性的中心地带，从那些地方开始工作。</p>

<ul class="up">
	<li class="nobreak-final-final">彼西底的安提阿是南加拉太政治交通贸易中心，有罗马人，有犹太人与犹太会堂，是有文化的城市。使徒来到彼西底的安提阿，在安息日进会堂坐下。读完了律法和先知的书，管会堂的，请他们说话。保罗就站起来，宣讲基督（<span class="popup-link" @click = "popUp('pop2')"> 徒13:16-41</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>保罗述说以色列古事</h3>

	<p><sup class="versenum">16&nbsp;</sup><u class="person underline">保罗</u>就站起来，举手说：&ldquo;以色列人和一切敬畏神的人，请听！<sup class="versenum">17&nbsp;</sup>这以色列民的神拣选了我们的祖宗，当民寄居埃及的时候抬举他们，用大能的手领他们出来。<sup class="versenum">18&nbsp;</sup>又在旷野容忍他们约有四十年。<sup class="versenum">19&nbsp;</sup>既灭了迦南地七族的人，就把那地分给他们为业。<sup class="versenum">20&nbsp;</sup>此后给他们设立士师，约有四百五十年，直到先知<u class="person underline">撒母耳</u>的时候。<sup class="versenum">21&nbsp;</sup>后来他们求一个王，神就将<u class="person underline">便雅悯</u>支派中<u class="person underline">基士</u>的儿子<u class="person underline">扫罗</u>给他们做王四十年。<sup class="versenum">22&nbsp;</sup>既废了<u class="person underline">扫罗</u>，就选立<u class="person underline">大卫</u>做他们的王，又为他作见证说：&lsquo;我寻得<u class="person underline">耶西</u>的儿子<u class="person underline">大卫</u>，他是合我心意的人，凡事要遵行我的旨意。&rsquo;<sup class="versenum">23&nbsp;</sup>从这人的后裔中，神已经照着所应许的为以色列人立了一位救主，就是耶稣。</p>

	<h3>述说耶稣在世的事</h3>

	<p><sup class="versenum">24&nbsp;</sup>&ldquo;在他没有出来以先，<u class="person underline">约翰</u>向以色列众民宣讲悔改的洗礼。<sup class="versenum">25&nbsp;</sup><u class="person underline">约翰</u>将行尽他的程途，说：&lsquo;你们以为我是谁？我不是基督。只是有一位在我以后来的，我解他脚上的鞋带也是不配的。&rsquo;<sup class="versenum">26&nbsp;</sup>弟兄们，<u class="person underline">亚伯拉罕</u>的子孙和你们中间敬畏神的人哪，这救世的道是传给我们的。<sup class="versenum">27&nbsp;</sup>耶路撒冷居住的人和他们的官长，因为不认识基督，也不明白每安息日所读众先知的书，就把基督定了死罪，正应了先知的预言。<sup class="versenum">28&nbsp;</sup>虽然查不出他有当死的罪来，还是求<u class="person underline">彼拉多</u>杀他。<sup class="versenum">29&nbsp;</sup>既成就了经上指着他所记的一切话，就把他从木头上取下来，放在坟墓里。<sup class="versenum">30&nbsp;</sup>神却叫他从死里复活。<sup class="versenum">31&nbsp;</sup>那从加利利同他上耶路撒冷的人多日看见他，这些人如今在民间是他的见证。<sup class="versenum">32&nbsp;</sup>我们也报好信息给你们，就是：那应许祖宗的话，<sup class="versenum">33&nbsp;</sup>神已经向我们这做儿女的应验，叫耶稣复活了。正如《诗篇》第二篇上记着说：&lsquo;你是我的儿子，我今日生你。&rsquo;<sup class="versenum">34&nbsp;</sup>论到神叫他从死里复活，不再归于朽坏，就这样说：&lsquo;我必将所应许<u class="person underline">大卫</u>那圣洁、可靠的恩典赐给你们。&rsquo;<sup class="versenum">35&nbsp;</sup>又有一篇上说：&lsquo;你必不叫你的圣者见朽坏。&rsquo;<sup class="versenum">36&nbsp;</sup><u class="person underline">大卫</u>在世的时候遵行了神的旨意，就睡了，归到他祖宗那里，已见朽坏。<sup class="versenum">37&nbsp;</sup>唯独神所复活的，他并未见朽坏。</p>

	<p><sup class="versenum">38&nbsp;</sup>&ldquo;所以弟兄们，你们当晓得：赦罪的道是由这人传给你们的！<sup class="versenum">39&nbsp;</sup>你们靠<u class="person underline">摩西</u>的律法，在一切不得称义的事上信靠这人，就都得称义了。<sup class="versenum">40&nbsp;</sup>所以你们务要小心，免得先知书上所说的临到你们。<sup class="versenum">41&nbsp;</sup>主说：&lsquo;你们这轻慢的人，要观看，要惊奇，要灭亡！因为在你们的时候，我行一件事，虽有人告诉你们，你们总是不信。&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	讲完了，出会堂，众人请他们下安息日再来传讲基督。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒13:44-52》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒13:44-52</button><div class="collapsed" id ="Text0">

<p><sup>44</sup>到下安息日，合城的人几乎都来聚集，要听　神的道。<sup>45</sup>但犹太人看见人这样多，就满心嫉妒，硬驳保罗所说的话，并且毁谤。<sup>46</sup>保罗和巴拿巴放胆说：&ldquo; 神的道先讲给你们，原是应当的；只因你们弃绝这道，断定自己不配得永生，我们就转向外邦人去。<sup>47</sup>因为主曾这样吩咐我们说：&lsquo;我已经立你作外邦人的光，叫你施行救恩，直到地极。&rsquo;&rdquo; <sup>48</sup>外邦人听见这话，就欢喜了，赞美　神的道；凡预定得永生的人都信了。</p>

<p><sup>49</sup>于是主的道传遍了那一带地方。<sup>50</sup>但犹太人挑唆虔敬尊贵的妇女和城内有名望的人，逼迫保罗、巴拿巴，将他们赶出境外。<sup>51</sup>二人对著众人跺下脚上的尘土 ，就往以哥念去了。<sup>52</sup>门徒满心喜乐，又被圣灵充满。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/326.mp4" type="button" class="external-movie">
         观看&nbsp;徒13:44-52&nbsp;</button>
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
<div id="Summary0" class="summary"><h2 class="up"><strong>+ 小结</strong></h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">保罗在会堂分享后的隔周，又继续分享更多关于耶稣的事。有愈多的人听见信息，想要学习这道。会堂里的犹太领袖心生嫉妒，开始反驳保罗说的话。保罗没有和那些领袖争辩，他知道耶稣让他们转向服事有渴慕的外邦人，并且有许多人得救。从这里我们了解到，因着上帝有主权，祂早就知道谁会相信福音的信息，然而，我们仍必须传福音（<span class="popup-link" @click = "popUp('pop3')"> 徒13:48</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">48&nbsp;</sup>外邦人听见这话，就欢喜了，赞美神的道，凡预定得永生的人都信了。</p>
	<!-- end bible --></div>
	几周后，他们在彼西底的安提阿建立一个教会，结果新信徒将主的道传遍了那一带地方。该城领袖对保罗和巴拿巴与日渐增的敌意和逼迫，使他们不得不离开那地。虽然保罗和巴拿巴在该城并未停留很久，但是却留下了许多满心喜乐又被圣灵充满的门徒。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒13:48-49</p>

<p class="forward bible"><sup>48</sup>外邦人听见这话，就欢喜了，赞美　神的道；凡预定得永生的人都信了。<sup>49</sup>于是主的道传遍了那一带地方。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你在见证神、服事神中遭遇过挫折和反对吗？你如何回应的？</li>
	<li class="forward">第 46 节描述的人和 48 节描述的人，是什么不同结果？你是否有异地跨文化的宣教？这段经文给我们什么提醒或借鉴？</li>
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
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;（你要我为你做什么？），主动表达关心和服事他们，并找机会与他们分享《被圣灵充满》或《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法。</li>
	<li class="forward">与门徒持续参与每月一次的《发展领袖》的培训，使你们受装备和训练，更好带领小组和教会。</li>
	<li class="forward">为宣教士在各地有神的同在和能力，在他们所服事的禾场中，讲道大有圣灵的恩膏，并劝众人务要恒久在神的恩中，牧养和建立他们成为当地教会的领袖。</li>
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

<p class="forward">亲爱的天父，愿这地的人都尊祢的名为圣，愿祢的国降临，愿祢的旨意行在地上，如同行在天上。求主打发更多工人收割祢的庄稼，拓展我们的疆界，我们深愿在每1000人中就有1个&ldquo;徒2群体&rdquo;。天父啊，我们赞美您，祢是我们的神，在人不能，在祢凡事都能。祢说有就有，命立就立，祢的能力充满了宇宙和天地。感谢祢，祢应许软弱的，祢加能力；疲乏的，祢加力量；凡等候祢的，必重新得力。求祢借着圣灵将祢的能力天天充满浇灌在我们里面，使我们如鹰展翅上腾，行走也不疲乏，奔跑也不困倦。祷告奉主耶稣的名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->