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
                        <div class="chapter_number ltr"><h1>11.</h1></div>
                        <div class="chapter_title ltr"><h1>宗教领袖夜询</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约2:17</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>他的门徒就想起经上记着说：&ldquo;我为你的殿心里焦急，如同火烧。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p style="text-align:justify"><span><span><span lang="ZH-CN">耶稣呼召每个人来跟随祂，并且得人如得鱼。失丧的人需要来跟随耶稣，得救的人需要学习得着那些失丧的人。当你把世人看成两种人，你每天与人的互动就简单多了。遇见失丧的人，你就向他们作见证；遇见得救的人，为他们提供培训，训练他们成为倍增门徒。没有什么比这更简单的了！</span></span></span></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">尼哥德慕是法利赛人，以色列人尊敬的老师，因看见耶稣行了许多的神迹（<span class="popup-link" @click = "popUp('pop2')"> 约2:23-25</span>）
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>当耶稣在耶路撒冷过逾越节的时候，有许多人看见他所行的神迹，就信了他的名。<sup class="versenum">24&nbsp;</sup>耶稣却不将自己交托他们，因为他知道万人，<sup class="versenum">25&nbsp;</sup>也用不着谁见证人怎样，因他知道人心里所存的。</p>
	<!-- end bible --></div>
	而夜访耶稣。当他出现在耶稣面前的时候，耶稣知道他心中在想什么， &ldquo;因为祂自己认识人的内心&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 约2:21</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>但耶稣这话是以他的身体为殿。</p>
	<!-- end bible --></div>
	在耶稣和尼哥德慕的对话中，耶稣为尼哥德慕阐释了重生的真义，只有来自天上领域的耶稣才有权柄见证这件事，因为重生是来自天上领域的新生命，需要神的灵的介入，人的天性才能得到完全的更新。</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音3:1-21》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音3:1-21</button><div class="collapsed" id ="Text0">

<p><sup>1</sup> 有一个法利赛人，名叫尼哥德慕，是犹太人的官。<sup>2</sup>这人夜里来见耶稣，说：&ldquo;拉比，我们知道你是由　神那里来作师傅的，因为你所行的神迹，若没有　神同在，无人能行。&rdquo;<sup>3</sup>耶稣回答说：&ldquo;我实实在在地告诉你：人若不重生，就不能见　神的国。&rdquo;<sup>4</sup>尼哥德慕说：&ldquo;人已经老了，如何能重生呢？岂能再进母腹生出来吗？&rdquo;<sup>5</sup> 耶稣说：&ldquo;我实实在在地告诉你：人若不是从水和圣灵生的，就不能进　神的国。<sup>6</sup>从肉身生的，就是肉身；从灵生的，就是灵。<sup>7</sup>我说&lsquo;你们必须重生&rsquo;，你不要以为希奇。<sup>8</sup>风随着意思吹，你听见风的响声，却不晓得从哪里来，往哪里去；凡从圣灵生的，也是如此。&rdquo;<sup>9</sup>尼哥德慕问他说：&ldquo;怎能有这事呢？&rdquo;<sup>10</sup>耶稣回答说：&ldquo;你是以色列人的先生，还不明白这事吗？<sup>11</sup>我实实在在地告诉你：我们所说的，是我们知道的；我们所见证的，是我们见过的；你们却不领受我们的见证。<sup>12</sup>我对你们说地上的事，你们尚且不信；若说天上的事，如何能信呢？<sup>13</sup>除了从天降下仍旧在天的人子，没有人升过天。<sup>14</sup>摩西在旷野怎样举蛇，人子也必照样被举起来，<sup>15</sup>叫一切信他的都得永生（注：或作&ldquo;叫一切信的人在他里面得永生&rdquo;）。</p>

<p><sup>16</sup>神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。<sup>17</sup>因为　神差他的儿子降世，不是要定世人的罪（注：或作&ldquo;审判世人 &rdquo;。下同），乃是要叫世人因他得救。<sup>18</sup>信他的人，不被定罪；不信的人，罪已经定了，因为他不信　神独生子的名。<sup>19</sup>光来到世间，世人因自己的行为是恶的，不爱光倒爱黑暗，定他们的罪就是在此。<sup>20</sup>凡作恶的便恨光，并不来就光，恐怕他的行为受责备；<sup>21</sup>但行真理的必来就光，要显明他所行的是靠　神而行。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/211.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音3:1-21&nbsp;</button>
    <div class="collapsed"></div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><p>+ &ldquo;重生&rdquo;</p></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>&ldquo;重生&rdquo;的&ldquo;重&rdquo;希腊文可译作&ldquo;从上&rdquo;或&ldquo;重复&rdquo;，从上下文判断，此处显然是&ldquo;从上&rdquo;的意思。&nbsp;</p>

