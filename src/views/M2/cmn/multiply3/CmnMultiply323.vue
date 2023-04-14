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
                        <div class="chapter_number ltr"><h1>23.</h1></div>
                        <div class="chapter_title ltr"><h1>恶有恶报神道兴旺——马可的出场</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒11:25-26</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">25&nbsp;</sup>他又往大数去找<u class="person underline">扫罗</u>，<sup class="versenum">26&nbsp;</sup>找着了，就带他到安提阿去。他们足有一年的工夫和教会一同聚集，教训了许多人。门徒称为&ldquo;基督徒&rdquo;是从安提阿起首。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p class="back">安提阿在当时是一个色情行业很兴盛的城市，那里有月桂树女神庙，充斥着偶像和庙妓等邪淫行径，人们的道德观念低落，生活糜烂，行为败坏。当有一班基督徒，在真理上训练有素，在生活行为上有良好的见证，他们出现在如此的社会环境中，被人们当作一群&ldquo;奇特&rdquo;的人看待。旁观的世人，体会到这群人明显地不是犹太人的一个会堂，就给他们起了一个新名字：&ldquo;基督徒&rdquo;，意思是&ldquo;基督的跟随者&rdquo;。今天上帝把我们分别出来，归祂为圣，特作祂的子民，在这世代作祂的光明之子。愿我们的&ldquo;光&rdquo;照在人前，叫人看见我们的好行为，便将荣耀归给我们在天上的父，且认出我们是主的门徒！</p>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">那些遭逼迫分散的门徒，走到腓尼基和居比路并安提阿。起初这些门徒只向犹太人讲道。但内中有居比路和古利奈人，他们到了安提阿也向希利尼人传讲主耶稣。主与他们同在，信而归主的人就很多了。安提阿教会建立起来了。耶路撒冷教会打发巴拿巴去坚固他们。巴拿巴到大数去找扫罗，找着了，就带他到安提阿。巴拿巴与扫罗用足一年的时间，和教会聚集。门徒称为基督徒是从安提阿开始。神的话由耶路撒冷这个中心开始，不断地扩散出去。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒12:1-25》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒12:1-25</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>那时，希律王 下手苦害教会中几个人，<sup>2</sup>用刀杀了约翰的哥哥雅各 。<sup>3</sup>他见犹太人喜欢这事，又去捉拿彼得。那时正是除酵的日子。<sup>4</sup>希律拿了彼得，收在监里，交付四班兵丁看守，每班四个人，意思要在逾越节后，把他提出来，当著百姓办他。</p>

<p><sup>5</sup>于是彼得被囚在监里；教会却为他切切地祷告　神。<sup>6</sup>希律将要提他出来的前一夜，彼得被两条铁链锁著，睡在两个兵丁当中。看守的人也在门外看守。<sup>7</sup>忽然有主的一个使者站在旁边，屋里有光照耀。天使拍彼得的肋旁，拍醒了他，说：&ldquo;快快起来！&rdquo;那铁链就从他手上脱落下来。<sup>8</sup>天使对他说：&ldquo;束上带子，穿上鞋！&rdquo;他就那样做。天使又说：&ldquo;披上外衣，跟著我来。&rdquo;<sup>9</sup>彼得就出来跟著他，不知道天使所做是真的，只当见了异象。<sup>10</sup>过了第一层、第二层监牢，就来到临街的铁门，那门自己开了。他们出来，走过一条街，天使便离开他去了。<sup>11</sup>彼得醒悟过来，说：&ldquo;我现在真知道主差遣他的使者，救我脱离希律的手和犹太百姓一切所盼望的。&rdquo;<sup>12</sup>想了一想，就往那称呼马可的约翰他母亲马利亚家去，在那里有好些人聚集祷告。<sup>13</sup>彼得敲外门，有一个使女名叫罗大，出来探听，<sup>14</sup>听得是彼得的声音，就欢喜的顾不得开门，跑进去告诉众人说：&ldquo;彼得站在门外！&rdquo;<sup>15</sup>他们说：&ldquo;你是疯了！&rdquo;使女极力地说：&ldquo;真是他！&rdquo;他们说：&ldquo;必是他的天使。&rdquo;<sup>16</sup>彼得不住地敲门。他们开了门，看见他，就甚惊奇。<sup>17</sup>彼得摆手，不要他们做声，就告诉他们主怎样领他出监，又说：&ldquo;你们把这事告诉雅各和众弟兄。&rdquo;于是出去往别处去了。</p>

