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
                        <div class="chapter_number ltr"><h1>33.</h1></div>
                        <div class="chapter_title ltr"><h1>领导力与属灵营垒</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 可4:39-40</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">39&nbsp;</sup>耶稣醒了，斥责风，向海说：&ldquo;住了吧！静了吧！&rdquo;风就止住，大大地平静了。<sup class="versenum">40&nbsp;</sup>耶稣对他们说：&ldquo;为什么胆怯？你们还没有信心吗？&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>耶稣是掌管大自然的主，是宇宙的主。祂是救赎我们灵魂的主、是照顾我们生活的主，更是在患难中随时帮助我们的主。主耶稣说世上虽有苦难，但祂已经胜过它们，祂留下最大的平安给我们，叫我们心里有盼望和喜乐。主耶稣是我们生命最大的保障。在面对人生的风浪，要记住主耶稣没有离开我们，祂是我们最大的依靠。唯有依靠祂，我们才能胜过生命的大小风浪，并站立得住。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final">耶稣平静风浪（<span class="popup-link" @click = "popUp('pop2')"> 马可福音4:35-41</span>）；

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">35&nbsp;</sup>当那天晚上，耶稣对门徒说：&ldquo;我们渡到那边去吧。&rdquo;<sup class="versenum">36&nbsp;</sup>门徒离开众人，耶稣仍在船上，他们就把他一同带去；也有别的船和他同行。<sup class="versenum">37&nbsp;</sup>忽然起了暴风，波浪打入船内，甚至船要满了水。<sup class="versenum">38&nbsp;</sup>耶稣在船尾上枕着枕头睡觉。门徒叫醒了他，说：&ldquo;夫子！我们丧命，你不顾吗？&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣醒了，斥责风，向海说：&ldquo;住了吧！静了吧！&rdquo;风就止住，大大地平静了。<sup class="versenum">40&nbsp;</sup>耶稣对他们说：&ldquo;为什么胆怯？你们还没有信心吗？&rdquo;<sup class="versenum">41&nbsp;</sup>他们就大大地惧怕，彼此说：&ldquo;这到底是谁？连风和海也听从他了！&rdquo;</p>
<!-- end bible --></div>

次日，耶稣到了海的另一边格拉林人的地方，并医治一个被鬼附的人。

</li>
</ul>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马可福音5:1-20》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马可福音5:1-20</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>他们来到海那边格拉森人的地方。<sup>2</sup>耶稣一下船，就有一个被污鬼附着的人从坟茔里出来迎着他。<sup>3</sup>那人常住在坟茔里，没有人能捆住他，就是用铁链也不能，<sup>4</sup>因为人屡次用脚镣和铁链捆锁他，铁链竟被他挣断了，脚镣也被他弄碎了。总没有人能制伏他。<sup>5</sup>他昼夜常在坟茔里和山中喊叫，又用石头砍自己。</p>

<p><sup>6</sup>他远远地看见耶稣，就跑过去拜他，<sup>7</sup>大声呼叫说：&ldquo;至高　神的儿子耶稣，我与你有什么相干？我指着神恳求你，不要叫我受苦！&rdquo;<sup>8</sup>是因耶稣曾吩咐他说：&ldquo;污鬼啊，从这人身上出来吧！&rdquo;<sup>9</sup>耶稣问他说：&ldquo;你名叫什么？&rdquo;回答说：&ldquo;我名叫&lsquo;群&rsquo;，因为我们多的缘故。&rdquo;<sup>10</sup>就再三地求耶稣，不要叫他们离开那地方。<sup>11</sup>在那里山坡上，有一大群猪吃食，<sup>12</sup>鬼就央求耶稣说：&ldquo;求你打发我们往猪群里，附着猪去。&rdquo;<sup>13</sup>耶稣准了他们，污鬼就出来，进入猪里去。于是那群猪闯下山崖，投在海里，淹死了。猪的数目约有二千。</p>

<p><sup>14</sup>放猪的就逃跑了，去告诉城里和乡下的人。众人就来，要看是什么事。<sup>15</sup>他们来到耶稣那里，看见那被鬼附着的人，就是从前被群鬼所附的，坐着，穿上衣服，心里明白过来，他们就害怕。<sup>16</sup>看见这事的，便将鬼附之人所遇见的和那群猪的事，都告诉了众人，<sup>17</sup>众人就央求耶稣离开他们的境界。<sup>18</sup>耶稣上船的时侯，那从前被鬼附着的人恳求和耶稣同在。<sup>19</sup>耶稣不许，却对他说：&ldquo;你回家去，到你的亲属那里，将主为你所做的是何等大的事，是怎样怜悯你，都告诉他们。&rdquo;<sup>20</sup>那人就走了，在低加坡里传扬耶稣为他做了何等大的事，众人就都希奇。</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/233.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音5:1-20&nbsp;</button>
    <div class="collapsed"></div>

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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣带受训的领袖走出他们的舒适区，到加利利湖的另一边，进到外邦的低加坡里。这地区是异国之地，又以属灵黑暗闻名。因为有一个疯狂又残暴且被污鬼附着的人，对当地造成威胁，因而被放逐到社会边缘，住在坟墓里。透过这个&ldquo;海外宣教之旅&rdquo;，耶稣向领袖团队展现了祂对世人的心，对全世界的使命，以及没有什么人是祂拯救不了的。天父带领耶稣走这趟旅途，看来是为了这个人。他不只被改变了，而且变成令人意想不到的和平之子，回去向亲朋好友见证耶稣。耶稣改变这个人的生命，而他反过来成为门徒，将福音传向新的人群中。</p>

