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
                        <div class="chapter_number ltr"><h1>28.</h1></div>
                        <div class="chapter_title ltr"><h1>天父的计划</h1></div>
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
	<li class="back">背诵上周经文（<span class="popup-link" @click = "popUp('pop1')"> 路6:20</span>）
	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">20&nbsp;</sup>耶稣举目看着门徒，说：&ldquo;你们贫穷的人有福了！因为神的国是你们的。</p>
	<!-- end bible --></div>
	</li>
</ul>

<h2 class="back">天父心意</h2>

<p>主耶稣教导门徒如何在神在人面前生活，并专一遵行神的话，让神的旨意成全在他们身上，使他们与世人分别出来。今天主耶稣也应许我们这些信靠祂的，有圣灵内住和赐能力，使我们可以效法祂儿子的模样并活出神儿子的实际，成为这世代的光明之子。</p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2up.png" />
<div class="lesson-subtitle"><span class="up">向上看</span></div>
</div>

<h2 class="up">学像耶稣</h2>

<ul class="up">
	<li class="up"><strong>经文背景</strong></li>
	<li class="indent2">平原宝训的讲论中，天国的子民必须活出与世人不一样的生命，他们必须在神面前完全的谦卑，活出合乎神旨意的生活，而这生命和世界上的价值观背道而驰，然而活出那样生命的人，耶稣称他们为有福，因为他们必得神所应许的福分（<span class="popup-link" @click = "popUp('pop2')"> 路加福音20-26</span>）。
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<h3>辩驳耶稣的权柄</h3>

	<p><sup class="versenum">1 </sup>有一天，耶稣在殿里教训百姓、讲福音的时候，祭司长和文士并长老上前来，<sup class="versenum">2&nbsp;</sup>问他说：&ldquo;你告诉我们，你仗着什么权柄做这些事？给你这权柄的是谁呢？&rdquo;<sup class="versenum">3&nbsp;</sup>耶稣回答说：&ldquo;我也要问你们一句话，你们且告诉我，<sup class="versenum">4&nbsp;</sup><u class="person underline">约翰</u>的洗礼是从天上来的，是从人间来的呢？&rdquo;<sup class="versenum">5&nbsp;</sup>他们彼此商议说：&ldquo;我们若说从天上来，他必说：&lsquo;你们为什么不信他呢？&rsquo;<sup class="versenum">6&nbsp;</sup>若说从人间来，百姓都要用石头打死我们，因为他们信<u class="person underline">约翰</u>是先知。&rdquo;<sup class="versenum">7&nbsp;</sup>于是回答说：&ldquo;不知道是从哪里来的。&rdquo;<sup class="versenum">8&nbsp;</sup>耶稣说：&ldquo;我也不告诉你们我仗着什么权柄做这些事。&rdquo;</p>

	<h3>凶恶园户的比喻</h3>

	<p><sup class="versenum">9&nbsp;</sup>耶稣就设比喻对百姓说：&ldquo;有人栽了一个葡萄园，租给园户，就往外国去住了许久。<sup class="versenum">10&nbsp;</sup>到了时候，打发一个仆人到园户那里去，叫他们把园中当纳的果子交给他。园户竟打了他，叫他空手回去。<sup class="versenum">11&nbsp;</sup>又打发一个仆人去，他们也打了他，并且凌辱他，叫他空手回去。<sup class="versenum">12&nbsp;</sup>又打发第三个仆人去，他们也打伤了他，把他推出去了。<sup class="versenum">13&nbsp;</sup>园主说：&lsquo;我怎么办呢？我要打发我的爱子去，或者他们尊敬他。&rsquo;<sup class="versenum">14&nbsp;</sup>不料园户看见他，就彼此商量说：&lsquo;这是承受产业的。我们杀他吧，使产业归于我们！&rsquo;<sup class="versenum">15&nbsp;</sup>于是把他推出葡萄园外杀了。这样，葡萄园的主人要怎样处治他们呢？<sup class="versenum">16&nbsp;</sup>他要来除灭这些园户，将葡萄园转给别人。&rdquo;听见的人说：&ldquo;这是万不可的！&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣看着他们说：&ldquo;经上记着：&lsquo;匠人所弃的石头，已做了房角的头块石头。&rsquo;这是什么意思呢？<sup class="versenum">18&nbsp;</sup>凡掉在那石头上的，必要跌碎；那石头掉在谁的身上，就要把谁砸得稀烂。&rdquo;</p>

	<h3>巧言盘问</h3>

	<p><sup class="versenum">19&nbsp;</sup>文士和祭司长看出这比喻是指着他们说的，当时就想要下手拿他，只是惧怕百姓。<sup class="versenum">20&nbsp;</sup>于是窥探耶稣，打发奸细装作好人，要在他的话上得把柄，好将他交在巡抚的政权之下。<sup class="versenum">21&nbsp;</sup>奸细就问耶稣说：&ldquo;夫子，我们晓得你所讲所传都是正道，也不取人的外貌，乃是诚诚实实传神的道。<sup class="versenum">22&nbsp;</sup>我们纳税给恺撒可以不可以？&rdquo;</p>

	<h3>纳税给恺撒</h3>

	<p><sup class="versenum">23&nbsp;</sup>耶稣看出他们的诡诈，就对他们说：<sup class="versenum">24&nbsp;</sup>&ldquo;拿一个银钱来给我看。这像和这号是谁的？&rdquo;他们说：&ldquo;是恺撒的。&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣说：&ldquo;这样，恺撒的物当归给恺撒，神的物当归给神。&rdquo;<sup class="versenum">26&nbsp;</sup>他们当着百姓，在这话上得不着把柄，又稀奇他的应对，就闭口无言了。</p>

	<h3>撒都该人辩驳复活之事</h3>

	<p><sup class="versenum">27&nbsp;</sup>撒都该人常说没有复活的事。有几个来问耶稣，说：<sup class="versenum">28&nbsp;</sup>&ldquo;夫子，<u class="person underline">摩西</u>为我们写着说：&lsquo;人若有妻无子就死了，他兄弟当娶他的妻，为哥哥生子立后。&rsquo;<sup class="versenum">29&nbsp;</sup>有弟兄七人，第一个娶了妻，没有孩子死了。<sup class="versenum">30&nbsp;</sup>第二个、第三个也娶过她。<sup class="versenum">31&nbsp;</sup>那七个人都娶过她，没有留下孩子就死了。<sup class="versenum">32&nbsp;</sup>后来，妇人也死了。<sup class="versenum">33&nbsp;</sup>这样，当复活的时候，她是哪一个的妻子呢？因为他们七个人都娶过她。&rdquo;<sup class="versenum">34&nbsp;</sup>耶稣说：&ldquo;这世界的人有娶有嫁，<sup class="versenum">35&nbsp;</sup>唯有算为配得那世界与从死里复活的人，也不娶也不嫁。<sup class="versenum">36&nbsp;</sup>因为他们不能再死，和天使一样；既是复活的人，就为神的儿子。<sup class="versenum">37&nbsp;</sup>至于死人复活，<u class="person underline">摩西</u>在&lsquo;荆棘篇&rsquo;上称主是<u class="person underline">亚伯拉罕</u>的神、<u class="person underline">以撒</u>的神、<u class="person underline">雅各</u>的神，就指示明白了。<sup class="versenum">38&nbsp;</sup>神原不是死人的神，乃是活人的神，因为在他那里人都是活的。&rdquo;<sup class="versenum">39&nbsp;</sup>有几个文士说：&ldquo;夫子，你说得好！&rdquo;<sup class="versenum">40&nbsp;</sup>以后他们不敢再问他什么。</p>

	<p><sup class="versenum">41&nbsp;</sup>耶稣对他们说：&ldquo;人怎么说基督是<u class="person underline">大卫</u>的子孙呢？<sup class="versenum">42&nbsp;</sup>诗篇上<u class="person underline">大卫</u>自己说：&lsquo;主对我主说：&ldquo;你坐在我的右边，<sup class="versenum">43&nbsp;</sup>等我使你仇敌做你的脚凳。&rdquo;&rsquo;<sup class="versenum">44&nbsp;</sup><u class="person underline">大卫</u>既称他为主，他怎么又是<u class="person underline">大卫</u>的子孙呢？&rdquo;</p>

	<p><sup class="versenum">45&nbsp;</sup>众百姓听的时候，耶稣对门徒说：<sup class="versenum">46&nbsp;</sup>&ldquo;你们要防备文士。他们好穿长衣游行，喜爱人在街市上问他们安，又喜爱会堂里的高位、筵席上的首座。<sup class="versenum">47&nbsp;</sup>他们侵吞寡妇的家产，假意作很长的祷告。这些人要受更重的刑罚！&rdquo;</p>

	<h3>主称赞寡妇的捐资</h3>

	<p><sup class="versenum">1 </sup>耶稣抬头观看，见财主把捐项投在库里，<sup class="versenum">2&nbsp;</sup>又见一个穷寡妇投了两个小钱，<sup class="versenum">3&nbsp;</sup>就说：&ldquo;我实在告诉你们：这穷寡妇所投的比众人还多。<sup class="versenum">4&nbsp;</sup>因为众人都是自己有余，拿出来投在捐项里，但这寡妇是自己不足，把她一切养生的都投上了。&rdquo;</p>

	<h3>预言圣殿被毁</h3>

	<p><sup class="versenum">5&nbsp;</sup>有人谈论圣殿是用美石和供物装饰的，<sup class="versenum">6&nbsp;</sup>耶稣就说：&ldquo;论到你们所看见的这一切，将来日子到了，在这里没有一块石头留在石头上不被拆毁了。&rdquo;</p>

	<h3>这些事的预兆</h3>

	<p><sup class="versenum">7&nbsp;</sup>他们问他说：&ldquo;夫子，什么时候有这事呢？这事将到的时候有什么预兆呢？&rdquo;<sup class="versenum">8&nbsp;</sup>耶稣说：&ldquo;你们要谨慎，不要受迷惑。因为将来有好些人冒我的名来，说&lsquo;我是基督&rsquo;，又说&lsquo;时候近了&rsquo;。你们不要跟从他们！<sup class="versenum">9&nbsp;</sup>你们听见打仗和扰乱的事，不要惊惶，因为这些事必须先有，只是末期不能立时就到。&rdquo;</p>

	<p><sup class="versenum">10&nbsp;</sup>当时，耶稣对他们说：&ldquo;民要攻打民，国要攻打国，<sup class="versenum">11&nbsp;</sup>地要大大震动，多处必有饥荒、瘟疫，又有可怕的异象和大神迹从天上显现。<sup class="versenum">12&nbsp;</sup>但这一切的事以先，人要下手拿住你们，逼迫你们，把你们交给会堂，并且收在监里，又为我的名拉你们到君王诸侯面前。<sup class="versenum">13&nbsp;</sup>但这些事终必为你们的见证。</p>

	<h3>忍受艰难的必要得救</h3>

	<p><sup class="versenum">14&nbsp;</sup>&ldquo;所以，你们当立定心意，不要预先思想怎样分诉；<sup class="versenum">15&nbsp;</sup>因为我必赐你们口才、智慧，是你们一切敌人所敌不住、驳不倒的。<sup class="versenum">16&nbsp;</sup>连你们的父母、弟兄、亲族、朋友也要把你们交官，你们也有被他们害死的。<sup class="versenum">17&nbsp;</sup>你们要为我的名被众人恨恶，<sup class="versenum">18&nbsp;</sup>然而，你们连一根头发也必不损坏。<sup class="versenum">19&nbsp;</sup>你们常存忍耐，就必保全灵魂。</p>

	<p><sup class="versenum">20&nbsp;</sup>&ldquo;你们看见耶路撒冷被兵围困，就可知道它成荒场的日子近了。<sup class="versenum">21&nbsp;</sup>那时，在犹太的，应当逃到山上；在城里的，应当出来；在乡下的，不要进城。<sup class="versenum">22&nbsp;</sup>因为这是报应的日子，使经上所写的都得应验。<sup class="versenum">23&nbsp;</sup>当那些日子，怀孕的和奶孩子的有祸了！因为将有大灾难降在这地方，也有震怒临到这百姓。<sup class="versenum">24&nbsp;</sup>他们要倒在刀下，又被掳到各国去。耶路撒冷要被外邦人践踏，直到外邦人的日期满了。<sup class="versenum">25&nbsp;</sup>日、月、星辰要显出异兆，地上的邦国也有困苦，因海中波浪的响声就慌慌不定。<sup class="versenum">26&nbsp;</sup>天势都要震动，人想起那将要临到世界的事，就都吓得魂不附体。<sup class="versenum">27&nbsp;</sup>那时，他们要看见人子有能力、有大荣耀驾云降临。<sup class="versenum">28&nbsp;</sup>一有这些事，你们就当挺身昂首，因为你们得赎的日子近了。&rdquo;</p>

	<h3>从无花果树学比方</h3>

	<p><sup class="versenum">29&nbsp;</sup>耶稣又设比喻对他们说：&ldquo;你们看无花果树和各样的树，<sup class="versenum">30&nbsp;</sup>它发芽的时候，你们一看见，自然晓得夏天近了。<sup class="versenum">31&nbsp;</sup>这样，你们看见这些事渐渐地成就，也该晓得神的国近了。<sup class="versenum">32&nbsp;</sup>我实在告诉你们：这世代还没有过去，这些事都要成就。<sup class="versenum">33&nbsp;</sup>天地要废去，我的话却不能废去。</p>

	<p><sup class="versenum">34&nbsp;</sup>&ldquo;你们要谨慎，恐怕因贪食、醉酒并今生的思虑累住你们的心，那日子就如同网罗忽然临到你们，<sup class="versenum">35&nbsp;</sup>因为那日子要这样临到全地上一切居住的人。<sup class="versenum">36&nbsp;</sup>你们要时时警醒，常常祈求，使你们能逃避这一切要来的事，得以站立在人子面前。&rdquo;</p>

	<p><sup class="versenum">37&nbsp;</sup>耶稣每日在殿里教训人，每夜出城在一座山&mdash;&mdash;名叫橄榄山&mdash;&mdash;住宿。<sup class="versenum">38&nbsp;</sup>众百姓清早上圣殿，到耶稣那里，要听他讲道。</p>

	<h3>用计杀主</h3>

	<p><sup class="versenum">1 </sup>除酵节&mdash;&mdash;又叫逾越节&mdash;&mdash;近了。<sup class="versenum">2&nbsp;</sup>祭司长和文士想法子怎么才能杀害耶稣，是因他们惧怕百姓。</p>

	<h3>犹大卖主</h3>

	<p><sup class="versenum">3&nbsp;</sup>这时，<u class="person underline">撒旦</u>入了那称为加略人<u class="person underline">犹大</u>的心，他本是十二门徒里的一个。<sup class="versenum">4&nbsp;</sup>他去和祭司长并守殿官商量，怎么可以把耶稣交给他们。<sup class="versenum">5&nbsp;</sup>他们欢喜，就约定给他银子。<sup class="versenum">6&nbsp;</sup>他应允了，就找机会，要趁众人不在跟前的时候把耶稣交给他们。</p>

	<h3>预备逾越节的筵席</h3>

	<p><sup class="versenum">7&nbsp;</sup>除酵节，须宰逾越羊羔的那一天到了。<sup class="versenum">8&nbsp;</sup>耶稣打发<u class="person underline">彼得</u>、<u class="person underline">约翰</u>说：&ldquo;你们去为我们预备逾越节的筵席，好叫我们吃。&rdquo;<sup class="versenum">9&nbsp;</sup>他们问他说：&ldquo;要我们在哪里预备？&rdquo;<sup class="versenum">10&nbsp;</sup>耶稣说：&ldquo;你们进了城，必有人拿着一瓶水迎面而来，你们就跟着他，到他所进的房子里去，<sup class="versenum">11&nbsp;</sup>对那家的主人说：&lsquo;夫子说：客房在哪里？我与门徒好在那里吃逾越节的筵席。&rsquo;<sup class="versenum">12&nbsp;</sup>他必指给你们摆设整齐的一间大楼，你们就在那里预备。&rdquo;<sup class="versenum">13&nbsp;</sup>他们去了，所遇见的正如耶稣所说的，他们就预备了逾越节的筵席。</p>

	<h3>设立圣餐</h3>

	<p><sup class="versenum">14&nbsp;</sup>时候到了，耶稣坐席，使徒也和他同坐。<sup class="versenum">15&nbsp;</sup>耶稣对他们说：&ldquo;我很愿意在受害以先和你们吃这逾越节的筵席。<sup class="versenum">16&nbsp;</sup>我告诉你们，我不再吃这筵席，直到成就在神的国里。&rdquo;<sup class="versenum">17&nbsp;</sup>耶稣接过杯来，祝谢了，说：&ldquo;你们拿这个，大家分着喝。<sup class="versenum">18&nbsp;</sup>我告诉你们，从今以后，我不再喝这葡萄汁，直等神的国来到。&rdquo;<sup class="versenum">19&nbsp;</sup>又拿起饼来，祝谢了，就掰开，递给他们，说：&ldquo;这是我的身体，为你们舍的。你们也应当如此行，为的是记念我。&rdquo;<sup class="versenum">20&nbsp;</sup>饭后也照样拿起杯来，说：&ldquo;这杯是用我血所立的新约，是为你们流出来的。<sup class="versenum">21&nbsp;</sup>看哪，那卖我之人的手与我一同在桌子上！<sup class="versenum">22&nbsp;</sup>人子固然要照所预定的去世，但卖人子的人有祸了！&rdquo;<sup class="versenum">23&nbsp;</sup>他们就彼此对问，是哪一个要做这事。</p>

	<h3>争论谁为大</h3>

	<p><sup class="versenum">24&nbsp;</sup>门徒起了争论：他们中间哪一个可算为大。<sup class="versenum">25&nbsp;</sup>耶稣说：&ldquo;外邦人有君王为主治理他们，那掌权管他们的称为恩主。<sup class="versenum">26&nbsp;</sup>但你们不可这样，你们里头为大的，倒要像年幼的；为首领的，倒要像服侍人的。<sup class="versenum">27&nbsp;</sup>是谁为大？是坐席的呢，是服侍人的呢？不是坐席的大吗？然而，我在你们中间如同服侍人的。<sup class="versenum">28&nbsp;</sup>我在磨炼之中，常和我同在的就是你们。<sup class="versenum">29&nbsp;</sup>我将国赐给你们，正如我父赐给我一样，<sup class="versenum">30&nbsp;</sup>叫你们在我国里坐在我的席上吃喝，并且坐在宝座上审判以色列十二个支派。&rdquo;</p>

	<h3>预言彼得不认主</h3>

	<p><sup class="versenum">31&nbsp;</sup>主又说：&ldquo;<u class="person underline">西门</u>，<u class="person underline">西门</u>，<u class="person underline">撒旦</u>想要得着你们，好筛你们像筛麦子一样。<sup class="versenum">32&nbsp;</sup>但我已经为你祈求，叫你不至于失了信心。你回头以后，要坚固你的弟兄。&rdquo;<sup class="versenum">33&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;主啊，我就是同你下监，同你受死，也是甘心！&rdquo;<sup class="versenum">34&nbsp;</sup>耶稣说：&ldquo;<u class="person underline">彼得</u>，我告诉你：今日鸡还没有叫，你要三次说不认得我。&rdquo;</p>

	<p><sup class="versenum">35&nbsp;</sup>耶稣又对他们说：&ldquo;我差你们出去的时候，没有钱囊、没有口袋、没有鞋，你们缺少什么没有？&rdquo;他们说：&ldquo;没有。&rdquo;<sup class="versenum">36&nbsp;</sup>耶稣说：&ldquo;但如今有钱囊的可以带着，有口袋的也可以带着，没有刀的要卖衣服买刀。<sup class="versenum">37&nbsp;</sup>我告诉你们，经上写着说&lsquo;他被列在罪犯之中&rsquo;，这话必应验在我身上，因为那关系我的事必然成就。&rdquo;<sup class="versenum">38&nbsp;</sup>他们说：&ldquo;主啊，请看，这里有两把刀！&rdquo;耶稣说：&ldquo;够了。&rdquo;</p>

	<h3>在客西马尼祷告</h3>

	<p><sup class="versenum">39&nbsp;</sup>耶稣出来，照常往橄榄山去，门徒也跟随他。<sup class="versenum">40&nbsp;</sup>到了那地方，就对他们说：&ldquo;你们要祷告，免得入了迷惑。&rdquo;<sup class="versenum">41&nbsp;</sup>于是离开他们约有扔一块石头那么远，跪下祷告，<sup class="versenum">42&nbsp;</sup>说：&ldquo;父啊！你若愿意，就把这杯撤去！然而，不要成就我的意思，只要成就你的意思。&rdquo;<sup class="versenum">43&nbsp;</sup>有一位天使从天上显现，加添他的力量。<sup class="versenum">44&nbsp;</sup>耶稣极其伤痛，祷告更加恳切，汗珠如大血点滴在地上。</p>

	<h3>主勉励门徒警醒祷告</h3>

	<p><sup class="versenum">45&nbsp;</sup>祷告完了，就起来，到门徒那里，见他们因为忧愁都睡着了，<sup class="versenum">46&nbsp;</sup>就对他们说：&ldquo;你们为什么睡觉呢？起来祷告，免得入了迷惑。&rdquo;</p>

	<h3>盗卖和捉拿</h3>

	<p><sup class="versenum">47&nbsp;</sup>说话之间，来了许多人。那十二个门徒里名叫<u class="person underline">犹大</u>的走在前头，就近耶稣，要与他亲嘴。<sup class="versenum">48&nbsp;</sup>耶稣对他说：&ldquo;<u class="person underline">犹大</u>，你用亲嘴的暗号卖人子吗？&rdquo;<sup class="versenum">49&nbsp;</sup>左右的人见光景不好，就说：&ldquo;主啊，我们拿刀砍可以不可以？&rdquo;<sup class="versenum">50&nbsp;</sup>内中有一个人把大祭司的仆人砍了一刀，削掉了他的右耳。<sup class="versenum">51&nbsp;</sup>耶稣说：&ldquo;到了这个地步，由他们吧！&rdquo;就摸那人的耳朵，把他治好了。<sup class="versenum">52&nbsp;</sup>耶稣对那些来拿他的祭司长和守殿官并长老说：&ldquo;你们带着刀棒出来拿我，如同拿强盗吗？<sup class="versenum">53&nbsp;</sup>我天天同你们在殿里，你们不下手拿我。现在却是你们的时候，黑暗掌权了。&rdquo;</p>

	<h3>彼得三次不认主</h3>

	<p><sup class="versenum">54&nbsp;</sup>他们拿住耶稣，把他带到大祭司的宅里。<u class="person underline">彼得</u>远远地跟着。<sup class="versenum">55&nbsp;</sup>他们在院子里生了火，一同坐着，<u class="person underline">彼得</u>也坐在他们中间。<sup class="versenum">56&nbsp;</sup>有一个使女看见<u class="person underline">彼得</u>坐在火光里，就定睛看他，说：&ldquo;这个人素来也是同那人一伙的。&rdquo;<sup class="versenum">57&nbsp;</sup><u class="person underline">彼得</u>却不承认，说：&ldquo;女子，我不认得他。&rdquo;<sup class="versenum">58&nbsp;</sup>过了不多的时候，又有一个人看见他，说：&ldquo;你也是他们一党的。&rdquo;<u class="person underline">彼得</u>说：&ldquo;你这个人！我不是。&rdquo;<sup class="versenum">59&nbsp;</sup>约过了一小时，又有一个人极力地说：&ldquo;他实在是同那人一伙的，因为他也是加利利人。&rdquo;<sup class="versenum">60&nbsp;</sup><u class="person underline">彼得</u>说：&ldquo;你这个人！我不晓得你说的是什么！&rdquo;正说话之间，鸡就叫了。<sup class="versenum">61&nbsp;</sup>主转过身来看<u class="person underline">彼得</u>，<u class="person underline">彼得</u>便想起主对他所说的话：&ldquo;今日鸡叫以先，你要三次不认我。&rdquo;<sup class="versenum">62&nbsp;</sup>他就出去痛哭。</p>

	<h3>戏弄耶稣</h3>

	<p><sup class="versenum">63&nbsp;</sup>看守耶稣的人戏弄他，打他，<sup class="versenum">64&nbsp;</sup>又蒙着他的眼，问他说：&ldquo;你是先知，告诉我们打你的是谁？&rdquo;<sup class="versenum">65&nbsp;</sup>他们还用许多别的话辱骂他。</p>

	<h3>在公会前受审</h3>

	<p><sup class="versenum">66&nbsp;</sup>天一亮，民间的众长老连祭司长带文士都聚会，把耶稣带到他们的公会里，<sup class="versenum">67&nbsp;</sup>说：&ldquo;你若是基督，就告诉我们。&rdquo;耶稣说：&ldquo;我若告诉你们，你们也不信；<sup class="versenum">68&nbsp;</sup>我若问你们，你们也不回答。<sup class="versenum">69&nbsp;</sup>从今以后，人子要坐在神权能的右边。&rdquo;<sup class="versenum">70&nbsp;</sup>他们都说：&ldquo;这样，你是神的儿子吗？&rdquo;耶稣说：&ldquo;你们所说的是。&rdquo;<sup class="versenum">71&nbsp;</sup>他们说：&ldquo;何必再用见证呢？他亲口所说的，我们都亲自听见了。&rdquo;</p>

	<h3>将耶稣解交彼拉多</h3>

	<p><sup class="versenum">1 </sup>众人都起来，把耶稣解到<u class="person underline">彼拉多</u>面前，<sup class="versenum">2&nbsp;</sup>就告他说：&ldquo;我们见这人诱惑国民，禁止纳税给恺撒，并说自己是基督，是王。&rdquo;<sup class="versenum">3&nbsp;</sup><u class="person underline">彼拉多</u>问耶稣说：&ldquo;你是犹太人的王吗？&rdquo;耶稣回答说：&ldquo;你说的是。&rdquo;<sup class="versenum">4&nbsp;</sup><u class="person underline">彼拉多</u>对祭司长和众人说：&ldquo;我查不出这人有什么罪来。&rdquo;<sup class="versenum">5&nbsp;</sup>但他们越发极力地说：&ldquo;他煽惑百姓，在犹太遍地传道，从加利利起直到这里了。&rdquo;<sup class="versenum">6&nbsp;</sup><u class="person underline">彼拉多</u>一听见，就问：&ldquo;这人是加利利人吗？&rdquo;<sup class="versenum">7&nbsp;</sup>既晓得耶稣属<u class="person underline">希律</u>所管，就把他送到<u class="person underline">希律</u>那里去。那时<u class="person underline">希律</u>正在耶路撒冷。</p>

	<h3>耶稣在希律前被藐视</h3>

	<p><sup class="versenum">8&nbsp;</sup><u class="person underline">希律</u>看见耶稣，就很欢喜，因为听见过他的事，久已想要见他，并且指望看他行一件神迹。<sup class="versenum">9&nbsp;</sup>于是问他许多的话，耶稣却一言不答。<sup class="versenum">10&nbsp;</sup>祭司长和文士都站着，极力地告他。<sup class="versenum">11&nbsp;</sup><u class="person underline">希律</u>和他的兵丁就藐视耶稣，戏弄他，给他穿上华丽衣服，把他送回<u class="person underline">彼拉多</u>那里去。<sup class="versenum">12&nbsp;</sup>从前<u class="person underline">希律</u>和<u class="person underline">彼拉多</u>彼此有仇，在那一天就成了朋友。</p>

	<h3>在彼拉多前受审</h3>

	<p><sup class="versenum">13&nbsp;</sup><u class="person underline">彼拉多</u>传齐了祭司长和官府并百姓，<sup class="versenum">14&nbsp;</sup>就对他们说：&ldquo;你们解这人到我这里，说他是诱惑百姓的。看哪，我也曾将你们告他的事在你们面前审问他，并没有查出他什么罪来。<sup class="versenum">15&nbsp;</sup>就是<u class="person underline">希律</u>也是如此，所以把他送回来。可见他没有做什么该死的事。<sup class="versenum">16&nbsp;</sup>故此，我要责打他，把他释放了。&rdquo;</p>

	<h3>除掉耶稣释放巴拉巴</h3>

	<p><sup class="versenum">18&nbsp;</sup>众人却一齐喊着说：&ldquo;除掉这个人！释放<u class="person underline">巴拉巴</u>给我们！&rdquo;<sup class="versenum">19&nbsp;</sup>这<u class="person underline">巴拉巴</u>是因在城里作乱杀人，下在监里的。<sup class="versenum">20&nbsp;</sup><u class="person underline">彼拉多</u>愿意释放耶稣，就又劝解他们。<sup class="versenum">21&nbsp;</sup>无奈他们喊着说：&ldquo;钉他十字架！钉他十字架！&rdquo;<sup class="versenum">22&nbsp;</sup><u class="person underline">彼拉多</u>第三次对他们说：&ldquo;为什么呢？这人做了什么恶事呢？我并没有查出他什么该死的罪来。所以，我要责打他，把他释放了。&rdquo;<sup class="versenum">23&nbsp;</sup>他们大声催逼<u class="person underline">彼拉多</u>，求他把耶稣钉在十字架上，他们的声音就得了胜。<sup class="versenum">24&nbsp;</sup><u class="person underline">彼拉多</u>这才照他们所求的定案，<sup class="versenum">25&nbsp;</sup>把他们所求的那作乱杀人下在监里的释放了，把耶稣交给他们，任凭他们的意思行。</p>

	<p><sup class="versenum">26&nbsp;</sup>带耶稣去的时候，有一个古利奈人<u class="person underline">西门</u>从乡下来，他们就抓住他，把十字架搁在他身上，叫他背着跟随耶稣。</p>

	<h3>许多人为耶稣号啕痛哭</h3>

	<p><sup class="versenum">27&nbsp;</sup>有许多百姓跟随耶稣，内中有好些妇女，妇女们为他号啕痛哭。<sup class="versenum">28&nbsp;</sup>耶稣转身对她们说：&ldquo;耶路撒冷的女子，不要为我哭，当为自己和自己的儿女哭。<sup class="versenum">29&nbsp;</sup>因为日子要到，人必说：&lsquo;不生育的和未曾怀胎的、未曾乳养婴孩的有福了！&rsquo;<sup class="versenum">30&nbsp;</sup>那时，人要向大山说&lsquo;倒在我们身上！&rsquo;，向小山说&lsquo;遮盖我们！&rsquo;。<sup class="versenum">31&nbsp;</sup>这些事既行在有汁水的树上，那枯干的树将来怎么样呢？&rdquo;</p>

	<p><sup class="versenum">32&nbsp;</sup>又有两个犯人，和耶稣一同带来处死。</p>

	<h3>耶稣被钉十字架</h3>

	<p><sup class="versenum">33&nbsp;</sup>到了一个地方，名叫髑髅地，就在那里把耶稣钉在十字架上，又钉了两个犯人，一个在左边，一个在右边。<sup class="versenum">34&nbsp;</sup>当下耶稣说：&ldquo;父啊，赦免他们！因为他们所做的他们不晓得。&rdquo;兵丁就拈阄分他的衣服。<sup class="versenum">35&nbsp;</sup>百姓站在那里观看。官府也嗤笑他，说：&ldquo;他救了别人，他若是基督，神所拣选的，可以救自己吧！&rdquo;<sup class="versenum">36&nbsp;</sup>兵丁也戏弄他，上前拿醋送给他喝，<sup class="versenum">37&nbsp;</sup>说：&ldquo;你若是犹太人的王，可以救自己吧！&rdquo;<sup class="versenum">38&nbsp;</sup>在耶稣以上有一个牌子，写着：&ldquo;这是犹太人的王。&rdquo;</p>

	<h3>犯人求主记念</h3>

	<p><sup class="versenum">39&nbsp;</sup>那同钉的两个犯人，有一个讥诮他说：&ldquo;你不是基督吗？可以救自己和我们吧！&rdquo;<sup class="versenum">40&nbsp;</sup>那一个就应声责备他说：&ldquo;你既是一样受刑的，还不怕神吗？<sup class="versenum">41&nbsp;</sup>我们是应该的，因我们所受的与我们所做的相称，但这个人没有做过一件不好的事。&rdquo;<sup class="versenum">42&nbsp;</sup>就说：&ldquo;耶稣啊，你得国降临的时候，求你记念我！&rdquo;<sup class="versenum">43&nbsp;</sup>耶稣对他说：&ldquo;我实在告诉你：今日你要同我在乐园里了！&rdquo;</p>

	<h3>耶稣死的景象</h3>

	<p><sup class="versenum">44&nbsp;</sup>那时约有午正，遍地都黑暗了，直到申初，<sup class="versenum">45&nbsp;</sup>日头变黑了，殿里的幔子从当中裂为两半。<sup class="versenum">46&nbsp;</sup>耶稣大声喊着说：&ldquo;父啊，我将我的灵魂交在你手里！&rdquo;说了这话，气就断了。<sup class="versenum">47&nbsp;</sup>百夫长看见所成的事，就归荣耀于神，说：&ldquo;这真是个义人！&rdquo;<sup class="versenum">48&nbsp;</sup>聚集观看的众人见了这所成的事，都捶着胸回去了。<sup class="versenum">49&nbsp;</sup>还有一切与耶稣熟识的人和从加利利跟着他来的妇女们，都远远地站着看这些事。</p>

	<h3>安放在新坟墓里</h3>

	<p><sup class="versenum">50&nbsp;</sup>有一个人名叫<u class="person underline">约瑟</u>，是个议士，为人善良公义，<sup class="versenum">51&nbsp;</sup>众人所谋所为他并没有附从；他本是犹太亚利马太城里素常盼望神国的人。<sup class="versenum">52&nbsp;</sup>这人去见<u class="person underline">彼拉多</u>，求耶稣的身体。<sup class="versenum">53&nbsp;</sup>就取下来，用细麻布裹好，安放在石头凿成的坟墓里，那里头从来没有葬过人。<sup class="versenum">54&nbsp;</sup>那日是预备日，安息日也快到了。<sup class="versenum">55&nbsp;</sup>那些从加利利和耶稣同来的妇女跟在后面，看见了坟墓和他的身体怎样安放。<sup class="versenum">56&nbsp;</sup>她们就回去，预备了香料香膏。</p>

	<p>她们在安息日便遵着诫命安息了。</p>

	<h3>从死里复活</h3>

	<p><sup class="versenum">1 </sup>七日的头一日，黎明的时候，那些妇女带着所预备的香料来到坟墓前，<sup class="versenum">2&nbsp;</sup>看见石头已经从坟墓滚开了。<sup class="versenum">3&nbsp;</sup>她们就进去，只是不见主耶稣的身体。<sup class="versenum">4&nbsp;</sup>正在猜疑之间，忽然有两个人站在旁边，衣服放光。<sup class="versenum">5&nbsp;</sup>妇女们惊怕，将脸伏地。那两个人就对她们说：&ldquo;为什么在死人中找活人呢？<sup class="versenum">6&nbsp;</sup>他不在这里，已经复活了。当记念他还在加利利的时候怎样告诉你们，<sup class="versenum">7&nbsp;</sup>说：&lsquo;人子必须被交在罪人手里，钉在十字架上，第三日复活。&rsquo;&rdquo;<sup class="versenum">8&nbsp;</sup>她们就想起耶稣的话来，<sup class="versenum">9&nbsp;</sup>便从坟墓那里回去，把这一切事告诉十一个使徒和其余的人。<sup class="versenum">10&nbsp;</sup>那告诉使徒的就是抹大拉的<u class="person underline">马利亚</u>和<u class="person underline">约亚拿</u>，并<u class="person underline">雅各</u>的母亲<u class="person underline">马利亚</u>，还有与她们在一处的妇女。<sup class="versenum">11&nbsp;</sup>她们这些话使徒以为是胡言，就不相信。<sup class="versenum">12&nbsp;</sup><u class="person underline">彼得</u>起来，跑到坟墓前，低头往里看，见细麻布独在一处，就回去了，心里稀奇所成的事。</p>

	<h3>耶稣与两个行路的谈论</h3>

	<p><sup class="versenum">13&nbsp;</sup>正当那日，门徒中有两个人往一个村子去。这村子名叫以马忤斯，离耶路撒冷约有二十五里。<sup class="versenum">14&nbsp;</sup>他们彼此谈论所遇见的这一切事。<sup class="versenum">15&nbsp;</sup>正谈论相问的时候，耶稣亲自就近他们，和他们同行，<sup class="versenum">16&nbsp;</sup>只是他们的眼睛迷糊了，不认识他。<sup class="versenum">17&nbsp;</sup>耶稣对他们说：&ldquo;你们走路彼此谈论的是什么事呢？&rdquo;他们就站住，脸上带着愁容。<sup class="versenum">18&nbsp;</sup>二人中有一个名叫<u class="person underline">革流巴</u>的回答说：&ldquo;你在耶路撒冷作客，还不知道这几天在那里所出的事吗？&rdquo;<sup class="versenum">19&nbsp;</sup>耶稣说：&ldquo;什么事呢？&rdquo;他们说：&ldquo;就是拿撒勒人耶稣的事。他是个先知，在神和众百姓面前说话行事都有大能，<sup class="versenum">20&nbsp;</sup>祭司长和我们的官府竟把他解去，定了死罪，钉在十字架上。<sup class="versenum">21&nbsp;</sup>但我们素来所盼望、要赎以色列民的就是他。不但如此，而且这事成就，现在已经三天了。<sup class="versenum">22&nbsp;</sup>再者，我们中间有几个妇女使我们惊奇，她们清早到了坟墓那里，<sup class="versenum">23&nbsp;</sup>不见他的身体，就回来告诉我们说看见了天使显现，说他活了。<sup class="versenum">24&nbsp;</sup>又有我们的几个人往坟墓那里去，所遇见的正如妇女们所说的，只是没有看见他。&rdquo;<sup class="versenum">25&nbsp;</sup>耶稣对他们说：&ldquo;无知的人哪，先知所说的一切话，你们的心信得太迟钝了！<sup class="versenum">26&nbsp;</sup>基督这样受害，又进入他的荣耀，岂不是应当的吗？&rdquo;<sup class="versenum">27&nbsp;</sup>于是从<u class="person underline">摩西</u>和众先知起，凡经上所指着自己的话，都给他们讲解明白了。</p>

	<h3>显现在以马忤斯</h3>

	<p><sup class="versenum">28&nbsp;</sup>将近他们所去的村子，耶稣好像还要往前行，<sup class="versenum">29&nbsp;</sup>他们却强留他，说：&ldquo;时候晚了，日头已经平西了，请你同我们住下吧！&rdquo;耶稣就进去，要同他们住下。<sup class="versenum">30&nbsp;</sup>到了坐席的时候，耶稣拿起饼来，祝谢了，掰开，递给他们。<sup class="versenum">31&nbsp;</sup>他们的眼睛明亮了，这才认出他来。忽然耶稣不见了。<sup class="versenum">32&nbsp;</sup>他们彼此说：&ldquo;在路上他和我们说话，给我们讲解圣经的时候，我们的心岂不是火热的吗？&rdquo;<sup class="versenum">33&nbsp;</sup>他们就立时起身，回耶路撒冷去。正遇见十一个使徒和他们的同人聚集在一处，<sup class="versenum">34&nbsp;</sup>说：&ldquo;主果然复活，已经现给<u class="person underline">西门</u>看了。&rdquo;<sup class="versenum">35&nbsp;</sup>两个人就把路上所遇见和掰饼的时候怎么被他们认出来的事，都述说了一遍。</p>

	<h3>显现在耶路撒冷</h3>

	<p><sup class="versenum">36&nbsp;</sup>正说这话的时候，耶稣亲自站在他们当中，说：&ldquo;愿你们平安！&rdquo;<sup class="versenum">37&nbsp;</sup>他们却惊慌害怕，以为所看见的是魂。<sup class="versenum">38&nbsp;</sup>耶稣说：&ldquo;你们为什么愁烦？为什么心里起疑念呢？<sup class="versenum">39&nbsp;</sup>你们看我的手、我的脚，就知道实在是我了。摸我看看！魂无骨无肉，你们看，我是有的。&rdquo;<sup class="versenum">40&nbsp;</sup>说了这话，就把手和脚给他们看。<sup class="versenum">41&nbsp;</sup>他们正喜得不敢信，并且稀奇，耶稣就说：&ldquo;你们这里有什么吃的没有？&rdquo;<sup class="versenum">42&nbsp;</sup>他们便给他一片烧鱼，<sup class="versenum">43&nbsp;</sup>他接过来，在他们面前吃了。</p>

	<h3>等候主的应许</h3>

	<p><sup class="versenum">44&nbsp;</sup>耶稣对他们说：&ldquo;这就是我从前与你们同在之时所告诉你们的话说：<u class="person underline">摩西</u>的律法、先知的书和诗篇上所记的，凡指着我的话都必须应验。&rdquo;<sup class="versenum">45&nbsp;</sup>于是耶稣开他们的心窍，使他们能明白圣经。<sup class="versenum">46&nbsp;</sup>又对他们说：&ldquo;照经上所写的，基督必受害，第三日从死里复活，<sup class="versenum">47&nbsp;</sup>并且人要奉他的名传悔改、赦罪的道，从耶路撒冷起直传到万邦。<sup class="versenum">48&nbsp;</sup>你们就是这些事的见证。<sup class="versenum">49&nbsp;</sup>我要将我父所应许的降在你们身上，你们要在城里等候，直到你们领受从上头来的能力。&rdquo;</p>

	<p><sup class="versenum">50&nbsp;</sup>耶稣领他们到伯大尼的对面，就举手给他们祝福。<sup class="versenum">51&nbsp;</sup>正祝福的时候，他就离开他们，被带到天上去了。<sup class="versenum">52&nbsp;</sup>他们就拜他，大大地欢喜，回耶路撒冷去，<sup class="versenum">53&nbsp;</sup>常在殿里称颂神。</p>
	<!-- end bible --></div>
	</li>
	<li class="up"><strong>阅读经文</strong></li>