<p><sup>18</sup>到了天亮，兵丁扰乱得很，不知道彼得往哪里去了。<sup>19</sup>希律找他，找不著，就审问看守的人，吩咐把他们拉去杀了。后来希律离开犹太，下凯撒利亚去，住在那里。<sup>20</sup>希律恼怒推罗、西顿的人。他们那一带地方是从王的地土得粮，因此就托了王的内侍臣伯拉斯都的情，一心来求和。</p>

<p><sup>21</sup>希律在所定的日子，穿上朝服，坐在位上，对他们讲论一番。<sup>22</sup>百姓喊著说：&ldquo;这是　神的声音，不是人的声音。&rdquo;<sup>23</sup>希律不归荣耀给　神，所以主的使者立刻罚他，他被虫所咬，气就绝了。<sup>24</sup>神的道日见兴旺，越发广传。<sup>25</sup>巴拿巴和扫罗办完了他们供给的事，就从耶路撒冷回来，带著称呼马可的约翰同去。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/323.mp4" type="button" class="external-movie">
         观看徒12:1-25</button>
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
	<li class="nobreak-final-final">耶稣曾告诉使徒：&ldquo;他们若逼迫了我，也要逼迫你们&rdquo;（<span class="popup-link" @click = "popUp('pop2')"> 约 15: 20</span>）

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>你们要记念我从前对你们所说的话：&lsquo;仆人不能大于主人。&rsquo;他们若逼迫了我，也要逼迫你们；若遵守了我的话，也要遵守你们的话。</p>
	<!-- end bible --></div>
	这次突发的逼迫是针对使徒和其他的教会领袖。主允许使徒雅各遭杀害，但彼得却能奇迹式地脱离险境。 雅各和他的兄弟约翰，是耶稣呼召的第一批门徒，被训练去&ldquo;得人如得鱼&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 太4:21</span>）。

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>从那里往前走，又看见弟兄二人，就是<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和他兄弟<u class="person underline">约翰</u>，同他们的父亲<u class="person underline">西庇太</u>在船上补网，耶稣就招呼他们。</p>
	<!-- end bible --></div>
	虽然信徒祈求主来救彼得，有些人却不相信这件事会发生（<span class="popup-link" @click = "popUp('pop4')"> 徒12:13</span>）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup><u class="person underline">彼得</u>敲外门，有一个使女名叫<u class="person underline">罗大</u>，出来探听。</p>
	<!-- end bible --></div>
	信徒受逼迫的结果不一，有时候信徒幸免于难，有时候他们被杀害；有时候上帝施行神迹，有时候却没有。主说过：&ldquo;要爱你的仇敌，为那逼迫你们的祷告&rdquo;还有&ldquo;伸冤在我，我必报应&rdquo;（<span class="popup-link" @click = "popUp('pop10')"> 太5:43-48</span>；

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">43&nbsp;</sup>&ldquo;你们听见有话说：&lsquo;当爱你的邻舍，恨你的仇敌。&rsquo;<sup class="versenum">44&nbsp;</sup>只是我告诉你们，要爱你们的仇敌，为那逼迫你们的祷告，<sup class="versenum">45&nbsp;</sup>这样就可以做你们天父的儿子，因为他叫日头照好人也照歹人，降雨给义人也给不义的人。<sup class="versenum">46&nbsp;</sup>你们若单爱那爱你们的人，有什么赏赐呢？就是税吏不也是这样行吗？<sup class="versenum">47&nbsp;</sup>你们若单请你弟兄的安，比人有什么长处呢？就是外邦人不也是这样行吗？<sup class="versenum">48&nbsp;</sup>所以你们要完全，像你们的天父完全一样。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> 罗12:17-21</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>不要以恶报恶。众人以为美的事，要留心去做。<sup class="versenum">18&nbsp;</sup>若是能行，总要尽力与众人和睦。<sup class="versenum">19&nbsp;</sup>亲爱的弟兄，不要自己申冤，宁可让步，听凭主怒；因为经上记着：&ldquo;主说：申冤在我，我必报应。&rdquo;<sup class="versenum">20&nbsp;</sup>所以，&ldquo;你的仇敌若饿了，就给他吃；若渴了，就给他喝。因为你这样行，就是把炭火堆在他的头上。&rdquo;<sup class="versenum">21&nbsp;</sup>你不可为恶所胜，反要以善胜恶。</p>
	<!-- end bible --></div>
	这些领袖倚靠耶稣，让主自己去对付希律，他们则继续专心地事奉和宣教。即使害怕，他们仍借着顺服，展现出他们的勇气。在这里，神杀了希律，作为对他的傲慢和攻击的响应，主的道也越发广传。</li>
