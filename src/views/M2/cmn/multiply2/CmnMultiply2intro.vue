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
    <div class="nav full internal-link" @click="this.pageGoBack('cmn-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>学像耶稣——天国典范</h1>
<div id="showVideoOptions"></div>
  <p>耶稣是我们生命和事奉的典范。因祂是我们的榜样，所以认识祂的生命品格，祂所看为优先的，并祂建立门徒倍增运动的过程是极为重要。这运动就是倍增其他人一起来完成大使命。</p>

<ul>
	<li class="nobreak-final-final">圣诞节是我们庆祝&ldquo;太初之道&rdquo;的奥秘（<span class="popup-link" @click = "popUp('pop1')"> 约1:1</span>）。

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>太初有道，道与神同在，道就是神。</p>
	<!-- end bible --></div>
	这道成了完全的人（<span class="popup-link" @click = "popUp('pop2')"> 约1:14</span>），

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>道成了肉身，住在我们中间，充充满满地有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。</p>
	<!-- end bible --></div>
	降生为婴孩，那就是拿撒勒人耶稣。祂从永恒进入了时空。他走进一个家庭、一个文化、一个村庄、一个部落，并真实生活在第一世纪罗马统治以色列的时代。</li>
</ul>

<p>虽是完全的神，祂却选择以完全人的方式生活，且全然降服祂的天父。祂一生和事奉中所成就的，是作为拿撒勒人&mdash;&mdash;人子&mdash;&mdash;去做成、是借着圣灵的能力与同在来完成天父的旨意。虽然他有绝对的权利行驶他的神能，但祂却选择活出完美无罪的人性，成为我们该如何在生命与事奉上完全荣耀上帝的榜样。</p>

<ul>
	<li class="nobreak-final-final">耶稣从亘古到永远都是完全的神。尽管祂拥有天上地下一切所有的权柄、能力和资源，但祂从未使用它们。相反，祂选择成为&ldquo;凡事该与他的弟兄相同&rdquo;（<span class="popup-link" @click = "popUp('pop3')"> 来2:17</span>），

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>所以，他凡事该与他的弟兄相同，为要在神的事上成为慈悲忠信的大祭司，为百姓的罪献上挽回祭。</p>
	<!-- end bible --></div>
	但却没有犯罪。正因如此，《希伯来书》鼓励我们：&ldquo;同蒙天召的圣洁弟兄阿，你们应当思想，我们所认为使者、为大祭司的耶稣。&rdquo;（<span class="popup-link" @click = "popUp('pop4')"> 来3:1</span>）

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>同蒙天召的圣洁弟兄啊，你们应当思想我们所认为使者、为大祭司的耶稣。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">四位福音书的作者摘录祂的生平与教导。通过研读他们写下的见证，我们可以了解祂运动的发展。在祂的人性中，耶稣也受时间和空间的限制，并逐个小时、逐日、逐周、逐年的顺序生活。他在适当的时间开展他的运动。因此，从耶稣生平的探讨，对作领袖的很有启发性。我们可以通过福音书所提供的证据来重建时间的顺序，帮助我们深入了解祂的一生，以及运动是如何随时间推移而展开。</li>
	<li class="nobreak-final-final">作者路加告诉我们，他尝试提供一个经过深入研究并对耶稣一生&ldquo;有序的记述&rdquo;（<span class="popup-link" @click = "popUp('pop5')"> 路1:1-4</span>）。
	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>大人哪，有好些人提笔作书，述说在我们中间所成就的事，是照传道的人从起初亲眼看见又传给我们的。<sup class="versenum">3&nbsp;</sup>这些事我既从起头都详细考察了，就定意要按着次序写给你，<sup class="versenum">4&nbsp;</sup>使你知道所学之道都是确实的。</p>
	<!-- end bible --></div>
	其他作者并不关心事件的顺序，而是按主题来编排。例如，作者约翰，四福音书最后的一位，记录了许多新的材料而填补了一些时间的差距，特别是有关第一年半（约1-4章）和最后几周（约12-21章）耶稣在地上的生活与事工。事实上，约翰福音13-20章只涉及三天！</li>
</ul>

<p>路加福音给了我们一些日期标记，使我们可以确定耶稣所在的历史背景。</p>

