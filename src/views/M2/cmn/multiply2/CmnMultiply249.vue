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
                        <div class="chapter_number ltr"><h1>49.</h1></div>
                        <div class="chapter_title ltr"><h1>受苦型领导力</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 约14:21</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>&ldquo;有了我的命令又遵守的，这人就是爱我的。爱我的必蒙我父爱他，我也要爱他，并且要向他显现。&rdquo;</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>主耶稣靠着天父做工，祂示范领导力就是顺服天父，靠祂的能力遵行天父的旨意，最终荣耀了天父。祂也提醒门徒最要紧的是：倚靠圣灵、警醒祷告、凡事遵从天父旨意、以祂为首，并与人建立爱和牺牲的关系。同样，天父对我们生命有美好的计划，我们需要时刻寻求天父的心，行在祂的心意里面，讨祂的喜悦，凡事尊荣祂的圣名。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣的时候到了！临行前对门徒的牵挂已经交代完毕，对父神的祷告也已诉尽衷肠，深信父所赐给祂的门徒必蒙保守。越过汲沦溪，耶稣知道即将临到自己的一切事，在黑夜的掩护下，身为门徒的犹大带头领了一群人将耶稣拘捕，耶稣却在这一刻护卫着祂的门徒，将自己交给逮捕祂的人，祂甘心领受父所赐的苦杯<span>（<span class="popup-link" @click = "popUp('pop2')"> 约18:1-11</span></span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">。</span><span> </span></span></span></span>
	<div class="popup invisible" id="pop2"><span><span><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span>
	<p><span><span><span lang="ZH-CN"><span><sup class="versenum">1 </sup>耶稣说了这话，就同门徒出去，过了汲沦溪。在那里有一个园子，他和门徒进去了。<sup class="versenum">2&nbsp;</sup>卖耶稣的<u class="person underline">犹大</u>也知道那地方，因为耶稣和门徒屡次上那里去聚集。<sup class="versenum">3&nbsp;</sup><u class="person underline">犹大</u>领了一队兵，和祭司长并法利赛人的差役拿着灯笼、火把、兵器，就来到园里。<sup class="versenum">4&nbsp;</sup>耶稣知道将要临到自己的一切事，就出来对他们说：&ldquo;你们找谁？&rdquo;<sup class="versenum">5&nbsp;</sup>他们回答说：&ldquo;找拿撒勒人耶稣。&rdquo;耶稣说：&ldquo;我就是。&rdquo;卖他的<u class="person underline">犹大</u>也同他们站在那里。<sup class="versenum">6&nbsp;</sup>耶稣一说&ldquo;我就是&rdquo;，他们就退后倒在地上。<sup class="versenum">7&nbsp;</sup>他又问他们说：&ldquo;你们找谁？&rdquo;他们说：&ldquo;找拿撒勒人耶稣。&rdquo;<sup class="versenum">8&nbsp;</sup>耶稣说：&ldquo;我已经告诉你们：我就是。你们若找我，就让这些人去吧！&rdquo;<sup class="versenum">9&nbsp;</sup>这要应验耶稣从前的话说：&ldquo;你所赐给我的人，我没有失落一个。&rdquo;<sup class="versenum">10&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>带着一把刀，就拔出来，将大祭司的仆人砍了一刀，削掉他的右耳。那仆人名叫<u class="person underline">马勒古</u>。<sup class="versenum">11&nbsp;</sup>耶稣就对<u class="person underline">彼得</u>说：&ldquo;收刀入鞘吧！我父所给我的那杯，我岂可不喝呢？&rdquo;</span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></div>
	</li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span lang="ZH-CN">耶稣先后被带到大祭司亚那和该亚法的面前接受审讯，耶稣沉着勇敢地面对质问祂的人<span>（<span class="popup-link" @click = "popUp('pop3')"> 约18:12-14</span></span><span lang="ZH-CN"><span>、</span></span><span> </span></span></span></span>
	<div class="popup invisible" id="pop3"><span><span><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span>
	<p><span><span><span lang="ZH-CN"><span><sup class="versenum">12&nbsp;</sup>那队兵和千夫长并犹太人的差役就拿住耶稣，把他捆绑了，<sup class="versenum">13&nbsp;</sup>先带到<u class="person underline">亚那</u>面前，因为<u class="person underline">亚那</u>是本年做大祭司<u class="person underline">该亚法</u>的岳父。<sup class="versenum">14&nbsp;</sup>这<u class="person underline">该亚法</u>就是从前向犹太人发议论说&ldquo;一个人替百姓死是有益的&rdquo;那位。</span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></div>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span><span class="popup-link" @click = "popUp('pop4')"> 约18:19-24</span></span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">；</span><span> </span></span></span></span></span>

	<div class="popup invisible" id="pop4"><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">19&nbsp;</sup>大祭司就以耶稣的门徒和他的教训盘问他。<sup class="versenum">20&nbsp;</sup>耶稣回答说：&ldquo;我从来是明明地对世人说话。我常在会堂和殿里，就是犹太人聚集的地方教训人，我在暗地里并没有说什么。<sup class="versenum">21&nbsp;</sup>你为什么问我呢？可以问那听见的人我对他们说的是什么，我所说的，他们都知道。&rdquo;<sup class="versenum">22&nbsp;</sup>耶稣说了这话，旁边站着的一个差役用手掌打他，说：&ldquo;你这样回答大祭司吗？&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣说：&ldquo;我若说的不是，你可以指证那不是。我若说得是，你为什么打我呢？&rdquo;<sup class="versenum">24&nbsp;</sup><u class="person underline">亚那</u>就把耶稣解到大祭司<u class="person underline">该亚法</u>那里，仍是捆着解去的。</span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></span></div>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN">相对于耶稣的沉稳，自信冲动的彼得却在巨大的压力之下三次否认了爱他的主，应验了耶稣之前的预言<span>（<span class="popup-link" @click = "popUp('pop5')"> 约18:15-18</span></span><span lang="ZH-CN"><span>、</span></span><span> </span></span></span></span></span></span>

	<div class="popup invisible" id="pop5"><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">15&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>跟着耶稣，还有一个门徒跟着。那门徒是大祭司所认识的，他就同耶稣进了大祭司的院子，<sup class="versenum">16&nbsp;</sup><u class="person underline">彼得</u>却站在门外。大祭司所认识的那个门徒出来，和看门的使女说了一声，就领<u class="person underline">彼得</u>进去。<sup class="versenum">17&nbsp;</sup>那看门的使女对<u class="person underline">彼得</u>说：&ldquo;你不也是这人的门徒吗？&rdquo;他说：&ldquo;我不是。&rdquo;<sup class="versenum">18&nbsp;</sup>仆人和差役因为天冷，就生了炭火，站在那里烤火，<u class="person underline">彼得</u>也同他们站着烤火。</span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></span></span></div>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><span class="popup-link" @click = "popUp('pop6')"> 约18:25-27</span></span><span lang="ZH-CN"><span>）</span></span><span lang="ZH-CN">；</span><span> </span></span></span></span></span></span></span>

	<div class="popup invisible" id="pop6"><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">25&nbsp;</sup><u class="person underline">西门</u><u class="person underline">彼得</u>正站着烤火，有人对他说：&ldquo;你不也是他的门徒吗？&rdquo;<u class="person underline">彼得</u>不承认，说：&ldquo;我不是。&rdquo;<sup class="versenum">26&nbsp;</sup>有大祭司的一个仆人，是<u class="person underline">彼得</u>削掉耳朵那人的亲属，说：&ldquo;我不是看见你同他在园子里吗？&rdquo;<sup class="versenum">27&nbsp;</sup><u class="person underline">彼得</u>又不承认。立时鸡就叫了。</span></span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></span></span></span></div>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN">由于在罗马人的治理之下，犹太人没有判决死刑的权力，耶稣从大祭司亚那的住所被押解到了罗马巡抚的总部，在巡抚彼拉多面前受审，耶稣对彼拉多澄清祂作王的性质，祂的国度不同于世界的国度，祂的国对罗马政府没有任何威胁<span>（<span class="popup-link" @click = "popUp('pop7')"> 约18:28-38</span></span><span lang="ZH-CN"><span>上）</span></span><span lang="ZH-CN">；</span><span> </span></span></span></span></span></span></span></span>

	<div class="popup invisible" id="pop7"><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span></span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">28&nbsp;</sup>众人将耶稣从<u class="person underline">该亚法</u>那里往衙门内解去，那时天还早。他们自己却不进衙门，恐怕染了污秽，不能吃逾越节的筵席。<sup class="versenum">29&nbsp;</sup><u class="person underline">彼拉多</u>就出来，到他们那里，说：&ldquo;你们告这人是为什么事呢？&rdquo;<sup class="versenum">30&nbsp;</sup>他们回答说：&ldquo;这人若不是作恶的，我们就不把他交给你。&rdquo;<sup class="versenum">31&nbsp;</sup><u class="person underline">彼拉多</u>说：&ldquo;你们自己带他去，按着你们的律法审问他吧！&rdquo;犹太人说：&ldquo;我们没有杀人的权柄。&rdquo;<sup class="versenum">32&nbsp;</sup>这要应验耶稣所说自己将要怎样死的话了。</span></span></span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> </span></span></span></span></span></span></span></span>

	<h3><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span>耶稣在彼拉多前受审</span></span></span></span></span></span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">33&nbsp;</sup><u class="person underline">彼拉多</u>又进了衙门，叫耶稣来，对他说：&ldquo;你是犹太人的王吗？&rdquo;<sup class="versenum">34&nbsp;</sup>耶稣回答说：&ldquo;这话是你自己说的，还是别人论我对你说的呢？&rdquo;<sup class="versenum">35&nbsp;</sup><u class="person underline">彼拉多</u>说：&ldquo;我岂是犹太人呢？你本国的人和祭司长把你交给我。你做了什么事呢？&rdquo;<sup class="versenum">36&nbsp;</sup>耶稣回答说：&ldquo;我的国不属这世界。我的国若属这世界，我的臣仆必要争战，使我不至于被交给犹太人。只是我的国不属这世界。&rdquo;<sup class="versenum">37&nbsp;</sup><u class="person underline">彼拉多</u>就对他说：&ldquo;这样，你是王吗？&rdquo;耶稣回答说：&ldquo;你说我是王。我为此而生，也为此来到世间，特为给真理作见证。凡属真理的人就听我的话。&rdquo;</span></span></span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> </span></span></span></span></span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">38&nbsp;</sup><u class="person underline">彼拉多</u>说：&ldquo;真理是什么呢？&rdquo;说了这话，又出来到犹太人那里，对他们说：&ldquo;我查不出他有什么罪来。 </span></span></span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></span></span></span></span></div>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN">彼拉多理解耶稣并不是政治上的危险人物，并非基于公正，而是不屑受到犹太领袖的左右，彼拉多有意开脱耶稣，然而最终屈服在群众的压力之下，基于政治上的考虑，将耶稣交给了犹太人去钉十字架，却释放了一个真正对罗马有威胁的叛乱份子巴拉巴<span>（<span class="popup-link" @click = "popUp('pop8')"> 约18:38-19:16</span></span><span lang="ZH-CN"><span>）。</span></span><span> </span></span></span></span></span></span></span></span></span>

	<div class="popup invisible" id="pop8"><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><!-- begin bible --> </span></span></span></span></span></span></span></span></span>

	<h3><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span>查不出耶稣有什么罪</span></span></span></span></span></span></span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">38&nbsp;</sup><u class="person underline">彼拉多</u>说：&ldquo;真理是什么呢？&rdquo;说了这话，又出来到犹太人那里，对他们说：&ldquo;我查不出他有什么罪来。<sup class="versenum">39&nbsp;</sup>但你们有个规矩，在逾越节要我给你们释放一个人，你们要我给你们释放犹太人的王吗？&rdquo;<sup class="versenum">40&nbsp;</sup>他们又喊着说：&ldquo;不要这人！要<u class="person underline">巴拉巴</u>！&rdquo;这<u class="person underline">巴拉巴</u>是个强盗。</span></span></span></span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> </span></span></span></span></span></span></span></span></span>

	<p><span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span><sup class="versenum">1 </sup>当下<u class="person underline">彼拉多</u>将耶稣鞭打了。<sup class="versenum">2&nbsp;</sup>兵丁用荆棘编做冠冕，戴在他头上，给他穿上紫袍，<sup class="versenum">3&nbsp;</sup>又挨近他，说：&ldquo;恭喜，犹太人的王啊！&rdquo;他们就用手掌打他。<sup class="versenum">4&nbsp;</sup><u class="person underline">彼拉多</u>又出来对众人说：&ldquo;我带他出来见你们，叫你们知道我查不出他有什么罪来。&rdquo;<sup class="versenum">5&nbsp;</sup>耶稣出来，戴着荆棘冠冕，穿着紫袍。<u class="person underline">彼拉多</u>对他们说：&ldquo;你们看，这个人！&rdquo;<sup class="versenum">6&nbsp;</sup>祭司长和差役看见他，就喊着说：&ldquo;钉他十字架！钉他十字架！&rdquo;<u class="person underline">彼拉多</u>说：&ldquo;你们自己把他钉十字架吧，我查不出他有什么罪来。&rdquo;<sup class="versenum">7&nbsp;</sup>犹太人回答说：&ldquo;我们有律法，按那律法，他是该死的！因他以自己为神的儿子。&rdquo;<sup class="versenum">8&nbsp;</sup><u class="person underline">彼拉多</u>听见这话，越发害怕，<sup class="versenum">9&nbsp;</sup>又进衙门，对耶稣说：&ldquo;你是哪里来的？&rdquo;耶稣却不回答。<sup class="versenum">10&nbsp;</sup><u class="person underline">彼拉多</u>说：&ldquo;你不对我说话吗？你岂不知我有权柄释放你，也有权柄把你钉十字架吗？&rdquo;<sup class="versenum">11&nbsp;</sup>耶稣回答说：&ldquo;若不是从上头赐给你的，你就毫无权柄办我。所以，把我交给你的那人罪更重了。&rdquo;<sup class="versenum">12&nbsp;</sup>从此<u class="person underline">彼拉多</u>想要释放耶稣，无奈犹太人喊着说：&ldquo;你若释放这个人，就不是恺撒的忠臣。凡以自己为王的，就是背叛恺撒了。&rdquo;<sup class="versenum">13&nbsp;</sup><u class="person underline">彼拉多</u>听见这话，就带耶稣出来，到了一个地方，名叫铺华石处，希伯来话叫厄巴大，就在那里坐堂。<sup class="versenum">14&nbsp;</sup>那日是预备逾越节的日子，约有午正。<u class="person underline">彼拉多</u>对犹太人说：&ldquo;看哪，这是你们的王！&rdquo;<sup class="versenum">15&nbsp;</sup>他们喊着说：&ldquo;除掉他！除掉他！钉他在十字架上！&rdquo;<u class="person underline">彼拉多</u>说：&ldquo;我可以把你们的王钉十字架吗？&rdquo;祭司长回答说：&ldquo;除了恺撒，我们没有王！&rdquo;<sup class="versenum">16&nbsp;</sup>于是，<u class="person underline">彼拉多</u>将耶稣交给他们去钉十字架。</span></span></span></span></span></span></span></span></span></p>
	<span><span><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span lang="ZH-CN"><span> <!-- end bible --> </span></span></span></span></span></span></span></span></span></div>
	</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《约翰福音19:13-30; 马太福音27:45-46》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 约翰福音19:13-30</button><div class="collapsed" id ="Text0">

