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
                        <div class="chapter_number ltr"><h1>17.</h1></div>
                        <div class="chapter_title ltr"><h1>得人渔夫</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 太4:17</span>
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>从那时候，耶稣就传起道来，说：&ldquo;天国近了，你们应当悔改！&rdquo;</p>
	<!-- end bible --></div>
	）</li>
</ul>

<h2 class="back">天父心意</h2>

<p>作者马可着重于耶稣为&ldquo;仆人的服事&rdquo;。透过《马可福音》，我们可以跟随耶稣，与祂同行，看祂的手势，听祂讲话的谈吐，更深认识祂，学像祂，并活出祂的样式。主耶稣三年半的服事彰显着&ldquo;天国文化&rdquo;并影响着那世代。今天祂也要在我们的服事和生活中展现一个&ldquo;创造文化并影响世代&rdquo;的生命，吸引人归向祂，让人也得着神所赐的救恩。让我们一起来经历神要在我们当中所要成就的一切！</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
</ul>

<p class="indent2">《马可福音》注重耶稣的工作，所以没有记载耶稣的家谱，出生和童年的事迹。一开始就写耶稣领受圣灵，接受试探之后，得着托付和能力，&ldquo;立刻&rdquo;开始传讲天国的福音，劝人悔改。接着耶稣拣选门徒，为了预备传扬福音。祂拣选西门和他兄弟安得烈，接着呼召西庇太的儿子雅各和他的兄弟约翰。最后彼得，雅各，约翰成了耶稣最亲密的门徒，也成为传扬福音最主要的使徒。</p>

<ul class="up">
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《马可福音1:16-20》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 马可福音1:16-20</button><div class="collapsed" id ="Text0">

<p><sup>16</sup>耶稣顺着加利利的海边走，看见西门和西门的兄弟安得烈在海里撒网，他们本是打鱼的。<sup>17</sup>耶稣对他们说：&ldquo;来跟从我！我要叫你们得人如得鱼一样。&rdquo;<sup>18</sup>他们就立刻舍了网，跟从了他。<sup>19</sup>耶稣稍往前走，又见西庇太的儿子雅各和雅各的兄弟约翰在船上补网。<sup>20</sup>耶稣随即招呼他们，他们就把父亲西庇太和雇工人留在船上，跟从耶稣去了。</p>

<p></p>

</div>


<button id="MC2/cmn/video/multiply2/217.mp4" type="button" class="external-movie">
         观看&nbsp;马可福音1:16-20&nbsp;</button>
    <div class="collapsed"></div>

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
<div id="Summary0" class="summary"><ul>
	<li class="up"><strong>+ 小结</strong></li>
</ul></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p class="up">耶稣大约一年半前开始传道。现在祂要寻找、正式呼召某些门徒更深委身，叫他们得人如得鱼。这些人之前就是耶稣的跟随者，而现在的呼召是要学习成为得人的倍增门徒。这呼召对他们和家人来说是极大的荣幸，他们高兴地舍下一切跟从耶稣。在这之前，耶稣已经透过分享天国的信息并和他们同住，来向他们示范如何使人成为门徒的过程。</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">可1:17</p>

