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
                        <div class="chapter_number ltr"><h1>45.</h1></div>
                        <div class="chapter_title ltr"><h1>管家型领导力</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路12:5</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>我要指示你们当怕的是谁，当怕那杀了以后又有权柄丢在地狱里的。我实在告诉你们：正要怕他！</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>主耶稣奉差遣来服事的目的是传神的道，而不是为了医病赶鬼。主耶稣甘心服事人，但祂的服事并不是根据人的需要，而是根据神的心意。人都是看重肉身的需要、眼前的好处，主耶稣却要让人看重神的心意过于肉身的需要，并留意永恒的事情过于眼前的好处，把人完全带回神永远的计划里。今天我们所做一切爱心的服事，神会记念，但更重要的是，我们是否把人带到那造人和赐人生命的神面前？！</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣和门徒一行人终于快到耶路撒冷了！耶稣明白旅程的终点意谓着什么，祂私下将十二位使徒招聚在一起，对他们预言即将发生的事，门徒却一头雾水。当耶稣&ldquo;定意&rdquo;走向耶路撒冷时，祂已&ldquo;定意&rdquo;顺服上帝在祂身上的旨意，旧约先知所预言一切关于人子的事都必定应验</span><span lang="ZH-CN"><span>（</span></span></span></span><span class="popup-link" @click = "popUp('pop2')"> 路加福音18:31-34</span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">。</span>
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">31&nbsp;</sup>耶稣带着十二个门徒，对他们说：&ldquo;看哪，我们上耶路撒冷去，先知所写的一切事都要成就在人子身上。<sup class="versenum">32&nbsp;</sup>他将要被交给外邦人，他们要戏弄他，凌辱他，吐唾沫在他脸上，<sup class="versenum">33&nbsp;</sup>并要鞭打他，杀害他，第三日他要复活。&rdquo;<sup class="versenum">34&nbsp;</sup>这些事门徒一样也不懂得，意思乃是隐藏的，他们不晓得所说的是什么。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">在临近耶路撒冷的压力下，耶稣仍不忘施怜悯，作者路加记下了旅程中耶稣所施行的最后一个医治的神迹，祂回应了一个瞎子痛苦的呼求</span><span lang="ZH-CN"><span>（</span></span></span></span><span class="popup-link" @click = "popUp('pop3')"> 路加福音18:5-43</span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">；</span>
	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>只因这寡妇烦扰我，我就给她申冤吧，免得她常来缠磨我。&rsquo;&rdquo;<sup class="versenum">6&nbsp;</sup>主说：&ldquo;你们听这不义之官所说的话。<sup class="versenum">7&nbsp;</sup>神的选民昼夜呼吁他，他纵然为他们忍了多时，岂不终久给他们申冤吗？<sup class="versenum">8&nbsp;</sup>我告诉你们：要快快地给他们申冤了。然而，人子来的时候，遇得见世上有信德吗？&rdquo;</p>

	<h3>法利赛人和税吏的祷告</h3>

	<p><sup class="versenum">9&nbsp;</sup>耶稣向那些仗着自己是义人藐视别人的，设一个比喻，<sup class="versenum">10&nbsp;</sup>说：&ldquo;有两个人上殿里去祷告，一个是法利赛人，一个是税吏。<sup class="versenum">11&nbsp;</sup>法利赛人站着，自言自语地祷告说：&lsquo;神啊，我感谢你，我不像别人勒索、不义、奸淫，也不像这个税吏。<sup class="versenum">12&nbsp;</sup>我一个礼拜禁食两次，凡我所得的都捐上十分之一。&rsquo;<sup class="versenum">13&nbsp;</sup>那税吏远远地站着，连举目望天也不敢，只捶着胸说：&lsquo;神啊，开恩可怜我这个罪人！&rsquo;<sup class="versenum">14&nbsp;</sup>我告诉你们，这人回家去比那人倒算为义了。因为凡自高的，必降为卑；自卑的，必升为高。&rdquo;</p>

	<h3>主接待小孩</h3>

	<p><sup class="versenum">15&nbsp;</sup>有人抱着自己的婴孩来见耶稣，要他摸他们，门徒看见就责备那些人。<sup class="versenum">16&nbsp;</sup>耶稣却叫他们来，说：&ldquo;让小孩子到我这里来，不要禁止他们，因为在神国的正是这样的人。<sup class="versenum">17&nbsp;</sup>我实在告诉你们：凡要承受神国的，若不像小孩子，断不能进去。&rdquo;</p>

	<h3>当积财宝在天上</h3>

	<p><sup class="versenum">18&nbsp;</sup>有一个官问耶稣说：&ldquo;良善的夫子，我该做什么事才可以承受永生？&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣对他说：&ldquo;你为什么称我是良善的？除了神一位之外，再没有良善的。<sup class="versenum">20&nbsp;</sup>诫命你是晓得的：不可奸淫，不可杀人，不可偷盗，不可作假见证，当孝敬父母。&rdquo;<sup class="versenum">21&nbsp;</sup>那人说：&ldquo;这一切我从小都遵守了。&rdquo;<sup class="versenum">22&nbsp;</sup>耶稣听见了，就说：&ldquo;你还缺少一件：要变卖你一切所有的，分给穷人，就必有财宝在天上；你还要来跟从我。&rdquo;<sup class="versenum">23&nbsp;</sup>他听见这话，就甚忧愁，因为他很富足。</p>

	<h3>贪财的难进天国</h3>

	<p><sup class="versenum">24&nbsp;</sup>耶稣看见他，就说：&ldquo;有钱财的人进神的国是何等地难哪！<sup class="versenum">25&nbsp;</sup>骆驼穿过针的眼，比财主进神的国还容易呢！&rdquo;<sup class="versenum">26&nbsp;</sup>听见的人说：&ldquo;这样谁能得救呢？&rdquo;<sup class="versenum">27&nbsp;</sup>耶稣说：&ldquo;在人所不能的事，在神却能。&rdquo;<sup class="versenum">28&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;看哪，我们已经撇下自己所有的跟从你了！&rdquo;<sup class="versenum">29&nbsp;</sup>耶稣说：&ldquo;我实在告诉你们：人为神的国撇下房屋或是妻子、弟兄、父母、儿女，<sup class="versenum">30&nbsp;</sup>没有在今世不得百倍，在来世不得永生的。&rdquo;</p>

	<h3>主预言受难</h3>

	<p><sup class="versenum">31&nbsp;</sup>耶稣带着十二个门徒，对他们说：&ldquo;看哪，我们上耶路撒冷去，先知所写的一切事都要成就在人子身上。<sup class="versenum">32&nbsp;</sup>他将要被交给外邦人，他们要戏弄他，凌辱他，吐唾沫在他脸上，<sup class="versenum">33&nbsp;</sup>并要鞭打他，杀害他，第三日他要复活。&rdquo;<sup class="versenum">34&nbsp;</sup>这些事门徒一样也不懂得，意思乃是隐藏的，他们不晓得所说的是什么。</p>

	<p><sup class="versenum">35&nbsp;</sup>耶稣将近耶利哥的时候，有一个瞎子坐在路旁讨饭。<sup class="versenum">36&nbsp;</sup>听见许多人经过，就问是什么事。<sup class="versenum">37&nbsp;</sup>他们告诉他，是拿撒勒人耶稣经过。<sup class="versenum">38&nbsp;</sup>他就呼叫说：&ldquo;<u class="person underline">大卫</u>的子孙耶稣啊，可怜我吧！&rdquo;<sup class="versenum">39&nbsp;</sup>在前头走的人就责备他，不许他作声，他却越发喊叫说：&ldquo;<u class="person underline">大卫</u>的子孙，可怜我吧！&rdquo;<sup class="versenum">40&nbsp;</sup>耶稣站住，吩咐把他领过来。到了跟前，就问他说：<sup class="versenum">41&nbsp;</sup>&ldquo;你要我为你做什么？&rdquo;他说：&ldquo;主啊，我要能看见！&rdquo;<sup class="versenum">42&nbsp;</sup>耶稣说：&ldquo;你可以看见！你的信救了你了。&rdquo;<sup class="versenum">43&nbsp;</sup>瞎子立刻看见了，就跟随耶稣，一路归荣耀于神。众人看见这事，也赞美神。</p>
	<!-- end bible --></div>
	<span lang="ZH-CN">祂主动邀请被人唾弃的税吏撒该进入神的家中，在即将结束在世上生活的这个时刻，祂再度宣告祂在世界上的使命：&ldquo;人子来是要拯救和寻找失丧的人&rdquo;</span><span lang="ZH-CN"><span>（</span></span><span class="popup-link" @click = "popUp('pop4')"> 路加福音19:1-10</span><span lang="ZH-CN"><span>）。</span></span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>耶稣进了耶利哥，正经过的时候，<sup class="versenum">2&nbsp;</sup>有一个人名叫<u class="person underline">撒该</u>，做税吏长，是个财主，<sup class="versenum">3&nbsp;</sup>他要看看耶稣是怎样的人。只因人多，他的身量又矮，所以不得看见。<sup class="versenum">4&nbsp;</sup>就跑到前头，爬上桑树，要看耶稣，因为耶稣必从那里经过。<sup class="versenum">5&nbsp;</sup>耶稣到了那里，抬头一看，对他说：&ldquo;<u class="person underline">撒该</u>，快下来！今天我必住在你家里。&rdquo;<sup class="versenum">6&nbsp;</sup>他就急忙下来，欢欢喜喜地接待耶稣。<sup class="versenum">7&nbsp;</sup>众人看见，都私下议论说：&ldquo;他竟到罪人家里去住宿！&rdquo;<sup class="versenum">8&nbsp;</sup><u class="person underline">撒该</u>站着对主说：&ldquo;主啊，我把所有的一半给穷人，我若讹诈了谁，就还他四倍。&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是<u class="person underline">亚伯拉罕</u>的子孙。<sup class="versenum">10&nbsp;</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>
	<!-- end bible --></div>
	</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音19:1-27》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音19:1-27</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>耶稣进了耶利哥，正经过的时候，<sup>2</sup>有一个人名叫撒该，作税吏长，是个财主。<sup>3</sup>他要看看耶稣是怎样的人；只因人多，他的身量又矮，所以不得看见，<sup>4</sup>就跑到前头，爬上桑树，要看耶稣，因为耶稣必从那里经过。</p>