<p><sup>13</sup>彼拉多听见这话，就带耶稣出来，到了一个地方，名叫铺华石处，希伯来话叫厄巴大，就在那里坐堂。<sup>14</sup>那日是预备逾越节的日子。约有午正，彼拉多对犹太人说：&ldquo;看哪，这是你们的王！&rdquo;<sup>15</sup>他们喊着说：&ldquo;除掉他！除掉他！钉他在十字架上！&rdquo;彼拉多说：&ldquo;我可以把你们的王钉十字架吗？&rdquo;祭司长回答说：&ldquo;除了凯撒，我们没有王！&rdquo;<sup>16</sup>于是，彼拉多将耶稣交给他们去钉十字架。</p>

<p><sup>17</sup>他们就把耶稣带了去。耶稣背着自己的十字架出来，到了一个地方，名叫髑髅地，希伯来话叫各各他。<sup>18</sup>他们就在那里钉他在十字架上，还有两个人和他一同钉着，一边一个，耶稣在中间。<sup>19</sup>彼拉多又用牌子写了一个名号，安在十字架上，写的是：&ldquo;犹太人的王，拿撒勒人耶稣。&rdquo;<sup>20</sup>有许多犹太人念这名号，因为耶稣被钉十字架的地方，与城相近，并且是用希伯来、罗马、希腊三样文字写的。<sup>21</sup>犹太人的祭司长就对彼拉多说：&ldquo;不要写&lsquo;犹太人的王&rsquo;，要写&lsquo;他自己说我是犹太人的王&rsquo;。&rdquo;<sup>22</sup>彼拉多说：&ldquo;我所写的，我已经写上了。&rdquo;<sup>23</sup>兵丁既然将耶稣钉在十字架上，就拿他的衣服分为四份，每兵一份；又拿他的里衣，这件里衣原来没有缝儿，是上下一片织成的。<sup>24</sup>他们就彼此说：&ldquo;我们不要撕开，只要拈阄，看谁得着。&rdquo;这要应验经上的话说：&ldquo;他们分了我的外衣，为我的里衣拈阄。&rdquo;兵丁果然做了这事。</p>