<p class="forward bible">耶稣对他们说：&ldquo;来跟从我！我要叫你们得人如得鱼一样。&rdquo;<sup>18</sup>他们就立刻舍了网，跟从了他。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣呼召门徒时，门徒的反应给我们什么提醒？在现实生活中，你知道一些关于上帝呼召人的例子吗？比如你自己或弟兄姊妹身上。他们的反应如何？</li>
	<li class="forward">从信主到现在，生活哪一方面要顺服神对你来说是一个挑战，为什么？</li>
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
	<li class="forward">本周阅读<span class="popup-link" @click = "popUp('pop2')"> 马可福音1:14-9:50</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup><u class="person underline">约翰</u>下监以后，耶稣来到加利利，宣传神的福音，<sup class="versenum">15&nbsp;</sup>说：&ldquo;日期满了，神的国近了！你们当悔改，信福音！&rdquo;</p>

	<p><sup class="versenum">16&nbsp;</sup>耶稣顺着加利利的海边走，看见<u class="person underline">西门</u>和<u class="person underline">西门</u>的兄弟<u class="person underline">安得烈</u>在海里撒网，他们本是打鱼的。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;<sup class="versenum">18&nbsp;</sup>他们就立刻舍了网，跟从了他。<sup class="versenum">19&nbsp;</sup>耶稣稍往前走，又见<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>在船上补网，<sup class="versenum">20&nbsp;</sup>耶稣随即招呼他们。他们就把父亲<u class="person underline">西庇太</u>和雇工人留在船上，跟从耶稣去了。</p>

	<h3>在迦百农赶逐污鬼</h3>

	<p><sup class="versenum">21&nbsp;</sup>到了迦百农，耶稣就在安息日进了会堂教训人。<sup class="versenum">22&nbsp;</sup>众人很稀奇他的教训，因为他教训他们正像有权柄的人，不像文士。<sup class="versenum">23&nbsp;</sup>在会堂里有一个人被污鬼附着，他喊叫说：<sup class="versenum">24&nbsp;</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干？你来灭我们吗？我知道你是谁，乃是神的圣者！&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣责备他说：&ldquo;不要作声！从这人身上出来吧！&rdquo;<sup class="versenum">26&nbsp;</sup>污鬼叫那人抽了一阵风，大声喊叫，就出来了。<sup class="versenum">27&nbsp;</sup>众人都惊讶，以致彼此对问说：&ldquo;这是什么事？是个新道理啊！他用权柄吩咐污鬼，连污鬼也听从了他。&rdquo;<sup class="versenum">28&nbsp;</sup>耶稣的名声就传遍了加利利的四方。</p>

	<h3>医西门岳母</h3>

	<p><sup class="versenum">29&nbsp;</sup>他们一出会堂，就同着<u class="person underline">雅各</u>、<u class="person underline">约翰</u>进了<u class="person underline">西门</u>和<u class="person underline">安得烈</u>的家。<sup class="versenum">30&nbsp;</sup><u class="person underline">西门</u>的岳母正害热病躺着，就有人告诉耶稣。<sup class="versenum">31&nbsp;</sup>耶稣进前拉着她的手，扶她起来，热就退了，她就服侍他们。</p>

	<p><sup class="versenum">32&nbsp;</sup>天晚日落的时候，有人带着一切害病的和被鬼附的来到耶稣跟前。<sup class="versenum">33&nbsp;</sup>合城的人都聚集在门前。<sup class="versenum">34&nbsp;</sup>耶稣治好了许多害各样病的人，又赶出许多鬼，不许鬼说话，因为鬼认识他。</p>

	<h3>到旷野祷告</h3>

	<p><sup class="versenum">35&nbsp;</sup>次日早晨，天未亮的时候，耶稣起来到旷野地方去，在那里祷告。<sup class="versenum">36&nbsp;</sup><u class="person underline">西门</u>和同伴追了他去，<sup class="versenum">37&nbsp;</sup>遇见了就对他说：&ldquo;众人都找你。&rdquo;<sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup class="versenum">39&nbsp;</sup>于是在加利利全地，进了会堂，传道、赶鬼。</p>

	<h3>洁净长大麻风的</h3>

	<p><sup class="versenum">40&nbsp;</sup>有一个长大麻风的来求耶稣，向他跪下，说：&ldquo;你若肯，必能叫我洁净了。&rdquo;<sup class="versenum">41&nbsp;</sup>耶稣动了慈心，就伸手摸他，说：&ldquo;我肯，你洁净了吧！&rdquo;<sup class="versenum">42&nbsp;</sup>大麻风即时离开他，他就洁净了。<sup class="versenum">43&nbsp;</sup>耶稣严严地嘱咐他，就打发他走，<sup class="versenum">44&nbsp;</sup>对他说：&ldquo;你要谨慎，什么话都不可告诉人，只要去把身体给祭司察看，又因为你洁净了，献上<u class="person underline">摩西</u>所吩咐的礼物，对众人做证据。&rdquo;<sup class="versenum">45&nbsp;</sup>那人出去，倒说许多的话，把这件事传扬开了，叫耶稣以后不得再明明地进城，只好在外边旷野地方。人从各处都就了他来。</p>

	<h3>医治瘫子</h3>

	<p><sup class="versenum">1 </sup>过了些日子，耶稣又进了迦百农。人听见他在房子里，<sup class="versenum">2&nbsp;</sup>就有许多人聚集，甚至连门前都没有空地。耶稣就对他们讲道。<sup class="versenum">3&nbsp;</sup>有人带着一个瘫子来见耶稣，是用四个人抬来的。<sup class="versenum">4&nbsp;</sup>因为人多，不得近前，就把耶稣所在的房子拆了房顶。既拆通了，就把瘫子连所躺卧的褥子都缒下来。<sup class="versenum">5&nbsp;</sup>耶稣见他们的信心，就对瘫子说：&ldquo;小子，你的罪赦了！&rdquo;<sup class="versenum">6&nbsp;</sup>有几个文士坐在那里，心里议论说：<sup class="versenum">7&nbsp;</sup>&ldquo;这个人为什么这样说呢？他说僭妄的话了！除了神以外，谁能赦罪呢？&rdquo;<sup class="versenum">8&nbsp;</sup>耶稣心中知道他们心里这样议论，就说：&ldquo;你们心里为什么这样议论呢？<sup class="versenum">9&nbsp;</sup>或对瘫子说&lsquo;你的罪赦了&rsquo;，或说&lsquo;起来，拿你的褥子行走&rsquo;，哪一样容易呢？<sup class="versenum">10&nbsp;</sup>但要叫你们知道，人子在地上有赦罪的权柄。&rdquo;就对瘫子说：<sup class="versenum">11&nbsp;</sup>&ldquo;我吩咐你，起来，拿你的褥子回家去吧！&rdquo;<sup class="versenum">12&nbsp;</sup>那人就起来，立刻拿着褥子，当众人面前出去了。以致众人都惊奇，归荣耀于神，说：&ldquo;我们从来没有见过这样的事！&rdquo;</p>

	<h3>耶稣召利未</h3>

	<p><sup class="versenum">13&nbsp;</sup>耶稣又出到海边去，众人都就了他来，他便教训他们。<sup class="versenum">14&nbsp;</sup>耶稣经过的时候，看见<u class="person underline">亚勒腓</u>的儿子<u class="person underline">利未</u>坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;他就起来跟从了耶稣。<sup class="versenum">15&nbsp;</sup>耶稣在<u class="person underline">利未</u>家里坐席的时候，有好些税吏和罪人与耶稣并门徒一同坐席，因为这样的人多，他们也跟随耶稣。<sup class="versenum">16&nbsp;</sup>法利赛人中的文士看见耶稣和罪人并税吏一同吃饭，就对他门徒说：&ldquo;他和税吏并罪人一同吃喝吗？&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣听见，就对他们说：&ldquo;康健的人用不着医生，有病的人才用得着。我来本不是召义人，乃是召罪人。&rdquo;</p>

	<h3>论禁食</h3>

	<p><sup class="versenum">18&nbsp;</sup>当下，<u class="person underline">约翰</u>的门徒和法利赛人禁食。他们来问耶稣说：&ldquo;<u class="person underline">约翰</u>的门徒和法利赛人的门徒禁食，你的门徒倒不禁食，这是为什么呢？&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣对他们说：&ldquo;新郎和陪伴之人同在的时候，陪伴之人岂能禁食呢？新郎还同在，他们不能禁食。<sup class="versenum">20&nbsp;</sup>但日子将到，新郎要离开他们，那日他们就要禁食。</p>

	<h3>新旧难合的比喻</h3>

	<p><sup class="versenum">21&nbsp;</sup>&ldquo;没有人把新布缝在旧衣服上，恐怕所补上的新布带坏了旧衣服，破的就更大了。<sup class="versenum">22&nbsp;</sup>也没有人把新酒装在旧皮袋里，恐怕酒把皮袋裂开，酒和皮袋就都坏了。唯把新酒装在新皮袋里。&rdquo;</p>

	<h3>人子是安息日的主</h3>

	<p><sup class="versenum">23&nbsp;</sup>耶稣当安息日从麦地经过，他门徒行路的时候掐了麦穗。<sup class="versenum">24&nbsp;</sup>法利赛人对耶稣说：&ldquo;看哪，他们在安息日为什么做不可做的事呢？&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣对他们说：&ldquo;经上记着<u class="person underline">大卫</u>和跟从他的人缺乏、饥饿之时所做的事，你们没有念过吗？<sup class="versenum">26&nbsp;</sup>他当<u class="person underline">亚比亚他</u>做大祭司的时候，怎么进了神的殿，吃了陈设饼，又给跟从他的人吃？这饼除了祭司以外，人都不可吃。&rdquo;<sup class="versenum">27&nbsp;</sup>又对他们说：&ldquo;安息日是为人设立的，人不是为安息日设立的。<sup class="versenum">28&nbsp;</sup>所以，人子也是安息日的主。&rdquo;</p>

	<h3>在安息日治病</h3>

	<p><sup class="versenum">1 </sup>耶稣又进了会堂。在那里有一个人枯干了一只手。<sup class="versenum">2&nbsp;</sup>众人窥探耶稣在安息日医治不医治，意思是要控告耶稣。<sup class="versenum">3&nbsp;</sup>耶稣对那枯干一只手的人说：&ldquo;起来，站在当中！&rdquo;<sup class="versenum">4&nbsp;</sup>又问众人说：&ldquo;在安息日行善、行恶，救命、害命，哪样是可以的呢？&rdquo;他们都不作声。<sup class="versenum">5&nbsp;</sup>耶稣怒目周围看他们，忧愁他们的心刚硬，就对那人说：&ldquo;伸出手来！&rdquo;他把手一伸，手就复了原。<sup class="versenum">6&nbsp;</sup>法利赛人出去，同<u class="person underline">希律</u>一党的人商议怎样可以除灭耶稣。</p>

	<p><sup class="versenum">7&nbsp;</sup>耶稣和门徒退到海边去，有许多人从加利利跟随他。<sup class="versenum">8&nbsp;</sup>还有许多人听见他所做的大事，就从犹太、耶路撒冷、以土买、约旦河外，并推罗、西顿的四方来到他那里。<sup class="versenum">9&nbsp;</sup>他因为人多，就吩咐门徒叫一只小船伺候着，免得众人拥挤他。<sup class="versenum">10&nbsp;</sup>他治好了许多人，所以凡有灾病的都挤进来要摸他。<sup class="versenum">11&nbsp;</sup>污鬼无论何时看见他，就俯伏在他面前，喊着说：&ldquo;你是神的儿子！&rdquo;<sup class="versenum">12&nbsp;</sup>耶稣再三地嘱咐他们，不要把他显露出来。</p>

	<h3>耶稣设立十二门徒</h3>

	<p><sup class="versenum">13&nbsp;</sup>耶稣上了山，随自己的意思叫人来，他们便来到他那里。<sup class="versenum">14&nbsp;</sup>他就设立十二个人，要他们常和自己同在，也要差他们去传道，<sup class="versenum">15&nbsp;</sup>并给他们权柄赶鬼。<sup class="versenum">16&nbsp;</sup>这十二个人有<u class="person underline">西门</u>，耶稣又给他起名叫<u class="person underline">彼得</u>；<sup class="versenum">17&nbsp;</sup>还有<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>，又给这两个人起名叫<u class="person underline">半尼其</u>，就是雷子的意思；<sup class="versenum">18&nbsp;</sup>又有<u class="person underline">安得烈</u>，<u class="person underline">腓力</u>，<u class="person underline">巴多罗买</u>，<u class="person underline">马太</u>，<u class="person underline">多马</u>，<u class="person underline">亚勒腓</u>的儿子<u class="person underline">雅各</u>，和<u class="person underline">达太</u>，并奋锐党的<u class="person underline">西门</u>；<sup class="versenum">19&nbsp;</sup>还有卖耶稣的加略人<u class="person underline">犹大</u>。</p>

	<h3>驳倒文士的谗言</h3>

	<p><sup class="versenum">20&nbsp;</sup>耶稣进了一个屋子，众人又聚集，甚至他连饭也顾不得吃。<sup class="versenum">21&nbsp;</sup>耶稣的亲属听见，就出来要拉住他，因为他们说他癫狂了。<sup class="versenum">22&nbsp;</sup>从耶路撒冷下来的文士说：&ldquo;他是被<u class="person underline">别西卜</u>附着。&rdquo;又说：&ldquo;他是靠着鬼王赶鬼。&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣叫他们来，用比喻对他们说：&ldquo;<u class="person underline">撒旦</u>怎能赶出<u class="person underline">撒旦</u>呢？<sup class="versenum">24&nbsp;</sup>若一国自相纷争，那国就站立不住；<sup class="versenum">25&nbsp;</sup>若一家自相纷争，那家就站立不住。<sup class="versenum">26&nbsp;</sup>若<u class="person underline">撒旦</u>自相攻打纷争，他就站立不住，必要灭亡。<sup class="versenum">27&nbsp;</sup>没有人能进壮士家里抢夺他的家具，必先捆住那壮士，才可以抢夺他的家。</p>

	<h3>亵渎圣灵永不赦免</h3>

	<p><sup class="versenum">28&nbsp;</sup>&ldquo;我实在告诉你们：世人一切的罪和一切亵渎的话都可得赦免，<sup class="versenum">29&nbsp;</sup>凡亵渎圣灵的，却永不得赦免，乃要担当永远的罪。&rdquo;<sup class="versenum">30&nbsp;</sup>这话是因为他们说他是被污鬼附着的。</p>

	<h3>信者皆为亲属</h3>

	<p><sup class="versenum">31&nbsp;</sup>当下，耶稣的母亲和弟兄来，站在外边，打发人去叫他。<sup class="versenum">32&nbsp;</sup>有许多人在耶稣周围坐着，他们就告诉他说：&ldquo;看哪，你母亲和你弟兄在外边找你。&rdquo;<sup class="versenum">33&nbsp;</sup>耶稣回答说：&ldquo;谁是我的母亲？谁是我的弟兄？&rdquo;<sup class="versenum">34&nbsp;</sup>就四面观看那周围坐着的人，说：&ldquo;看哪，我的母亲，我的弟兄！<sup class="versenum">35&nbsp;</sup>凡遵行神旨意的人，就是我的弟兄、姐妹和母亲了。&rdquo;</p>

	<h3>撒种的比喻</h3>

	<p><sup class="versenum">1 </sup>耶稣又在海边教训人。有许多人到他那里聚集，他只得上船坐下。船在海里，众人都靠近海，站在岸上。<sup class="versenum">2&nbsp;</sup>耶稣就用比喻教训他们许多道理。在教训之间，对他们说：<sup class="versenum">3&nbsp;</sup>&ldquo;你们听啊！有一个撒种的出去撒种。<sup class="versenum">4&nbsp;</sup>撒的时候，有落在路旁的，飞鸟来吃尽了。<sup class="versenum">5&nbsp;</sup>有落在土浅石头地上的，土既不深，发苗最快，<sup class="versenum">6&nbsp;</sup>日头出来一晒，因为没有根，就枯干了。<sup class="versenum">7&nbsp;</sup>有落在荆棘里的，荆棘长起来，把它挤住了，就不结实。<sup class="versenum">8&nbsp;</sup>又有落在好土里的，就发生长大，结实有三十倍的，有六十倍的，有一百倍的。&rdquo;<sup class="versenum">9&nbsp;</sup>又说：&ldquo;有耳可听的，就应当听！&rdquo;</p>

	<h3>用比喻的因由</h3>

	<p><sup class="versenum">10&nbsp;</sup>无人的时候，跟随耶稣的人和十二个门徒问他这比喻的意思。<sup class="versenum">11&nbsp;</sup>耶稣对他们说：&ldquo;神国的奥秘只叫你们知道，若是对外人讲，凡事就用比喻，<sup class="versenum">12&nbsp;</sup>叫&lsquo;他们看是看见，却不晓得，听是听见，却不明白；恐怕他们回转过来，就得赦免&rsquo;。&rdquo;</p>

	<h3>解明撒种的比喻</h3>

	<p><sup class="versenum">13&nbsp;</sup>又对他们说：&ldquo;你们不明白这比喻吗？这样怎能明白一切的比喻呢？<sup class="versenum">14&nbsp;</sup>撒种之人所撒的就是道。<sup class="versenum">15&nbsp;</sup>那撒在路旁的，就是人听了道，<u class="person underline">撒旦</u>立刻来，把撒在他心里的道夺了去。<sup class="versenum">16&nbsp;</sup>那撒在石头地上的，就是人听了道，立刻欢喜领受，<sup class="versenum">17&nbsp;</sup>但他心里没有根，不过是暂时的，及至为道遭了患难，或是受了逼迫，立刻就跌倒了。<sup class="versenum">18&nbsp;</sup>还有那撒在荆棘里的，就是人听了道，<sup class="versenum">19&nbsp;</sup>后来有世上的思虑、钱财的迷惑和别样的私欲进来，把道挤住了，就不能结实。<sup class="versenum">20&nbsp;</sup>那撒在好地上的，就是人听道又领受，并且结实，有三十倍的，有六十倍的，有一百倍的。&rdquo;</p>

	<p><sup class="versenum">21&nbsp;</sup>耶稣又对他们说：&ldquo;人拿灯来，岂是要放在斗底下、床底下，不放在灯台上吗？<sup class="versenum">22&nbsp;</sup>因为掩藏的事没有不显出来的，隐瞒的事没有不露出来的。<sup class="versenum">23&nbsp;</sup>有耳可听的，就应当听！&rdquo;<sup class="versenum">24&nbsp;</sup>又说：&ldquo;你们所听的要留心。你们用什么量器量给人，也必用什么量器量给你们，并且要多给你们。<sup class="versenum">25&nbsp;</sup>因为有的，还要给他；没有的，连他所有的也要夺去。&rdquo;</p>

	<p><sup class="versenum">26&nbsp;</sup>又说：&ldquo;神的国如同人把种撒在地上，<sup class="versenum">27&nbsp;</sup>黑夜睡觉，白日起来，这种就发芽渐长，那人却不晓得如何这样。<sup class="versenum">28&nbsp;</sup>地生五谷是出于自然的，先发苗，后长穗，再后穗上结成饱满的子粒。<sup class="versenum">29&nbsp;</sup>谷既熟了，就用镰刀去割，因为收成的时候到了。&rdquo;</p>

	<h3>芥菜种的比喻</h3>

	<p><sup class="versenum">30&nbsp;</sup>又说：&ldquo;神的国，我们可用什么比较呢？可用什么比喻表明呢？<sup class="versenum">31&nbsp;</sup>好像一粒芥菜种，种在地里的时候，虽比地上的百种都小，<sup class="versenum">32&nbsp;</sup>但种上以后，就长起来，比各样的菜都大，又长出大枝来，甚至天上的飞鸟可以宿在它的荫下。&rdquo;</p>

	<p><sup class="versenum">33&nbsp;</sup>耶稣用许多这样的比喻，照他们所能听的，对他们讲道。<sup class="versenum">34&nbsp;</sup>若不用比喻，就不对他们讲；没有人的时候，就把一切的道讲给门徒听。</p>

	<h3>平静风和海</h3>

	<p><sup class="versenum">35&nbsp;</sup>当那天晚上，耶稣对门徒说：&ldquo;我们渡到那边去吧。&rdquo;<sup class="versenum">36&nbsp;</sup>门徒离开众人，耶稣仍在船上，他们就把他一同带去；也有别的船和他同行。<sup class="versenum">37&nbsp;</sup>忽然起了暴风，波浪打入船内，甚至船要满了水。<sup class="versenum">38&nbsp;</sup>耶稣在船尾上枕着枕头睡觉。门徒叫醒了他，说：&ldquo;夫子！我们丧命，你不顾吗？&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣醒了，斥责风，向海说：&ldquo;住了吧！静了吧！&rdquo;风就止住，大大地平静了。<sup class="versenum">40&nbsp;</sup>耶稣对他们说：&ldquo;为什么胆怯？你们还没有信心吗？&rdquo;<sup class="versenum">41&nbsp;</sup>他们就大大地惧怕，彼此说：&ldquo;这到底是谁？连风和海也听从他了！&rdquo;</p>

	<h3>鬼入猪群</h3>

	<p><sup class="versenum">1 </sup>他们来到海那边格拉森人的地方。<sup class="versenum">2&nbsp;</sup>耶稣一下船，就有一个被污鬼附着的人从坟茔里出来迎着他。<sup class="versenum">3&nbsp;</sup>那人常住在坟茔里，没有人能捆住他，就是用铁链也不能。<sup class="versenum">4&nbsp;</sup>因为人屡次用脚镣和铁链捆锁他，铁链竟被他挣断了，脚镣也被他弄碎了。总没有人能制伏他。<sup class="versenum">5&nbsp;</sup>他昼夜常在坟茔里和山中喊叫，又用石头砍自己。<sup class="versenum">6&nbsp;</sup>他远远地看见耶稣，就跑过去拜他，<sup class="versenum">7&nbsp;</sup>大声呼叫说：&ldquo;至高神的儿子耶稣，我与你有什么相干？我指着神恳求你，不要叫我受苦！&rdquo;<sup class="versenum">8&nbsp;</sup>是因耶稣曾吩咐他说：&ldquo;污鬼啊，从这人身上出来吧！&rdquo;<sup class="versenum">9&nbsp;</sup>耶稣问他说：&ldquo;你名叫什么？&rdquo;回答说：&ldquo;我名叫&lsquo;群&rsquo;，因为我们多的缘故。&rdquo;<sup class="versenum">10&nbsp;</sup>就再三地求耶稣，不要叫他们离开那地方。<sup class="versenum">11&nbsp;</sup>在那里山坡上，有一大群猪吃食。<sup class="versenum">12&nbsp;</sup>鬼就央求耶稣，说：&ldquo;求你打发我们往猪群里，附着猪去。&rdquo;<sup class="versenum">13&nbsp;</sup>耶稣准了他们，污鬼就出来，进入猪里去。于是那群猪闯下山崖，投在海里淹死了。猪的数目约有二千。<sup class="versenum">14&nbsp;</sup>放猪的就逃跑了，去告诉城里和乡下的人。众人就来，要看是什么事。<sup class="versenum">15&nbsp;</sup>他们来到耶稣那里，看见那被鬼附着的人，就是从前被群鬼所附的，坐着，穿上衣服，心里明白过来，他们就害怕。<sup class="versenum">16&nbsp;</sup>看见这事的，便将鬼附之人所遇见的和那群猪的事都告诉了众人。<sup class="versenum">17&nbsp;</sup>众人就央求耶稣离开他们的境界。<sup class="versenum">18&nbsp;</sup>耶稣上船的时候，那从前被鬼附着的人恳求和耶稣同在。<sup class="versenum">19&nbsp;</sup>耶稣不许，却对他说：&ldquo;你回家去到你的亲属那里，将主为你所做的是何等大的事，是怎样怜悯你，都告诉他们。&rdquo;<sup class="versenum">20&nbsp;</sup>那人就走了，在低加波利传扬耶稣为他做了何等大的事，众人就都稀奇。</p>

	<p><sup class="versenum">21&nbsp;</sup>耶稣坐船又渡到那边去，就有许多人到他那里聚集，他正在海边上。<sup class="versenum">22&nbsp;</sup>有一个管会堂的人，名叫<u class="person underline">睚鲁</u>，来见耶稣，就俯伏在他脚前，<sup class="versenum">23&nbsp;</sup>再三地求他，说：&ldquo;我的小女儿快要死了，求你去按手在她身上，使她痊愈，得以活了。&rdquo;<sup class="versenum">24&nbsp;</sup>耶稣就和他同去。有许多人跟随，拥挤他。</p>

	<h3>医患血漏的女人</h3>

	<p><sup class="versenum">25&nbsp;</sup>有一个女人患了十二年的血漏，<sup class="versenum">26&nbsp;</sup>在好些医生手里受了许多的苦，又花尽了她所有的，一点也不见好，病势反倒更重了。<sup class="versenum">27&nbsp;</sup>她听见耶稣的事，就从后头来，杂在众人中间，摸耶稣的衣裳，<sup class="versenum">28&nbsp;</sup>意思说：&ldquo;我只摸他的衣裳，就必痊愈。&rdquo;<sup class="versenum">29&nbsp;</sup>于是她血漏的源头立刻干了，她便觉得身上的灾病好了。<sup class="versenum">30&nbsp;</sup>耶稣顿时心里觉得有能力从自己身上出去，就在众人中间转过来，说：&ldquo;谁摸我的衣裳？&rdquo;<sup class="versenum">31&nbsp;</sup>门徒对他说：&ldquo;你看众人拥挤你，还说&lsquo;谁摸我&rsquo;吗？&rdquo;<sup class="versenum">32&nbsp;</sup>耶稣周围观看，要见做这事的女人。<sup class="versenum">33&nbsp;</sup>那女人知道在自己身上所成的事，就恐惧战兢，来俯伏在耶稣跟前，将实情全告诉他。<sup class="versenum">34&nbsp;</sup>耶稣对她说：&ldquo;女儿，你的信救了你，平平安安地回去吧！你的灾病痊愈了。&rdquo;</p>

	<h3>耶稣叫睚鲁的女儿复活</h3>

	<p><sup class="versenum">35&nbsp;</sup>还说话的时候，有人从管会堂的家里来，说：&ldquo;你的女儿死了，何必还劳动先生呢？&rdquo;<sup class="versenum">36&nbsp;</sup>耶稣听见所说的话，就对管会堂的说：&ldquo;不要怕，只要信！&rdquo;<sup class="versenum">37&nbsp;</sup>于是带着<u class="person underline">彼得</u>、<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>同去，不许别人跟随他。<sup class="versenum">38&nbsp;</sup>他们来到管会堂的家里，耶稣看见那里乱嚷，并有人大大地哭泣哀号，<sup class="versenum">39&nbsp;</sup>进到里面就对他们说：&ldquo;为什么乱嚷哭泣呢？孩子不是死了，是睡着了。&rdquo;<sup class="versenum">40&nbsp;</sup>他们就嗤笑耶稣。耶稣把他们都撵出去，就带着孩子的父母和跟随的人进了孩子所在的地方，<sup class="versenum">41&nbsp;</sup>就拉着孩子的手，对她说：&ldquo;大利大，古米！&rdquo;（翻出来就是说：&ldquo;闺女，我吩咐你起来！&rdquo;）<sup class="versenum">42&nbsp;</sup>那闺女立时起来走，他们就大大地惊奇；闺女已经十二岁了。<sup class="versenum">43&nbsp;</sup>耶稣切切地嘱咐他们，不要叫人知道这事，又吩咐给她东西吃。</p>

	<h3>拿撒勒人厌弃耶稣</h3>

	<p><sup class="versenum">1 </sup>耶稣离开那里，来到自己的家乡，门徒也跟从他。<sup class="versenum">2&nbsp;</sup>到了安息日，他在会堂里教训人。众人听见就甚稀奇，说：&ldquo;这人从哪里有这些事呢？所赐给他的是什么智慧？他手所做的是何等的异能呢？<sup class="versenum">3&nbsp;</sup>这不是那木匠吗？不是<u class="person underline">马利亚</u>的儿子<u class="person underline">雅各</u>、<u class="person underline">约西</u>、<u class="person underline">犹大</u>、<u class="person underline">西门</u>的长兄吗？他妹妹们不也是在我们这里吗？&rdquo;他们就厌弃他。<sup class="versenum">4&nbsp;</sup>耶稣对他们说：&ldquo;大凡先知，除了本地、亲属、本家之外，没有不被人尊敬的。&rdquo;<sup class="versenum">5&nbsp;</sup>耶稣就在那里不得行什么异能，不过按手在几个病人身上，治好他们。<sup class="versenum">6&nbsp;</sup>他也诧异他们不信，就往周围乡村教训人去了。</p>

	<h3>耶稣差遣十二门徒</h3>

	<p><sup class="versenum">7&nbsp;</sup>耶稣叫了十二个门徒来，差遣他们两个两个地出去，也赐给他们权柄制伏污鬼，<sup class="versenum">8&nbsp;</sup>并且嘱咐他们：&ldquo;行路的时候不要带食物和口袋，腰袋里也不要带钱，除了拐杖以外，什么都不要带；<sup class="versenum">9&nbsp;</sup>只要穿鞋，也不要穿两件褂子。&rdquo;<sup class="versenum">10&nbsp;</sup>又对他们说：&ldquo;你们无论到何处，进了人的家，就住在那里，直到离开那地方。<sup class="versenum">11&nbsp;</sup>何处的人不接待你们，不听你们，你们离开那里的时候，就把脚上的尘土跺下去，对他们作见证。&rdquo;<sup class="versenum">12&nbsp;</sup>门徒就出去，传道叫人悔改，<sup class="versenum">13&nbsp;</sup>又赶出许多的鬼，用油抹了许多病人，治好他们。</p>

	<h3>约翰责备希律被斩</h3>

	<p><sup class="versenum">14&nbsp;</sup>耶稣的名声传扬出来。<u class="person underline">希律</u>王听见了，就说：&ldquo;施洗的<u class="person underline">约翰</u>从死里复活了，所以这些异能由他里面发出来。&rdquo;<sup class="versenum">15&nbsp;</sup>但别人说是<u class="person underline">以利亚</u>，又有人说是先知，正像先知中的一位。<sup class="versenum">16&nbsp;</sup><u class="person underline">希律</u>听见却说：&ldquo;是我所斩的<u class="person underline">约翰</u>，他复活了。&rdquo;<sup class="versenum">17&nbsp;</sup>先是<u class="person underline">希律</u>为他兄弟<u class="person underline">腓力</u>的妻子<u class="person underline">希罗底</u>的缘故，差人去拿住<u class="person underline">约翰</u>，锁在监里，因为<u class="person underline">希律</u>已经娶了那妇人。<sup class="versenum">18&nbsp;</sup><u class="person underline">约翰</u>曾对<u class="person underline">希律</u>说：&ldquo;你娶你兄弟的妻子是不合理的。&rdquo;<sup class="versenum">19&nbsp;</sup>于是<u class="person underline">希罗底</u>怀恨他，想要杀他，只是不能。<sup class="versenum">20&nbsp;</sup>因为<u class="person underline">希律</u>知道<u class="person underline">约翰</u>是义人，是圣人，所以敬畏他，保护他，听他讲论就多照着行，并且乐意听他。<sup class="versenum">21&nbsp;</sup>有一天，恰巧是<u class="person underline">希律</u>的生日，<u class="person underline">希律</u>摆设筵席，请了大臣和千夫长并加利利做首领的。<sup class="versenum">22&nbsp;</sup><u class="person underline">希罗底</u>的女儿进来跳舞，使<u class="person underline">希律</u>和同席的人都欢喜。王就对女子说：&ldquo;你随意向我求什么，我必给你。&rdquo;<sup class="versenum">23&nbsp;</sup>又对她起誓说：&ldquo;随你向我求什么，就是我国的一半，我也必给你！&rdquo;<sup class="versenum">24&nbsp;</sup>她就出去对她母亲说：&ldquo;我可以求什么呢？&rdquo;她母亲说：&ldquo;施洗<u class="person underline">约翰</u>的头！&rdquo;<sup class="versenum">25&nbsp;</sup>她就急忙进去见王，求他说：&ldquo;我愿王立时把施洗<u class="person underline">约翰</u>的头放在盘子里给我。&rdquo;<sup class="versenum">26&nbsp;</sup>王就甚忧愁，但因他所起的誓，又因同席的人，就不肯推辞，<sup class="versenum">27&nbsp;</sup>随即差一个护卫兵，吩咐拿<u class="person underline">约翰</u>的头来。护卫兵就去，在监里斩了<u class="person underline">约翰</u>，<sup class="versenum">28&nbsp;</sup>把头放在盘子里，拿来给女子，女子就给她母亲。<sup class="versenum">29&nbsp;</sup><u class="person underline">约翰</u>的门徒听见了，就来把他的尸首领去，葬在坟墓里。</p>

	<h3>无牧的羊</h3>

	<p><sup class="versenum">30&nbsp;</sup>使徒聚集到耶稣那里，将一切所做的事、所传的道全告诉他。<sup class="versenum">31&nbsp;</sup>他就说：&ldquo;你们来，同我暗暗地到旷野地方去歇一歇。&rdquo;这是因为来往的人多，他们连吃饭也没有工夫。<sup class="versenum">32&nbsp;</sup>他们就坐船，暗暗地往旷野地方去。<sup class="versenum">33&nbsp;</sup>众人看见他们去，有许多认识他们的，就从各城步行，一同跑到那里，比他们先赶到了。<sup class="versenum">34&nbsp;</sup>耶稣出来，见有许多的人，就怜悯他们，因为他们如同羊没有牧人一般，于是开口教训他们许多道理。<sup class="versenum">35&nbsp;</sup>天已经晚了，门徒进前来说：&ldquo;这是野地，天已经晚了，<sup class="versenum">36&nbsp;</sup>请叫众人散开，他们好往四面乡村里去自己买什么吃。&rdquo;</p>

	<h3>给五千人吃饱</h3>

	<p><sup class="versenum">37&nbsp;</sup>耶稣回答说：&ldquo;你们给他们吃吧！&rdquo;门徒说：&ldquo;我们可以去买二十两银子的饼给他们吃吗？&rdquo;<sup class="versenum">38&nbsp;</sup>耶稣说：&ldquo;你们有多少饼，可以去看看。&rdquo;他们知道了，就说：&ldquo;五个饼，两条鱼。&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣吩咐他们，叫众人一帮一帮地坐在青草地上。<sup class="versenum">40&nbsp;</sup>众人就一排一排地坐下，有一百一排的，有五十一排的。<sup class="versenum">41&nbsp;</sup>耶稣拿着这五个饼、两条鱼，望着天祝福，掰开饼，递给门徒，摆在众人面前，也把那两条鱼分给众人。<sup class="versenum">42&nbsp;</sup>他们都吃，并且吃饱了。<sup class="versenum">43&nbsp;</sup>门徒就把碎饼碎鱼收拾起来，装满了十二个篮子。<sup class="versenum">44&nbsp;</sup>吃饼的男人共有五千。</p>

	<h3>耶稣履海</h3>

	<p><sup class="versenum">45&nbsp;</sup>耶稣随即催门徒上船，先渡到那边伯赛大去，等他叫众人散开。<sup class="versenum">46&nbsp;</sup>他既辞别了他们，就往山上去祷告。<sup class="versenum">47&nbsp;</sup>到了晚上，船在海中，耶稣独自在岸上，<sup class="versenum">48&nbsp;</sup>看见门徒因风不顺摇橹甚苦。夜里约有四更天，就在海面上走，往他们那里去，意思要走过他们去。<sup class="versenum">49&nbsp;</sup>但门徒看见他在海面上走，以为是鬼怪，就喊叫起来，<sup class="versenum">50&nbsp;</sup>因为他们都看见了他，且甚惊慌。耶稣连忙对他们说：&ldquo;你们放心！是我，不要怕！&rdquo;<sup class="versenum">51&nbsp;</sup>于是到他们那里，上了船，风就住了。他们心里十分惊奇，<sup class="versenum">52&nbsp;</sup>这是因为他们不明白那分饼的事，心里还是愚顽。</p>

	<p><sup class="versenum">53&nbsp;</sup>既渡过去，来到革尼撒勒地方，就靠了岸。<sup class="versenum">54&nbsp;</sup>一下船，众人认得是耶稣，<sup class="versenum">55&nbsp;</sup>就跑遍那一带地方，听见他在何处，便将有病的人用褥子抬到那里。<sup class="versenum">56&nbsp;</sup>凡耶稣所到的地方，或村中、或城里、或乡间，他们都将病人放在街市上，求耶稣只容他们摸他的衣裳穗子。凡摸着的人就都好了。</p>

	<h3>礼上的污秽</h3>

	<p><sup class="versenum">1 </sup>有法利赛人和几个文士从耶路撒冷来，到耶稣那里聚集。<sup class="versenum">2&nbsp;</sup>他们曾看见他的门徒中有人用俗手，就是没有洗的手吃饭。<sup class="versenum">3&nbsp;</sup>（原来法利赛人和犹太人都拘守古人的遗传，若不仔细洗手就不吃饭；<sup class="versenum">4&nbsp;</sup>从市上来，若不洗浴也不吃饭；还有好些别的规矩，他们历代拘守，就是洗杯、罐、铜器等物。）<sup class="versenum">5&nbsp;</sup>法利赛人和文士问他说：&ldquo;你的门徒为什么不照古人的遗传，用俗手吃饭呢？&rdquo;<sup class="versenum">6&nbsp;</sup>耶稣说：&ldquo;<u class="person underline">以赛亚</u>指着你们假冒为善之人所说的预言是不错的，如经上说：&lsquo;这百姓用嘴唇尊敬我，心却远离我。<sup class="versenum">7&nbsp;</sup>他们将人的吩咐当做道理教导人，所以拜我也是枉然。&rsquo;<sup class="versenum">8&nbsp;</sup>你们是离弃神的诫命，拘守人的遗传。&rdquo;<sup class="versenum">9&nbsp;</sup>又说：&ldquo;你们诚然是废弃神的诫命，要守自己的遗传。<sup class="versenum">10&nbsp;</sup><u class="person underline">摩西</u>说：&lsquo;当孝敬父母&rsquo;，又说：&lsquo;咒骂父母的，必治死他。&rsquo;<sup class="versenum">11&nbsp;</sup>你们倒说，人若对父母说：&lsquo;我所当奉给你的，已经做了各耳板&rsquo;（&ldquo;各耳板&rdquo;就是&ldquo;供献&rdquo;的意思），<sup class="versenum">12&nbsp;</sup>以后你们就不容他再奉养父母。<sup class="versenum">13&nbsp;</sup>这就是你们承接遗传，废了神的道！你们还做许多这样的事。&rdquo;</p>

	<h3>心里的污秽</h3>

	<p><sup class="versenum">14&nbsp;</sup>耶稣又叫众人来，对他们说：&ldquo;你们都要听我的话，也要明白。<sup class="versenum">15&nbsp;</sup>从外面进去的不能污秽人，唯有从里面出来的乃能污秽人。&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣离开众人，进了屋子，门徒就问他这比喻的意思。<sup class="versenum">18&nbsp;</sup>耶稣对他们说：&ldquo;你们也是这样不明白吗？岂不晓得凡从外面进入的，不能污秽人？<sup class="versenum">19&nbsp;</sup>因为不是入他的心，乃是入他的肚腹，又落到茅厕里。&rdquo;这是说，各样的食物都是洁净的。<sup class="versenum">20&nbsp;</sup>又说：&ldquo;从人里面出来的，那才能污秽人。<sup class="versenum">21&nbsp;</sup>因为从里面，就是从人心里发出恶念、苟合、<sup class="versenum">22&nbsp;</sup>偷盗、凶杀、奸淫、贪婪、邪恶、诡诈、淫荡、嫉妒、谤讟、骄傲、狂妄，<sup class="versenum">23&nbsp;</sup>这一切的恶都是从里面出来，且能污秽人。&rdquo;</p>

	<h3>妇人信心的赏赐</h3>

	<p><sup class="versenum">24&nbsp;</sup>耶稣从那里起身，往推罗、西顿的境内去。进了一家，不愿意人知道，却隐藏不住。<sup class="versenum">25&nbsp;</sup>当下有一个妇人，她的小女儿被污鬼附着，听见耶稣的事，就来俯伏在他脚前。<sup class="versenum">26&nbsp;</sup>这妇人是希腊人，属叙利非尼基族。她求耶稣赶出那鬼离开她的女儿。<sup class="versenum">27&nbsp;</sup>耶稣对她说：&ldquo;让儿女们先吃饱，不好拿儿女的饼丢给狗吃。&rdquo;<sup class="versenum">28&nbsp;</sup>妇人回答说：&ldquo;主啊，不错，但是狗在桌子底下也吃孩子们的碎渣儿！&rdquo;<sup class="versenum">29&nbsp;</sup>耶稣对她说：&ldquo;因这句话，你回去吧！鬼已经离开你的女儿了。&rdquo;<sup class="versenum">30&nbsp;</sup>她就回家去，见小孩子躺在床上，鬼已经出去了。</p>

	<h3>医治耳聋舌结的人</h3>

	<p><sup class="versenum">31&nbsp;</sup>耶稣又离了推罗的境界，经过西顿，就从低加波利境内来到加利利海。<sup class="versenum">32&nbsp;</sup>有人带着一个耳聋舌结的人来见耶稣，求他按手在他身上。<sup class="versenum">33&nbsp;</sup>耶稣领他离开众人到一边去，就用指头探他的耳朵，吐唾沫抹他的舌头，<sup class="versenum">34&nbsp;</sup>望天叹息，对他说：&ldquo;以法大！&rdquo;就是说：&ldquo;开了吧！&rdquo;<sup class="versenum">35&nbsp;</sup>他的耳朵就开了，舌结也解了，说话也清楚了。<sup class="versenum">36&nbsp;</sup>耶稣嘱咐他们不要告诉人，但他越发嘱咐，他们越发传扬开了。<sup class="versenum">37&nbsp;</sup>众人分外稀奇，说：&ldquo;他所做的事都好，他连聋子也叫他们听见，哑巴也叫他们说话！&rdquo;</p>

	<h3>给四千人吃饱</h3>

	<p><sup class="versenum">1 </sup>那时，又有许多人聚集，并没有什么吃的。耶稣叫门徒来，说：<sup class="versenum">2&nbsp;</sup>&ldquo;我怜悯这众人，因为他们同我在这里已经三天，也没有吃的了。<sup class="versenum">3&nbsp;</sup>我若打发他们饿着回家，就必在路上困乏，因为其中有从远处来的。&rdquo;<sup class="versenum">4&nbsp;</sup>门徒回答说：&ldquo;在这野地，从哪里能得饼叫这些人吃饱呢？&rdquo;<sup class="versenum">5&nbsp;</sup>耶稣问他们说：&ldquo;你们有多少饼？&rdquo;他们说：&ldquo;七个。&rdquo;<sup class="versenum">6&nbsp;</sup>他吩咐众人坐在地上，就拿着这七个饼祝谢了，掰开，递给门徒，叫他们摆开，门徒就摆在众人面前。<sup class="versenum">7&nbsp;</sup>又有几条小鱼，耶稣祝了福，就吩咐也摆在众人面前。<sup class="versenum">8&nbsp;</sup>众人都吃，并且吃饱了，收拾剩下的零碎，有七筐子。<sup class="versenum">9&nbsp;</sup>人数约有四千。耶稣打发他们走了，<sup class="versenum">10&nbsp;</sup>随即同门徒上船，来到大玛努他境内。</p>

	<h3>求主显神迹</h3>

	<p><sup class="versenum">11&nbsp;</sup>法利赛人出来盘问耶稣，求他从天上显个神迹给他们看，想要试探他。<sup class="versenum">12&nbsp;</sup>耶稣心里深深地叹息说：&ldquo;这世代为什么求神迹呢？我实在告诉你们：没有神迹给这世代看！&rdquo;<sup class="versenum">13&nbsp;</sup>他就离开他们，又上船往海那边去了。</p>

	<h3>防备法利赛人和希律的酵</h3>

	<p><sup class="versenum">14&nbsp;</sup>门徒忘了带饼，在船上除了一个饼，没有别的食物。<sup class="versenum">15&nbsp;</sup>耶稣嘱咐他们说：&ldquo;你们要谨慎，防备法利赛人的酵和<u class="person underline">希律</u>的酵。&rdquo;<sup class="versenum">16&nbsp;</sup>他们彼此议论说：&ldquo;这是因为我们没有饼吧？&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣看出来，就说：&ldquo;你们为什么因为没有饼就议论呢？你们还不醒悟，还不明白吗？你们的心还是愚顽吗？<sup class="versenum">18&nbsp;</sup>你们有眼睛看不见吗？有耳朵听不见吗？也不记得吗？<sup class="versenum">19&nbsp;</sup>我掰开那五个饼分给五千人，你们收拾的零碎装满了多少篮子呢？&rdquo;他们说：&ldquo;十二个。&rdquo;<sup class="versenum">20&nbsp;</sup>&ldquo;又掰开那七个饼分给四千人，你们收拾的零碎装满了多少筐子呢？&rdquo;他们说：&ldquo;七个。&rdquo;<sup class="versenum">21&nbsp;</sup>耶稣说：&ldquo;你们还是不明白吗？&rdquo;</p>

	<h3>吐唾沫治好瞎子</h3>

	<p><sup class="versenum">22&nbsp;</sup>他们来到伯赛大，有人带一个瞎子来，求耶稣摸他。<sup class="versenum">23&nbsp;</sup>耶稣拉着瞎子的手，领他到村外，就吐唾沫在他眼睛上，按手在他身上，问他说：&ldquo;你看见什么了？&rdquo;<sup class="versenum">24&nbsp;</sup>他就抬头一看，说：&ldquo;我看见人了，他们好像树木，并且行走。&rdquo;<sup class="versenum">25&nbsp;</sup>随后又按手在他眼睛上，他定睛一看，就复了原，样样都看得清楚了。<sup class="versenum">26&nbsp;</sup>耶稣打发他回家，说：&ldquo;连这村子你也不要进去。&rdquo;</p>

	<h3>认耶稣为基督</h3>

	<p><sup class="versenum">27&nbsp;</sup>耶稣和门徒出去，往恺撒利亚-腓立比的村庄去。在路上问门徒说：&ldquo;人说我是谁？&rdquo;<sup class="versenum">28&nbsp;</sup>他们说：&ldquo;有人说是施洗的<u class="person underline">约翰</u>，有人说是<u class="person underline">以利亚</u>，又有人说是先知里的一位。&rdquo;<sup class="versenum">29&nbsp;</sup>又问他们说：&ldquo;你们说我是谁？&rdquo;<u class="person underline">彼得</u>回答说：&ldquo;你是基督。&rdquo;</p>

	<h3>预言受难复活降临</h3>

	<p><sup class="versenum">30&nbsp;</sup>耶稣就禁戒他们，不要告诉人。<sup class="versenum">31&nbsp;</sup>从此，他教训他们说：&ldquo;人子必须受许多的苦，被长老、祭司长和文士弃绝，并且被杀，过三天复活。&rdquo;<sup class="versenum">32&nbsp;</sup>耶稣明明地说这话，<u class="person underline">彼得</u>就拉着他，劝他。<sup class="versenum">33&nbsp;</sup>耶稣转过来，看着门徒，就责备<u class="person underline">彼得</u>，说：&ldquo;<u class="person underline">撒旦</u>，退我后边去吧！因为你不体贴神的意思，只体贴人的意思。&rdquo;</p>

	<h3>当背十架跟从主</h3>

	<p><sup class="versenum">34&nbsp;</sup>于是叫众人和门徒来，对他们说：&ldquo;若有人要跟从我，就当舍己，背起他的十字架来跟从我。<sup class="versenum">35&nbsp;</sup>因为凡要救自己生命的，必丧掉生命；凡为我和福音丧掉生命的，必救了生命。<sup class="versenum">36&nbsp;</sup>人就是赚得全世界，赔上自己的生命，有什么益处呢？<sup class="versenum">37&nbsp;</sup>人还能拿什么换生命呢？<sup class="versenum">38&nbsp;</sup>凡在这淫乱罪恶的世代，把我和我的道当做可耻的，人子在他父的荣耀里同圣天使降临的时候，也要把那人当做可耻的。&rdquo;</p>

	<p><sup class="versenum">1 </sup>耶稣又对他们说：&ldquo;我实在告诉你们：站在这里的，有人在没尝死味以前，必要看见神的国大有能力临到。&rdquo;</p>

	<h3>改变形象</h3>

	<p><sup class="versenum">2&nbsp;</sup>过了六天，耶稣带着<u class="person underline">彼得</u>、<u class="person underline">雅各</u>、<u class="person underline">约翰</u>暗暗地上了高山，就在他们面前变了形象，<sup class="versenum">3&nbsp;</sup>衣服放光，极其洁白，地上漂布的没有一个能漂得那样白。<sup class="versenum">4&nbsp;</sup>忽然，有<u class="person underline">以利亚</u>同<u class="person underline">摩西</u>向他们显现，并且和耶稣说话。<sup class="versenum">5&nbsp;</sup><u class="person underline">彼得</u>对耶稣说：&ldquo;拉比，我们在这里真好！可以搭三座棚：一座为你，一座为<u class="person underline">摩西</u>，一座为<u class="person underline">以利亚</u>。&rdquo;<sup class="versenum">6&nbsp;</sup><u class="person underline">彼得</u>不知道说什么才好，因为他们甚是惧怕。<sup class="versenum">7&nbsp;</sup>有一朵云彩来遮盖他们，也有声音从云彩里出来说：&ldquo;这是我的爱子，你们要听他！&rdquo;<sup class="versenum">8&nbsp;</sup>门徒忽然周围一看，不再见一人，只见耶稣同他们在那里。</p>

	<h3>以约翰譬以利亚</h3>

	<p><sup class="versenum">9&nbsp;</sup>下山的时候，耶稣嘱咐他们说：&ldquo;人子还没有从死里复活，你们不要将所看见的告诉人。&rdquo;<sup class="versenum">10&nbsp;</sup>门徒将这话存记在心，彼此议论从死里复活是什么意思。<sup class="versenum">11&nbsp;</sup>他们就问耶稣说：&ldquo;文士为什么说<u class="person underline">以利亚</u>必须先来？&rdquo;<sup class="versenum">12&nbsp;</sup>耶稣说：&ldquo;<u class="person underline">以利亚</u>固然先来复兴万事。经上不是指着人子说，他要受许多的苦、被人轻慢呢？<sup class="versenum">13&nbsp;</sup>我告诉你们：<u class="person underline">以利亚</u>已经来了，他们也任意待他，正如经上所指着他的话。&rdquo;</p>

	<h3>害癫痫病的孩子</h3>

	<p><sup class="versenum">14&nbsp;</sup>耶稣到了门徒那里，看见有许多人围着他们，又有文士和他们辩论。<sup class="versenum">15&nbsp;</sup>众人一见耶稣，都甚稀奇，就跑上去问他的安。<sup class="versenum">16&nbsp;</sup>耶稣问他们说：&ldquo;你们和他们辩论的是什么？&rdquo;<sup class="versenum">17&nbsp;</sup>众人中间有一个人回答说：&ldquo;夫子，我带了我的儿子到你这里来，他被哑巴鬼附着。<sup class="versenum">18&nbsp;</sup>无论在哪里，鬼捉弄他，把他摔倒，他就口中流沫，咬牙切齿，身体枯干。我请过你的门徒把鬼赶出去，他们却是不能。&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣说：&ldquo;唉！不信的世代啊，我在你们这里要到几时呢？我忍耐你们要到几时呢？把他带到我这里来吧！&rdquo;<sup class="versenum">20&nbsp;</sup>他们就带了他来。他一见耶稣，鬼便叫他重重地抽风，倒在地上翻来覆去，口中流沫。<sup class="versenum">21&nbsp;</sup>耶稣问他父亲说：&ldquo;他得这病有多少日子呢？&rdquo;回答说：&ldquo;从小的时候。<sup class="versenum">22&nbsp;</sup>鬼屡次把他扔在火里、水里，要灭他。你若能做什么，求你怜悯我们，帮助我们！&rdquo;</p>

	<h3>在信的人凡事都能</h3>

	<p><sup class="versenum">23&nbsp;</sup>耶稣对他说：&ldquo;你若能信，在信的人，凡事都能。&rdquo;<sup class="versenum">24&nbsp;</sup>孩子的父亲立时喊着说：&ldquo;我信！但我信不足，求主帮助！&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣看见众人都跑上来，就斥责那污鬼，说：&ldquo;你这聋哑的鬼，我吩咐你从他里头出来，再不要进去！&rdquo;<sup class="versenum">26&nbsp;</sup>那鬼喊叫，使孩子大大地抽了一阵风，就出来了。孩子好像死了一般，以致众人多半说：&ldquo;他是死了。&rdquo;<sup class="versenum">27&nbsp;</sup>但耶稣拉着他的手，扶他起来，他就站起来了。<sup class="versenum">28&nbsp;</sup>耶稣进了屋子，门徒就暗暗地问他说：&ldquo;我们为什么不能赶出他去呢？&rdquo;<sup class="versenum">29&nbsp;</sup>耶稣说：&ldquo;非用祷告，这一类的鬼总不能出来。&rdquo;</p>

	<h3>预言受难</h3>

	<p><sup class="versenum">30&nbsp;</sup>他们离开那地方，经过加利利，耶稣不愿意人知道。<sup class="versenum">31&nbsp;</sup>于是教训门徒，说：&ldquo;人子将要被交在人手里，他们要杀害他，被杀以后过三天他要复活。&rdquo;<sup class="versenum">32&nbsp;</sup>门徒却不明白这话，又不敢问他。</p>

	<h3>争论谁为大</h3>

	<p><sup class="versenum">33&nbsp;</sup>他们来到迦百农，耶稣在屋里问门徒说：&ldquo;你们在路上议论的是什么？&rdquo;<sup class="versenum">34&nbsp;</sup>门徒不作声，因为他们在路上彼此争论谁为大。<sup class="versenum">35&nbsp;</sup>耶稣坐下，叫十二个门徒来，说：&ldquo;若有人愿意做首先的，他必做众人末后的，做众人的用人。&rdquo;<sup class="versenum">36&nbsp;</sup>于是领过一个小孩子来，叫他站在门徒中间，又抱起他来，对他们说：<sup class="versenum">37&nbsp;</sup>&ldquo;凡为我名接待一个像这小孩子的，就是接待我；凡接待我的，不是接待我，乃是接待那差我来的。&rdquo;</p>

	<p><sup class="versenum">38&nbsp;</sup><u class="person underline">约翰</u>对耶稣说：&ldquo;夫子，我们看见一个人奉你的名赶鬼，我们就禁止他，因为他不跟从我们。&rdquo;<sup class="versenum">39&nbsp;</sup>耶稣说：&ldquo;不要禁止他，因为没有人奉我名行异能，反倒轻易毁谤我。<sup class="versenum">40&nbsp;</sup>不敌挡我们的，就是帮助我们的。<sup class="versenum">41&nbsp;</sup>凡因你们是属基督，给你们一杯水喝的，我实在告诉你们：他不能不得赏赐。<sup class="versenum">42&nbsp;</sup>凡使这信我的一个小子跌倒的，倒不如把大磨石拴在这人的颈项上，扔在海里。<sup class="versenum">43&nbsp;</sup>倘若你一只手叫你跌倒，就把它砍下来！<sup class="versenum">44&nbsp;</sup>你缺了肢体进入永生，强如有两只手落到地狱，入那不灭的火里去。<sup class="versenum">45&nbsp;</sup>倘若你一只脚叫你跌倒，就把它砍下来！<sup class="versenum">46&nbsp;</sup>你瘸腿进入永生，强如有两只脚被丢在地狱里。<sup class="versenum">47&nbsp;</sup>倘若你一只眼叫你跌倒，就去掉它！你只有一只眼进入神的国，强如有两只眼被丢在地狱里。<sup class="versenum">48&nbsp;</sup>在那里，虫是不死的，火是不灭的。<sup class="versenum">49&nbsp;</sup>因为必用火当盐腌各人。<sup class="versenum">50&nbsp;</sup>盐本是好的，若失了味，可用什么叫它再咸呢？你们里头应当有盐，彼此和睦。&rdquo;</p>
	<!-- end bible --></div>
	（经文主要讲耶稣在加利利传道。在描述耶稣在犹太和耶路撒冷的传道工作前，作者马可先描写了耶稣如何在北部的加利利大量外族人聚居的地方，做了很多外族人中的工作），并存祷告的心，求主借着祂的生命和服事激励你，使你也成为积极回应呼召的人。</li>
	<li class="forward">为教会/小组的弟兄姐妹提名守望，求主坚定他们的信心，愿意顺服主的呼召和带领。也为教会牧者同工的服事和福音事工代祷，求主使他们得人如得鱼。</li>
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

<p><span><span><span lang="ZH-CN">亲爱的主耶稣！我们感谢赞美祢！祢为了传讲天国福音的缘故，道成肉身住在我们中间，成为奴仆的样式来服事众人，甚至将生命摆上，存心顺服，为我们的罪死在十字架上，成为我们的拯救。主啊，我们应该效法祢的样式，来服事弟兄姐妹和众人，也让我们可以影响邻舍，朋友，家人，同事和小区，使更多人能认识祢，并让天国的文化，影响和改变这个世代。我们如此祷告，乃是奉主耶稣的名求。阿们！</span></span></span></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->