</ul>

<p class="indent2">阅读或观看《路加福音6:27-49》两遍。</p>

<button id="Button0" type="button" class="collapsible bible">读两遍 路加福音6:27-49</button><div class="collapsed" id ="Text0">

<p><sup>27</sup>只是我告诉你们这听道的人，你们的仇敌，要爱他！恨你们的，要待他好！<sup>28</sup>咒诅你们的，要为他祝福！凌辱你们的，要为他祷告！<sup>29</sup>有人打你这边的脸，连那边的脸也由他打。有人夺你的外衣，连里衣也由他拿去。<sup>30</sup>凡求你的，就给他。有人夺你的东西去，不用再要回来。<sup>31</sup>你们愿意人怎样待你们，你们也要怎样待人。</p>

<p><sup>32</sup>你们若单爱那爱你们的人，有什么可酬谢的呢？就是罪人也爱那爱他们的人。<sup>33</sup>你们若善待那善待你们的人，有什么可酬谢的呢？就是罪人也是这样行。<sup>34</sup>你们若借给人，指望从他收回，有什么可酬谢的呢？就是罪人也借给罪人，要如数收回。<sup>35</sup>你们倒要爱仇敌，也要善待他们，并要借给人不指望偿还，你们的赏赐就必大了，你们也必作至高者的儿子，因为他恩待那忘恩的和作恶的。<sup>36</sup>你们要慈悲，像你们的父慈悲一样。</p>

