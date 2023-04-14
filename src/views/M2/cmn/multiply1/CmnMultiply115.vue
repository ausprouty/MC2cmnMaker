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
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>有计划地奉献</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <p class="purpose">本课目的是说明奉献的重要与态度、如何收取与管理奉献，并奉献的赐福。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2back.png" />
<div class="lesson-subtitle"><span class="back">向后看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ 敬拜赞美</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="back">希伯来书4:14-16</p>

<p class="back bible"><sup>14</sup>我们既然有一位已经升入高天尊荣的大祭司，就是神的儿子耶稣，便当持定所承认的道。<sup>15</sup>因我们的大祭司并非不能体恤我们的软弱，他也曾凡事受过试探，与我们一样，只是他没有犯罪。<sup>16</sup>所以我们只管坦然无惧地来到施恩的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。&rdquo;</p>

</div>

<ul class="back">
	<li class="back">让我们诵读经文两遍，用信心宣告关于主耶稣的真理，并为主耶稣成就的一切向神感恩和赞美！</li>
</ul>

<h2 class="back">祷告关怀</h2>

<ul class="back">
	<li class="back">分享一件你要感谢神和需要耶稣为你做的事，并彼此感恩代祷。</li>
</ul>

<h2 class="back">庆贺实践</h2>

<ul class="back">
	<li class="back">请分享上周你因信靠神而实践&ldquo;届时我会&rdquo;的福音行动。</li>
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 林前11:26</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">26&nbsp;</sup>你们每逢吃这饼、喝这杯，是表明主的死，直等到他来。</p>
	<!-- end bible --></div>
	</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 天父心意</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">有一天，耶稣差遣祂的门徒去附近的村落服事人。当他们回来时，都非常高兴上帝透过他们成就许多事：&ldquo;主啊！因你的名，就是鬼也服了我们！&rdquo;耶稣与他们一同欢喜，并对他们说：&ldquo;然而，不要因鬼服了你们而欢喜，要因你们的名记录在天上欢喜。&rdquo; 耶稣提醒：我们欢喜并非因为工作有成效，乃是因为真正认识主。（<span class="popup-link" @click = "popUp('pop2')"> 路10:17-24</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>七十人回来</h3>

	<p><sup class="versenum">17&nbsp;</sup>那七十个人欢欢喜喜地回来，说：&ldquo;主啊，因你的名，就是鬼也服了我们！&rdquo;<sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;我曾看见<u class="person underline">撒旦</u>从天上坠落，像闪电一样。<sup class="versenum">19&nbsp;</sup>我已经给你们权柄可以践踏蛇和蝎子，又胜过仇敌一切的能力，断没有什么能害你们。<sup class="versenum">20&nbsp;</sup>然而，不要因鬼服了你们就欢喜，要因你们的名记录在天上欢喜。&rdquo;</p>

	<p><sup class="versenum">21&nbsp;</sup>正当那时，耶稣被圣灵感动就欢乐，说：&ldquo;父啊，天地的主，我感谢你！因为你将这些事向聪明通达人就藏起来，向婴孩就显出来。父啊，是的，因为你的美意本是如此。<sup class="versenum">22&nbsp;</sup>一切所有的，都是我父交付我的。除了父，没有人知道子是谁；除了子和子所愿意指示的，没有人知道父是谁。&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣转身暗暗地对门徒说：&ldquo;看见你们所看见的，那眼睛就有福了！<sup class="versenum">24&nbsp;</sup>我告诉你们：从前有许多先知和君王要看你们所看的，却没有看见；要听你们所听的，却没有听见。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">被主呼召</h2>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><ul>
	<li class="up"><strong>+ 故事背景</strong></li>
</ul></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p class="up">初代教会的信徒彼此委身，稳定聚会，领人归主。受到逼迫后，他们向主求胆量，主就帮助他们放胆传讲福音。这个关于耶路撒冷信徒的故事，显示他们彼此的委身。</p>

</div>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《使徒行传4:32-5:11》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 使徒行传4:32-5:11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<div>
<div>
<div>
<div>
<p><sup class="versenum">32&nbsp;</sup>那许多信的人都是一心一意的，没有一人说他的东西有一样是自己的，都是大家公用。<sup class="versenum">33&nbsp;</sup>使徒大有能力，见证主耶稣复活，众人也都蒙大恩。<sup class="versenum">34&nbsp;</sup>内中也没有一个缺乏的，因为人人将田产房屋都卖了，把所卖的价银拿来，<sup class="versenum">35&nbsp;</sup>放在使徒脚前，照各人所需用的分给各人。</p>