<p><sup>25</sup>站在耶稣十字架旁边的，有他母亲与他母亲的姊妹，并革罗罢的妻子马利亚和抹大拉的马利亚。<sup>26</sup>耶稣见母亲和他所爱的那门徒站在旁边，就对他母亲说：&ldquo;母亲（注：原文作&ldquo;妇人&rdquo;），看，你的儿子！&rdquo;<sup>27</sup>又对那门徒说：&ldquo;看，你的母亲！&rdquo;从此那门徒就接她到自己家里去了。<sup>28</sup>这事以后，耶稣知道各样的事已经成了，为要使经上的话应验，就说：&ldquo;我渴了。&rdquo;<sup>29</sup>有一个器皿盛满了醋，放在那里，他们就拿海绒蘸满了醋，绑在牛膝草上，送到他口。<sup>30</sup>耶稣尝（注：原文作&ldquo;受&rdquo;）了那醋，就说：&ldquo;成了！&rdquo;，便低下头，将灵魂交付　神了。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/249.mp4" type="button" class="external-movie">
         观看&nbsp;约翰福音19:13-30&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">读两遍 马太福音27:45-46</button><div class="collapsed" id ="Text1">

<p><sup>45</sup>从午正到申初，遍地都黑暗了。<sup>46</sup>约在申初，耶稣大声喊着说：&ldquo;以利！以利！拉马撒巴各大尼？&rdquo;就是说：&ldquo;我的　神！我的　神！为什么离弃我？&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/249-1.mp4" type="button" class="external-movie">
         观看&nbsp;马太福音27:45-46&nbsp;</button>
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
<div id="Summary0" class="summary"><h2>+ 小结</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<ul>
	<li class="nobreak-final-final">耶稣历经人的背叛、欺骗、不公平对待、击打、鞭打，最后与两名犯人一同被钉死在十字架上。祂在世的最后几个小时，以全然的人性受尽苦难。上帝把全世界的罪放在耶稣身上，使那无罪的代替有罪的。耶稣生平第一次与天父分离。因耶稣身上背负着全世界的罪，天父离弃耶稣，不理会祂。上帝的逾越节羔羊被杀流血，圣殿里的幔子裂开。耶稣是最后的献祭，使我们能到永活上帝的面前， 相信的人就能作上帝家中的儿女。祂舍了自己的生命，偿清我们的罪债，开了一条通往天父的道路。这是十字架上发生的奇妙交换：&ldquo;上帝使那无罪的，替我们成为罪，好叫我们在他里面成为上帝的义。&rdquo;（<span class="popup-link" @click = "popUp('pop9')"> 林后5:21</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">21&nbsp;</sup>神使那无罪的替我们成为罪，好叫我们在他里面成为神的义。</p>
	<!-- end bible --></div>
	</li>