<p><sup>37</sup>你们不要论断人，就不被论断；你们不要定人的罪，就不被定罪；你们要饶恕人，就必蒙饶恕（注：&ldquo;饶恕&rdquo;原文作&ldquo;释放&rdquo;）；<sup>38</sup>你们要给人，就必有给你们的，并且用十足的升斗，连摇带按，上尖下流地倒在你们怀里；因为你们用什么量器量给人，也必用什么量器量给你们。&rdquo;</p>

<p><sup>39</sup>耶稣又用比喻对他们说：&ldquo;瞎子岂能领瞎子，两个人不是都要掉在坑里吗？<sup>40</sup>学生不能高过先生；凡学成了的不过和先生一样。<sup>41</sup>为什么看见你弟兄眼中有刺，却不想自己眼中有梁木呢？<sup>42</sup>你不见自己眼中有梁木，怎能对你弟兄说&lsquo;容我去掉你眼中的刺&rsquo;呢？你这假冒为善的人！先去掉自己眼中的梁木，然后才能看得清楚，去掉你弟兄眼中的刺。<sup>43</sup>因为，没有好树结坏果子，也没有坏树结好果子。<sup>44</sup>凡树木看果子，就可以认出它来。人不是从荆棘上摘无花果，也不是从蒺藜里摘葡萄。<sup>45</sup>善人从他心里所存的善就发出善来；恶人从他心里所存的恶就发出恶来；因为心里所充满的，口里就说出来。&rdquo;</p>

