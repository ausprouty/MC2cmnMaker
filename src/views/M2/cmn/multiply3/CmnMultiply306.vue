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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>神迹见证福音真——见证福音</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 徒2:46-47</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">46&nbsp;</sup>他们天天同心合意恒切地在殿里，且在家中掰饼，存着欢喜、诚实的心用饭，<sup class="versenum">47&nbsp;</sup>赞美神，得众民的喜爱。主将得救的人天天加给他们。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<ul>
	<li class="nobreak-final-final">在犹太人的观念中他们期待圣经旧约预言的弥赛亚出现，在彼得信息中强调被众人钉死的耶稣就是基督是弥赛亚。借着主耶稣的死和复活，证明了祂是弥赛亚，如今主耶稣被高举并坐在上帝的右边，祂是上帝的弥赛亚。故此听众皆需知道，耶稣是上帝立的基督。这位耶稣也将圣灵浇灌下来(<span class="popup-link" @click = "popUp('pop2')"> 徒2:33</span>)。

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">33&nbsp;</sup>他既被神的右手高举，又从父受了所应许的圣灵，就把你们所看见、所听见的浇灌下来。</p>
	<!-- end bible --></div>
	彼得说，犹太人不要的耶稣，上帝却将祂高举起来，这番话是否也使你感到扎心呢？耶稣是基督、是世人唯一的救主，你信吗？</li>
</ul>

<div class="lesson">
<p><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" /></p>

<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2>奉主差遣</h2>

<ul>
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">五旬节圣灵的降下为福音的扩展开创了一个新局面，得到圣灵装备的门徒大有能力，彼得第一场福音布道会即有三千人信主，门徒在耶路撒冷行了许多神迹奇事，令众人对神的大能起了敬畏的心。《使徒行传》一共记下了门徒所行的14个神迹，第三章记载了这卷书的第一个神迹，彼得所行的这个神迹以及紧接下来的宣讲吸引许多人归入主的名下。</p>

<p class="indent2">在前一章43节&ldquo;使徒又行了許多奇事神迹&rdquo;中，作者路加选择了一件很戏剧化的例子。从这个神迹中，我们可以看到使徒的敬虔祷告，同心医治，奉耶稣基督的名行事。也观察到这个生来瘸腿、靠人赈济的瘫子，本来只是指望得一时好处，却因耶稣基督的名，得着彻底医治，就&ldquo;走着、跳着，赞美神&rdquo;。这神迹带来百姓的希奇，后来也带来对使徒的逼迫。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《徒3:1-26》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 徒3:1-26</button><div class="collapsed" id ="Text0">

<p><sup>1</sup>申初祷告的时候，彼得、约翰上圣殿去。<sup>2</sup>有一个人，生来是瘸腿的，天天被人抬来，放在殿的一个门口（那门名叫美门），要求进殿的人周济。<sup>3</sup>他看见彼得、约翰将要进殿，就求他们周济。<sup>4</sup>彼得、约翰定睛看他。彼得说：&ldquo;你看我们！&rdquo;<sup>5</sup>那人就留意看他们，指望得著甚么。<sup>6</sup>彼得说：&ldquo;金银我都没有，只把我所有的给你。我奉拿撒勒人耶稣基督的名，叫你起来行走！&rdquo;<sup>7</sup>于是拉著他的右手，扶他起来。他的脚和踝子骨立刻健壮了，<sup>8</sup>就跳起来，站著，又行走；同他们进了殿，走著，跳著，赞美　神。<sup>9</sup>百姓都看见他行走，赞美　神，<sup>10</sup>认得他是那素常坐在殿的美门口求周济的，就因他所遇著的事，满心希奇惊讶。<sup>11</sup>那人正在称为所罗门的廊下，拉著彼得、约翰，众百姓一齐跑到他们那里，很觉希奇。</p>