<ul>
	<li class="nobreak-final-final"><sup>1、2</sup>有好些人提笔作书，述说在我们中间所成就的事，是照传道的人，从起初亲眼看见，又传给我们的。3这些事我既从起头都详细考察了，就定意要按着次序写给你，4使你知道所学之道都是确实的。 （<span class="popup-link" @click = "popUp('pop6')"> 路1:1-4</span>）。

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">1 </sup><u class="person underline">提阿非罗</u>大人哪，有好些人提笔作书，述说在我们中间所成就的事，是照传道的人从起初亲眼看见又传给我们的。<sup class="versenum">3&nbsp;</sup>这些事我既从起头都详细考察了，就定意要按着次序写给你，<sup class="versenum">4&nbsp;</sup>使你知道所学之道都是确实的。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">路加告诉我们耶稣生于犹太王希律的时候（<span class="popup-link" @click = "popUp('pop7')"> 路1:5</span>）、
	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">5&nbsp;</sup>当犹太王<u class="person underline">希律</u>的时候，<u class="person underline">亚比雅</u>班里有一个祭司，名叫<u class="person underline">撒迦利亚</u>。他妻子是<u class="person underline">亚伦</u>的后人，名叫<u class="person underline">伊利莎白</u>。</p>
	<!-- end bible --></div>
	在凯撒奥古斯都统治时期（<span class="popup-link" @click = "popUp('pop8')"> 路2:1-7</span>），

	<div class="popup invisible" id="pop8"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>当那些日子，恺撒<u class="person underline">奥古斯都</u>有旨意下来，叫天下人民都报名上册。<sup class="versenum">2&nbsp;</sup>这是<u class="person underline">居里扭</u>做叙利亚巡抚的时候，头一次行报名上册的事。<sup class="versenum">3&nbsp;</sup>众人各归各城，报名上册。<sup class="versenum">4&nbsp;</sup><u class="person underline">约瑟</u>也从加利利的拿撒勒城上犹太去，到了<u class="person underline">大卫</u>的城，名叫伯利恒，因他本是<u class="person underline">大卫</u>一族一家的人，<sup class="versenum">5&nbsp;</sup>要和他所聘之妻<u class="person underline">马利亚</u>一同报名上册。那时<u class="person underline">马利亚</u>的身孕已经重了。<sup class="versenum">6&nbsp;</sup>他们在那里的时候，<u class="person underline">马利亚</u>的产期到了，<sup class="versenum">7&nbsp;</sup>就生了头胎的儿子，用布包起来，放在马槽里，因为客店里没有地方。</p>
	<!-- end bible --></div>
	并居里扭作叙利亚巡抚时（<span class="popup-link" @click = "popUp('pop9')"> 路2:2</span>）。

	<div class="popup invisible" id="pop9"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>这是<u class="person underline">居里扭</u>做叙利亚巡抚的时候，头一次行报名上册的事。</p>
	<!-- end bible --></div>
	他还说耶稣在凯撒提庇留在位第15年开始事工（<span class="popup-link" @click = "popUp('pop10')"> 路3:1-2</span>），

	<div class="popup invisible" id="pop10"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>恺撒<u class="person underline">提庇留</u>在位第十五年，<u class="person underline">本丢</u>&middot;<u class="person underline">彼拉多</u>做犹太巡抚，<u class="person underline">希律</u>做加利利分封的王，他的兄弟<u class="person underline">腓力</u>做以土利亚和特拉可尼地方分封的王，<u class="person underline">吕撒聂</u>做亚比利尼分封的王，<sup class="versenum">2&nbsp;</sup><u class="person underline">亚那</u>和<u class="person underline">该亚法</u>做大祭司。那时，<u class="person underline">撒迦利亚</u>的儿子<u class="person underline">约翰</u>在旷野里，神的话临到他。</p>
	<!-- end bible --></div>
	而耶稣开始事工是大约30岁（<span class="popup-link" @click = "popUp('pop11')"> 路3:21-23</span>）。

	<div class="popup invisible" id="pop11"><!-- begin bible -->
	<h3>耶稣受洗</h3>

	<p><sup class="versenum">21&nbsp;</sup>众百姓都受了洗，耶稣也受了洗，正祷告的时候天就开了，<sup class="versenum">22&nbsp;</sup>圣灵降临在他身上，形状仿佛鸽子；又有声音从天上来说：&ldquo;你是我的爱子，我喜悦你。&rdquo;</p>

	<p><sup class="versenum">23&nbsp;</sup>耶稣开头传道，年纪约有三十岁。依人看来，他是<u class="person underline">约瑟</u>的儿子，<u class="person underline">约瑟</u>是<u class="person underline">希里</u>的儿子，</p>
	<!-- end bible --></div>
	这非常重要，因为它帮助我们更多了解耶稣在何时并花多久做祂的事工。我们也看到祂事工的步骤：为门徒造就奠定基础，发展祂的跟随者成为门徒造就者，并花时间去装备成功造就门徒的，成为有效且不断倍增运动的领袖。</li>