<p><sup>46</sup>你们为什么称呼我&lsquo;主啊，主啊&rsquo;却不遵我的话行呢？<sup>47</sup>凡到我这里来，听见我的话就去行的，我要告诉你们他像什么人：<sup>48</sup>他像一个人盖房子，深深地挖地，把根基安在盘石上；到发大水的时候，水冲那房子，房子总不能摇动，因为根基立在盘石上（注：有古卷作&ldquo;因为盖造得好&rdquo;）。<sup>49</sup>惟有听见不去行的，就像一个人在土地上盖房子，没有根基；水一冲，随即倒塌了，并且那房子坏得很大。&rdquo;</p>

<p></p>

</div>

<button id="MC2/cmn/video/multiply2/228.mp4" type="button" class="external-movie">
         观看&nbsp;路加福音6:27-49&nbsp;</button>
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

<p class="up">耶稣进一步向门徒解释天国的生活。天国的扩张计划之一是&ldquo;爱你的仇敌&rdquo;。这是一种不求回报的爱，也正是这种非常彻底、如同上帝的爱才能改变世界。&ldquo;爱人&rdquo;包括：不论断人、不定罪别人的行为。相反地，我们要因耶稣的名饶恕人，不是因为这些人配得，而是因为耶稣要我们这样做。我们应该花些时间检视我们的生命。祂教导领袖&ldquo;瞎子不能领瞎子&rdquo;，他们需要活出爱的生活样式；祂提醒门徒要仔细观察祂的生命和事工，&ldquo;不要称呼我主，却不遵我的话行&rdquo;。</p>