<p><sup class="versenum">36&nbsp;</sup>有一个利未人，生在塞浦路斯，名叫<u class="person underline">约瑟</u>，使徒称他为<u class="person underline">巴拿巴</u>（&ldquo;<u class="person underline">巴拿巴</u>&rdquo;翻出来就是&ldquo;劝慰子&rdquo;）。<sup class="versenum">37&nbsp;</sup>他有田地，也卖了，把价银拿来放在使徒脚前。</p>

<p><sup class="versenum">1 </sup>有一个人名叫<u class="person underline">亚拿尼亚</u>，同他的妻子<u class="person underline">撒非喇</u>卖了田产，<sup class="versenum">2&nbsp;</sup>把价银私自留下几份，他的妻子也知道，其余的几份拿来放在使徒脚前。<sup class="versenum">3&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;<u class="person underline">亚拿尼亚</u>，为什么<u class="person underline">撒旦</u>充满了你的心，叫你欺哄圣灵，把田地的价银私自留下几份呢？<sup class="versenum">4&nbsp;</sup>田地还没有卖，不是你自己的吗？既卖了，价银不是你做主吗？你怎么心里起这意念呢？你不是欺哄人，是欺哄神了！&rdquo;<sup class="versenum">5&nbsp;</sup><u class="person underline">亚拿尼亚</u>听见这话，就仆倒，断了气。听见的人都甚惧怕。<sup class="versenum">6&nbsp;</sup>有些少年人起来，把他包裹，抬出去埋葬了。</p>

<p><sup class="versenum">7&nbsp;</sup>约过了三小时，他的妻子进来，还不知道这事。<sup class="versenum">8&nbsp;</sup><u class="person underline">彼得</u>对她说：&ldquo;你告诉我，你们卖田地的价银就是这些吗？&rdquo;她说：&ldquo;就是这些。&rdquo;<sup class="versenum">9&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你们为什么同心试探主的灵呢？埋葬你丈夫之人的脚已到门口，他们也要把你抬出去。&rdquo;<sup class="versenum">10&nbsp;</sup>妇人立刻仆倒在<u class="person underline">彼得</u>脚前，断了气。那些少年人进来，见她已经死了，就抬出去，埋在她丈夫旁边。<sup class="versenum">11&nbsp;</sup>全教会和听见这事的人都甚惧怕。</p>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- end bible -->

<p></p>

</div>

<button id="MC2/cmn/video/multiply1/115.mp4" type="button" class="external-movie">
         观看使徒行传4:32-5:11</button>
    <div class="collapsed"></div>




<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">经文中让你印象最深刻的是什么？为什么？</li>
		<li class="up">从这段经文中你对主耶稣和圣灵有什么新的认识？</li>
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
	<li class="nobreak-final-final">初代教会的信徒藉着奉献的方式，照顾彼此的需要。从今天的故事中，我们学习奉献要捐得乐意，而不是出于勉强（<span class="popup-link" @click = "popUp('pop3')"> 哥林多后书9:7</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> 使徒行传11:27-29</span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>当那些日子，有几位先知从耶路撒冷下到安提阿。<sup class="versenum">28&nbsp;</sup>内中有一位名叫<u class="person underline">亚迦布</u>，站起来，借着圣灵指明天下将有大饥荒；这事到<u class="person underline">克劳迪</u>年间果然有了。<sup class="versenum">29&nbsp;</sup>于是门徒定意照各人的力量捐钱，送去供给住在犹太的弟兄。</p>
	<!-- end bible --></div>
	显示，初代教会也可以捐赠给其他教会的信徒，把奉献使用在自己教会以外的需要。<span class="popup-link" @click = "popUp('pop5')"> 路加福音8:1-3</span>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>过了不多日，耶稣周游各城各乡传道，宣讲神国的福音。和他同去的有十二个门徒，<sup class="versenum">2&nbsp;</sup>还有被恶鬼所附、被疾病所累已经治好的几个妇女，内中有称为抹大拉的<u class="person underline">马利亚</u>，曾有七个鬼从她身上赶出来，<sup class="versenum">3&nbsp;</sup>又有<u class="person underline">希律</u>的家宰<u class="person underline">苦撒</u>的妻子<u class="person underline">约亚拿</u>，并<u class="person underline">苏撒拿</u>和好些别的妇女，都是用自己的财物供给耶稣和门徒。</p>
	<!-- end bible --></div>
	告诉我们，大家的奉献可以使神国的福音在别处被传开。另外，在哥<span class="popup-link" @click = "popUp('pop6')"> 林多前书16:2</span>，

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>每逢七日的第一日，各人要照自己的进项抽出来留着，免得我来的时候现凑。</p>
	<!-- end bible --></div>
	保罗勉励众人每周奉献，并将奉献使用在这些用途上。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="forward">哥林多后书9:7</p>