</ul>

<p>从耶稣一生和事工可以分成四个阶段，分别为：预备、事工基础、事工训练与向外拓张，并领袖倍增。（图表如下）&nbsp;&nbsp; &nbsp;</p>

<p>
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2Periods.png"
    zoom="/images/zoom/sites/mc2/content/M2/cmn/multiply2/M2Periods.png" :zoom-amount="3" img-class="img-fluid" alt="Periods of Jesus' ministry">
    <img src="@/assets/sites/mc2/content/M2/cmn/multiply2/M2Periods.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p>&nbsp;&nbsp;</p>

<h2>阶段一：预备（大约公元前4年至公元26年）<br />
预备生命和倍增运动</h2>

<p>这段时期从耶稣在公元前4年左右出生到大约30岁，其特点如下：</p>

<ul>
	<li>成为祂要倍增别人的榜样</li>
	<li>为敬虔生命和倍增运动做准备</li>
</ul>

<p>耶稣在人生的首30年里，&ldquo;渐渐长大成&rdquo;（<span class="popup-link" @click = "popUp('pop12')"> 路加福音2:40,51-52</span>）</p>

<div class="popup invisible" id="pop12"><!-- begin bible -->
<p><sup class="versenum">40&nbsp;</sup>孩子渐渐长大，强健起来，充满智慧，又有神的恩在他身上。</p>
<!-- end bible --></div>

<p>祂将在其他人中所倍增的人。这一切都发生在祂开始公开事工之前。从祂开始传道，很显然地，耶稣一直祈祷、计划并澄清祂的事工将会是什么，以及祂将如何去做。</p>

<p>&nbsp;</p>

<p>祂心中的热忱很单纯。祂的目标很清晰。祂决定的事工过程也很简单。祂与失丧者连接，得着他们，建立他们成为门徒，训练他们成为得人的渔夫，并差派他们以同样的过程去倍增其他人。</p>

<p>耶稣定意去寻找祂父所预备的人并借着他们作成祂的工。</p>

<h2><br />
阶段二：事工基础（大约公元26年春至公元27年末）<br />
建立与人连结、以上帝为中心的根基，去使多人作门徒</h2>