</ul>

<div>
<ul>
	<li class="nobreak-final-final"><span><span><span lang="ZH-CN">（进深学习：<span class="popup-link" @click = "popUp('pop10')"> 路加福音23:26-49</span>； </span></span></span>

	<div class="popup invisible" id="pop10"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">26&nbsp;</sup>带耶稣去的时候，有一个古利奈人<u class="person underline">西门</u>从乡下来，他们就抓住他，把十字架搁在他身上，叫他背着跟随耶稣。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">许多人为耶稣号啕痛哭</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">27&nbsp;</sup>有许多百姓跟随耶稣，内中有好些妇女，妇女们为他号啕痛哭。<sup class="versenum">28&nbsp;</sup>耶稣转身对她们说：&ldquo;耶路撒冷的女子，不要为我哭，当为自己和自己的儿女哭。<sup class="versenum">29&nbsp;</sup>因为日子要到，人必说：&lsquo;不生育的和未曾怀胎的、未曾乳养婴孩的有福了！&rsquo;<sup class="versenum">30&nbsp;</sup>那时，人要向大山说&lsquo;倒在我们身上！&rsquo;，向小山说&lsquo;遮盖我们！&rsquo;。<sup class="versenum">31&nbsp;</sup>这些事既行在有汁水的树上，那枯干的树将来怎么样呢？&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">32&nbsp;</sup>又有两个犯人，和耶稣一同带来处死。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣被钉十字架</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">33&nbsp;</sup>到了一个地方，名叫髑髅地，就在那里把耶稣钉在十字架上，又钉了两个犯人，一个在左边，一个在右边。<sup class="versenum">34&nbsp;</sup>当下耶稣说：&ldquo;父啊，赦免他们！因为他们所做的他们不晓得。&rdquo;兵丁就拈阄分他的衣服。<sup class="versenum">35&nbsp;</sup>百姓站在那里观看。官府也嗤笑他，说：&ldquo;他救了别人，他若是基督，神所拣选的，可以救自己吧！&rdquo;<sup class="versenum">36&nbsp;</sup>兵丁也戏弄他，上前拿醋送给他喝，<sup class="versenum">37&nbsp;</sup>说：&ldquo;你若是犹太人的王，可以救自己吧！&rdquo;<sup class="versenum">38&nbsp;</sup>在耶稣以上有一个牌子，写着：&ldquo;这是犹太人的王。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">犯人求主记念</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">39&nbsp;</sup>那同钉的两个犯人，有一个讥诮他说：&ldquo;你不是基督吗？可以救自己和我们吧！&rdquo;<sup class="versenum">40&nbsp;</sup>那一个就应声责备他说：&ldquo;你既是一样受刑的，还不怕神吗？<sup class="versenum">41&nbsp;</sup>我们是应该的，因我们所受的与我们所做的相称，但这个人没有做过一件不好的事。&rdquo;<sup class="versenum">42&nbsp;</sup>就说：&ldquo;耶稣啊，你得国降临的时候，求你记念我！&rdquo;<sup class="versenum">43&nbsp;</sup>耶稣对他说：&ldquo;我实在告诉你：今日你要同我在乐园里了！&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">44&nbsp;</sup>那时约有午正，遍地都黑暗了，直到申初，<sup class="versenum">45&nbsp;</sup>日头变黑了，殿里的幔子从当中裂为两半。<sup class="versenum">46&nbsp;</sup>耶稣大声喊着说：&ldquo;父啊，我将我的灵魂交在你手里！&rdquo;说了这话，气就断了。<sup class="versenum">47&nbsp;</sup>百夫长看见所成的事，就归荣耀于神，说：&ldquo;这真是个义人！&rdquo;<sup class="versenum">48&nbsp;</sup>聚集观看的众人见了这所成的事，都捶着胸回去了。<sup class="versenum">49&nbsp;</sup>还有一切与耶稣熟识的人和从加利利跟着他来的妇女们，都远远地站着看这些事。</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop11')"> 马太福音27:27-56</span>； </span></span></span>

	<div class="popup invisible" id="pop11"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">戏弄耶稣</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">27&nbsp;</sup>巡抚的兵就把耶稣带进衙门，叫全营的兵都聚集在他那里。<sup class="versenum">28&nbsp;</sup>他们给他脱了衣服，穿上一件朱红色袍子，<sup class="versenum">29&nbsp;</sup>用荆棘编做冠冕，戴在他头上，拿一根苇子放在他右手里，跪在他面前，戏弄他，说：&ldquo;恭喜，犹太人的王啊！&rdquo;<sup class="versenum">30&nbsp;</sup>又吐唾沫在他脸上，拿苇子打他的头。<sup class="versenum">31&nbsp;</sup>戏弄完了，就给他脱了袍子，仍穿上他自己的衣服，带他出去，要钉十字架。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">32&nbsp;</sup>他们出来的时候，遇见一个古利奈人，名叫<u class="person underline">西门</u>，就勉强他同去，好背着耶稣的十字架。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣被钉十字架</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">33&nbsp;</sup>到了一个地方名叫各各他，意思就是&ldquo;髑髅地&rdquo;；<sup class="versenum">34&nbsp;</sup>兵丁拿苦胆调和的酒给耶稣喝。他尝了，就不肯喝。<sup class="versenum">35&nbsp;</sup>他们既将他钉在十字架上，就拈阄分他的衣服，<sup class="versenum">36&nbsp;</sup>又坐在那里看守他。<sup class="versenum">37&nbsp;</sup>在他头以上安一个牌子，写着他的罪状说：&ldquo;这是犹太人的王耶稣。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">讥诮主不能救自己</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">38&nbsp;</sup>当时，有两个强盗和他同钉十字架，一个在右边，一个在左边。<sup class="versenum">39&nbsp;</sup>从那里经过的人讥诮他，摇着头说：<sup class="versenum">40&nbsp;</sup>&ldquo;你这拆毁圣殿、三日又建造起来的，可以救自己吧！你如果是神的儿子，就从十字架上下来吧！&rdquo;<sup class="versenum">41&nbsp;</sup>祭司长和文士并长老也是这样戏弄他说：<sup class="versenum">42&nbsp;</sup>&ldquo;他救了别人，不能救自己。他是以色列的王，现在可以从十字架上下来，我们就信他！<sup class="versenum">43&nbsp;</sup>他倚靠神，神若喜悦他，现在可以救他！因为他曾说：&lsquo;我是神的儿子。&rsquo;&rdquo;<sup class="versenum">44&nbsp;</sup>那和他同钉的强盗也是这样地讥诮他。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">45&nbsp;</sup>从午正到申初，遍地都黑暗了。<sup class="versenum">46&nbsp;</sup>约在申初，耶稣大声喊着说：&ldquo;<u class="person underline">以利</u>！<u class="person underline">以利</u>！拉马撒巴各大尼？&rdquo;就是说：&ldquo;我的神！我的神！为什么离弃我？&rdquo;<sup class="versenum">47&nbsp;</sup>站在那里的人，有的听见就说：&ldquo;这个人呼叫<u class="person underline">以利亚</u>呢！&rdquo;<sup class="versenum">48&nbsp;</sup>内中有一个人赶紧跑去，拿海绒蘸满了醋，绑在苇子上，送给他喝。<sup class="versenum">49&nbsp;</sup>其余的人说：&ldquo;且等着，看<u class="person underline">以利亚</u>来救他不来。&rdquo;<sup class="versenum">50&nbsp;</sup>耶稣又大声喊叫，气就断了。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">51&nbsp;</sup>忽然，殿里的幔子从上到下裂为两半，地也震动，磐石也崩裂，<sup class="versenum">52&nbsp;</sup>坟墓也开了，已睡圣徒的身体多有起来的。<sup class="versenum">53&nbsp;</sup>到耶稣复活以后，他们从坟墓里出来，进了圣城，向许多人显现。<sup class="versenum">54&nbsp;</sup>百夫长和一同看守耶稣的人看见地震并所经历的事，就极其害怕，说：&ldquo;这真是神的儿子了！&rdquo;<sup class="versenum">55&nbsp;</sup>有好些妇女在那里远远地观看，她们是从加利利跟随耶稣来服侍他的。<sup class="versenum">56&nbsp;</sup>内中有抹大拉的<u class="person underline">马利亚</u>，又有<u class="person underline">雅各</u>和<u class="person underline">约西</u>的母亲<u class="person underline">马利亚</u>，并有<u class="person underline">西庇太</u>两个儿子的母亲。</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	<span><span><span lang="ZH-CN"><span class="popup-link" @click = "popUp('pop12')"> 马可福音15:16-41</span>） </span></span></span>

	<div class="popup invisible" id="pop12"><span><span><span lang="ZH-CN"><!-- begin bible --> </span></span></span>

	<h3><span><span><span lang="ZH-CN">戏弄耶稣</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">16&nbsp;</sup>兵丁把耶稣带进衙门院里，叫齐了全营的兵。<sup class="versenum">17&nbsp;</sup>他们给他穿上紫袍，又用荆棘编做冠冕给他戴上，<sup class="versenum">18&nbsp;</sup>就庆贺他说：&ldquo;恭喜，犹太人的王啊！&rdquo;<sup class="versenum">19&nbsp;</sup>又拿一根苇子打他的头，吐唾沫在他脸上，屈膝拜他。<sup class="versenum">20&nbsp;</sup>戏弄完了，就给他脱了紫袍，仍穿上他自己的衣服，带他出去，要钉十字架。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">耶稣被钉十字架</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">21&nbsp;</sup>有一个古利奈人<u class="person underline">西门</u>，就是<u class="person underline">亚历山大</u>和<u class="person underline">鲁孚</u>的父亲，从乡下来，经过那地方。他们就勉强他同去，好背着耶稣的十字架。<sup class="versenum">22&nbsp;</sup>他们带耶稣到了各各他地方（&ldquo;各各他&rdquo;翻出来就是&ldquo;髑髅地&rdquo;），<sup class="versenum">23&nbsp;</sup>拿没药调和的酒给耶稣，他却不受。<sup class="versenum">24&nbsp;</sup>于是将他钉在十字架上，拈阄分他的衣服，看是谁得什么。<sup class="versenum">25&nbsp;</sup>钉他在十字架上是巳初的时候。<sup class="versenum">26&nbsp;</sup>在上面有他的罪状，写的是：&ldquo;犹太人的王。&rdquo;<sup class="versenum">27&nbsp;</sup>他们又把两个强盗和他同钉十字架，一个在右边，一个在左边。</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<h3><span><span><span lang="ZH-CN">辱骂主不能救自己</span></span></span></h3>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">29&nbsp;</sup>从那里经过的人辱骂他，摇着头说：&ldquo;咳！你这拆毁圣殿、三日又建造起来的，<sup class="versenum">30&nbsp;</sup>可以救自己，从十字架上下来吧！&rdquo;<sup class="versenum">31&nbsp;</sup>祭司长和文士也是这样戏弄他，彼此说：&ldquo;他救了别人，不能救自己。<sup class="versenum">32&nbsp;</sup>以色列的王基督，现在可以从十字架上下来，叫我们看见就信了！&rdquo;那和他同钉的人也是讥诮他。<sup class="versenum">33&nbsp;</sup>从午正到申初，遍地都黑暗了。<sup class="versenum">34&nbsp;</sup>申初的时候，耶稣大声喊着说：&ldquo;以罗伊！以罗伊！拉马撒巴各大尼？&rdquo;（翻出来就是：&ldquo;我的神！我的神！为什么离弃我？&rdquo;）<sup class="versenum">35&nbsp;</sup>旁边站着的人，有的听见就说：&ldquo;看哪，他叫<u class="person underline">以利亚</u>呢！&rdquo;<sup class="versenum">36&nbsp;</sup>有一个人跑去，把海绒蘸满了醋，绑在苇子上，送给他喝，说：&ldquo;且等着，看<u class="person underline">以利亚</u>来不来把他取下。&rdquo;</span></span></span></p>
	<span><span><span lang="ZH-CN"> </span></span></span>

	<p><span><span><span lang="ZH-CN"><sup class="versenum">37&nbsp;</sup>耶稣大声喊叫，气就断了。<sup class="versenum">38&nbsp;</sup>殿里的幔子从上到下裂为两半。<sup class="versenum">39&nbsp;</sup>对面站着的百夫长看见耶稣这样喊叫断气，就说：&ldquo;这人真是神的儿子！&rdquo;<sup class="versenum">40&nbsp;</sup>还有些妇女远远地观看，内中有抹大拉的<u class="person underline">马利亚</u>，又有小<u class="person underline">雅各</u>和<u class="person underline">约西</u>的母亲<u class="person underline">马利亚</u>，并有<u class="person underline">撒罗米</u>，<sup class="versenum">41&nbsp;</sup>就是耶稣在加利利的时候，跟随他、服侍他的那些人；还有同耶稣上耶路撒冷的好些妇女在那里观看。</span></span></span></p>
	<span><span><span lang="ZH-CN"> <!-- end bible --> </span></span></span></div>
	</li>