<p class="forward bible">各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ 福音预备</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<ul class="forward">
	<li class="forward"><strong>认识十一奉献</strong></li>
</ul>

<p class="indent2">&ldquo;地上所有的，无论是地上的种子是树上的果子，十分之一是耶和华的，是归给耶和华为圣的。&rdquo; （利27:30）</p>

<p class="indent2">十一奉献就是十分之一，这是神在整本圣经中使用的字眼。在圣经里，神告诉我们要将赚到的头十分之一献回给神。十一奉献的起源是亚伯拉罕把所得十分之一献给撒冷城的麦基洗德。摩西律法将十一奉献制度化，以色列人以此献给耶和华神和支持利未支派的事奉工作。</p>

<ul class="forward">
	<li class="indent2"><strong>为何神要我奉献</strong></li>
</ul>

<ul class="forward">
	<li class="indent3">奉献是神所喜悦的，奉献使我们更像神（<span class="popup-link" @click = "popUp('pop7')"> 约3:16</span>）

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>&ldquo;神爱世人，甚至将他的独生子赐给他们，叫一切信他的不致灭亡，反得永生。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">表明我们敬畏神（<span class="popup-link" @click = "popUp('pop8')"> 太6:21</span>）、
	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>因为你的财宝在哪里，你的心也在哪里。</p>
	<!-- end bible --></div>
	爱神（<span class="popup-link" @click = "popUp('pop9')"> 太6:21</span>）

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>因为你的财宝在哪里，你的心也在哪里。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">将我们的心关注在永生上（<span class="popup-link" @click = "popUp('pop10')"> 提后6:18-19</span>）
	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>又要嘱咐他们行善，在好事上富足，甘心施舍，乐意供给人，<sup class="versenum">19&nbsp;</sup>为自己积成美好的根基，预备将来，叫他们持定那真正的生命。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">将荣耀归于神（<span class="popup-link" @click = "popUp('pop30')"> 箴3:5</span>
	<div class="popup invisible" id="pop30"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>你要专心仰赖耶和华，不可倚靠自己的聪明，</p>
	<!-- end bible --></div>
	、<span class="popup-link" @click = "popUp('pop31')"> 箴3:9</span>）

	<div class="popup invisible" id="pop31"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>你要以财物和一切初熟的土产尊荣耶和华，</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">也是神祝福我们的方式（<span class="popup-link" @click = "popUp('pop13')"> 箴言22:9</span>；
	<div class="popup invisible" id="pop13"><!-- begin bible -->
	<p><sup class="versenum">9&nbsp;</sup>眼目慈善的就必蒙福，因他将食物分给穷人。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop14')"> 诗112:5</span>）

	<div class="popup invisible" id="pop14"><!-- begin bible -->
	<div>
	<p><sup class="versenum">5&nbsp;</sup>施恩于人，借贷于人的，这人事情顺利，他被审判的时候，要诉明自己的冤。</p>
	</div>
	<!-- end bible --></div>
	</li>
	<li class="indent3">带给我们生命的滋润和喜乐（<span class="popup-link" @click = "popUp('pop15')"> 徒20:35</span>；
	<div class="popup invisible" id="pop15"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>我凡事给你们做榜样，叫你们知道应当这样劳苦扶助软弱的人，又当记念主耶稣的话说：&lsquo;施比受更为有福。&rsquo;&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop32')"> 箴11:25</span>）

	<div class="popup invisible" id="pop32"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>好施舍的必得丰裕，滋润人的必得滋润。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent2"><strong>为何要十一奉献</strong></li>
</ul>

<p class="indent3">十一奉献是一种分别为圣的奉献，意义包括：</p>