<ul>
	<li class="nobreak-final-final">这段时间始于公元26年中期，当时耶稣大约30岁，并持续了18-21个月。 耶稣从受洗，到开始公开传道、到首度接触群众（<span class="popup-link" @click = "popUp('pop13')"> 约1:35-44</span>）

	<div class="popup invisible" id="pop13"><!-- begin bible -->
	<h3>约翰的两个门徒跟从耶稣</h3>

	<p><sup class="versenum">35&nbsp;</sup>再次日，<u class="person underline">约翰</u>同两个门徒站在那里。<sup class="versenum">36&nbsp;</sup>他见耶稣行走，就说：&ldquo;看哪，这是神的羔羊！&rdquo;<sup class="versenum">37&nbsp;</sup>两个门徒听见他的话，就跟从了耶稣。<sup class="versenum">38&nbsp;</sup>耶稣转过身来，看见他们跟着，就问他们说：&ldquo;你们要什么？&rdquo;他们说：&ldquo;拉比，在哪里住？&rdquo;（&ldquo;拉比&rdquo;翻出来就是&ldquo;夫子&rdquo;。）<sup class="versenum">39&nbsp;</sup>耶稣说：&ldquo;你们来看。&rdquo;他们就去看他在哪里住，这一天便与他同住。那时约有申正了。<sup class="versenum">40&nbsp;</sup>听见<u class="person underline">约翰</u>的话跟从耶稣的那两个人，一个是<u class="person underline">西门</u><u class="person underline">彼得</u>的兄弟<u class="person underline">安得烈</u>。<sup class="versenum">41&nbsp;</sup>他先找着自己的哥哥<u class="person underline">西门</u>，对他说：&ldquo;我们遇见弥赛亚了！&rdquo;（&ldquo;弥赛亚&rdquo;翻出来就是&ldquo;基督&rdquo;。）<sup class="versenum">42&nbsp;</sup>于是领他去见耶稣。耶稣看着他说：&ldquo;你是<u class="person underline">约翰</u>的儿子<u class="person underline">西门</u>，你要称为<u class="person underline">矶法</u>。&rdquo;（&ldquo;<u class="person underline">矶法</u>&rdquo;翻出来就是&ldquo;<u class="person underline">彼得</u>&rdquo;。）</p>

	<p><sup class="versenum">43&nbsp;</sup>又次日，耶稣想要往加利利去，遇见<u class="person underline">腓力</u>，就对他说：&ldquo;来跟从我吧！&rdquo;<sup class="versenum">44&nbsp;</sup>这<u class="person underline">腓力</u>是伯赛大人，和<u class="person underline">安得烈</u>、<u class="person underline">彼得</u>同城。</p>
	<!-- end bible --></div>
	逐渐增加，并寻找祂第一批跟随者和那些想更认识祂的群众（<span class="popup-link" @click = "popUp('pop14')"> 约4:1-4</span>），

	<div class="popup invisible" id="pop14"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>主知道法利赛人听见他收门徒施洗比<u class="person underline">约翰</u>还多<sup class="versenum">2&nbsp;</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗），<sup class="versenum">3&nbsp;</sup>他就离了犹太，又往加利利去。<sup class="versenum">4&nbsp;</sup>必须经过撒马利亚，</p>
	<!-- end bible --></div>
	以祂在拿撒勒被家乡的人拒绝为结束（<span class="popup-link" @click = "popUp('pop15')"> 路4:16-31</span>）。

	<div class="popup invisible" id="pop15"><!-- begin bible -->
	<h3>耶稣在拿撒勒传道</h3>

	<p><sup class="versenum">16&nbsp;</sup>耶稣来到拿撒勒，就是他长大的地方，在安息日，照他平常的规矩进了会堂，站起来要念圣经。<sup class="versenum">17&nbsp;</sup>有人把先知<u class="person underline">以赛亚</u>的书交给他，他就打开，找到一处写着说：<sup class="versenum">18&nbsp;</sup>&ldquo;主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人，差遣我报告被掳的得释放、瞎眼的得看见，叫那受压制的得自由，<sup class="versenum">19&nbsp;</sup>报告神悦纳人的禧年。&rdquo;<sup class="versenum">20&nbsp;</sup>于是把书卷起来，交还执事，就坐下。会堂里的人都定睛看他。<sup class="versenum">21&nbsp;</sup>耶稣对他们说：&ldquo;今天这经应验在你们耳中了。&rdquo;<sup class="versenum">22&nbsp;</sup>众人都称赞他，并稀奇他口中所出的恩言，又说：&ldquo;这不是<u class="person underline">约瑟</u>的儿子吗？&rdquo;<sup class="versenum">23&nbsp;</sup>耶稣对他们说：&ldquo;你们必引这俗语向我说：&lsquo;医生，你医治自己吧！我们听见你在迦百农所行的事，也当行在你自己家乡里！&rsquo;&rdquo;<sup class="versenum">24&nbsp;</sup>又说：&ldquo;我实在告诉你们：没有先知在自己家乡被人悦纳的。</p>

	<h3>被撵出城</h3>

	<p><sup class="versenum">25&nbsp;</sup>&ldquo;我对你们说实话，当<u class="person underline">以利亚</u>的时候，天闭塞了三年零六个月，遍地有大饥荒，那时以色列中有许多寡妇，<sup class="versenum">26&nbsp;</sup><u class="person underline">以利亚</u>并没有奉差往她们一个人那里去，只奉差往西顿的撒勒法一个寡妇那里去。<sup class="versenum">27&nbsp;</sup>先知<u class="person underline">以利沙</u>的时候，以色列中有许多长大麻风的，但内中除了叙利亚国的<u class="person underline">乃缦</u>，没有一个得洁净的。&rdquo;<sup class="versenum">28&nbsp;</sup>会堂里的人听见这话，都怒气满胸，<sup class="versenum">29&nbsp;</sup>就起来撵他出城。他们的城造在山上。他们带他到山崖，要把他推下去。<sup class="versenum">30&nbsp;</sup>他却从他们中间直行，过去了。</p>

	<p><sup class="versenum">31&nbsp;</sup>耶稣下到迦百农，就是加利利的一座城，在安息日教训众人。</p>
	<!-- end bible --></div>
	</li>
	<li class="nobreak-final-final">这时期的特点是奠定事工的基础。耶稣有意营造关系型的环境，以新的方式呼召人来作门徒。耶稣的事工从无到有，直至超越了施洗约翰的事工。（<span class="popup-link" @click = "popUp('pop16')"> 约4:1-3</span>；
	<div class="popup invisible" id="pop16"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>主知道法利赛人听见他收门徒施洗比<u class="person underline">约翰</u>还多<sup class="versenum">2&nbsp;</sup>（其实不是耶稣亲自施洗，乃是他的门徒施洗），<sup class="versenum">3&nbsp;</sup>他就离了犹太，又往加利利去。</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop17')"> 太4:12</span>；

	<div class="popup invisible" id="pop17"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>耶稣听见<u class="person underline">约翰</u>下了监，就退到加利利去；</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop18')"> 路3:19-20</span>）。

	<div class="popup invisible" id="pop18"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>只是分封的王<u class="person underline">希律</u>因他兄弟之妻<u class="person underline">希罗底</u>的缘故，并因他所行的一切恶事，受了<u class="person underline">约翰</u>的责备，<sup class="versenum">20&nbsp;</sup>又另外添了一件，就是把<u class="person underline">约翰</u>收在监里。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2>阶段三：事工训练与向外拓展(大约公元27年末至28年末)<br />