<ul>
	<li class="nobreak-final-final">第五节&ldquo;从水和灵生的&rdquo;和 第三节&ldquo;重生&rdquo;是一个平行结构，指的是同一件事情，即属灵的生， 亦即&ldquo;从上帝生的&rdquo;。&ldquo;水&rdquo;和&ldquo;灵&rdquo;在原文中由同一个介系词所支配，最自然的解法是将这个词语视为一个完整的观念，重生只有一个来源，就是水&mdash;灵。&ldquo;水&rdquo;在旧约背景中有洁净和更新的象征意义，灵是描述内心的改变（参<span class="popup-link" @click = "popUp('pop6')"> 结36:25-27</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>我必用清水洒在你们身上，你们就洁净了。我要洁净你们，使你们脱离一切的污秽，弃掉一切的偶像。</p>

	<p><sup class="versenum">26&nbsp;</sup>&lsquo;我也要赐给你们一个新心，将新灵放在你们里面，又从你们的肉体中除掉石心，赐给你们肉心。<sup class="versenum">27&nbsp;</sup>我必将我的灵放在你们里面，使你们顺从我的律例，谨守遵行我的典章。</p>
	<!-- end bible --></div>
	从水和灵生的意思是指新的出生，使人得着洁净与更新，就是旧约先知所应许，将要在末日临到的洁净与更新，这样的重生必须借着上帝在耶稣基督里的工作而实现。（引自http://ocochome.info/wp-content/uploads/2016/10/John-04-YihsinCTing.pdf）</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ &ldquo;永生&rdquo;</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">&ldquo;永生&rdquo;是复活的生命，可以持续到永远，它也是指在耶稣里丰盛的生命（<span class="popup-link" @click = "popUp('pop5')"> 约10:10</span>），

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>盗贼来，无非要偷窃、杀害、毁坏；我来了，是要叫羊得生命，并且得的更丰盛。</p>
	<!-- end bible --></div>
	我们在信主之时即可经历到它的美善，将来身体复活时它的完美和丰盛将完全实现，因此，信徒在信主时即已进入&ldquo;永生&rdquo;。&ldquo;永生&rdquo;与&ldquo;进上帝的国&rdquo;是同义。（引自同上）</li>
</ul>

</div>

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
<div id="Summary2" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">耶稣将兑换银钱的人赶出圣殿，引起众人注意。有一位地位极高的宗教领袖，名叫尼哥德慕，夜里来询问耶稣。耶稣叫他不要看自己以及那些看似不可能的事，要他打开信心的眼睛。耶稣也告诉尼哥德慕他认为不可能的事已经变成可能。只要住在基督的光里，就不用害怕。人看不见风，却可以看见风带来的影响。同样地，我们可以从圣灵而生的人身上看到圣灵的工作。上帝爱我们，让我们能够重生，在祂里面拥有新生命。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p class="forward">约3:17-18</p>

<p class="forward bible"><sup>17</sup>因为　神差他的儿子降世，不是要定世人的罪（注：或作&ldquo;审判世人 &rdquo;。下同），乃是要叫世人因他得救。<sup>18</sup>信他的人，不被定罪；不信的人，罪已经定了，因为他不信　神独生子的名。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你是否正在或曾在人生的暗夜中寻找方向？尼哥德慕的难关是受到传统的蒙蔽，你的障碍是什么？你重生 了吗？你如何确定？</li>
	<li class="flush"><span lang="ZH-CN"><span>你一向所认识的&ldquo;永生&rdquo;</span></span><span lang="ZH-CN"><span>是什么？这段经文是否帮助你对永生有新的认识？</span></span></li>
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
	<li class="forward">在《福音行动表》中选出2-3位，在本周使用&ldquo;奇妙的问题&rdquo;与他们分享自己的故事和你信耶稣得永生的好消息。</li>
	<li class="forward">在《信徒动员表》中选出1-2位这周与他分享《被圣灵充满》小册子。</li>
	<li class="forward">为你的家人、亲友、同事、同学和邻舍祷告，求神感动他们的心，开他们的心眼，有主动渴慕寻求真理的心，并询问你有关主耶稣的救恩。</li>
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

<p>亲爱的天父，祢是信实的主，在万世以前应许拯救我们。我们要感谢祢，耶稣基督是唯一的救主，是神与人中间唯一的中保。天父啊，祢应许凡信靠耶稣基督的人都有永生，如今我们就可以享受祢所赐丰盛的生命，并在主里面有十分的保障。感谢祢，赐下圣灵作我们的保惠师，指引我们明白一切的真理，并赐我们能力为祢作见证。我们愿意抓紧时机，依靠圣灵多作见证，传扬福音。奉主耶稣的圣名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->