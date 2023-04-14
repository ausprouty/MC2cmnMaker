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
                        <div class="chapter_number ltr"><h1>36.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与供应</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太14:12-13</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup><u class="person underline">约翰</u>的门徒来，把尸首领去埋葬了，就去告诉耶稣。</p>

	<p><sup class="versenum">13&nbsp;</sup>耶稣听见了，就上船从那里独自退到野地里去。众人听见，就从各城里步行跟随他。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>当约翰被斩的消息传到耶稣耳中的同时，众使徒也刚好回来了。耶稣哀悼逝世的约翰是与门徒一起退到旷野。祂向我们展现在哀伤和耗尽的时候如何领导。天父知道我们的需要，我们所遭遇的，祂都知道。祂应许为义受逼迫的，天国是他们的。当我们在哀伤和耗尽的时候，祂提醒我们要回到祂里面，唯有在祂里面，我们才能从新得力。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">在作者约翰的笔下，耶稣似乎穿梭在犹大地和加利利之间，在耶路撒冷毕士大池边的一幕收场之后不久，作者将镜头转向了加利利湖边的乡野之间。 逾越节近了！在这个民族情绪高涨的节期中，群众从四面八方涌来跟随耶稣，因为他们看到或听闻祂所行的神迹，漫山遍野的人潮形成了一幅壮观的场面（学者估计超过两万人），我们不清楚耶稣在那天传讲了什么信息，但是四本福音书都没有遗漏这一个奇特的神迹，耶稣用五个饼和两条鱼喂饱了成千上万的群众，并且将吃剩的饼和鱼装满了十二个篮子。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音6:1-14》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音6:1-14</button><div class="collapsed" id ="Text0">

<p><sup>1</sup> 这事以后，耶稣渡过加利利海，就是提比哩亚海。<sup>2</sup>有许多人因为看见他在病人身上所行的神迹，就跟随他。<sup>3</sup>耶稣上了山，和门徒一同坐在那里。<sup>4</sup>那时犹太人的逾越节近了。<sup>5</sup>耶稣举目看见许多人来，就对腓力说：&ldquo;我们从哪里买饼叫这些人吃呢？&rdquo;<sup>6</sup>他说这话是要试验腓力，他自己原知道要怎样行。<sup>7</sup>腓力回答说：&ldquo;就是二十两银子的饼，叫他们各人吃一点，也是不够的。&rdquo;<sup>8</sup>有一个门徒，就是西门彼得的兄弟安得烈，对耶稣说：<sup>9</sup>&ldquo;在这里有一个孩童，带着五个大麦饼、两条鱼，只是分给这许多人 ，还算什么呢？&rdquo;</p>

<p><sup>10</sup>耶稣说：&ldquo;你们叫众人坐下。&rdquo;原来那地方的草多，众人就坐下，数目约有五千。<sup>11</sup>耶稣拿起饼来，祝谢了，就分给那坐着的人，分鱼也是这样，都随着他们所要的。<sup>12</sup>他们吃饱了，耶稣对门徒说：&ldquo;把剩下的零碎收拾起来，免得有糟蹋的。&rdquo;<sup>13</sup>他们便将那五个大麦饼的零碎，就是众人吃了剩下的，收拾起来，装满了十二个篮子。<sup>14</sup>众人看见耶稣所行的神迹，就说：&ldquo;这真是那要到世间来的先知。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/236.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音6:1-14&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p>+ 逾越节</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>&nbsp;约翰福音一共三次提及逾越节（<span class="popup-link" @click = "popUp('pop2')"> 约翰福音2:13</span>，</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">13&nbsp;</sup>犹太人的逾越节近了，耶稣就上耶路撒冷去。</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop3')"> 约翰福音6:4</span>，

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>那时犹太人的逾越节近了。</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> 约翰福音11:55</span>起），

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">55&nbsp;</sup>犹太人的逾越节近了，有许多人从乡下上耶路撒冷去，要在节前洁净自己。</p>
<!-- end bible --></div>
犹太人在逾越节记念并庆祝祖先逃离埃及为奴之地，在这个庆典中，每家必须宰杀一头羔羊。前后两次提及逾越节的上下文都和耶稣的死有关，隐喻耶稣是逾越节的羔羊，本章提及逾越节则是为生命之粮的讲论先行铺路。（引自：http://ocochome.info）

<p>&nbsp;</p>

</div>

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
<div id="Summary1" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="up">耶稣在寻找地方和领袖一同歇息，但是天父却有不同的计划。他们即将靠岸时，许多曾经看过祂行神迹的人都聚集在那里。他们如同羊没有牧人一般，耶稣就动了慈心，开始教导这五千人和妇人小孩。耶稣借机教导领袖，要他们供给食物给群众，看见倍增和上帝的供应。他们学到：举目观看众人的需要；心能被打动，去怜悯众人 ；收集身边的资源。有人愿意奉献所有，就能看见倍增的发生。好好规划组织，等待神迹发生；在信心中将一切交给上帝并献上感谢。</p>