<p><sup>12</sup>彼得看见，就对百姓说：&ldquo;以色列人哪，为甚么把这事当作希奇呢？为甚么定睛看我们，以为我们凭自己的能力和虔诚使这人行走呢？<sup>13</sup>亚伯拉罕、以撒、雅各的　神，就是我们列祖的　神，已经荣耀了他的仆人耶稣（注：&ldquo;仆人&rdquo;或作&ldquo;儿子&rdquo;）；你们却把他交付彼拉多。彼拉多定意要释放他，你们竟在彼拉多面前弃绝了他。<sup>14</sup>你们弃绝了那圣洁公义者，反求著释放一个凶手给你们。<sup>15</sup>你们杀了那生命的主，神却叫他从死里复活了，我们都是为这事作见证。<sup>16</sup>我们因信他的名，他的名便叫你们所看见、所认识的这人健壮了。正是他所赐的信心，叫这人在你们众人面前全然好了。</p>

<p><sup>17</sup>弟兄们，我晓得你们做这事是出于不知，你们的官长也是如此。<sup>18</sup>但　神曾藉众先知的口，预言基督将要受害，就这样应验了。<sup>19</sup>所以你们当悔改归正，使你们的罪得以涂抹；这样，那安舒的日子就必从主面前来到，<sup>20</sup>主也必差遣所预定给你们的基督耶稣降临。<sup>21</sup>天必留他，等到万物复兴的时候，就是　神从创世以来，藉著圣先知的口所说的。<sup>22</sup>摩西曾说：&lsquo;主　神要从你们弟兄中间给你们兴起一位先知像我，凡他向你们所说的，你们都要听从。<sup>23</sup>凡不听从那先知的，必要从民中全然灭绝。&rsquo;</p>

<p><sup>24</sup>从撒母耳以来的众先知，凡说预言的，也都说到这些日子。<sup>25</sup>你们是先知的子孙，也承受　神与你们祖宗所立的约，就是对亚伯拉罕说：&lsquo;地上万族都要因你的后裔得福。&rsquo;<sup>26</sup>神既兴起他的仆人（注：或作&ldquo;儿子&rdquo;），就先差他到你们这里来，赐福给你们，叫你们各人回转，离开罪恶。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply3/306.mp4" type="button" class="external-movie">
         观看徒3:1-26</button>
    <div class="collapsed"></div>