</ul>
</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">约19:30</p>

<p class="forward bible"><sup>30</sup>耶稣尝（注：原文作&ldquo;受&rdquo;）了那醋，就说：&ldquo;成了！&rdquo;，便低下头，将灵魂交付　神了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣在十字架上所流的血洗净了我们一切的罪，使我们可以坦然无惧地来到神的面前，请分享十字架带给你的感动和对你的意义。有哪一首十字架的诗歌是你最喜爱的？为什么？</li>
	<li class="forward">你曾经是隐藏或无声的基督徒吗？当你思想到耶稣在十字架上的爱，会不会激励你勇敢地踏出一步，公开为主作见证？为什么？</li>
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
	<li class="forward">思想并写下若耶稣没有来到这世上、如果耶稣没有死，今天这个世界是怎样的？你会是怎样的？下周在小组分享。</li>
	<li class="forward">你会如何形容你的城市和国家？她们最需要的是什么？为什么？下周在小组分享，并讨论如何以爱心服事小区的行动。</li>
	<li class="forward">与一位弟兄或姐妹分享《被圣灵充满》，并听听他对主耶稣和圣灵的认识。</li>
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

<p>逾越节的羔羊主耶稣基督，谢谢祢为我们舍命流血。祢在十字架上经历人的背叛、不公对待、击打鞭伤，最后与两名犯人同钉，且死在十字架上。特别祢在世的最后几个小时，以全然的人性受尽一切苦难，因为世人的罪都归到祢一人身上，为要使那无罪的代替有罪的。就在那时，祢生平第一次经历与天父的分离，天父离弃祢，不理会祢。谢谢祢舍了自己的生命，偿清我们世人的一切罪债，并给我们开了一条通往天父的道路，使我们与天父和好。感谢祢为我们所承受的一切！感恩是奉主的圣名，阿们。</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->