<ul>
	<li class="nobreak-final-final">(进深学习：<span class="popup-link" @click = "popUp('pop5')"> 路加福音9:12-17</span>；

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">12&nbsp;</sup>日头快要平西，十二个门徒来对他说：&ldquo;请叫众人散开，他们好往四面乡村里去借宿找吃的，因为我们这里是野地。&rdquo;<sup class="versenum">13&nbsp;</sup>耶稣说：&ldquo;你们给他们吃吧！&rdquo;门徒说：&ldquo;我们不过有五个饼、两条鱼，若不去为这许多人买食物就不够。&rdquo;<sup class="versenum">14&nbsp;</sup>那时人数约有五千。耶稣对门徒说：&ldquo;叫他们一排一排地坐下，每排大约五十个人。&rdquo;<sup class="versenum">15&nbsp;</sup>门徒就如此行，叫众人都坐下。<sup class="versenum">16&nbsp;</sup>耶稣拿着这五个饼、两条鱼，望着天祝福，掰开，递给门徒，摆在众人面前。<sup class="versenum">17&nbsp;</sup>他们就吃，并且都吃饱了。把剩下的零碎收拾起来，装满了十二篮子。</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop6')"> 马太福音14:15-21</span>；

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">15&nbsp;</sup>天将晚的时候，门徒进前来，说：&ldquo;这是野地，时候已经过了，请叫众人散开，他们好往村子里去自己买吃的。&rdquo;<sup class="versenum">16&nbsp;</sup>耶稣说：&ldquo;不用他们去，你们给他们吃吧！&rdquo;<sup class="versenum">17&nbsp;</sup>门徒说：&ldquo;我们这里只有五个饼、两条鱼。&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣说：&ldquo;拿过来给我。&rdquo;<sup class="versenum">19&nbsp;</sup>于是吩咐众人坐在草地上，就拿着这五个饼、两条鱼，望着天祝福，掰开饼递给门徒，门徒又递给众人。<sup class="versenum">20&nbsp;</sup>他们都吃，并且吃饱了。把剩下的零碎收拾起来，装满了十二个篮子。<sup class="versenum">21&nbsp;</sup>吃的人，除了妇女孩子，约有五千。</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop7')"> 马可福音6:35-44</span>）

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">35&nbsp;</sup>天已经晚了，门徒进前来说：&ldquo;这是野地，天已经晚了，<sup class="versenum">36&nbsp;</sup>请叫众人散开，他们好往四面乡村里去自己买什么吃。&rdquo;</p>

<p><sup class="versenum">37&nbsp;</sup>耶稣回答说：&ldquo;你们给他们吃吧！&rdquo;门徒说：&ldquo;我们可以去买二十两银子的饼给他们吃吗？&rdquo;<sup class="versenum">38&nbsp;</sup>耶稣说：&ldquo;你们有多少饼，可以去看看。&rdquo;他们知道了，就说：&ldquo;五个饼，两条鱼。&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣吩咐他们，叫众人一帮一帮地坐在青草地上。<sup class="versenum">40&nbsp;</sup>众人就一排一排地坐下，有一百一排的，有五十一排的。<sup class="versenum">41&nbsp;</sup>耶稣拿着这五个饼、两条鱼，望着天祝福，掰开饼，递给门徒，摆在众人面前，也把那两条鱼分给众人。<sup class="versenum">42&nbsp;</sup>他们都吃，并且吃饱了。<sup class="versenum">43&nbsp;</sup>门徒就把碎饼碎鱼收拾起来，装满了十二个篮子。<sup class="versenum">44&nbsp;</sup>吃饼的男人共有五千。</p>
<!-- end bible --></div>

</li>
</ul>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="forward">约6:14</p>

<p class="forward bible">众人看见耶稣所行的神迹，就说：&ldquo;这真是那要到世间来的先知。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">&ldquo;五饼二鱼&rdquo;的神迹对你的意义是什么？它让你对耶稣有什么新的认识吗？为什么？</li>
	<li class="forward">你的生活中有没有经历过上帝丰富供应你的需要、而超过你所求所想？这事对你日后的生活有什么帮助吗？</li>
	<li class="forward">在你的周围，也有&ldquo;没有牧人的羊&rdquo;吗？如果耶稣也对你说：&ldquo;你给他们吃吧&rdquo;，你会做什么？</li>
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
	<li class="forward">最近你或你的家人是否在生活中，面对经济危机的问题？你可以凭信心将你的需要带到主的面前，求主让你或他们经历&ldquo;五饼二鱼&rdquo;的神迹，甚至有余的可以分享给其他身边有需要的人。</li>
	<li class="forward">在《福音行动表》中选出2-3位，在本周使用&ldquo;奇妙的问题&rdquo;主动关心和满足他们的需要。教会中若有需要帮助的弟兄姐妹，你也主动关心并以行动帮助他们。</li>
	<li class="forward">为你的家人、亲友、同事、同学和邻舍祷告，求神感动他们的心，开他们的心眼，主动渴慕寻求这厚赐百物又不斥责人的神，并询问你有关主耶稣的救恩。</li>
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

<p>亲爱的天父，祢是信实的主。祢应许凡信靠耶稣基督的人都有永生，并在祢里面可以享受祢所赐丰盛的生命。天父啊，求祢供应我们每日的需要，也正如诗人的祷告：&ldquo;使我也不贫穷也不富足，赐给我需用的饮食。恐怕我饱足不认你，说：&ldquo;耶和华是谁呢？&rsquo;又恐怕我贫穷就偷窃，以致亵渎我　神的名。&rdquo;天父啊，让我坚定依靠你，以祢为我们生命最大的喜乐和满足；求祢使用我手中所有的，可以成为多人的祝福和喜乐，奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->