选召、训练并动员一支越来越多人的宣教团队去广泛撒种和造就新门徒</h2>

<ul>
	<li class="nobreak-final-final">这段时期持续6至9个月，从耶稣到迦百农开始。在此期间，耶稣挑战四位渔夫，他们是自耶稣受洗就跟随的门徒（<span class="popup-link" @click = "popUp('pop19')"> 可1:16-20</span>）。

	<div class="popup invisible" id="pop19"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>耶稣顺着加利利的海边走，看见<u class="person underline">西门</u>和<u class="person underline">西门</u>的兄弟<u class="person underline">安得烈</u>在海里撒网，他们本是打鱼的。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;来跟从我，我要叫你们得人如得鱼一样。&rdquo;<sup class="versenum">18&nbsp;</sup>他们就立刻舍了网，跟从了他。<sup class="versenum">19&nbsp;</sup>耶稣稍往前走，又见<u class="person underline">西庇太</u>的儿子<u class="person underline">雅各</u>和<u class="person underline">雅各</u>的兄弟<u class="person underline">约翰</u>在船上补网，<sup class="versenum">20&nbsp;</sup>耶稣随即招呼他们。他们就把父亲<u class="person underline">西庇太</u>和雇工人留在船上，跟从耶稣去了。</p>
	<!-- end bible --></div>
	耶稣开始改变他们的优先次序，训练他们去得人。这四人组成最初的宣教团队，但耶稣很快也将利未（<span class="popup-link" @click = "popUp('pop20')"> 可2:13-17</span>）

	<div class="popup invisible" id="pop20"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>耶稣又出到海边去，众人都就了他来，他便教训他们。<sup class="versenum">14&nbsp;</sup>耶稣经过的时候，看见<u class="person underline">亚勒腓</u>的儿子<u class="person underline">利未</u>坐在税关上，就对他说：&ldquo;你跟从我来！&rdquo;他就起来跟从了耶稣。<sup class="versenum">15&nbsp;</sup>耶稣在<u class="person underline">利未</u>家里坐席的时候，有好些税吏和罪人与耶稣并门徒一同坐席，因为这样的人多，他们也跟随耶稣。<sup class="versenum">16&nbsp;</sup>法利赛人中的文士看见耶稣和罪人并税吏一同吃饭，就对他门徒说：&ldquo;他和税吏并罪人一同吃喝吗？&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣听见，就对他们说：&ldquo;康健的人用不着医生，有病的人才用得着。我来本不是召义人，乃是召罪人。&rdquo;</p>
	<!-- end bible --></div>
	和其他人加入。</li>
	<li class="nobreak-final-final">另外，当耶稣选召首批事工团队与祂一起同工，祂为他们创造&ldquo;实际操练&rdquo; 的机会，包括本地的传福音（<span class="popup-link" @click = "popUp('pop21')"> 可1:21-34</span>），
	<div class="popup invisible" id="pop21"><!-- begin bible -->
	<h3>在迦百农赶逐污鬼</h3>

	<p><sup class="versenum">21&nbsp;</sup>到了迦百农，耶稣就在安息日进了会堂教训人。<sup class="versenum">22&nbsp;</sup>众人很稀奇他的教训，因为他教训他们正像有权柄的人，不像文士。<sup class="versenum">23&nbsp;</sup>在会堂里有一个人被污鬼附着，他喊叫说：<sup class="versenum">24&nbsp;</sup>&ldquo;拿撒勒人耶稣，我们与你有什么相干？你来灭我们吗？我知道你是谁，乃是神的圣者！&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣责备他说：&ldquo;不要作声！从这人身上出来吧！&rdquo;<sup class="versenum">26&nbsp;</sup>污鬼叫那人抽了一阵风，大声喊叫，就出来了。<sup class="versenum">27&nbsp;</sup>众人都惊讶，以致彼此对问说：&ldquo;这是什么事？是个新道理啊！他用权柄吩咐污鬼，连污鬼也听从了他。&rdquo;<sup class="versenum">28&nbsp;</sup>耶稣的名声就传遍了加利利的四方。</p>

	<p><sup class="versenum">29&nbsp;</sup>他们一出会堂，就同着<u class="person underline">雅各</u>、<u class="person underline">约翰</u>进了<u class="person underline">西门</u>和<u class="person underline">安得烈</u>的家。<sup class="versenum">30&nbsp;</sup><u class="person underline">西门</u>的岳母正害热病躺着，就有人告诉耶稣。<sup class="versenum">31&nbsp;</sup>耶稣进前拉着她的手，扶她起来，热就退了，她就服侍他们。</p>

	<p><sup class="versenum">32&nbsp;</sup>天晚日落的时候，有人带着一切害病的和被鬼附的来到耶稣跟前。<sup class="versenum">33&nbsp;</sup>合城的人都聚集在门前。<sup class="versenum">34&nbsp;</sup>耶稣治好了许多害各样病的人，又赶出许多鬼，不许鬼说话，因为鬼认识他。</p>
	<!-- end bible --></div>
	向整个地区的传福音，并开展更多的宣教事工（<span class="popup-link" @click = "popUp('pop22')"> 可1:35-39</span>）。

	<div class="popup invisible" id="pop22"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>次日早晨，天未亮的时候，耶稣起来到旷野地方去，在那里祷告。<sup class="versenum">36&nbsp;</sup><u class="person underline">西门</u>和同伴追了他去，<sup class="versenum">37&nbsp;</sup>遇见了就对他说：&ldquo;众人都找你。&rdquo;<sup class="versenum">38&nbsp;</sup>耶稣对他们说：&ldquo;我们可以往别处去，到邻近的乡村，我也好在那里传道，因为我是为这事出来的。&rdquo;<sup class="versenum">39&nbsp;</sup>于是在加利利全地，进了会堂，传道、赶鬼。</p>
	<!-- end bible --></div>
	这种向外拓展的特点是运动的加速，然而反对也加增（<span class="popup-link" @click = "popUp('pop23')"> 可3:6</span>）。

	<div class="popup invisible" id="pop23"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>法利赛人出去，同<u class="person underline">希律</u>一党的人商议怎样可以除灭耶稣。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2>阶段四：倍增领袖（大约公元28年末至公元30年春）<br />