<p><sup>5</sup>耶稣到了那里，抬头一看，对他说：&ldquo;撒该，快下来！今天我必住在你家里。&rdquo;<sup>6</sup>他就急忙下来，欢欢喜喜地接待耶稣。<sup>7</sup>众人看见，都私下议论说：&ldquo;他竟到罪人家里去住宿。&rdquo;<sup>8</sup>撒该站着对主说：&ldquo;主啊，我把所有的一半给穷人；我若讹诈了谁，就还他四倍。&rdquo;<sup>9</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是亚伯拉罕的子孙。<sup>10</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>

<p><sup>11</sup>众人正在听见这些话的时候，耶稣因为将近耶路撒冷，又因他们以为神的国快要显出来，就另设一个比喻，说：<sup>12</sup> &ldquo;有一个贵胄往远方去，要得国回来，<sup>13</sup>便叫了他的十个仆人来，交给他们十锭（注：&ldquo;锭&rdquo;原文作&ldquo;弥拿&rdquo;，一弥拿约银十两）银子，说：&lsquo;你们去做生意，直等我回来。&rsquo;<sup>14</sup>他本国的人却恨他，打发使者随后去，说：&lsquo;我们不愿意这个人作我们的王。<sup>15</sup>他既得国回来，就吩咐叫那领银子的仆人来，要知道他们做生意赚了多少。<sup>16</sup>头一个上来，说：&lsquo;主啊，你的一锭银子已经赚了十锭。&rsquo;<sup>17</sup>主人说：&lsquo;好！良善的仆人，你既在最小的事上有忠心，可以有权柄管十座城。&rsquo;<sup>18</sup>第二个来，说：&lsquo;主啊，你的一锭银子已经赚了五锭。&rsquo;<sup>19</sup>主人说：&lsquo;你也可以管五座城。&rsquo;<sup>20</sup>又有一个来说：&lsquo;主啊，看哪，你的一锭银子在这里，我把它包在手巾里存着。<sup>21</sup>我原是怕你，因为你是严厉的人：没有放下的，还要去拿；没有种下的，还要去收。&rsquo;<sup>22</sup>主人对他说：&lsquo;你这恶仆，我要凭你的口定你的罪！你既知道我是严厉的人，没有放下的，还要去拿，没有种下的，还要去收，<sup>23</sup>为什么不把我的银子交给银行，等我来的时候，连本带利都可以要回来呢？&rsquo;<sup>24</sup>就对旁边站着的人说：&lsquo;夺过他这一锭来，给那有十锭的。&rsquo;<sup>25</sup>他们说：&lsquo;主啊，他已经有十锭了。&rsquo;<sup>26</sup>主人说：&lsquo;我告诉你们：凡有的，还要加给他；没有的，连他所有的也要夺过来。<sup>27</sup>至于我那些仇敌，不要我作他们王的，把他们拉来，在我面前杀了吧！&rsquo;&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/245.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音19:1-27&nbsp;</button>
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

