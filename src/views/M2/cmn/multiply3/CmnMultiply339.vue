<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
                        <div class="chapter_number ltr"><h1>39.</h1></div>
                        <div class="chapter_title ltr"><h1>见证福音——福音改变文化（以弗所）</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒19:10</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>这样有两年之久，叫一切住在亚细亚的，无论是犹太人是希腊人，都听见主的道。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">保罗留在以弗所的两年三个月期间，&ldquo;有宽大又有功效的门为我开了，并且反对的人也多&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 林前16:9</span>）。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>因为有宽大又有功效的门为我开了，并且反对的人也多。</p>
	<!-- end bible --></div>
	他用以弗所这商业城市为根据地，将福音向亚细亚地区传开了，亚细亚七个教会（<span class="popup-link" @click = "popUp('pop3')"> 启1:4</span>,

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup><u class="person underline">约翰</u>写信给亚细亚的七个教会。但愿从那昔在、今在、以后永在的神和他宝座前的七灵，</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 启1:11</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">11&nbsp;</sup>&ldquo;你所看见的当写在书上，达于以弗所、士每拿、别迦摩、推雅推喇、撒狄、非拉铁非、老底嘉那七个教会。&rdquo;</p>
	<!-- end bible --></div>
	很可能都是在这期间建立的（<span class="popup-link" @click = "popUp('pop5')"> 林前16:19</span>）。

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>亚细亚的众教会问你们安。<u class="person underline">亚居拉</u>和<u class="person underline">百基拉</u>并在他们家里的教会，因主多多地问你们安。</p>
	<!-- end bible --></div>
	圣灵原来&ldquo;禁止他们在亚细亚讲道&rdquo;（<span class="popup-link" @click = "popUp('pop6')"> 徒16:6</span>），

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>圣灵既然禁止他们在亚细亚讲道，他们就经过弗吕家、加拉太一带地方。</p>
	<!-- end bible --></div>
	现在却&ldquo;叫一切住在亚细亚的&rdquo;的犹太人和希腊人&ldquo;都听见主的道&rdquo;（<span class="popup-link" @click = "popUp('pop7')"> 徒19:10</span>），

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">10&nbsp;</sup>这样有两年之久，叫一切住在亚细亚的，无论是犹太人是希腊人，都听见主的道。</p>
	<!-- end bible --></div>
	可见传福音不必因为暂时的关门而心急，凡是出于神的工作，都应该按着神自己的时间来进行。</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">保罗第三次宣教旅程大部分的时间都停留在以弗所，当保罗初到以弗所的时候就遇到了十二个施洗约翰的门徒，他们对圣灵毫无认识，在保罗的帮助下，这一小群门徒奉耶稣的名受洗，并立刻说起方言，印证了圣灵的赐下。保罗先在以弗所的犹太人会堂放胆传讲福音，历时3个月之久，后因犹太人的毁谤而转移阵地，借用推喇奴的讲堂作为布道所，如此约有2年之久，福音在这段期间传遍了整个亚西亚地区。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒19:11-22》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒19:11-22</button><div class="collapsed" id ="Text0">

<p><sup>11</sup>神藉保罗的手行了些非常的奇事，<sup>12</sup>甚至有人从保罗身上拿手巾或围裙放在病人身上，病就退了，恶鬼也出去了。<sup>13</sup>那时，有几个游行各处、念咒赶鬼的犹太人，向那被恶鬼附的人擅自称主耶稣的名，说：&ldquo;我奉保罗所传的耶稣，敕令你们出来！&rdquo;<sup>14</sup>做这事的，有犹太祭司长士基瓦 的七个儿子。<sup>15</sup>恶鬼回答他们说：&ldquo;耶稣我认识，保罗我也知道。你们却是谁呢？&rdquo;<sup>16</sup>恶鬼所附的人就跳在他们身上，胜了其中二人，制伏他们，叫他们赤着身子受了伤，从那房子里逃出去了。</p>

<p><sup>17</sup>凡住在以弗所的，无论是犹太人，是希腊人，都知道这事，也都惧怕，主耶稣的名从此就尊大了。<sup>18</sup>那已经信的，多有人来承认诉说自己所行的事。<sup>19</sup>平素行邪术的，也有许多人把书拿来，堆积在众人面前焚烧。他们算计书价，便知道共合五万块钱。<sup>20</sup>主的道大大兴旺，而且得胜，就是这样。<sup>21</sup>这些事完了，保罗心里定意，经过了马其顿、亚该亚，就往耶路撒冷去；又说：&ldquo;我到了那里以后，也必须往罗马去看看。&rdquo;<sup>22</sup>于是从帮助他的人中，打发提摩太、以拉都二人往马其顿去，自己暂时等在亚西亚。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/339.mp4" type="button" class="external-movie">
         观看&nbsp;徒19:11-22&nbsp;</button>
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
	<li class="nobreak-final-final">以弗所这个城市到处是行邪术的人。主借着保罗医病赶鬼向人显示祂的权能胜过所有其他的能力，正如主之前在大使命中提到的（<span class="popup-link" @click = "popUp('pop8')"> 太28:18-20</span>）。

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>耶稣进前来，对他们说：&ldquo;天上地下所有的权柄都赐给我了。<sup class="versenum">19&nbsp;</sup>所以你们要去，使万民做我的门徒，奉父、子、圣灵的名给他们施洗，<sup class="versenum">20&nbsp;</sup>凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了。&rdquo;</p>
	<!-- end bible --></div>
	有几个游行各处，驱邪赶鬼的犹太人，在咒语中擅自使用耶稣的名，但是却未成功，因为他们没有透过与耶稣的个人关系而来的圣灵恩赐。我们从这个故事中学到，邪灵认识耶稣和祂的仆人。这个事件促使初信的以弗所信徒悔改与复兴，因为他们还未完全离弃过去生活的邪恶事。由于保罗已经培育了其他新领袖，所以他可以差派提摩太、以拉都去加强训练马其顿的信徒。保罗则继续透过写信的方式，远距离教练和指导哥林多教会。</li>
	<li class="nobreak-final-final">本故事的结束是《使徒行传》中第五个总结：主的道大大兴旺，而且得胜（<span class="popup-link" @click = "popUp('pop9')"> 徒19:20</span>）。
	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>主的道大大兴旺，而且得胜，就是这样。</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒19:20</p>