<ul class="forward">
	<li class="indent3">是神的命令（<span class="popup-link" @click = "popUp('pop17')"> 利27:30</span>）、

	<div class="popup invisible" id="pop17"><!-- begin bible -->
	<p><sup class="versenum">30&nbsp;</sup>&ldquo;地上所有的，无论是地上的种子是树上的果子，十分之一是耶和华的，是归给耶和华为圣的。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">得耶稣的称赞（<span class="popup-link" @click = "popUp('pop18')"> 可12:41-44</span>、
	<div class="popup invisible" id="pop18"><!-- begin bible -->
	<p><sup class="versenum">41&nbsp;</sup>耶稣对银库坐着，看众人怎样投钱入库。有好些财主往里投了若干的钱。<sup class="versenum">42&nbsp;</sup>有一个穷寡妇来，往里投了两个小钱，就是一个大钱。<sup class="versenum">43&nbsp;</sup>耶稣叫门徒来，说：&ldquo;我实在告诉你们：这穷寡妇投入库里的比众人所投的更多，<sup class="versenum">44&nbsp;</sup>因为他们都是自己有余，拿出来投在里头，但这寡妇是自己不足，把她一切养生的都投上了。&rdquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop19')"> 太23:23</span>）

	<div class="popup invisible" id="pop19"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>&ldquo;你们这假冒为善的文士和法利赛人有祸了！因为你们将薄荷、茴香、芹菜献上十分之一，那律法上更重的事，就是公义、怜悯、信实反倒不行了。这更重的是你们当行的，那也是不可不行的。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">表明神在我们生命中居首位（<span class="popup-link" @click = "popUp('pop20')"> 申14:23</span>）
	<div class="popup invisible" id="pop20"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>又要把你的五谷、新酒和油的十分之一，并牛群、羊群中头生的，吃在耶和华你神面前，就是他所选择要立为他名的居所。这样，你可以学习时常敬畏耶和华你的神。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">提醒我们所有都是神赐给我们的（<span class="popup-link" @click = "popUp('pop21')"> 申8:18</span>）
	<div class="popup invisible" id="pop21"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>你要记念耶和华你的神，因为得货财的力量是他给你的，为要坚定他向你列祖起誓所立的约，像今日一样。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">对神心存感激（<span class="popup-link" @click = "popUp('pop22')"> 诗116:12</span>、
	<div class="popup invisible" id="pop22"><!-- begin bible -->
	<div>
	<p><sup class="versenum">12&nbsp;</sup>我拿什么报答耶和华向我所赐的一切厚恩？</p>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop23')"> 申16:17</span>）

	<div class="popup invisible" id="pop23"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>各人要按自己的力量，照耶和华你神所赐的福分，奉献礼物。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">表明我们对神的爱（<span class="popup-link" @click = "popUp('pop24')"> 约14:15</span>；
	<div class="popup invisible" id="pop24"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>你们若爱我，就必遵守我的命令。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop25')"> 林后8:7-8</span>）

	<div class="popup invisible" id="pop25"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>你们既然在信心、口才、知识、热心和待我们的爱心上，都格外显出满足来，就当在这慈惠的事上也格外显出满足来。<sup class="versenum">8&nbsp;</sup>我说这话，不是吩咐你们，乃是借着别人的热心试验你们爱心的实在。</p>
	<!-- end bible --></div>
	</li>
	<li class="indent3">使我们去经历神的真实和祝福（<span class="popup-link" @click = "popUp('pop33')"> 玛3:8-10</span>）
	<div class="popup invisible" id="pop33"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>&ldquo;人岂可夺取神之物呢？你们竟夺取我的供物。你们却说：&lsquo;我们在何事上夺取你的供物呢？&rsquo;就是你们在当纳的十分之一和当献的供物上。<sup class="versenum">9&nbsp;</sup>因你们通国的人都夺取我的供物，咒诅就临到你们身上。&rdquo;<sup class="versenum">10&nbsp;</sup>万军之耶和华说：&ldquo;你们要将当纳的十分之一全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户倾福于你们，甚至无处可容。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<ul class="forward">
	<li class="indent2"><strong>十一奉献的地点和数额</strong></li>
</ul>

<p class="indent3"> 地点：我们敬拜、团契的地方&mdash;&mdash;教会（<span class="popup-link" @click = "popUp('pop34')"> 玛3:10</span>）。</p>

<div class="popup invisible" id="pop34"><!-- begin bible -->
<p><sup class="versenum">10&nbsp;</sup>万军之耶和华说：&ldquo;你们要将当纳的十分之一全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户倾福于你们，甚至无处可容。&rdquo;</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<p class="indent3">神通过教会来牧养我们，我们也应当将奉献交到教会&mdash;&mdash;神的家。</p>

<p class="indent3">教会将十一奉献将用于：</p>