<p class="up">（进深学习：<span class="popup-link" @click = "popUp('pop3')"> 路加福音8:26-39</span>）</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">26&nbsp;</sup>他们到了格拉森人的地方，就是加利利的对面。<sup class="versenum">27&nbsp;</sup>耶稣上了岸，就有城里一个被鬼附着的人迎面而来。这个人许久不穿衣服，不住房子，只住在坟茔里。<sup class="versenum">28&nbsp;</sup>他见了耶稣，就俯伏在他面前，大声喊叫说：&ldquo;至高神的儿子耶稣，我与你有什么相干？求你不要叫我受苦！&rdquo;<sup class="versenum">29&nbsp;</sup>是因耶稣曾吩咐污鬼从那人身上出来。原来这鬼屡次抓住他；他常被人看守，又被铁链和脚镣捆锁，他竟把锁链挣断，被鬼赶到旷野去。<sup class="versenum">30&nbsp;</sup>耶稣问他说：&ldquo;你名叫什么？&rdquo;他说：&ldquo;我名叫&lsquo;群&rsquo;。&rdquo;这是因为附着他的鬼多。<sup class="versenum">31&nbsp;</sup>鬼就央求耶稣，不要吩咐他们到无底坑里去。<sup class="versenum">32&nbsp;</sup>那里有一大群猪在山上吃食。鬼央求耶稣准他们进入猪里去，耶稣准了他们。<sup class="versenum">33&nbsp;</sup>鬼就从那人出来，进入猪里去。于是那群猪闯下山崖，投在湖里淹死了。<sup class="versenum">34&nbsp;</sup>放猪的看见这事就逃跑了，去告诉城里和乡下的人。<sup class="versenum">35&nbsp;</sup>众人出来要看是什么事，到了耶稣那里，看见鬼所离开的那人坐在耶稣脚前，穿着衣服，心里明白过来，他们就害怕。<sup class="versenum">36&nbsp;</sup>看见这事的，便将被鬼附着的人怎么得救告诉他们。<sup class="versenum">37&nbsp;</sup>格拉森四围的人因为害怕得很，都求耶稣离开他们，耶稣就上船回去了。<sup class="versenum">38&nbsp;</sup>鬼所离开的那人恳求和耶稣同在，耶稣却打发他回去，说：<sup class="versenum">39&nbsp;</sup>&ldquo;你回家去，传说神为你做了何等大的事。&rdquo;他就去，满城里传扬耶稣为他做了何等大的事。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">可5:20</p>

<p class="forward bible">那人就走了，在低加坡里传扬耶稣为他做了何等大的事，众人就都希奇。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">若你当时就在现场，看到一大群猪（两千头）发狂投入海里，对这群鬼所带来的毁坏，你的感受是如何？同时，你再想象一下被这群鬼附着那人的痛苦，并感受耶稣给他带来的是何等的释放？</li>
	<li class="forward">这人此般痛苦得着耶稣全然医治，可以恢复过正常人的生活，当时的众人却因付上他们两千头猪的代价而央求耶稣离开他们。耶稣曾说：&ldquo;人若赚得全世界，却赔上自己的生命有何益处？&rdquo;请分享我们自己在现实生活中是如何看待人的价值？为什么？</li>
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
	<li class="forward">主耶稣不仅掌管大自然，祂还拥有天上地下的权柄，连撒旦和魔鬼都要伏在祂的脚下，而且祂应许有一天撒旦要永远被消灭（启20:10）。本周为那些你认识或听闻的，他们被魔鬼辖制或是在黑暗中生活的人祷告，求主耶稣的真光照进他们生命，他们愿意让主耶稣作他们的救主，得着真正的医治、自由和释放。</li>
	<li class="forward">从《信徒动员表》和《福音行动表》选出2-3个人，这周和他们分享&ldquo;奇妙的问题&rdquo;（你要我为你做什么？），主动表达关心和服事他们，并找机会与他们分享《被圣灵充满》或《四件事》，告诉他们耶稣是谁，并听听他们对耶稣的看法为何。</li>
	<li class="forward">什么是你的舒适区？你是否已经习惯或是不愿去改变和突破的？你想有哪些方面是耶稣要带你走出来，并去面对突破的？你告诉耶稣，你害怕什么？你需要什么？你要耶稣怎样帮助你。将它们一一写下来，与属灵同伴分享和代祷。</li>
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

<p>爱我的天父，感谢祢，因信耶稣基督，我们的罪得以赦免、可以呼叫祢为阿爸天父，享受祢为我们所预备丰盛的生命。求祢赐我们怜悯关爱他人的心，并奉祢所赐的权柄释放那些在黑暗中的人。主啊，我们知道，我们并不是与属血气的争战，乃是与那些执政的、掌权的、管辖这幽暗世界的，以及天空属灵气的恶魔争战。所以我们靠著主，倚赖主的大能大力，作刚强的人，并穿戴神所赐的全副军装，就能抵挡魔鬼的诡计，并在磨难的日子可以抵挡仇敌，并且成就了一切，还能站立得住。奉主耶稣的名祷告，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->