<p class="up">（进深学习：<span class="popup-link" @click = "popUp('pop3')"> 马太福音5:17-8:1</span>）</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<h3>耶稣来成全律法和先知的道</h3>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;莫想我来要废掉律法和先知，我来不是要废掉，乃是要成全。<sup class="versenum">18&nbsp;</sup>我实在告诉你们：就是到天地都废去了，律法的一点一画也不能废去，都要成全。<sup class="versenum">19&nbsp;</sup>所以，无论何人废掉这诫命中最小的一条，又教训人这样做，他在天国要称为最小的；但无论何人遵行这诫命，又教训人遵行，他在天国要称为大的。<sup class="versenum">20&nbsp;</sup>我告诉你们：你们的义若不胜于文士和法利赛人的义，断不能进天国。</p>

<h3>论仇恨</h3>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;你们听见有吩咐古人的话说：&lsquo;不可杀人&rsquo;，又说：&lsquo;凡杀人的难免受审判。&rsquo;<sup class="versenum">22&nbsp;</sup>只是我告诉你们，凡向弟兄动怒的，难免受审判；凡骂弟兄是拉加的，难免公会的审断；凡骂弟兄是魔利的，难免地狱的火。<sup class="versenum">23&nbsp;</sup>所以，你在祭坛上献礼物的时候，若想起弟兄向你怀怨，<sup class="versenum">24&nbsp;</sup>就把礼物留在坛前，先去同弟兄和好，然后来献礼物。<sup class="versenum">25&nbsp;</sup>你同告你的对头还在路上，就赶紧与他和息，恐怕他把你送给审判官，审判官交付衙役，你就下在监里了。<sup class="versenum">26&nbsp;</sup>我实在告诉你：若有一文钱没有还清，你断不能从那里出来。</p>