<ul class="up">
	<li class="up"><strong>探索与讨论</strong>

	<ul class="up">
		<li class="up">让你印象深刻的经文/部分是什么？为什么？</li>
		<li class="up">耶稣的门徒如何延续祂在地上的工作，带领人，使万民作主的门徒？</li>
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
	<li class="nobreak-final-final">这是耶稣升天后所行的第一个神迹。门徒活出耶稣的典范，不断倚靠圣灵及圣灵所赐的能力。这件事情发生在彼得和约翰日常进行的活动中。耶稣曾教导他们&ldquo;有求你的，就给他&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 太5:42</span>），
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">42&nbsp;</sup>有求你的，就给他；有向你借贷的，不可推辞。</p>
	<!-- end bible --></div>
	而他们过去也在短期的宣教之旅中得着能力医治病人（<span class="popup-link" @click = "popUp('pop4')"> 太10</span>章）。

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>耶稣差遣十二使徒</h3>

	<p><sup class="versenum">1 </sup>耶稣叫了十二个门徒来，给他们权柄，能赶逐污鬼，并医治各样的病症。</p>

	<p><sup class="versenum">2&nbsp;</sup>这十二使徒的名：头一个叫<u class="person underline">西门</u>，又称<u class="person underline">彼得</u>，还有他兄弟<u class="person underline">安得烈</u>，<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>，<sup class="versenum">3&nbsp;</sup><u class="person underline">腓力</u>和<u class="person underline">巴多罗买</u>，<u class="person underline">多马</u>和税吏<u class="person underline">马太</u>，<u class="person underline">亚勒腓</u>的儿子<u class="person underline">雅各</u>，和<u class="person underline">达太</u>，<sup class="versenum">4&nbsp;</sup>奋锐党的<u class="person underline">西门</u>，还有卖耶稣的加略人<u class="person underline">犹大</u>。</p>

	<p><sup class="versenum">5&nbsp;</sup>耶稣差这十二个人去，吩咐他们说：&ldquo;外邦人的路你们不要走，撒马利亚人的城你们不要进，<sup class="versenum">6&nbsp;</sup>宁可往以色列家迷失的羊那里去。<sup class="versenum">7&nbsp;</sup>随走随传，说&lsquo;天国近了&rsquo;。<sup class="versenum">8&nbsp;</sup>医治病人，叫死人复活，叫长大麻风的洁净，把鬼赶出去。你们白白地得来，也要白白地舍去。<sup class="versenum">9&nbsp;</sup>腰袋里不要带金银铜钱，<sup class="versenum">10&nbsp;</sup>行路不要带口袋，不要带两件褂子，也不要带鞋和拐杖，因为工人得饮食是应当的。<sup class="versenum">11&nbsp;</sup>你们无论进哪一城、哪一村，要打听那里谁是好人，就住在他家，直住到走的时候。<sup class="versenum">12&nbsp;</sup>进他家里去，要请他的安。<sup class="versenum">13&nbsp;</sup>那家若配得平安，你们所求的平安就必临到那家；若不配得，你们所求的平安仍归你们。<sup class="versenum">14&nbsp;</sup>凡不接待你们、不听你们话的人，你们离开那家或是那城的时候，就把脚上的尘土跺下去。<sup class="versenum">15&nbsp;</sup>我实在告诉你们：当审判的日子，所多玛和蛾摩拉所受的比那城还容易受呢！</p>

	<h3>警戒勉励</h3>

	<p><sup class="versenum">16&nbsp;</sup>&ldquo;我差你们去，如同羊进入狼群，所以你们要灵巧像蛇，驯良像鸽子。<sup class="versenum">17&nbsp;</sup>你们要防备人，因为他们要把你们交给公会，也要在会堂里鞭打你们，<sup class="versenum">18&nbsp;</sup>并且你们要为我的缘故被送到诸侯君王面前，对他们和外邦人作见证。<sup class="versenum">19&nbsp;</sup>你们被交的时候，不要思虑怎样说话或说什么话，到那时候必赐给你们当说的话；<sup class="versenum">20&nbsp;</sup>因为不是你们自己说的，乃是你们父的灵在你们里头说的。</p>

	<h3>服侍主之艰难</h3>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;弟兄要把弟兄，父亲要把儿子，送到死地；儿女要与父母为敌，害死他们。<sup class="versenum">22&nbsp;</sup>并且你们要为我的名被众人恨恶，唯有忍耐到底的，必然得救。<sup class="versenum">23&nbsp;</sup>有人在这城里逼迫你们，就逃到那城里去。我实在告诉你们：以色列的城邑你们还没有走遍，人子就到了。</p>

	<h3>学生不能高过先生</h3>

	<p><sup class="versenum">24&nbsp;</sup>&ldquo;学生不能高过先生，仆人不能高过主人。<sup class="versenum">25&nbsp;</sup>学生和先生一样，仆人和主人一样，也就罢了。人既骂家主是<u class="person underline">别西卜</u>，何况他的家人呢？<sup class="versenum">26&nbsp;</sup>所以不要怕他们，因为掩盖的事没有不露出来的，隐藏的事没有不被人知道的。<sup class="versenum">27&nbsp;</sup>我在暗中告诉你们的，你们要在明处说出来；你们耳中所听的，要在房上宣扬出来。<sup class="versenum">28&nbsp;</sup>那杀身体不能杀灵魂的，不要怕他们；唯有能把身体和灵魂都灭在地狱里的，正要怕他。<sup class="versenum">29&nbsp;</sup>两个麻雀不是卖一分银子吗？若是你们的父不许，一个也不能掉在地上。<sup class="versenum">30&nbsp;</sup>就是你们的头发，也都被数过了。<sup class="versenum">31&nbsp;</sup>所以，不要惧怕，你们比许多麻雀还贵重。<sup class="versenum">32&nbsp;</sup>凡在人面前认我的，我在我天上的父面前也必认他；<sup class="versenum">33&nbsp;</sup>凡在人面前不认我的，我在我天上的父面前也必不认他。</p>

	<p><sup class="versenum">34&nbsp;</sup>&ldquo;你们不要想我来是叫地上太平，我来并不是叫地上太平，乃是叫地上动刀兵。<sup class="versenum">35&nbsp;</sup>因为我来是叫&lsquo;人与父亲生疏，女儿与母亲生疏，媳妇与婆婆生疏；<sup class="versenum">36&nbsp;</sup>人的仇敌就是自己家里的人&rsquo;。<sup class="versenum">37&nbsp;</sup>爱父母过于爱我的，不配做我的门徒；爱儿女过于爱我的，不配做我的门徒；<sup class="versenum">38&nbsp;</sup>不背着他的十字架跟从我的，也不配做我的门徒。<sup class="versenum">39&nbsp;</sup>得着生命的，将要失丧生命；为我失丧生命的，将要得着生命。</p>

	<p><sup class="versenum">40&nbsp;</sup>&ldquo;人接待你们，就是接待我；接待我，就是接待那差我来的。<sup class="versenum">41&nbsp;</sup>人因为先知的名接待先知，必得先知所得的赏赐；人因为义人的名接待义人，必得义人所得的赏赐。<sup class="versenum">42&nbsp;</sup>无论何人，因为门徒的名，只把一杯凉水给这小子里的一个喝，我实在告诉你们：这人不能不得赏赐。&rdquo;</p>
	<!-- end bible --></div>
	彼得立刻说出医治是耶稣的工作，祂已复活，永远活着，现在就在这里。这个神迹给了彼得和约翰在圣殿向众人作见证的机会。我们需要随时准备好顺从圣灵的催促，向耶稣已预备好的人作见证。</li>