<ol>
	<li class="indent3">供应教会牧者、全时间同工的生活需要</li>
	<li class="indent3">行政开支：房租、水电、音乐器材及杂费等</li>
	<li class="indent3">教育与门训事工：主日学、小组团契、培训班等</li>
	<li class="indent3">布道和宣教事工</li>
	<li class="indent3">慈惠和怜悯事工</li>
</ol>

<p class="indent2">&nbsp; &nbsp; 数额</p>

<p class="indent2">教会采用了旧约中十分之一的依据，这是&ldquo;最低数额的&rdquo;奉献。基督徒应根据自己的能力奉献，&ldquo;照自己的进项&rdquo;，这意味着有时的奉献超出十分之一，有时少于十分之一；取决于基督徒的个人能力和教会的需要（<span class="popup-link" @click = "popUp('pop28')"> 林后9:7</span>）。</p>

<div class="popup invisible" id="pop28"><!-- begin bible -->
<p><sup class="versenum">7&nbsp;</sup>各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul class="forward">
	<li class="forward"><strong>十一奉献的态度：甘心乐意与慷慨</strong>（<span class="popup-link" @click = "popUp('pop35')"> 林后8:1-9:15</span>章）

	<div class="popup invisible" id="pop35">
	<h3>当效法马其顿教会乐捐</h3>

	<p>8&nbsp;弟兄们，我把神赐给马其顿众教会的恩告诉你们，&nbsp;<sup>2&nbsp;</sup>就是他们在患难中受大试炼的时候，仍有满足的快乐，在极穷之间还格外显出他们乐捐的厚恩。&nbsp;<sup>3&nbsp;</sup>我可以证明他们是按着力量，而且也过了力量，自己甘心乐意地捐助，&nbsp;<sup>4&nbsp;</sup>再三地求我们，准他们在这供给圣徒的恩情上有份。&nbsp;<sup>5&nbsp;</sup>并且他们所做的，不但照我们所想望的，更照神的旨意，先把自己献给主，又归附了我们。&nbsp;<sup>6&nbsp;</sup>因此我劝<u>提多</u>，既然在你们中间开办这慈惠的事，就当办成了。&nbsp;<sup>7&nbsp;</sup>你们既然在信心、口才、知识、热心和待我们的爱心上，都格外显出满足来，就当在这慈惠的事上也格外显出满足来。&nbsp;<sup>8&nbsp;</sup>我说这话，不是吩咐你们，乃是借着别人的热心试验你们爱心的实在。</p>

	<h3>当效基督舍富为贫</h3>

	<p><sup>9&nbsp;</sup>你们知道我们主耶稣基督的恩典：他本来富足，却为你们成了贫穷，叫你们因他的贫穷可以成为富足。&nbsp;<sup>10&nbsp;</sup>我在这事上把我的意见告诉你们，是于你们有益；因为你们下手办这事，而且起此心意已经有一年了，&nbsp;<sup>11&nbsp;</sup>如今就当办成这事。既有愿做的心，也当照你们所有的去办成。&nbsp;<sup>12&nbsp;</sup>因为人若有愿做的心，必蒙悦纳，乃是照他所有的，并不是照他所无的。&nbsp;<sup>13&nbsp;</sup>我原不是要别人轻省、你们受累，&nbsp;<sup>14&nbsp;</sup>乃要均平。就是要你们的富余现在可以补他们的不足，使他们的富余将来也可以补你们的不足，这就均平了，&nbsp;<sup>15&nbsp;</sup>如经上所记：&ldquo;多收的也没有余，少收的也没有缺。&rdquo;</p>

	<h3>称赞提多</h3>

	<p><sup>16&nbsp;</sup>多谢神感动<u>提多</u>的心，叫他待你们殷勤，像我一样。&nbsp;<sup>17&nbsp;</sup>他固然是听了我的劝，但自己更是热心，情愿往你们那里去。&nbsp;<sup>18&nbsp;</sup>我们还打发一位兄弟和他同去，这人在福音上得了众教会的称赞。&nbsp;<sup>19&nbsp;</sup>不但这样，他也被众教会挑选，和我们同行，把所托于我们的这捐资送到了，可以荣耀主，又表明我们乐意的心。&nbsp;<sup>20&nbsp;</sup>这就免得有人因我们收的捐银很多，就挑我们的不是。&nbsp;<sup>21&nbsp;</sup>我们留心行光明的事，不但在主面前，就在人面前也是这样。&nbsp;<sup>22&nbsp;</sup>我们又打发一位兄弟同去；这人的热心，我们在许多事上屡次试验过，现在他因为深信你们就更加热心了。&nbsp;<sup>23&nbsp;</sup>论到<u>提多</u>，他是我的同伴，一同为你们劳碌的；论到那两位兄弟，他们是众教会的使者，是基督的荣耀。&nbsp;<sup>24&nbsp;</sup>所以，你们务要在众教会面前显明你们爱心的凭据，并我所夸奖你们的凭据。</p>

	<h3>夸奖亚该亚信徒的热心</h3>

	<p>9&nbsp;论到供给圣徒的事，我不必写信给你们。&nbsp;<sup>2&nbsp;</sup>因为我知道你们乐意的心，常对马其顿人夸奖你们，说亚该亚人预备好了，已经有一年了，并且你们的热心激动了许多人。&nbsp;<sup>3&nbsp;</sup>但我打发那几位弟兄去，要叫你们照我的话预备妥当，免得我们在这事上夸奖你们的话落了空。&nbsp;<sup>4&nbsp;</sup>万一有马其顿人与我同去，见你们没有预备，就叫我们所确信的反成了羞愧，你们羞愧更不用说了。&nbsp;<sup>5&nbsp;</sup>因此，我想不得不求那几位弟兄先到你们那里去，把从前所应许的捐资预备妥当，就显出你们所捐的是出于乐意，不是出于勉强。</p>

	<h3>少种少收多种多收</h3>

	<p><sup>6&nbsp;</sup>&ldquo;少种的少收，多种的多收&rdquo;，这话是真的。&nbsp;<sup>7&nbsp;</sup>各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的。&nbsp;<sup>8&nbsp;</sup>神能将各样的恩惠多多地加给你们，使你们凡事常常充足，能多行各样善事，&nbsp;<sup>9&nbsp;</sup>如经上所记：&ldquo;他施舍钱财，周济贫穷，他的仁义存到永远。&rdquo;</p>

	<h3>增添仁义的果子</h3>

	<p><sup>10&nbsp;</sup>那赐种给撒种的、赐粮给人吃的，必多多加给你们种地的种子，又增添你们仁义的果子，&nbsp;<sup>11&nbsp;</sup>叫你们凡事富足，可以多多施舍，就借着我们使感谢归于神。&nbsp;<sup>12&nbsp;</sup>因为办这供给的事，不但补圣徒的缺乏，而且叫许多人越发感谢神。&nbsp;<sup>13&nbsp;</sup>他们从这供给的事上得了凭据，知道你们承认基督、顺服他的福音，多多地捐钱给他们和众人，便将荣耀归于神。&nbsp;<sup>14&nbsp;</sup>他们也因神极大的恩赐显在你们心里，就切切地想念你们，为你们祈祷。&nbsp;<sup>15&nbsp;</sup>感谢神，因他有说不尽的恩赐！</p>
	<!-- end bible --></div>
	</li>