<h3>论奸淫</h3>

<p><sup class="versenum">27&nbsp;</sup>&ldquo;你们听见有话说：&lsquo;不可奸淫。&rsquo;<sup class="versenum">28&nbsp;</sup>只是我告诉你们，凡看见妇女就动淫念的，这人心里已经与她犯奸淫了。<sup class="versenum">29&nbsp;</sup>若是你的右眼叫你跌倒，就剜出来丢掉！宁可失去百体中的一体，不叫全身丢在地狱里。<sup class="versenum">30&nbsp;</sup>若是右手叫你跌倒，就砍下来丢掉！宁可失去百体中的一体，不叫全身下入地狱。<sup class="versenum">31&nbsp;</sup>又有话说：&lsquo;人若休妻，就当给她休书。&rsquo;<sup class="versenum">32&nbsp;</sup>只是我告诉你们，凡休妻的，若不是为淫乱的缘故，就是叫她做淫妇了；人若娶这被休的妇人，也是犯奸淫了。</p>

<h3>论起誓</h3>

<p><sup class="versenum">33&nbsp;</sup>&ldquo;你们又听见有吩咐古人的话说：&lsquo;不可背誓，所起的誓总要向主谨守。&rsquo;<sup class="versenum">34&nbsp;</sup>只是我告诉你们，什么誓都不可起。不可指着天起誓，因为天是神的座位；<sup class="versenum">35&nbsp;</sup>不可指着地起誓，因为地是他的脚凳；也不可指着耶路撒冷起誓，因为耶路撒冷是大君的京城；<sup class="versenum">36&nbsp;</sup>又不可指着你的头起誓，因为你不能使一根头发变黑变白了。<sup class="versenum">37&nbsp;</sup>你们的话，是就说是，不是就说不是；若再多说，就是出于那恶者。</p>

<h3>论爱仇敌</h3>

<p><sup class="versenum">38&nbsp;</sup>&ldquo;你们听见有话说：&lsquo;以眼还眼，以牙还牙。&rsquo;<sup class="versenum">39&nbsp;</sup>只是我告诉你们，不要与恶人作对。有人打你的右脸，连左脸也转过来由他打；<sup class="versenum">40&nbsp;</sup>有人想要告你，要拿你的里衣，连外衣也由他拿去；<sup class="versenum">41&nbsp;</sup>有人强逼你走一里路，你就同他走二里。<sup class="versenum">42&nbsp;</sup>有求你的，就给他；有向你借贷的，不可推辞。</p>