</ul>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">徒3:16</p>

<p class="forward bible">我们因信他的名，他的名便叫你们所看见、所认识的这人健壮了。正是他所赐的信心，叫这人在你们众人面前全然好了。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">在讲道中彼得指出耶稣是谁？你是如何理解彼得所宣讲的这位耶稣基督？（你对彼得所传讲的福音和基督，有什么认识？）</li>
	<li class="forward">是否每个基督徒都可以奉耶稣的名使人病得医治？神迹奇事的目的为何？ &ldquo;奉主的名&rdquo;的意思又是什么？这对我们有什么意义呢？</li>
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
	<li class="forward">你是如何对待那些需要帮助的人呢? 操练本周主动帮助一位有需要的人，主动问&ldquo;奇妙问题&rdquo;，并为对方祷告和实际满足他的需要。</li>
	<li class="forward">与教会牧者和弟兄姐妹留心教会四围的需要，采取主动，关心社区，并用爱心行动关怀有需要的人。</li>
	<li class="forward">为你建立的核心门徒祷告，求神保守他们常在主耶稣里面，生命满有主的仁爱、喜乐和谦卑，放胆讲说神的作为和救恩，并经历神话语的改变。</li>
	<li class="forward">为所住的城市祷告，求神赐福这地，叫这地的人回转，离开罪恶。让这地成为喜乐之地和福音的出口。</li>
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

<p class="forward">天父啊，我们感谢祢，纵然我们世人一再悖逆和对抗祢，祢依旧用祢永不改变的爱来爱我们。感谢祢，让我们看到神迹因耶稣的名行出来，让人敬畏祢，并将荣耀归给祢。我们求荣耀的父神将那赐人智慧和启示的灵赏给我们，使我们真知道祢，并且照明我们心中的眼睛，使我们知道祢的恩召有何等指望；祢在圣徒中得的基业有何等丰盛的荣耀；并知道祢向我们这信的人所显的能力是何等浩大。求祢在各地宣教士的身上显明祢的心意，神迹奇事与复活的大能常常伴随他们！感恩赞美奉主耶稣的名，阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->