<p class="forward bible">主的道大大兴旺，而且得胜，就是这样。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">&ldquo;奉主耶稣的名&rdquo;并不是一句咒语，而是指为主而做、照着主的心意而做。这几位犹太驱魔师（<span class="popup-link" @click = "popUp('pop10')"> 路11:19</span>）

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>我若靠着<u class="person underline">别西卜</u>赶鬼，你们的子弟赶鬼又靠着谁呢？这样，他们就要断定你们的是非。</p>
	<!-- end bible --></div>
	为了牟利而赶鬼，把 &ldquo;奉主耶稣的名&rdquo;当作一句咒语，今天是否许多人的祷告和他们一样呢？为什么？犹太祭司长士基瓦的七个儿子给我们什么提醒或借鉴吗？</li>
	<li class="forward">以弗所的信徒不但认罪，而且肯付代价对付罪，单单为了讨主欢喜，这才是真正的悔改。今天我们的悔改，在那些事情上表现出来呢？</li>
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
	<li class="forward">以弗所由保罗带领信主的人，&ldquo;多有人来&rdquo;公开认罪悔改。初信的基督徒中不乏&ldquo;平素行邪术的&rdquo;，就此认识到他们的异教邪术是无用且罪恶的。于是，他们把一向依附的邪术书籍，符咒秘方，一律清除公开烧掉。虽然他们可以把这 些书籍卖不少钱，但他们仍选择把这些书公开烧掉，显明彻底决裂。又影响了更多人来归向主。
	<ul class="forward">
		<li class="forward">在你（或你的门徒）信仰生活上，有什么东西、习惯或观念是主所不喜悦，而你（或他们）却一直不愿丢弃、改变或认罪悔改的吗？求圣灵帮助你们的悔改是彻底的悔改，在家庭和生活中表现出来，凡事讨神的喜悦。</li>
		<li class="forward">教会还有什么得罪神或不讨神喜悦的地方，需要主的道来炼净？求神帮助弟兄姐妹的悔改是真实且彻底的悔改，向神诚实无伪，在基督里得自由。</li>
		<li class="forward">为这个城市举起圣洁的手祷告，求主耶稣的光照进一切黑暗的角落，人心的邪恶与罪孽，圣灵亲自在他们心中做责备的工作，主得着这地，为祂所用。</li>
	</ul>
	</li>
	<li class="forward">你可以邀请谁到教会或小组听福音？在福音行动表写下他们的名字，并为他们祷告，求神也使用你主动的关怀，满足他们的需要。</li>
	<li class="forward">本周把《哥林多前书》阅读一遍，将心得写下，下周小组分享。下图书卷图表仅供参考。</li>
</ul>

<p class="forward">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image7.png" 
    zoom="/images/zoom/sites/mc2/content/M2/cmn/images/custom/image7.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image7.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

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

<ul class="forward">
	<li class="forward">愿人都尊主的名为圣，愿神的国降临，愿神的旨意行在地上，如同行在天上。求主打发更多工人收割祂的庄稼，并拓展我们的疆界，在每1000人中就有1个&ldquo;徒2群体&rdquo;或教会。</li>
	<li class="forward">我们争战的兵器不是属血气的，乃是靠神的大能攻破坚固的营垒，把各样的计谋，各样拦阻人认识神的那些自高之事，一概攻破；又将人所有的心意夺回，都顺服主耶稣基督。让我们祷告神，靠祂攻破撒但坚固的营垒和计谋；祈求圣灵拆毁撒但在人心中坚固的营垒，将人心夺回归顺基督。</li>
	<li class="forward">为天父赐我们一切所需的并且有余来感恩。也求天父帮助我们的奉献和摆上是甘心乐意且是诚实无伪的，并在神的事上尽自己的一份力量，主赐我们够用的信心、勇气和爱邻舍如己的爱心。</li>
	<li class="forward">求主帮助我们乐意施舍，将钱财合理的运用，看到各地福音与宣教的需要；帮助我们将财宝积攒在天上，而不被地上的财宝所吸引，因为知道我们在地上只是客旅和寄居的，有一天我们都要来到主的面前交账，得祂得奖赏和称赞。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位作结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->