运动的倍增：存祷告的心拣选与发展新的领袖，<br />
并差派成功的倍增者在各地持续建立领袖运动。</h2>

<ul>
	<li class="nobreak-final-final">这段时期为期大约15个月，是从耶稣设立十二使徒开始，使徒在一大群工人中成为&ldquo;受训中的领袖&rdquo;。当时还有更多的追随者和慕道友（<span class="popup-link" @click = "popUp('pop24')"> 路6:12-19</span>）。

	<div class="popup invisible" id="pop24"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>那时，耶稣出去上山祷告，整夜祷告神。<sup class="versenum">13&nbsp;</sup>到了天亮，叫他的门徒来，就从他们中间挑选十二个人，称他们为使徒。<sup class="versenum">14&nbsp;</sup>这十二个人有<u class="person underline">西门</u>，耶稣又给他起名叫<u class="person underline">彼得</u>，还有他兄弟<u class="person underline">安得烈</u>，又有<u class="person underline">雅各</u>和<u class="person underline">约翰</u>，<u class="person underline">腓力</u>和<u class="person underline">巴多罗买</u>，<sup class="versenum">15&nbsp;</sup><u class="person underline">马太</u>和<u class="person underline">多马</u>，<u class="person underline">亚勒腓</u>的儿子<u class="person underline">雅各</u>和奋锐党的<u class="person underline">西门</u>，<sup class="versenum">16&nbsp;</sup><u class="person underline">雅各</u>的儿子<u class="person underline">犹大</u>和卖主的加略人<u class="person underline">犹大</u>。<sup class="versenum">17&nbsp;</sup>耶稣和他们下了山，站在一块平地上。同站的有许多门徒，又有许多百姓，从犹太全地和耶路撒冷，并推罗、西顿的海边来，都要听他讲道，又指望医治他们的病。<sup class="versenum">18&nbsp;</sup>还有被污鬼缠磨的，也得了医治。<sup class="versenum">19&nbsp;</sup>众人都想要摸他，因为有能力从他身上发出来，医好了他们。</p>
	<!-- end bible --></div>
	十二使徒是耶稣精心挑选，委派、训练和投入心力的果子。使徒行传记载五旬节之后，神国度的拓展进一步证实这一点。</li>
	<li class="nobreak-final-final">之后，耶稣差派70人出去（<span class="popup-link" @click = "popUp('pop25')"> 路10:1</span>）。
	<div class="popup invisible" id="pop25"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>这事以后，主又设立七十个人，差遣他们两个两个地在他前面，往自己所要到的各城各地方去。</p>
	<!-- end bible --></div>
	虽然在福音书记录里， 这些人并未被赋予同样正式的领导地位，但他们也是如使徒（意思是：被差遣的人）被差派。我们可以看到耶稣如何设计领袖的倍增，就是耶稣也嘱咐他们，为他们的事工兴起下一代的工人祷告（<span class="popup-link" @click = "popUp('pop26')"> 路10:2</span>）。

	<div class="popup invisible" id="pop26"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>就对他们说：&ldquo;要收的庄稼多，做工的人少。所以，你们当求庄稼的主，打发工人出去收他的庄稼。</p>
	<!-- end bible --></div>
	毫无疑问，这70位无名的宣教士有许多出现在初代教会中，在马可楼上的120人中，并包括耶稣在复活后向那500人显现的人中（<span class="popup-link" @click = "popUp('pop27')"> 林前15:6</span>）。

	<div class="popup invisible" id="pop27"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>后来一时显给五百多弟兄看，其中一大半到如今还在，却也有已经睡了的；</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>&nbsp;</p>

<p style="text-align:justify"><span><span><span lang="ZH-CN">内容参考：</span></span></span></p>

<p style="text-align:justify"><span><span>1.Mark Edwards, <em>Knowing Him Study Guide</em>.</span></span></p>

<p style="text-align:justify"><span><span><span lang="ZH-CN">2.橄榄社区，分卷查经之四福音书（</span>https://ocochome.info/聚会资料/分卷查经/<span lang="ZH-CN">）</span></span></span></p>

<p><u>&nbsp;</u></p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->