<p><sup class="versenum">43&nbsp;</sup>&ldquo;你们听见有话说：&lsquo;当爱你的邻舍，恨你的仇敌。&rsquo;<sup class="versenum">44&nbsp;</sup>只是我告诉你们，要爱你们的仇敌，为那逼迫你们的祷告，<sup class="versenum">45&nbsp;</sup>这样就可以做你们天父的儿子，因为他叫日头照好人也照歹人，降雨给义人也给不义的人。<sup class="versenum">46&nbsp;</sup>你们若单爱那爱你们的人，有什么赏赐呢？就是税吏不也是这样行吗？<sup class="versenum">47&nbsp;</sup>你们若单请你弟兄的安，比人有什么长处呢？就是外邦人不也是这样行吗？<sup class="versenum">48&nbsp;</sup>所以你们要完全，像你们的天父完全一样。</p>

<h3>论施舍</h3>

<p><sup class="versenum">1 </sup>&ldquo;你们要小心，不可将善事行在人的面前，故意叫他们看见。若是这样，就不能得你们天父的赏赐了。<sup class="versenum">2&nbsp;</sup>所以，你施舍的时候，不可在你面前吹号，像那假冒为善的人在会堂里和街道上所行的，故意要得人的荣耀。我实在告诉你们：他们已经得了他们的赏赐。<sup class="versenum">3&nbsp;</sup>你施舍的时候，不要叫左手知道右手所做的，<sup class="versenum">4&nbsp;</sup>要叫你施舍的事行在暗中，你父在暗中察看，必然报答你。</p>

<h3>论祷告</h3>

<p><sup class="versenum">5&nbsp;</sup>&ldquo;你们祷告的时候，不可像那假冒为善的人，爱站在会堂里和十字路口上祷告，故意叫人看见。我实在告诉你们：他们已经得了他们的赏赐。<sup class="versenum">6&nbsp;</sup>你祷告的时候，要进你的内屋，关上门，祷告你在暗中的父，你父在暗中察看，必然报答你。<sup class="versenum">7&nbsp;</sup>你们祷告，不可像外邦人用许多重复话，他们以为话多了必蒙垂听。<sup class="versenum">8&nbsp;</sup>你们不可效法他们，因为你们没有祈求以先，你们所需用的，你们的父早已知道了。</p>

<h3>主训人的祷告</h3>

<p><sup class="versenum">9&nbsp;</sup>&ldquo;所以，你们祷告要这样说：&lsquo;我们在天上的父，愿人都尊你的名为圣，<sup class="versenum">10&nbsp;</sup>愿你的国降临，愿你的旨意行在地上，如同行在天上。<sup class="versenum">11&nbsp;</sup>我们日用的饮食，今日赐给我们。<sup class="versenum">12&nbsp;</sup>免我们的债，如同我们免了人的债。<sup class="versenum">13&nbsp;</sup>不叫我们遇见试探，救我们脱离凶恶。因为国度、权柄、荣耀，全是你的，直到永远。阿门。&rsquo;<sup class="versenum">14&nbsp;</sup>你们饶恕人的过犯，你们的天父也必饶恕你们的过犯。<sup class="versenum">15&nbsp;</sup>你们不饶恕人的过犯，你们的天父也必不饶恕你们的过犯。</p>

<h3>论禁食</h3>

<p><sup class="versenum">16&nbsp;</sup>&ldquo;你们禁食的时候，不可像那假冒为善的人，脸上带着愁容，因为他们把脸弄得难看，故意叫人看出他们是禁食。我实在告诉你们：他们已经得了他们的赏赐。<sup class="versenum">17&nbsp;</sup>你禁食的时候，要梳头洗脸，<sup class="versenum">18&nbsp;</sup>不叫人看出你禁食来，只叫你暗中的父看见，你父在暗中察看，必然报答你。</p>

<h3>论真财宝</h3>

<p><sup class="versenum">19&nbsp;</sup>&ldquo;不要为自己积攒财宝在地上，地上有虫子咬，能锈坏，也有贼挖窟窿来偷。<sup class="versenum">20&nbsp;</sup>只要积攒财宝在天上，天上没有虫子咬，不能锈坏，也没有贼挖窟窿来偷。<sup class="versenum">21&nbsp;</sup>因为你的财宝在哪里，你的心也在哪里。</p>

<h3>论心里的光</h3>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;眼睛就是身上的灯。你的眼睛若了亮，全身就光明；<sup class="versenum">23&nbsp;</sup>你的眼睛若昏花，全身就黑暗。你里头的光若黑暗了，那黑暗是何等大呢！</p>

<h3>勿虑衣食</h3>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;一个人不能侍奉两个主，不是恶这个爱那个，就是重这个轻那个。你们不能又侍奉神，又侍奉玛门。<sup class="versenum">25&nbsp;</sup>所以我告诉你们，不要为生命忧虑吃什么喝什么，为身体忧虑穿什么。生命不胜于饮食吗？身体不胜于衣裳吗？<sup class="versenum">26&nbsp;</sup>你们看那天上的飞鸟，也不种也不收，也不积蓄在仓里，你们的天父尚且养活它，你们不比飞鸟贵重得多吗？<sup class="versenum">27&nbsp;</sup>你们哪一个能用思虑使寿数多加一刻呢？<sup class="versenum">28&nbsp;</sup>何必为衣裳忧虑呢？你想野地里的百合花怎么长起来，它也不劳苦，也不纺线，<sup class="versenum">29&nbsp;</sup>然而我告诉你们：就是<u class="person underline">所罗门</u>极荣华的时候，他所穿戴的还不如这花一朵呢！<sup class="versenum">30&nbsp;</sup>你们这小信的人哪！野地里的草今天还在，明天就丢在炉里，神还给它这样的装饰，何况你们呢？<sup class="versenum">31&nbsp;</sup>所以，不要忧虑说吃什么、喝什么、穿什么。<sup class="versenum">32&nbsp;</sup>这都是外邦人所求的。你们需用的这一切东西，你们的天父是知道的。<sup class="versenum">33&nbsp;</sup>你们要先求他的国和他的义，这些东西都要加给你们了。<sup class="versenum">34&nbsp;</sup>所以，不要为明天忧虑，因为明天自有明天的忧虑。一天的难处一天当就够了。</p>

<h3>毋论断人</h3>

<p><sup class="versenum">1 </sup>&ldquo;你们不要论断人，免得你们被论断。<sup class="versenum">2&nbsp;</sup>因为你们怎样论断人，也必怎样被论断；你们用什么量器量给人，也必用什么量器量给你们。<sup class="versenum">3&nbsp;</sup>为什么看见你弟兄眼中有刺，却不想自己眼中有梁木呢？<sup class="versenum">4&nbsp;</sup>你自己眼中有梁木，怎能对你弟兄说&lsquo;容我去掉你眼中的刺&rsquo;呢？<sup class="versenum">5&nbsp;</sup>你这假冒为善的人！先去掉自己眼中的梁木，然后才能看得清楚，去掉你弟兄眼中的刺。</p>

<p><sup class="versenum">6&nbsp;</sup>&ldquo;不要把圣物给狗，也不要把你们的珍珠丢在猪前，恐怕它践踏了珍珠，转过来咬你们。</p>

<h3>求则得之</h3>

<p><sup class="versenum">7&nbsp;</sup>&ldquo;你们祈求，就给你们；寻找，就寻见；叩门，就给你们开门。<sup class="versenum">8&nbsp;</sup>因为凡祈求的，就得着；寻找的，就寻见；叩门的，就给他开门。<sup class="versenum">9&nbsp;</sup>你们中间谁有儿子求饼，反给他石头呢？<sup class="versenum">10&nbsp;</sup>求鱼，反给他蛇呢？<sup class="versenum">11&nbsp;</sup>你们虽然不好，尚且知道拿好东西给儿女，何况你们在天上的父，岂不更把好东西给求他的人吗？<sup class="versenum">12&nbsp;</sup>所以，无论何事，你们愿意人怎样待你们，你们也要怎样待人，因为这就是律法和先知的道理。</p>

<h3>两条门路</h3>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;你们要进窄门。因为引到灭亡，那门是宽的，路是大的，进去的人也多；<sup class="versenum">14&nbsp;</sup>引到永生，那门是窄的，路是小的，找着的人也少。</p>

<h3>两种果树</h3>