</ul>

<p class="up">本句为《使徒行传》下第三个总结：神的道日见兴旺，越发广传（<span class="popup-link" @click = "popUp('pop7')"> 徒12:24</span>）。</p>

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">24&nbsp;</sup>神的道日见兴旺，越发广传。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒12:23-24</p>

<p class="forward bible"><sup>23</sup>希律不归荣耀给　神，所以主的使者立刻罚他，他被虫所咬，气就绝了。<sup>24</sup>神的道日见兴旺，越发广传。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">你相信代祷能行大事吗？比较<span class="popup-link" @click = "popUp('pop8')"> 林后 1:8-11</span>

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>弟兄们，我们不要你们不晓得，我们从前在亚细亚遭遇苦难，被压太重，力不能胜，甚至连活命的指望都绝了，<sup class="versenum">9&nbsp;</sup>自己心里也断定是必死的，叫我们不靠自己，只靠叫死人复活的神。<sup class="versenum">10&nbsp;</sup>他曾救我们脱离那极大的死亡，现在仍要救我们，并且我们指望他将来还要救我们。<sup class="versenum">11&nbsp;</sup>你们以祈祷帮助我们，好叫许多人为我们谢恩，就是为我们因许多人所得的恩。</p>
	<!-- end bible --></div>
	和<span class="popup-link" @click = "popUp('pop9')"> 弗 3:20-21</span>，

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>神能照着运行在我们心里的大力，充充足足地成就一切，超过我们所求所想的。<sup class="versenum">21&nbsp;</sup>但愿他在教会中，并在基督耶稣里得着荣耀，直到世世代代，永永远远！阿门。</p>
	<!-- end bible --></div>
	你经历过代祷的成就吗？你是否参与教会的祷告会? 为什么？</li>
	<li class="forward">教会为彼得祷告，彼得获拯救，试想雅各被抓到杀头时，教会会不会也为他祷告呢？但为何雅各和彼得的结局完全不同呢？另外，从希律的结局我们又可以学到什么属灵的教训？</li>
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
	<li class="forward">动员更多的弟兄姐妹或你所造就的门徒参与教会的祷告会，众人在祷告中一起寻求神、信靠神，并真实经历神的作为和信实。</li>
	<li class="forward">为门徒小组或教会弟兄姐妹提名守望，求主坚定他们的信心，在面对质问或逼迫时，能以勇敢见证这位生命中复活的救主基督。</li>
	<li class="forward">纵然洪水泛滥，耶和华依然坐着为王。我们知道神必能使万事都互相效力，叫爱祂的我们得益处，并效法祂儿子耶稣基督的样式。为教会或是你所处的环境和困境祷告，求神让我们凭信心交托仰望祂，为我们开通达的道路并赐十分的平安。</li>
	<li class="forward">在小组中与门徒一起为国家社会并世界所面对的灾难和困境向神求怜悯和恩惠，求神眷顾城中属祂的百姓，赦免人因任意妄为而得罪神的罪孽，怜悯医治这地。</li>
	<li class="forward">把《雅各书》阅读一遍，把心得写下，下周小组分享。下图书卷图表仅供参考。<img src="@/assets/sites/mc2/content/M2/cmn/images/custom/image.png" /></li>
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
	<li class="forward">纵然洪水泛滥，耶和华依然坐着为王。为这世代和我们所处的环境与困境祷告，求神让我们继续仰望祂的信实和慈爱，怜悯和医治这地，使人心回转向祂。</li>
	<li class="forward">为那些在逼迫和残害基督徒的国家祷告，求主记念祂的百姓，求主亲自开福音的门，让作恶和抵挡神的，神亲自管教和对付，使人对神生存敬畏。神迹奇事在那地彰显，神的名得荣耀。</li>
	<li class="forward">分享教会或个人的代祷需要。（最后请一位做结束和祝福祷告。）</li>
</ul>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->