</ul>

<p class="indent2">圣经上说态度比钱的多少重要，神设立十一奉献的原因就在此，祂在乎我们的态度，不是我们的钱（可回想神为何要我们奉献）。奉献的关键是，神若拥有我们的心，他就拥有我们的钱包。我们需要先把自己献给主。</p>

<ul class="forward">
	<li class="forward"><strong>问题与讨论</strong>

	<ul class="forward">
		<li class="forward">教会弟兄姊妹作十分之一奉献，会感到犹豫或有什么顾虑吗？为什么？</li>
		<li class="forward">要做主的门徒，为什么就要学习作十分之一的奉献？</li>
		<li class="forward">我们的教会是一个&ldquo;施&rdquo;还是&ldquo;受&rdquo;的教会？</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">福音行动</h2>

<ul class="forward">
	<li class="forward">了解你的教会如何收奉献及管理奉献。向教会的牧者或财务同工了解有关教会奉献的开支与需要。</li>
	<li class="forward">在未来一周的主日崇拜，学习并开始有计划地奉献，参与教会的圣工。</li>
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


<h2 class="forward">&nbsp;</h2>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ 福音祷告</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p class="forward">亲爱的天父，我知道你爱我，祢要我献上最好的给祢。我承认我所有的或我将有的，都从祢而来。我愿意照着祢所吩咐的开始做十一奉献。我感谢祢为我所做的一切，也祷告祢继续供应我的需要，我愿意把所赚的十分之一回报祢，用在祢的圣工上，荣耀祢的名，使更多人得益处。我愿意立定心志为永生作投资，帮助我在这个委身上忠心，讨祢的喜悦。奉耶稣基督的名祷告，阿们！</p>

</div>

<h2 class="forward">&nbsp;</h2>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->