<p><sup class="versenum">15&nbsp;</sup>&ldquo;你们要防备假先知。他们到你们这里来，外面披着羊皮，里面却是残暴的狼。<sup class="versenum">16&nbsp;</sup>凭着他们的果子就可以认出他们来。荆棘上岂能摘葡萄呢？蒺藜里岂能摘无花果呢？<sup class="versenum">17&nbsp;</sup>这样，凡好树都结好果子，唯独坏树结坏果子。<sup class="versenum">18&nbsp;</sup>好树不能结坏果子，坏树不能结好果子。<sup class="versenum">19&nbsp;</sup>凡不结好果子的树就砍下来，丢在火里。<sup class="versenum">20&nbsp;</sup>所以，凭着他们的果子就可以认出他们来。<sup class="versenum">21&nbsp;</sup>凡称呼我&lsquo;主啊，主啊&rsquo;的人不能都进天国，唯独遵行我天父旨意的人才能进去。<sup class="versenum">22&nbsp;</sup>当那日，必有许多人对我说：&lsquo;主啊，主啊，我们不是奉你的名传道，奉你的名赶鬼，奉你的名行许多异能吗？&rsquo;<sup class="versenum">23&nbsp;</sup>我就明明地告诉他们说：&lsquo;我从来不认识你们。你们这些作恶的人，离开我去吧！&rsquo;</p>

<h3>两等根基</h3>

<p><sup class="versenum">24&nbsp;</sup>&ldquo;所以，凡听见我这话就去行的，好比一个聪明人，把房子盖在磐石上。<sup class="versenum">25&nbsp;</sup>雨淋，水冲，风吹，撞着那房子，房子总不倒塌，因为根基立在磐石上。<sup class="versenum">26&nbsp;</sup>凡听见我这话不去行的，好比一个无知的人，把房子盖在沙土上。<sup class="versenum">27&nbsp;</sup>雨淋，水冲，风吹，撞着那房子，房子就倒塌了，并且倒塌得很大。&rdquo;</p>

<p><sup class="versenum">28&nbsp;</sup>耶稣讲完了这些话，众人都稀奇他的教训，<sup class="versenum">29&nbsp;</sup>因为他教训他们正像有权柄的人，不像他们的文士。</p>

<p><sup class="versenum">1 </sup>耶稣下了山，有许多人跟着他。</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ 经文背诵</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="forward">路6:36</p>

<p class="forward bible">你们要慈悲，像你们的父慈悲一样。</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/content/M2/cmn/images/standard/mc2forward.png" />
<div class="lesson-subtitle"><span class="forward">向前看</span></div>
</div>

<h2 class="forward">福音预备</h2>

<ul class="forward">
	<li class="forward">耶稣教导门徒对待仇敌要有超越世人的爱和怜悯，这教导会否太难呢？在你的人际关系中有遇到这样的困难吗？</li>
	<li class="forward">关于不要论断人的教导对你有什么提醒？我们会不会很容易在这件事情上犯错？为什么？可以如何避免？</li>
	<li class="forward">在教会中，我们应该如何遵循耶稣的教导来处理人际关系？当教会挑选领袖或参与事奉的同工时，难免要对每一位候选人做一番严格的评估和筛选；这样做与&ldquo;论断人&rdquo;有何不同？为什么？</li>
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
	<li class="forward">在<span class="popup-link" @click = "popUp('pop4')"> 路加福音6:27-49</span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>论爱仇敌</h3>

	<p><sup class="versenum">27&nbsp;</sup>&ldquo;只是我告诉你们这听道的人：你们的仇敌，要爱他；恨你们的，要待他好。<sup class="versenum">28&nbsp;</sup>咒诅你们的，要为他祝福；凌辱你们的，要为他祷告。<sup class="versenum">29&nbsp;</sup>有人打你这边的脸，连那边的脸也由他打；有人夺你的外衣，连里衣也由他拿去。<sup class="versenum">30&nbsp;</sup>凡求你的，就给他；有人夺你的东西去，不用再要回来。<sup class="versenum">31&nbsp;</sup>你们愿意人怎样待你们，你们也要怎样待人。<sup class="versenum">32&nbsp;</sup>你们若单爱那爱你们的人，有什么可酬谢的呢？就是罪人也爱那爱他们的人。<sup class="versenum">33&nbsp;</sup>你们若善待那善待你们的人，有什么可酬谢的呢？就是罪人也是这样行。<sup class="versenum">34&nbsp;</sup>你们若借给人，指望从他收回，有什么可酬谢的呢？就是罪人也借给罪人，要如数收回。<sup class="versenum">35&nbsp;</sup>你们倒要爱仇敌，也要善待他们，并要借给人不指望偿还。你们的赏赐就必大了，你们也必做至高者的儿子，因为他恩待那忘恩的和作恶的。<sup class="versenum">36&nbsp;</sup>你们要慈悲，像你们的父慈悲一样。<sup class="versenum">37&nbsp;</sup>你们不要论断人，就不被论断。你们不要定人的罪，就不被定罪。你们要饶恕人，就必蒙饶恕。<sup class="versenum">38&nbsp;</sup>你们要给人，就必有给你们的，并且用十足的升斗，连摇带按、上尖下流地倒在你们怀里。因为你们用什么量器量给人，也必用什么量器量给你们。&rdquo;</p>

	<h3>责人之心责己</h3>

	<p><sup class="versenum">39&nbsp;</sup>耶稣又用比喻对他们说：&ldquo;瞎子岂能领瞎子？两个人不是都要掉在坑里吗？<sup class="versenum">40&nbsp;</sup>学生不能高过先生，凡学成了的不过和先生一样。<sup class="versenum">41&nbsp;</sup>为什么看见你弟兄眼中有刺，却不想自己眼中有梁木呢？<sup class="versenum">42&nbsp;</sup>你不见自己眼中有梁木，怎能对你弟兄说&lsquo;容我去掉你眼中的刺&rsquo;呢？你这假冒为善的人！先去掉自己眼中的梁木，然后才能看得清楚，去掉你弟兄眼中的刺。</p>

	<h3>两种果树</h3>

	<p><sup class="versenum">43&nbsp;</sup>&ldquo;因为没有好树结坏果子，也没有坏树结好果子。<sup class="versenum">44&nbsp;</sup>凡树木看果子就可以认出它来。人不是从荆棘上摘无花果，也不是从蒺藜里摘葡萄。<sup class="versenum">45&nbsp;</sup>善人从他心里所存的善就发出善来，恶人从他心里所存的恶就发出恶来；因为心里所充满的，口里就说出来。</p>

	<p><sup class="versenum">46&nbsp;</sup>&ldquo;你们为什么称呼我&lsquo;主啊，主啊&rsquo;，却不遵我的话行呢？<sup class="versenum">47&nbsp;</sup>凡到我这里来，听见我的话就去行的，我要告诉你们他像什么人。<sup class="versenum">48&nbsp;</sup>他像一个人盖房子，深深地挖地，把根基安在磐石上，到发大水的时候，水冲那房子，房子总不能摇动，因为根基立在磐石上。<sup class="versenum">49&nbsp;</sup>唯有听见不去行的，就像一个人在土地上盖房子，没有根基，水一冲，随即倒塌了，并且那房子坏得很大。&rdquo;</p>
	<!-- end bible --></div>
	主耶稣的教导中，有哪一项是你需要操练有耶稣生命和品格的，把它记下。这周在生活中，祷告神并依靠圣灵结出这些生命的特质。</li>
	<li class="forward">我们的属灵生命是无法隐藏的，它会从我们的言行中透露出来。这周花些时间检视自己的生命，是否习惯将&ldquo;感谢主&rdquo;挂在嘴边，却没有遵照主的教导去做。</li>
	<li class="forward">求圣灵帮助你省察生命中是否有不能饶恕的对象，并向主倾诉缘由以及不能饶恕的原因。求主亲自医治你的伤痕，并加力量给你。为对方祷告，求主为你们预备最佳修复的时机，心已备好并选择彼此饶恕，经历神真实的医治与释放。</li>
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

<p>慈悲的天父，感谢谢祢以永远的爱来爱我们，并完全接纳我们的本相。天父啊，我们承认在生活中有很多不讨祢喜悦的地方，很多时候，我们心里缺乏爱，不能饶恕得罪我们的人；心里也常常批评论断人，我们甚至没有爱教会和敬重祢的仆人。我们得罪神也得罪人，求天父赦免我们的罪。天父啊，求祢帮助我们常存谦卑仁爱的心，让祢居首位；饶恕得罪我们的人，我们也请求他人的饶恕并给予赔偿；在待人接物上，我们愿意学习凡事尊荣祢的圣名，讨祢的喜悦。感谢天父垂听我们的祷告，奉主耶稣宝贵的圣名求。阿们！</p>


<!-- begin sdcard languageFooterDiscrete -->
<!-- end sdcard languageFooterDiscrete -->
</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->