<p class="up">耶稣活出祂的教导。祂在耶利哥遇见另一个富有，却非常不受欢迎的人。他名叫撒该，是那地的税吏长，为罗马政府工作。天父要耶稣去撒该的家，众人都很惊讶，但是撒该却很高兴。和耶稣相处时，耶稣改变了他的心。他得到赦免，开始改变自己的行为。他向人求饶恕，要跟过去自己错待的人和好。众人都欢喜撒该的生命得到改变，时，耶稣用一个比喻，教导人如何做一个管家： 要妥善管理上帝所托付的一切。将来我们都要为自己所作的，向上帝交帐，无论是物质或是属灵的深层，我们都是管家。身为耶稣的真门徒，我们知道没有什么东西属于自己，唯有上帝拥有一切。祂呼召我们管理祂所托付给我们的一切，包括：我们的时间、我们口中的话、我们的想法、我们的行为。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路19:9-10</p>

<p class="forward bible"><sup>9</sup>耶稣说：&ldquo;今天救恩到了这家，因为他也是亚伯拉罕的子孙。<sup>10</sup>人子来，为要寻找、拯救失丧的人。&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">真正的悔改一定会表现在行动上，撒该就是一个最好的例子。你信主以后，在自己或别人身上看到明显的改变吗？耶稣主动地寻找像撒该那样失丧的人，这是否提醒我们要主动地去接触还不认识福音的人？</li>
	<li class="forward">在耶稣再来之前，门徒的责任是善用恩赐，完成主所交付的工作。你我的恩赐是什么？我们如何使用自己的恩赐服事神？我们是耶稣所警告三个仆人中的哪一个呢？为什么？</li>
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
	<li class="forward">每天开始新的一天时，分别一段时间来到施恩的神面前，求祂赐你聪明智慧和各样的技巧，并让祂介入你的专业和事奉，使你满得祂的能力与同在，真实体验祂的真实。</li>
	<li class="forward">在你事奉或所在的岗位上，试想神会如何使用你的恩赐、专业、才干、祷告和金钱来参与神国的拓展，为主成为得人的渔夫。请把它写下，下周在小组分享。</li>
	<li class="forward">在门徒小组中，帮助门徒发掘各自的恩赐与才干，并鼓励他们在教会参与服事或在生活中更好发挥和被神使用，作神忠心良善的好管家。</li>
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

<p>永活的救主耶稣，我们称谢祢，祢是我们的救赎主，祢用宝血把我们从罪恶当中拯救出来，让我们经历祢的大爱与赦免。求主光照并监察我们内心的败坏与不信，我们承认很多时候我们的信仰与生活、行事为人会与祢的心意和使命不相干，甚至我们不相信祢能在我们的专业上为我们做什么。求主赦免我们的自负与不信，帮助我们行事为人作主忠心的好管家，善用祢给予的恩赐、才干、时间、金钱和岗位，作光作盐，领人归主，使人作主门徒。奉主耶稣基督的名求，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->